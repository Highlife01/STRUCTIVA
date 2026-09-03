import React, { useState } from "react";
import { Link } from "wouter";
import { STEEL_MODELS, BuildingModel } from "../data/modelsData";
import { Check, Shield, Wind, Snowflake, Layers, ArrowRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import SEOHead from "../components/SEOHead";

export default function ModelsPage({ lang = "tr" }: { lang?: string }) {
  const { t } = useLanguage();
  const [selectedId, setSelectedId] = useState(STEEL_MODELS[0].id);
  const currentModel = STEEL_MODELS.find((m) => m.id === selectedId) || STEEL_MODELS[0];

  return (
    <div className="bg-[#09131c] text-white py-16 px-4 sm:px-6 lg:px-8">
      <SEOHead
        title="Arched & Pre-Engineered Steel Building Models | STRUCTIVA"
        description="Explore Q-Series, S-Series, P-Series, Container Canopies and Heavy PEB steel structures. Clear-span widths from 9m to 45m with certified 240 km/h wind resistance."
        canonicalPath={`/${lang}/models`}
        lang={lang}
        breadcrumbs={[
          { name: "STRUCTIVA", url: `/${lang}` },
          { name: "Models", url: `/${lang}/models` }
        ]}
      />
      <div className="mx-auto max-w-[1440px]">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 text-xs font-mono font-bold uppercase tracking-widest block mb-2">
            Mühendislik Serileri
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Kemerli ve Ağır Yapısal <span className="text-amber-400">Çelik Bina Modelleri</span>
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            SteelMaster ve Curvco standartlarında cıvatalı, kolonsuz açık açıklık (clear-span) sunan 
            yüksek mukavemetli çelik binalar. Projenizin mimari ve iklim şartlarına en uygun modeli seçin.
          </p>
        </div>

        {/* Model Selector Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 border-b border-white/10">
          {STEEL_MODELS.map((model) => (
            <button
              key={model.id}
              onClick={() => setSelectedId(model.id)}
              className={`px-5 py-3 rounded-xl border text-xs font-bold uppercase tracking-wider transition-all shrink-0 flex items-center gap-2.5 ${
                selectedId === model.id
                  ? "bg-amber-500 text-[#0f1d2a] border-amber-400 shadow-lg shadow-amber-500/20"
                  : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
              }`}
            >
              <span>{model.name}</span>
            </button>
          ))}
        </div>

        {/* Detailed Model Showcase Card */}
        <div className="rounded-3xl bg-[#0e1b27] border border-white/15 p-8 lg:p-12 mb-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-amber-400 font-mono text-xs uppercase tracking-widest font-bold block">
                {currentModel.series}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white">{currentModel.name}</h2>
              <p className="text-base text-amber-300/90 font-medium leading-relaxed">
                "{currentModel.tagline}"
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {currentModel.description}
              </p>

              {/* Specs Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 border-y border-white/10 py-5">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase block">Açıklık (Genişlik)</span>
                  <strong className="font-mono text-sm text-white">{currentModel.spanRange}</strong>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase block">Rüzgar Sertifikası</span>
                  <strong className="font-mono text-sm text-emerald-400">{currentModel.windLoad}</strong>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase block">Kar Yükü Direnci</span>
                  <strong className="font-mono text-sm text-sky-400">{currentModel.snowLoad}</strong>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-200 block">Öne Çıkan Özellikler:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  {currentModel.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check size={14} className="text-amber-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/configurator"
                  className="flex items-center gap-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-[#0f1d2a] px-6 py-3 text-xs font-black uppercase tracking-wider transition-all"
                >
                  <span>Bu Modeli Konfigüre Et</span>
                  <ArrowRight size={14} />
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all"
                >
                  <span>Fiyat Teklifi İste</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div className="rounded-2xl overflow-hidden border border-white/15 shadow-2xl relative h-80 sm:h-96">
                <img
                  src={currentModel.image}
                  alt={currentModel.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1b27]/80 via-transparent to-transparent" />
              </div>

              {/* Schematic Profile Vector Rendering */}
              <div className="rounded-2xl bg-black/40 border border-white/10 p-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase block">Kesit Şematiği</span>
                  <strong className="text-xs text-amber-400 font-bold">{currentModel.name} Kesit Geometrisi</strong>
                </div>
                <div className="h-12 w-28">
                  <svg viewBox="0 0 180 100" className="h-full w-full stroke-amber-400 fill-amber-400/15 stroke-[3]">
                    <path d={currentModel.svgProfile} />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STEEL_MODELS.map((model) => (
            <div
              key={model.id}
              className="rounded-2xl bg-[#0e1b27] border border-white/10 p-6 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono font-bold uppercase text-amber-400 block mb-1">{model.series}</span>
                <h3 className="text-xl font-bold text-white mb-2">{model.name}</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">{model.tagline}</p>
                <div className="border-t border-white/5 pt-3 mb-4 space-y-1 text-xs text-slate-300">
                  <div className="flex justify-between">
                    <span>Açıklık:</span>
                    <strong className="font-mono text-white">{model.spanRange}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Rüzgar:</span>
                    <strong className="font-mono text-emerald-400">{model.windLoad}</strong>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedId(model.id);
                  window.scrollTo({ top: 200, behavior: "smooth" });
                }}
                className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-amber-500 hover:text-[#0f1d2a] text-xs font-bold uppercase tracking-wider text-slate-200 transition-colors text-center"
              >
                İncele & Karşılaştır
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
