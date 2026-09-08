import Link from 'next/link';
import siteContent from '@/data/siteContent.json';
const telHref = (n: string) => 'tel:+90' + n.replace(/\s/g, '').replace(/^0/, '');

const steps = [
  {
    number: "01",
    title: "Talep Alınması",
    shortDesc: "İster telefonla ister akıllı asistanımızla bize ulaşın.",
    longDesc: "Süreç, ihtiyaçlarınızı bize iletmenizle başlar. Web sitemizdeki Akıllı Keşif Asistanı'nı kullanarak mülk tipinizi ve ihtiyacınız olan hizmetleri hızlıca seçebilir, iletişim bilgilerinizi bırakarak talebinizi oluşturabilirsiniz. Alternatif olarak bizi telefonla arayarak da talep oluşturabilirsiniz. Talebiniz alınır alınmaz müşteri temsilcimiz en kısa sürede sizinle iletişime geçer ve randevu takviminizi oluşturur.",
    details: [
      "Online talep formu veya telefon ile başvuru",
      "Hızlı geri dönüş ve randevu planlaması",
      "Müsaitlik durumunuza göre esnek zamanlama",
    ],
  },
  {
    number: "02",
    title: "Ücretsiz Keşif",
    shortDesc: "Uzman ekibimiz yerinde inceleme yapar.",
    longDesc: "Randevu gününde uzman ustalarımız adresinize gelerek kapsamlı bir yerinde inceleme gerçekleştirir. Mevcut altyapıyı, tesisat durumunu, elektrik hattını ve çalışma alanını detaylıca analiz ederiz. Termal kamera, nem ölçer, lazer metre gibi profesyonel ekipmanlarla ölçümler alınır. Bu keşif sonucunda ihtiyacınız olan tüm işleri, kullanılacak malzemeleri ve tahmini süreyi içeren detaylı bir iş listesi hazırlanır.",
    details: [
      "Ücretsiz yerinde inceleme ve ölçüm",
      "Profesyonel ekipman ile durum tespiti",
      "Detaylı iş listesi ve malzeme planı",
    ],
  },
  {
    number: "03",
    title: "Yazılı Sözleşme",
    shortDesc: "Tüm şartlar resmi sözleşmeye bağlanır.",
    longDesc: "Keşif sonrası hazırlanan iş listesi, kullanılacak malzemelerin marka ve modelleri, işin başlangıç ve teslim tarihi, toplam maliyet ve ödeme koşulları resmi bir hizmet sözleşmesine dökülür. Sözleşme karşılıklı okunup imzalanır. Bu aşamada net fiyatlandırma garantisi veririz - sözleşmede yazan fiyat dışında iş bitiminde herhangi bir ek ücret talep edilmez.",
    details: [
      "Şeffaf ve anlaşılır sözleşme maddeleri",
      "İş bitim tarihi ve ödeme planı",
      "Sürpriz maliyetlere karşı garanti",
    ],
  },
  {
    number: "04",
    title: "Teslimat & Garanti",
    shortDesc: "İş teslim edilir ve garanti belgeniz verilir.",
    longDesc: "Tüm işler taahhüt edilen sürede, belirlenen standartlara uygun şekilde tamamlanır. Çalışma alanı temizlenir, atıklar toplanır ve size temiz bir şekilde teslim edilir. Yapılan tüm işler için yazılı garanti belgesi düzenlenir. Olası bir sorunda garanti kapsamında ücretsiz müdahale sağlanır. Müşteri memnuniyet anketi ile süreç resmi olarak tamamlanır.",
    details: [
      "Zamanında ve temiz teslimat",
      "Yazılı garanti belgesi",
      "İş sonrası destek ve memnuniyet takibi",
    ],
  },
];

export default function NasilCalisirPage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 antialiased font-sans">
      <section className="bg-gradient-to-br from-[#2d3140] via-[#353a4e] to-[#1e2133] text-white py-16 sm:py-20 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Çalışma Disiplinimiz</span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mt-2">Süreç Nasıl İlerler?</h1>
          <p className="mt-4 text-zinc-300 max-w-2xl min-h-[3rem]">
            Geleneksel, yarım bırakılan iş süreçlerini unutun. BBB İnşaat ile her şey planlı, yazılı ve profesyoneldir.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-zinc-200 hidden md:block" />

            {steps.map((step, idx) => (
              <div key={idx} className="relative pb-16 last:pb-0">
                <div className="md:pl-20">
                  <div className="hidden md:flex absolute left-0 top-0 w-16 h-16 rounded-xl bg-[#2d3140] border-2 border-amber-500 items-center justify-center text-amber-500 font-black text-xl">
                    {step.number}
                  </div>

                  <div className="md:hidden flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#2d3140] flex items-center justify-center text-amber-500 font-black text-sm">{step.number}</div>
                    <span className="w-full h-px bg-zinc-200" />
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    <div className="lg:col-span-3">
                      <h2 className="text-2xl font-black text-zinc-900 uppercase tracking-wide">{step.title}</h2>
                      <p className="mt-1 text-sm text-amber-600 font-semibold">{step.shortDesc}</p>
                      <p className="mt-4 text-zinc-600 leading-relaxed">{step.longDesc}</p>
                    </div>
                    <div className="lg:col-span-2">
                      <div className="bg-white border border-zinc-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xs font-black text-amber-500 uppercase tracking-wider mb-4">Süreç Adımları</h3>
                        <ul className="space-y-3">
                          {step.details.map((detail, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-3 text-sm text-zinc-700">
                              <svg className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="font-medium">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white border-t border-b border-zinc-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">Neden Farklıyız?</span>
            <h2 className="text-2xl font-black text-zinc-900 uppercase tracking-wide mt-2">Farkımız</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Tek Muhatap", desc: "Tüm işleriniz için tek bir kişiyle iletişim kurarsınız." },
              { title: "Şeffaf Fiyat", desc: "Sözleşmede yazan fiyat dışında ek ücret alınmaz." },
              { title: "Zamanında Teslim", desc: "Taahhüt edilen sürede iş teslim edilir." },
              { title: "Garantili İşçilik", desc: "Tüm işler yazılı garanti ile güvence altındadır." },
            ].map((item, idx) => (
              <div key={idx} className="p-5 bg-zinc-50 border border-zinc-200 rounded-xl hover:shadow-md transition-all">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600 font-black text-sm mb-3">{idx + 1}</div>
                <h3 className="font-bold text-zinc-900 uppercase tracking-wide text-sm">{item.title}</h3>
                <p className="mt-1 text-xs text-zinc-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#2d3140] to-[#1e2133] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black uppercase tracking-wide">Hemen Başlayalım</h2>
          <p className="mt-4 text-zinc-300 text-sm">İhtiyaçlarınızı bize bildirin, biz sürecin geri kalanını yönetelim.</p>
          <div className="mt-8 flex flex-col gap-4 justify-center items-center">
            <Link href="/kesif-asistani" className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-zinc-950 font-extrabold rounded-lg shadow-lg shadow-amber-500/25 transition-all hover:shadow-xl hover:-translate-y-0.5 text-center tracking-wide uppercase text-sm">
              Keşif Asistanını Başlat
            </Link>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={telHref(siteContent.phones.primary)} className="px-6 py-3.5 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold rounded-xl transition-all hover:-translate-y-0.5 text-center text-sm flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" /> {siteContent.phones.primary}
              </a>
              <a href={telHref(siteContent.phones.secondary)} className="px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5 text-center text-sm flex items-center justify-center gap-2">
                {siteContent.phones.secondary}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
