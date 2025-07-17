"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAdmin } from '@/contexts/AdminContext';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  User, 
  FolderOpen, 
  FileText, 
  Star, 
  Settings, 
  BarChart3, 
  Wrench,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Home,
  Menu,
  X
} from 'lucide-react';

interface SidebarProps {
  userName?: string;
}

export default function Sidebar({ userName = "Mehmet Can Şahin" }: SidebarProps) {
  const pathname = usePathname();
  const { profileData, projects, blogPosts } = useAdmin();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Close mobile menu when route changes
  React.useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);
  
  const sidebarItems = [
    { name: 'Dashboard', icon: LayoutDashboard, link: '/admin', match: ['/admin'], badge: null },
    { name: 'Profil', icon: User, link: '/admin/profile', match: ['/admin/profile'], badge: null },
    { name: 'Projeler', icon: FolderOpen, link: '/admin/projects', match: ['/admin/projects'], badge: projects.length },
    { name: 'Blog Yazıları', icon: FileText, link: '/admin/blog', match: ['/admin/blog'], badge: blogPosts.length },
    { name: 'Referanslar', icon: Star, link: '/admin/testimonials', match: ['/admin/testimonials'], badge: null },
    { name: 'Servisler', icon: Wrench, link: '/admin/services', match: ['/admin/services'], badge: null },
    { name: 'Analitik', icon: BarChart3, link: '/admin/analytics', match: ['/admin/analytics'], badge: null },
    { name: 'Ayarlar', icon: Settings, link: '/admin/settings', match: ['/admin/settings'], badge: null },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Mobile Menu Button */}
      <motion.button
        onClick={() => setIsMobileOpen(true)}
        className="fixed top-4 left-4 z-50 lg:hidden w-12 h-12 bg-slate-800/90 backdrop-blur-xl border border-slate-700/50 rounded-xl flex items-center justify-center text-white shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Menu size={20} />
      </motion.button>

      <motion.div 
        className={`bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-r border-slate-700/50 flex flex-col shadow-2xl ${
          isMobileOpen ? 'fixed inset-y-0 left-0 z-50 w-80' : 'hidden lg:flex'
        }`}
        animate={{ 
          width: isMobileOpen ? 320 : (isCollapsed ? 80 : 280)
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
      {/* Header */}
      <div className="p-6 border-b border-slate-700/50">
        <div className="flex items-center justify-between">
          <AnimatePresence>
            {!isCollapsed && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <LayoutDashboard className="text-white" size={20} />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-white">Admin Panel</h1>
                  <p className="text-xs text-slate-400">Portfolio Yönetimi</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          <div className="flex items-center gap-2">
            {/* Mobile Close Button */}
            {isMobileOpen && (
              <motion.button
                onClick={() => setIsMobileOpen(false)}
                className="lg:hidden w-8 h-8 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={16} />
              </motion.button>
            )}
            
            {/* Desktop Collapse Button */}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="hidden lg:flex w-8 h-8 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
            >
              {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {sidebarItems.map((item, index) => {
            const isActive = item.match.includes(pathname);
            const Icon = item.icon;
            
            return (
              <li key={index}>
                <Link 
                  href={item.link}
                  className={`group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 relative overflow-hidden ${
                    isActive 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                      : 'text-slate-300 hover:bg-slate-700/50 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl"
                      layoutId="activeTab"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  
                  <Icon size={20} className={`relative z-10 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-white'}`} />
                  
                  <AnimatePresence>
                    {!isCollapsed && (
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                        className="font-medium relative z-10 flex-1"
                      >
                        {item.name}
                      </motion.span>
                    )}
                  </AnimatePresence>
                  
                  {/* Badge */}
                  {item.badge !== null && item.badge > 0 && (
                    <AnimatePresence>
                      {!isCollapsed && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0 }}
                          transition={{ duration: 0.2 }}
                          className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-bold min-w-[20px] text-center relative z-10"
                        >
                          {item.badge}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                  
                  {isActive && !item.badge && (
                    <motion.div
                      className="absolute right-2 w-2 h-2 bg-white rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-slate-700/50">
        <Link
          href="/"
          className="group flex items-center gap-3 px-4 py-3 rounded-xl text-slate-300 hover:bg-slate-700/50 hover:text-white transition-all duration-200"
        >
          <Home size={20} className="text-slate-400 group-hover:text-white" />
          <AnimatePresence>
            {!isCollapsed && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="font-medium"
              >
                Ana Sayfaya Dön
              </motion.span>
            )}
          </AnimatePresence>
        </Link>
        
        <Link
          href="/"
          className="group flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all duration-200 mt-2"
        >
          <LogOut size={20} />
          <AnimatePresence>
            {!isCollapsed && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="font-medium"
              >
                Çıkış Yap
              </motion.span>
            )}
          </AnimatePresence>
        </Link>
      </div>
    </motion.div>
  );
}