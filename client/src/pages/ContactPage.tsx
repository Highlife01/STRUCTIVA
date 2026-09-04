import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock } from "lucide-react";
import { saveInquiry } from "../services/messageService";
import { STEEL_MODELS } from "../data/modelsData";
import { useLanguage } from "../contexts/LanguageContext";
import SEOHead from "../components/SEOHead";

export default function ContactPage({ lang = "tr" }: { lang?: string }) {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [country, setCountry] = useState("Türkiye");
  const [model, setModel] = useState("Q-Series Arch");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await saveInquiry({
        type: "contact",
        name,
        email,
        phone,
        company,
        country,
        model,
        message,
      });

      setSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#09131c] text-white py-16 px-4 sm:px-6 lg:px-8">
      <SEOHead
        title="Contact STRUCTIVA Global Export & Engineering Desk"
        description="Connect directly with STRUCTIVA Adana structural engineers and sales directors for custom building quotes, CAD specifications, and international container deliveries."
        canonicalPath={`/${lang}/contact`}
        lang={lang}
        breadcrumbs={[
          { name: "STRUCTIVA", url: `/${lang}` },
          { name: t("nav_contact"), url: `/${lang}/contact` }
        ]}
      />
      <div className="mx-auto max-w-[1440px]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 text-xs font-mono font-bold uppercase tracking-widest block mb-2">
            {t("contact_eyebrow")}
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            {t("contact_title")} <span className="text-amber-400">{t("contact_title_highlight")}</span>
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            {t("contact_subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-2xl bg-[#0e1b27] border border-white/10 p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-bold text-white border-b border-white/10 pb-4">
                {t("footer_col_contact")}
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <Phone size={18} className="text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-bold">{t("contact_phone_title")}:</strong>
                    <a href="tel:+905320550945" className="text-amber-400 font-mono font-bold hover:underline block text-sm">+90 532 055 09 45</a>
                    <a href="https://wa.me/905320550945?text=Hello,%20I%20would%20like%20information%20about%20STRUCTIVA%20steel%20structures." target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline inline-flex items-center gap-1 text-xs mt-1 font-semibold">
                      💬 WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-bold">{t("contact_email_title")}:</strong>
                    <a href="mailto:info@structiva.com.tr" className="text-slate-300 hover:text-amber-400 block">info@structiva.com.tr</a>
                    <span className="text-slate-400 block text-xs">24/7 Global Desk</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-bold">{t("contact_address_title")}:</strong>
                    <span className="text-slate-300 leading-relaxed block">
                      {t("contact_address_val")}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock size={18} className="text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-bold">{t("topbar_standards")}:</strong>
                    <span className="text-slate-300 block">EN 1090-2 EXC4 · CE · AISC 360-16</span>
                    <span className="text-amber-400 text-xs block">ISO 9001 · ASTM A792</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quality Assurance Card */}
            <div className="rounded-2xl bg-gradient-to-br from-amber-500/15 via-amber-500/5 to-transparent border border-amber-500/30 p-6">
              <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider mb-2">{t("rfq_title_highlight")}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {t("rfq_subtitle")}
              </p>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#0e1b27] border border-white/10 p-8 lg:p-10 shadow-2xl">
              <h2 className="text-2xl font-black text-white mb-2">{t("contact_form_title")}</h2>
              <p className="text-xs text-slate-400 mb-6">
                {t("rfq_step1_desc")}
              </p>

              {submitted ? (
                <div className="rounded-2xl bg-emerald-500/20 border border-emerald-500/40 p-8 text-center text-emerald-300 animate-in fade-in duration-300">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-[#0f1d2a] mx-auto mb-4 font-black">
                    <CheckCircle2 size={36} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{t("config_submitted_title")}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed max-w-md mx-auto mb-6">
                    {t("config_submitted_desc")}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="py-2.5 px-6 rounded-xl bg-amber-500 text-[#0f1d2a] text-xs font-bold uppercase tracking-wider"
                  >
                    ✓ OK
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        {t("config_name")} *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={t("config_name")}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 text-xs text-white placeholder:text-slate-500 outline-none focus:border-amber-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        {t("config_email")} *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder={t("config_email")}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 text-xs text-white placeholder:text-slate-500 outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        {t("config_phone")}
                      </label>
                      <input
                        type="tel"
                        placeholder="+XX XXX XXX XX XX"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 text-xs text-white placeholder:text-slate-500 outline-none focus:border-amber-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        {t("config_company")}
                      </label>
                      <input
                        type="text"
                        placeholder={t("config_company")}
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 text-xs text-white placeholder:text-slate-500 outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        {t("config_country")}
                      </label>
                      <input
                        type="text"
                        placeholder={t("config_country")}
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 text-xs text-white placeholder:text-slate-500 outline-none focus:border-amber-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        {t("nav_models")}
                      </label>
                      <select
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                        className="w-full rounded-xl bg-[#09131c] border border-white/15 px-4 py-3 text-xs text-white outline-none focus:border-amber-400 cursor-pointer"
                      >
                        {STEEL_MODELS.map((m) => (
                          <option key={m.id} value={m.name} className="bg-[#0f1d2a] text-white">
                            {m.name} ({m.series})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      {t("config_notes")} *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder={t("config_notes")}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 text-xs text-white placeholder:text-slate-500 outline-none focus:border-amber-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-[#0f1d2a] text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20 active:scale-[0.98] transition-all"
                  >
                    {loading ? "..." : t("contact_form_submit")}
                    <Send size={15} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
