import React, { useState } from "react";
import { Link } from "wouter";
import { ArrowUpRight, MapPin, Building2, Layers, Check } from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  location: string;
  model: string;
  size: string;
  sector: string;
  year: string;
  image: string;
}

const PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Mersin Port Uluslararası Lojistik Kampüsü",
    location: "Mersin, Türkiye",
    model: "S-Series Hybrid (Düz Duvar)",
    size: "4.800 m² (4 x 1.200 m²)",
    sector: "Lojistik & Antrepo",
    year: "2025",
    image: "/images/global-project.jpg"
  },
  {
    id: "proj-2",
    title: "Al-Ahsa Mega Tarımsal Hububat Depolama Tesisi",
    location: "Al-Ahsa, Suudi Arabistan",
    model: "Q-Series Quonset Arch",
    size: "12.500 m² (50.000 ton buğday kapasitesi)",
    sector: "Tarım & Tahıl",
    year: "2024",
    image: "/images/hero-arch-structure.jpg"
  },
  {
    id: "proj-3",
    title: "Bavyera Bölge Havaalanı Genel Havacılık Hangarı",
    location: "Münih, Almanya",
    model: "Q-Series Clear-Span (36m açıklık)",
    size: "2.160 m² (Hidrolik kapılı)",
    sector: "Havacılık Hangarı",
    year: "2025",
    image: "/images/engineering-detail.jpg"
  },
  {
    id: "proj-4",
    title: "Bakü Liman Sahası Konteyner Üstü Kanopi Depoları",
    location: "Bakü, Azerbaycan",
    model: "Container Canopy System",
    size: "3.200 m²",
    sector: "Liman & Gümrük",
    year: "2024",
    image: "/images/global-project.jpg"
  },
  {
    id: "proj-5",
    title: "İç Anadolu Maden Konsantre Stoklama Deposu",
    location: "Sivas, Türkiye",
    model: "Q-Series Heavy Snow Arch",
    size: "5.400 m²",
    sector: "Madencilik",
    year: "2023",
    image: "/images/hero-arch-structure.jpg"
  }
];

import SEOHead from "../components/SEOHead";

export default function ProjectsPage({ lang = "tr" }: { lang?: string }) {
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.sector.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="bg-[#09131c] text-white py-16 px-4 sm:px-6 lg:px-8">
      <SEOHead
        title="International Steel Building Case Studies & Projects | STRUCTIVA"
        description="Review international completed industrial projects, clear-span hangars, logistics campuses, and bulk storage facilities manufactured at Structiva Tesisleri Adana."
        canonicalPath={`/${lang}/projects`}
        lang={lang}
        breadcrumbs={[
          { name: "STRUCTIVA", url: `/${lang}` },
          { name: "Projects", url: `/${lang}/projects` }
        ]}
      />
      <div className="mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 text-xs font-mono font-bold uppercase tracking-widest block mb-2">
            Referanslar & Vaka Analizleri
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Ekonomileri Harekete Geçiren <span className="text-amber-400">Çelik Yapılar</span>
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            50'den fazla ülkede tamamlanan projelerimiz, çöl sıcağından yoğun kar fırtınalarına kadar 
            en zorlu iklimlerde güvenle hizmet vermektedir.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-12">
          {[
            { id: "all", label: "Tüm Projeler" },
            { id: "lojistik", label: "Lojistik & Antrepo" },
            { id: "tarım", label: "Tarım & Tahıl" },
            { id: "havacılık", label: "Havacılık Hangarları" },
            { id: "maden", label: "Madencilik" }
          ].map((tab) => (
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

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filtered.map((proj) => (
            <div
              key={proj.id}
              className="rounded-3xl bg-[#0e1b27] border border-white/10 hover:border-amber-400/50 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group shadow-xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover grayscale-[25%] group-hover:scale-105 group-hover:grayscale-0 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1b27] via-transparent to-transparent" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="rounded bg-black/70 backdrop-blur-md px-2.5 py-1 text-[10px] font-mono font-bold text-amber-400 border border-white/10">
                    {proj.sector}
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
                  <h3 className="text-lg font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">
                    {proj.title}
                  </h3>

                  <div className="space-y-2 border-t border-white/10 pt-3 text-xs text-slate-300 mb-6">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Uygulanan Model:</span>
                      <strong className="text-white">{proj.model}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Yapı Büyüklüğü:</span>
                      <strong className="font-mono text-amber-400">{proj.size}</strong>
                    </div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-between w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-amber-500 hover:text-[#0f1d2a] text-xs font-bold uppercase tracking-wider transition-all"
                >
                  <span>Benzer Proje İçin Teklif Al</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
