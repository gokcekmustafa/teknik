'use client';
import { useState, useEffect } from 'react';

type GalleryItem = { id: string; src: string; category: string; title: string };

export default function AdminPage() {
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [err, setErr] = useState('');
  const [tab, setTab] = useState<'gallery'|'content'>('gallery');

  // gallery state
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [uploading, setUploading] = useState(false);
  const [gTitle, setGTitle] = useState('');
  const [gCat, setGCat] = useState('Genel');
  const [gFiles, setGFiles] = useState<File[]>([]);
  const [gMsg, setGMsg] = useState('');

  // content state
  const [content, setContent] = useState<{ phones: { primary: string; secondary: string; whatsapp: string }; email: string; address: string } | null>(null);
  const [cMsg, setCMsg] = useState('');

  useEffect(() => {
    fetch('/api/admin/content').then(r => r.json()).then(d => { if (d.phones) setContent(d); }).catch(()=>{});
    // try gallery without auth (public); if 401 try with cookie
    fetch('/api/admin/gallery').then(r => r.ok ? r.json() : []).then(d => { if (Array.isArray(d)) setGallery(d); }).catch(()=>{});
    // check auth via content PUT probe? Just show login first
    const has = document.cookie.includes('admin_auth=');
    // We can't verify without server; show login. If already authed, hide after first successful fetch?
    // Simple: if content fetch succeeded with admin data, consider authed? Instead force login view until POST succeeds.
    // We'll ping login check via gallery POST attempt? Simpler: start as not authed.
    setAuthed(false);
  }, []);

  async function login(e: React.FormEvent) {
    e.preventDefault();
    setErr('');
    const r = await fetch('/api/admin/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ username: user, password: pwd }) });
    if (r.ok) { setAuthed(true); // reload data with auth
      const g = await fetch('/api/admin/gallery').then(r=>r.json()).catch(()=>[]);
      if (Array.isArray(g)) setGallery(g);
      const c = await fetch('/api/admin/content').then(r=>r.json()).catch(()=>null);
      if (c?.phones) setContent(c);
    } else { setErr('Hatalı kullanıcı adı veya şifre'); }
  }
  async function logout() {
    await fetch('/api/admin/login', { method: 'DELETE' });
    setAuthed(false);
  }

  async function uploadGallery(e: React.FormEvent) {
    e.preventDefault();
    if (gFiles.length === 0) { setGMsg('Dosya seçin'); return; }
    setUploading(true); setGMsg('');
    let ok = 0, fail = 0;
    for (let i = 0; i < gFiles.length; i++) {
      const f = gFiles[i];
      setGMsg(`${i + 1}/${gFiles.length} yükleniyor...`);
      const b64 = await new Promise<string>((res, rej) => {
        const r = new FileReader(); r.onload = () => res((r.result as string).split(',')[1]); r.onerror = rej; r.readAsDataURL(f);
      });
      const r = await fetch('/api/admin/gallery', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ filename: f.name, base64: b64, category: gCat, title: gFiles.length === 1 ? (gTitle || f.name) : f.name }) });
      if (r.ok) ok++; else fail++;
    }
    setUploading(false);
    if (fail > 0) setGMsg(`${ok} yüklendi, ${fail} hata. GitHub commit sonrası 1 dk içinde galeride görünecek.`);
    else setGMsg(`${ok} fotoğraf yüklendi! GitHub commit sonrası 1 dk içinde galeride görünecek.`);
    setGFiles([]); setGTitle(''); (document.getElementById('gallery-file') as HTMLInputElement | null)?.value && ((document.getElementById('gallery-file') as HTMLInputElement).value = '');
    const ng = await fetch('/api/admin/gallery').then(r=>r.json()).catch(()=>[]);
    if (Array.isArray(ng)) setGallery(ng);
  }
  async function deleteItem(id: string) {
    if (!confirm('Silinsin mi?')) return;
    const r = await fetch('/api/admin/gallery', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) });
    if (!r.ok) { alert('Silme hatası'); return; }
    setGallery(gallery.filter(g=>g.id!==id));
  }
  async function updateCategory(id: string, category: string) {
    const r = await fetch('/api/admin/gallery', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id, category }) });
    if (!r.ok) { alert('Kategori güncellenemedi'); return; }
    setGallery(gallery.map(g => g.id === id ? { ...g, category } : g));
  }
  async function saveContent(e: React.FormEvent) {
    e.preventDefault();
    if (!content) return;
    setCMsg('');
    const r = await fetch('/api/admin/content', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(content) });
    const j = await r.json();
    if (!r.ok) setCMsg(j.error || 'Kaydedilemedi'); else setCMsg('Kaydedildi! 1 dk içinde site güncellenecek.');
  }

  if (authed === null) return <div className="min-h-screen flex items-center justify-center">Yükleniyor...</div>;
  if (!authed) {
    return (
      <div className="min-h-screen bg-zinc-50 flex items-center justify-center p-4">
        <form onSubmit={login} className="bg-white border border-zinc-200 rounded-2xl p-8 w-full max-w-sm shadow-sm">
          <h1 className="text-xl font-black uppercase tracking-wide">Admin Girişi</h1>
          <p className="text-xs text-zinc-500 mt-2">Kullanıcı adı ve şifreni gir.</p>
          <input value={user} onChange={e=>setUser(e.target.value)} placeholder="Kullanıcı adı" className="mt-6 w-full border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500" />
          <input type="password" value={pwd} onChange={e=>setPwd(e.target.value)} placeholder="Şifre" className="mt-3 w-full border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500" />
          {err && <p className="text-xs text-red-500 mt-2">{err}</p>}
          <button type="submit" className="mt-4 w-full py-3 bg-[#2d3140] text-amber-500 font-bold rounded-xl text-sm">Giriş Yap</button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans">
      <header className="bg-[#2d3140] text-white px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <span className="font-black tracking-tight">BBB <span className="text-amber-500">İnşaat</span> — Admin</span>
        <button onClick={logout} className="text-xs font-bold uppercase tracking-wider border border-white/20 px-4 py-2 rounded-lg hover:bg-white/10">Çıkış</button>
      </header>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-2 mb-8">
          <button onClick={()=>setTab('gallery')} className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider border ${tab==='gallery'?'bg-[#2d3140] text-amber-500 border-[#2d3140]':'bg-white border-zinc-200'}`}>Galeri</button>
          <button onClick={()=>setTab('content')} className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider border ${tab==='content'?'bg-[#2d3140] text-amber-500 border-[#2d3140]':'bg-white border-zinc-200'}`}>İletişim & İçerik</button>
          <a href="/galeri" target="_blank" className="ml-auto px-4 py-2.5 bg-white border border-zinc-200 rounded-lg text-xs font-bold">Galeri'yi Gör →</a>
        </div>

        {tab==='gallery' && (
          <div className="space-y-8">
            <form onSubmit={uploadGallery} className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm space-y-4">
              <h2 className="font-black uppercase tracking-wide">Fotoğraf Yükle</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <input id="gallery-file" type="file" accept="image/*" multiple onChange={e=>setGFiles(e.target.files ? Array.from(e.target.files) : [])} className="border border-zinc-200 rounded-xl px-3 py-2.5 text-sm" />
                <input value={gTitle} onChange={e=>setGTitle(e.target.value)} placeholder={gFiles.length > 1 ? 'Toplu yüklemede dosya adı kullanılır' : 'Başlık (opsiyonel)'} disabled={gFiles.length > 1} className="border border-zinc-200 rounded-xl px-4 py-2.5 text-sm disabled:bg-zinc-50" />
                <select value={gCat} onChange={e=>setGCat(e.target.value)} className="border border-zinc-200 rounded-xl px-4 py-2.5 text-sm">
                  <option>Genel</option><option>Seramik</option><option>Mermer</option><option>Paslanmaz</option><option>Mobilya</option><option>Alçıpan</option><option>Elektrik</option><option>Demir Kaynak</option><option>Şap</option><option>İnce İşçilik</option>
                </select>
              </div>
              <div className="flex items-center gap-3">
                <button disabled={uploading} className="px-6 py-3 bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-zinc-950 font-black rounded-xl text-xs uppercase tracking-wider">{uploading?'Yükleniyor...': gFiles.length > 1 ? `${gFiles.length} Fotoğrafı Yükle` : 'Yükle ve GitHub\'a Kaydet'}</button>
                {gFiles.length > 0 && <span className="text-xs text-zinc-500">{gFiles.length} dosya seçildi</span>}
              </div>
              {gMsg && <p className="text-xs font-semibold text-zinc-600">{gMsg}</p>}
              <p className="text-[11px] text-zinc-400">Yükleme GitHub'a commit atar, Vercel ~1 dk içinde yeniden deploy olur.</p>
            </form>

            <div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-sm uppercase tracking-wider mb-4">Mevcut Fotoğraflar ({gallery.length})</h3>
              {gallery.length===0 ? <p className="text-sm text-zinc-500">Henüz yok.</p> : (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {gallery.map(it=>(
                    <div key={it.id} className="border border-zinc-200 rounded-xl overflow-hidden bg-zinc-50">
                      <div className="aspect-[4/3] bg-white flex items-center justify-center overflow-hidden"><img src={it.src} alt={it.category} className="w-full h-full object-cover" /></div>
                      <div className="p-3 space-y-2">
                        <select value={it.category} onChange={e=>updateCategory(it.id, e.target.value)} className="w-full border border-zinc-200 rounded-lg px-2 py-1.5 text-xs font-semibold bg-white">
                          <option>Genel</option><option>Seramik</option><option>Mermer</option><option>Paslanmaz</option><option>Mobilya</option><option>Alçıpan</option><option>Elektrik</option><option>Demir Kaynak</option><option>Şap</option><option>İnce İşçilik</option><option>İnşaat Taahhüt</option><option>Kaplama</option>
                        </select>
                        <button onClick={()=>deleteItem(it.id)} className="text-xs font-bold text-red-600 hover:underline">Sil</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {tab==='content' && content && (
          <form onSubmit={saveContent} className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm space-y-5">
            <h2 className="font-black uppercase tracking-wide">İletişim Bilgileri</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <label className="space-y-1"><span className="text-xs font-bold uppercase tracking-wider text-zinc-500">Telefon 1 (birincil)</span><input value={content.phones.primary} onChange={e=>setContent({...content, phones:{...content.phones, primary:e.target.value}})} className="w-full border border-zinc-200 rounded-xl px-4 py-3 text-sm" /></label>
              <label className="space-y-1"><span className="text-xs font-bold uppercase tracking-wider text-zinc-500">Telefon 2</span><input value={content.phones.secondary} onChange={e=>setContent({...content, phones:{...content.phones, secondary:e.target.value}})} className="w-full border border-zinc-200 rounded-xl px-4 py-3 text-sm" /></label>
              <label className="space-y-1"><span className="text-xs font-bold uppercase tracking-wider text-zinc-500">WhatsApp</span><input value={content.phones.whatsapp} onChange={e=>setContent({...content, phones:{...content.phones, whatsapp:e.target.value}})} className="w-full border border-zinc-200 rounded-xl px-4 py-3 text-sm" /></label>
            </div>
            <label className="block space-y-1"><span className="text-xs font-bold uppercase tracking-wider text-zinc-500">E-posta</span><input value={content.email} onChange={e=>setContent({...content, email:e.target.value})} className="w-full border border-zinc-200 rounded-xl px-4 py-3 text-sm" /></label>
            <label className="block space-y-1"><span className="text-xs font-bold uppercase tracking-wider text-zinc-500">Adres</span><input value={content.address} onChange={e=>setContent({...content, address:e.target.value})} className="w-full border border-zinc-200 rounded-xl px-4 py-3 text-sm" /></label>
            <button type="submit" className="px-6 py-3 bg-[#2d3140] text-amber-500 font-bold rounded-xl text-xs uppercase tracking-wider">Kaydet (GitHub commit)</button>
            {cMsg && <p className="text-xs font-semibold text-zinc-600">{cMsg}</p>}
            <p className="text-[11px] text-zinc-400">Bu alanlar şimdilik <code>data/siteContent.json</code> içinde tutulur. Sonraki adımda sitenin her yerindeki telefon/metinler buradan okunacak.</p>
          </form>
        )}
      </div>
    </div>
  );
}
