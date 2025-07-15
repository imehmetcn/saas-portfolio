"use client";

import { useEffect } from 'react';

export default function PerformanceMonitor() {
  useEffect(() => {
    // Sadece production'da çalışsın
    if (process.env.NODE_ENV !== 'production') return;

    // Web Vitals izleme
    const reportWebVitals = (metric: any) => {
      // Console'da göster (geliştirme için)
      console.log(`${metric.name}: ${metric.value}`);
      
      // Analytics'e gönder (isteğe bağlı)
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', metric.name, {
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          event_category: 'Web Vitals',
          event_label: metric.id,
          non_interaction: true,
        });
      }
    };

    // Performance Observer ile Core Web Vitals izle
    if ('PerformanceObserver' in window) {
      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        reportWebVitals({
          name: 'LCP',
          value: lastEntry.startTime,
          id: 'lcp',
        });
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          reportWebVitals({
            name: 'FID',
            value: entry.processingStart - entry.startTime,
            id: 'fid',
          });
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        reportWebVitals({
          name: 'CLS',
          value: clsValue,
          id: 'cls',
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    }

    // Mobil performans uyarıları
    const checkMobilePerformance = () => {
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        // Memory kullanımını kontrol et
        if ('memory' in performance) {
          const memory = (performance as any).memory;
          const memoryUsage = memory.usedJSHeapSize / memory.jsHeapSizeLimit;
          
          if (memoryUsage > 0.8) {
            console.warn('Yüksek memory kullanımı tespit edildi:', memoryUsage);
          }
        }

        // Connection speed kontrol et
        if ('connection' in navigator) {
          const connection = (navigator as any).connection;
          if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
            console.warn('Yavaş internet bağlantısı tespit edildi');
            // Animasyonları daha da azalt
            document.documentElement.style.setProperty('--animation-duration', '0.1s');
          }
        }
      }
    };

    checkMobilePerformance();
    window.addEventListener('resize', checkMobilePerformance);

    return () => {
      window.removeEventListener('resize', checkMobilePerformance);
    };
  }, []);

  return null; // Bu bileşen görsel bir şey render etmez
}