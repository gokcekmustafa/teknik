'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header>
      <div className="bg-[#2d3140] text-zinc-300 text-[10px] sm:text-xs py-3 px-4 sm:px-6 lg:px-8 border-b border-[#3a3f52]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1.5 sm:gap-2">
          <span className="flex items-center gap-1.5 text-center sm:text-left">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-500 animate-pulse flex-shrink-0" />
            Uzman Kadro ile Villa ve Dairelere Garantili Teknik Servis
          </span>
          <div className="flex items-center gap-3 sm:gap-6 text-center">
            <span className="text-zinc-400">Haftanın 6 Günü: 09:00 - 19:00</span>
            <a href="tel:+905387931938" className="text-amber-400 hover:text-amber-300 font-bold tracking-wide whitespace-nowrap">☎ 0538 793 19 38</a>
          </div>
        </div>
      </div>

      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-zinc-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-2">
                <div className="relative w-9 h-9 flex-shrink-0">
                  <div className="absolute top-0 left-0 w-6 h-6 bg-[#6b7294] rounded" />
                  <div className="absolute bottom-0 right-0 w-6 h-6 bg-[#2d3140] rounded" />
                  <div className="absolute top-1.5 left-1.5 w-6 h-6 bg-amber-500 rounded transform rotate-12 flex items-center justify-center text-white text-xs font-black shadow-md">
                    B
                  </div>
                </div>
                <span className="text-xl sm:text-2xl font-black tracking-tight text-zinc-900">
                  BBB<span className="text-amber-500 font-bold ml-0.5">İnşaat</span>
                </span>
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-8 font-semibold text-sm text-zinc-600">
              <Link href="/" className="hover:text-amber-500 transition relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-amber-500 after:transition-all after:duration-300">Anasayfa</Link>
              <Link href="/hizmetler" className="hover:text-amber-500 transition relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-amber-500 after:transition-all after:duration-300">Hizmetlerimiz</Link>
              <Link href="/hakkimizda" className="hover:text-amber-500 transition relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-amber-500 after:transition-all after:duration-300">Hakkımızda</Link>
              <Link href="/nasil-calisir" className="hover:text-amber-500 transition relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-amber-500 after:transition-all after:duration-300">Nasıl Çalışırız?</Link>
              <Link href="/kesif-asistani" className="hover:text-amber-500 transition relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-amber-500 after:transition-all after:duration-300">Akıllı Keşif</Link>
              <Link href="/iletisim" className="hover:text-amber-500 transition relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-amber-500 after:transition-all after:duration-300">İletişim</Link>
              <a href="https://wa.me/905405250050" className="bg-[#25D366] hover:bg-[#1ebe57] text-white border border-[#1ebe57] px-5 py-2.5 rounded-lg transition shadow-lg shadow-[#25D366]/20 font-bold flex items-center gap-2">
                <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.411 0 11.981 0c3.184.001 6.177 1.242 8.43 3.496 2.253 2.254 3.492 5.249 3.49 8.434-.004 6.632-5.353 11.982-11.922 11.982-2.01-.002-3.987-.508-5.742-1.472L0 24zm6.59-4.846c1.62.963 3.21 1.48 5.333 1.481 5.417-.002 9.825-4.382 9.828-9.755.002-2.602-1.01-5.05-2.85-6.892C17.07 2.146 14.625 1.13 12.01 1.13c-5.424 0-9.833 4.383-9.836 9.758-.002 2.105.548 4.15 1.594 5.943l-1.044 3.812 3.923-1.017z"/>
                </svg>
                WhatsApp Destek
              </a>
            </div>

            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-zinc-800 hover:text-amber-500 focus:outline-none p-2 -mr-2"
                aria-label="Menüyü aç/kapat"
              >
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-zinc-200/50 px-4 pt-3 pb-8 space-y-1 shadow-lg animate-slide-down">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="block py-3.5 px-3 font-semibold text-zinc-700 hover:text-amber-500 hover:bg-zinc-50 rounded-lg transition-all">Anasayfa</Link>
            <Link href="/hizmetler" onClick={() => setIsMobileMenuOpen(false)} className="block py-3.5 px-3 font-semibold text-zinc-700 hover:text-amber-500 hover:bg-zinc-50 rounded-lg transition-all">Hizmetlerimiz</Link>
            <Link href="/hakkimizda" onClick={() => setIsMobileMenuOpen(false)} className="block py-3.5 px-3 font-semibold text-zinc-700 hover:text-amber-500 hover:bg-zinc-50 rounded-lg transition-all">Hakkımızda</Link>
            <Link href="/nasil-calisir" onClick={() => setIsMobileMenuOpen(false)} className="block py-3.5 px-3 font-semibold text-zinc-700 hover:text-amber-500 hover:bg-zinc-50 rounded-lg transition-all">Nasıl Çalışırız?</Link>
            <Link href="/kesif-asistani" onClick={() => setIsMobileMenuOpen(false)} className="block py-3.5 px-3 font-semibold text-zinc-700 hover:text-amber-500 hover:bg-zinc-50 rounded-lg transition-all">Akıllı Keşif</Link>
            <Link href="/iletisim" onClick={() => setIsMobileMenuOpen(false)} className="block py-3.5 px-3 font-semibold text-zinc-700 hover:text-amber-500 hover:bg-zinc-50 rounded-lg transition-all">İletişim</Link>
            <a href="https://wa.me/905405250050" className="block text-center bg-[#25D366] hover:bg-[#1ebe57] text-white border border-[#1ebe57] py-4 rounded-xl font-bold mt-3">WhatsApp Canlı Destek</a>
          </div>
        )}
      </nav>
    </header>
  );
}
