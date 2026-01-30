'use client';

import Image from 'next/image';

export default function UpcomingSongs() {
  return (
    <section id="upcoming" className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center space-y-8 sm:space-y-12">
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-light tracking-tight gradient-text-fast px-2">
              Şarkılar
            </h2>
            <div className="w-12 sm:w-16 h-0.5 gradient-button-accent mx-auto rounded-full"></div>
          </div>

          {/* Released Single Card - Kopan Eller */}
          <div className="glass-effect-strong rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-white/10 hover:border-white/20 transition-all duration-500 gradient-bg">
            <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
              {/* Album Cover */}
              <div className="flex-shrink-0 w-48 sm:w-56 md:w-64 lg:w-72">
                <div className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105">
                  <Image
                    src="/assets/kopan-eller-cover.png"
                    alt="Kopan Eller - Single Cover"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Song Info */}
              <div className="flex-1 space-y-4 sm:space-y-6 text-center lg:text-left">
                <div className="inline-block px-4 sm:px-5 py-1.5 sm:py-1.5 gradient-button-accent text-white text-sm font-normal rounded-full shadow-lg border border-white/10 tracking-wide">
                  YENİ SINGLE
                </div>

                <h3 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-light gradient-text elegant-glow px-2 lg:px-0">
                  Kopan Eller
                </h3>

                <p className="text-base sm:text-lg md:text-lg text-white/80 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed px-2 lg:px-0">
                  Yeni single'ım "Kopan Eller" şimdi tüm dijital platformlarda!
                </p>

                {/* Streaming Links */}
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 pt-2 sm:pt-4">
                  <a
                    href="https://open.spotify.com/track/6LOd92tdhVohuNQBRi4W4r?si=d7d0d8ecae0a4f25"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="spotify-hover px-6 sm:px-8 py-3 sm:py-3.5 glass-effect text-white rounded-full text-base sm:text-base font-normal hover:scale-105 transition-all shadow-lg border border-white/10 flex items-center justify-center gap-3"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                    </svg>
                    Spotify'da Dinle
                  </a>
                  <a
                    href="https://music.apple.com/tr/song/kopan-eller/1869291351"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="apple-hover px-6 sm:px-8 py-3 sm:py-3.5 glass-effect text-white rounded-full text-base sm:text-base font-normal hover:scale-105 transition-all shadow-lg border border-white/10 flex items-center justify-center gap-3"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026-.747.043-1.49.123-2.193.401-1.336.53-2.3 1.452-2.865 2.78-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18 0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.815.154 1.624.497 2.373.65 1.42 1.738 2.353 3.234 2.801.42.127.856.187 1.293.228.555.053 1.11.06 1.667.06h11.03a12.5 12.5 0 001.57-.1c.822-.106 1.596-.35 2.295-.81a5.046 5.046 0 001.88-2.207c.186-.42.293-.87.37-1.324.113-.675.138-1.358.137-2.04-.002-3.8 0-7.595-.003-11.393zm-6.423 3.99v5.712c0 .417-.058.827-.244 1.206-.29.59-.76.962-1.388 1.14-.35.1-.706.157-1.07.173-.95.042-1.8-.335-2.22-1.1-.46-.834-.34-1.88.46-2.58.39-.34.862-.58 1.378-.676.41-.08.83-.12 1.24-.2.28-.06.52-.18.65-.47.07-.16.1-.33.1-.51V8.87c0-.308-.18-.523-.484-.573-.186-.03-.377-.035-.565-.062l-2.865-.444c-.252-.04-.503-.078-.756-.107-.234-.027-.4.12-.448.357-.012.062-.018.126-.018.19-.002 2.33 0 4.66-.004 6.99 0 .453-.05.9-.21 1.323-.32.84-.92 1.33-1.79 1.52-.34.07-.69.1-1.04.12-.9.04-1.71-.26-2.2-.98-.56-.82-.51-2 .17-2.78.41-.47.95-.71 1.54-.84.46-.1.93-.14 1.4-.22.28-.04.55-.13.74-.37.12-.15.17-.32.17-.51V5.35c0-.09.01-.19.03-.28.05-.27.22-.42.48-.4.12.01.25.03.37.06l6.45 1.17c.1.02.21.03.31.06.3.07.46.28.46.59z" />
                    </svg>
                    Apple Music'te Dinle
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* YouTube Video - Now after the song card */}
          <div className="glass-effect-strong rounded-2xl sm:rounded-3xl p-3 sm:p-4 md:p-6 border border-white/10 hover:border-white/20 transition-all duration-500 gradient-bg">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-xl sm:rounded-2xl"
                src="https://www.youtube.com/embed/fOxSmZEs3lA"
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

        </div>
      </div>
    </section>
  );
}
