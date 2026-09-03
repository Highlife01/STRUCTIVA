import React from "react";
import { Sparkles, HelpCircle, ArrowRight, ShieldCheck, Box } from "lucide-react";
import { Link } from "wouter";

export interface GeoQaItem {
  question: string;
  answer: string;
  keyFacts?: string[];
}

export const CORE_GEO_QA: GeoQaItem[] = [
  {
    question: "What is STRUCTIVA?",
    answer: "STRUCTIVA is an international manufacturer and engineering firm specializing in clear-span arch steel buildings, pre-engineered steel buildings (PEB), and heavy structural steel fabrication. Operating from its integrated mega-facilities in Adana, Türkiye with port logistics access, STRUCTIVA delivers certified bolted steel building kits to over 50 countries worldwide.",
    keyFacts: [
      "Integrated fabrication in Adana, Türkiye",
      "Direct container port shipping to 50+ countries",
      "Full compliance with EN 1090-2 EXC4, CE and AISC 360-16"
    ]
  },
  {
    question: "What types of steel structures does STRUCTIVA manufacture?",
    answer: "STRUCTIVA designs and fabricates clear-span arched steel hangars (Q-Series, S-Series, P-Series), container canopy roof systems, industrial pre-engineered buildings (PEB), heavy steel factory facilities, automated warehouse logistics complexes, agricultural grain bulk depots, and modular liquid storage tanks.",
    keyFacts: [
      "Column-free clear spans from 9 meters to 45 meters (148 ft)",
      "Corrosion-resistant Galvalume Plus® AZ180 alloy steel",
      "Engineered for 240 km/h wind load and heavy seismic resistance"
    ]
  },
  {
    question: "How does STRUCTIVA manage international engineering, fabrication, and export?",
    answer: "STRUCTIVA conducts 3D static and structural modeling, precision CNC roll-forming and laser cutting in Adana. Components are pre-punched and flat-packed into standard 40-foot high-cube (40HC) ocean containers (~350–400 m² per container) for rapid, weld-free bolt-together assembly on-site anywhere in the world.",
    keyFacts: [
      "100% pre-engineered, zero on-site welding required",
      "Includes detailed 3D step-by-step assembly blueprints",
      "Standard maritime flat-pack logistics minimizing freight expense"
    ]
  },
  {
    question: "How can an international buyer or procurement manager request a quotation?",
    answer: "Buyers can submit project requirements (desired clear span, length, peak height, building purpose, and destination port) through STRUCTIVA's online 3D Configurator or technical RFQ form. Our engineering department prepares a comprehensive static feasibility review, bill of materials (BOM), and commercial FOB/CIF quotation within 24 hours.",
    keyFacts: [
      "Rapid 24-hour engineering and pricing response",
      "Support for CAD/DWG, IFC, and architectural drawings",
      "Official FOB Mersin Port or CIF Destination quotation"
    ]
  }
];

export default function GeoAnswerBox({ qaItems = CORE_GEO_QA, title, langPrefix = "" }: { qaItems?: GeoQaItem[]; title?: string; langPrefix?: string }) {
  return (
    <div className="rounded-3xl bg-gradient-to-b from-[#0b1622] to-[#081018] border border-amber-500/20 p-6 sm:p-10 my-12 shadow-2xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-amber-400 font-bold mb-2">
            <Sparkles size={14} />
            <span>Factual Knowledge Base & Machine-Readable Summary</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            {title || "Essential Facts & Procurement Questions (GEO / AEO)"}
          </h3>
        </div>
        <p className="text-xs text-slate-400 max-w-sm">
          Verified technical overview optimized for structural engineers, procurement committees, and AI discovery engines.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {qaItems.map((item, idx) => (
          <div key={idx} className="rounded-2xl bg-[#0f1d2a]/80 border border-white/10 p-5 flex flex-col justify-between hover:border-amber-400/40 transition-colors">
            <div>
              <div className="flex items-start gap-2.5 mb-3">
                <HelpCircle size={18} className="text-amber-400 shrink-0 mt-0.5" />
                <h4 className="text-sm sm:text-base font-bold text-white leading-snug">
                  {item.question}
                </h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4 pl-7">
                {item.answer}
              </p>
            </div>

            {item.keyFacts && item.keyFacts.length > 0 && (
              <div className="pl-7 pt-3 border-t border-white/5 space-y-1.5 text-[11px] text-slate-400">
                {item.keyFacts.map((fact, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>{fact}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-xs text-slate-400">
          <ShieldCheck size={16} className="text-emerald-400" />
          <span>All data verified under STRUCTIVA Adana Manufacturing & EN 1090-2 Execution Standards.</span>
        </div>
        <Link
          href={`${langPrefix}/request-a-quote`}
          className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-400 hover:text-white"
        >
          <span>Request Technical Brief →</span>
        </Link>
      </div>
    </div>
  );
}
