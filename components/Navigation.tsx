'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-2 sm:top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 max-w-[96vw] sm:max-w-none ${isScrolled
          ? 'nav-blur rounded-full px-2.5 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 shadow-2xl'
          : 'bg-transparent'
        }`}
    >
      <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-1 sm:gap-2 md:gap-4 lg:gap-6">
        <button
          onClick={() => scrollToSection('upcoming')}
          className="text-xs sm:text-sm md:text-base font-normal text-white/80 hover:text-white transition-all px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 whitespace-nowrap"
        >
          Şarkılar
        </button>
        <button
          onClick={() => scrollToSection('about')}
          className="text-xs sm:text-sm md:text-base font-normal text-white/80 hover:text-white transition-all px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 whitespace-nowrap"
        >
          Hakkımda
        </button>
        <button
          onClick={() => scrollToSection('gallery')}
          className="text-xs sm:text-sm md:text-base font-normal text-white/80 hover:text-white transition-all px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 whitespace-nowrap"
        >
          Galeri
        </button>
        <button
          onClick={() => scrollToSection('contact')}
          className="text-xs sm:text-sm md:text-base font-normal text-white/80 hover:text-white transition-all px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 whitespace-nowrap"
        >
          İletişim
        </button>
      </div>
    </nav>
  );
}
