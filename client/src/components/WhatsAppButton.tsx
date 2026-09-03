import React, { useState } from "react";
import { MessageSquare, Phone, X } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function WhatsAppButton() {
  const { t } = useLanguage();
  const [tooltipVisible, setTooltipVisible] = useState(true);
  const phoneNumber = "905320550945";
  const formattedPhone = "0532 055 09 45";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hello,%20STRUCTIVA.%20I%20would%20like%20to%20request%20information%20and%20pricing%20for%20engineered%20steel%20structures.`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-5 duration-500">
      {/* Tooltip badge */}
      {tooltipVisible && (
        <div className="hidden sm:flex items-center gap-2 bg-[#0e1b27]/95 text-white text-xs font-semibold px-4 py-2.5 rounded-2xl border border-emerald-500/40 shadow-2xl backdrop-blur-md">
          <div className="flex flex-col text-left">
            <span className="text-[10px] uppercase font-mono text-emerald-400 font-bold">{t("wp_tooltip_title")}</span>
            <span className="text-white font-mono font-bold text-xs">{formattedPhone}</span>
          </div>
          <button
            onClick={() => setTooltipVisible(false)}
            className="p-1 text-slate-400 hover:text-white rounded-full hover:bg-white/10 ml-1"
            title="Kapat"
          >
            <X size={13} />
          </button>
        </div>
      )}

      {/* Main Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Destek Hattı (0532 055 09 45)"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/40 hover:scale-110 active:scale-95 transition-all duration-300"
      >
        {/* Pulsing halo */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping -z-10 group-hover:opacity-100" />
        
        {/* Official WhatsApp SVG Icon */}
        <svg
          viewBox="0 0 32 32"
          className="h-7 w-7 fill-current drop-shadow-md"
        >
          <path d="M16 2C8.28 2 2 8.28 2 16c0 2.72.78 5.26 2.12 7.42L2.5 30l6.8-1.58C11.36 29.38 13.62 30 16 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm0 25.66c-2.14 0-4.14-.58-5.88-1.6l-.42-.24-4.36 1.02 1.04-4.24-.26-.44C4.98 20.36 4.36 18.26 4.36 16 4.36 9.58 9.58 4.36 16 4.36S27.64 9.58 27.64 16 22.42 27.66 16 27.66zm7.68-8.82c-.42-.22-2.48-1.22-2.86-1.36-.38-.14-.66-.22-.94.22-.28.42-1.08 1.36-1.32 1.64-.24.28-.48.3-.9.1-.42-.22-1.78-.66-3.4-2.1-1.26-1.12-2.1-2.5-2.34-2.92-.24-.42-.02-.64.18-.86.2-.18.42-.48.64-.72.22-.24.28-.42.42-.7.14-.28.08-.52-.04-.72-.12-.22-.94-2.26-1.3-3.1-.34-.82-.7-.7-.94-.72h-.8c-.28 0-.74.1-1.12.52-.38.42-1.48 1.44-1.48 3.52 0 2.08 1.52 4.1 1.72 4.38.22.28 2.98 4.54 7.22 6.38 1.02.44 1.8.7 2.42.9.18.06.36.06.5.06 1.02 0 2.02-.32 2.64-1.16.62-.84.62-1.56.44-1.72-.18-.16-.46-.26-.88-.48z" />
        </svg>
      </a>
    </div>
  );
}
