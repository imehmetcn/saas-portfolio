"use client";

import { useSession } from 'next-auth/react';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lock, Loader2 } from 'lucide-react';

interface AdminAuthGuardProps {
  children: React.ReactNode;
}

export default function AdminAuthGuard({ children }: AdminAuthGuardProps) {
  const { status } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Login sayfasında değilsek ve oturum yoksa login'e yönlendir
    if (status === 'unauthenticated' && pathname !== '/admin/login') {
      router.push('/admin/login');
    }
    
    // Oturum varsa ve login sayfasındaysak admin'e yönlendir
    if (status === 'authenticated' && pathname === '/admin/login') {
      router.push('/admin');
    }
  }, [status, pathname, router]);

  // Loading durumu
  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-2xl">
            <Loader2 className="text-white animate-spin" size={32} />
          </div>
          <h2 className="text-xl font-bold text-white mb-2">Yükleniyor...</h2>
          <p className="text-slate-400">Oturum kontrol ediliyor</p>
        </motion.div>
      </div>
    );
  }

  // Login sayfası için auth kontrolü yapma
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  // Oturum yoksa erişim engelle
  if (status === 'unauthenticated') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-2xl">
            <Lock className="text-white" size={32} />
          </div>
          <h2 className="text-xl font-bold text-white mb-2">Erişim Engellendi</h2>
          <p className="text-slate-400 mb-6">Bu sayfaya erişim için giriş yapmanız gerekiyor</p>
          <motion.button
            onClick={() => router.push('/admin/login')}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Giriş Sayfasına Git
          </motion.button>
        </motion.div>
      </div>
    );
  }

  // Oturum varsa içeriği göster
  return <>{children}</>;
}