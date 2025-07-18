/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performans optimizasyonları
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  
  // Resim optimizasyonu
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 gün
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.screenshotmachine.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'screenshot.abstractapi.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'htmlcsstoimage.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'api.placeholder.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        port: '',
        pathname: '/**',
      }
    ],
  },
  
  // Gzip sıkıştırma
  compress: true,
};

module.exports = nextConfig;