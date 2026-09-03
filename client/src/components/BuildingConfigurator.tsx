import React, { useState } from "react";
import { Calculator, Check, ArrowRight, Box, Layers, Shield, Sparkles, Send } from "lucide-react";
import { STEEL_MODELS } from "../data/modelsData";
import { saveInquiry } from "../services/messageService";
import { useLanguage } from "../contexts/LanguageContext";

export default function BuildingConfigurator() {
  const { t } = useLanguage();
  const [selectedModelId, setSelectedModelId] = useState("q-series");
  const [span, setSpan] = useState(24); // meters
  const [length, setLength] = useState(48); // meters
  const [height, setHeight] = useState(8); // meters

  // Selected accessories
  const [accessories, setAccessories] = useState<string[]>([
    "Large Overhead Rollup Door",
    "Polycarbonate Skylights"
  ]);

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [country, setCountry] = useState("Türkiye");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const selectedModel = STEEL_MODELS.find((m) => m.id === selectedModelId) || STEEL_MODELS[0];

  // Calculated metrics
  const areaM2 = Math.round(span * length);
  const areaSqFt = Math.round(areaM2 * 10.764);
  const volumeM3 = Math.round(areaM2 * (height * 0.72));
  // Arch steel flat-packs compactly: ~350-400 m2 of building per 40ft HC container
  const containersNeeded = Math.max(1, Math.ceil(areaM2 / 380));

  const toggleAccessory = (acc: string) => {
    setAccessories((prev) =>
      prev.includes(acc) ? prev.filter((a) => a !== acc) : [...prev, acc]
    );
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await saveInquiry({
        type: "quote",
        name: name || "Web Visitor",
        email,
        phone,
        company,
        country,
        model: selectedModel.name,
        span,
        length,
        height,
        areaM2,
        accessories,
        message: notes || `Technical building brief: ${selectedModel.name}, ${span}m width x ${length}m length (${areaM2} m²).`,
      });

      setSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-3xl bg-[#0e1b27] border border-white/10 p-6 sm:p-8 lg:p-10 text-white shadow-2xl">
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2 text-amber-400 text-xs font-mono uppercase tracking-widest mb-2">
            <Calculator size={16} />
            <span>Parametric Building Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Design Your <span className="text-amber-400">Clear-Span Steel Building</span>
          </h2>
        </div>
        <p className="text-xs text-slate-400 max-w-sm">
          Select profile geometry, tune dimensions, and receive live floor area, interior volume & export packing calculations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Model Selection & Sliders */}
        <div className="lg:col-span-7 space-y-6">
          {/* Model Selector Tabs */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
              1. Choose Building Architecture
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {STEEL_MODELS.map((model) => (
                <button
                  key={model.id}
                  type="button"
                  onClick={() => setSelectedModelId(model.id)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    selectedModelId === model.id
                      ? "bg-amber-500/20 border-amber-400 text-white shadow-md shadow-amber-500/10"
                      : "bg-white/5 border-white/10 hover:bg-white/10 text-slate-300"
                  }`}
                >
                  <div className="h-8 flex items-center mb-1">
                    <svg viewBox="0 0 180 100" className="h-full w-auto stroke-current fill-none stroke-[3]">
                      <path d={model.svgProfile} />
                    </svg>
                  </div>
                  <strong className="block text-xs truncate">{model.name}</strong>
                  <span className="text-[10px] text-slate-400 block truncate">{model.series}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Dimension Controls */}
          <div className="rounded-2xl bg-white/5 border border-white/10 p-5 space-y-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center justify-between">
              <span>2. Dimensions & Clearance</span>
              <span className="text-slate-400 font-normal lowercase font-mono">metric / imperial</span>
            </h4>

            {/* Span / Width Slider */}
            <div>
              <div className="flex justify-between text-xs font-semibold mb-2">
                <span className="text-slate-300">Clear Span (Width):</span>
                <span className="text-amber-400 font-mono font-bold text-sm">
                  {span} meters <span className="text-slate-400 text-xs font-normal">({Math.round(span * 3.28)} ft)</span>
                </span>
              </div>
              <input
                type="range"
                min="9"
                max="45"
                step="1"
                value={span}
                onChange={(e) => setSpan(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer h-2 bg-slate-700 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                <span>9 m (30 ft)</span>
                <span>24 m (80 ft)</span>
                <span>45 m (150 ft)</span>
              </div>
            </div>

            {/* Length Slider */}
            <div>
              <div className="flex justify-between text-xs font-semibold mb-2">
                <span className="text-slate-300">Building Length:</span>
                <span className="text-amber-400 font-mono font-bold text-sm">
                  {length} meters <span className="text-slate-400 text-xs font-normal">({Math.round(length * 3.28)} ft)</span>
                </span>
              </div>
              <input
                type="range"
                min="12"
                max="120"
                step="3"
                value={length}
                onChange={(e) => setLength(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer h-2 bg-slate-700 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                <span>12 m (40 ft)</span>
                <span>60 m (200 ft)</span>
                <span>120 m (400 ft)</span>
              </div>
            </div>

            {/* Peak Height Slider */}
            <div>
              <div className="flex justify-between text-xs font-semibold mb-2">
                <span className="text-slate-300">Center Peak Height:</span>
                <span className="text-amber-400 font-mono font-bold text-sm">
                  {height} meters <span className="text-slate-400 text-xs font-normal">({Math.round(height * 3.28)} ft)</span>
                </span>
              </div>
              <input
                type="range"
                min="4"
                max="14"
                step="0.5"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer h-2 bg-slate-700 rounded-lg"
              />
            </div>
          </div>

          {/* Accessories Checkboxes */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
              3. Accessories & Openings
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {[
                "Large Overhead Rollup Door",
                "Hydraulic Aviation Bi-Fold Door",
                "Personnel Steel Pass Door",
                "Polycarbonate Skylights",
                "Rotary Turbine Roof Vents",
                "R-19 Blanket Thermal Insulation"
              ].map((acc) => (
                <button
                  key={acc}
                  type="button"
                  onClick={() => toggleAccessory(acc)}
                  className={`flex items-center gap-2.5 p-2.5 rounded-xl border text-left transition-colors ${
                    accessories.includes(acc)
                      ? "bg-amber-500/15 border-amber-500 text-white font-medium"
                      : "bg-white/5 border-white/10 hover:bg-white/10 text-slate-400"
                  }`}
                >
                  <div className={`flex h-4 w-4 shrink-0 items-center justify-center rounded ${accessories.includes(acc) ? "bg-amber-500 text-[#0f1d2a]" : "border border-slate-600"}`}>
                    {accessories.includes(acc) && <Check size={12} strokeWidth={3} />}
                  </div>
                  <span className="truncate">{acc}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Live Schematic View & Instant RFQ Submission */}
        <div className="lg:col-span-5 space-y-6">
          {/* Live Schematic Display Canvas */}
          <div className="rounded-2xl bg-gradient-to-b from-[#09131d] to-[#0d1822] border border-white/15 p-5 relative overflow-hidden">
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <span className="text-[10px] font-mono uppercase bg-amber-500/20 text-amber-400 px-2.5 py-1 rounded border border-amber-500/30">
                Live Schematic
              </span>
            </div>

            <div className="text-xs text-slate-400 mb-2 font-mono">Profile: {selectedModel.name}</div>

            {/* Dynamic SVG Schematic */}
            <div className="h-44 w-full flex items-center justify-center py-2">
              <svg viewBox="0 0 320 180" className="w-full h-full drop-shadow-2xl">
                {/* Blueprint Grid Lines */}
                <defs>
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="320" height="180" fill="url(#grid)" />

                {/* Ground Level */}
                <line x1="20" y1="150" x2="300" y2="150" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 4" />
                <text x="25" y="165" fill="#94a3b8" fontSize="8" fontFamily="monospace">GROUND DATUM</text>

                {/* Building Profile Path */}
                {selectedModelId === "q-series" && (
                  <path
                    d={`M 40 150 A ${span * 2.6} ${height * 9} 0 0 1 280 150 Z`}
                    fill="rgba(245, 158, 11, 0.12)"
                    stroke="#f59e0b"
                    strokeWidth="3"
                  />
                )}
                {selectedModelId === "s-series" && (
                  <path
                    d={`M 50 150 L 50 ${150 - height * 6} A ${span * 2.2} ${height * 6} 0 0 1 270 ${150 - height * 6} L 270 150 Z`}
                    fill="rgba(245, 158, 11, 0.12)"
                    stroke="#f59e0b"
                    strokeWidth="3"
                  />
                )}
                {selectedModelId === "p-series" && (
                  <path
                    d={`M 50 150 L 50 ${150 - height * 5} L 160 ${150 - height * 10} L 270 ${150 - height * 5} L 270 150 Z`}
                    fill="rgba(245, 158, 11, 0.12)"
                    stroke="#f59e0b"
                    strokeWidth="3"
                  />
                )}
                {selectedModelId === "container-canopy" && (
                  <g>
                    {/* Left Container */}
                    <rect x="40" y="100" width="30" height="50" fill="#334155" stroke="#94a3b8" strokeWidth="1.5" />
                    {/* Right Container */}
                    <rect x="250" y="100" width="30" height="50" fill="#334155" stroke="#94a3b8" strokeWidth="1.5" />
                    {/* Arch */}
                    <path d="M 70 100 A 90 60 0 0 1 250 100" fill="none" stroke="#f59e0b" strokeWidth="3" />
                  </g>
                )}
                {selectedModelId === "heavy-peb" && (
                  <path
                    d={`M 40 150 L 40 70 L 160 50 L 280 70 L 280 150 Z`}
                    fill="rgba(245, 158, 11, 0.12)"
                    stroke="#f59e0b"
                    strokeWidth="3"
                  />
                )}

                {/* Dimension Arrows */}
                <line x1="40" y1="172" x2="280" y2="172" stroke="#e2e8f0" strokeWidth="1" markerEnd="url(#arrow)" />
                <text x="160" y="171" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                  WIDTH: {span} m
                </text>

                {/* Door Graphic if chosen */}
                {accessories.includes("Large Overhead Rollup Door") && (
                  <rect x="135" y="110" width="50" height="40" fill="rgba(15,29,42,0.8)" stroke="#38bdf8" strokeWidth="1.5" />
                )}
              </svg>
            </div>

            {/* Calculated Metric Badges */}
            <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-4 text-center">
              <div className="bg-white/5 rounded-xl p-2.5">
                <span className="block text-[10px] text-slate-400 uppercase">Clear Footprint</span>
                <strong className="text-base sm:text-lg font-mono font-black text-amber-400">{areaM2} m²</strong>
                <span className="block text-[9px] text-slate-500 font-mono">({areaSqFt.toLocaleString()} sq ft)</span>
              </div>
              <div className="bg-white/5 rounded-xl p-2.5">
                <span className="block text-[10px] text-slate-400 uppercase">Usable Volume</span>
                <strong className="text-base sm:text-lg font-mono font-black text-white">{volumeM3.toLocaleString()} m³</strong>
                <span className="block text-[9px] text-slate-500 font-mono">100% column-free</span>
              </div>
              <div className="bg-white/5 rounded-xl p-2.5">
                <span className="block text-[10px] text-slate-400 uppercase">40HC Shipping</span>
                <strong className="text-base sm:text-lg font-mono font-black text-emerald-400">~{containersNeeded} Cont.</strong>
                <span className="block text-[9px] text-slate-500 font-mono">Flat-pack kit</span>
              </div>
            </div>
          </div>

          {/* Quick Technical Brief Form */}
          <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-2">
              <Send size={14} className="text-amber-400" />
              <span>Submit for Official Quotation</span>
            </h4>

            {submitted ? (
              <div className="rounded-xl bg-emerald-500/20 border border-emerald-500/40 p-5 text-center text-emerald-300 animate-in fade-in duration-300">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-[#0f1d2a] mx-auto mb-2 font-black">
                  <Check size={24} strokeWidth={3} />
                </div>
                <h5 className="font-bold text-sm text-white">Talebiniz Başarıyla Alındı!</h5>
                <p className="text-xs text-slate-300 mt-1">
                  Proje detaylarınız teknik ekibimize ve Yönetim Paneline iletildi. 24 saat içinde mühendislik teklifi iletilecektir.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-bold text-amber-400 hover:underline"
                >
                  Yeni bir bina hesapla →
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    required
                    placeholder="Adınız Soyadınız *"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="rounded-lg bg-black/30 border border-white/15 px-3 py-2 text-xs text-white placeholder:text-slate-500 outline-none focus:border-amber-400"
                  />
                  <input
                    type="email"
                    required
                    placeholder="E-posta Adresi *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="rounded-lg bg-black/30 border border-white/15 px-3 py-2 text-xs text-white placeholder:text-slate-500 outline-none focus:border-amber-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="tel"
                    placeholder="Telefon / WhatsApp"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="rounded-lg bg-black/30 border border-white/15 px-3 py-2 text-xs text-white placeholder:text-slate-500 outline-none focus:border-amber-400"
                  />
                  <input
                    type="text"
                    placeholder="Şirket / Ülke"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="rounded-lg bg-black/30 border border-white/15 px-3 py-2 text-xs text-white placeholder:text-slate-500 outline-none focus:border-amber-400"
                  />
                </div>

                <textarea
                  rows={2}
                  placeholder="Proje yeri, arazi durumu veya özel gereksinimler..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full rounded-lg bg-black/30 border border-white/15 px-3 py-2 text-xs text-white placeholder:text-slate-500 outline-none focus:border-amber-400 resize-none"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-[#0f1d2a] text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 active:scale-[0.98] transition-all"
                >
                  {loading ? "İşleniyor..." : "Teklif Talebini Gönder (Dashboard'a İlet)"}
                  <ArrowRight size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
