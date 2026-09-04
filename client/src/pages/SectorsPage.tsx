import React from "react";
import { Link } from "wouter";
import { SECTORS } from "../data/sectorsData";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import SEOHead from "../components/SEOHead";

export default function SectorsPage({ lang = "tr" }: { lang?: string }) {
  const { t } = useLanguage();

  return (
    <div className="bg-[#09131c] text-white py-16 px-4 sm:px-6 lg:px-8">
      <SEOHead
        title="Industrial Steel Building Applications by Industry | STRUCTIVA"
        description="Engineered clear-span and PEB solutions for agriculture & grain storage, aviation hangars, mining aggregates, logistics warehouses, and defense installations."
        canonicalPath={`/${lang}/sectors`}
        lang={lang}
        breadcrumbs={[
          { name: "STRUCTIVA", url: `/${lang}` },
          { name: t("nav_sectors"), url: `/${lang}/sectors` }
        ]}
      />
      <div className="mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 text-xs font-mono font-bold uppercase tracking-widest block mb-2">
            {t("sectors_eyebrow")}
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            {t("sectors_title")} <span className="text-amber-400">{t("sectors_title_highlight")}</span>
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            {t("sectors_subtitle")}
          </p>
        </div>

        {/* Sectors Detailed Cards */}
        <div className="space-y-12 mb-20">
          {SECTORS.map((sector, idx) => (
            <div
              key={sector.id}
              className={`rounded-3xl bg-[#0e1b27] border border-white/10 p-8 lg:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                idx % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              <div className={`lg:col-span-6 space-y-5 ${idx % 2 === 1 ? "lg:col-start-7" : ""}`}>
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase">
                  <span>0{idx + 1} / {t("nav_sectors")}</span>
                  <span>•</span>
                  <span>{sector.metrics}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  {sector.title}
                </h2>

                <p className="text-base text-amber-300/90 font-medium">
                  "{sector.subtitle}"
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {sector.description}
                </p>

                <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                  <span className="text-[10px] text-amber-400 font-mono uppercase block mb-1">
                    {t("sectors_recommended_model")}
                  </span>
                  <strong className="text-sm text-white">{sector.recommendedModel}</strong>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-200 block">
                    {t("sectors_key_advantages")}
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    {sector.advantages.map((adv, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span>{adv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3">
                  <Link
                    href={`/${lang}/request-a-quote`}
                    className="inline-flex items-center gap-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-[#0f1d2a] px-6 py-3 text-xs font-black uppercase tracking-wider transition-all"
                  >
                    <span>{t("sectors_rfq_btn")}</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>

              <div className={`lg:col-span-6 ${idx % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <div className="rounded-2xl overflow-hidden border border-white/15 h-80 sm:h-96 shadow-2xl relative">
                  <img
                    src={sector.image}
                    alt={sector.title}
                    className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1b27]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-3.5 rounded-xl border border-white/10">
                    <span className="text-[10px] text-amber-400 font-mono uppercase block">{t("topbar_standards")}</span>
                    <strong className="text-xs text-white">{t("stat_warranty_desc")}</strong>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
