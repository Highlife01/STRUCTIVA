import React from "react";
import BuildingConfigurator from "../components/BuildingConfigurator";
import { Calculator, ShieldCheck, Box, Anchor } from "lucide-react";
import SEOHead from "../components/SEOHead";

export default function ConfiguratorPage({ lang = "tr" }: { lang?: string }) {
  return (
    <div className="bg-[#09131c] text-white py-12 px-4 sm:px-6 lg:px-8">
      <SEOHead
        title="3D Parametric Steel Building Configurator & Calculator | STRUCTIVA"
        description="Design and configure your clear-span steel building online. Adjust span, length, and height to compute real-time floor area, usable volume, and 40HC container shipping kits."
        canonicalPath={`/${lang}/configurator`}
        lang={lang}
        breadcrumbs={[
          { name: "STRUCTIVA", url: `/${lang}` },
          { name: "3D Configurator", url: `/${lang}/configurator` }
        ]}
      />
      <div className="mx-auto max-w-[1440px]">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-amber-400 text-xs font-mono font-bold uppercase tracking-widest block mb-2">
            İnteraktif Mühendislik Motoru
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            3D Çelik Bina <span className="text-amber-400">Konfigüratörü</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            İstediğiniz bina açıklığını, uzunluğunu, yüksekliğini ve aksesuar donanımlarını belirleyin. 
            Anlık olarak metrekare, hacim ve nakliye konteyneri gereksinimini hesaplayın ve teknik teklif talebinizi tek tıkla Yönetim Paneline iletin.
          </p>
        </div>

        <BuildingConfigurator />
      </div>
    </div>
  );
}
