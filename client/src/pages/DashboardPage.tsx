import React, { useState, useEffect } from "react";
import {
  LayoutDashboard,
  Inbox,
  Filter,
  Search,
  Phone,
  Mail,
  Calendar,
  Building2,
  Layers,
  CheckCircle2,
  Clock,
  Trash2,
  MessageSquare,
  Download,
  RefreshCw,
  ExternalLink,
  Lock,
  LogOut,
  ShieldCheck,
  UserCheck
} from "lucide-react";
import { getAllInquiries, updateInquiryStatus, deleteInquiry, Inquiry } from "../services/messageService";
import { useLanguage } from "../contexts/LanguageContext";

export default function DashboardPage() {
  const { t } = useLanguage();

  // Super Admin Auth State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem("structiva_admin_auth") === "true";
  });
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  // Inquiries State
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [filterType, setFilterType] = useState<string>("all");
  const [search, setSearch] = useState("");
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
  const [testSending, setTestSending] = useState(false);
  const [testResult, setTestResult] = useState<string | null>(null);

  const handleSendTestEmail = async () => {
    setTestSending(true);
    setTestResult(null);
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "contact",
          name: "Cebrail Kara (Natro SMTP Test)",
          email: "info@structiva.com.tr",
          phone: "0532 055 09 45",
          company: "STRUCTIVA",
          country: "Türkiye / Adana",
          model: "Q-Series Arch (36m Açıklık)",
          message: "Bu bildirim Natro altyapısı (mail.kurumsaleposta.com) üzerinden info@structiva.com.tr adresi ile cebrailkara@gmail.com adresine başarıyla iletilmiştir.",
        }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setTestResult("✓ Natro SMTP testi başarılı! info@structiva.com.tr -> cebrailkara@gmail.com iletildi.");
      } else {
        setTestResult(`Uyarı: ${data.error || "SMTP bağlantısı yanıt vermedi."}`);
      }
    } catch (err: any) {
      setTestResult(`Bağlantı Notu: ${err.message}. (Canlı statik barındırmada mesajlar anında veritabanına ve panoya kaydedilir)`);
    } finally {
      setTestSending(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = loginEmail.trim().toLowerCase();

    if (cleanEmail === "cebrailkara@gmail.com" && loginPassword === "Ak010101") {
      setIsAuthenticated(true);
      localStorage.setItem("structiva_admin_auth", "true");
      setLoginError("");
    } else {
      setLoginError("Geçersiz e-posta veya şifre. Lütfen Süper Admin bilgilerinizi kontrol ediniz.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("structiva_admin_auth");
  };

  const fetchLeads = async () => {
    setLoading(true);
    const data = await getAllInquiries();
    setInquiries(data);
    setLoading(false);
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchLeads();
    }
  }, [isAuthenticated]);

  const handleStatusChange = async (id: string, status: Inquiry["status"]) => {
    await updateInquiryStatus(id, status);
    setInquiries((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status } : item))
    );
    if (selectedInquiry && selectedInquiry.id === id) {
      setSelectedInquiry((prev) => (prev ? { ...prev, status } : null));
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Bu talebi silmek istediğinize emin misiniz?")) {
      await deleteInquiry(id);
      setInquiries((prev) => prev.filter((item) => item.id !== id));
      if (selectedInquiry?.id === id) {
        setSelectedInquiry(null);
      }
    }
  };

  // If Not Authenticated, render Super Admin Login Gate
  if (!isAuthenticated) {
    return (
      <div className="min-h-[85vh] flex items-center justify-center bg-[#09131c] px-4 py-16">
        <div className="w-full max-w-md rounded-3xl bg-[#0e1b27] border border-amber-500/30 p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="text-center mb-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/15 border border-amber-500/40 text-amber-400 mx-auto mb-3">
              <Lock size={28} />
            </div>
            <h2 className="text-xl font-black text-white tracking-wide uppercase">STRUCTIVA YÖNETİCİ GİRİŞİ</h2>
            <p className="text-xs text-slate-400 mt-1">Süper Admin Güvenli Giriş Kapısı</p>
          </div>

          {loginError && (
            <div className="mb-4 p-3 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs text-center font-medium">
              {loginError}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                Yönetici E-posta
              </label>
              <input
                type="email"
                required
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                placeholder="cebrailkara@gmail.com"
                className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 text-xs text-white placeholder:text-slate-600 outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                Admin Şifresi
              </label>
              <input
                type="password"
                required
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 text-xs text-white placeholder:text-slate-600 outline-none focus:border-amber-400"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-[#0f1d2a] font-black text-xs uppercase tracking-wider shadow-xl shadow-amber-500/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-2"
            >
              <ShieldCheck size={16} />
              <span>Süper Admin Olarak Giriş Yap</span>
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-white/10 text-center text-[11px] text-slate-500">
            STRUCTIVA · Structiva Tesisleri Adana Yetkili Paneli
          </div>
        </div>
      </div>
    );
  }

  const filteredInquiries = inquiries.filter((inq) => {
    const matchesStatus = filterStatus === "all" ? true : inq.status === filterStatus;
    const matchesType = filterType === "all" ? true : inq.type === filterType;
    const matchesSearch =
      inq.name.toLowerCase().includes(search.toLowerCase()) ||
      inq.email.toLowerCase().includes(search.toLowerCase()) ||
      (inq.company && inq.company.toLowerCase().includes(search.toLowerCase())) ||
      (inq.model && inq.model.toLowerCase().includes(search.toLowerCase())) ||
      inq.country.toLowerCase().includes(search.toLowerCase());
    return matchesStatus && matchesType && matchesSearch;
  });

  const totalArea = inquiries.reduce((acc, curr) => acc + (curr.areaM2 || 0), 0);
  const newCount = inquiries.filter((i) => i.status === "new").length;
  const contactMessagesCount = inquiries.filter((i) => i.type === "contact").length;
  const quoteRequestsCount = inquiries.filter((i) => i.type === "quote").length;

  const exportCSV = () => {
    const headers = ["ID", "Tarih", "Tür", "İsim", "E-posta", "Telefon", "Şirket", "Ülke", "Model", "Alan (m2)", "Durum", "Mesaj"];
    const rows = inquiries.map((i) => [
      i.id,
      i.createdAt,
      i.type,
      `"${i.name}"`,
      i.email,
      `"${i.phone || ""}"`,
      `"${i.company || ""}"`,
      `"${i.country}"`,
      `"${i.model || ""}"`,
      i.areaM2 || "",
      i.status,
      `"${(i.message || "").replace(/"/g, '""')}"`,
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `structiva_inquiries_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#09131c] text-white pt-6 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1440px]">
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 px-3 py-1 text-[11px] font-bold">
                <UserCheck size={14} />
                <span>Süper Admin: cebrailkara@gmail.com</span>
              </span>
              <span className="text-amber-400 font-mono text-xs uppercase tracking-widest hidden sm:inline">
                • Tam Yetkili Yönetici
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Gelen Mesajlar & <span className="text-amber-400">Teknik Teklif Talepleri</span>
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              Web sitesi formlarından ve 3D konfigüratörden iletilen tüm müşteri başvuruları burada toplanır.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchLeads}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-300"
              title="Yenile"
            >
              <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
              <span>Yenile</span>
            </button>
            <button
              onClick={exportCSV}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-xs font-bold text-amber-300 transition-colors"
            >
              <Download size={14} />
              <span>CSV İndir</span>
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 border border-rose-500/40 text-xs font-bold text-rose-300 transition-colors"
              title="Çıkış Yap"
            >
              <LogOut size={14} />
              <span>Çıkış</span>
            </button>
          </div>
        </div>

        {/* Top Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="rounded-2xl bg-[#0f1d2a] border border-white/10 p-4 sm:p-5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Toplam Talep</span>
            <div className="text-2xl sm:text-3xl font-mono font-black text-white">{inquiries.length}</div>
            <span className="text-[10px] text-slate-500 mt-1 block">Tüm gelen formlar</span>
          </div>

          <div className="rounded-2xl bg-[#0f1d2a] border border-amber-500/30 p-4 sm:p-5 relative overflow-hidden">
            <div className="absolute top-0 right-0 h-1.5 left-0 bg-amber-400" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block mb-1">Yeni / Bekleyen</span>
            <div className="text-2xl sm:text-3xl font-mono font-black text-amber-400">{newCount}</div>
            <span className="text-[10px] text-slate-400 mt-1 block">İnceleme bekliyor</span>
          </div>

          <div className="rounded-2xl bg-[#0f1d2a] border border-sky-500/30 p-4 sm:p-5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-sky-400 block mb-1">İletişim Mesajları</span>
            <div className="text-2xl sm:text-3xl font-mono font-black text-sky-400">{contactMessagesCount}</div>
            <span className="text-[10px] text-slate-500 mt-1 block">İletişim formundan gelenler</span>
          </div>

          <div className="rounded-2xl bg-[#0f1d2a] border border-emerald-500/30 p-4 sm:p-5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">Teklif (RFQ) Talepleri</span>
            <div className="text-2xl sm:text-3xl font-mono font-black text-emerald-400">{quoteRequestsCount}</div>
            <span className="text-[10px] text-slate-500 mt-1 block">3D Motor & Teklif Formu</span>
          </div>
        </div>

        {/* Natro SMTP Notification Status Strip */}
        <div className="rounded-2xl bg-gradient-to-r from-[#0d1c29] to-[#122536] border border-amber-500/30 p-4 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30">
              <Mail size={20} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-white uppercase tracking-wider">Natro SMTP Otomatik Bildirim Sistemi</span>
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                Gönderen: <strong className="text-amber-400">info@structiva.com.tr</strong> (mail.kurumsaleposta.com) → Hedef: <strong className="text-emerald-400">cebrailkara@gmail.com</strong>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {testResult && (
              <span className="text-xs text-amber-300 bg-amber-500/10 border border-amber-500/30 px-3 py-1.5 rounded-lg">
                {testResult}
              </span>
            )}
            <button
              onClick={handleSendTestEmail}
              disabled={testSending}
              className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-[#0f1d2a] text-xs font-black uppercase tracking-wider flex items-center gap-2 transition-all shrink-0"
            >
              <Mail size={14} />
              <span>{testSending ? "Gönderiliyor..." : "Test E-postası Gönder"}</span>
            </button>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-[#0f1d2a] border border-white/10 rounded-2xl p-4 mb-6">
          <div className="flex flex-wrap items-center gap-2">
            {/* Status filters */}
            <div className="flex items-center gap-1.5 bg-black/30 p-1 rounded-xl border border-white/5">
              {[
                { id: "all", label: "Tüm Durumlar" },
                { id: "new", label: "Yeni" },
                { id: "contacted", label: "Görüşüldü" },
                { id: "quoted", label: "Teklif Verildi" },
                { id: "archived", label: "Arşiv" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilterStatus(tab.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                    filterStatus === tab.id
                      ? "bg-amber-500 text-[#0f1d2a]"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Type filters */}
            <div className="flex items-center gap-1.5 bg-black/30 p-1 rounded-xl border border-white/5">
              <button
                onClick={() => setFilterType("all")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                  filterType === "all"
                    ? "bg-white/20 text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Hepsi
              </button>
              <button
                onClick={() => setFilterType("contact")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                  filterType === "contact"
                    ? "bg-sky-500 text-white shadow-md shadow-sky-500/20"
                    : "text-slate-400 hover:text-sky-300"
                }`}
              >
                ✉️ İletişim Formu ({contactMessagesCount})
              </button>
              <button
                onClick={() => setFilterType("quote")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                  filterType === "quote"
                    ? "bg-amber-500 text-[#0f1d2a] shadow-md shadow-amber-500/20"
                    : "text-slate-400 hover:text-amber-300"
                }`}
              >
                🏗️ Teklif Talepleri ({quoteRequestsCount})
              </button>
            </div>
          </div>

          <div className="relative w-full md:w-72">
            <Search size={15} className="absolute left-3 top-3 text-slate-400" />
            <input
              type="text"
              placeholder="İsim, e-posta veya model ara..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl bg-white/5 border border-white/10 pl-9 pr-4 py-2 text-xs text-white placeholder:text-slate-500 outline-none focus:border-amber-400"
            />
          </div>
        </div>

        {/* Inquiries Table & Detail Modal / Split View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* List Col */}
          <div className={`${selectedInquiry ? "lg:col-span-7" : "lg:col-span-12"} space-y-3`}>
            {filteredInquiries.length === 0 ? (
              <div className="rounded-2xl bg-[#0f1d2a] border border-white/10 p-12 text-center text-slate-400">
                <Inbox size={36} className="mx-auto mb-3 text-slate-500" />
                <p className="text-sm font-semibold">Bu filtrelere uygun mesaj veya talep bulunamadı.</p>
              </div>
            ) : (
              filteredInquiries.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedInquiry(item)}
                  className={`cursor-pointer rounded-2xl border p-5 transition-all ${
                    selectedInquiry?.id === item.id
                      ? "bg-white/10 border-amber-400 shadow-lg shadow-amber-500/10"
                      : "bg-[#0f1d2a] border-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                          item.type === "contact"
                            ? "bg-sky-500/20 text-sky-400 border border-sky-500/40"
                            : "bg-amber-500/20 text-amber-400 border border-amber-500/40"
                        }`}>
                          {item.type === "contact" ? "✉️ İletişim Formu" : "🏗️ Proje Teklifi (RFQ)"}
                        </span>
                        <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                          item.status === "new"
                            ? "bg-rose-500/20 text-rose-400 border border-rose-500/40"
                            : item.status === "quoted"
                            ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                            : item.status === "contacted"
                            ? "bg-blue-500/20 text-blue-400 border border-blue-500/40"
                            : "bg-slate-500/20 text-slate-300 border border-slate-500/40"
                        }`}>
                          {item.status === "new" ? "Yeni" : item.status === "quoted" ? "Teklif Verildi" : item.status === "contacted" ? "Görüşüldü" : "Arşiv"}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400">
                          {new Date(item.createdAt).toLocaleDateString("tr-TR", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" })}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-white flex items-center gap-2">
                        <span>{item.name}</span>
                        {item.company && <span className="text-xs font-normal text-slate-400">({item.company})</span>}
                      </h3>
                    </div>

                    {item.areaM2 ? (
                      <div className="text-right">
                        <span className="block font-mono text-sm font-bold text-amber-400">{item.areaM2} m²</span>
                        <span className="text-[10px] text-slate-400">{item.model}</span>
                      </div>
                    ) : (
                      <div className="text-right">
                        <span className="inline-block font-mono text-xs text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20">
                          Doğrudan Mesaj
                        </span>
                      </div>
                    )}
                  </div>

                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-3">
                    {item.message}
                  </p>

                  <div className="flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-white/5">
                    <div className="flex items-center gap-4">
                      <span>📍 {item.country}</span>
                      {item.phone && <span>📞 {item.phone}</span>}
                    </div>
                    <span className="text-amber-400 text-xs font-semibold hover:underline">Detayları Gör →</span>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Detail Side Panel */}
          {selectedInquiry && (
            <div className="lg:col-span-5 rounded-2xl bg-[#0d1822] border border-amber-400/40 p-6 sticky top-24 self-start shadow-2xl animate-in slide-in-from-right-4 duration-200">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                <div>
                  <span className="text-[10px] font-mono uppercase text-amber-400">Talep Detayı #{selectedInquiry.id}</span>
                  <h3 className="text-xl font-bold text-white">{selectedInquiry.name}</h3>
                </div>
                <button
                  onClick={() => setSelectedInquiry(null)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              {/* Status Update Buttons */}
              <div className="mb-5">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">Durumu Güncelle:</span>
                <div className="grid grid-cols-3 gap-2">
                  {(["new", "contacted", "quoted", "archived"] as const).map((st) => (
                    <button
                      key={st}
                      onClick={() => handleStatusChange(selectedInquiry.id, st)}
                      className={`py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all border ${
                        selectedInquiry.status === st
                          ? "bg-amber-500 text-[#0f1d2a] border-amber-400"
                          : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10"
                      }`}
                    >
                      {st === "new" ? "Yeni" : st === "contacted" ? "Görüşüldü" : st === "quoted" ? "Teklifli" : "Arşiv"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Quick Actions */}
              <div className="flex gap-2 mb-6">
                {selectedInquiry.phone && (
                  <a
                    href={`https://wa.me/${selectedInquiry.phone.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold"
                  >
                    <MessageSquare size={14} />
                    <span>WhatsApp</span>
                  </a>
                )}
                <a
                  href={`mailto:${selectedInquiry.email}?subject=STRUCTIVA Çelik Yapı Teklifiniz&body=Sayın ${selectedInquiry.name},`}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-[#0f1d2a] text-xs font-bold"
                >
                  <Mail size={14} />
                  <span>E-posta</span>
                </a>
              </div>

              {/* Specs Box */}
              {selectedInquiry.model && (
                <div className="rounded-xl bg-white/5 border border-white/10 p-4 mb-5 space-y-2 text-xs">
                  <div className="flex justify-between text-slate-400">
                    <span>Model:</span>
                    <strong className="text-white">{selectedInquiry.model}</strong>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Ölçüler:</span>
                    <strong className="text-amber-400 font-mono">
                      {selectedInquiry.span}m Açıklık × {selectedInquiry.length}m Boy × {selectedInquiry.height}m Yükseklik
                    </strong>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Toplam Taban Alanı:</span>
                    <strong className="text-emerald-400 font-mono text-sm">{selectedInquiry.areaM2} m²</strong>
                  </div>
                  {selectedInquiry.accessories && selectedInquiry.accessories.length > 0 && (
                    <div className="pt-2 border-t border-white/5">
                      <span className="block text-[10px] text-slate-400 uppercase mb-1">Aksesuarlar:</span>
                      <div className="flex flex-wrap gap-1">
                        {selectedInquiry.accessories.map((acc) => (
                          <span key={acc} className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-slate-300">
                            {acc}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Message Content */}
              <div className="mb-6">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Talep Açıklaması / Notu:</span>
                <div className="rounded-xl bg-black/40 border border-white/10 p-3.5 text-xs text-slate-200 leading-relaxed max-h-48 overflow-y-auto">
                  {selectedInquiry.message || "Açıklama belirtilmedi."}
                </div>
              </div>

              {/* Delete Button */}
              <button
                onClick={() => handleDelete(selectedInquiry.id)}
                className="w-full flex items-center justify-center gap-1.5 py-2 text-xs text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 rounded-lg transition-colors"
              >
                <Trash2 size={14} />
                <span>Bu Talebi Sil</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
