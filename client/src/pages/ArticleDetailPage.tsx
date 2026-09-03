import React from "react";
import { Link, useRoute } from "wouter";
import { ArrowLeft, Clock, Calendar, CheckCircle2, Share2, MoveRight, BookOpen } from "lucide-react";
import { KNOWLEDGE_ARTICLES } from "../data/knowledgeData";
import SEOHead from "../components/SEOHead";
import GeoAnswerBox from "../components/GeoAnswerBox";

export default function ArticleDetailPage({ lang = "tr", slug }: { lang?: string; slug?: string }) {
  const article = KNOWLEDGE_ARTICLES.find((a) => a.slug === slug) || KNOWLEDGE_ARTICLES[0];

  return (
    <div className="bg-[#09131c] text-white py-16 px-4 sm:px-6 lg:px-8">
      <SEOHead
        title={`${article.title} | STRUCTIVA Engineering Guide`}
        description={article.summary}
        canonicalPath={`/${lang}/knowledge/${article.slug}`}
        lang={lang}
        ogImage={article.image}
        ogType="article"
        breadcrumbs={[
          { name: "STRUCTIVA", url: `/${lang}` },
          { name: "Knowledge Center", url: `/${lang}/knowledge` },
          { name: article.title, url: `/${lang}/knowledge/${article.slug}` }
        ]}
      />

      <div className="mx-auto max-w-4xl">
        {/* Back Link */}
        <Link
          href={`/${lang}/knowledge`}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-amber-400 mb-8 transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Tüm Rehberlere Dön</span>
        </Link>

        {/* Article Meta */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-4 font-mono">
          <span className="bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full uppercase font-bold border border-amber-500/30">
            {article.category}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock size={12} />
            <span>{article.readTime}</span>
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Calendar size={12} />
            <span>{article.publishedDate}</span>
          </span>
        </div>

        {/* Primary H1 */}
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-8">
          {article.title}
        </h1>

        {/* Lead Summary */}
        <div className="text-base sm:text-lg text-slate-300 leading-relaxed border-l-2 border-amber-400 pl-6 my-8 font-medium">
          {article.summary}
        </div>

        {/* Hero Image */}
        <div className="rounded-3xl overflow-hidden border border-white/15 shadow-2xl my-10 relative">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-80 sm:h-[420px] object-cover"
          />
        </div>

        {/* Key Takeaways Box */}
        <div className="rounded-2xl bg-[#0e1b27] border border-amber-400/40 p-6 sm:p-8 my-10 shadow-xl">
          <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4 flex items-center gap-2 font-mono">
            <span>Özet Mühendislik Çıkarımları</span>
          </h3>
          <div className="space-y-3">
            {article.keyTakeaways.map((takeaway, idx) => (
              <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                <span>{takeaway}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Article Body Content */}
        <div className="space-y-6 text-sm sm:text-base text-slate-300 leading-relaxed pt-4 border-t border-white/10">
          {article.content.map((paragraph, pIdx) => (
            <p key={pIdx}>{paragraph}</p>
          ))}
        </div>

        {/* Contextual RFQ Call to Action */}
        <div className="rounded-3xl bg-gradient-to-r from-amber-500/20 via-amber-500/10 to-transparent border border-amber-500/40 p-8 my-16 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Bu Standartlarda Bir Bina mı Planlıyorsunuz?</h3>
            <p className="text-xs text-slate-300 max-w-md">
              Proje arsanızın boyutlarını ve kullanım amacını iletin, Adana mühendislik ekibimiz ücretsiz statik fizibilite sunsun.
            </p>
          </div>
          <Link
            href={`/${lang}/request-a-quote`}
            className="shrink-0 flex items-center gap-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-[#0f1d2a] px-6 py-3.5 text-xs font-black uppercase tracking-wider transition-all shadow-xl shadow-amber-500/20"
          >
            <span>Teklif Talebi Oluştur</span>
            <MoveRight size={14} />
          </Link>
        </div>

        {/* GEO Fact Box */}
        <GeoAnswerBox langPrefix={`/${lang}`} />
      </div>
    </div>
  );
}
