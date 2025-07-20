"use client";

import React, { useState } from 'react';
import { useAdmin } from '@/contexts/AdminContext';
import Sidebar from '@/components/admin/Sidebar';
import Header from '@/components/admin/Header';
import { motion } from 'framer-motion';
import { Save, Plus, Trash2, Edit3 } from 'lucide-react';
import toast from 'react-hot-toast';

export default function ContentPage() {
  const { 
    aboutData, 
    navbarData, 
    footerData, 
    updateAboutData, 
    updateNavbarData, 
    updateFooterData 
  } = useAdmin();
  
  const [activeTab, setActiveTab] = useState('about');
  const [isLoading, setIsLoading] = useState(false);
  
  // Form states
  const [aboutForm, setAboutForm] = useState(aboutData);
  const [navbarForm, setNavbarForm] = useState(navbarData);
  const [footerForm, setFooterForm] = useState(footerData);

  const handleSave = async (section: 'about' | 'navbar' | 'footer') => {
    setIsLoading(true);
    try {
      switch (section) {
        case 'about':
          updateAboutData(aboutForm);
          break;
        case 'navbar':
          updateNavbarData(navbarForm);
          break;
        case 'footer':
          updateFooterData(footerForm);
          break;
      }
      
      toast.success('İçerik başarıyla güncellendi! 🎉', {
        duration: 3000,
        position: 'top-right',
      });
    } catch (error) {
      console.error('Error saving content:', error);
      toast.error('İçerik güncellenirken bir hata oluştu! ❌', {
        duration: 4000,
        position: 'top-right',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const addFeature = () => {
    setAboutForm(prev => ({
      ...prev,
      features: [...prev.features, '']
    }));
  };

  const removeFeature = (index: number) => {
    setAboutForm(prev => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index)
    }));
  };

  const updateFeature = (index: number, value: string) => {
    setAboutForm(prev => ({
      ...prev,
      features: prev.features.map((feature, i) => i === index ? value : feature)
    }));
  };

  const addMenuItem = () => {
    setNavbarForm(prev => ({
      ...prev,
      menuItems: [...prev.menuItems, { label: '', href: '', isActive: true }]
    }));
  };

  const removeMenuItem = (index: number) => {
    setNavbarForm(prev => ({
      ...prev,
      menuItems: prev.menuItems.filter((_, i) => i !== index)
    }));
  };

  const updateMenuItem = (index: number, field: string, value: string | boolean) => {
    setNavbarForm(prev => ({
      ...prev,
      menuItems: prev.menuItems.map((item, i) => 
        i === index ? { ...item, [field]: value } : item
      )
    }));
  };

  const addSocialLink = () => {
    setFooterForm(prev => ({
      ...prev,
      socialLinks: [...prev.socialLinks, { platform: '', url: '', icon: '' }]
    }));
  };

  const removeSocialLink = (index: number) => {
    setFooterForm(prev => ({
      ...prev,
      socialLinks: prev.socialLinks.filter((_, i) => i !== index)
    }));
  };

  const updateSocialLink = (index: number, field: string, value: string) => {
    setFooterForm(prev => ({
      ...prev,
      socialLinks: prev.socialLinks.map((link, i) => 
        i === index ? { ...link, [field]: value } : link
      )
    }));
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white flex">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header 
          title="İçerik Yönetimi" 
          description="Site içeriklerini düzenleyin ve yönetin"
        />

        <div className="flex-1 p-6 overflow-auto">
          {/* Tabs */}
          <div className="flex space-x-1 mb-6 bg-slate-800 p-1 rounded-lg">
            {[
              { id: 'about', name: 'Hakkımda', icon: '👤' },
              { id: 'navbar', name: 'Menü', icon: '🧭' },
              { id: 'footer', name: 'Footer', icon: '🦶' }
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

          {/* About Tab */}
          {activeTab === 'about' && (
            <motion.div
              className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-white">Hakkımda Bölümü</h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Başlık</label>
                    <input
                      type="text"
                      value={aboutForm.title}
                      onChange={(e) => setAboutForm(prev => ({ ...prev, title: e.target.value }))}
                      className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Alt Başlık</label>
                    <input
                      type="text"
                      value={aboutForm.subtitle}
                      onChange={(e) => setAboutForm(prev => ({ ...prev, subtitle: e.target.value }))}
                      className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Açıklama</label>
                  <textarea
                    value={aboutForm.description}
                    onChange={(e) => setAboutForm(prev => ({ ...prev, description: e.target.value }))}
                    rows={4}
                    className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Resim URL</label>
                  <input
                    type="url"
                    value={aboutForm.image}
                    onChange={(e) => setAboutForm(prev => ({ ...prev, image: e.target.value }))}
                    className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                  />
                </div>

                {/* Stats */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">İstatistikler</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Deneyim</label>
                      <input
                        type="text"
                        value={aboutForm.stats.experience}
                        onChange={(e) => setAboutForm(prev => ({ 
                          ...prev, 
                          stats: { ...prev.stats, experience: e.target.value }
                        }))}
                        className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Projeler</label>
                      <input
                        type="text"
                        value={aboutForm.stats.projects}
                        onChange={(e) => setAboutForm(prev => ({ 
                          ...prev, 
                          stats: { ...prev.stats, projects: e.target.value }
                        }))}
                        className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Müşteriler</label>
                      <input
                        type="text"
                        value={aboutForm.stats.clients}
                        onChange={(e) => setAboutForm(prev => ({ 
                          ...prev, 
                          stats: { ...prev.stats, clients: e.target.value }
                        }))}
                        className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Ödüller</label>
                      <input
                        type="text"
                        value={aboutForm.stats.awards}
                        onChange={(e) => setAboutForm(prev => ({ 
                          ...prev, 
                          stats: { ...prev.stats, awards: e.target.value }
                        }))}
                        className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">Özellikler</h3>
                    <button
                      onClick={addFeature}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
                    >
                      <Plus size={16} />
                      Ekle
                    </button>
                  </div>
                  <div className="space-y-3">
                    {aboutForm.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <input
                          type="text"
                          value={feature}
                          onChange={(e) => updateFeature(index, e.target.value)}
                          className="flex-1 bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                          placeholder="Özellik adı"
                        />
                        <button
                          onClick={() => removeFeature(index)}
                          className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={() => handleSave('about')}
                    disabled={isLoading}
                    className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
                  >
                    {isLoading ? (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <Save size={18} />
                    )}
                    {isLoading ? 'Kaydediliyor...' : 'Kaydet'}
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Navbar Tab */}
          {activeTab === 'navbar' && (
            <motion.div
              className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-white">Menü Ayarları</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Logo</label>
                  <input
                    type="text"
                    value={navbarForm.logo}
                    onChange={(e) => setNavbarForm(prev => ({ ...prev, logo: e.target.value }))}
                    className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                  />
                </div>

                {/* Menu Items */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">Menü Öğeleri</h3>
                    <button
                      onClick={addMenuItem}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
                    >
                      <Plus size={16} />
                      Ekle
                    </button>
                  </div>
                  <div className="space-y-4">
                    {navbarForm.menuItems.map((item, index) => (
                      <div key={index} className="bg-slate-700/30 rounded-xl p-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                          <input
                            type="text"
                            value={item.label}
                            onChange={(e) => updateMenuItem(index, 'label', e.target.value)}
                            className="bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                            placeholder="Menü adı"
                          />
                          <input
                            type="text"
                            value={item.href}
                            onChange={(e) => updateMenuItem(index, 'href', e.target.value)}
                            className="bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                            placeholder="Link (#section)"
                          />
                          <div className="flex items-center gap-3">
                            <label className="flex items-center gap-2 text-slate-300">
                              <input
                                type="checkbox"
                                checked={item.isActive}
                                onChange={(e) => updateMenuItem(index, 'isActive', e.target.checked)}
                                className="w-4 h-4 text-blue-600 bg-slate-700 border-slate-600 rounded focus:ring-blue-500 focus:ring-2"
                              />
                              Aktif
                            </label>
                            <button
                              onClick={() => removeMenuItem(index)}
                              className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg transition-colors"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">CTA Butonu</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input
                      type="text"
                      value={navbarForm.ctaButton.text}
                      onChange={(e) => setNavbarForm(prev => ({ 
                        ...prev, 
                        ctaButton: { ...prev.ctaButton, text: e.target.value }
                      }))}
                      className="bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                      placeholder="Buton metni"
                    />
                    <input
                      type="text"
                      value={navbarForm.ctaButton.href}
                      onChange={(e) => setNavbarForm(prev => ({ 
                        ...prev, 
                        ctaButton: { ...prev.ctaButton, href: e.target.value }
                      }))}
                      className="bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                      placeholder="Link"
                    />
                    <label className="flex items-center gap-2 text-slate-300">
                      <input
                        type="checkbox"
                        checked={navbarForm.ctaButton.visible}
                        onChange={(e) => setNavbarForm(prev => ({ 
                          ...prev, 
                          ctaButton: { ...prev.ctaButton, visible: e.target.checked }
                        }))}
                        className="w-4 h-4 text-blue-600 bg-slate-700 border-slate-600 rounded focus:ring-blue-500 focus:ring-2"
                      />
                      Görünür
                    </label>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={() => handleSave('navbar')}
                    disabled={isLoading}
                    className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
                  >
                    {isLoading ? (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <Save size={18} />
                    )}
                    {isLoading ? 'Kaydediliyor...' : 'Kaydet'}
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Footer Tab */}
          {activeTab === 'footer' && (
            <motion.div
              className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-white">Footer Ayarları</h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Şirket Adı</label>
                    <input
                      type="text"
                      value={footerForm.companyName}
                      onChange={(e) => setFooterForm(prev => ({ ...prev, companyName: e.target.value }))}
                      className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Telif Hakkı</label>
                    <input
                      type="text"
                      value={footerForm.copyright}
                      onChange={(e) => setFooterForm(prev => ({ ...prev, copyright: e.target.value }))}
                      className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Açıklama</label>
                  <textarea
                    value={footerForm.description}
                    onChange={(e) => setFooterForm(prev => ({ ...prev, description: e.target.value }))}
                    rows={3}
                    className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 resize-none"
                  />
                </div>

                {/* Social Links */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">Sosyal Medya</h3>
                    <button
                      onClick={addSocialLink}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
                    >
                      <Plus size={16} />
                      Ekle
                    </button>
                  </div>
                  <div className="space-y-4">
                    {footerForm.socialLinks.map((link, index) => (
                      <div key={index} className="bg-slate-700/30 rounded-xl p-4">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                          <input
                            type="text"
                            value={link.platform}
                            onChange={(e) => updateSocialLink(index, 'platform', e.target.value)}
                            className="bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                            placeholder="Platform adı"
                          />
                          <input
                            type="url"
                            value={link.url}
                            onChange={(e) => updateSocialLink(index, 'url', e.target.value)}
                            className="bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                            placeholder="URL"
                          />
                          <input
                            type="text"
                            value={link.icon}
                            onChange={(e) => updateSocialLink(index, 'icon', e.target.value)}
                            className="bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                            placeholder="Icon adı"
                          />
                          <button
                            onClick={() => removeSocialLink(index)}
                            className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={() => handleSave('footer')}
                    disabled={isLoading}
                    className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
                  >
                    {isLoading ? (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <Save size={18} />
                    )}
                    {isLoading ? 'Kaydediliyor...' : 'Kaydet'}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}