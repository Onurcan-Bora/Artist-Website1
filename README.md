# Onurcan Bora - Rock Solisti Resmi Web Sitesi

Modern, responsive ve video arkaplan destekli Next.js portfolio sitesi.

## ⚠️ ÖNEMLİ UYARI - LİSANS VE KULLANIM KURALLARI

**Bu proje kişisel bir portfolio web sitesidir ve Onurcan Bora'ya özeldir.**

### 🔒 Kullanım Kısıtlamaları

- ❌ **YASAK:** Bu projeyi içeriklerini (isim, fotoğraflar, linkler, kişisel bilgiler) değiştirmeden veya kaldırmadan deploy etmek
- ❌ **YASAK:** Bu projeyi kendi adınıza veya başka bir kişi adına kullanmak
- ❌ **YASAK:** İçeriği (görseller, metinler, linkler) kaldırmadan bu projeyi template olarak kullanmak
- ✅ **İZİN VERİLEN:** Bu projeyi eğitim amaçlı incelemek ve öğrenmek
- ✅ **İZİN VERİLEN:** Kod yapısını referans alarak kendi projenizi oluşturmak (ancak içeriği tamamen değiştirerek)

### 📋 Deploy Etmeden Önce

Eğer bu projeyi kendi projeniz olarak kullanmak istiyorsanız:

1. **Tüm kişisel bilgileri değiştirin:**
   - `components/About.tsx` - Biyografi metni
   - `components/Hero.tsx` - İsim ve sosyal medya linkleri
   - `components/Footer.tsx` - İletişim bilgileri
   - `app/layout.tsx` - Metadata bilgileri

2. **Tüm görselleri değiştirin:**
   - `public/assets/` klasöründeki tüm görseller
   - `public/assets/background.mp4` video dosyası

3. **Tüm linkleri değiştirin:**
   - Sosyal medya linkleri (Instagram, YouTube, Spotify)
   - YouTube video embed linkleri

4. **İsimleri değiştirin:**
   - Tüm "Onurcan Bora" referansları
   - Component içindeki tüm metinler

**Aksi takdirde, telif hakları ihlali yapmış olursunuz.**

## 🎸 Özellikler

- 🎥 **Video Arkaplan** - Sürekli akan dinamik video arkaplan
- 🎵 **Şarkılar** - Yeni single "Kopan Eller" tanıtımı ve YouTube video
- 📅 **Etkinlikler** - Yaklaşan etkinlikler bölümü
- 📸 **Galeri** - Konser ve basın fotoğrafları (modal ile büyütme ve indirme)
- 📱 **Tam Responsive** - Mobil, tablet ve desktop uyumlu
- 🎨 **Modern Tasarım** - Apple tarzı glassmorphism ve animasyonlar
- ⚡ **Hızlı Performans** - Next.js 15 ile optimize edilmiş
- 🎯 **Smooth Scroll** - Akıcı sayfa geçişleri
- 🌈 **Gradient Animasyonlar** - Akışkan renkli gradient efektler
- 💫 **Işık Hüzmesi Efektleri** - Buton ve icon'larda hover efektleri
- 🌍 **SEO Optimizasyonu** - Arama motorları için optimize

## 🛠 Teknolojiler

- **Framework:** Next.js 15 (App Router)
- **Dil:** TypeScript
- **Stil:** Tailwind CSS 4
- **Font:** Geist Sans & Geist Mono
- **Görseller:** Next.js Image Optimization

## 🚀 Kurulum

### Gereksinimler

- Node.js 18+ 
- npm veya yarn

### Kurulum Adımları

```bash
# Bağımlılıkları yükle
npm install

# Development sunucusunu başlat
npm run dev

# http://localhost:3000 adresini aç
```

### Production Build

```bash
# Build oluştur
npm run build

# Production sunucusunu başlat
npm start
```

## 📁 Proje Yapısı

```
website/
├── app/
│   ├── layout.tsx          # Root layout ve metadata
│   ├── page.tsx            # Ana sayfa
│   ├── globals.css         # Global stiller ve animasyonlar
│   └── favicon.ico         # Site icon
├── components/
│   ├── VideoBackground.tsx # Video arkaplan komponenti
│   ├── Navigation.tsx      # Sticky navigasyon (pill/ada şeklinde)
│   ├── Hero.tsx           # Hero bölümü (ana foto + sosyal medya)
│   ├── Events.tsx         # Etkinlikler bölümü
│   ├── UpcomingSongs.tsx  # Şarkılar (Kopan Eller + YouTube video)
│   ├── About.tsx          # Hakkımda bölümü (biyografi + foto)
│   ├── Works.tsx          # Galeri (konser & basın fotoğrafları)
│   └── Footer.tsx         # Footer ve iletişim
├── public/
│   └── assets/
│       ├── background.mp4      # Arkaplan videosu
│       ├── Main Photo.jpeg     # Ana profil fotoğrafı
│       ├── Concert1...jpeg     # Konser fotoğrafları (4 adet)
│       └── Press1-3.jpeg       # Basın fotoğrafları (3 adet)
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

## 📝 Bölümler

### 🏠 Hero (Ana Sayfa)
- Ana profil fotoğrafı (yuvarlak, gradient border)
- İsim (gradient text animasyonu)
- Sosyal medya icon'ları (Spotify, YouTube, Instagram)
- CTA butonları (Yeni Şarkım, Hakkımda)
- Video arkaplan

### 🎵 Şarkılar
- "Kopan Eller" single tanıtımı
- "İlk Sen Haberdar Ol" butonu
- YouTube video embed
- Çıkış tarihi bilgisi

### 📅 Etkinlikler
- Yaklaşan etkinlikler duyurusu

### 👤 Hakkımda
- Detaylı biyografi
- Profil fotoğrafı (tıklanabilir, modal ile büyütme)
- Skill badge'leri
- Fotoğraf indirme özelliği

### 📸 Galeri
- Konser fotoğrafları (4 adet)
- Basın fotoğrafları (3 adet)
- Kategori filtreleme (Tümü, Konserler, Basın)
- Modal ile büyütme
- Fotoğraf indirme özelliği

### 📞 İletişim
- E-posta (bot korumalı - reveal on click)
- Sosyal medya linkleri
- Müzik platformları linkleri
- Lokasyon bilgisi

## 🎨 Tasarım Özellikleri

- **Apple Tarzı Glassmorphism** - Modern cam efekti
- **Gradient Animasyonlar** - Akışkan renkli gradient text ve butonlar
- **Lacivert Tonlar** - Erkeksi ve şık renk paleti
- **Işık Hüzmesi Efektleri** - Buton ve icon hover efektleri
- **Smooth Animations** - Fade-in ve scale animasyonları
- **Custom Scrollbar** - Gradient kaydırma çubuğu
- **Responsive Design** - Tüm cihazlarda mükemmel görünüm
- **Pill/Island Navigation** - Scroll sonrası pill şeklinde navigation bar

## 🔧 Özelleştirme

### İçerik Güncelleme

1. **Kişisel Bilgiler**: 
   - `components/Hero.tsx` - İsim ve sosyal medya linkleri
   - `components/About.tsx` - Biyografi metni
   - `components/Footer.tsx` - İletişim bilgileri
   - `app/layout.tsx` - Metadata bilgileri

2. **Şarkılar**: 
   - `components/UpcomingSongs.tsx` - Şarkı bilgileri ve YouTube video ID

3. **Galeri**: 
   - `components/Works.tsx` - Fotoğraf listesi ve kategoriler

4. **Etkinlikler**: 
   - `components/Events.tsx` - Etkinlik duyuruları

### Görsel/Video Ekleme

**Video arkaplan:**
- `public/assets/background.mp4` dosyasını değiştir

**Fotoğraflar:**
- `public/assets/` klasörüne yeni fotoğraflar ekle
- `components/Works.tsx` içindeki `galleries` objesini güncelle
- `components/About.tsx` içindeki fotoğraf path'ini güncelle

### Stil Değişiklikleri

- **Renkler:** `app/globals.css` - Gradient renkleri ve animasyonlar
- **Fontlar:** `app/layout.tsx` - Google Fonts ayarları
- **Component stilleri:** Her component'te inline Tailwind sınıfları

### SEO ve Metadata

`app/layout.tsx` dosyasında metadata bilgilerini güncelleyin.

## 🌐 Deployment

### Vercel (Önerilen)

1. Kodu GitHub'a push et
2. Vercel'de projeyi import et
3. Otomatik deploy

**NOT:** Deploy etmeden önce tüm kişisel bilgileri değiştirmeyi unutmayın!

### Diğer Platformlar

```bash
npm run build
```

Build edilen `.next` klasörünü deploy et.

## 📱 Responsive Breakpoints

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

## 📄 Lisans

© 2024 Onurcan Bora. Tüm hakları saklıdır.

Bu proje kişisel kullanım içindir. İçeriği (isim, fotoğraflar, linkler, kişisel bilgiler) değiştirmeden veya kaldırmadan kullanımı yasaktır.

## 📞 İletişim

Sorularınız için: onurcanboramusic@gmail.com

---

🎸 **Rock On!** 🎸
