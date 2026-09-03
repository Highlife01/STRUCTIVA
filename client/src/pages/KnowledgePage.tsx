import React, { useState } from "react";
import { Link } from "wouter";
import { BookOpen, Clock, ArrowRight, Sparkles, Filter, ChevronRight } from "lucide-react";
import { KNOWLEDGE_ARTICLES } from "../data/knowledgeData";
import SEOHead from "../components/SEOHead";
import GeoAnswerBox from "../components/GeoAnswerBox";

export default function KnowledgePage({ lang = "tr" }: { lang?: string }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = ["all", "Planning & Engineering", "Technical Comparison", "Procurement & Commercial", "Materials & Metallurgy"];

  const filtered = activeCategory === "all" 
    ? KNOWLEDGE_ARTICLES 
    : KNOWLEDGE_ARTICLES.filter((a) => a.category === activeCategory);

  return (
    <div className="bg-[#09131c] text-white py-16 px-4 sm:px-6 lg:px-8">
      <SEOHead
        title="Steel Structure Knowledge Center & Engineering Guides | STRUCTIVA"
        description="Technical guides, structural steel planning rules, PEB vs conventional comparisons, and procurement specifications by STRUCTIVA Adana engineers."
        canonicalPath={`/${lang}/knowledge`}
        lang={lang}
        breadcrumbs={[
          { name: "STRUCTIVA", url: `/${lang}` },
          { name: "Knowledge Center", url: `/${lang}/knowledge` }
        ]}
      />

      <div className="mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 text-xs font-mono font-bold uppercase tracking-widest block mb-2">
            Mühendislik & Satın Alma Rehberleri
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Çelik Yapı <span className="text-amber-400">Bilgi Merkezi</span>
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            Endüstriyel yatırımcılar, mühendisler ve proje yöneticileri için kolonsuz açık açıklık (clear-span) 
            tasarımı, rüzgar/kar yükü hesapları, PEB optimizasyonu ve malzeme metalurjisi kılavuzları.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border shrink-0 ${
                activeCategory === cat
                  ? "bg-amber-500 text-[#0f1d2a] border-amber-400 font-black"
                  : "bg-white/5 border-white/10 text-slate-400 hover:text-white"
              }`}
            >
              {cat === "all" ? "Tüm Makaleler" : cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
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
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1b27] via-transparent to-transparent" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="rounded bg-black/70 backdrop-blur-md px-2.5 py-1 text-[10px] font-mono font-bold text-amber-400 border border-white/10">
                    {art.category}
                  </span>
                  <span className="rounded bg-white/10 backdrop-blur-md px-2 py-1 text-[10px] font-mono text-slate-300 flex items-center gap-1">
                    <Clock size={11} />
                    <span>{art.readTime}</span>
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {art.summary}
                  </p>

                  <div className="space-y-2 border-t border-white/10 pt-4 mb-6">
                    <span className="text-[10px] uppercase font-bold text-amber-400 block tracking-wider">Kritik Mühendislik Notları:</span>
                    <ul className="space-y-1.5 text-xs text-slate-400">
                      {art.keyTakeaways.slice(0, 2).map((takeaway, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2">
                          <span className="text-amber-400 font-bold">•</span>
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  href={`/${lang}/knowledge/${art.slug}`}
                  className="inline-flex items-center justify-between w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-amber-500 hover:text-[#0f1d2a] text-xs font-bold uppercase tracking-wider transition-all"
                >
                  <span>Rehberi Okuyun</span>
                  <ChevronRight size={15} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* GEO Fact Block */}
        <GeoAnswerBox langPrefix={`/${lang}`} />
      </div>
    </div>
  );
}
