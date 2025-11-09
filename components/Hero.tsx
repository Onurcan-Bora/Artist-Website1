'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-16 relative"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center space-y-8 sm:space-y-10 md:space-y-14">
          {/* Main Photo with subtle gradient border */}
          <div className="gradient-border animate-fade-scale animate-pulse-glow">
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden bg-black">
              <Image
                src="/assets/Main Photo.jpeg"
                alt="Onurcan Bora"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Name with blue light passing through */}
          <div className="text-center space-y-8 sm:space-y-10 w-full px-2">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-light tracking-tight gradient-text animate-fade-in-delay elegant-glow break-words">
              Onurcan Bora
            </h1>

            {/* Social Media Icons Only - Larger with glow effect on hover */}
            <div className="flex justify-center gap-3 sm:gap-4 animate-fade-in-delay-2">
              <a
                href="https://open.spotify.com/artist/4m4VvYoEEz1wt5J8kiXaey"
                target="_blank"
                rel="noopener noreferrer"
                className="spotify-hover p-3 sm:p-4 glass-effect-strong rounded-full border border-white/10 hover:scale-110 icon-glow"
                aria-label="Spotify"
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
              </a>

              <a
                href="https://youtube.com/@onurcanbora"
                target="_blank"
                rel="noopener noreferrer"
                className="youtube-hover p-3 sm:p-4 glass-effect-strong rounded-full border border-white/10 hover:scale-110 icon-glow"
                aria-label="YouTube"
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              <a
                href="https://www.instagram.com/onurcanbora_/"
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-hover p-3 sm:p-4 glass-effect-strong rounded-full border border-white/10 hover:scale-110 icon-glow"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-fade-in-delay-3 pt-2 w-full">
              <button
                onClick={() => document.getElementById('upcoming')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full max-w-xs sm:w-auto px-7 sm:px-8 py-3 sm:py-3 gradient-button-accent text-white rounded-full text-base sm:text-base font-normal hover:scale-105 transition-all duration-300 shadow-lg border border-white/10 button-glow"
              >
                Yeni Şarkım
              </button>
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full max-w-xs sm:w-auto px-7 sm:px-8 py-3 sm:py-3 glass-effect-strong text-white rounded-full text-base sm:text-base font-normal hover:scale-105 transition-all duration-300 border border-white/20 hover:border-white/40 button-glow"
              >
                Hakkımda
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
