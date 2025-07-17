"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAdmin } from '@/contexts/AdminContext';

interface SidebarProps {
  userName?: string;
}

export default function Sidebar({ userName = "Mehmet Can Şahin" }: SidebarProps) {
  const pathname = usePathname();
  const { profileData } = useAdmin();
  
  const sidebarItems = [
    { name: 'Dashboard', icon: '📊', link: '/admin', match: ['/admin'] },
    { name: userName || profileData.name, icon: '👤', link: '/admin/profile', match: ['/admin/profile'] },
    { name: 'Projeler', icon: '📁', link: '/admin/projects', match: ['/admin/projects'] },
    { name: 'Blog Yazıları', icon: '📝', link: '/admin/blog', match: ['/admin/blog'] },
    { name: 'Referanslar', icon: '⭐', link: '/admin/testimonials', match: ['/admin/testimonials'] },
    { name: 'Servisler', icon: '🛠️', link: '/admin/services', match: ['/admin/services'] },
    { name: 'Analitik', icon: '📈', link: '/admin/analytics', match: ['/admin/analytics'] },
    { name: 'Ayarlar', icon: '⚙️', link: '/admin/settings', match: ['/admin/settings'] },
    { name: 'Çıkış Yap', icon: '🚪', link: '/', match: [] }
  ];

  return (
    <div className="w-64 bg-slate-800 border-r border-slate-700 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-xl font-bold text-white">Admin Panel</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {sidebarItems.map((item, index) => {
            const isActive = item.match.includes(pathname);
            return (
              <li key={index}>
                <Link 
                  href={item.link}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive 
                      ? 'bg-blue-600 text-white' 
                      : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}