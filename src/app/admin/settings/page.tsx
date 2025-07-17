"use client";

import React, { useState } from 'react';
import { useAdmin } from '@/contexts/AdminContext';
import Sidebar from '@/components/admin/Sidebar';
import Header from '@/components/admin/Header';

export default function SettingsPage() {
  const { refreshData } = useAdmin();
  const [activeTab, setActiveTab] = useState('general');

  const handleExportData = () => {
    const data = {
      profileData: localStorage.getItem('profileData'),
      heroData: localStorage.getItem('heroData'),
      contactData: localStorage.getItem('contactData'),
      projects: localStorage.getItem('portfolioProjects'),
      blogPosts: localStorage.getItem('blogData'),
      testimonials: localStorage.getItem('testimonialsData'),
      services: localStorage.getItem('servicesData'),
      exportDate: new Date().toISOString()
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `portfolio-backup-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleImportData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target?.result as string);
        
        if (confirm('Bu işlem mevcut verilerinizi değiştirecek. Devam etmek istediğinizden emin misiniz?')) {
          // Verileri localStorage'a kaydet
          if (data.profileData) localStorage.setItem('profileData', data.profileData);
          if (data.heroData) localStorage.setItem('heroData', data.heroData);
          if (data.contactData) localStorage.setItem('contactData', data.contactData);
          if (data.projects) localStorage.setItem('portfolioProjects', data.projects);
          if (data.blogPosts) localStorage.setItem('blogData', data.blogPosts);
          if (data.testimonials) localStorage.setItem('testimonialsData', data.testimonials);
          if (data.services) localStorage.setItem('servicesData', data.services);
          
          alert('Veriler başarıyla içe aktarıldı! Sayfa yenileniyor...');
          refreshData();
        }
      } catch (error) {
        alert('Dosya formatı geçersiz!');
      }
    };
    reader.readAsText(file);
  };

  const handleClearAllData = () => {
    if (confirm('Bu işlem tüm verilerinizi silecek ve geri alınamaz! Devam etmek istediğinizden emin misiniz?')) {
      if (confirm('Son kez soruyorum: Tüm verileriniz silinecek. Emin misiniz?')) {
        localStorage.removeItem('profileData');
        localStorage.removeItem('heroData');
        localStorage.removeItem('contactData');
        localStorage.removeItem('portfolioProjects');
        localStorage.removeItem('blogData');
        localStorage.removeItem('testimonialsData');
        localStorage.removeItem('servicesData');
        
        alert('Tüm veriler silindi! Sayfa yenileniyor...');
        refreshData();
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white flex">
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header 
          title="Ayarlar" 
          description="Sistem ayarlarınızı yönetin"
        />

        {/* Content */}
        <div className="flex-1 p-6 overflow-auto">
          {/* Tabs */}
          <div className="flex space-x-1 mb-6 bg-slate-800 p-1 rounded-lg">
            {[
              { id: 'general', name: 'Genel', icon: '⚙️' },
              { id: 'data', name: 'Veri Yönetimi', icon: '💾' },
              { id: 'backup', name: 'Yedekleme', icon: '🔄' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:text-white hover:bg-slate-700'
                }`}
              >
                <span>{tab.icon}</span>
                {tab.name}
              </button>
            ))}
          </div>

          {/* General Tab */}
          {activeTab === 'general' && (
            <div className="bg-slate-800 rounded-xl p-6">
              <h2 className="text-xl font-bold mb-6">Genel Ayarlar</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-3">Site Bilgileri</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Site Başlığı</label>
                      <input
                        type="text"
                        defaultValue="Modern SaaS Portfolio"
                        className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Site Açıklaması</label>
                      <input
                        type="text"
                        defaultValue="Yaratıcı dijital çözümler ve modern web uygulamaları"
                        className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3">Görünüm Ayarları</h3>
                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input type="checkbox" defaultChecked className="mr-3" />
                      <span className="text-slate-300">Karanlık tema kullan</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" defaultChecked className="mr-3" />
                      <span className="text-slate-300">Animasyonları etkinleştir</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" defaultChecked className="mr-3" />
                      <span className="text-slate-300">Performans monitörünü göster</span>
                    </label>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                    Ayarları Kaydet
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Data Management Tab */}
          {activeTab === 'data' && (
            <div className="bg-slate-800 rounded-xl p-6">
              <h2 className="text-xl font-bold mb-6">Veri Yönetimi</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-3">Veri İstatistikleri</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-slate-700 p-4 rounded-lg text-center">
                      <p className="text-2xl font-bold text-blue-400">
                        {JSON.parse(localStorage.getItem('portfolioProjects') || '[]').length}
                      </p>
                      <p className="text-slate-400 text-sm">Proje</p>
                    </div>
                    <div className="bg-slate-700 p-4 rounded-lg text-center">
                      <p className="text-2xl font-bold text-green-400">
                        {JSON.parse(localStorage.getItem('blogData') || '[]').length}
                      </p>
                      <p className="text-slate-400 text-sm">Blog Yazısı</p>
                    </div>
                    <div className="bg-slate-700 p-4 rounded-lg text-center">
                      <p className="text-2xl font-bold text-purple-400">
                        {JSON.parse(localStorage.getItem('testimonialsData') || '[]').length}
                      </p>
                      <p className="text-slate-400 text-sm">Referans</p>
                    </div>
                    <div className="bg-slate-700 p-4 rounded-lg text-center">
                      <p className="text-2xl font-bold text-yellow-400">
                        {JSON.parse(localStorage.getItem('servicesData') || '[]').length}
                      </p>
                      <p className="text-slate-400 text-sm">Servis</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3">Veri İşlemleri</h3>
                  <div className="space-y-3">
                    <button 
                      onClick={refreshData}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors"
                    >
                      🔄 Verileri Yenile
                    </button>
                    <button 
                      onClick={handleClearAllData}
                      className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg font-medium transition-colors"
                    >
                      🗑️ Tüm Verileri Sil
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Backup Tab */}
          {activeTab === 'backup' && (
            <div className="bg-slate-800 rounded-xl p-6">
              <h2 className="text-xl font-bold mb-6">Yedekleme ve Geri Yükleme</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-3">Veri Dışa Aktarma</h3>
                  <p className="text-slate-400 mb-4">
                    Tüm verilerinizi JSON formatında bilgisayarınıza indirin.
                  </p>
                  <button 
                    onClick={handleExportData}
                    className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-medium transition-colors"
                  >
                    📥 Verileri Dışa Aktar
                  </button>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3">Veri İçe Aktarma</h3>
                  <p className="text-slate-400 mb-4">
                    Daha önce dışa aktardığınız JSON dosyasını yükleyerek verilerinizi geri yükleyin.
                  </p>
                  <div className="flex items-center gap-4">
                    <input
                      type="file"
                      accept=".json"
                      onChange={handleImportData}
                      className="hidden"
                      id="import-file"
                    />
                    <label
                      htmlFor="import-file"
                      className="bg-orange-600 hover:bg-orange-700 text-white py-3 px-6 rounded-lg font-medium transition-colors cursor-pointer"
                    >
                      📤 Dosya Seç ve İçe Aktar
                    </label>
                  </div>
                </div>

                <div className="bg-yellow-900/20 border border-yellow-600/30 rounded-lg p-4">
                  <h4 className="text-yellow-400 font-medium mb-2">⚠️ Önemli Uyarı</h4>
                  <p className="text-yellow-200 text-sm">
                    Veri içe aktarma işlemi mevcut verilerinizi değiştirecektir. 
                    İşlem öncesinde mutlaka yedek alın.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}