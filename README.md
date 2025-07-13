# 🚀 Modern SaaS Portfolio

Modern ve responsive SaaS portfolio sitesi. Next.js 15, React 19, TypeScript ve Tailwind CSS ile geliştirilmiştir.

## ✨ Özellikler

- 🎨 **Modern Tasarım**: Glassmorphism ve gradient efektleri
- 📱 **Tam Responsive**: Tüm cihazlarda mükemmel görünüm
- ⚡ **Ultra Smooth Animations**: Framer Motion ile cinematic animasyonlar
- 🌙 **Dark Mode**: Otomatik tema desteği
- 🚀 **Performance**: Next.js 15 ile optimize edilmiş
- 🎯 **Scroll Effects**: Parallax ve smooth scroll animasyonları
- 📊 **Progress Indicator**: Scroll durumu takibi

## 🛠️ Teknolojiler

- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono

## 🎨 Bölümler

- **Hero Section**: Etkileyici giriş ve CTA'lar
- **About**: Kişisel bilgiler ve yetenekler
- **Portfolio**: Projeler showcase'i
- **Services**: Hizmet detayları ve fiyatlandırma
- **Contact**: İletişim formu ve bilgileri
- **Footer**: Kapsamlı footer ve sosyal medya

## 🚀 Kurulum

```bash
# Repository'yi klonlayın
git clone https://github.com/YOUR_USERNAME/saas-portfolio.git

# Dizine geçin
cd saas-portfolio

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

## 📦 Build

```bash
# Production build
npm run build

# Build'i test edin
npm run start
```

## 🌐 Deploy

### Vercel (Önerilen)
1. [Vercel](https://vercel.com) hesabınızla login olun
2. GitHub repository'sini bağlayın
3. Otomatik deploy başlayacak

### Diğer Platformlar
- **Netlify**: `npm run build` sonrası `out` klasörünü yükleyin
- **Cloudflare Pages**: GitHub repository'sini bağlayın
- **AWS Amplify**: Repository'yi bağlayın

## 🎯 Özelleştirme

### Kişisel Bilgileri Değiştirin
- `src/components/Hero.tsx` - Ana başlık ve açıklama
- `src/components/About.tsx` - Hakkımda bilgileri
- `src/components/Contact.tsx` - İletişim bilgileri

### Projelerinizi Ekleyin
- `src/components/Portfolio.tsx` - `projects` array'ini güncelleyin

### Hizmetlerinizi Güncelleyin
- `src/components/Services.tsx` - `services` array'ini düzenleyin

### Sosyal Medya Linklerini Değiştirin
- `src/components/Footer.tsx` - `socialLinks` array'ini güncelleyin

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit edin (`git commit -m 'Add some amazing feature'`)
4. Push edin (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📄 Lisans

Bu proje MIT lisansı altındadır. Detaylar için [LICENSE](LICENSE) dosyasını inceleyin.

## 📞 İletişim

- **Website**: [Your Website](https://your-website.com)
- **Email**: your-email@example.com
- **LinkedIn**: [Your LinkedIn](https://linkedin.com/in/your-profile)
- **GitHub**: [Your GitHub](https://github.com/your-username)

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
