import React from "react";
import { Link } from "wouter";
import { Award, Wind, Zap, Flame, ArrowRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import SEOHead from "../components/SEOHead";

export default function EngineeringPage({ lang = "tr" }: { lang?: string }) {
  const { t } = useLanguage();

  return (
    <div className="bg-[#09131c] text-white py-16 px-4 sm:px-6 lg:px-8">
      <SEOHead
        title="Structural Steel Engineering Standards & Quality | STRUCTIVA"
        description="EN 1090-2 Execution Class 4, CE marking, AISC 360-16, and Galvalume Plus® AZ180 metallurgy engineered for 240 km/h wind resilience and seismic safety."
        canonicalPath={`/${lang}/engineering`}
        lang={lang}
        breadcrumbs={[
          { name: "STRUCTIVA", url: `/${lang}` },
          { name: t("nav_engineering"), url: `/${lang}/engineering` }
        ]}
      />
      <div className="mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 text-xs font-mono font-bold uppercase tracking-widest block mb-2">
            {t("eng_eyebrow")}
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            {t("eng_title")} <span className="text-amber-400">{t("eng_title_highlight")}</span>
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            {t("eng_subtitle")}
          </p>
        </div>

        {/* Hero Feature Box */}
        <div className="rounded-3xl bg-[#0e1b27] border border-white/15 p-8 lg:p-12 mb-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-amber-400 font-mono text-xs uppercase tracking-widest font-bold block">
                {t("eng_metallurgy_badge")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white">{t("eng_metallurgy_title")}</h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                {t("eng_metallurgy_desc")}
              </p>

              <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                <div>
                  <strong className="block text-2xl font-mono font-black text-amber-400">{t("eng_warranty_label")}</strong>
                  <span className="text-xs text-slate-400">{t("eng_warranty_sub")}</span>
                </div>
                <div>
                  <strong className="block text-2xl font-mono font-black text-emerald-400">{t("eng_reflectance_label")}</strong>
                  <span className="text-xs text-slate-400">{t("eng_reflectance_sub")}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
                <img
                  src="/images/engineering-detail.jpg"
                  alt="STRUCTIVA Steel Connection & Engineering Inspection"
                  className="w-full h-80 sm:h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Standards & Certifications 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="rounded-2xl bg-[#0e1b27] border border-white/10 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 mb-4">
              <Award size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">EN 1090-2 & CE</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Execution Class EXC3 & EXC4 compliance for high-risk industrial applications.
            </p>
          </div>

          <div className="rounded-2xl bg-[#0e1b27] border border-white/10 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 mb-4">
              <Wind size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{t("stat_wind")}</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              {t("stat_wind_desc")}
            </p>
          </div>

          <div className="rounded-2xl bg-[#0e1b27] border border-white/10 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 mb-4">
              <Zap size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">AISC 360-16</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              High-tensile bolted connections designed to absorb seismic acceleration without brittle failure.
            </p>
          </div>

          <div className="rounded-2xl bg-[#0e1b27] border border-white/10 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 mb-4">
              <Flame size={24} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Eurocode 3 Fire Safety</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              100% incombustible non-toxic steel construction reducing industrial insurance premiums.
            </p>
          </div>
        </div>

        {/* Callout */}
        <div className="rounded-2xl bg-gradient-to-r from-amber-500/20 via-amber-500/10 to-transparent border border-amber-500/30 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-white mb-2">{t("rfq_title")}</h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              {t("rfq_subtitle")}
            </p>
          </div>
          <Link
            href={`/${lang}/request-a-quote`}
            className="shrink-0 flex items-center gap-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-[#0f1d2a] px-6 py-3.5 text-xs font-black uppercase tracking-wider transition-all"
          >
            <span>{t("eng_btn_rfq")}</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
