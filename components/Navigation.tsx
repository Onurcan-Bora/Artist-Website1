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
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
        isScrolled
          ? 'nav-blur rounded-full px-6 py-3 shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="flex items-center gap-4 md:gap-6">
        <button
          onClick={() => scrollToSection('upcoming')}
          className="text-sm font-normal text-white/80 hover:text-white transition-all px-3 py-1.5"
        >
          Şarkılar
        </button>
        <button
          onClick={() => scrollToSection('events')}
          className="text-sm font-normal text-white/80 hover:text-white transition-all px-3 py-1.5"
        >
          Etkinlikler
        </button>
        <button
          onClick={() => scrollToSection('about')}
          className="text-sm font-normal text-white/80 hover:text-white transition-all px-3 py-1.5"
        >
          Hakkımda
        </button>
        <button
          onClick={() => scrollToSection('gallery')}
          className="text-sm font-normal text-white/80 hover:text-white transition-all px-3 py-1.5"
        >
          Galeri
        </button>
        <button
          onClick={() => scrollToSection('contact')}
          className="text-sm font-normal text-white/80 hover:text-white transition-all px-3 py-1.5"
        >
          İletişim
        </button>
      </div>
    </nav>
  );
}
