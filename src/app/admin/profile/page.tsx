"use client";

import React, { useState } from 'react';
import { useAdmin } from '@/contexts/AdminContext';
import Sidebar from '@/components/admin/Sidebar';
import Header from '@/components/admin/Header';

export default function ProfilePage() {
  const { profileData, heroData, contactData, updateProfileData, updateHeroData, updateContactData } = useAdmin();
  const [activeTab, setActiveTab] = useState('profile');
  const [formData, setFormData] = useState({
    profile: { ...profileData },
    hero: { ...heroData },
    contact: { ...contactData }
  });

  const handleSave = (section: 'profile' | 'hero' | 'contact') => {
    switch (section) {
      case 'profile':
        updateProfileData(formData.profile);
        break;
      case 'hero':
        updateHeroData(formData.hero);
        break;
      case 'contact':
        updateContactData(formData.contact);
        break;
    }
    alert('Değişiklikler kaydedildi!');
  };

  const updateFormData = (section: 'profile' | 'hero' | 'contact', field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white flex">
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header 
          title="Profil Ayarları" 
          description="Kişisel bilgilerinizi ve site içeriklerini düzenleyin"
        />

        {/* Content */}
        <div className="flex-1 p-6 overflow-auto">
          {/* Tabs */}
          <div className="flex space-x-1 mb-6 bg-slate-800 p-1 rounded-lg">
            {[
              { id: 'profile', name: 'Profil Bilgileri', icon: '👤' },
              { id: 'hero', name: 'Ana Sayfa', icon: '🏠' },
              { id: 'contact', name: 'İletişim', icon: '📞' }
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

          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="bg-slate-800 rounded-xl p-6">
              <h2 className="text-xl font-bold mb-6">Profil Bilgileri</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Ad Soyad</label>
                  <input
                    type="text"
                    value={formData.profile.name}
                    onChange={(e) => updateFormData('profile', 'name', e.target.value)}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Ünvan</label>
                  <input
                    type="text"
                    value={formData.profile.title}
                    onChange={(e) => updateFormData('profile', 'title', e.target.value)}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">E-posta</label>
                  <input
                    type="email"
                    value={formData.profile.email}
                    onChange={(e) => updateFormData('profile', 'email', e.target.value)}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Telefon</label>
                  <input
                    type="tel"
                    value={formData.profile.phone}
                    onChange={(e) => updateFormData('profile', 'phone', e.target.value)}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Konum</label>
                  <input
                    type="text"
                    value={formData.profile.location}
                    onChange={(e) => updateFormData('profile', 'location', e.target.value)}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Website</label>
                  <input
                    type="url"
                    value={formData.profile.website}
                    onChange={(e) => updateFormData('profile', 'website', e.target.value)}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-300 mb-2">Biyografi</label>
                  <textarea
                    value={formData.profile.bio}
                    onChange={(e) => updateFormData('profile', 'bio', e.target.value)}
                    rows={4}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Avatar URL</label>
                  <input
                    type="text"
                    value={formData.profile.avatar}
                    onChange={(e) => updateFormData('profile', 'avatar', e.target.value)}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="flex items-center">
                  {formData.profile.avatar && (
                    <img 
                      src={formData.profile.avatar} 
                      alt="Avatar önizleme" 
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                  )}
                  <span className="text-slate-400 text-sm">Avatar önizleme</span>
                </div>
              </div>
              <div className="flex justify-end mt-6">
                <button
                  onClick={() => handleSave('profile')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Değişiklikleri Kaydet
                </button>
              </div>
            </div>
          )}

          {/* Hero Tab */}
          {activeTab === 'hero' && (
            <div className="bg-slate-800 rounded-xl p-6">
              <h2 className="text-xl font-bold mb-6">Ana Sayfa İçeriği</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Ana Başlık</label>
                  <input
                    type="text"
                    value={formData.hero.title}
                    onChange={(e) => updateFormData('hero', 'title', e.target.value)}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Alt Başlık</label>
                  <input
                    type="text"
                    value={formData.hero.subtitle}
                    onChange={(e) => updateFormData('hero', 'subtitle', e.target.value)}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Açıklama</label>
                  <textarea
                    value={formData.hero.description}
                    onChange={(e) => updateFormData('hero', 'description', e.target.value)}
                    rows={4}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Yetenekler (virgülle ayırın)</label>
                  <input
                    type="text"
                    value={formData.hero.skills.join(', ')}
                    onChange={(e) => updateFormData('hero', 'skills', e.target.value.split(', ').filter(s => s.trim()))}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                    placeholder="React, Next.js, TypeScript, UI/UX Design"
                  />
                </div>
              </div>
              <div className="flex justify-end mt-6">
                <button
                  onClick={() => handleSave('hero')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Değişiklikleri Kaydet
                </button>
              </div>
            </div>
          )}

          {/* Contact Tab */}
          {activeTab === 'contact' && (
            <div className="bg-slate-800 rounded-xl p-6">
              <h2 className="text-xl font-bold mb-6">İletişim Bilgileri</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">E-posta</label>
                  <input
                    type="email"
                    value={formData.contact.email}
                    onChange={(e) => updateFormData('contact', 'email', e.target.value)}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Telefon</label>
                  <input
                    type="tel"
                    value={formData.contact.phone}
                    onChange={(e) => updateFormData('contact', 'phone', e.target.value)}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Website</label>
                  <input
                    type="url"
                    value={formData.contact.website}
                    onChange={(e) => updateFormData('contact', 'website', e.target.value)}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Konum</label>
                  <input
                    type="text"
                    value={formData.contact.location}
                    onChange={(e) => updateFormData('contact', 'location', e.target.value)}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="flex justify-end mt-6">
                <button
                  onClick={() => handleSave('contact')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Değişiklikleri Kaydet
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}