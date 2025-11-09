'use client';

export default function Events() {
  return (
    <section id="events" className="min-h-[60vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight gradient-text-fast">
              Etkinlikler
            </h2>
            <div className="w-16 h-0.5 gradient-button-accent mx-auto rounded-full"></div>
          </div>

          <div className="glass-effect-strong rounded-3xl p-8 md:p-12 border border-white/10 hover:border-white/20 transition-all duration-500 gradient-bg">
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 font-light leading-relaxed">
              Etkinlikleri çok yakında duyuracağız.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

