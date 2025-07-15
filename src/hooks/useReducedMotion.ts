import { useEffect, useState } from 'react';

export function useReducedMotion() {
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);

  useEffect(() => {
    // Kullanıcının hareket azaltma tercihini kontrol et
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setShouldReduceMotion(mediaQuery.matches);

    // Mobil cihazlarda animasyonları azalt
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      setShouldReduceMotion(true);
    }

    const handleChange = () => {
      setShouldReduceMotion(mediaQuery.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return shouldReduceMotion;
}