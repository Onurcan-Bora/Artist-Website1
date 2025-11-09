'use client';

import { useState } from 'react';

export default function UpcomingSongs() {
  const [showMessage, setShowMessage] = useState(false);

  const handleNotifyClick = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  return (
    <section id="upcoming" className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight gradient-text-fast">
              Şarkılar
            </h2>
            <div className="w-16 h-0.5 gradient-button-accent mx-auto rounded-full"></div>
          </div>

          {/* Upcoming Song Card */}
          <div className="glass-effect-strong rounded-3xl p-8 md:p-12 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 gradient-bg">
            <div className="space-y-6">
              <div className="inline-block px-5 py-1.5 gradient-button text-white text-xs font-normal rounded-full shadow-lg border border-white/10 tracking-wide">
                YAKINDA
              </div>
              
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-light gradient-text elegant-glow">
                Kopan Eller
              </h3>
              
              <p className="text-base sm:text-lg text-white/80 max-w-xl mx-auto font-light leading-relaxed">
                Yeni single'ım "Kopan Eller" çok yakında tüm dijital platformlarda!
              </p>

              <div className="flex justify-center pt-4">
                <div className="px-6 py-3 glass-effect rounded-2xl border border-white/10 transform hover:scale-105 transition-all">
                  <p className="text-xs text-white/50 font-light">Çıkış Tarihi</p>
                  <p className="text-lg font-light gradient-text-fast mt-1">Çok Yakında</p>
                </div>
              </div>

              <div className="pt-4 space-y-2">
                <button 
                  onClick={handleNotifyClick}
                  className="px-10 py-3.5 gradient-button-accent text-white rounded-full text-base font-normal hover:scale-105 transition-all shadow-lg border border-white/10 button-glow"
                >
                  İlk Sen Haberdar Ol
                </button>
                {showMessage && (
                  <p className="text-xs text-white/60 font-light animate-fade-in">
                    Link yakında paylaşılacaktır
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* YouTube Video - Now after the song card */}
          <div className="glass-effect-strong rounded-3xl p-4 md:p-6 border border-white/10 hover:border-white/20 transition-all duration-500 gradient-bg">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-2xl"
                src="https://www.youtube.com/embed/PZmJqGAEJ2Q"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{
                  border: 'none',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.3)'
                }}
              ></iframe>
            </div>
          </div>

          <p className="text-white/50 text-sm font-light">
            Daha fazla müzik için beni takip edin...
          </p>
        </div>
      </div>
    </section>
  );
}
