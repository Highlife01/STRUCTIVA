import React, { useState, useEffect, useMemo, useRef } from "react";
import { useLocation } from "wouter";
import {
  Search,
  X,
  Building2,
  Layers,
  BookOpen,
  ShieldCheck,
  HelpCircle,
  ArrowRight,
  Sparkles,
  ExternalLink,
  Compass
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { getLocalizedModels } from "../data/modelsData";
import { getLocalizedSectors } from "../data/sectorsData";
import { KNOWLEDGE_ARTICLES } from "../data/knowledgeData";

export interface SearchResultItem {
  id: string;
  type: "model" | "sector" | "knowledge" | "spec" | "faq" | "action";
  title: string;
  subtitle: string;
  badge: string;
  href: string;
  keywords: string[];
}

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GlobalSearchModal({ isOpen, onClose }: GlobalSearchModalProps) {
  const [, setLocation] = useLocation();
  const { language, t } = useLanguage();
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-focus when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    } else {
      setQuery("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Global ESC and arrow navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Build searchable index dynamically
  const searchIndex = useMemo<SearchResultItem[]>(() => {
    const langPrefix = `/${language}`;
    const items: SearchResultItem[] = [];

    // 1. Quick Actions
    items.push({
      id: "action-configurator",
      type: "action",
      title: t("nav_configurator") || "3D Building Configurator",
      subtitle: "Parametric floor area, volume, and 40HC container logistics calculator",
      badge: "Tool",
      href: `${langPrefix}/configurator`,
      keywords: ["3d", "configurator", "calculator", "hesapla", "konfigüratör", "ölçü", "span", "dimension"]
    });

    items.push({
      id: "action-rfq",
      type: "action",
      title: t("cta_quote") || "Request Technical Quotation (RFQ)",
      subtitle: "24-hour engineering feasibility, material takeoff BOM, and CIF/FOB quote",
      badge: "Quote",
      href: `${langPrefix}/request-a-quote`,
      keywords: ["rfq", "quote", "teklif", "fiyat", "maliyet", "cost", "price", "cotizacion", "angebot"]
    });

    items.push({
      id: "action-projects",
      type: "action",
      title: t("nav_projects") || "Global Project Library & References",
      subtitle: "Review international case studies in 50+ countries",
      badge: "Projects",
      href: `${langPrefix}/projects`,
      keywords: ["projects", "projeler", "referanslar", "case studies", "mersin", "baku", "munich", "al-ahsa"]
    });

    // 2. Steel Building Models
    const models = getLocalizedModels(language);
    models.forEach((m) => {
      items.push({
        id: `model-${m.id}`,
        type: "model",
        title: m.name,
        subtitle: `${m.series} · ${m.spanRange} clear span`,
        badge: "Model",
        href: `${langPrefix}/models`,
        keywords: [
          m.name.toLowerCase(),
          m.series.toLowerCase(),
          m.id,
          "hangar",
          "arch",
          "kemer",
          "quonset",
          "peb",
          "span",
          "açıklık",
          ...m.bestFor.map((b) => b.toLowerCase()),
          ...m.features.map((f) => f.toLowerCase())
        ]
      });
    });

    // 3. Sectors
    const sectors = getLocalizedSectors(language);
    sectors.forEach((s) => {
      items.push({
        id: `sector-${s.id}`,
        type: "sector",
        title: s.title,
        subtitle: s.subtitle,
        badge: "Sector",
        href: `${langPrefix}/sectors`,
        keywords: [
          s.title.toLowerCase(),
          s.subtitle.toLowerCase(),
          s.id,
          "agriculture",
          "tarım",
          "tahıl",
          "grain",
          "mining",
          "maden",
          "aviation",
          "havacılık",
          "uçak",
          "logistics",
          "lojistik",
          "antrepo",
          "warehouse",
          "depo",
          "military",
          "savunma"
        ]
      });
    });

    // 4. Knowledge Base Articles
    KNOWLEDGE_ARTICLES.forEach((art) => {
      items.push({
        id: `art-${art.slug}`,
        type: "knowledge",
        title: art.title,
        subtitle: `${art.category} · ${art.readTime}`,
        badge: "Guide",
        href: `${langPrefix}/knowledge/${art.slug}`,
        keywords: [
          art.title.toLowerCase(),
          art.category.toLowerCase(),
          art.summary.toLowerCase(),
          art.slug,
          "guide",
          "rehber",
          "planning",
          "planlama",
          "rfq",
          "galvalume",
          "corrosion",
          "korozyon",
          "pas"
        ]
      });
    });

    // 5. Engineering Standards & Specifications
    items.push({
      id: "spec-en1090",
      type: "spec",
      title: "EN 1090-2:2018 EXC4 & CE Mark",
      subtitle: "Highest structural steel execution class for critical public and heavy industrial facilities",
      badge: "Standard",
      href: `${langPrefix}/engineering`,
      keywords: ["en 1090", "exc4", "ce", "norm", "standard", "sertifika", "certificate", "quality", "kalite"]
    });

    items.push({
      id: "spec-galvalume",
      type: "spec",
      title: "Galvalume Plus® AZ180 (ASTM A792)",
      subtitle: "55% Al-Zn alloy steel with 40-50 year anti-corrosion and high solar reflectance",
      badge: "Metallurgy",
      href: `${langPrefix}/engineering`,
      keywords: ["galvalume", "az180", "astm a792", "korozyon", "pas", "rust", "corrosion", "solar", "aluzinc"]
    });

    items.push({
      id: "spec-wind",
      type: "spec",
      title: "240 km/h Wind & Extreme Seismic Engineering",
      subtitle: "Tested aerodynamics and high ductility bolt connections for hurricane zones",
      badge: "Engineering",
      href: `${langPrefix}/engineering`,
      keywords: ["wind", "rüzgar", "kasırga", "hurricane", "seismic", "deprem", "earthquake", "load", "yük"]
    });

    items.push({
      id: "spec-port",
      type: "spec",
      title: "Adana Manufacturing & Mersin Port Logistics",
      subtitle: "Mediterranean deep-water port proximity (15 km) with 40HC flat-pack container shipping",
      badge: "Logistics",
      href: `${langPrefix}/about`,
      keywords: ["adana", "mersin", "port", "liman", "shipping", "nakliye", "flat-pack", "konteyner", "container", "export"]
    });

    // 6. Common Technical FAQs
    items.push({
      id: "faq-welding",
      type: "faq",
      title: "Zero Field Welding: 100% Bolted Assembly",
      subtitle: "All bolt holes laser-punched in Adana factory for rapid on-site bolt-together assembly",
      badge: "Assembly",
      href: `${langPrefix}/engineering`,
      keywords: ["kaynak", "weld", "welding", "bolt", "cıvata", "montaj", "erection", "assembly"]
    });

    items.push({
      id: "faq-turnaround",
      type: "faq",
      title: "Production Lead Times & Port Shipping Speed",
      subtitle: "Standard arch kits manufactured in 2–4 weeks; Mediterranean port vessel departures weekly",
      badge: "FAQ",
      href: `${langPrefix}/contact`,
      keywords: ["lead time", "termin", "süre", "teslimat", "delivery", "shipping time"]
    });

    return items;
  }, [language, t]);

  // Filtered results
  const results = useMemo(() => {
    const q = query.toLowerCase().trim();

    return searchIndex.filter((item) => {
      const matchesCategory = selectedCategory === "all" || item.type === selectedCategory;
      if (!q) return matchesCategory;

      const titleMatch = item.title.toLowerCase().includes(q);
      const subtitleMatch = item.subtitle.toLowerCase().includes(q);
      const keywordMatch = item.keywords.some((k) => k.includes(q));

      return matchesCategory && (titleMatch || subtitleMatch || keywordMatch);
    });
  }, [query, selectedCategory, searchIndex]);

  // Handle keyboard navigation inside results
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
    } else if (e.key === "Enter" && results[selectedIndex]) {
      e.preventDefault();
      navigateTo(results[selectedIndex].href);
    }
  };

  const navigateTo = (href: string) => {
    setLocation(href);
    onClose();
  };

  if (!isOpen) return null;

  const categories = [
    { id: "all", label: language === "tr" ? "Tümü" : "All" },
    { id: "model", label: language === "tr" ? "Modeller" : "Models" },
    { id: "sector", label: language === "tr" ? "Sektörler" : "Sectors" },
    { id: "knowledge", label: language === "tr" ? "Rehberler" : "Guides" },
    { id: "spec", label: language === "tr" ? "Standartlar" : "Standards" },
    { id: "action", label: language === "tr" ? "Hızlı İşlemler" : "Actions" }
  ];

  const getBadgeColor = (type: string) => {
    switch (type) {
      case "model":
        return "bg-amber-500/20 text-amber-400 border-amber-500/30";
      case "sector":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "knowledge":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      case "spec":
        return "bg-emerald-500/20 text-emerald-400 border-emerald-500/30";
      case "action":
        return "bg-orange-500/20 text-orange-400 border-orange-500/30";
      default:
        return "bg-white/10 text-slate-300 border-white/15";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "model":
        return <Building2 size={16} className="text-amber-400" />;
      case "sector":
        return <Layers size={16} className="text-blue-400" />;
      case "knowledge":
        return <BookOpen size={16} className="text-purple-400" />;
      case "spec":
        return <ShieldCheck size={16} className="text-emerald-400" />;
      case "action":
        return <Sparkles size={16} className="text-orange-400" />;
      default:
        return <Compass size={16} className="text-slate-400" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
      <div
        className="w-full max-w-2xl rounded-3xl bg-[#0e1b27] border border-white/20 shadow-2xl overflow-hidden flex flex-col max-h-[85vh] animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-white/10 flex items-center gap-3 bg-[#0a141e]">
          <Search size={20} className="text-amber-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder={
              language === "tr"
                ? "STRUCTIVA'da ara (hangar, tarım, rüzgar yükü, Q-Series, EN 1090)..."
                : language === "de"
                ? "STRUCTIVA durchsuchen (Hangar, Landwirtschaft, Windlast, Q-Serie)..."
                : "Search STRUCTIVA (hangar, clear span, wind load, agriculture, EN 1090)..."
            }
            className="flex-1 bg-transparent text-white text-base placeholder:text-slate-500 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 rounded-full text-slate-400 hover:text-white"
            >
              <X size={16} />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 rounded bg-white/10 text-slate-400 hover:text-white text-xs font-mono font-bold"
          >
            ESC
          </button>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-[#0b1620] border-b border-white/5 overflow-x-auto text-xs">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => {
                setSelectedCategory(c.id);
                setSelectedIndex(0);
              }}
              className={`px-3 py-1 rounded-lg font-semibold transition-all shrink-0 ${
                selectedCategory === c.id
                  ? "bg-amber-500 text-[#0f1d2a] font-bold shadow"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-2 sm:p-3 divide-y divide-white/5">
          {results.length === 0 ? (
            <div className="text-center py-16 px-4">
              <Compass size={36} className="mx-auto text-slate-500 mb-3 opacity-50" />
              <p className="text-sm font-semibold text-slate-300 mb-1">
                {language === "tr" ? "Sonuç bulunamadı" : "No matching results"}
              </p>
              <p className="text-xs text-slate-500">
                {language === "tr"
                  ? "Farklı bir arama terimi veya kategori deneyiniz."
                  : "Try searching with broader terms like 'hangar', 'arch', 'peb', or 'quote'."}
              </p>
            </div>
          ) : (
            results.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => navigateTo(item.href)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`flex items-center justify-between p-3.5 rounded-2xl cursor-pointer transition-all ${
                    isSelected
                      ? "bg-amber-500/15 border border-amber-500/30 text-white"
                      : "hover:bg-white/5 text-slate-200 border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3 overflow-hidden pr-3">
                    <div className="p-2 rounded-xl bg-white/5 border border-white/10 shrink-0">
                      {getTypeIcon(item.type)}
                    </div>
                    <div className="overflow-hidden">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="font-bold text-sm text-white truncate">
                          {item.title}
                        </span>
                        <span
                          className={`text-[9px] font-mono uppercase font-bold px-2 py-0.5 rounded-md border shrink-0 ${getBadgeColor(
                            item.type
                          )}`}
                        >
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 truncate">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <ArrowRight
                    size={16}
                    className={`shrink-0 transition-transform ${
                      isSelected ? "text-amber-400 translate-x-1" : "text-slate-600"
                    }`}
                  />
                </div>
              );
            })
          )}
        </div>

        {/* Footer info bar */}
        <div className="px-4 py-2.5 bg-[#0a141e] border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 font-mono">
          <div className="flex items-center gap-3">
            <span>↑↓ Gezin / Navigate</span>
            <span>↵ Seç / Open</span>
          </div>
          <span className="text-amber-400 font-semibold">
            {results.length} {language === "tr" ? "sonuç" : "results"}
          </span>
        </div>
      </div>
    </div>
  );
}
