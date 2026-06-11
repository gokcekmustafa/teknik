'use client';

import Link from 'next/link';
import { services } from '@/app/data/services';

export default function HizmetlerPage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 antialiased font-sans">
      <div className="bg-gradient-to-br from-[#2d3140] via-[#353a4e] to-[#1e2133] text-white py-16 sm:py-20 border-b-4 border-amber-500">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.03)_0%,_transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Neler Yapıyoruz?</span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mt-2">Hizmetlerimiz</h1>
          <p className="mt-4 text-zinc-300 max-w-2xl min-h-[3rem]">
            Villa ve daireleriniz için ihtiyaç duyduğunuz tüm teknik servis hizmetlerini tek bir çatı altında topladık.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/hizmetler/${service.slug}`}
              className="group relative bg-white rounded-2xl border border-zinc-200/80 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="flex items-start gap-5">
                <span className="text-3xl flex-shrink-0 w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                  {service.icon}
                </span>
                <div className="flex-1 min-w-0">
                  <h2 className="text-xl font-black text-zinc-900 uppercase tracking-wide group-hover:text-amber-600 transition-colors">
                    {service.title}
                  </h2>
                  <p className="mt-2 text-sm text-zinc-500 leading-relaxed">{service.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.items.map((item, idx) => (
                      <span key={idx} className="text-xs px-3 py-1.5 bg-zinc-100 text-zinc-600 rounded-lg font-medium">
                        {item.title}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-zinc-100 flex justify-end">
                <span className="text-xs font-bold text-amber-500 uppercase tracking-wider group-hover:gap-2 transition-all">
                  Detaylı İncele →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
