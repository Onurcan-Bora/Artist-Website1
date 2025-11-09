'use client';

export default function Events() {
  return (
    <section id="events" className="min-h-[60vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-32">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center space-y-8 sm:space-y-12">
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-light tracking-tight gradient-text-fast px-2">
              Etkinlikler
            </h2>
            <div className="w-12 sm:w-16 h-0.5 gradient-button-accent mx-auto rounded-full"></div>
          </div>

          <div className="glass-effect-strong rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-white/10 hover:border-white/20 transition-all duration-500 gradient-bg">
            <p className="text-lg sm:text-xl md:text-xl lg:text-2xl text-white/80 font-light leading-relaxed px-2">
              Etkinlikleri çok yakında duyuracağız.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
