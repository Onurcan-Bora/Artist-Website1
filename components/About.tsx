'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownload = async () => {
    const response = await fetch('/assets/Press3.jpeg');
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Onurcan_Bora_Press_Photo.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <>
      <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-32 relative">
        <div className="max-w-6xl mx-auto w-full">
          <div className="glass-effect-strong rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-white/10 hover:border-white/20 transition-all duration-500 gradient-bg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                <div className="space-y-2 sm:space-y-3">
                  <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-light tracking-tight gradient-text-fast px-2">
                    Hakkımda
                  </h2>
                  <div className="w-12 sm:w-16 h-0.5 gradient-button-accent rounded-full"></div>
                </div>

                <div className="space-y-3 sm:space-y-4 text-base sm:text-lg md:text-lg text-white/80 leading-relaxed font-light px-2">
                  <p className="hover:text-white transition-colors">
                    Müzisyen Onurcan Bora 1998 yılında İstanbul&apos;da doğmuştur. Müziğe ortaokul yıllarında başlamış olup o yıllarda ilk konserlerini vermiştir.
                  </p>

                  <p className="hover:text-white transition-colors">
                    Ortaokuldan sonra müziğe profesyonel bir adım atarak Avni Akyol Güzel Sanatlar Lisesini kazanmıştır. Lise yıllarından itibaren uzunca bir süre TRT THM Gençlik Korosunda bulunup birçok konser, radyo ve televizyon programında solist ve korist olarak yer almıştır.
                  </p>

                  <p className="hover:text-white transition-colors">
                    Liseden başarılı bir şekilde mezun olduktan sonra İstanbul Teknik Üniversitesi Türk Müziği Devlet Konservatuarı ses eğitimi bölümünü kazanmıştır. Lisans Öğrenimi boyunca birçok konserde solist olarak ve çok sesli korolarda bas vokal olarak bulunmuştur.
                  </p>

                  <p className="hover:text-white transition-colors">
                    Üniversite yıllarında bir süre mankenlik yapmıştır. 2023 yılında Tan Taşçı&apos;nın ekibinde yer alan başkanlar korosunda vokallik yapmıştır. Tüm dijital platformlarda Cover çalışmalarını video klipleriyle beraber yayınlamaya devam eden sanatçı Onurcan Bora, kendi şarkıları ve sahne çalışmalarına da devam etmektedir.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 px-2">
                  <span className="px-4 sm:px-4 py-2 sm:py-2 glass-effect rounded-full text-sm sm:text-sm font-light text-white/80 border border-white/10 hover:scale-105 transition-all hover:border-white/20">
                    Rock
                  </span>
                  <span className="px-4 sm:px-4 py-2 sm:py-2 glass-effect rounded-full text-sm sm:text-sm font-light text-white/80 border border-white/10 hover:scale-105 transition-all hover:border-white/20">
                    Vokal
                  </span>
                  <span className="px-4 sm:px-4 py-2 sm:py-2 glass-effect rounded-full text-sm sm:text-sm font-light text-white/80 border border-white/10 hover:scale-105 transition-all hover:border-white/20">
                    Sahne Performansı
                  </span>
                  <span className="px-4 sm:px-4 py-2 sm:py-2 glass-effect rounded-full text-sm sm:text-sm font-light text-white/80 border border-white/10 hover:scale-105 transition-all hover:border-white/20">
                    Söz Yazarlığı
                  </span>
                </div>
              </div>

              <div className="relative">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 animate-pulse-glow cursor-pointer"
                >
                  <Image
                    src="/assets/Press3.jpeg"
                    alt="Onurcan Bora"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg overflow-y-auto"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative max-w-5xl w-full my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-8 sm:-top-12 right-0 text-white/80 hover:text-white transition-all text-sm sm:text-sm font-light"
            >
              ESC tuşuna basın veya dışarı tıklayın
            </button>

            <div className="glass-effect-strong rounded-2xl sm:rounded-3xl p-3 sm:p-4 border border-white/20">
              <Image
                src="/assets/Press3.jpeg"
                alt="Onurcan Bora"
                width={1200}
                height={1200}
                className="w-full h-auto max-h-[70vh] object-contain rounded-xl sm:rounded-2xl mx-auto"
              />

              {/* Download Button */}
              <div className="mt-4 sm:mt-6 flex justify-center">
                <button
                  onClick={handleDownload}
                  className="px-6 sm:px-8 py-3 sm:py-4 gradient-button-accent text-white rounded-full text-base sm:text-base font-normal hover:scale-105 transition-all shadow-lg border border-white/10 flex items-center gap-2 button-glow"
                >
                  <svg
                    className="w-5 h-5 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Fotoğrafı İndir
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
