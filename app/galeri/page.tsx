'use client';
import { useState } from 'react';
import gallery from '@/data/gallery.json';

export default function GaleriPage() {
  const items = gallery as { id: string; src: string; category: string; title: string }[];
  const categories = Array.from(new Set(items.map((x) => x.category)));
  const [active, setActive] = useState('TÜMÜ');
  const filtered = active === 'TÜMÜ' ? items : items.filter((x) => x.category === active);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 antialiased font-sans">
      <section className="bg-gradient-to-br from-[#2d3140] via-[#353a4e] to-[#1e2133] text-white py-16 sm:py-20 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Projelerimiz</span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mt-2">Galeri</h1>
          <p className="mt-4 text-zinc-300 max-w-2xl">Tamamladığımız işlerden seçmeler — seramik, mermer, paslanmaz, mobilya ve daha fazlası.</p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-20 border border-dashed border-zinc-300 rounded-2xl bg-white">
              <p className="text-zinc-500">Henüz fotoğraf eklenmedi.</p>
              <p className="text-xs text-zinc-400 mt-2">Projelerimiz yakında burada sergilenecek.</p>
            </div>
          ) : (
            <>
              <div className="flex flex-wrap gap-2 mb-8">
                <button onClick={() => setActive('TÜMÜ')} className={`px-3 py-1.5 border rounded-lg text-xs font-bold uppercase tracking-wider transition ${active === 'TÜMÜ' ? 'bg-[#2d3140] text-amber-500 border-[#2d3140] shadow-md' : 'bg-white border-zinc-200 text-zinc-600 hover:border-zinc-300 hover:text-zinc-900'}`}>TÜMÜ</button>
                {categories.map((c) => (
                  <button key={c} onClick={() => setActive(c)} className={`px-3 py-1.5 border rounded-lg text-xs font-bold uppercase tracking-wider transition ${active === c ? 'bg-amber-500 text-zinc-950 border-amber-500 shadow-md' : 'bg-white border-zinc-200 text-zinc-600 hover:border-zinc-300 hover:text-zinc-900'}`}>{c}</button>
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((it) => (
                  <div key={it.id} className="group bg-white rounded-xl border border-zinc-200 overflow-hidden shadow-sm hover:shadow-lg transition">
                    <div className="aspect-[4/3] bg-zinc-100 overflow-hidden">
                      <img src={it.src} alt={it.category} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" />
                    </div>
                    <div className="p-3">
                      <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest">{it.category}</span>
                    </div>
                  </div>
                ))}
              </div>
              {filtered.length === 0 && <p className="text-center text-sm text-zinc-500 mt-8">Bu kategoride fotoğraf yok.</p>}
            </>
          )}
        </div>
      </section>
    </div>
  );
}
