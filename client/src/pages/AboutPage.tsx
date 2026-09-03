import React from "react";
import { Link } from "wouter";
import { Award, Factory, Users, Globe2, ShieldCheck, Anchor, Play } from "lucide-react";
import SEOHead from "../components/SEOHead";

export default function AboutPage({ lang = "tr" }: { lang?: string }) {
  return (
    <div className="bg-[#09131c] text-white py-16 px-4 sm:px-6 lg:px-8">
      <SEOHead
        title="About STRUCTIVA — Structiva Tesisleri Adana & Engineering Heritage"
        description="Operating from its integrated steel fabrication hub in Adana, STRUCTIVA delivers certified structural steel buildings, clear-span arch hangars, and PEB kits globally."
        canonicalPath={`/${lang}/about`}
        lang={lang}
        breadcrumbs={[
          { name: "STRUCTIVA", url: `/${lang}` },
          { name: "About Us", url: `/${lang}/about` }
        ]}
      />
      <div className="mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 text-xs font-mono font-bold uppercase tracking-widest block mb-2">
            Kurumsal & Üretim Gücü
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Mühendislikte Öncü <span className="text-amber-400">STRUCTIVA Tesisleri Adana</span>
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            Türkiye'nin sanayi lokomotifi Adana merkezli mega tesislerimizde üretilen STRUCTIVA çelik sistemleri, 
            yüksek teknoloji roll-forming ve robotik üretim hatlarıyla 50'den fazla ülkeye ihraç edilmektedir.
          </p>
        </div>

        {/* Narrative & Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Yenilikçi Çelik Teknolojisi: <br />
              <span className="text-amber-400">Structiva Tesisleri Adana</span>
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              STRUCTIVA, Adana sanayi bölgesindeki modern entegre üretim kampüsünde CNC lazer kesim, 
              otomatik arch roll-forming profilleme ve robotik kaynak istasyonlarıyla donatılmış tesislerinde üretim yapmaktadır.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              Kemerli açık açıklık (Quonset & Arch) çelik yapılar ve ağır endüstriyel PEB alanında 
              dünya standartlarında CE, EN 1090-2 EXC4 ve AISC sertifikasyonlarıyla üretim gerçekleştirmektedir.
            </p>

            <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
              <div className="rounded-xl bg-white/5 p-4 border border-white/10">
                <strong className="block text-2xl font-mono font-black text-amber-400">25.000 ton</strong>
                <span className="text-xs text-slate-400">Yıllık Çelik İşleme Kapasitesi</span>
              </div>
              <div className="rounded-xl bg-white/5 p-4 border border-white/10">
                <strong className="block text-2xl font-mono font-black text-emerald-400">50+ Ülke</strong>
                <span className="text-xs text-slate-400">Düzenli İhracat Pazarı</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden border border-white/15 shadow-2xl relative">
              <video
                src="/videos/video1.mp4"
                controls
                playsInline
                className="w-full h-80 sm:h-96 object-cover bg-black"
                poster="/images/engineering-detail.jpg"
              />
              <div className="p-4 bg-[#0f1d2a] border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-amber-400 font-mono uppercase block">Adana Üretim Kampüsü</span>
                  <strong className="text-sm text-white">Structiva Tesisleri Adana - İmalat & Montaj</strong>
                </div>
                <span className="text-xs text-emerald-400 font-mono">HD Video</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="rounded-2xl bg-[#0e1b27] border border-white/10 p-6">
            <Factory size={24} className="text-amber-400 mb-3" />
            <h3 className="text-lg font-bold text-white mb-2">Modern Üretim Parkı</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Roll-forming ve yüksek hassasiyetli delik delme makineleri sayesinde sahada sıfır kaynak ihtiyacı ve milimetrik cıvatalı montaj uyumu.
            </p>
          </div>

          <div className="rounded-2xl bg-[#0e1b27] border border-white/10 p-6">
            <Anchor size={24} className="text-amber-400 mb-3" />
            <h3 className="text-lg font-bold text-white mb-2">Liman & İhracat Avantajı</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Adana tesislerimizden Akdeniz liman hatları üzerinden Avrupa, Afrika, Orta Doğu ve Amerika'ya hızlı konteynerize sevkiyat.
            </p>
          </div>

          <div className="rounded-2xl bg-[#0e1b27] border border-white/10 p-6">
            <ShieldCheck size={24} className="text-amber-400 mb-3" />
            <h3 className="text-lg font-bold text-white mb-2">Sertifikalı Kalite Güvencesi</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              EN 1090-2 EXC4, CE, ISO 9001, ISO 14001 ve ISO 45001 akreditasyonlarıyla her üretim partisi laboratuvar ortamında test edilir.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
