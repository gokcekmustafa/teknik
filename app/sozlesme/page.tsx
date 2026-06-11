import Link from 'next/link';

export default function SozlesmePage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 antialiased font-sans">
      <section className="bg-gradient-to-br from-[#2d3140] via-[#353a4e] to-[#1e2133] text-white py-16 sm:py-20 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/" className="text-xs font-bold text-zinc-400 hover:text-amber-400 uppercase tracking-wider transition">← Anasayfa</Link>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mt-2">Hizmet Sözleşmesi</h1>
          <p className="mt-4 text-zinc-300 max-w-2xl min-h-[3rem]">Profesyonel Teknik olarak sunduğumuz hizmetlere ilişkin sözleşme koşulları.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-zinc-200/80 p-6 sm:p-12 shadow-sm space-y-8 text-sm text-zinc-600 leading-relaxed">

            <div>
              <h2 className="text-lg font-black text-zinc-900 uppercase tracking-wide mb-3">1. Taraflar</h2>
              <p>İşbu sözleşme, aşağıda bilgileri yer alan <strong>Gespa Elektronik Pazarlama Sanayi ve Dış Tic.Ltd.Şti.</strong> (bundan böyle &quot;Firma&quot; olarak anılacaktır) ile hizmet alan müşteri (bundan böyle &quot;Müşteri&quot; olarak anılacaktır) arasında akdedilmiştir.</p>
            </div>

            <div>
              <h2 className="text-lg font-black text-zinc-900 uppercase tracking-wide mb-3">2. Hizmetin Kapsamı</h2>
              <p>Firma, Müşteri tarafından talep edilen ve keşif sonucu belirlenen teknik servis hizmetlerini, sözleşmede belirtilen süre ve şartlarda gerçekleştirmeyi taahhüt eder. Hizmet kapsamı, kullanılacak malzemeler, işçilik detayları ve teslim tarihi sözleşme ekinde belirtilir.</p>
            </div>

            <div>
              <h2 className="text-lg font-black text-zinc-900 uppercase tracking-wide mb-3">3. Fiyatlandırma ve Ödeme</h2>
              <p>Sözleşmede belirtilen toplam bedel kesindir. İşin devamı sırasında ortaya çıkan ek ihtiyaçlar hariç olmak üzere, sözleşme bedeli dışında Müşteri&apos;den herhangi bir ek ücret talep edilmez. Ödeme planı sözleşmede belirtilen şekilde yapılır.</p>
            </div>

            <div>
              <h2 className="text-lg font-black text-zinc-900 uppercase tracking-wide mb-3">4. İşin Süresi ve Teslimat</h2>
              <p>Hizmet, keşif sonrası belirlenen ve sözleşmede yazılı olan teslim tarihinde tamamlanır. Mücbir sebepler veya Müşteri kaynaklı gecikmeler dışında, belirtilen süreye uyulur. Gecikme durumunda Müşteri bilgilendirilir.</p>
            </div>

            <div>
              <h2 className="text-lg font-black text-zinc-900 uppercase tracking-wide mb-3">5. Garanti</h2>
              <p>Firma, gerçekleştirdiği tüm işçilik ve kullandığı malzemeler için sözleşmede belirtilen süre boyunca garanti vermektedir. Garanti kapsamındaki arızalarda Müşteri&apos;ye ek ücret yansıtılmaz. Garanti dışı durumlar (yanlış kullanım, harici müdahale, doğal afet vb.) sözleşmede belirtilir.</p>
            </div>

            <div>
              <h2 className="text-lg font-black text-zinc-900 uppercase tracking-wide mb-3">6. İhtilaf Halinde</h2>
              <p>İşbu sözleşmeden doğacak uyuşmazlıklarda İstanbul Mahkemeleri ve İcra Daireleri yetkilidir.</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
