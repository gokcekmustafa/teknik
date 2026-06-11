'use client';

import { useState } from 'react';

export default function IletisimPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 antialiased font-sans">
      <section className="relative bg-gradient-to-br from-[#2d3140] via-[#353a4e] to-[#1e2133] text-white overflow-hidden py-16 sm:py-20 border-b-4 border-amber-500">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.03)_0%,_transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">İletişim</span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mt-2">Bize Ulaşın</h1>
          <p className="mt-4 text-zinc-300 max-w-2xl min-h-[3rem]">
            Sorularınız, talepleriniz veya önerileriniz için aşağıdaki kanallardan bize ulaşabilirsiniz.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-black text-zinc-900 uppercase tracking-wide mb-8">İletişim Formu</h2>
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-black text-zinc-500 uppercase tracking-wider mb-2">Adınız Soyadınız</label>
                      <input
                        type="text" required
                        className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10 transition-all placeholder:text-zinc-300"
                        placeholder="Adınız Soyadınız"
                        value={form.name}
                        onChange={(e) => setForm({...form, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-black text-zinc-500 uppercase tracking-wider mb-2">Telefon</label>
                      <input
                        type="tel" required
                        className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10 transition-all placeholder:text-zinc-300"
                        placeholder="05xx xxx xx xx"
                        value={form.phone}
                        onChange={(e) => setForm({...form, phone: e.target.value})}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-black text-zinc-500 uppercase tracking-wider mb-2">E-posta (Opsiyonel)</label>
                    <input
                      type="email"
                      className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10 transition-all placeholder:text-zinc-300"
                      placeholder="ornek@email.com"
                      value={form.email}
                      onChange={(e) => setForm({...form, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-zinc-500 uppercase tracking-wider mb-2">Mesajınız</label>
                    <textarea
                      rows={4} required
                      className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10 transition-all resize-none placeholder:text-zinc-300"
                      placeholder="Bize iletmek istediğiniz mesaj..."
                      value={form.message}
                      onChange={(e) => setForm({...form, message: e.target.value})}
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-8 py-3.5 bg-amber-500 hover:bg-amber-600 text-zinc-950 font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-amber-500/20 hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-0.5"
                  >
                    Mesajı Gönder
                  </button>
                </form>
              ) : (
                <div className="text-center py-12 animate-scale-in">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 text-white flex items-center justify-center rounded-full mx-auto mb-6 shadow-lg shadow-amber-500/20">
                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-black text-zinc-900 uppercase tracking-wide">Mesajınız Alındı!</h3>
                  <p className="mt-3 text-sm text-zinc-500">En kısa sürede size dönüş yapacağız.</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', message: '' }); }}
                    className="mt-6 px-6 py-2.5 bg-[#2d3140] text-amber-500 font-bold text-xs uppercase tracking-wider rounded-lg transition-all hover:bg-[#3a3f52]"
                  >
                    Yeni Mesaj
                  </button>
                </div>
              )}
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white border border-zinc-200 rounded-2xl p-8 shadow-sm space-y-8">
                <div>
                  <h3 className="text-sm font-black text-zinc-900 uppercase tracking-wider mb-4">İletişim Bilgileri</h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-zinc-500 uppercase tracking-wider">Merkez Ofis</span>
                        <span className="text-sm text-zinc-800 font-medium">Saadetdere mahallesi 109. sokak no:27/1 Esenyurt/İSTANBUL</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-zinc-500 uppercase tracking-wider">Telefon</span>
                        <a href="tel:+902128927502" className="text-sm text-zinc-800 font-medium hover:text-amber-500 transition">0212 892 75 02</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-[#25D366]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-zinc-500 uppercase tracking-wider">Mobil</span>
                        <a href="tel:+905405250050" className="text-sm text-zinc-800 font-medium hover:text-amber-500 transition">0540 525 00 50</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-zinc-500 uppercase tracking-wider">E-posta</span>
                        <a href="mailto:info@profesyonelteknik.com" className="text-sm text-zinc-800 font-medium hover:text-amber-500 transition">info@profesyonelteknik.com</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-zinc-500 uppercase tracking-wider">Çalışma Saatleri</span>
                        <span className="text-sm text-zinc-800 font-medium">Haftanın 6 Günü: 09:00 - 19:00</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-zinc-200">
                  <a
                    href="https://wa.me/905405250050"
                    className="flex items-center justify-center gap-3 w-full px-6 py-3.5 bg-[#25D366] hover:bg-[#1ebe57] text-white font-bold rounded-xl transition-all shadow-lg shadow-[#25D366]/20 hover:shadow-xl"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.411 0 11.981 0c3.184.001 6.177 1.242 8.43 3.496 2.253 2.254 3.492 5.249 3.49 8.434-.004 6.632-5.353 11.982-11.922 11.982-2.01-.002-3.987-.508-5.742-1.472L0 24zm6.59-4.846c1.62.963 3.21 1.48 5.333 1.481 5.417-.002 9.825-4.382 9.828-9.755.002-2.602-1.01-5.05-2.85-6.892C17.07 2.146 14.625 1.13 12.01 1.13c-5.424 0-9.833 4.383-9.836 9.758-.002 2.105.548 4.15 1.594 5.943l-1.044 3.812 3.923-1.017z"/>
                    </svg>
                    WhatsApp Canlı Destek
                  </a>
                </div>

                <div className="pt-6 border-t border-zinc-200">
                  <div className="bg-zinc-50 rounded-xl h-48 flex items-center justify-center border border-zinc-200">
                    <div className="text-center">
                      <svg className="w-8 h-8 text-zinc-300 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                      <p className="text-xs text-zinc-400 font-medium">Google Maps</p>
                      <p className="text-xs text-zinc-300 mt-1">İstanbul, Türkiye</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
