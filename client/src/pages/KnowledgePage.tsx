import React, { useState, useMemo } from "react";
import { Link } from "wouter";
import { Clock, ChevronRight, Search, X, BookOpen } from "lucide-react";
import { KNOWLEDGE_ARTICLES } from "../data/knowledgeData";
import { useLanguage } from "../contexts/LanguageContext";
import { getPageSEO } from "../data/seoData";
import SEOHead from "../components/SEOHead";
import GeoAnswerBox from "../components/GeoAnswerBox";

export default function KnowledgePage({ lang = "tr" }: { lang?: string }) {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const seo = getPageSEO("knowledge", lang);

  const categories = [
    { id: "all", label: lang === "tr" ? "Tümü" : "All" },
    { id: "Planning & Engineering", label: lang === "tr" ? "Planlama & Mühendislik" : "Planning & Engineering" },
    { id: "Technical Comparison", label: lang === "tr" ? "Teknik Karşılaştırma" : "Technical Comparison" },
    { id: "Procurement & Commercial", label: lang === "tr" ? "Satınalma & Şartname" : "Procurement & RFQ" },
    { id: "Materials & Metallurgy", label: lang === "tr" ? "Malzeme & Metalürji" : "Materials & Metallurgy" }
  ];

  const filtered = useMemo(() => {
    return KNOWLEDGE_ARTICLES.filter((a) => {
      const matchesCategory = activeCategory === "all" || a.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        a.title.toLowerCase().includes(q) ||
        a.summary.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q) ||
        a.keyTakeaways.some((k) => k.toLowerCase().includes(q)) ||
        a.content.some((c) => c.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="bg-[#09131c] text-white py-16 px-4 sm:px-6 lg:px-8">
      <SEOHead
        title={seo.title}
        description={seo.description}
        canonicalPath={`/${lang}/knowledge`}
        lang={lang}
        breadcrumbs={[
          { name: "STRUCTIVA", url: `/${lang}` },
          { name: t("nav_knowledge") || "Knowledge", url: `/${lang}/knowledge` }
        ]}
      />

      <div className="mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-amber-400 text-xs font-mono font-bold uppercase tracking-widest block mb-2">
            {t("knowledge_eyebrow") || "06 / Knowledge Base"}
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            {seo.h1}
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            {seo.description}
          </p>
        </div>

        {/* Live Search Input */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="relative flex items-center">
            <Search size={18} className="absolute left-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                lang === "tr"
                  ? "Mühendislik rehberlerinde ara (açıklık, PEB, şartname, korozyon)..."
                  : "Search engineering guides (span, PEB, RFQ, metallurgy)..."
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

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border shrink-0 ${
                activeCategory === cat.id
                  ? "bg-amber-500 text-[#0f1d2a] border-amber-400 font-black"
                  : "bg-white/5 border-white/10 text-slate-400 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 bg-white/5 rounded-3xl border border-white/10 max-w-md mx-auto mb-16">
            <BookOpen size={36} className="mx-auto text-slate-500 mb-3" />
            <p className="text-slate-300 text-sm font-bold mb-2">
              {lang === "tr" ? "Aramanıza uygun makale bulunamadı" : "No articles found"}
            </p>
            <p className="text-slate-400 text-xs mb-6">
              {lang === "tr"
                ? "Farklı bir arama terimi deneyebilir veya filtreleri sıfırlayabilirsiniz."
                : "Try searching with different terms or reset your filters."}
            </p>
            <button
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
              }}
              className="px-4 py-2 rounded-xl bg-amber-500 text-[#0f1d2a] text-xs font-bold uppercase"
            >
              {lang === "tr" ? "Filtreleri Temizle" : "Reset Filters"}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {filtered.map((art) => (
              <div
                key={art.slug}
                className="rounded-3xl bg-[#0e1b27] border border-white/10 hover:border-amber-400/50 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group shadow-xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-[11px] font-mono font-bold text-amber-400 border border-white/10">
                      {art.category}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-3 font-mono">
                      <Clock size={14} className="text-amber-400" />
                      <span>{art.readTime}</span>
                      <span>•</span>
                      <span>{art.publishedDate}</span>
                    </div>

                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors leading-snug">
                      {art.title}
                    </h2>

                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 mb-6">
                      {art.summary}
                    </p>
                  </div>

                  <Link
                    href={`/${lang}/knowledge/${art.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300 transition-colors border-t border-white/10 pt-4"
                  >
                    <span>{lang === "tr" ? "Kılavuzu İncele" : "Read Full Guide"}</span>
                    <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        <GeoAnswerBox />
      </div>
    </div>
  );
}
