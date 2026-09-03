import React, { useState } from "react";
import { Calculator, Check, ArrowRight, Box, Layers, Shield, Sparkles, Send, FileText, Printer } from "lucide-react";
import { STEEL_MODELS } from "../data/modelsData";
import { saveInquiry } from "../services/messageService";
import { useLanguage } from "../contexts/LanguageContext";
import SpecSheetModal from "./SpecSheetModal";

export default function BuildingConfigurator() {
  const { t } = useLanguage();
  const [selectedModelId, setSelectedModelId] = useState("q-series");
  const [span, setSpan] = useState(24); // meters
  const [length, setLength] = useState(48); // meters
  const [height, setHeight] = useState(8); // meters
  const [unitSystem, setUnitSystem] = useState<"metric" | "imperial">("metric");
  const [showSpecModal, setShowSpecModal] = useState(false);

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
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <span className="text-amber-400 text-xs font-mono font-bold uppercase tracking-widest block mb-1">
            {t("configurator_eyebrow")}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            {t("configurator_title")}
          </h2>
        </div>
        <p className="text-xs text-slate-400 max-w-md">
          {t("configurator_subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Model Selection & Sliders */}
        <div className="lg:col-span-7 space-y-6">
          {/* Model Selector Tabs */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
              1. {t("models_title")}
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
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
                2. {t("stat_span")} & {t("config_height")}
              </h4>
              <div className="flex items-center bg-black/40 rounded-lg p-0.5 border border-white/10 text-[10px] font-mono">
                <button
                  type="button"
                  onClick={() => setUnitSystem("metric")}
                  className={`px-2 py-0.5 rounded ${unitSystem === "metric" ? "bg-amber-500 text-[#0f1d2a] font-bold" : "text-slate-400 hover:text-white"}`}
                >
                  METRİK (m)
                </button>
                <button
                  type="button"
                  onClick={() => setUnitSystem("imperial")}
                  className={`px-2 py-0.5 rounded ${unitSystem === "imperial" ? "bg-amber-500 text-[#0f1d2a] font-bold" : "text-slate-400 hover:text-white"}`}
                >
                  IMPERIAL (ft)
                </button>
              </div>
            </div>

            {/* Span / Width Slider */}
            <div>
              <div className="flex justify-between text-xs font-semibold mb-2">
                <span className="text-slate-300">{t("config_span")}:</span>
                <span className="text-amber-400 font-mono font-bold text-sm">
                  {span} m <span className="text-slate-400 text-xs font-normal">({Math.round(span * 3.28)} ft)</span>
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
            </div>

            {/* Length Slider */}
            <div>
              <div className="flex justify-between text-xs font-semibold mb-2">
                <span className="text-slate-300">{t("config_length")}:</span>
                <span className="text-amber-400 font-mono font-bold text-sm">
                  {length} m <span className="text-slate-400 text-xs font-normal">({Math.round(length * 3.28)} ft)</span>
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
            </div>

            {/* Peak Height Slider */}
            <div>
              <div className="flex justify-between text-xs font-semibold mb-2">
                <span className="text-slate-300">{t("config_height")}:</span>
                <span className="text-amber-400 font-mono font-bold text-sm">
                  {height} m <span className="text-slate-400 text-xs font-normal">({Math.round(height * 3.28)} ft)</span>
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
              3. {t("config_accessories")}
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
                  {span} m
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
                <span className="block text-[10px] text-slate-400 uppercase">{t("config_area")}</span>
                <strong className="text-base sm:text-lg font-mono font-black text-amber-400">{areaM2} m²</strong>
                <span className="block text-[9px] text-slate-500 font-mono">({areaSqFt.toLocaleString()} sq ft)</span>
              </div>
              <div className="bg-white/5 rounded-xl p-2.5">
                <span className="block text-[10px] text-slate-400 uppercase">{t("config_volume")}</span>
                <strong className="text-base sm:text-lg font-mono font-black text-white">{volumeM3.toLocaleString()} m³</strong>
                <span className="block text-[9px] text-slate-500 font-mono">{t("stat_span_desc")}</span>
              </div>
              <div className="bg-white/5 rounded-xl p-2.5">
                <span className="block text-[10px] text-slate-400 uppercase">{t("config_containers")}</span>
                <strong className="text-base sm:text-lg font-mono font-black text-emerald-400">~{containersNeeded} Cont.</strong>
                <span className="block text-[9px] text-slate-500 font-mono">40HC Flat-pack</span>
              </div>
            </div>

            {/* Action Bar: View Spec Sheet & PDF */}
            <div className="mt-4 pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-[11px] text-slate-400 flex items-center gap-1.5">
                <Shield size={13} className="text-amber-400" />
                <span>EN 1090-2 & Galvalume Plus® Sertifikalı</span>
              </span>
              <button
                type="button"
                onClick={() => setShowSpecModal(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 hover:text-amber-200 text-xs font-bold transition-all shadow-sm"
              >
                <Printer size={13} />
                <span>Resmi Şartnameyi İncele / PDF</span>
              </button>
            </div>
          </div>

          {/* Quick Technical Brief Form */}
          <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-2">
              <Send size={14} className="text-amber-400" />
              <span>{t("config_get_quote")}</span>
            </h4>

            {submitted ? (
              <div className="rounded-xl bg-emerald-500/20 border border-emerald-500/40 p-5 text-center text-emerald-300 animate-in fade-in duration-300">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-[#0f1d2a] mx-auto mb-2 font-black">
                  <Check size={24} strokeWidth={3} />
                </div>
                <h5 className="font-bold text-sm text-white">{t("config_submitted_title")}</h5>
                <p className="text-xs text-slate-300 mt-1">
                  {t("config_submitted_desc")}
                </p>

                {/* Instant Actions for the submitted lead */}
                <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-2">
                  <a
                    href={`https://wa.me/905320550945?text=${encodeURIComponent(
                      `Merhaba STRUCTIVA, web sitenizden ${selectedModel.name} (${span}m × ${length}m = ${areaM2}m²) çelik hangar teklif talebimi oluşturdum. Hızlıca detayları görüşebilir miyiz?`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-lg transition-all"
                  >
                    <Send size={13} />
                    <span>WhatsApp'tan Hemen İletin</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setShowSpecModal(true)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-all"
                  >
                    <FileText size={13} />
                    <span>Şartnameyi İndir / PDF</span>
                  </button>
                </div>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-bold text-amber-400 hover:underline block mx-auto"
                >
                  ← {t("nav_configurator")}
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    required
                    placeholder={`${t("config_name")} *`}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="rounded-lg bg-black/30 border border-white/15 px-3 py-2 text-xs text-white placeholder:text-slate-500 outline-none focus:border-amber-400"
                  />
                  <input
                    type="email"
                    required
                    placeholder={`${t("config_email")} *`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="rounded-lg bg-black/30 border border-white/15 px-3 py-2 text-xs text-white placeholder:text-slate-500 outline-none focus:border-amber-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="tel"
                    placeholder={t("config_phone")}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="rounded-lg bg-black/30 border border-white/15 px-3 py-2 text-xs text-white placeholder:text-slate-500 outline-none focus:border-amber-400"
                  />
                  <input
                    type="text"
                    placeholder={`${t("config_company")} / ${t("config_country")}`}
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="rounded-lg bg-black/30 border border-white/15 px-3 py-2 text-xs text-white placeholder:text-slate-500 outline-none focus:border-amber-400"
                  />
                </div>

                <textarea
                  rows={2}
                  placeholder={t("config_notes")}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full rounded-lg bg-black/30 border border-white/15 px-3 py-2 text-xs text-white placeholder:text-slate-500 outline-none focus:border-amber-400 resize-none"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-[#0f1d2a] text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 active:scale-[0.98] transition-all"
                >
                  {loading ? "..." : t("config_btn_submit")}
                  <ArrowRight size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Branded Official Spec Sheet & Quote PDF Modal */}
      <SpecSheetModal
        isOpen={showSpecModal}
        onClose={() => setShowSpecModal(false)}
        data={{
          modelName: selectedModel.name,
          modelSeries: selectedModel.series,
          span,
          length,
          height,
          areaM2,
          areaSqFt,
          volumeM3,
          containersNeeded,
          accessories,
          unitSystem,
        }}
      />
    </div>
  );
}
