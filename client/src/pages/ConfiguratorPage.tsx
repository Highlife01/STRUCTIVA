import React from "react";
import BuildingConfigurator from "../components/BuildingConfigurator";
import { useLanguage } from "../contexts/LanguageContext";
import { getPageSEO } from "../data/seoData";
import SEOHead from "../components/SEOHead";

export default function ConfiguratorPage({ lang = "tr" }: { lang?: string }) {
  const { t } = useLanguage();
  const seo = getPageSEO("configurator", lang);

  return (
    <div className="bg-[#09131c] text-white py-12 px-4 sm:px-6 lg:px-8">
      <SEOHead
        title={seo.title}
        description={seo.description}
        canonicalPath={`/${lang}/configurator`}
        lang={lang}
        breadcrumbs={[
          { name: "STRUCTIVA", url: `/${lang}` },
          { name: t("nav_configurator") || "3D Configurator", url: `/${lang}/configurator` }
        ]}
      />
      <div className="mx-auto max-w-[1440px]">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-amber-400 text-xs font-mono font-bold uppercase tracking-widest block mb-2">
            {t("configurator_eyebrow") || "Parametric Engineering Engine"}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            {seo.h1}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {t("configurator_subtitle") || seo.description}
          </p>
        </div>

        <BuildingConfigurator />
      </div>
    </div>
  );
}
