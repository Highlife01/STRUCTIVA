import React, { useState } from "react";
import { Link } from "wouter";
import {
  ArrowUpRight,
  MoveRight,
  ShieldCheck,
  Award,
  Globe2,
  Anchor,
  Sparkles,
  CheckCircle2,
  Maximize2,
  X,
  Play,
  Layers
} from "lucide-react";
import { STEEL_MODELS } from "../data/modelsData";
import { SECTORS } from "../data/sectorsData";
import BuildingConfigurator from "../components/BuildingConfigurator";
import SEOHead from "../components/SEOHead";
import GeoAnswerBox from "../components/GeoAnswerBox";
import { useLanguage } from "../contexts/LanguageContext";

const GALLERY_IMAGES = [
  {
    src: "/images/arched-steel-hangar-hd.jpg",
    title: "HD Kemerli Çelik Uçak & Lojistik Hangarı",
    tag: "Q-Series Clear-Span",
    description: "Kolonsuz geniş açıklık, Galvalume Plus® alaşımlı paneller ve büyük boy endüstriyel seksiyonel kapı sistemi."
  },
  {
    src: "/images/hero-arch-structure.jpg",
    title: "Tarımsal & Maden Kemerli Çelik Depolama",
    tag: "Arch Bulk Storage",
    description: "Yüksek rüzgar ve sismik mukavemetli kemerli profil tasarımı, %100 kullanılabilir iç depolama hacmi."
  },
  {
    src: "/images/global-project.jpg",
    title: "Çok Açıklıklı Endüstriyel Lojistik Kampüsü",
    tag: "S-Series & Multi-Span",
    description: "Liman lojistik sahasında düz yan duvarlı ve yüksek tavanlı antrepo kompleksi."
  },
  {
    src: "/images/engineering-detail.jpg",
    title: "Mühendislik Cıvatalı Çelik Birleşim Detayı",
    tag: "EN 1090-2 EXC4 Detailing",
    description: "Sıfır saha kaynağı gerektiren, çift bindirmeli sızdırmaz cıvata kilit mekanizması."
  }
];

export default function HomePage({ lang = "tr" }: { lang?: string }) {
  const { t } = useLanguage();
  const [activePhoto, setActivePhoto] = useState<string | null>(null);

  return (
    <div className="bg-[#09131c] text-white">
      <SEOHead
        title="STRUCTIVA — Kolonsuz Kemerli Çelik Yapılar & Hangar Sistemleri"
        description="Structiva Tesisleri Adana — 9-45m net açıklıklı, Galvalume Plus® alaşımlı kemerli çelik hangarlar, depolar ve ağır sanayi yapıları. 50+ ülkeye doğrudan ihracat."
        canonicalPath={`/${lang}`}
        lang={lang}
      />
      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={() => setActivePhoto(null)}
        >
          <button
            onClick={() => setActivePhoto(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white z-50"
          >
            <X size={24} />
          </button>
          <div className="max-w-6xl max-h-[90vh] rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
            <img src={activePhoto} alt="STRUCTIVA Steel Structure HD Preview" className="w-full h-auto max-h-[85vh] object-contain" />
          </div>
        </div>
      )}

      {/* Hero Section with Crystal Clear HD Hangar Background */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden border-b border-white/10">
        <img
          src="/images/arched-steel-hangar-hd.jpg"
          alt="STRUCTIVA Arched Steel Hangar HD"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-75 contrast-105 saturate-110"
        />
        {/* Soft targeted gradient for text readability without washing out the photo */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#09131c] via-[#09131c]/75 to-transparent sm:w-2/3" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09131c] via-transparent to-black/30" />

        <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-24 sm:py-32 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 rounded-full bg-amber-500/20 border border-amber-500/40 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-amber-300 mb-6 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-amber-400 animate-ping" />
              <span>{t("hero_eyebrow")}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-white mb-6 drop-shadow-lg">
              {t("hero_title")} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-orange-400">
                {t("hero_title_highlight")}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-100 leading-relaxed max-w-2xl mb-10 drop-shadow">
              {t("hero_subtitle")}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={`/${lang}/configurator`}
                className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 px-7 py-4 text-xs font-black uppercase tracking-wider text-[#0f1d2a] shadow-2xl shadow-amber-500/30 active:scale-[0.98] transition-all"
              >
                <span>{t("hero_btn_quote")}</span>
                <MoveRight size={16} />
              </Link>

              <a
                href="#video-section"
                className="flex items-center gap-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 backdrop-blur-md border border-amber-400/40 px-6 py-4 text-xs font-bold uppercase tracking-wider text-amber-300 transition-all"
              >
                <Play size={16} className="fill-amber-400 text-amber-400" />
                <span>{t("hero_btn_video")}</span>
              </a>

              <button
                onClick={() => setActivePhoto("/images/arched-steel-hangar-hd.jpg")}
                className="flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 px-5 py-4 text-xs font-bold uppercase tracking-wider text-slate-200 transition-all"
              >
                <Maximize2 size={15} />
                <span>{t("hero_btn_photo")}</span>
              </button>
            </div>
          </div>

          {/* Quick Benchmark Stats Grid */}
          <div className="mt-16 sm:mt-24 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/15 pt-8 max-w-4xl bg-black/40 backdrop-blur-md rounded-2xl p-6 border">
            <div>
              <strong className="block text-2xl sm:text-3xl font-mono font-black text-white">9–45 m</strong>
              <span className="text-xs text-slate-300 uppercase tracking-wider">{t("stat_span")}</span>
              <p className="text-[10px] text-slate-400 mt-1">{t("stat_span_desc")}</p>
            </div>
            <div>
              <strong className="block text-2xl sm:text-3xl font-mono font-black text-amber-400">40–50 Yıl</strong>
              <span className="text-xs text-slate-300 uppercase tracking-wider">{t("stat_warranty")}</span>
              <p className="text-[10px] text-slate-400 mt-1">{t("stat_warranty_desc")}</p>
            </div>
            <div>
              <strong className="block text-2xl sm:text-3xl font-mono font-black text-white">50+ Ülke</strong>
              <span className="text-xs text-slate-300 uppercase tracking-wider">{t("stat_countries")}</span>
              <p className="text-[10px] text-slate-400 mt-1">{t("stat_countries_desc")}</p>
            </div>
            <div>
              <strong className="block text-2xl sm:text-3xl font-mono font-black text-emerald-400">240 km/h</strong>
              <span className="text-xs text-slate-300 uppercase tracking-wider">{t("stat_wind")}</span>
              <p className="text-[10px] text-slate-400 mt-1">{t("stat_wind_desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROMINENT HD PHOTO GALLERY SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-[#0c1722]">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-amber-400 text-xs font-mono font-bold uppercase tracking-widest block mb-2">
                {t("gallery_eyebrow")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                {t("gallery_title")} <span className="text-amber-400">{t("gallery_title_highlight")}</span>
              </h2>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              {t("gallery_subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GALLERY_IMAGES.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setActivePhoto(img.src)}
                className="group cursor-pointer rounded-2xl bg-[#0f1d2a] border border-white/15 hover:border-amber-400/80 overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                  <span className="absolute top-3 left-3 bg-black/70 backdrop-blur-md border border-white/20 text-amber-400 text-[10px] font-mono px-2.5 py-1 rounded">
                    {img.tag}
                  </span>
                  <div className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 text-[#0f1d2a] opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 size={16} />
                  </div>
                </div>

                <div className="p-5">
                  <h4 className="text-sm font-bold text-white mb-1.5 group-hover:text-amber-400 transition-colors">
                    {img.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {img.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEDICATED HD VIDEO SHOWCASE SECTION */}
      <section id="video-section" className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-[#081018]">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-amber-400 text-xs font-mono font-bold uppercase tracking-widest block">
                {t("video_eyebrow")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                {t("video_title")} <br />
                <span className="text-amber-400">{t("video_title_highlight")}</span>
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                {t("video_desc")}
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span>{t("video_fact1")}</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span>{t("video_fact2")}</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-300">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                  <span>{t("video_fact3")}</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href={`/${lang}/configurator`}
                  className="inline-flex items-center gap-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-[#0f1d2a] px-6 py-3.5 text-xs font-black uppercase tracking-wider transition-all"
                >
                  <span>{t("hero_btn_quote")}</span>
                  <MoveRight size={14} />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-3xl overflow-hidden border border-amber-500/30 shadow-2xl relative bg-black">
                <video
                  src="/videos/video1.mp4"
                  controls
                  playsInline
                  className="w-full h-auto max-h-[520px] object-cover"
                  poster="/images/arched-steel-hangar-hd.jpg"
                />
                <div className="p-4 bg-[#0d1822] border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-semibold text-white">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{t("video_badge")}</span>
                  </div>
                  <span className="text-amber-400 text-xs font-mono">1080p HD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Building Models Showcase */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-amber-400 text-xs font-mono font-bold uppercase tracking-widest block mb-2">
                {t("models_eyebrow")}
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
                {t("models_title")} <span className="text-slate-400">{t("models_title_highlight")}</span>
              </h2>
            </div>
            <Link href={`/${lang}/models`} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-white transition-colors">
              <span>{t("models_btn_details")}</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STEEL_MODELS.slice(0, 3).map((model) => (
              <div
                key={model.id}
                className="group rounded-2xl bg-[#0e1b27] border border-white/10 hover:border-amber-400/50 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={model.image}
                    alt={model.name}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1b27] via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 rounded bg-black/70 backdrop-blur-md px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400 border border-white/10">
                    {model.series}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{model.name}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-6">{model.tagline}</p>
                    <div className="space-y-2 text-xs border-t border-white/10 pt-4 mb-6">
                      <div className="flex justify-between text-slate-300">
                        <span>{t("config_span")}:</span>
                        <strong className="font-mono text-white">{model.spanRange}</strong>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span>{t("stat_wind")}:</span>
                        <strong className="font-mono text-emerald-400">{model.windLoad}</strong>
                      </div>
                    </div>
                  </div>

                  <Link
                    href={`/${lang}/models`}
                    className="inline-flex items-center justify-between w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-amber-500 hover:text-[#0f1d2a] text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    <span>{t("models_btn_details")}</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Parametric Configurator Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-[#070f17]">
        <div className="mx-auto max-w-[1440px]">
          <BuildingConfigurator />
        </div>
      </section>

      {/* Sectors and Use Cases */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-amber-400 text-xs font-mono font-bold uppercase tracking-widest block mb-2">
                {t("sectors_eyebrow")}
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
                {t("sectors_title")} <span className="text-slate-400">{t("sectors_title_highlight")}</span>
              </h2>
            </div>
            <Link href={`/${lang}/sectors`} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-white transition-colors">
              <span>{t("nav_sectors")}</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SECTORS.map((sec) => (
              <div key={sec.id} className="rounded-2xl bg-[#0e1b27] border border-white/10 p-6 hover:border-white/20 transition-all flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-amber-400 mb-2 uppercase">{sec.metrics}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{sec.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">{sec.subtitle}</p>
                  <ul className="space-y-2 mb-6">
                    {sec.advantages.slice(0, 2).map((adv, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span>{adv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={`/${lang}/request-a-quote`}
                  className="text-xs font-bold text-amber-400 hover:underline inline-flex items-center gap-1.5 pt-4 border-t border-white/5"
                >
                  <span>{t("cta_quote")}</span>
                  <MoveRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production & Logistics Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-[#0b1622]">
        <div className="mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <span className="text-amber-400 text-xs font-mono font-bold uppercase tracking-widest block mb-2">
              {t("logistics_eyebrow")}
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6">
              {t("logistics_title")} <br />
              <span className="text-amber-400">{t("logistics_title_highlight")}</span>
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {t("logistics_desc")}
            </p>
            <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6 text-xs text-slate-300">
              <div className="flex items-start gap-3">
                <Anchor size={20} className="text-amber-400 shrink-0" />
                <div>
                  <strong className="block text-white font-bold">{t("logistics_point1_title")}</strong>
                  <span>{t("logistics_point1_desc")}</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck size={20} className="text-emerald-400 shrink-0" />
                <div>
                  <strong className="block text-white font-bold">{t("logistics_point2_title")}</strong>
                  <span>{t("logistics_point2_desc")}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden border border-white/15 shadow-2xl">
              <img
                src="/images/global-project.jpg"
                alt="STRUCTIVA Global Logistics and Multi-span Campus"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#0f1d2a] border border-amber-500/40 p-5 rounded-2xl shadow-2xl hidden sm:block">
              <div className="text-amber-400 font-mono text-xs uppercase font-bold mb-1">{t("topbar_tagline")}</div>
              <div className="text-white text-lg font-black">{t("logistics_box_title")}</div>
              <div className="text-slate-400 text-xs">{t("logistics_box_desc")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* GEO / AEO Knowledge & FAQ Section */}
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <GeoAnswerBox langPrefix={`/${lang}`} />
      </div>
    </div>
  );
}
