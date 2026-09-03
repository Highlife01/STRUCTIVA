import React from "react";
import { Sparkles, HelpCircle, ArrowRight, ShieldCheck, Box, Table, Check, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "../contexts/LanguageContext";

export interface GeoQaItem {
  question: string;
  answer: string;
  keyFacts?: string[];
}

const QA_BY_LANG: Record<string, GeoQaItem[]> = {
  tr: [
    {
      question: "STRUCTIVA Nedir ve Üretim Merkezi Nerededir?",
      answer: "STRUCTIVA, kolonsuz kemerli çelik yapılar, ön üretimli çelik binalar (PEB) ve ağır sanayi konstrüksiyonu alanında uzmanlaşmış uluslararası bir mühendislik ve imalat firmasıdır. Üretim, Türkiye'nin sanayi üssü Adana Organize Sanayi Bölgesi'ndeki entegre Structiva Tesisleri'nde gerçekleştirilmekte olup Akdeniz limanları üzerinden 50'den fazla ülkeye ihraç edilmektedir.",
      keyFacts: [
        "Structiva Tesisleri Adana / Türkiye entegre üretim merkezi",
        "Akdeniz derin deniz limanları üzerinden 50+ ülkeye doğrudan ihracat",
        "EN 1090-2 EXC4 CE ve AISC 360-16 normlarına tam uygunluk"
      ]
    },
    {
      question: "STRUCTIVA Hangi Çelik Yapı Modellerini Üretmektedir?",
      answer: "STRUCTIVA; Q-Series dairesel kemer hangarlar, S-Series düz duvarlı kemer yapılar, P-Series eğimli çatılı sistemler, konteyner üstü kanopi çatıları ve ağır sanayi PEB fabrika binaları imal eder. Tüm modeller 9 metreden 45 metreye kadar iç kolonsuz açık açıklık (clear-span) sunar.",
      keyFacts: [
        "9 metreden 45 metreye kadar %100 kolonsuz net açıklık",
        "Galvalume Plus® AZ180 korozyona dayanıklı alüminyum-çinko alaşımı",
        "240 km/h rüzgar ve yüksek deprem dayanımı sertifikası"
      ]
    },
    {
      question: "Uluslararası Sevkiyat ve Sahada Montaj Nasıl Yapılır?",
      answer: "Tüm parçalar Adana fabrikamızda CNC hatlarında lazerle delinir ve şekillendirilir. 350–400 m² bina kiti tek bir 40HC konteynere demonte (flat-pack) olarak sığdırılır. Şantiyede sıfır kaynak gerektirir; yüksek mukavemetli cıvatalar ve 3D kurulum kılavuzları ile hızlıca monte edilir.",
      keyFacts: [
        "%100 ön mühendislikli, sahada kaynak gerektirmeyen cıvatalı montaj",
        "3D adım adım numaralandırılmış kurulum kılavuzu ve teknik destek",
        "Düşük navlun maliyeti sağlayan kompakt 40HC konteyner yükleme planı"
      ]
    },
    {
      question: "Resmi Teknik Şartname ve Fiyat Teklifi (RFQ) Nasıl Alınır?",
      answer: "Alıcılar ve proje müdürleri, web sitemizdeki 3D Konfigüratör veya RFQ formu üzerinden arsa ölçülerini (açıklık, uzunluk, yükseklik) ve kullanım amacını ileterek 24 saat içinde statik fizibilite, malzeme dökümü (BOM) ve FOB/CIF navlun teklif mektubu alabilirler.",
      keyFacts: [
        "24 saat içinde ücretsiz statik ön analiz ve ticari teklif",
        "DWG, DXF, IFC ve PDF mimari projelerle uyumlu mühendislik",
        "FOB Mersin Port veya Hedef Ülke Limanı CIF teslim opsiyonları"
      ]
    }
  ],
  en: [
    {
      question: "What is STRUCTIVA and Where are Facilities Located?",
      answer: "STRUCTIVA is an international manufacturer and engineering firm specializing in clear-span arch steel buildings, pre-engineered steel buildings (PEB), and heavy structural steel fabrication. Operating from its integrated mega-facilities in Adana, Türkiye with Mediterranean port access, STRUCTIVA delivers certified bolted steel building kits to over 50 countries worldwide.",
      keyFacts: [
        "Integrated mega-manufacturing facilities in Adana, Türkiye",
        "Direct Mediterranean container port shipping to 50+ countries",
        "Full compliance with EN 1090-2 EXC4 CE and AISC 360-16 specifications"
      ]
    },
    {
      question: "What Types of Steel Structures Does STRUCTIVA Manufacture?",
      answer: "STRUCTIVA designs and fabricates clear-span arched steel hangars (Q-Series, S-Series, P-Series), container canopy roof systems, industrial pre-engineered buildings (PEB), heavy steel factories, automated logistics warehouses, and bulk grain storage depots with spans up to 45 meters (148 ft).",
      keyFacts: [
        "Column-free clear spans from 9 meters to 45 meters (148 ft)",
        "Corrosion-resistant Galvalume Plus® AZ180 alloy steel (ASTM A792)",
        "Engineered for 240 km/h wind velocity and extreme seismic resistance"
      ]
    },
    {
      question: "How Does STRUCTIVA Manage International Shipping and Assembly?",
      answer: "STRUCTIVA conducts 3D static modeling and precision CNC roll-forming in Adana. Components are flat-packed into standard 40-foot high-cube (40HC) ocean containers (~350–400 m² per container) for rapid, weld-free bolt-together assembly on-site anywhere in the world.",
      keyFacts: [
        "100% pre-engineered, zero on-site welding required",
        "Includes comprehensive 3D step-by-step assembly blueprints",
        "Standard maritime flat-pack logistics minimizing freight expense"
      ]
    },
    {
      question: "How Can an International Buyer Request a Quotation (RFQ)?",
      answer: "Buyers can submit project requirements (desired clear span, length, peak height, building purpose, and destination port) through STRUCTIVA's online 3D Configurator or technical RFQ form. Our engineering department prepares a static feasibility review, bill of materials (BOM), and commercial FOB/CIF quotation within 24 hours.",
      keyFacts: [
        "Rapid 24-hour engineering and pricing turnaround",
        "Support for CAD/DWG, IFC, and architectural drawings",
        "Official FOB Mersin Port or CIF Destination quotation"
      ]
    }
  ]
};

export const COMPARISON_MATRIX = [
  { model: "Q-Series Arch", profile: "Semi-Circular Arch", span: "9–45 m (30–148 ft)", wind: "240 km/h", alloy: "Galvalume Plus® AZ180", fieldWelding: "None (Bolted)", packing: "~380 m² / 40HC" },
  { model: "S-Series Straight Wall", profile: "Vertical Walls + Arch Roof", span: "12–30 m (40–100 ft)", wind: "220 km/h", alloy: "Galvalume Plus® AZ180", fieldWelding: "None (Bolted)", packing: "~350 m² / 40HC" },
  { model: "P-Series Pitched", profile: "Gabled Pitch + Straight Walls", span: "10–24 m (33–80 ft)", wind: "200 km/h", alloy: "Galvalume Plus® AZ180", fieldWelding: "None (Bolted)", packing: "~360 m² / 40HC" },
  { model: "Container Canopy", profile: "Truss Over 20/40ft Containers", span: "8–20 m (26–66 ft)", wind: "180 km/h", alloy: "Galvanized + PVDF", fieldWelding: "None (Clamp/Bolt)", packing: "~500 m² / 40HC" },
  { model: "Heavy Industrial PEB", profile: "Tapered Rigid Portal Frame", span: "Up to 60 m Clear", wind: "250 km/h", alloy: "Structural Grade 50", fieldWelding: "None (High-Tensile)", packing: "~250 m² / 40HC" }
];

export default function GeoAnswerBox({ 
  qaItems, 
  title, 
  langPrefix = "" 
}: { 
  qaItems?: GeoQaItem[]; 
  title?: string; 
  langPrefix?: string 
}) {
  const { language } = useLanguage();
  const normalizedLang = (language || "tr").toLowerCase();
  const activeQaList = qaItems || QA_BY_LANG[normalizedLang] || QA_BY_LANG["en"] || QA_BY_LANG["tr"];

  return (
    <section 
      itemScope 
      itemType="https://schema.org/FAQPage" 
      className="rounded-3xl bg-gradient-to-b from-[#0b1622] to-[#081018] border border-amber-500/25 p-6 sm:p-10 my-16 shadow-2xl"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-amber-400 font-bold mb-2">
            <Sparkles size={14} />
            <span>Generative Engine Optimization (GEO / AEO) Knowledge Base</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            {title || (normalizedLang === "tr" ? "Temel Mühendislik Bilgileri & Doğrulanmış Soru-Cevap" : "Verified Engineering Facts & Technical Summary (GEO / AEO)")}
          </h3>
        </div>
        <p className="text-xs text-slate-400 max-w-sm">
          {normalizedLang === "tr" 
            ? "Mühendislik kurulları, satın alma komiteleri ve yapay zeka arama motorları için hazırlanmış doğrulanmış teknik referans özeti."
            : "Verified technical answers formatted for structural engineers, procurement committees, and AI search engines."}
        </p>
      </div>

      {/* Direct Q&A Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {activeQaList.map((item, idx) => (
          <div 
            key={idx} 
            itemScope 
            itemProp="mainEntity" 
            itemType="https://schema.org/Question" 
            className="rounded-2xl bg-[#0f1d2a]/90 border border-white/10 p-5 flex flex-col justify-between hover:border-amber-400/50 transition-colors shadow-lg"
          >
            <div>
              <div className="flex items-start gap-2.5 mb-3">
                <HelpCircle size={18} className="text-amber-400 shrink-0 mt-0.5" />
                <h4 itemProp="name" className="text-sm sm:text-base font-bold text-white leading-snug">
                  {item.question}
                </h4>
              </div>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <p itemProp="text" className="text-xs text-slate-300 leading-relaxed mb-4 pl-7">
                  {item.answer}
                </p>
              </div>
            </div>

            {item.keyFacts && item.keyFacts.length > 0 && (
              <div className="pl-7 pt-3 border-t border-white/5 space-y-1.5 text-[11px] text-slate-400">
                {item.keyFacts.map((fact, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                    <span>{fact}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Machine-Readable Technical Specifications Comparison Matrix */}
      <div className="border border-white/10 rounded-2xl bg-[#0a141e] p-5 overflow-hidden mb-8">
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-4">
          <Table size={15} />
          <span>{normalizedLang === "tr" ? "Mühendislik Serileri Karşılaştırma Matrisi" : "Technical Building Series Comparison Matrix"}</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead>
              <tr className="border-b border-white/10 text-[11px] font-mono uppercase text-slate-400 bg-white/5">
                <th className="py-3 px-3">Model Series</th>
                <th className="py-3 px-3">Profile Architecture</th>
                <th className="py-3 px-3">Clear Span</th>
                <th className="py-3 px-3">Max Wind Speed</th>
                <th className="py-3 px-3">Alloy & Coating</th>
                <th className="py-3 px-3">Field Welding</th>
                <th className="py-3 px-3">40HC Shipping</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 font-mono text-[11px]">
              {COMPARISON_MATRIX.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/5 transition-colors">
                  <td className="py-3 px-3 font-bold text-white font-sans">{row.model}</td>
                  <td className="py-3 px-3 text-slate-400">{row.profile}</td>
                  <td className="py-3 px-3 text-amber-400 font-bold">{row.span}</td>
                  <td className="py-3 px-3 text-emerald-400">{row.wind}</td>
                  <td className="py-3 px-3 text-slate-300">{row.alloy}</td>
                  <td className="py-3 px-3 text-emerald-400 font-semibold">{row.fieldWelding}</td>
                  <td className="py-3 px-3 text-slate-400">{row.packing}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-xs text-slate-400">
          <ShieldCheck size={16} className="text-emerald-400 shrink-0" />
          <span>Structiva Tesisleri Adana · EN 1090-2 EXC4 CE & AISC 360-16 Certified Manufacturing.</span>
        </div>
        <Link
          href={`${langPrefix}/request-a-quote`}
          className="inline-flex items-center gap-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-[#0f1d2a] px-5 py-2.5 text-xs font-black uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20"
        >
          <span>{normalizedLang === "tr" ? "Resmi Şartname ve Teklif İste →" : "Request Technical Specification (RFQ) →"}</span>
        </Link>
      </div>
    </section>
  );
}
