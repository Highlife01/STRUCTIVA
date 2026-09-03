import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import { Globe2, Menu, X, ArrowUpRight, Shield, Calculator, LayoutDashboard, Sparkles, BookOpen } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { SUPPORTED_LANGUAGES, COMPANY_INFO } from "../config/siteConfig";

export default function Navbar() {
  const [location, setLocation] = useLocation();
  const { language, setLanguage, t, currentLangObj } = useLanguage();
  const [langModalOpen, setLangModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Determine current lang prefix from URL or context
  // e.g. /en/models -> prefix = /en, subpath = /models
  const pathParts = location.split("/").filter(Boolean);
  const detectedLangInUrl = pathParts.length > 0 && SUPPORTED_LANGUAGES.some(l => l.code === pathParts[0]);
  const activeLangCode = detectedLangInUrl ? pathParts[0] : language;
  const currentSubPath = detectedLangInUrl ? `/${pathParts.slice(1).join("/")}` : (location === "/" ? "" : location);

  const langPrefix = `/${activeLangCode}`;

  const navLinks = [
    { href: `${langPrefix}`, label: t("nav_home") },
    { href: `${langPrefix}/models`, label: t("nav_models") },
    { href: `${langPrefix}/sectors`, label: t("nav_sectors") },
    { href: `${langPrefix}/engineering`, label: t("nav_engineering") },
    { href: `${langPrefix}/configurator`, label: t("nav_configurator") },
    { href: `${langPrefix}/projects`, label: t("nav_projects") },
    { href: `${langPrefix}/knowledge`, label: "Bilgi Merkezi" },
    { href: `${langPrefix}/about`, label: t("nav_about") },
    { href: `${langPrefix}/contact`, label: t("nav_contact") },
  ];

  const handleLanguageSwitch = (newLangCode: string) => {
    setLanguage(newLangCode);
    setLangModalOpen(false);
    // Switch URL to new language with current subpath
    const targetUrl = `/${newLangCode}${currentSubPath === "/" ? "" : currentSubPath}`;
    setLocation(targetUrl);
  };

  const filteredLanguages = SUPPORTED_LANGUAGES.filter((l) =>
    l.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    l.nativeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    l.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* Top Banner with Mediterranean Port & Heritage */}
      <div className="bg-[#0b1620] px-4 py-2 text-[11px] font-semibold text-slate-300 border-b border-white/10">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="hidden sm:inline">STRUCTIVA · {COMPANY_INFO.adanaFacilities} · 50+ Ülkeye Konteyner İhracatı</span>
            <span className="sm:hidden text-amber-400 font-bold">STRUCTIVA GLOBAL</span>
          </div>
          <div className="flex items-center gap-4 text-[10px] tracking-wider uppercase">
            <span className="text-amber-400 font-mono hidden md:inline">EN 1090-2 EXC4 · CE · AISC 360-16</span>
            <Link href="/dashboard" className="flex items-center gap-1.5 text-amber-400 hover:text-white bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/30 transition-colors">
              <LayoutDashboard size={12} />
              <span>{t("nav_dashboard")}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className="sticky top-0 z-40 bg-[#0f1d2a]/95 backdrop-blur-md border-b border-white/10 text-white shadow-xl">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8 py-3.5">
          {/* Brand Logo */}
          <Link href={`${langPrefix}`} className="group flex items-center gap-3 text-left">
            <div className="relative flex h-10 w-10 items-center justify-center rounded bg-gradient-to-br from-amber-500 to-amber-600 text-base font-black text-[#0f1d2a] shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              S
              <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-emerald-500 text-[8px] text-white">✓</span>
            </div>
            <div>
              <span className="block text-lg font-black tracking-widest text-white">STRUCTIVA</span>
              <span className="block text-[9px] uppercase tracking-[0.25em] text-slate-400 font-medium">STRUCTIVA GLOBAL</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-5 text-[11px] font-bold uppercase tracking-wider text-slate-200">
            {navLinks.map((link) => {
              const isActive = location === link.href || (link.href === `${langPrefix}` && (location === `${langPrefix}` || location === `${langPrefix}/`));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors py-1.5 hover:text-amber-400 relative ${
                    isActive ? "text-amber-400 font-black after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-amber-400" : ""
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Bar */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* 30-Language Selector Button */}
            <button
              onClick={() => setLangModalOpen(true)}
              className="flex items-center gap-2 rounded-lg bg-white/5 border border-white/15 px-3 py-2 text-xs font-semibold hover:bg-white/10 transition-all text-slate-200"
              title="Select Language (30 Languages)"
            >
              <span className="text-base leading-none">{currentLangObj.flag}</span>
              <span className="hidden sm:inline font-mono text-[11px] uppercase">{currentLangObj.code}</span>
              <Globe2 size={14} className="text-slate-400" />
            </button>

            {/* Quick RFQ CTA */}
            <Link
              href={`${langPrefix}/request-a-quote`}
              className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-[#0f1d2a] font-black px-3.5 sm:px-4 py-2 text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 active:scale-[0.98] transition-all"
            >
              <span>{t("cta_quote")}</span>
              <ArrowUpRight size={14} />
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-slate-300 hover:text-white rounded-lg bg-white/5"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-white/10 bg-[#0d1822] px-6 py-6 animate-in slide-in-from-top-2 duration-200">
            <div className="grid gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-semibold uppercase tracking-wider py-2 border-b border-white/5 ${
                    location === link.href ? "text-amber-400 font-bold" : "text-slate-300"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/dashboard"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider py-2 text-emerald-400 border-b border-white/5"
              >
                <LayoutDashboard size={16} />
                <span>{t("nav_dashboard")} (Yönetici Paneli)</span>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* 30-Language Selection Modal */}
      {langModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="w-full max-w-2xl rounded-3xl bg-[#0f1d2a] border border-white/15 p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20 text-amber-400">
                  <Globe2 size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Select Language / Dil Seçiniz</h3>
                  <p className="text-xs text-slate-400">30 Global Market Languages with bidirectional hreflang mapping</p>
                </div>
              </div>
              <button
                onClick={() => setLangModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
              >
                <X size={20} />
              </button>
            </div>

            {/* Search Input */}
            <div className="my-4">
              <input
                type="text"
                placeholder="Search language / Dil arayınız..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl bg-white/5 border border-white/15 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 outline-none focus:border-amber-400"
                autoFocus
              />
            </div>

            {/* Language Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-[380px] overflow-y-auto pr-1">
              {filteredLanguages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageSwitch(lang.code)}
                  className={`flex items-center gap-3 p-3 rounded-xl border text-left transition-all ${
                    activeLangCode === lang.code
                      ? "bg-amber-500/20 border-amber-500 text-white font-bold shadow-md shadow-amber-500/10"
                      : "bg-white/5 border-white/10 hover:bg-white/10 text-slate-300"
                  }`}
                >
                  <span className="text-2xl leading-none">{lang.flag}</span>
                  <div className="overflow-hidden">
                    <span className="block text-xs truncate">{lang.nativeName}</span>
                    <span className="block text-[10px] text-slate-400 uppercase font-mono">
                      {lang.name} {lang.isRTL ? "(RTL)" : ""}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
