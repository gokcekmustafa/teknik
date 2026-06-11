import Link from 'next/link';

export default function HakkimizdaPage() {
  const values = [
    {
      title: "Güven",
      desc: "İşe sözleşmeyle başlar, garantiyle teslim ederiz. Verdiğimiz her sözün arkasında dururuz.",
    },
    {
      title: "Kalite",
      desc: "Kullandığımız her malzeme ve işçilik, sektör standartlarının üzerindedir.",
    },
    {
      title: "Şeffaflık",
      desc: "İş başlangıcında net fiyatlandırma, süreç boyunca düzenli bilgilendirme.",
    },
    {
      title: "Profesyonellik",
      desc: "Ekiplerimiz sertifikalı, sigortalı ve her iş için özel olarak yönlendirilir.",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 antialiased font-sans">
      <section className="relative bg-gradient-to-br from-[#2d3140] via-[#353a4e] to-[#1e2133] text-white overflow-hidden py-16 sm:py-20 border-b-4 border-amber-500">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.03)_0%,_transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Kurumsal</span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mt-2">Hakkımızda</h1>
          <p className="mt-4 text-zinc-300 max-w-2xl min-h-[3rem]">
            Villa ve daireleriniz için teknik servis ihtiyaçlarınızda yanınızdayız.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">Biz Kimiz?</span>
              <h2 className="text-3xl font-black text-zinc-900 uppercase tracking-wide mt-2">Profesyonel Teknik</h2>
              <p className="text-xs text-zinc-400 mt-1">Gespa Elektronik Pazarlama Sanayi ve Dış Tic.Ltd.Şti.</p>
              <div className="mt-6 space-y-4 text-zinc-600 leading-relaxed text-sm">
                <p>
                  Profesyonel Teknik olarak, villa ve daire sahiplerinin ihtiyaç duyduğu tüm teknik servis hizmetlerini tek bir çatı altında topluyoruz. Elektrikli araç şarj istasyonu kurulumundan çatı izolasyonuna, klima montajından bahçe peyzaj aydınlatmasına kadar geniş bir yelpazede hizmet veriyoruz.
                </p>
                <p>
                  Sektördeki yılların deneyimiyle, müşterilerimize &quot;tek muhatap, net fiyat, garantili işçilik&quot; prensibiyle yaklaşıyoruz. Usta arayarak vakit kaybetmenize gerek yok. Tüm süreçleri planlıyor, yazılı sözleşmeyle güvence altına alıyor ve zamanında teslim ediyoruz.
                </p>
                <p>
                  Ekibimiz; elektrik, tesisat, iklimlendirme, otomasyon ve yapı yenileme alanlarında sertifikalı ve deneyimli profesyonellerden oluşmaktadır. Her iş için doğru uzmanı yönlendiriyor, kaliteden ödün vermiyoruz.
                </p>
                <p>
                  Enerji ve aydınlatmadan iklimlendirmeye, dış alan otomasyonundan yenileme ve izolasyona kadar her branşta personelimiz kendi alanında uzmanlaşmış, sektör tecrübesi yüksek sertifikalı ustalardan oluşur. Hangi hizmeti talep ederseniz edin, işin başından sonuna kadar o alanda yetkin bir uzman tarafından yönlendirilirsiniz.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#2d3140] to-[#1e2133] rounded-2xl p-8 lg:p-10 text-white">
              <div className="text-6xl font-black text-amber-500/20 leading-none mb-6">&quot;</div>
              <p className="text-lg leading-relaxed text-zinc-200 italic">
                Mülkünüzün tüm teknik işlerini tek elden, güvenle ve profesyonelce çözüyoruz.
              </p>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="font-bold text-amber-400">Profesyonel Teknik Ekibi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white border-t border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">Değerlerimiz</span>
            <h2 className="text-2xl font-black text-zinc-900 uppercase tracking-wide mt-2">İlkelerimiz</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => (
              <div key={idx} className="group relative p-6 bg-zinc-50 border border-zinc-200 rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-3xl font-black text-amber-500/30 block mb-4 leading-none">{String(idx + 1).padStart(2, '0')}</span>
                <h3 className="text-lg font-black text-zinc-900 uppercase tracking-wide">{v.title}</h3>
                <p className="mt-2 text-sm text-zinc-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">Hemen Başlayalım</span>
          <h2 className="text-2xl font-black text-zinc-900 uppercase tracking-wide mt-2">Sıradaki Proje Sizin Olsun</h2>
          <p className="mt-4 text-zinc-500 text-sm max-w-lg mx-auto">
            Ücretsiz keşif ve fiyat teklifi için akıllı asistanımızı kullanın veya bizi arayın.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#kesif-asistani"
              className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-zinc-950 font-extrabold rounded-lg shadow-lg shadow-amber-500/25 transition-all hover:shadow-xl hover:-translate-y-0.5 text-center tracking-wide uppercase text-sm"
            >
              Keşif Asistanını Başlat
            </Link>
            <a
              href="tel:+902128927502"
              className="px-8 py-4 bg-[#2d3140] hover:bg-[#3a3f52] text-white font-bold rounded-lg shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5 text-center text-sm"
            >
              0212 892 75 02
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
