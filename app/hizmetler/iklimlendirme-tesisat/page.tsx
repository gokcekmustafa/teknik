'use client';

import Link from 'next/link';
import { useState } from 'react';
import { services } from '@/app/data/services';

const service = services.find(s => s.slug === 'iklimlendirme-tesisat')!;

const faqs = [
  { q: "Kombi bakımı ne sıklıkla yapılmalıdır?", a: "Kombinizin yılda en az bir kez, tercihen kış sezonu öncesinde bakımdan geçmesini öneriyoruz. Düzenli bakım yakıt tasarrufu sağlar ve arıza riskini azaltır." },
  { q: "Klima montajı için duvar tipi mi kaset tipi mi önerirsiniz?", a: "Duvar tipi klimalar evler için idealdir. Kaset tipi klimalar daha çok tavan arasına monte edilir ve ofis, restoran gibi geniş alanlarda tercih edilir. İhtiyacınıza en uygun çözümü yerinde keşif sonrası belirliyoruz." },
  { q: "Tesisat kaçağı nasıl tespit edilir?", a: "Termal kamera, nem ölçer ve basınç testi gibi profesyonel ekipmanlarla noktasal tespit yapıyoruz. Duvarları kırmadan veya fazla hasar vermeden kaçağın kaynağını buluyoruz." },
  { q: "Havuz pompası ne kadar dayanır?", a: "Kaliteli bir havuz pompası düzenli bakımla 8-12 yıl arası kullanılabilir. Periyodik bakım ve kışlama işlemleri pompa ömrünü uzatır." },
];

export default function IklimlendirmeTesisatPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeItem, setActiveItem] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 antialiased font-sans">
      <section className="relative bg-gradient-to-br from-[#2d3140] via-[#353a4e] to-[#1e2133] text-white overflow-hidden py-16 sm:py-20 border-b-4 border-amber-500">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(245,158,11,0.08)_0%,_transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <Link href="/hizmetler" className="text-xs font-bold text-zinc-400 hover:text-amber-400 uppercase tracking-wider transition">← Tüm Hizmetler</Link>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-4xl">{service.icon}</span>
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Hizmet Detayı</span>
              <h1 className="text-4xl sm:text-5xl font-black tracking-tight mt-1">{service.title}</h1>
            </div>
          </div>
          <p className="mt-4 text-zinc-300 max-w-2xl min-h-[3rem]">{service.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {service.items.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveItem(idx)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${
                  activeItem === idx
                    ? 'bg-amber-500 text-zinc-950 shadow-lg shadow-amber-500/20'
                    : 'bg-white/10 border border-white/20 text-zinc-300 hover:bg-white/20'
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {service.items.map((item, idx) => (
            <div
              key={idx}
              className={`scroll-mt-24 transition-all duration-500 ${activeItem === null || activeItem === idx ? 'opacity-100' : 'opacity-30'}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                <div className="lg:col-span-3">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 font-black text-sm">{String(idx + 1).padStart(2, '0')}</span>
                    <h2 className="text-2xl font-black text-zinc-900 uppercase tracking-wide">{item.title}</h2>
                  </div>
                  <p className="text-zinc-600 leading-relaxed">{item.longDesc}</p>
                </div>
                <div className="lg:col-span-2">
                  <div className="bg-white border border-zinc-200 rounded-xl p-6 shadow-sm">
                    <h3 className="text-xs font-black text-amber-500 uppercase tracking-wider mb-4">Avantajlar</h3>
                    <ul className="space-y-3">
                      {item.benefits.map((benefit, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3 text-sm text-zinc-700">
                          <svg className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="font-medium">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              {idx < service.items.length - 1 && <div className="mt-16 border-t border-zinc-200/60" />}
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-zinc-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">Sık Sorulan Sorular</span>
            <h2 className="text-2xl font-black text-zinc-900 uppercase tracking-wide mt-2">SSS</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-zinc-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center gap-4 hover:bg-zinc-50 transition"
                >
                  <span className="font-bold text-sm text-zinc-900">{faq.q}</span>
                  <svg className={`w-4 h-4 text-zinc-400 flex-shrink-0 transition-transform duration-200 ${openFaq === idx ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-4 text-sm text-zinc-500 leading-relaxed animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#2d3140] to-[#1e2133] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black uppercase tracking-wide">Hemen Keşif Talep Edin</h2>
          <p className="mt-4 text-zinc-300 text-sm">Uzman ekibimiz yerinde inceleme yaparak size özel çözüm sunsun.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#kesif-asistani"
              className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-zinc-950 font-extrabold rounded-lg shadow-lg shadow-amber-500/25 transition-all hover:shadow-xl hover:-translate-y-0.5 text-center tracking-wide uppercase text-sm"
            >
              Keşif Asistanını Başlat
            </Link>
            <a
              href="tel:+905387931938"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-bold rounded-lg transition-all hover:-translate-y-0.5 text-center text-sm"
            >
              0538 793 19 38
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
