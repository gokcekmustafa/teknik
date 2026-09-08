'use client';

import { useState } from 'react';
import { services } from '@/app/data/services';

const ACCESS_KEY = 'c487cfcb-24cc-45e3-a0e7-2e3d4e44d991';

export default function KesifAsistaniPage() {
  const [step, setStep] = useState(1);
  const [propertyType, setPropertyType] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [clientInfo, setClientInfo] = useState({ name: '', phone: '', note: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const allServiceItems = services.flatMap(s => s.items.map(i => i.title));

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

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 antialiased font-sans">
      <section className="bg-gradient-to-br from-[#2d3140] via-[#353a4e] to-[#1e2133] text-white py-16 sm:py-20 border-b-4 border-amber-500">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(245,158,11,0.08)_0%,_transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Sanal Keşif</span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mt-2">Akıllı Keşif Asistanı</h1>
          <p className="mt-4 text-zinc-300 max-w-2xl min-h-[3rem]">
            Aşağıdaki adımları takip ederek ihtiyaçlarınızı bize bildirin. Ekibimiz en kısa sürede size özel keşif teklifi için sizinle iletişime geçecektir.
          </p>
        </div>
      </section>

      <section className="relative -mt-8 z-10 pb-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border border-zinc-200 p-4 sm:p-6 shadow-lg">
            <div className="flex items-center gap-4 sm:gap-6 justify-center">
              {[
                { num: 1, label: 'Mülk Türü', desc: 'Villa veya daire seçin' },
                { num: 2, label: 'Hizmetler', desc: 'İhtiyaçlarınızı işaretleyin' },
                { num: 3, label: 'İletişim', desc: 'Bilgilerinizi girin' },
              ].map((s, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full text-sm font-bold transition-all duration-300 flex-shrink-0 ${
                    step > s.num
                      ? 'bg-amber-500 text-zinc-950'
                      : step === s.num
                        ? 'bg-amber-500 text-zinc-950 ring-2 ring-amber-500/30 ring-offset-2'
                        : 'bg-zinc-100 text-zinc-400'
                  }`}>
                    {step > s.num ? '✓' : s.num}
                  </div>
                  <div className="hidden sm:block">
                    <div className={`text-xs font-bold uppercase tracking-wider ${step >= s.num ? 'text-amber-600' : 'text-zinc-400'}`}>{s.label}</div>
                    <div className="text-[10px] text-zinc-400 mt-0.5">{s.desc}</div>
                  </div>
                  {idx < 2 && <div className="hidden sm:block w-8 h-px bg-zinc-200 mx-1" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 sm:pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-zinc-200/80 shadow-xl p-8 sm:p-12">
            {!isSubmitted ? (
              <div>
                {step === 1 && (
                  <div className="animate-fade-in">
                    <h4 className="text-lg font-bold text-zinc-900 mb-6 uppercase tracking-wide">Hizmet Alınacak Mülk Türünü Seçiniz</h4>
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
                    <p className="text-sm text-zinc-500 mb-6">Birden fazla seçim yapabilirsiniz.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-60 overflow-y-auto pr-2 border-t border-b border-zinc-100 py-4">
                      {allServiceItems.map((item, idx) => (
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
                      <button onClick={handlePrevStep} className="px-5 py-3 border border-zinc-200 text-zinc-700 font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-zinc-50 hover:shadow-sm transition-all">← Geri</button>
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
                    <p className="text-sm text-zinc-500 mb-6">Yerinde inceleme randevusu için son adım.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-black text-zinc-500 uppercase tracking-wider mb-2">Adınız Soyadınız</label>
                        <input type="text" required className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10 transition-all placeholder:text-zinc-300" placeholder="Ahmet Yılmaz" value={clientInfo.name} onChange={(e) => setClientInfo({...clientInfo, name: e.target.value})} />
                      </div>
                      <div>
                        <label className="block text-xs font-black text-zinc-500 uppercase tracking-wider mb-2">Telefon Numaranız</label>
                        <input type="tel" required className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10 transition-all placeholder:text-zinc-300" placeholder="05xx xxx xx xx" value={clientInfo.phone} onChange={(e) => setClientInfo({...clientInfo, phone: e.target.value})} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-black text-zinc-500 uppercase tracking-wider mb-2">Varsa Eklemek İstediğiniz Notlar</label>
                      <textarea rows={3} className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/10 transition-all resize-none placeholder:text-zinc-300" placeholder="Mülkün konumu, teslim süresi beklentiniz..." value={clientInfo.note} onChange={(e) => setClientInfo({...clientInfo, note: e.target.value})} />
                    </div>
                    {error && <p className="text-red-500 text-xs font-semibold mb-4">{error}</p>}
                    <div className="mt-8 flex justify-between items-center">
                      <button type="button" onClick={handlePrevStep} disabled={loading} className="px-5 py-3 border border-zinc-200 text-zinc-700 font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-zinc-50 hover:shadow-sm transition-all disabled:opacity-50">← Geri</button>
                      <button type="submit" disabled={loading} className="px-8 py-3.5 bg-amber-500 hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed text-zinc-950 font-black text-xs uppercase tracking-wider rounded-lg transition-all shadow-lg shadow-amber-500/20 hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-0.5">{loading ? 'Gönderiliyor...' : 'Keşif Talebini Gönder'}</button>
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
                  Sayın <strong>{clientInfo.name}</strong>, seçtiğiniz <strong>{selectedServices.length}</strong> farklı teknik servis alanı için detaylı keşif talebiniz ekibimize ulaşmıştır.
                </p>
                <div className="mt-8 bg-zinc-50 rounded-xl border border-zinc-200 p-6 max-w-md mx-auto text-left text-sm space-y-3">
                  <div className="text-zinc-400 font-bold uppercase tracking-wider text-xs mb-3">Talep Özeti:</div>
                  <div className="flex justify-between"><span className="text-zinc-500">Mülk Tipi:</span> <span className="font-semibold text-zinc-800">{propertyType === 'villa' ? 'Villa / Müstakil Ev' : 'Daire / Apartman'}</span></div>
                  <div className="flex justify-between"><span className="text-zinc-500">Telefon:</span> <span className="font-semibold text-zinc-800">{clientInfo.phone}</span></div>
                  <div className="pt-2 border-t border-zinc-200"><span className="text-zinc-500">Seçilen Hizmetler:</span>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {selectedServices.map((s, i) => (
                        <span key={i} className="px-2.5 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-700 rounded text-xs font-semibold">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <button onClick={resetWizard} className="mt-8 px-6 py-3 bg-[#2d3140] hover:bg-[#3a3f52] text-amber-500 font-bold text-xs uppercase tracking-wider rounded-lg transition-all shadow-md hover:shadow-lg">Yeni Talep Oluştur</button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
