'use client';

import { useState } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [emailRevealed, setEmailRevealed] = useState(false);

  return (
    <footer id="contact" className="glass-effect-strong border-t border-white/10 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 md:gap-16">
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-xl sm:text-xl md:text-2xl font-light gradient-text">
              Onurcan Bora
            </h3>
            <p className="text-gray-400 text-sm sm:text-sm font-light leading-relaxed">
              Rock müziğin özgün sesi ve sahne performanslarıyla müzik dünyasında yer edinen sanatçı.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-base sm:text-base font-light gradient-text-fast">İletişim</h4>
            <div className="space-y-2 sm:space-y-3 text-sm sm:text-sm">
              <div>
                {!emailRevealed ? (
                  <button
                    onClick={() => setEmailRevealed(true)}
                    className="px-4 sm:px-4 py-2 sm:py-2 glass-effect border border-white/10 rounded-full hover:scale-105 transition-all font-light hover:border-white/20 text-sm sm:text-sm"
                  >
                    E-postayı göster
                  </button>
                ) : (
                  <a
                    href="mailto:onurcanbora@gmail.com"
                    className="text-gray-400 hover:text-white transition-all font-light break-all"
                  >
                    onurcanbora@gmail.com
                  </a>
                )}
              </div>
              <p className="text-gray-400 font-light">
                İstanbul, Türkiye
              </p>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-base sm:text-base font-light gradient-text-fast">Takip Et</h4>
            <div className="flex gap-2 sm:gap-3">
              <a
                href="https://www.instagram.com/onurcanbora_/"
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-hover p-2.5 sm:p-2.5 glass-effect border border-white/10 rounded-full hover:scale-110 icon-glow"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 sm:w-5 sm:h-5 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com/@onurcanbora"
                target="_blank"
                rel="noopener noreferrer"
                className="youtube-hover p-2.5 sm:p-2.5 glass-effect border border-white/10 rounded-full hover:scale-110 icon-glow"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5 sm:w-5 sm:h-5 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="https://open.spotify.com/artist/4m4VvYoEEz1wt5J8kiXaey"
                target="_blank"
                rel="noopener noreferrer"
                className="spotify-hover p-2.5 sm:p-2.5 glass-effect border border-white/10 rounded-full hover:scale-110 icon-glow"
                aria-label="Spotify"
              >
                <svg className="w-5 h-5 sm:w-5 sm:h-5 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
              </a>
            </div>
            <div className="pt-3 sm:pt-4">
              <h5 className="text-sm font-light mb-2 text-white/60">Müzik Platformları</h5>
              <div className="flex flex-wrap gap-2">
                <a href="https://open.spotify.com/artist/4m4VvYoEEz1wt5J8kiXaey" target="_blank" rel="noopener noreferrer" className="text-sm px-3 sm:px-3 py-1.5 sm:py-1.5 glass-effect border border-white/10 rounded-full hover:scale-105 transition-all font-light hover:border-white/20">
                  Spotify
                </a>
                <a href="#" className="text-sm px-3 sm:px-3 py-1.5 sm:py-1.5 glass-effect border border-white/10 rounded-full hover:scale-105 transition-all font-light hover:border-white/20">
                  Apple Music
                </a>
                <a href="https://youtube.com/@onurcanbora" target="_blank" rel="noopener noreferrer" className="text-sm px-3 sm:px-3 py-1.5 sm:py-1.5 glass-effect border border-white/10 rounded-full hover:scale-105 transition-all font-light hover:border-white/20">
                  YouTube Music
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10">
          <div className="flex justify-center px-4">
            <p className="text-sm text-gray-500 font-light text-center">© {currentYear} Onurcan Bora. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
