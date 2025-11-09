'use client';

import { useState } from 'react';
import Image from 'next/image';

const galleries = {
  concerts: [
    { id: 1, src: '/assets/Concert1 2025-11-09 at 20.41.07 (2).jpeg', title: 'Konser Anı 1' },
    { id: 2, src: '/assets/Concert1 2025-11-09 at 20.41.07 (3).jpeg', title: 'Konser Anı 2' },
    { id: 3, src: '/assets/Concert1 2025-11-09 at 20.41.07 (4).jpeg', title: 'Konser Anı 3' },
    { id: 4, src: '/assets/Concert1 2025-11-09 at 20.41.07 (5).jpeg', title: 'Konser Anı 4' },
  ],
  press: [
    { id: 5, src: '/assets/Press1.jpeg', title: 'Basın Fotoğrafı 1' },
    { id: 6, src: '/assets/Press2.jpeg', title: 'Basın Fotoğrafı 2' },
    { id: 7, src: '/assets/Press3.jpeg', title: 'Basın Fotoğrafı 3' },
  ],
};

export default function Works() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'concerts' | 'press'>('all');
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

  const getFilteredGallery = () => {
    if (selectedCategory === 'all') {
      return [...galleries.concerts, ...galleries.press];
    }
    return galleries[selectedCategory];
  };

  const handleDownload = async (src: string, title: string) => {
    try {
      const response = await fetch(src);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      
      // Extract filename from src
      const filename = src.split('/').pop() || `${title.replace(/\s+/g, '_')}.jpg`;
      link.download = filename;
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  return (
    <>
      <section id="gallery" className="min-h-screen px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-32 relative">
        <div className="max-w-7xl mx-auto w-full">
          <div className="space-y-8 sm:space-y-12 md:space-y-14">
            <div className="text-center space-y-2 sm:space-y-3">
              <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-light tracking-tight gradient-text-fast px-2">
                Galeri
              </h2>
              <div className="w-12 sm:w-16 h-0.5 gradient-button-accent mx-auto rounded-full"></div>
              <p className="text-base sm:text-lg md:text-lg text-white/70 max-w-2xl mx-auto font-light px-2">
                Konserler ve basın çekimlerinden fotoğraflar
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-5 sm:px-5 py-2 sm:py-2 rounded-full text-sm sm:text-sm font-light transition-all duration-300 ${
                  selectedCategory === 'all'
                    ? 'gradient-button-accent text-white scale-105 shadow-lg border border-white/20'
                    : 'glass-effect text-white/70 border border-white/10 hover:scale-105 hover:border-white/20 hover:text-white'
                }`}
              >
                Tümü
              </button>
              <button
                onClick={() => setSelectedCategory('concerts')}
                className={`px-5 sm:px-5 py-2 sm:py-2 rounded-full text-sm sm:text-sm font-light transition-all duration-300 ${
                  selectedCategory === 'concerts'
                    ? 'gradient-button-accent text-white scale-105 shadow-lg border border-white/20'
                    : 'glass-effect text-white/70 border border-white/10 hover:scale-105 hover:border-white/20 hover:text-white'
                }`}
              >
                Konserler
              </button>
              <button
                onClick={() => setSelectedCategory('press')}
                className={`px-5 sm:px-5 py-2 sm:py-2 rounded-full text-sm sm:text-sm font-light transition-all duration-300 ${
                  selectedCategory === 'press'
                    ? 'gradient-button-accent text-white scale-105 shadow-lg border border-white/20'
                    : 'glass-effect text-white/70 border border-white/10 hover:scale-105 hover:border-white/20 hover:text-white'
                }`}
              >
                Basın Fotoğrafları
              </button>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {getFilteredGallery().map((item) => (
                <div
                  key={item.id}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage({ src: item.src, title: item.title })}
                >
                  <div className="aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-white/10 group-hover:border-white/30 transition-all duration-500 group-hover:scale-105">
                    <Image
                      src={item.src}
                      alt={item.title}
                      width={600}
                      height={450}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <p className="mt-2 sm:mt-3 text-center text-white/70 font-light text-sm sm:text-sm group-hover:gradient-text-fast transition-all">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Photo Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg overflow-y-auto"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-8 sm:-top-10 right-0 text-white/80 hover:text-white transition-all text-sm sm:text-sm font-light z-10"
            >
              ESC tuşuna basın veya dışarı tıklayın
            </button>

            <div className="glass-effect-strong rounded-2xl sm:rounded-3xl p-3 sm:p-4 border border-white/20">
              <div className="relative w-full max-h-[70vh] flex items-center justify-center overflow-hidden rounded-xl sm:rounded-2xl">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  width={1200}
                  height={1200}
                  className="w-full h-auto max-h-[70vh] object-contain mx-auto"
                />
              </div>

              {/* Download Button with Gradient */}
              <div className="mt-4 sm:mt-6 flex justify-center">
                <button
                  onClick={() => handleDownload(selectedImage.src, selectedImage.title)}
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
