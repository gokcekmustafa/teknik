import gallery from "@/data/gallery.json";

export const dynamic = "force-static";

export default function GaleriPage() {
  const items = gallery as { id: string; src: string; category: string; title: string }[];
  const categories = Array.from(new Set(items.map((x) => x.category)));

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
              <p className="text-zinc-500">Henüz fotoğraf eklenmedi. Admin panelinden yükleyebilirsiniz.</p>
              <a href="/admin" className="inline-block mt-4 px-6 py-3 bg-[#2d3140] text-amber-500 font-bold rounded-lg text-sm">Admin Paneli →</a>
            </div>
          ) : (
            <>
              {categories.length > 1 && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {categories.map((c) => (
                    <span key={c} className="px-3 py-1.5 bg-white border border-zinc-200 rounded-lg text-xs font-bold uppercase tracking-wider text-zinc-600">{c}</span>
                  ))}
                </div>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((it) => (
                  <div key={it.id} className="group bg-white rounded-xl border border-zinc-200 overflow-hidden shadow-sm hover:shadow-lg transition">
                    <div className="aspect-[4/3] bg-zinc-100 overflow-hidden">
                      <img src={it.src} alt={it.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" />
                    </div>
                    <div className="p-4">
                      <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest">{it.category}</span>
                      <h3 className="font-bold text-zinc-900 text-sm mt-1">{it.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
