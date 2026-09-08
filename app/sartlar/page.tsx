import Link from 'next/link';

export default function SartlarPage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 antialiased font-sans">
      <section className="bg-gradient-to-br from-[#2d3140] via-[#353a4e] to-[#1e2133] text-white py-16 sm:py-20 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/" className="text-xs font-bold text-zinc-400 hover:text-amber-400 uppercase tracking-wider transition">← Anasayfa</Link>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mt-2">Hükümler & Şartlar</h1>
          <p className="mt-4 text-zinc-300 max-w-2xl min-h-[3rem]">Web sitemizi kullanımınıza ilişkin hüküm ve koşullar.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-zinc-200/80 p-6 sm:p-12 shadow-sm space-y-8 text-sm text-zinc-600 leading-relaxed">

            <div>
              <h2 className="text-lg font-black text-zinc-900 uppercase tracking-wide mb-3">1. Kullanım Koşulları</h2>
              <p>Bu web sitesini ziyaret ederek aşağıdaki hüküm ve koşulları kabul etmiş sayılırsınız. Site içeriği önceden haber verilmeksizin değiştirilebilir.</p>
            </div>

            <div>
              <h2 className="text-lg font-black text-zinc-900 uppercase tracking-wide mb-3">2. Fikri Mülkiyet</h2>
              <p>Sitede yer alan tüm metin, görsel, logo ve içerikler BBB İnşaat Ltd. Şti.&apos;ye aittir. İzinsiz kullanımı, çoğaltılması veya dağıtılması yasaktır.</p>
            </div>

            <div>
              <h2 className="text-lg font-black text-zinc-900 uppercase tracking-wide mb-3">3. Bilgi Doğruluğu</h2>
              <p>Sitede sunulan bilgiler mümkün olduğunca güncel ve doğru olmakla birlikte, hata veya eksiklikler olabilir. Firma, site içeriğinden kaynaklanan herhangi bir zarardan sorumlu tutulamaz.</p>
            </div>

            <div>
              <h2 className="text-lg font-black text-zinc-900 uppercase tracking-wide mb-3">4. Üçüncü Taraf Bağlantıları</h2>
              <p>Sitemiz üçüncü taraf web sitelerine bağlantılar içerebilir. Bu sitelerin içerik veya gizlilik politikalarından Firmamız sorumlu değildir.</p>
            </div>

            <div>
              <h2 className="text-lg font-black text-zinc-900 uppercase tracking-wide mb-3">5. Gizlilik</h2>
              <p>Müşteri bilgileri, yalnızca hizmet kalitesini artırmak ve yasal yükümlülükleri yerine getirmek amacıyla kullanılır. Kişisel veriler, KVKK kapsamında korunmakta olup üçüncü taraflarla izinsiz paylaşılmaz.</p>
            </div>

            <div>
              <h2 className="text-lg font-black text-zinc-900 uppercase tracking-wide mb-3">6. Değişiklikler</h2>
              <p>Firma, bu hüküm ve şartları dilediği zaman değiştirme hakkını saklı tutar. Değişiklikler sitede yayınlandığı andan itibaren geçerlidir.</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
