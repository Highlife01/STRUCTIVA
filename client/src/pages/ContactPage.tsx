import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageSquare, Clock, Globe2 } from "lucide-react";
import { saveInquiry } from "../services/messageService";
import { STEEL_MODELS } from "../data/modelsData";
import { useLanguage } from "../contexts/LanguageContext";
import SEOHead from "../components/SEOHead";

export default function ContactPage({ lang = "tr" }: { lang?: string }) {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [country, setCountry] = useState("Türkiye");
  const [model, setModel] = useState("Q-Series Arch");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await saveInquiry({
        type: "contact",
        name,
        email,
        phone,
        company,
        country,
        model,
        message,
      });

      setSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#09131c] text-white py-16 px-4 sm:px-6 lg:px-8">
      <SEOHead
        title="Contact STRUCTIVA Global Export & Engineering Desk"
        description="Connect directly with STRUCTIVA Adana structural engineers and sales directors for custom building quotes, CAD specifications, and international container deliveries."
        canonicalPath={`/${lang}/contact`}
        lang={lang}
        breadcrumbs={[
          { name: "STRUCTIVA", url: `/${lang}` },
          { name: "Contact", url: `/${lang}/contact` }
        ]}
      />
      <div className="mx-auto max-w-[1440px]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 text-xs font-mono font-bold uppercase tracking-widest block mb-2">
            İletişim & Proje Başvurusu
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Projenizi <span className="text-amber-400">Hemen Başlatın</span>
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            Arsa ölçülerinizi, hedef kullanım amacınızı veya ihtiyacınız olan çelik yapıyı bize iletin. 
            Mühendislik ekibimiz talebinizi inceleyip 24 saat içinde detaylı teknik şartname ve fiyat teklifi ile dönecektir.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-2xl bg-[#0e1b27] border border-white/10 p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-bold text-white border-b border-white/10 pb-4">
                Doğrudan İletişim Bilgileri
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <Phone size={18} className="text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-bold">Telefon & WhatsApp:</strong>
                    <a href="tel:+905320550945" className="text-amber-400 font-mono font-bold hover:underline block text-sm">+90 532 055 09 45</a>
                    <a href="https://wa.me/905320550945?text=Merhaba,%20STRUCTIVA%20%C3%A7elik%20yap%C4%B1%20ve%20hangar%20modelleriniz%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum." target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline inline-flex items-center gap-1 text-xs mt-1 font-semibold">
                      💬 Doğrudan WhatsApp ile Yazın
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-bold">E-posta:</strong>
                    <a href="mailto:info@structiva.com.tr" className="text-slate-300 hover:text-amber-400 block">info@structiva.com.tr</a>
                    <span className="text-slate-400 block text-xs">7/24 Teknik ve İhracat Destek</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-bold">Fabrika & Merkez Adres:</strong>
                    <span className="text-slate-300 leading-relaxed block">
                      Mersin Tarsus Organize Sanayi Bölgesi (MTOSB), Akdeniz, Mersin / Türkiye
                    </span>
                    <span className="text-slate-500 text-xs mt-1 block">
                      (Mersin Uluslararası Konteyner Limanı'na 15 km)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock size={18} className="text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-bold">Çalışma Saatleri:</strong>
                    <span className="text-slate-300 block">Pazartesi – Cumartesi: 08:00 – 18:00 (GMT+3)</span>
                    <span className="text-amber-400 text-xs block">İhracat departmanı 7/24 aktif</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quality Assurance Card */}
            <div className="rounded-2xl bg-gradient-to-br from-amber-500/15 via-amber-500/5 to-transparent border border-amber-500/30 p-6">
              <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider mb-2">Hızlı Teklif Süreci</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Tüm başvurular doğrudan Yönetim Paneline düşer. Mühendislerimiz rüzgar/kar yükü hesapları ve konteyner navlunu ile birlikte eksiksiz şartname hazırlar.
              </p>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#0e1b27] border border-white/10 p-8 lg:p-10 shadow-2xl">
              <h2 className="text-2xl font-black text-white mb-2">Proje Bilgi Formu</h2>
              <p className="text-xs text-slate-400 mb-6">
                Lütfen projenizin temel ölçülerini veya kullanım amacını belirtin.
              </p>

              {submitted ? (
                <div className="rounded-2xl bg-emerald-500/20 border border-emerald-500/40 p-8 text-center text-emerald-300 animate-in fade-in duration-300">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-[#0f1d2a] mx-auto mb-4 font-black">
                    <CheckCircle2 size={36} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Mesajınız Alındı!</h3>
                  <p className="text-sm text-slate-300 leading-relaxed max-w-md mx-auto mb-6">
                    Talebiniz başarıyla kaydedildi ve Yönetim Paneline iletildi. 
                    Mühendislerimiz en kısa sürede sizinle iletişime geçecektir.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="py-2.5 px-6 rounded-xl bg-amber-500 text-[#0f1d2a] text-xs font-bold uppercase tracking-wider"
                  >
                    Yeni Bir Mesaj Gönder
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Adınız Soyadınız *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Örn: Ahmet Yılmaz"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 text-xs text-white placeholder:text-slate-500 outline-none focus:border-amber-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        E-posta Adresiniz *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="Örn: ahmet@sirket.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 text-xs text-white placeholder:text-slate-500 outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Telefon / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="+90 5XX XXX XX XX"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 text-xs text-white placeholder:text-slate-500 outline-none focus:border-amber-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Şirket / Kurum
                      </label>
                      <input
                        type="text"
                        placeholder="Şirket veya Kurum Adı"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 text-xs text-white placeholder:text-slate-500 outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Ülke / Şehir
                      </label>
                      <input
                        type="text"
                        placeholder="Örn: Türkiye, Mersin"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 text-xs text-white placeholder:text-slate-500 outline-none focus:border-amber-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        İlgilendiğiniz Model
                      </label>
                      <select
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                        className="w-full rounded-xl bg-[#09131c] border border-white/15 px-4 py-3 text-xs text-white outline-none focus:border-amber-400 cursor-pointer"
                      >
                        {STEEL_MODELS.map((m) => (
                          <option key={m.id} value={m.name} className="bg-[#0f1d2a] text-white">
                            {m.name} ({m.series})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Proje Notları & Boyut Bilgisi *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tahmini arsa genişliği, bina uzunluğu, istenen kapı tipi veya projenizin kullanım amacı..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 text-xs text-white placeholder:text-slate-500 outline-none focus:border-amber-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-[#0f1d2a] text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20 active:scale-[0.98] transition-all"
                  >
                    {loading ? "İletiliyor..." : "Talebi Gönder (Dashboard'a Kaydet)"}
                    <Send size={15} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
