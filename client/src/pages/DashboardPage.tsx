import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Archive,
  ArrowUpRight,
  Bell,
  Building2,
  CalendarClock,
  CheckCircle2,
  Clock3,
  Copy,
  Download,
  Inbox,
  LayoutDashboard,
  Lock,
  LogOut,
  Mail,
  MessageSquare,
  Phone,
  RefreshCw,
  Search,
  ShieldCheck,
  Trash2,
  UserCheck,
} from "lucide-react";
import {
  indexedDBLocalPersistence,
  onAuthStateChanged,
  setPersistence,
  signInWithEmailAndPassword,
  signOut,
  type User,
} from "firebase/auth";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { auth } from "../lib/firebase";
import { isSuperAdminEmail, SUPER_ADMIN_EMAIL } from "../lib/superAdmin";
import {
  deleteInquiry,
  firestoreErrorMessage,
  Inquiry,
  InquiryStatus,
  subscribeInquiries,
  updateInquiryFollowUp,
  updateInquiryNote,
  updateInquiryStatus,
} from "../services/messageService";
import SEOHead from "../components/SEOHead";

type ConsoleView = "overview" | "inbox" | "board";

const STATUS_LABEL: Record<InquiryStatus, string> = {
  new: "Yeni",
  contacted: "Görüşüldü",
  quoted: "Teklif verildi",
  archived: "Arşiv",
};

const SOURCE_LABEL: Record<string, string> = {
  contact: "İletişim formu",
  rfq: "Teklif formu",
  configurator: "3D konfigüratör",
};

const NEXT_STATUS: Record<InquiryStatus, InquiryStatus | null> = {
  new: "contacted",
  contacted: "quoted",
  quoted: "archived",
  archived: null,
};

function formatWhen(iso?: string) {
  const time = iso ? Date.parse(iso) : NaN;
  if (!Number.isFinite(time)) return "Tarih yok";
  return new Date(time).toLocaleString("tr-TR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function relativeTime(iso?: string) {
  const time = iso ? Date.parse(iso) : NaN;
  if (!Number.isFinite(time)) return "Tarih yok";
  const minutes = Math.round((Date.now() - time) / 60000);
  if (minutes < 1) return "Az önce";
  if (minutes < 60) return `${minutes} dk önce`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `${hours} sa önce`;
  const days = Math.round(hours / 24);
  if (days < 14) return `${days} gün önce`;
  return formatWhen(iso);
}

function dateInputToIso(value: string) {
  const [year, month, day] = value.split("-").map(Number);
  if (!year || !month || !day) return null;
  return new Date(year, month - 1, day, 12, 0, 0).toISOString();
}

function dayKey(date: Date) {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
}

function inquiryDay(iso: string) {
  const time = Date.parse(iso);
  if (!Number.isFinite(time)) return "";
  return dayKey(new Date(time));
}

function withinDays(iso: string, days: number, offset = 0) {
  const time = Date.parse(iso);
  if (!Number.isFinite(time)) return false;
  const start = new Date();
  start.setHours(0, 0, 0, 0);
  start.setDate(start.getDate() - (days - 1) - offset);
  const end = new Date();
  end.setHours(23, 59, 59, 999);
  end.setDate(end.getDate() - offset);
  return time >= start.getTime() && time <= end.getTime();
}

function sourceLabel(item: Inquiry) {
  if (item.source && SOURCE_LABEL[item.source]) return SOURCE_LABEL[item.source];
  return item.type === "contact" ? "İletişim formu" : "Teklif talebi";
}

function countryLabel(value: string) {
  const clean = value.split("(")[0]?.trim();
  return clean || "Belirtilmedi";
}

function buildDailySeries(inquiries: Inquiry[]) {
  const days = Array.from({ length: 14 }, (_, index) => {
    const date = new Date();
    date.setHours(12, 0, 0, 0);
    date.setDate(date.getDate() - (13 - index));
    return {
      key: dayKey(date),
      label: date.toLocaleDateString("tr-TR", { day: "2-digit", month: "short" }),
      toplam: 0,
      iletisim: 0,
      teklif: 0,
    };
  });
  const byKey = new Map(days.map((day) => [day.key, day]));
  inquiries.forEach((item) => {
    const bucket = byKey.get(inquiryDay(item.createdAt));
    if (!bucket) return;
    bucket.toplam += 1;
    if (item.type === "contact") bucket.iletisim += 1;
    else bucket.teklif += 1;
  });
  return days;
}

function downloadCsv(inquiries: Inquiry[]) {
  const headers = ["Tarih", "Kaynak", "Durum", "Takip", "İsim", "E-posta", "Telefon", "Şirket", "Ülke", "Model", "Alan m2", "Mesaj", "Yönetici notu"];
  const escape = (value: string | number | undefined) => `"${String(value ?? "").replace(/"/g, '""')}"`;
  const rows = inquiries.map((item) =>
    [
      formatWhen(item.createdAt),
      sourceLabel(item),
      STATUS_LABEL[item.status],
      item.followUpAt ? formatWhen(item.followUpAt) : "",
      item.name,
      item.email,
      item.phone || "",
      item.company || "",
      item.country,
      item.model || "",
      item.areaM2 ?? "",
      item.message,
      item.adminNote || "",
    ].map(escape).join(",")
  );
  const blob = new Blob(["\uFEFF" + [headers.join(","), ...rows].join("\n")], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `structiva-talepler-${dayKey(new Date())}.csv`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

export default function DashboardPage() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [authChecking, setAuthChecking] = useState(true);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [live, setLive] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [feedVersion, setFeedVersion] = useState(0);

  const [view, setView] = useState<ConsoleView>("overview");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [filterType, setFilterType] = useState<string>("all");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [noteDraft, setNoteDraft] = useState("");
  const [followUpDraft, setFollowUpDraft] = useState("");
  const [actionError, setActionError] = useState<string | null>(null);
  const [busy, setBusy] = useState<string | null>(null);
  const [arrivals, setArrivals] = useState<Inquiry[]>([]);
  const seenIds = useRef<Set<string> | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user && !isSuperAdminEmail(user.email)) {
        await signOut(auth);
        setCurrentUser(null);
        setLoginError("Bu panel yalnızca süper yönetici hesabına açıktır.");
        setAuthChecking(false);
        return;
      }
      setCurrentUser(user);
      setAuthChecking(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!currentUser) {
      setInquiries([]);
      setLoading(false);
      setLive(false);
      return;
    }
    setLoading(true);
    const unsubscribe = subscribeInquiries(
      (data) => {
        setInquiries(data);
        setLoading(false);
        setLive(true);
        setLoadError(null);
      },
      (error) => {
        setLoading(false);
        setLive(false);
        setLoadError(error.message);
      }
    );
    return () => unsubscribe();
  }, [currentUser, feedVersion]);

  const selected = inquiries.find((item) => item.id === selectedId) || null;

  useEffect(() => {
    if (!currentUser || loading) return;
    if (seenIds.current === null) {
      seenIds.current = new Set(inquiries.map((item) => item.id));
      return;
    }
    const fresh = inquiries.filter((item) => !seenIds.current?.has(item.id));
    if (fresh.length) setArrivals(fresh);
    seenIds.current = new Set(inquiries.map((item) => item.id));
  }, [inquiries, loading, currentUser]);

  useEffect(() => {
    setNoteDraft(selected?.adminNote || "");
  }, [selected?.id, selected?.adminNote]);

  useEffect(() => {
    setFollowUpDraft(selected?.followUpAt ? inquiryDay(selected.followUpAt) : "");
  }, [selected?.id, selected?.followUpAt]);

  const filtered = useMemo(() => {
    const needle = search.trim().toLowerCase();
    return inquiries.filter((item) => {
      const matchesStatus = filterStatus === "all" || item.status === filterStatus;
      const matchesType =
        filterType === "all" ||
        item.source === filterType ||
        (filterType === "contact" && item.type === "contact") ||
        (filterType === "quote" && item.type === "quote");
      const matchesSearch =
        !needle ||
        item.name.toLowerCase().includes(needle) ||
        item.email.toLowerCase().includes(needle) ||
        (item.company || "").toLowerCase().includes(needle) ||
        (item.model || "").toLowerCase().includes(needle) ||
        item.country.toLowerCase().includes(needle) ||
        item.message.toLowerCase().includes(needle);
      return matchesStatus && matchesType && matchesSearch;
    });
  }, [inquiries, filterStatus, filterType, search]);

  const visible = useMemo(() => {
    const list = [...filtered];
    list.sort((a, b) => {
      const diff = (Date.parse(a.createdAt) || 0) - (Date.parse(b.createdAt) || 0);
      return sortOrder === "newest" ? -diff : diff;
    });
    return list;
  }, [filtered, sortOrder]);

  const contactItems = inquiries.filter((item) => item.type === "contact");
  const quoteItems = inquiries.filter((item) => item.type === "quote");
  const newCount = inquiries.filter((item) => item.status === "new").length;
  const quotedArea = quoteItems.reduce((sum, item) => sum + (item.areaM2 || 0), 0);
  const last7 = inquiries.filter((item) => withinDays(item.createdAt, 7)).length;
  const prev7 = inquiries.filter((item) => withinDays(item.createdAt, 7, 7)).length;
  const todayKey = dayKey(new Date());
  const followUpsToday = inquiries.filter((item) => item.status !== "archived" && item.followUpAt && inquiryDay(item.followUpAt) === todayKey);
  const followUpsOverdue = inquiries.filter((item) => item.status !== "archived" && item.followUpAt && inquiryDay(item.followUpAt) < todayKey);
  const series = useMemo(() => buildDailySeries(inquiries), [inquiries]);
  const hasSeries = series.some((day) => day.toplam > 0);

  const countries = useMemo(() => {
    const counts = new Map<string, number>();
    inquiries.forEach((item) => {
      const label = countryLabel(item.country);
      counts.set(label, (counts.get(label) || 0) + 1);
    });
    return Array.from(counts.entries()).sort((a, b) => b[1] - a[1]).slice(0, 6);
  }, [inquiries]);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoginError("");
    if (!isSuperAdminEmail(loginEmail)) {
      setLoginError("Bu panel yalnızca süper yönetici hesabına açıktır.");
      return;
    }
    setIsLoggingIn(true);
    try {
      await setPersistence(auth, indexedDBLocalPersistence);
      await signInWithEmailAndPassword(auth, loginEmail.trim(), loginPassword);
    } catch (error: unknown) {
      const code = typeof error === "object" && error && "code" in error ? String((error as { code?: string }).code) : "";
      if (code === "auth/invalid-credential" || code === "auth/wrong-password" || code === "auth/user-not-found" || code === "auth/invalid-email") {
        setLoginError("E-posta veya şifre hatalı.");
      } else if (code === "auth/too-many-requests") {
        setLoginError("Çok fazla deneme yapıldı. Bir süre sonra tekrar deneyin.");
      } else if (code === "auth/operation-not-allowed") {
        setLoginError("Firebase projesinde e-posta ile giriş kapalı.");
      } else {
        setLoginError("Giriş tamamlanamadı. Bağlantıyı kontrol edip tekrar deneyin.");
      }
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleStatus = async (id: string, status: InquiryStatus) => {
    setBusy(`status:${id}`);
    setActionError(null);
    try {
      await updateInquiryStatus(id, status);
    } catch (error) {
      setActionError(firestoreErrorMessage(error));
    } finally {
      setBusy(null);
    }
  };

  const handleSaveFollowUp = async () => {
    if (!selected) return;
    setBusy(`follow:${selected.id}`);
    setActionError(null);
    try {
      await updateInquiryFollowUp(selected.id, followUpDraft ? dateInputToIso(followUpDraft) : null);
    } catch (error) {
      setActionError(firestoreErrorMessage(error));
    } finally {
      setBusy(null);
    }
  };

  const handleSaveNote = async () => {
    if (!selected) return;
    setBusy(`note:${selected.id}`);
    setActionError(null);
    try {
      await updateInquiryNote(selected.id, noteDraft);
    } catch (error) {
      setActionError(firestoreErrorMessage(error));
    } finally {
      setBusy(null);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Bu talep Firestore'dan silinecek. Devam edilsin mi?")) return;
    setBusy(`delete:${id}`);
    setActionError(null);
    try {
      await deleteInquiry(id);
      if (selectedId === id) setSelectedId(null);
    } catch (error) {
      setActionError(firestoreErrorMessage(error));
    } finally {
      setBusy(null);
    }
  };

  if (authChecking) {
    return (
      <Shell>
        <div className="min-h-screen flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 rounded-full border-2 border-amber-500/20 border-t-amber-500 animate-spin" />
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">Oturum kontrol ediliyor</span>
          </div>
        </div>
      </Shell>
    );
  }

  if (!currentUser) {
    return (
      <Shell title="Yönetici Girişi | STRUCTIVA" description="STRUCTIVA süper yönetici girişi">
        <div className="min-h-screen flex items-center justify-center px-4 py-16">
          <div className="w-full max-w-md rounded-3xl bg-[#0e1b27] border border-amber-500/30 p-8 sm:p-10 shadow-2xl">
            <div className="text-center mb-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/15 border border-amber-500/40 text-amber-400 mx-auto mb-3">
                <Lock size={28} />
              </div>
              <h1 className="text-xl font-black text-white tracking-wide uppercase">Süper yönetici girişi</h1>
              <p className="text-xs text-slate-400 mt-2">Talepler Firestore üzerinde tutulur. Oturum localStorage kullanmaz.</p>
            </div>
            {loginError && (
              <div className="mb-4 p-3 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs text-center font-medium">
                {loginError}
              </div>
            )}
            <form onSubmit={handleLogin} className="space-y-4">
              <label className="block">
                <span className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">E-posta</span>
                <input
                  type="email"
                  required
                  autoComplete="username"
                  value={loginEmail}
                  onChange={(event) => setLoginEmail(event.target.value)}
                  placeholder={SUPER_ADMIN_EMAIL}
                  className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none focus:border-amber-400"
                />
              </label>
              <label className="block">
                <span className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">Şifre</span>
                <input
                  type="password"
                  required
                  autoComplete="current-password"
                  value={loginPassword}
                  onChange={(event) => setLoginPassword(event.target.value)}
                  className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 text-sm text-white outline-none focus:border-amber-400"
                />
              </label>
              <button
                type="submit"
                disabled={isLoggingIn}
                className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-[#0f1d2a] font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isLoggingIn ? <span className="w-4 h-4 rounded-full border-2 border-[#0f1d2a]/30 border-t-[#0f1d2a] animate-spin" /> : <ShieldCheck size={16} />}
                <span>{isLoggingIn ? "Doğrulanıyor" : "Giriş yap"}</span>
              </button>
            </form>
          </div>
        </div>
      </Shell>
    );
  }

  return (
    <Shell>
      <div className="min-h-screen">
        <header className="border-b border-white/10 bg-[#0c1722]/90 backdrop-blur sticky top-0 z-30">
          <div className="mx-auto max-w-[1500px] px-4 sm:px-6 py-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 px-2.5 py-1 text-[11px] font-bold">
                  <ShieldCheck size={13} /> Süper yönetici
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 text-slate-300 border border-white/10 px-2.5 py-1 text-[11px]">
                  <UserCheck size={13} /> {currentUser.email}
                </span>
                <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] border ${live ? "bg-emerald-500/15 text-emerald-300 border-emerald-500/30" : "bg-rose-500/15 text-rose-300 border-rose-500/30"}`}>
                  <span className={`h-1.5 w-1.5 rounded-full ${live ? "bg-emerald-400 animate-pulse" : "bg-rose-400"}`} />
                  {live ? "Firestore canlı" : "Bağlantı yok"}
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl font-black tracking-tight">Operasyon paneli</h1>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <a href="/tr" className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-300">Siteye dön</a>
              <button onClick={() => setFeedVersion((value) => value + 1)} className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-300">
                <RefreshCw size={14} className={loading ? "animate-spin" : ""} /> Yenile
              </button>
              <button onClick={() => downloadCsv(visible)} className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-amber-500/15 border border-amber-500/40 text-xs font-bold text-amber-200">
                <Download size={14} /> CSV
              </button>
              <button onClick={() => signOut(auth)} className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-rose-500/15 border border-rose-500/40 text-xs font-bold text-rose-200">
                <LogOut size={14} /> Çıkış
              </button>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 py-6">
          <div className="flex flex-wrap gap-2 mb-6">
            <ViewButton active={view === "overview"} onClick={() => setView("overview")} icon={<LayoutDashboard size={15} />} label="Genel bakış" />
            <ViewButton active={view === "inbox"} onClick={() => setView("inbox")} icon={<Inbox size={15} />} label={`Gelen talepler (${inquiries.length})`} />
            <ViewButton active={view === "board"} onClick={() => setView("board")} icon={<Archive size={15} />} label="Durum panosu" />
          </div>

          {(loadError || actionError) && (
            <div className="mb-5 rounded-2xl border border-rose-500/40 bg-rose-500/10 px-4 py-3 text-sm text-rose-200">
              {loadError || actionError}
            </div>
          )}

          {arrivals.length > 0 && (
            <div className="mb-5 rounded-2xl border border-sky-400/40 bg-sky-500/10 px-4 py-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-2 text-sm text-sky-100">
                <Bell size={16} className="mt-0.5 shrink-0" />
                <span>
                  {arrivals.length} yeni kayıt düştü: {arrivals.map((item) => item.name).join(", ")}
                </span>
              </div>
              <button
                onClick={() => {
                  setSelectedId(arrivals[0]?.id || null);
                  setView("inbox");
                  setFilterType(arrivals[0]?.type === "contact" ? "contact" : "all");
                  setArrivals([]);
                }}
                className="px-3 py-2 rounded-xl bg-sky-500 text-[#041018] text-xs font-bold"
              >
                Kaydı aç
              </button>
            </div>
          )}

          <section className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
            <Metric label="Toplam talep" value={inquiries.length} hint="Firestore kayıtları" />
            <Metric label="Yeni" value={newCount} hint="İşlem bekleyen" tone="amber" />
            <Metric label="İletişim formu" value={contactItems.length} hint="Doğrudan mesajlar" tone="sky" onClick={() => { setView("inbox"); setFilterType("contact"); }} />
            <Metric label="Teklif" value={quoteItems.length} hint="RFQ ve konfigüratör" tone="emerald" onClick={() => { setView("inbox"); setFilterType("quote"); }} />
            <Metric label="Son 7 gün" value={last7} hint={`Önceki 7 gün: ${prev7}`} />
            <Metric label="Takip" value={followUpsToday.length + followUpsOverdue.length} hint={followUpsOverdue.length ? `${followUpsOverdue.length} gecikti` : "Bugün ve geciken"} tone="amber" onClick={() => { setView("inbox"); setFilterStatus("all"); setFilterType("all"); }} />
            <Metric label="Teklif alanı" value={quotedArea ? `${quotedArea.toLocaleString("tr-TR")} m²` : "0 m²"} hint="Kayıtlı RFQ alanları" />
          </section>

          {view === "overview" && (
            <div className="grid grid-cols-1 xl:grid-cols-5 gap-4">
              <div className="xl:col-span-3 rounded-2xl bg-[#0f1d2a] border border-white/10 p-5">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-sm font-bold">Son 14 gün</h2>
                    <p className="text-xs text-slate-400">Günlük kayıt sayısı, iletişim ve teklif ayrımıyla</p>
                  </div>
                </div>
                {hasSeries ? (
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={series}>
                        <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
                        <XAxis dataKey="label" tick={{ fill: "#94a3b8", fontSize: 11 }} axisLine={false} tickLine={false} />
                        <YAxis allowDecimals={false} domain={[0, (max: number) => Math.max(1, Math.ceil(max))]} tick={{ fill: "#94a3b8", fontSize: 11 }} axisLine={false} tickLine={false} width={28} />
                        <Tooltip contentStyle={{ background: "#0c1722", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, fontSize: 12 }} />
                        <Area type="monotone" dataKey="iletisim" name="İletişim" stroke="#38bdf8" fill="#38bdf8" fillOpacity={0.18} strokeWidth={2} />
                        <Area type="monotone" dataKey="teklif" name="Teklif" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.16} strokeWidth={2} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                ) : (
                  <EmptyState title="Bu aralıkta kayıt yok" text="İletişim formundan gelen başvuru, grafikte aynı gün içinde görünür." />
                )}
              </div>

              <div className="xl:col-span-2 space-y-4">
                <div className="rounded-2xl bg-[#0f1d2a] border border-white/10 p-5">
                  <h2 className="text-sm font-bold mb-3">Durum dağılımı</h2>
                  <div className="space-y-3">
                    {(Object.keys(STATUS_LABEL) as InquiryStatus[]).map((status) => {
                      const count = inquiries.filter((item) => item.status === status).length;
                      const width = inquiries.length ? Math.round((count / inquiries.length) * 100) : 0;
                      return (
                        <button key={status} onClick={() => { setView("inbox"); setFilterStatus(status); }} className="w-full text-left">
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-slate-300">{STATUS_LABEL[status]}</span>
                            <span className="font-mono text-white">{count}</span>
                          </div>
                          <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                            <div className="h-full bg-amber-400" style={{ width: `${width}%` }} />
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
                <div className="rounded-2xl bg-[#0f1d2a] border border-white/10 p-5">
                  <h2 className="text-sm font-bold mb-3">Ülkeler</h2>
                  {countries.length === 0 ? (
                    <p className="text-xs text-slate-400">Ülke dağılımı, ilk gerçek taleple birlikte oluşur.</p>
                  ) : (
                    <ul className="space-y-2">
                      {countries.map(([name, count]) => (
                        <li key={name} className="flex items-center justify-between text-sm">
                          <span className="text-slate-300 truncate pr-3">{name}</span>
                          <span className="font-mono text-amber-300">{count}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              <div className="xl:col-span-5 rounded-2xl bg-[#0f1d2a] border border-sky-500/20 p-5">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div>
                    <h2 className="text-sm font-bold text-sky-300">İletişim formundan gelenler</h2>
                    <p className="text-xs text-slate-400">Yalnızca sitedeki iletişim formunun yazdığı kayıtlar</p>
                  </div>
                  <button onClick={() => { setView("inbox"); setFilterType("contact"); setFilterStatus("all"); }} className="text-xs font-bold text-sky-300 inline-flex items-center gap-1">
                    Tümünü aç <ArrowUpRight size={14} />
                  </button>
                </div>
                {contactItems.length === 0 ? (
                  <EmptyState title="İletişim talebi yok" text="Form gönderildiğinde kayıt burada, ek bir yenileme beklemeden listelenir." />
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {contactItems.slice(0, 4).map((item) => (
                      <InquiryRow key={item.id} item={item} active={item.id === selectedId} onOpen={() => { setSelectedId(item.id); setView("inbox"); setFilterType("contact"); }} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {view === "inbox" && (
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-4">
              <div className="xl:col-span-7 space-y-3">
                <FilterBar
                  filterStatus={filterStatus}
                  filterType={filterType}
                  sortOrder={sortOrder}
                  search={search}
                  contactCount={contactItems.length}
                  quoteCount={quoteItems.length}
                  onStatus={setFilterStatus}
                  onType={setFilterType}
                  onSort={setSortOrder}
                  onSearch={setSearch}
                />
                {loading && inquiries.length === 0 ? (
                  <EmptyState title="Kayıtlar yükleniyor" text="Firestore dinleniyor." />
                ) : visible.length === 0 ? (
                  <EmptyState title="Eşleşen talep yok" text="Filtreyi temizleyin veya yeni bir iletişim formu gönderiminin düşmesini bekleyin." />
                ) : (
                  visible.map((item) => (
                    <InquiryRow key={item.id} item={item} active={item.id === selectedId} onOpen={() => setSelectedId(item.id)} />
                  ))
                )}
              </div>
              <div className="xl:col-span-5">
                <DetailPanel
                  item={selected}
                  noteDraft={noteDraft}
                  followUpDraft={followUpDraft}
                  busy={busy}
                  onNote={setNoteDraft}
                  onFollowUp={setFollowUpDraft}
                  onSaveNote={handleSaveNote}
                  onSaveFollowUp={handleSaveFollowUp}
                  onStatus={handleStatus}
                  onDelete={handleDelete}
                  onClose={() => setSelectedId(null)}
                />
              </div>
            </div>
          )}

          {view === "board" && (
            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-3">
              {(Object.keys(STATUS_LABEL) as InquiryStatus[]).map((status) => {
                const column = inquiries.filter((item) => item.status === status);
                return (
                  <div key={status} className="rounded-2xl bg-[#0c1722] border border-white/10 p-3 min-h-[320px]">
                    <div className="flex items-center justify-between px-1 mb-3">
                      <h2 className="text-xs font-bold uppercase tracking-wider text-slate-300">{STATUS_LABEL[status]}</h2>
                      <span className="text-xs font-mono text-amber-300">{column.length}</span>
                    </div>
                    <div className="space-y-2">
                      {column.length === 0 && <p className="text-xs text-slate-500 px-1">Bu durumda kayıt yok.</p>}
                      {column.map((item) => {
                        const next = NEXT_STATUS[item.status];
                        return (
                          <div key={item.id} className="rounded-xl bg-[#0f1d2a] border border-white/10 p-3">
                            <button onClick={() => { setSelectedId(item.id); setView("inbox"); }} className="w-full text-left">
                              <div className="text-[10px] uppercase tracking-wider text-slate-400 mb-1">{sourceLabel(item)}</div>
                              <div className="text-sm font-bold text-white">{item.name}</div>
                              <div className="text-xs text-slate-400 truncate">{item.company || item.email}</div>
                              <div className="text-[11px] text-slate-500 mt-2">{relativeTime(item.createdAt)}</div>
                              {item.followUpAt && <div className="text-[11px] text-amber-300 mt-1">Takip {formatWhen(item.followUpAt)}</div>}
                            </button>
                            {next && (
                              <button
                                disabled={busy === `status:${item.id}`}
                                onClick={() => handleStatus(item.id, next)}
                                className="mt-3 w-full py-1.5 rounded-lg bg-white/5 text-[11px] font-bold text-slate-200"
                              >
                                {STATUS_LABEL[next]} olarak işaretle
                              </button>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </Shell>
  );
}

function Shell({ children, title = "Yönetici Paneli | STRUCTIVA", description = "STRUCTIVA operasyon paneli" }: { children: React.ReactNode; title?: string; description?: string }) {
  return (
    <div className="bg-[#09131c] text-white min-h-screen">
      <SEOHead title={title} description={description} robots="noindex, nofollow" />
      {children}
    </div>
  );
}

function ViewButton({ active, onClick, icon, label }: { active: boolean; onClick: () => void; icon: React.ReactNode; label: string }) {
  return (
    <button onClick={onClick} className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold border ${active ? "bg-amber-500 text-[#0f1d2a] border-amber-400" : "bg-white/5 text-slate-300 border-white/10"}`}>
      {icon}
      {label}
    </button>
  );
}

function Metric({ label, value, hint, tone = "slate", onClick }: { label: string; value: string | number; hint: string; tone?: "slate" | "amber" | "sky" | "emerald"; onClick?: () => void }) {
  const toneClass = {
    slate: "border-white/10",
    amber: "border-amber-500/40",
    sky: "border-sky-500/40",
    emerald: "border-emerald-500/40",
  }[tone];
  const valueClass = {
    slate: "text-white",
    amber: "text-amber-300",
    sky: "text-sky-300",
    emerald: "text-emerald-300",
  }[tone];
  const Tag = onClick ? "button" : "div";
  return (
    <Tag onClick={onClick} className={`rounded-2xl bg-[#0f1d2a] border ${toneClass} p-4 text-left ${onClick ? "hover:bg-white/5" : ""}`}>
      <span className="block text-[11px] uppercase tracking-wider text-slate-400 mb-1">{label}</span>
      <span className={`block text-2xl font-black font-mono ${valueClass}`}>{value}</span>
      <span className="block text-[11px] text-slate-500 mt-1">{hint}</span>
    </Tag>
  );
}

function FilterBar({
  filterStatus,
  filterType,
  sortOrder,
  search,
  contactCount,
  quoteCount,
  onStatus,
  onType,
  onSort,
  onSearch,
}: {
  filterStatus: string;
  filterType: string;
  sortOrder: "newest" | "oldest";
  search: string;
  contactCount: number;
  quoteCount: number;
  onStatus: (value: string) => void;
  onType: (value: string) => void;
  onSort: (value: "newest" | "oldest") => void;
  onSearch: (value: string) => void;
}) {
  const statuses = [{ id: "all", label: "Tümü" }, ...Object.entries(STATUS_LABEL).map(([id, label]) => ({ id, label }))];
  const types = [
    { id: "all", label: "Tüm kaynaklar" },
    { id: "contact", label: `İletişim (${contactCount})` },
    { id: "rfq", label: "Teklif formu" },
    { id: "configurator", label: "Konfigüratör" },
    { id: "quote", label: `Tüm teklif (${quoteCount})` },
  ];
  return (
    <div className="rounded-2xl bg-[#0f1d2a] border border-white/10 p-3 space-y-3">
      <div className="flex flex-wrap gap-1.5">
        {statuses.map((item) => (
          <button key={item.id} onClick={() => onStatus(item.id)} className={`px-2.5 py-1.5 rounded-lg text-[11px] font-bold ${filterStatus === item.id ? "bg-amber-500 text-[#0f1d2a]" : "bg-black/30 text-slate-300"}`}>
            {item.label}
          </button>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="flex flex-wrap gap-1.5">
          {types.map((item) => (
            <button key={item.id} onClick={() => onType(item.id)} className={`px-2.5 py-1.5 rounded-lg text-[11px] font-bold ${filterType === item.id ? "bg-sky-500 text-white" : "bg-black/30 text-slate-300"}`}>
              {item.label}
            </button>
          ))}
        </div>
        <div className="relative flex-1">
          <Search size={14} className="absolute left-3 top-2.5 text-slate-500" />
          <input value={search} onChange={(event) => onSearch(event.target.value)} placeholder="İsim, e-posta, şirket, mesaj" className="w-full rounded-xl bg-black/30 border border-white/10 pl-8 pr-3 py-2 text-xs outline-none focus:border-amber-400" />
        </div>
        <button onClick={() => onSort(sortOrder === "newest" ? "oldest" : "newest")} className="px-2.5 py-1.5 rounded-lg text-[11px] font-bold bg-black/30 text-slate-300">
          {sortOrder === "newest" ? "En yeni" : "En eski"}
        </button>
      </div>
    </div>
  );
}

function InquiryRow({ item, active, onOpen }: { item: Inquiry; active: boolean; onOpen: () => void }) {
  return (
    <button onClick={onOpen} className={`w-full text-left rounded-2xl border p-4 ${active ? "bg-white/10 border-amber-400" : "bg-[#0f1d2a] border-white/10 hover:border-white/20"}`}>
      <div className="flex items-start justify-between gap-3 mb-2">
        <div>
          <div className="flex flex-wrap items-center gap-1.5 mb-1">
            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${item.type === "contact" ? "bg-sky-500/15 text-sky-300" : "bg-amber-500/15 text-amber-300"}`}>{sourceLabel(item)}</span>
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 text-slate-300">{STATUS_LABEL[item.status]}</span>
          </div>
          <div className="font-bold text-white">{item.name}{item.company ? <span className="font-normal text-slate-400"> · {item.company}</span> : null}</div>
        </div>
        <div className="text-right text-[11px] text-slate-400 shrink-0">{formatWhen(item.createdAt)}</div>
      </div>
      <p className="text-xs text-slate-300 line-clamp-2">{item.message || "Mesaj metni yok."}</p>
      <div className="mt-3 flex flex-wrap gap-3 text-[11px] text-slate-400">
        <span>{countryLabel(item.country)}</span>
        {item.phone && <span>{item.phone}</span>}
        {item.areaM2 ? <span>{item.areaM2} m²</span> : null}
      </div>
    </button>
  );
}

function DetailPanel({
  item,
  noteDraft,
  busy,
  onNote,
  followUpDraft,
  onFollowUp,
  onSaveNote,
  onSaveFollowUp,
  onStatus,
  onDelete,
  onClose,
}: {
  item: Inquiry | null;
  noteDraft: string;
  busy: string | null;
  onNote: (value: string) => void;
  followUpDraft: string;
  onFollowUp: (value: string) => void;
  onSaveNote: () => void;
  onSaveFollowUp: () => void;
  onStatus: (id: string, status: InquiryStatus) => void;
  onDelete: (id: string) => void;
  onClose: () => void;
}) {
  if (!item) {
    return (
      <div className="rounded-2xl border border-dashed border-white/15 p-8 text-center text-sm text-slate-400 xl:sticky xl:top-24">
        Detay için bir talep seçin.
      </div>
    );
  }
  const phone = (item.phone || "").replace(/[^0-9]/g, "");
  return (
    <aside className="rounded-2xl bg-[#0d1822] border border-amber-400/30 p-5 xl:sticky xl:top-24">
      <div className="flex items-start justify-between gap-3 mb-4">
        <div>
          <div className="text-[11px] uppercase tracking-wider text-amber-300">{sourceLabel(item)}</div>
          <h2 className="text-xl font-black">{item.name}</h2>
          <p className="text-xs text-slate-400">{formatWhen(item.createdAt)}</p>
        </div>
        <button onClick={onClose} className="text-slate-400 text-sm">Kapat</button>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-4">
        {(Object.keys(STATUS_LABEL) as InquiryStatus[]).map((status) => (
          <button
            key={status}
            disabled={busy === `status:${item.id}`}
            onClick={() => onStatus(item.id, status)}
            className={`py-2 rounded-lg text-[11px] font-bold border ${item.status === status ? "bg-amber-500 text-[#0f1d2a] border-amber-400" : "bg-white/5 text-slate-300 border-white/10"}`}
          >
            {STATUS_LABEL[status]}
          </button>
        ))}
      </div>
      <div className="flex gap-2 mb-4">
        {phone && (
          <a href={`https://wa.me/${phone}`} target="_blank" rel="noreferrer" className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-emerald-600 text-xs font-bold">
            <MessageSquare size={14} /> WhatsApp
          </a>
        )}
        {item.email && (
          <a href={`mailto:${item.email}?subject=${encodeURIComponent("STRUCTIVA başvurusunuz")}`} className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-amber-500 text-[#0f1d2a] text-xs font-bold">
            <Mail size={14} /> E-posta
          </a>
        )}
        {phone && (
          <a href={`tel:${phone}`} className="inline-flex items-center justify-center px-3 rounded-xl bg-white/10 text-xs font-bold">
            <Phone size={14} />
          </a>
        )}
      </div>
      <dl className="space-y-2 text-xs mb-4">
        <Info icon={<Mail size={13} />} label="E-posta" value={item.email || "—"} />
        <Info icon={<Phone size={13} />} label="Telefon" value={item.phone || "—"} />
        <Info icon={<Building2 size={13} />} label="Şirket" value={item.company || "—"} />
        <Info icon={<Clock3 size={13} />} label="Ülke" value={item.country} />
        {item.model && <Info icon={<CheckCircle2 size={13} />} label="Model" value={item.model} />}
        {(item.span || item.length || item.height) && (
          <Info icon={<Archive size={13} />} label="Ölçü" value={`${item.span || "—"} m × ${item.length || "—"} m × ${item.height || "—"} m${item.areaM2 ? ` · ${item.areaM2} m²` : ""}`} />
        )}
      </dl>
      {item.accessories && item.accessories.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-4">
          {item.accessories.map((accessory) => (
            <span key={accessory} className="text-[10px] bg-white/10 px-2 py-1 rounded text-slate-300">{accessory}</span>
          ))}
        </div>
      )}
      <div className="mb-4">
        <div className="text-[10px] uppercase tracking-wider text-slate-400 mb-1">Mesaj</div>
        <div className="rounded-xl bg-black/40 border border-white/10 p-3 text-xs leading-relaxed whitespace-pre-wrap max-h-48 overflow-auto">{item.message || "Mesaj metni yok."}</div>
      </div>
      <div className="mb-4">
        <span className="block text-[10px] uppercase tracking-wider text-slate-400 mb-1">Takip tarihi</span>
        <div className="flex gap-2">
          <input type="date" value={followUpDraft} onChange={(event) => onFollowUp(event.target.value)} className="flex-1 rounded-xl bg-black/40 border border-white/10 px-3 py-2 text-xs outline-none focus:border-amber-400" />
          <button onClick={onSaveFollowUp} disabled={busy === `follow:${item.id}`} className="px-3 py-2 rounded-xl bg-white/10 text-xs font-bold disabled:opacity-50">
            {busy === `follow:${item.id}` ? "Kaydediliyor" : "Kaydet"}
          </button>
        </div>
      </div>
      <label className="block mb-4">
        <span className="text-[10px] uppercase tracking-wider text-slate-400">Yönetici notu</span>
        <textarea value={noteDraft} onChange={(event) => onNote(event.target.value)} rows={3} className="mt-1 w-full rounded-xl bg-black/40 border border-white/10 p-3 text-xs outline-none focus:border-amber-400" />
        <button onClick={onSaveNote} disabled={busy === `note:${item.id}`} className="mt-2 w-full py-2 rounded-xl bg-white/10 text-xs font-bold disabled:opacity-50">
          {busy === `note:${item.id}` ? "Kaydediliyor" : "Notu Firestore'a yaz"}
        </button>
        {item.noteUpdatedAt && <span className="block text-[10px] text-slate-500 mt-1">Son not: {formatWhen(item.noteUpdatedAt)}</span>}
      </label>
      <button onClick={() => onDelete(item.id)} disabled={busy === `delete:${item.id}`} className="w-full inline-flex items-center justify-center gap-1.5 py-2 text-xs text-rose-300">
        <Trash2 size={14} /> Talebi sil
      </button>
    </aside>
  );
}

function Info({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-3">
      <dt className="inline-flex items-center gap-1.5 text-slate-400">{icon}{label}</dt>
      <dd className="text-right text-slate-100 break-all">{value}</dd>
    </div>
  );
}

function EmptyState({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-white/15 px-4 py-8 text-center">
      <Inbox size={22} className="mx-auto mb-2 text-slate-500" />
      <div className="text-sm font-semibold text-slate-200">{title}</div>
      <p className="text-xs text-slate-400 mt-1">{text}</p>
    </div>
  );
}
