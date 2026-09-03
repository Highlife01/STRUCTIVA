import React from "react";
import { X, Printer, Send, ShieldCheck, Award, FileCheck, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "../config/siteConfig";

export interface SpecSheetData {
  modelName: string;
  modelSeries: string;
  span: number;
  length: number;
  height: number;
  areaM2: number;
  areaSqFt: number;
  volumeM3: number;
  containersNeeded: number;
  accessories: string[];
  unitSystem?: "metric" | "imperial";
}

interface SpecSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: SpecSheetData;
}

export default function SpecSheetModal({ isOpen, onClose, data }: SpecSheetModalProps) {
  if (!isOpen) return null;

  const specRefNumber = `STR-${Date.now().toString(36).toUpperCase().slice(-6)}`;
  const currentDate = new Date().toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handlePrint = () => {
    window.print();
  };

  const whatsappMessage = encodeURIComponent(
    `Merhaba STRUCTIVA Mühendislik Ekibi,\nWeb siteniz üzerinden ${data.modelName} modeli için oluşturduğum teknik şartnameyi incelemenizi rica ederim:\n\n` +
    `• Referans No: ${specRefNumber}\n` +
    `• Model: ${data.modelName} (${data.modelSeries})\n` +
    `• Ölçüler: ${data.span}m Açıklık × ${data.length}m Uzunluk × ${data.height}m Yükseklik\n` +
    `• Taban Alanı: ${data.areaM2} m² (${data.areaSqFt} sq ft)\n` +
    `• Hacim: ${data.volumeM3} m³\n` +
    `• Konteyner İhtiyacı: ~${data.containersNeeded} × 40ft HC\n` +
    `• Donanımlar: ${data.accessories.length > 0 ? data.accessories.join(", ") : "Standart Kit"}\n\n` +
    `Lütfen bu konfigürasyon için proforma teklif ve teslimat takvimini iletir misiniz?`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#09131c] text-white border border-white/20 rounded-2xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Top Control Bar (Hidden on Print) */}
        <div className="no-print flex items-center justify-between px-6 py-4 bg-[#0f1d2a] border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
              Resmi Mühendislik Şartnamesi & Teklif Özeti
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-[#0f1d2a] text-xs font-bold transition-all shadow-md"
            >
              <Printer size={14} />
              <span>PDF Olarak Kaydet / Yazdır</span>
            </button>
            <a
              href={`https://wa.me/905320550945?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md"
            >
              <Send size={14} />
              <span>WhatsApp ile Gönder</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Printable Document Paper Sheet */}
        <div className="p-6 sm:p-10 bg-white text-slate-900 print:p-0 print:m-0 print:text-black">
          {/* Document Header */}
          <div className="border-b-2 border-slate-900 pb-6 mb-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <div className="text-3xl font-black tracking-widest text-slate-950">
                  STRUCTIVA<span className="text-amber-600">.</span>
                </div>
                <div className="text-[11px] font-bold text-slate-600 uppercase tracking-wider mt-0.5">
                  ENGINEERED STEEL STRUCTURES & HANGAR SYSTEMS
                </div>
                <div className="text-[10px] text-slate-500 mt-1">
                  {COMPANY_INFO.legalName} · AOSB Çelik İmalat Tesisleri Adana / Türkiye
                </div>
              </div>

              <div className="text-left sm:text-right border-l sm:border-l-0 sm:border-r-0 pl-3 sm:pl-0 border-slate-300">
                <div className="inline-block bg-amber-100 text-amber-900 border border-amber-300 px-2.5 py-0.5 rounded text-[11px] font-mono font-bold">
                  REF: {specRefNumber}
                </div>
                <div className="text-[11px] text-slate-500 mt-1">Tarih: {currentDate}</div>
                <div className="text-[10px] text-slate-500">Revizyon: 01 (Dijital Ön Şartname)</div>
              </div>
            </div>
          </div>

          {/* Sub-Header / Certificate Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-slate-50 p-3 rounded-lg border border-slate-200 mb-6 text-center text-xs">
            <div>
              <span className="block text-[10px] text-slate-500 font-bold uppercase">Standart</span>
              <strong className="text-slate-800">EN 1090-2 EXC4</strong>
            </div>
            <div>
              <span className="block text-[10px] text-slate-500 font-bold uppercase">Kaplama</span>
              <strong className="text-slate-800">Galvalume Plus® (25 Yıl)</strong>
            </div>
            <div>
              <span className="block text-[10px] text-slate-500 font-bold uppercase">Birleşim</span>
              <strong className="text-slate-800">Sıfır Kaynak (Cıvatalı)</strong>
            </div>
            <div>
              <span className="block text-[10px] text-slate-500 font-bold uppercase">Sevkiyat Limanı</span>
              <strong className="text-slate-800">Mersin Uluslararası Liman</strong>
            </div>
          </div>

          {/* Technical Specifications Table */}
          <div className="mb-6">
            <h3 className="text-sm font-black uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1.5 mb-3 flex items-center gap-2">
              <FileCheck size={16} className="text-amber-600" />
              1. BİNA GEOMETRİSİ VE KAPASİTE PARAMETRELERİ
            </h3>
            <table className="w-full border-collapse text-xs">
              <tbody>
                <tr className="border-b border-slate-200">
                  <td className="py-2 font-semibold text-slate-600 w-1/3 bg-slate-50 px-3">Yapı Modeli & Serisi</td>
                  <td className="py-2 px-3 font-bold text-slate-900">{data.modelName} ({data.modelSeries})</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="py-2 font-semibold text-slate-600 bg-slate-50 px-3">Net Kolonsuz Açıklık (Span)</td>
                  <td className="py-2 px-3 font-bold text-slate-900">
                    {data.span} metre <span className="font-normal text-slate-500">({Math.round(data.span * 3.28)} ft)</span>
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="py-2 font-semibold text-slate-600 bg-slate-50 px-3">Bina Toplam Uzunluğu</td>
                  <td className="py-2 px-3 font-bold text-slate-900">
                    {data.length} metre <span className="font-normal text-slate-500">({Math.round(data.length * 3.28)} ft)</span>
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="py-2 font-semibold text-slate-600 bg-slate-50 px-3">Tepe Mahya Yüksekliği (Peak Height)</td>
                  <td className="py-2 px-3 font-bold text-slate-900">
                    {data.height} metre <span className="font-normal text-slate-500">({Math.round(data.height * 3.28)} ft)</span>
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="py-2 font-semibold text-slate-600 bg-slate-50 px-3">Net Kullanılabilir Taban Alanı</td>
                  <td className="py-2 px-3 font-bold text-emerald-700 font-mono text-sm">
                    {data.areaM2} m² <span className="font-normal text-slate-500 text-xs">({data.areaSqFt.toLocaleString()} sq ft)</span>
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="py-2 font-semibold text-slate-600 bg-slate-50 px-3">Net İç Depolama Hacmi</td>
                  <td className="py-2 px-3 font-bold text-slate-900">
                    {data.volumeM3.toLocaleString()} m³
                  </td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="py-2 font-semibold text-slate-600 bg-slate-50 px-3">Lojistik Flat-Pack Paketleme Planı</td>
                  <td className="py-2 px-3 font-bold text-slate-900">
                    ~{data.containersNeeded} Adet 40' High-Cube (HC) Deniz Konteyneri
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Accessories & Structural Inclusions */}
          <div className="mb-6">
            <h3 className="text-sm font-black uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1.5 mb-3 flex items-center gap-2">
              <CheckCircle2 size={16} className="text-amber-600" />
              2. SEÇİLEN DONANIM VE BİLEŞEN PAKETİ
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {data.accessories.map((acc, index) => (
                <div key={index} className="flex items-center gap-2 bg-slate-50 p-2 rounded border border-slate-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-600" />
                  <span className="font-semibold text-slate-800">{acc}</span>
                </div>
              ))}
              <div className="flex items-center gap-2 bg-slate-50 p-2 rounded border border-slate-200">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                <span className="font-semibold text-slate-800">Tam Set Yüksek Mukavemetli Cıvata & Neopren Conta Seti</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 p-2 rounded border border-slate-200">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                <span className="font-semibold text-slate-800">Temel Ankraj & Montaj Kılavuz Mühendislik Çizimleri</span>
              </div>
            </div>
          </div>

          {/* Quality Assurance & Warranty Terms */}
          <div className="bg-slate-100 rounded-lg p-4 border border-slate-300 text-xs text-slate-700 mb-6">
            <h4 className="font-black text-slate-900 uppercase text-[11px] mb-1 flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-emerald-700" />
              3. MÜHENDİSLİK GARANTİSİ VE GEÇERLİLİK
            </h4>
            <p className="leading-relaxed">
              Bu belge STRUCTIVA Tesisleri Adana / Türkiye mühendislik departmanı tarafından üretilen ön şartname parametrelerini içermektedir.
              Çelik paneller ASTM A792 / EN 10346 normunda Galvalume Plus® alaşımı ile kaplı olup paslanmaya karşı 25 yıl fabrika garantilidir.
              Sipariş kesinleşmesinde yerel rüzgar (km/h) ve kar yükü (kg/m²) hesaplamalarına göre statik onaylı proje dosyası teslim edilir.
            </p>
          </div>

          {/* Official Signature Datum */}
          <div className="border-t border-slate-300 pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-end text-xs text-slate-600 gap-4">
            <div>
              <div className="font-bold text-slate-900">STRUCTIVA ÇELİK YAPI SANAYİ A.Ş.</div>
              <div>Organize Sanayi Bölgesi (AOSB), Adana / Türkiye</div>
              <div>Tel / WhatsApp: +90 532 055 09 45 · E-posta: info@structiva.com.tr</div>
              <div className="text-[10px] text-slate-400 mt-1">Web: www.structiva.com.tr</div>
            </div>
            <div className="text-center border-t-2 border-slate-400 pt-2 w-48">
              <div className="text-[10px] text-slate-500 uppercase">Mühendislik & İhracat Onayı</div>
              <div className="font-mono font-bold text-slate-900 mt-1">STRUCTIVA QA/QC</div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Action Bar (Hidden on Print) */}
        <div className="no-print px-6 py-4 bg-[#0f1d2a] border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="text-xs text-slate-400">
            Teknik parametreleri doğrudan PDF olarak indirebilir veya WhatsApp'tan gönderebilirsiniz.
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-[#0f1d2a] text-xs font-black uppercase tracking-wider transition-all"
            >
              PDF İndir / Yazdır
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
            >
              Kapat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
