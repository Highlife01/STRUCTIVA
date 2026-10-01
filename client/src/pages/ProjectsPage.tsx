import React, { useState, useMemo } from "react";
import { Link } from "wouter";
import { ArrowUpRight, MapPin, Search, X } from "lucide-react";
import { getLocalizedProjects } from "../data/projectsData";
import { useLanguage } from "../contexts/LanguageContext";
import { getPageSEO } from "../data/seoData";
import SEOHead from "../components/SEOHead";

export default function ProjectsPage({ lang = "tr" }: { lang?: string }) {
  const { t } = useLanguage();
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const seo = getPageSEO("projects", lang);
  const projects = useMemo(() => getLocalizedProjects(lang), [lang]);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesFilter = filter === "all" || p.sector.toLowerCase() === filter.toLowerCase();
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q) ||
        p.country.toLowerCase().includes(q) ||
        p.model.toLowerCase().includes(q) ||
        (p.description && p.description.toLowerCase().includes(q));

      return matchesFilter && matchesSearch;
    });
  }, [projects, filter, searchQuery]);

  const sectorFilters = [
    { id: "all", label: lang === "tr" ? "Tüm Projeler" : lang === "de" ? "Alle Projekte" : "All Projects" },
    { id: "logistics", label: lang === "tr" ? "Lojistik & Antrepo" : lang === "de" ? "Logistik & Lager" : "Logistics & Ports" },
    { id: "agriculture", label: lang === "tr" ? "Tarım & Tahıl" : lang === "de" ? "Landwirtschaft & Getreide" : "Agriculture & Grain" },
    { id: "aviation", label: lang === "tr" ? "Havacılık Hangarları" : lang === "de" ? "Luftfahrt & Hangars" : "Aviation Hangars" },
    { id: "mining", label: lang === "tr" ? "Madencilik" : lang === "de" ? "Bergbau & Halden" : "Mining & Aggregates" },
    { id: "industrial", label: lang === "tr" ? "Ağır Sanayi" : lang === "de" ? "Schwerindustrie" : "Industrial Manufacturing" },
  ];

  return (
    <div className="bg-[#09131c] text-white py-16 px-4 sm:px-6 lg:px-8">
      <SEOHead
        title={seo.title}
        description={seo.description}
        canonicalPath={`/${lang}/projects`}
        lang={lang}
        breadcrumbs={[
          { name: "STRUCTIVA", url: `/${lang}` },
          { name: t("nav_projects") || "Projects", url: `/${lang}/projects` }
        ]}
      />
      <div className="mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-amber-400 text-xs font-mono font-bold uppercase tracking-widest block mb-2">
            {lang === "tr" ? "05 / Referanslar & Vaka Analizleri" : "05 / Global Case Studies & Track Record"}
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            {seo.h1}
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            {seo.description}
          </p>
        </div>

        {/* In-Page Project Search Bar */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="relative flex items-center">
            <Search size={18} className="absolute left-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                lang === "tr"
                  ? "Projelerde ara (ülke, şehir, sektör veya model)..."
                  : lang === "de"
                  ? "Projekte suchen (Land, Stadt, Modell)..."
                  : "Search projects by country, city, model or sector..."
              }
              className="w-full pl-12 pr-10 py-3 rounded-2xl bg-white/5 border border-white/15 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-amber-400 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 p-1 rounded-full text-slate-400 hover:text-white"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-12">
          {sectorFilters.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border shrink-0 ${
                filter === tab.id
                  ? "bg-amber-500 text-[#0f1d2a] border-amber-400 font-black"
                  : "bg-white/5 border-white/10 text-slate-400 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 bg-white/5 rounded-3xl border border-white/10 max-w-md mx-auto">
            <p className="text-slate-400 text-sm mb-4">
              {lang === "tr"
                ? "Aramanıza uygun proje bulunamadı."
                : "No matching project case studies found."}
            </p>
            <button
              onClick={() => {
                setFilter("all");
                setSearchQuery("");
              }}
              className="px-4 py-2 rounded-xl bg-amber-500 text-[#0f1d2a] text-xs font-bold uppercase"
            >
              {lang === "tr" ? "Filtreleri Temizle" : "Reset Filters"}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((proj) => (
              <div
                key={proj.id}
                className="rounded-3xl bg-[#0e1b27] border border-white/10 overflow-hidden hover:border-amber-400/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group shadow-xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1b27] via-transparent to-black/30" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="rounded bg-black/70 backdrop-blur-md px-2.5 py-1 text-[10px] font-mono font-bold text-amber-400 border border-white/10">
                      {proj.sector.toUpperCase()}
                    </span>
                    <span className="rounded bg-white/10 backdrop-blur-md px-2 py-1 text-[10px] font-mono text-slate-300">
                      {proj.year}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-2">
                      <MapPin size={13} className="text-amber-400" />
                      <span>{proj.location}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                      {proj.title}
                    </h3>
                    {proj.description && (
                      <p className="text-xs text-slate-300 line-clamp-2 mb-4">
                        {proj.description}
                      </p>
                    )}

                    <div className="space-y-2 border-t border-white/10 pt-3 text-xs text-slate-300 mb-6">
                      <div className="flex justify-between">
                        <span className="text-slate-400">
                          {lang === "tr" ? "Uygulanan Model:" : "Building Model:"}
                        </span>
                        <strong className="text-white font-medium">{proj.model}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">
                          {lang === "tr" ? "Yapı Büyüklüğü:" : "Floor Area:"}
                        </span>
                        <strong className="font-mono text-amber-400">{proj.size}</strong>
                      </div>
                    </div>
                  </div>

                  <Link
                    href={`/${lang}/request-a-quote`}
                    className="inline-flex items-center justify-between w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-amber-500 hover:text-[#0f1d2a] text-xs font-bold uppercase tracking-wider transition-all group-hover:border-amber-400/30 border border-white/5"
                  >
                    <span>{t("cta_quote") || "Benzer Proje İçin Teklif Al"}</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
