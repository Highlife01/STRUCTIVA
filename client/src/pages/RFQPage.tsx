import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import {
  FileText,
  Send,
  CheckCircle2,
  ShieldCheck,
  Building2,
  Calendar,
  Globe2,
  Phone,
  Mail,
  ArrowRight,
  Layers,
  Sparkles
} from "lucide-react";
import { saveInquiry } from "../services/messageService";
import { STEEL_MODELS } from "../data/modelsData";
import SEOHead from "../components/SEOHead";
import GeoAnswerBox from "../components/GeoAnswerBox";
import { useLanguage } from "../contexts/LanguageContext";

export default function RFQPage({ lang = "tr" }: { lang?: string }) {
  const { t } = useLanguage();

  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [country, setCountry] = useState("Türkiye");
  const [projectCountry, setProjectCountry] = useState("");
  const [projectCity, setProjectCity] = useState("");
  const [buildingType, setBuildingType] = useState("Steel Warehouse / Logistics");
  const [selectedModel, setSelectedModel] = useState("Q-Series Arch");
  const [span, setSpan] = useState("24");
  const [length, setLength] = useState("48");
  const [height, setHeight] = useState("8");
  const [scope, setScope] = useState<string[]>([
    "Structural Steel Fabrication",
    "Complete Hardware & Bolting Kit"
  ]);
  const [timeline, setTimeline] = useState("1 - 3 Months");
  const [notes, setNotes] = useState("");
  const [consent, setConsent] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Parse UTM parameters from URL for lead attribution
  const [utmParams, setUtmParams] = useState<Record<string, string>>({});
  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      setUtmParams({
        utm_source: urlParams.get("utm_source") || "direct",
        utm_medium: urlParams.get("utm_medium") || "web",
        utm_campaign: urlParams.get("utm_campaign") || "",
        utm_content: urlParams.get("utm_content") || ""
      });
    }
  }, []);

  const toggleScope = (item: string) => {
    setScope((prev) =>
      prev.includes(item) ? prev.filter((s) => s !== item) : [...prev, item]
    );
  };

  const calculatedArea = (Number(span) || 0) * (Number(length) || 0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) {
      alert("Lütfen gizlilik ve iletişim onayını işaretleyiniz.");
      return;
    }
    setLoading(true);

    try {
      await saveInquiry({
        type: "quote",
        name,
        email,
        phone,
        company,
        country: `${country} (Project: ${projectCity ? projectCity + ", " : ""}${projectCountry || country})`,
        model: selectedModel,
        span: Number(span) || 0,
        length: Number(length) || 0,
        height: Number(height) || 0,
        areaM2: calculatedArea,
        accessories: scope,
        message: `[Technical RFQ Submission]\nBuilding Purpose: ${buildingType}\nTimeline: ${timeline}\nUTM Source: ${utmParams.utm_source || "direct"}\n\nNotes & Criteria:\n${notes || "Full turnkey quotation requested."}`
      });

      setSubmitted(true);
    } catch (err) {
      console.error("RFQ Submit Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#09131c] text-white py-16 px-4 sm:px-6 lg:px-8">
      <SEOHead
        title="Request a Technical Quotation (RFQ) | STRUCTIVA Steel Structures"
        description="Submit your structural steel project specifications, clear span dimensions, and site requirements for an official engineering review and commercial quote within 24 hours."
        canonicalPath={`/${lang}/request-a-quote`}
        lang={lang}
        breadcrumbs={[
          { name: "STRUCTIVA", url: `/${lang}` },
          { name: "Request a Quote", url: `/${lang}/request-a-quote` }
        ]}
      />

      <div className="mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 text-xs font-mono font-bold uppercase tracking-widest block mb-2">
            {t("rfq_eyebrow")}
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            {t("rfq_title")} <span className="text-amber-400">{t("rfq_title_highlight")}</span>
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            {t("rfq_subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Procurement Guidance */}
          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-3xl bg-[#0e1b27] border border-white/10 p-6 sm:p-8 space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-white border-b border-white/10 pb-4">
                {t("rfq_title_highlight")}
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-mono font-bold">1</div>
                  <div>
                    <strong className="block text-white font-bold">{t("rfq_step1_title")}</strong>
                    <span className="text-slate-400 leading-relaxed">
                      {t("rfq_step1_desc")}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-mono font-bold">2</div>
                  <div>
                    <strong className="block text-white font-bold">{t("rfq_step2_title")}</strong>
                    <span className="text-slate-400 leading-relaxed">
                      {t("rfq_step2_desc")}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400 font-mono font-bold">3</div>
                  <div>
                    <strong className="block text-white font-bold">{t("rfq_step3_title")}</strong>
                    <span className="text-slate-400 leading-relaxed">
                      {t("rfq_step3_desc")}
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 border border-white/10 p-4 space-y-2 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Üretim Tesisi:</span>
                  <strong className="text-white">Structiva Tesisleri Adana</strong>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Uluslararası Sertifikalar:</span>
                  <strong className="text-emerald-400 font-mono">EN 1090-2 EXC4 · CE · AISC</strong>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>İhracat Masası:</span>
                  <strong className="text-amber-400 font-mono">info@structiva.com.tr</strong>
                </div>
              </div>
            </div>

            {/* Direct Contact Banner */}
            <div className="rounded-3xl bg-gradient-to-br from-amber-500/20 via-amber-500/5 to-transparent border border-amber-500/30 p-6 sm:p-8">
              <h4 className="text-base font-bold text-white mb-2">Acil veya Özel Şartnameli Proje?</h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Hazır DWG, DXF veya IFC çizimleriniz varsa doğrudan teknik masamıza iletebilirsiniz.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="mailto:info@structiva.com.tr"
                  className="inline-flex items-center gap-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-[#0f1d2a] px-4 py-2 text-xs font-black uppercase tracking-wider transition-all"
                >
                  <Mail size={14} />
                  <span>info@structiva.com.tr</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Structured RFQ Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#0e1b27] border border-white/10 p-8 sm:p-10 shadow-2xl">
              {submitted ? (
                <div className="rounded-2xl bg-emerald-500/20 border border-emerald-500/40 p-8 text-center text-emerald-300 animate-in fade-in duration-300">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-[#0f1d2a] mx-auto mb-4 font-black shadow-lg shadow-emerald-500/30">
                    <CheckCircle2 size={36} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2">{t("config_submitted_title")}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed max-w-lg mx-auto mb-6">
                    {t("config_submitted_desc")}
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
                    <a
                      href={`https://wa.me/905320550945?text=${encodeURIComponent(
                        `Hello STRUCTIVA, RFQ submission from ${name} (${company || "Corporate Client"}) for ${selectedModel}. Project location: ${projectCity ? projectCity + ", " : ""}${projectCountry || country}.`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black uppercase tracking-wider shadow-lg shadow-emerald-600/30 transition-all hover:scale-105"
                    >
                      <Send size={15} />
                      <span>WhatsApp Engineering Desk</span>
                    </a>
                  </div>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-slate-400 hover:text-amber-400 underline transition-colors"
                  >
                    ← OK
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Contact Info */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
                      1. {t("config_name")} & {t("contact_email_title")}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <input
                          type="text"
                          required
                          placeholder={`${t("config_name")} *`}
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-2.5 text-xs text-white placeholder:text-slate-500 outline-none focus:border-amber-400"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          required
                          placeholder={`${t("config_email")} *`}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-2.5 text-xs text-white placeholder:text-slate-500 outline-none focus:border-amber-400"
                        />
                      </div>
                      <div>
                        <input
                          type="tel"
                          required
                          placeholder={`${t("config_phone")} *`}
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-2.5 text-xs text-white placeholder:text-slate-500 outline-none focus:border-amber-400"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder={t("config_company")}
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-2.5 text-xs text-white placeholder:text-slate-500 outline-none focus:border-amber-400"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Project Location & Purpose */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
                      2. Proje Lokasyonu & Kullanım Amacı
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <input
                          type="text"
                          required
                          placeholder="Proje Ülkesi *"
                          value={projectCountry}
                          onChange={(e) => setProjectCountry(e.target.value)}
                          className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-2.5 text-xs text-white placeholder:text-slate-500 outline-none focus:border-amber-400"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Proje Şehri / Liman"
                          value={projectCity}
                          onChange={(e) => setProjectCity(e.target.value)}
                          className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-2.5 text-xs text-white placeholder:text-slate-500 outline-none focus:border-amber-400"
                        />
                      </div>
                      <div>
                        <select
                          value={buildingType}
                          onChange={(e) => setBuildingType(e.target.value)}
                          className="w-full rounded-xl bg-[#09131c] border border-white/15 px-4 py-2.5 text-xs text-white outline-none focus:border-amber-400"
                        >
                          <option value="Steel Warehouse / Logistics">Depo & Lojistik Antrepo</option>
                          <option value="Manufacturing Factory Plant">Üretim & Fabrika Binası</option>
                          <option value="Aircraft / Helicopter Hangar">Uçak / Havacılık Hangarı</option>
                          <option value="Agricultural Bulk Grain Storage">Tarımsal Tahıl & Yem Deposu</option>
                          <option value="Mining & Mineral Stockpile">Maden & Yığın Stoklama</option>
                          <option value="Sports & Riding Arena">Spor & Binicilik Tesisi</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Dimensions */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
                      3. Boyutlar & Model Seçimi
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-3">
                      <div>
                        <label className="block text-[10px] text-slate-400 uppercase mb-1">Açıklık (m)</label>
                        <input
                          type="number"
                          min="9"
                          max="50"
                          value={span}
                          onChange={(e) => setSpan(e.target.value)}
                          className="w-full rounded-xl bg-black/40 border border-white/15 px-3 py-2 text-xs font-mono font-bold text-amber-400 outline-none focus:border-amber-400"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] text-slate-400 uppercase mb-1">Uzunluk (m)</label>
                        <input
                          type="number"
                          min="12"
                          max="200"
                          value={length}
                          onChange={(e) => setLength(e.target.value)}
                          className="w-full rounded-xl bg-black/40 border border-white/15 px-3 py-2 text-xs font-mono font-bold text-amber-400 outline-none focus:border-amber-400"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] text-slate-400 uppercase mb-1">Yükseklik (m)</label>
                        <input
                          type="number"
                          min="4"
                          max="20"
                          step="0.5"
                          value={height}
                          onChange={(e) => setHeight(e.target.value)}
                          className="w-full rounded-xl bg-black/40 border border-white/15 px-3 py-2 text-xs font-mono font-bold text-amber-400 outline-none focus:border-amber-400"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] text-slate-400 uppercase mb-1">Toplam Alan</label>
                        <div className="rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-xs font-mono font-bold text-emerald-400">
                          {calculatedArea} m²
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] text-slate-400 uppercase mb-1.5">Önerilen Çelik Yapı Modeli</label>
                      <select
                        value={selectedModel}
                        onChange={(e) => setSelectedModel(e.target.value)}
                        className="w-full rounded-xl bg-[#09131c] border border-white/15 px-4 py-2.5 text-xs text-white outline-none focus:border-amber-400"
                      >
                        {STEEL_MODELS.map((m) => (
                          <option key={m.id} value={m.name}>
                            {m.name} — {m.tagline}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Scope of Work */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                      4. İhale Kapsamı
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {[
                        "Statik Projelendirme & Mühendislik",
                        "Structural Steel Fabrication",
                        "Galvalume Plus® Çatı & Cephe Kaplama",
                        "Endüstriyel Seksiyonel Kapılar",
                        "Montaj & Süpervizörlük Desteği",
                        "FOB / CIF Uluslararası Konteyner Navlunu"
                      ].map((sc) => (
                        <button
                          key={sc}
                          type="button"
                          onClick={() => toggleScope(sc)}
                          className={`flex items-center gap-2 p-2.5 rounded-xl border text-left transition-colors ${
                            scope.includes(sc)
                              ? "bg-amber-500/20 border-amber-500 text-white font-semibold"
                              : "bg-white/5 border-white/10 text-slate-400 hover:text-white"
                          }`}
                        >
                          <div className={`h-3.5 w-3.5 rounded flex items-center justify-center ${scope.includes(sc) ? "bg-amber-500 text-[#0f1d2a]" : "border border-slate-600"}`}>
                            {scope.includes(sc) && <CheckCircle2 size={12} strokeWidth={3} />}
                          </div>
                          <span className="truncate">{sc}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Notes & File upload info */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      {t("config_notes")}
                    </label>
                    <textarea
                      rows={3}
                      placeholder={t("config_notes")}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-2.5 text-xs text-white placeholder:text-slate-500 outline-none focus:border-amber-400 resize-none"
                    />
                    <span className="text-[11px] text-slate-500 mt-1 block">
                      * DWG, DXF, IFC CAD: <strong>info@structiva.com.tr</strong>
                    </span>
                  </div>

                  {/* Consent & Submit */}
                  <div className="pt-2 border-t border-white/10 space-y-4">
                    <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-400">
                      <input
                        type="checkbox"
                        checked={consent}
                        onChange={(e) => setConsent(e.target.checked)}
                        className="mt-0.5 accent-amber-500"
                      />
                      <span>
                        {t("rfq_consent_label")}
                      </span>
                    </label>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-[#0f1d2a] font-black text-xs uppercase tracking-wider shadow-2xl shadow-amber-500/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                    >
                      {loading ? "..." : t("config_btn_submit")}
                      <Send size={15} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Technical GEO FAQ Section */}
        <GeoAnswerBox langPrefix={`/${lang}`} />
      </div>
    </div>
  );
}
