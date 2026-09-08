'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import siteContent from '@/data/siteContent.json';

const telHref = (n: string) => 'tel:+90' + n.replace(/\s/g, '').replace(/^0/, '');
const ACCESS_KEY = 'c487cfcb-24cc-45e3-a0e7-2e3d4e44d991';

const services = [
  {
    id: "taahhut",
    title: "İnşaat Taahhüt",
    description: "Kaba inşaattan anahtar teslime villa, daire ve ticari alanlarda proje bazlı taahhüt.",
    items: [
      "Anahtar Teslim İnşaat & Tadilat",
      "Kaba İnşaat & Betonarme Uygulamaları",
      "Proje Yönetimi & Şantiye Taahhüdü"
    ]
  },
  {
    id: "enerji",
    title: "Enerji & Aydınlatma",
    description: "Villa ve dairelerinize modern enerji altyapısı ve estetik aydınlatma montajları.",
    items: [
      "Elektrikli Şarj İstasyonu Kurulumu & Beslemesi",
      "Bahçe Aydınlatma Altyapı ve Montaj İşleri",
      "Bulvar ve Sokak Arası Aydınlatma Direk Kurulumları",
      "Elektrik Uygulaması"
    ]
  },
  {
    id: "iklimlendirme",
    title: "İklimlendirme & Tesisat",
    description: "Yaşam alanınızın konforunu artıracak iklimlendirme ve su tesisat çözümleri.",
    items: [
      "Kombi Bakım, Onarım ve Teknik Servisi",
      "Klima Montajı, Gaz Dolumu ve Tamiri",
      "Plastik Tesisat Çekimi & Kaynak Tamiratları",
      "Bahçe Havuz Sistemleri & Hidrofor Bakımları"
    ]
  },
  {
    id: "otomasyon",
    title: "Dış Alan & Otomasyon",
    description: "Güvenlik ve fonksiyonelliği bir arada sunan çevre kapama ve otomasyon sistemleri.",
    items: [
      "Motorlu & Raylı Garaj Kapısı Sistemleri",
      "Ahşap Çit ve Tel Örgü Uygulamaları",
      "Duvar Üstü Ferforje (Plastik & Demir) Montajı",
      "Özel Tasarım Bahçe Pergole Yapımı"
    ]
  },
  {
    id: "yapi",
    title: "Yenileme & İzolasyon",
    description: "Dış etkenlere karşı koruma ve estetik görünüm kazandıran yapı uygulamaları.",
    items: [
      "Dış Cephe & İç Cephe Alçı, Sıva ve Boya İşleri",
      "Alçıpan Uygulaması",
      "Çatı İzolasyonu & Kiremit Aktarma ve Tamiri"
    ]
  },
  {
    id: "kaplama",
    title: "Kaplama Uygulamaları",
    description: "Zemin ve duvarlarda seramik, mermer ve şap ile estetik kaplama çözümleri.",
    items: [
      "Seramik Uygulaması",
      "Mermer Uygulaması",
      "Şap Uygulaması",
      "İnce İşçilik Uygulaması"
    ]
  },
  {
    id: "metal-ahsap",
    title: "Metal & Ahşap Uygulamaları",
    description: "Paslanmaz, demir ve mobilya imalatında ölçüye özel dayanıklı çözümler.",
    items: [
      "Paslanmaz Uygulaması",
      "Demir Kaynak Uygulaması",
      "Mobilya Uygulaması"
    ]
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('all');
  
  // Keşif Asistanı (Sihirbaz) State Yönetimi
  const [step, setStep] = useState(1);
  const [propertyType, setPropertyType] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [clientInfo, setClientInfo] = useState({ name: '', phone: '', note: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const toggleServiceSelection = (serviceName: string) => {
    if (selectedServices.includes(serviceName)) {
      setSelectedServices(selectedServices.filter(s => s !== serviceName));
    } else {
      setSelectedServices([...selectedServices, serviceName]);
    }
  };

  const handleNextStep = () => {
    if (step === 1 && !propertyType) return;
    if (step === 2 && selectedServices.length === 0) return;
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: ACCESS_KEY,
        subject: 'Keşif Talebi - BBB İnşaat',
        from_name: clientInfo.name,
        name: clientInfo.name,
        phone: clientInfo.phone,
        'Mülk Tipi': propertyType === 'villa' ? 'Villa / Müstakil Ev' : 'Daire / Apartman',
        'Seçilen Hizmetler': selectedServices.join(', '),
        'Ek Not': clientInfo.note,
      }),
    });
    setLoading(false);
    if (res.ok) {
      setIsSubmitted(true);
    } else {
      setError('Gönderilirken bir hata oluştu. Lütfen tekrar deneyin.');
    }
  };

  const resetWizard = () => {
    setStep(1);
    setPropertyType('');
    setSelectedServices([]);
    setClientInfo({ name: '', phone: '', note: '' });
    setIsSubmitted(false);
  };

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(s => s.id === activeTab);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 antialiased font-sans [text-rendering:optimizeLegibility] [-webkit-font-smoothing:antialiased]">
      


      {/* */}
      <header className="relative bg-gradient-to-br from-[#2d3140] via-[#353a4e] to-[#1e2133] text-white overflow-hidden py-16 sm:py-20 lg:py-28 border-b-4 border-amber-500">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.03)_0%,_transparent_50%)] pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-1/3 bg-[#3a3f52]/40 transform skew-x-12 pointer-events-none hidden lg:block" />
        <div className="absolute right-1/4 top-0 h-full w-1/12 bg-amber-500/10 transform skew-x-12 pointer-events-none hidden lg:block" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#2d3140] to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-amber-500/10 border border-amber-500/20 text-xs font-bold text-amber-400 uppercase tracking-widest mb-6 animate-fade-in-up">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" /> İnşaat Taahhüt & Anahtar Teslim Çözümler
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight animate-fade-in-up animate-delay-100">
                İnşaat Taahhüt ve <br />
                Tüm Teknik İşler <span className="text-amber-500">Tek Elden Güvende.</span>
              </h1>
              <p className="mt-6 text-base sm:text-lg text-zinc-300 max-w-xl leading-relaxed animate-fade-in-up animate-delay-200">
                Kaba inşaattan anahtar teslime — villa, daire ve ticari alanlarda proje bazlı taahhüt. Elektrik, tesisat, kaplama ve ince işçilik dahil tüm imalatlar tek sözleşme, tek muhatap ve yazılı teslim garantisiyle yönetilir.
              </p>
              
              <div className="mt-10 flex flex-col gap-4 animate-fade-in-up animate-delay-300">
                <a href="/kesif-asistani" className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-zinc-950 font-extrabold rounded-lg shadow-lg shadow-amber-500/25 transition-all hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-0.5 text-center tracking-wide uppercase text-sm">
                  Keşif Asistanını Başlat
                </a>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href={telHref(siteContent.phones.primary)} className="flex-1 px-6 py-3.5 bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl transition-all hover:-translate-y-0.5 text-center text-sm flex items-center justify-center gap-2">
                    <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    {siteContent.phones.primary}
                  </a>
                  <a href={telHref(siteContent.phones.secondary)} className="flex-1 px-6 py-3.5 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/15 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5 text-center text-sm flex items-center justify-center gap-2">
                    <svg className="w-4 h-4 text-zinc-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    {siteContent.phones.secondary}
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-lg border border-white/10 shadow-2xl relative overflow-hidden animate-scale-in animate-delay-300">
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -left-10 -top-10 w-40 h-40 bg-white/5 rounded-full blur-3xl pointer-events-none" />
                <h3 className="text-xl font-extrabold text-white mb-6 tracking-wide uppercase">Kurumsal Kalite Güvencesi</h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4 group">
                    <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center text-amber-400 font-bold shrink-0 group-hover:bg-amber-500 group-hover:text-zinc-950 transition-all duration-300">1</div>
                    <div>
                      <h4 className="font-bold text-white text-base">Tek Muhatap & Net Fiyat</h4>
                      <p className="text-zinc-300 text-sm mt-1">İş esnasında sürpriz maliyetler çıkmaz, tüm işleriniz için tek bir resmi muhatapla çalışırsınız.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 group">
                    <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center text-amber-400 font-bold shrink-0 group-hover:bg-amber-500 group-hover:text-zinc-950 transition-all duration-300">2</div>
                    <div>
                      <h4 className="font-bold text-white text-base">Alanında Uzman Kadro</h4>
                      <p className="text-zinc-300 text-sm mt-1">Tüm elektrik, tesisat ve yapı işleri ilgili alanda uzman ve tecrübesi olan profesyonel ustalarca yapılır.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 group">
                    <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center text-amber-400 font-bold shrink-0 group-hover:bg-amber-500 group-hover:text-zinc-950 transition-all duration-300">3</div>
                    <div>
                      <h4 className="font-bold text-white text-base">Yazılı Hizmet Sözleşmesi</h4>
                      <p className="text-zinc-300 text-sm mt-1">Yapılan tüm tamirat, montaj ve yalıtım işleri sözleşmeli olarak garanti kapsamına alınır.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>

      <section className="bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-zinc-100">
            <div className="flex items-center justify-center gap-3 py-4 sm:py-5">
              <span className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/15 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </span>
              <div className="text-left">
                <p className="text-xs font-black text-zinc-900 uppercase tracking-widest">Yazılı Taahhüt</p>
                <p className="text-[11px] text-zinc-500">Sözleşmeli, net metraj & hakediş</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 py-4 sm:py-5">
              <span className="w-9 h-9 rounded-xl bg-[#2d3140] flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2h5m5 0h2a2 2 0 002-2v-5a2 2 0 00-2-2h-2m-5 0V9m0 0l3 3m-3-3l-3 3" /></svg>
              </span>
              <div className="text-left">
                <p className="text-xs font-black text-zinc-900 uppercase tracking-widest">Anahtar Teslim</p>
                <p className="text-[11px] text-zinc-500">Kaba inşaattan ince işçiliğe tek el</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 py-4 sm:py-5">
              <span className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/15 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </span>
              <div className="text-left">
                <p className="text-xs font-black text-zinc-900 uppercase tracking-widest">Proje Teslim Garantisi</p>
                <p className="text-[11px] text-zinc-500">İş programına uyumlu, zamanında teslim</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* */}
      <section id="neden-biz" className="py-16 sm:py-20 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="group relative p-6 sm:p-8 bg-white border border-zinc-200 rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div>
                <span className="text-5xl font-black text-amber-500/20 group-hover:text-amber-500/40 transition-colors duration-300 mb-4 block leading-none">01</span>
                <h3 className="text-lg font-black text-zinc-900 uppercase tracking-wide">Yazılı İş Garantisi</h3>
                <p className="text-sm text-zinc-500 mt-2 leading-relaxed">Yapılan tesisat yenileme, çatı yalıtımı veya boya işleri için teslimat sonrası yazılı garanti belgesi veriyoruz.</p>
              </div>
            </div>
            <div className="group relative p-6 sm:p-8 bg-white border border-zinc-200 rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div>
                <span className="text-5xl font-black text-amber-500/20 group-hover:text-amber-500/40 transition-colors duration-300 mb-4 block leading-none">02</span>
                <h3 className="text-lg font-black text-zinc-900 uppercase tracking-wide">Alanında Uzman Personel</h3>
                <p className="text-sm text-zinc-500 mt-2 leading-relaxed">Her branşta alanında uzman ekiplerle çalışıyor, doğru işe doğru personeli yönlendiriyoruz. Yılların deneyimine sahip ustalarımızla kaliteden ödün vermiyoruz.</p>
              </div>
            </div>
            <div className="group relative p-6 sm:p-8 bg-white border border-zinc-200 rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div>
                <span className="text-5xl font-black text-amber-500/20 group-hover:text-amber-500/40 transition-colors duration-300 mb-4 block leading-none">03</span>
                <h3 className="text-lg font-black text-zinc-900 uppercase tracking-wide">Detaycı İnce İşçilik</h3>
                <p className="text-sm text-zinc-500 mt-2 leading-relaxed">Mermer, seramik döşeme, alçı, sıva ve boya gibi estetik işlerde en ince ayrıntıya kadar kusursuz işçilik sunuyoruz.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* */}
      <section id="hizmetler" className="py-16 sm:py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">Neler Yapıyoruz?</span>
            <h2 className="text-3xl font-black tracking-tight text-zinc-900 sm:text-4xl mt-2">Geniş Teknik Servis Yelpazemiz</h2>
            <p className="mt-4 text-zinc-500 text-sm">Usta karmaşasına son! Mülkünüzün ihtiyacı olan tüm uzmanlık dallarını tek bir çatı altında topladık.</p>
            
            {/* Filtreleme Sekmeleri */}
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              <button 
                onClick={() => setActiveTab('all')} 
                className={`px-4 sm:px-5 py-3 sm:py-2.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${activeTab === 'all' ? 'bg-[#2d3140] text-amber-500 shadow-lg shadow-[#2d3140]/20' : 'bg-white text-zinc-600 hover:text-zinc-900 hover:shadow-md border border-zinc-200 shadow-sm'}`}
              >
                TÜMÜ
              </button>
              {services.map(s => (
                <button 
                  key={s.id}
                  onClick={() => setActiveTab(s.id)} 
                  className={`px-4 sm:px-5 py-3 sm:py-2.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${activeTab === s.id ? 'bg-[#2d3140] text-amber-500 shadow-lg shadow-[#2d3140]/20' : 'bg-white text-zinc-600 hover:text-zinc-900 hover:shadow-md border border-zinc-200 shadow-sm'}`}
                >
                  {s.title}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {filteredServices.map((service) => (
              <div 
                key={service.id} 
                className={`bg-white rounded-xl border p-6 sm:p-8 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between relative group ${service.id === 'taahhut' ? 'border-amber-200 bg-amber-50/30 shadow-amber-500/5' : 'border-zinc-200/80'}`}
              >
                <div className="absolute top-4 left-0 w-1 h-8 bg-amber-500 rounded-r group-hover:h-12 transition-all duration-300" />
                
                <div className="pl-4">
                  <h3 className="text-xl font-black text-zinc-900 uppercase tracking-wide flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-amber-500 rounded-sm inline-block" />
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-500 leading-relaxed">{service.description}</p>
                  
                  <ul className="mt-6 space-y-3 border-t border-zinc-100 pt-6">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-zinc-600">
                        <svg className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs pl-4">
                  <span className="text-zinc-400 font-semibold uppercase tracking-wider">Garanti Kapsamında</span>
                  <a href="#keşif-asistani" className="text-amber-500 hover:text-zinc-900 font-bold uppercase tracking-wider transition">Keşif İste →</a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* */}
      <section id="nasil-calisir" className="py-16 sm:py-24 bg-gradient-to-b from-[#2d3140] to-[#252838] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">Çalışma Disiplinimiz</span>
            <h2 className="text-3xl font-black uppercase tracking-wide mt-2">Süreç Nasıl İlerler?</h2>
            <p className="mt-4 text-zinc-400 text-sm">Geleneksel, yarım bırakılan iş süreçlerini unutun. BBB İnşaat ile her şey planlı, yazılı ve profesyoneldir.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            
            <div className="relative p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <div className="absolute top-4 right-4 text-6xl font-black text-white/5 group-hover:text-white/10 transition-colors duration-300">01</div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 font-black text-lg mb-5 group-hover:bg-amber-500 group-hover:text-zinc-950 transition-all duration-300">1</div>
              <h3 className="text-lg font-bold text-white uppercase tracking-wide mb-3">Talebin Alınması</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">İster telefonla ister sitemizdeki akıllı asistan ile talebinizi bize ulaştırırsınız. Hızlıca randevu oluşturulur.</p>
              <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                <svg className="w-6 h-6 text-amber-500/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            <div className="relative p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <div className="absolute top-4 right-4 text-6xl font-black text-white/5 group-hover:text-white/10 transition-colors duration-300">02</div>
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-zinc-300 font-black text-lg mb-5 group-hover:bg-amber-500 group-hover:text-zinc-950 group-hover:border-amber-500 transition-all duration-300">2</div>
              <h3 className="text-lg font-bold text-white uppercase tracking-wide mb-3">Ücretsiz Keşif</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">Uzman ustalarımız adresinizi ziyaret ederek tesisatı, alanın yapısını inceler ve kesin bir iş listesi hazırlar.</p>
              <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                <svg className="w-6 h-6 text-amber-500/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            <div className="relative p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <div className="absolute top-4 right-4 text-6xl font-black text-white/5 group-hover:text-white/10 transition-colors duration-300">03</div>
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-zinc-300 font-black text-lg mb-5 group-hover:bg-amber-500 group-hover:text-zinc-950 group-hover:border-amber-500 transition-all duration-300">3</div>
              <h3 className="text-lg font-bold text-white uppercase tracking-wide mb-3">Yazılı Sözleşme</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">İşin teslim süresi, kullanılacak malzeme kalitesi ve toplam maliyet resmi olarak sözleşmeye dökülür ve imzalanır.</p>
              <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                <svg className="w-6 h-6 text-amber-500/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            <div className="relative p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <div className="absolute top-4 right-4 text-6xl font-black text-white/5 group-hover:text-white/10 transition-colors duration-300">04</div>
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-zinc-300 font-black text-lg mb-5 group-hover:bg-amber-500 group-hover:text-zinc-950 group-hover:border-amber-500 transition-all duration-300">4</div>
              <h3 className="text-lg font-bold text-white uppercase tracking-wide mb-3">Teslimat & Garanti</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">İş taahhüt edilen sürede tamamlanır, temizlik yapılır ve garanti sertifikanız teslim edilerek süreç bitirilir.</p>
            </div>

          </div>
        </div>
      </section>

      {/* */}
      <section id="keşif-asistani" className="py-16 sm:py-24 bg-zinc-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-2xl border border-zinc-200/80 shadow-xl overflow-hidden">
            
            <div className="bg-gradient-to-r from-[#2d3140] to-[#353a4e] p-6 sm:p-8 text-white border-b border-white/10">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Sanal Keşif</span>
                  <h3 className="text-xl font-black uppercase tracking-wide mt-1">Akıllı Keşif Asistanı</h3>
                </div>
                <div className="hidden sm:flex items-center gap-3">
                  {['Mülk Türü', 'Hizmetler', 'İletişim'].map((label, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className={`flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold transition-all duration-300 ${step > idx + 1 ? 'bg-amber-500 text-zinc-950' : step === idx + 1 ? 'bg-amber-500 text-zinc-950 ring-2 ring-amber-500/50 ring-offset-2 ring-offset-[#2d3140]' : 'bg-white/10 text-zinc-400'}`}>
                        {step > idx + 1 ? '✓' : idx + 1}
                      </div>
                      <span className={`text-xs font-semibold uppercase tracking-wider ${step >= idx + 1 ? 'text-amber-400' : 'text-zinc-500'}`}>{label}</span>
                      {idx < 2 && <span className="w-8 h-px bg-white/10 mx-1" />}
                    </div>
                  ))}
                </div>
                <div className="flex sm:hidden gap-1.5">
                  {[1, 2, 3].map((s) => (
                    <div key={s} className={`w-8 h-1.5 rounded-full transition-all duration-300 ${step >= s ? 'bg-amber-500' : 'bg-white/20'}`} />
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-12">
              {!isSubmitted ? (
                <div>
                  
                  {step === 1 && (
                    <div className="animate-fade-in">
                      <h4 className="text-base sm:text-lg font-bold text-zinc-900 mb-6 uppercase tracking-wide">Hizmet Alınacak Mülk Türünü Seçiniz</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <button 
                          onClick={() => setPropertyType('villa')}
                          className={`p-6 rounded-xl border-2 text-left transition-all duration-200 flex justify-between items-center ${propertyType === 'villa' ? 'border-amber-500 bg-amber-500/5 shadow-md shadow-amber-500/10' : 'border-zinc-200 hover:border-zinc-300 hover:shadow-md text-zinc-700'}`}
                        >
                          <div>
                            <span className="block font-black text-sm uppercase tracking-wide">Villa / Müstakil Ev</span>
                            <span className="text-sm text-zinc-500 mt-1 block">Bahçe, havuz, dış cephe dahil tüm alanlar.</span>
                          </div>
                          <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${propertyType === 'villa' ? 'border-amber-500 bg-amber-500' : 'border-zinc-300'}`}>
                            {propertyType === 'villa' && <span className="w-2 h-2 bg-white rounded-full" />}
                          </span>
                        </button>

                        <button 
                          onClick={() => setPropertyType('apartman')}
                          className={`p-6 rounded-xl border-2 text-left transition-all duration-200 flex justify-between items-center ${propertyType === 'apartman' ? 'border-amber-500 bg-amber-500/5 shadow-md shadow-amber-500/10' : 'border-zinc-200 hover:border-zinc-300 hover:shadow-md text-zinc-700'}`}
                        >
                          <div>
                            <span className="block font-black text-sm uppercase tracking-wide">Daire / Apartman</span>
                            <span className="text-sm text-zinc-500 mt-1 block">Tesisat, iklimlendirme ve iç yenileme işleri.</span>
                          </div>
                          <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${propertyType === 'apartman' ? 'border-amber-500 bg-amber-500' : 'border-zinc-300'}`}>
                            {propertyType === 'apartman' && <span className="w-2 h-2 bg-white rounded-full" />}
                          </span>
                        </button>
                      </div>

                      <div className="mt-8 flex justify-end">
                        <button 
                          disabled={!propertyType}
                          onClick={handleNextStep}
                          className={`px-6 py-3 font-bold text-xs uppercase tracking-wider rounded-lg transition-all ${propertyType ? 'bg-[#2d3140] text-amber-500 hover:shadow-lg hover:shadow-[#2d3140]/20' : 'bg-zinc-200 text-zinc-400 cursor-not-allowed'}`}
                        >
                          Sonraki Adım →
                        </button>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="animate-fade-in">
                      <h4 className="text-lg font-bold text-zinc-900 mb-2 uppercase tracking-wide">İhtiyacınız Olan Hizmetleri Seçiniz</h4>
                      <p className="text-sm text-zinc-500 mb-6">Birden fazla seçim yapabilirsiniz. Bu seçimlere göre ekibimiz doğru malzeme ve usta kadrosunu yönlendirecektir.</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-60 overflow-y-auto pr-2 border-t border-b border-zinc-100 py-4">
                        {services.flatMap(s => s.items).map((item, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => toggleServiceSelection(item)}
                            className={`p-3.5 text-left text-xs font-semibold rounded-lg border transition-all flex items-center gap-3 ${selectedServices.includes(item) ? 'bg-amber-500/10 border-amber-500 text-zinc-950 shadow-sm' : 'bg-white border-zinc-200 text-zinc-700 hover:bg-zinc-50 hover:border-zinc-300'}`}
                          >
                            <span className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${selectedServices.includes(item) ? 'bg-amber-500 border-amber-500 text-white' : 'border-zinc-300 bg-white'}`}>
                              {selectedServices.includes(item) && (
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                              )}
                            </span>
                            <span>{item}</span>
                          </button>
                        ))}
                      </div>

                      <div className="mt-8 flex justify-between items-center">
                        <button 
                          onClick={handlePrevStep}
                          className="px-5 py-3 border border-zinc-200 text-zinc-700 font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-zinc-50 hover:shadow-sm transition-all"
                        >
                          ← Geri
                        </button>
                        <span className="text-xs text-zinc-400 font-semibold">{selectedServices.length} hizmet seçildi</span>
                        <button 
                          disabled={selectedServices.length === 0}
                          onClick={handleNextStep}
                          className={`px-6 py-3 font-bold text-xs uppercase tracking-wider rounded-lg transition-all ${selectedServices.length > 0 ? 'bg-[#2d3140] text-amber-500 hover:shadow-lg hover:shadow-[#2d3140]/20' : 'bg-zinc-200 text-zinc-400 cursor-not-allowed'}`}
                        >
                          Sonraki Adım →
                        </button>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <form onSubmit={handleFormSubmit} className="animate-fade-in space-y-6">
                      <h4 className="text-lg font-bold text-zinc-900 mb-2 uppercase tracking-wide">İletişim ve Keşif Bilgileri</h4>
                      <p className="text-sm text-zinc-500 mb-6">Talebinizin detaylarını netleştirmek ve yerinde inceleme randevusu oluşturmak için son adım.</p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-black text-zinc-500 uppercase tracking-wider mb-2">Adınız Soyadınız</label>
                          <input 
                            type="text" required 
                            className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10 transition-all placeholder:text-zinc-300"
                            placeholder="Ahmet Yılmaz" 
                            value={clientInfo.name}
                            onChange={(e) => setClientInfo({...clientInfo, name: e.target.value})}
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-black text-zinc-500 uppercase tracking-wider mb-2">Telefon Numaranız</label>
                          <input 
                            type="tel" required 
                            className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10 transition-all placeholder:text-zinc-300"
                            placeholder="05xx xxx xx xx" 
                            value={clientInfo.phone}
                            onChange={(e) => setClientInfo({...clientInfo, phone: e.target.value})}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-black text-zinc-500 uppercase tracking-wider mb-2">Varsa Eklemek İstediğiniz Notlar</label>
                        <textarea 
                          rows={3}
                          className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10 transition-all resize-none placeholder:text-zinc-300"
                          placeholder="Mülkün konumu, teslim süresi beklentiniz veya eklemek istediğiniz diğer detaylar..."
                          value={clientInfo.note}
                          onChange={(e) => setClientInfo({...clientInfo, note: e.target.value})}
                        />
                      </div>

                      {error && <p className="text-red-500 text-xs font-semibold mb-4 text-center">{error}</p>}

                      <div className="mt-8 flex justify-between items-center">
                        <button 
                          type="button"
                          onClick={handlePrevStep}
                          disabled={loading}
                          className="px-5 py-3 border border-zinc-200 text-zinc-700 font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-zinc-50 hover:shadow-sm transition-all disabled:opacity-50"
                        >
                          ← Geri
                        </button>
                        <button 
                          type="submit"
                          disabled={loading}
                          className="px-8 py-3.5 bg-amber-500 hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed text-zinc-950 font-black text-xs uppercase tracking-wider rounded-lg transition-all shadow-lg shadow-amber-500/20 hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-0.5"
                        >
                          {loading ? 'Gönderiliyor...' : 'Keşif Talebini Gönder'}
                        </button>
                      </div>
                    </form>
                  )}

                </div>
              ) : (
                <div className="text-center py-8 animate-scale-in">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 text-white flex items-center justify-center rounded-full mx-auto mb-6 shadow-lg shadow-amber-500/20">
                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-black text-zinc-900 uppercase tracking-wide">Talebiniz Kaydedildi!</h4>
                  <p className="mt-3 text-sm text-zinc-500 max-w-md mx-auto leading-relaxed">
                    Sayın <strong>{clientInfo.name}</strong>, seçtiğiniz <strong>{selectedServices.length}</strong> farklı teknik servis alanı için detaylı keşif talebiniz ekibimize ulaşmıştır. En kısa sürede sizinle iletişime geçeceğiz.
                  </p>
                  
                  <div className="mt-8 bg-zinc-50 rounded-xl border border-zinc-200 p-6 max-w-md mx-auto text-left text-sm space-y-3">
                    <div className="text-zinc-400 font-bold uppercase tracking-wider text-xs mb-3">Talep Özeti:</div>
                    <div className="flex justify-between"><span className="text-zinc-500">Mülk Tipi:</span> <span className="font-semibold text-zinc-800">{propertyType === 'villa' ? 'Villa / Müstakil Ev' : 'Daire / Apartman'}</span></div>
                    <div className="flex justify-between"><span className="text-zinc-500">Telefon:</span> <span className="font-semibold text-zinc-800">{clientInfo.phone}</span></div>
                    <div className="pt-2 border-t border-zinc-200"><span className="text-zinc-500">Hizmetler:</span>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {selectedServices.map((s, i) => (
                          <span key={i} className="px-2.5 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-700 rounded text-xs font-semibold">{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={resetWizard}
                    className="mt-8 px-6 py-3 bg-[#2d3140] hover:bg-[#3a3f52] text-amber-500 font-bold text-xs uppercase tracking-wider rounded-lg transition-all shadow-md hover:shadow-lg"
                  >
                    Yeni Talep Oluştur
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* */}
      <footer className="bg-gradient-to-t from-[#1e2133] to-[#2d3140] text-zinc-400 py-12 sm:py-16 border-t-2 border-amber-500/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-12 mb-10 sm:mb-12">
            
            <div className="md:col-span-2">
              <span className="text-2xl font-black text-white tracking-tight">BBB<span className="text-amber-500 font-bold ml-0.5">İnşaat</span></span>
              <p className="mt-4 text-sm text-zinc-400 leading-relaxed max-w-sm">
                Villa ve daireleriniz için profesyonel teknik servis ve montaj çözümleri. Tesisat, elektrik, dış alan otomasyonu, yalıtım ve ince işçilik uygulamalarında tek ve kurumsal ortağınız.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Hizmetlerimiz</h4>
              <ul className="space-y-2.5 text-xs">
                <li><a href="/hizmetler" className="hover:text-amber-500 transition flex items-center gap-2"><span className="w-1 h-1 bg-amber-500/50 rounded-full" />Enerji & Aydınlatma</a></li>
                <li><a href="/hizmetler" className="hover:text-amber-500 transition flex items-center gap-2"><span className="w-1 h-1 bg-amber-500/50 rounded-full" />İklimlendirme & Tesisat</a></li>
                <li><a href="/hizmetler" className="hover:text-amber-500 transition flex items-center gap-2"><span className="w-1 h-1 bg-amber-500/50 rounded-full" />Çevre Kapama & Çit</a></li>
                <li><a href="/hizmetler" className="hover:text-amber-500 transition flex items-center gap-2"><span className="w-1 h-1 bg-amber-500/50 rounded-full" />Alçı, Sıva, Boya & Seramik</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">İletişim</h4>
              <ul className="space-y-3 text-xs">
                <li className="flex items-start gap-2.5"><span className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0"><svg className="w-3.5 h-3.5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg></span><span className="pt-1.5 leading-relaxed">{siteContent.address}</span></li>
                <li className="grid grid-cols-1 gap-2">
                  <a href={telHref(siteContent.phones.primary)} className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 hover:border-amber-500/30 transition group">
                    <span className="w-7 h-7 rounded-lg bg-amber-500/15 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/25 transition"><svg className="w-3.5 h-3.5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg></span>
                    <span className="font-semibold tracking-wide">{siteContent.phones.primary}</span><span className="ml-auto text-[10px] text-zinc-500 group-hover:text-amber-500">Ara →</span>
                  </a>
                  <a href={telHref(siteContent.phones.secondary)} className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 hover:border-white/20 transition group">
                    <span className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0"><svg className="w-3.5 h-3.5 text-zinc-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg></span>
                    <span className="font-medium tracking-wide">{siteContent.phones.secondary}</span><span className="ml-auto text-[10px] text-zinc-500 group-hover:text-white">Ara →</span>
                  </a>
                </li>
                <li className="flex items-center gap-2.5"><span className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0"><svg className="w-3.5 h-3.5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></span><a href={`mailto:${siteContent.email}`} className="hover:text-amber-500 transition font-medium">{siteContent.email}</a></li>
                <li className="text-[10px] text-zinc-500 pt-1 border-t border-white/5 mt-1">BBB İnşaat Ltd. Şti.</li>
              </ul>
            </div>

          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
            <span>© 2026 BBB İnşaat Ltd. Şti. Tüm hakları saklıdır.</span>
            <div className="flex gap-6">
              <Link href="/sozlesme" className="hover:text-white transition cursor-pointer">Hizmet Sözleşmesi</Link>
              <Link href="/sartlar" className="hover:text-white transition cursor-pointer">Hükümler & Şartlar</Link>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
