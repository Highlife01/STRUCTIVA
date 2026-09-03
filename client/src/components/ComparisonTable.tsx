import React from "react";
import { Check, X, ShieldCheck, Zap, TrendingUp, Sparkles, Building, Layers } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function ComparisonTable() {
  const { t } = useLanguage();

  const comparisonData = [
    {
      criteria: "Montaj & Teslim Süresi",
      concrete: "8 - 18 Ay (Hava şartlarına bağımlı)",
      traditionalSteel: "4 - 8 Ay (Ağır vinç ve saha kaynağı)",
      structiva: "2 - 4 Hafta (%100 Cıvatalı Tak-Çalıştır)",
      structivaHighlight: true,
    },
    {
      criteria: "Kolonsuz Net Açıklık (Clear-Span)",
      concrete: "12 - 18m (İç kolonlar forklift/lojistiği kısıtlar)",
      traditionalSteel: "20 - 30m (Ağır makas yapısı)",
      structiva: "45 Metreye Kadar Sıfır Kolon (%100 Faydalı Alan)",
      structivaHighlight: true,
    },
    {
      criteria: "Temel & Zemin Hazırlık Maliyeti",
      concrete: "Çok Yüksek (Derin kazık ve ağır radye şart)",
      traditionalSteel: "Yüksek (Büyük tekil sömeller)",
      structiva: "Ekonomik (Hafif kemer geometrisiyle minimum temel)",
      structivaHighlight: true,
    },
    {
      criteria: "Korozyon & Pas Direnci",
      concrete: "Rutubet, beton çatlaması ve demir korozyonu",
      traditionalSteel: "Periyodik antipas ve endüstriyel boya masrafı",
      structiva: "Galvalume Plus® (Al-Zn) 25 Yıl Fabrika Garantisi",
      structivaHighlight: true,
    },
    {
      criteria: "Sökülebilirlik & Yeniden Kurulum",
      concrete: "İmkânsız (Kalıcı bina/enkaz)",
      traditionalSteel: "Zor (Kaynak kesimi ve deformasyon)",
      structiva: "%100 Demonte Edilebilir, Başka Sahaya Taşınabilir",
      structivaHighlight: true,
    },
    {
      criteria: "Uluslararası Nakliye & Lojistik",
      concrete: "İhracatı Yok (Yerinde döküm malzeme)",
      traditionalSteel: "Ağır gabari dışı nakliye (Yüksek navlun)",
      structiva: "40ft Standart HC Konteynerde Flat-Pack Sevk",
      structivaHighlight: true,
    },
    {
      criteria: "Sertifikasyon ve Deprem Uyumu",
      concrete: "Yerel denetim riskleri",
      traditionalSteel: "Standart çelik çerçeve",
      structiva: "EN 1090-2 EXC4, CE ve Yüksek Sünek Sismik Kemer",
      structivaHighlight: true,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#070e15] border-y border-white/10 text-white relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-amber-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 border border-amber-500/40 px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest text-amber-300 mb-4">
            <TrendingUp size={13} />
            <span>Mühendislik & Yatırım Karşılaştırması</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
            Neden <span className="text-amber-400">STRUCTIVA</span> Çelik Sistemleri?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Geleneksel betonarme ve konvansiyonel ağır çelik yapılara kıyasla sermaye maliyetini, 
            montaj süresini ve işletme bakım giderlerini nasıl minimize ettiğimizi inceleyin.
          </p>
        </div>

        {/* Comparison Table Card */}
        <div className="rounded-3xl bg-[#0b1622] border border-white/15 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[720px]">
              <thead>
                <tr className="border-b border-white/15 bg-[#0f1d2a]">
                  <th className="p-4 sm:p-5 text-xs font-mono uppercase tracking-wider text-slate-400 w-1/4">
                    Kriter / Parametre
                  </th>
                  <th className="p-4 sm:p-5 text-xs font-mono uppercase tracking-wider text-slate-400 w-1/4">
                    Geleneksel Betonarme
                  </th>
                  <th className="p-4 sm:p-5 text-xs font-mono uppercase tracking-wider text-slate-400 w-1/4">
                    Konvansiyonel Ağır Çelik
                  </th>
                  <th className="p-4 sm:p-5 text-xs font-mono uppercase tracking-wider text-amber-400 w-1/4 bg-amber-500/10 border-l border-amber-500/30">
                    <div className="flex items-center gap-2">
                      <Sparkles size={14} className="text-amber-400" />
                      <span className="font-black text-amber-300">STRUCTIVA Kolonsuz Kemer</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-xs">
                {comparisonData.map((row, index) => (
                  <tr
                    key={index}
                    className="hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="p-4 sm:p-5 font-bold text-white flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-400 shrink-0" />
                      <span>{row.criteria}</span>
                    </td>
                    <td className="p-4 sm:p-5 text-slate-400 leading-relaxed">
                      {row.concrete}
                    </td>
                    <td className="p-4 sm:p-5 text-slate-400 leading-relaxed">
                      {row.traditionalSteel}
                    </td>
                    <td className="p-4 sm:p-5 font-semibold text-emerald-300 bg-amber-500/[0.04] border-l border-amber-500/20 leading-relaxed">
                      <div className="flex items-start gap-2">
                        <Check size={15} className="text-emerald-400 shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span>{row.structiva}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Bottom Highlights Banner */}
          <div className="p-4 sm:p-6 bg-[#09131d] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-4 text-slate-300 flex-wrap">
              <span className="flex items-center gap-1.5 font-semibold text-white">
                <ShieldCheck size={16} className="text-amber-400" />
                25 Yıl Garanti
              </span>
              <span className="flex items-center gap-1.5 font-semibold text-white">
                <Zap size={16} className="text-emerald-400" />
                %80 Daha Hızlı Montaj
              </span>
              <span className="flex items-center gap-1.5 font-semibold text-white">
                <Layers size={16} className="text-sky-400" />
                Sıfır Saha Kaynağı
              </span>
            </div>

            <a
              href="/request-a-quote"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-[#0f1d2a] font-black uppercase tracking-wider text-xs transition-all shadow-lg shadow-amber-500/20 active:scale-95 shrink-0"
            >
              <span>Fizibilite & Fiyat Teklifi Al</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
