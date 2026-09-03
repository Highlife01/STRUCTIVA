import React from "react";
import { Link } from "wouter";
import { Shield, Anchor, Award, Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Footer() {
  const { t, language } = useLanguage();
  const langPrefix = `/${language}`;

  return (
    <footer className="bg-[#0a141d] border-t border-white/10 text-slate-400 text-sm">
      {/* Certifications and Port logistics strip */}
      <div className="border-b border-white/5 bg-[#081018] py-8">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
                <Award size={22} />
              </div>
              <div>
                <strong className="block text-white text-xs uppercase tracking-wider">EN 1090-2 & CE</strong>
                <span className="text-[11px] text-slate-500">Execution Class EXC3 / EXC4</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
                <Shield size={22} />
              </div>
              <div>
                <strong className="block text-white text-xs uppercase tracking-wider">Galvalume Plus®</strong>
                <span className="text-[11px] text-slate-500">40–50 Year Anti-Corrosion</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
                <Anchor size={22} />
              </div>
              <div>
                <strong className="block text-white text-xs uppercase tracking-wider">Mediterranean Port</strong>
                <span className="text-[11px] text-slate-500">{t("logistics_point1_title")}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
                <span className="font-mono text-base font-black text-amber-400">ADANA</span>
              </div>
              <div>
                <strong className="block text-white text-xs uppercase tracking-wider">Structiva Tesisleri</strong>
                <span className="text-[11px] text-slate-500">{t("topbar_tagline")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded bg-amber-500 text-sm font-black text-[#0f1d2a]">S</div>
              <div>
                <span className="text-xl font-black text-white tracking-wider">STRUCTIVA</span>
                <span className="block text-[9px] uppercase tracking-[0.25em] text-amber-400 font-bold">STRUCTIVA GLOBAL</span>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-slate-400 max-w-sm mb-6">
              {t("footer_desc")}
            </p>
            <div className="flex items-center gap-3 text-xs text-slate-400">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400"></span>
              <span>Structiva Tesisleri Adana / Türkiye · 50+ Countries</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4 text-amber-400">{t("footer_col_models")}</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link href={`${langPrefix}/models`} className="hover:text-amber-400 transition-colors">Q-Series Arch Hangar</Link></li>
              <li><Link href={`${langPrefix}/models`} className="hover:text-amber-400 transition-colors">S-Series Straight Wall</Link></li>
              <li><Link href={`${langPrefix}/models`} className="hover:text-amber-400 transition-colors">P-Series Pitched Roof</Link></li>
              <li><Link href={`${langPrefix}/models`} className="hover:text-amber-400 transition-colors">Container Canopy Kits</Link></li>
              <li><Link href={`${langPrefix}/models`} className="hover:text-amber-400 transition-colors">Heavy Industrial PEB</Link></li>
              <li><Link href={`${langPrefix}/configurator`} className="text-amber-400 font-bold hover:underline">3D Configurator →</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4 text-amber-400">{t("footer_col_sectors")}</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link href={`${langPrefix}/sectors`} className="hover:text-amber-400 transition-colors">Agriculture & Bulk Grain</Link></li>
              <li><Link href={`${langPrefix}/sectors`} className="hover:text-amber-400 transition-colors">Mining Aggregate Stockpile</Link></li>
              <li><Link href={`${langPrefix}/sectors`} className="hover:text-amber-400 transition-colors">Aviation & Aircraft Hangars</Link></li>
              <li><Link href={`${langPrefix}/sectors`} className="hover:text-amber-400 transition-colors">Logistics Warehouses</Link></li>
              <li><Link href={`${langPrefix}/sectors`} className="hover:text-amber-400 transition-colors">Defense & Rapid Shelter</Link></li>
              <li><Link href={`${langPrefix}/knowledge`} className="hover:text-amber-400 transition-colors">{t("nav_knowledge")}</Link></li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-4 text-amber-400">{t("footer_col_contact")}</h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-amber-400 shrink-0" />
                <a href="tel:+905320550945" className="hover:text-white transition-colors font-mono font-bold">+90 532 055 09 45</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-amber-400 shrink-0" />
                <a href="mailto:info@structiva.com.tr" className="hover:text-white transition-colors">info@structiva.com.tr</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-amber-400 shrink-0 mt-0.5" />
                <span>Structiva Tesisleri Adana / Türkiye</span>
              </li>
              <li className="pt-2">
                <Link href="/dashboard" className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-bold">
                  <span>{t("nav_dashboard")}</span>
                  <ArrowUpRight size={12} />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>© {new Date().getFullYear()} STRUCTIVA — Structiva Tesisleri Adana. {t("footer_rights")}</div>
          <div className="flex items-center gap-6">
            <span>AISC 360-16</span>
            <span>EN 1090-2:2018</span>
            <span>ISO 9001:2015</span>
            <span>ASTM A792</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
