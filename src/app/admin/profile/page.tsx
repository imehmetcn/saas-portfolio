"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useAdmin } from '@/contexts/AdminContext';
import Sidebar from '@/components/admin/Sidebar';
import Header from '@/components/admin/Header';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin, Globe, Camera, Save, Edit3 } from 'lucide-react';
import toast from 'react-hot-toast';

export default function ProfilePage() {
  const { profileData, updateProfileData } = useAdmin();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...profileData });
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async () => {
    setIsLoading(true);
    try {
      updateProfileData(formData);
      setIsEditing(false);
      toast.success('Profil bilgileri başarıyla güncellendi! 🎉', {
        duration: 3000,
        position: 'top-right',
      });
    } catch (error) {
      console.error('Error saving profile:', error);
      toast.error('Profil güncellenirken bir hata oluştu! ❌', {
        duration: 4000,
        position: 'top-right',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    setFormData({ ...profileData });
    setIsEditing(false);
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white flex">
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header
          title="Profil"
          description="Kişisel bilgilerinizi görüntüleyin ve düzenleyin"
        />

        {/* Content */}
        <div className="flex-1 p-6 overflow-auto">
          {/* Profile Header Card */}
          <motion.div
            className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-8 mb-8 shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Avatar */}
              <div className="relative">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                  {formData.avatar ? (
                    <Image
                      src={formData.avatar}
                      alt={formData.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <User size={48} className="text-white" />
                    </div>
                  )}
                </div>
                {isEditing && (
                  <button className="absolute bottom-2 right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                    <Camera size={16} />
                  </button>
                )}
              </div>

              {/* Profile Info */}
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-3xl font-bold text-white mb-2">{formData.name}</h1>
                <p className="text-xl text-blue-200 mb-4">{formData.title}</p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-blue-200/80">
                  {formData.email && (
                    <div className="flex items-center gap-2">
                      <Mail size={16} />
                      {formData.email}
                    </div>
                  )}
                  {formData.phone && (
                    <div className="flex items-center gap-2">
                      <Phone size={16} />
                      {formData.phone}
                    </div>
                  )}
                  {formData.location && (
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      {formData.location}
                    </div>
                  )}
                  {formData.website && (
                    <div className="flex items-center gap-2">
                      <Globe size={16} />
                      <a href={formData.website} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                        Website
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Edit Button */}
              <div className="flex gap-3">
                {!isEditing ? (
                  <motion.button
                    onClick={() => setIsEditing(true)}
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Edit3 size={18} />
                    Düzenle
                  </motion.button>
                ) : (
                  <div className="flex gap-3">
                    <motion.button
                      onClick={handleSave}
                      disabled={isLoading}
                      className="bg-green-600 hover:bg-green-700 disabled:bg-green-400 disabled:cursor-not-allowed text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2"
                      whileHover={{ scale: isLoading ? 1 : 1.02 }}
                      whileTap={{ scale: isLoading ? 1 : 0.98 }}
                    >
                      {isLoading ? (
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <Save size={18} />
                      )}
                      {isLoading ? 'Kaydediliyor...' : 'Kaydet'}
                    </motion.button>
                    <motion.button
                      onClick={handleCancel}
                      className="bg-slate-600 hover:bg-slate-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      İptal
                    </motion.button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Profile Details */}
          {isEditing ? (
            <motion.div
              className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-white">Profil Bilgilerini Düzenle</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Ad Soyad</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => updateFormData('name', e.target.value)}
                    className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                    placeholder="Adınız ve soyadınız"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Ünvan</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => updateFormData('title', e.target.value)}
                    className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                    placeholder="Mesleğiniz veya ünvanınız"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">E-posta</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Telefon</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateFormData('phone', e.target.value)}
                    className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                    placeholder="+90 555 123 45 67"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Konum</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => updateFormData('location', e.target.value)}
                    className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                    placeholder="Şehir, Ülke"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Website</label>
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) => updateFormData('website', e.target.value)}
                    className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                    placeholder="https://website.com"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-300 mb-2">Avatar URL</label>
                  <input
                    type="url"
                    value={formData.avatar}
                    onChange={(e) => updateFormData('avatar', e.target.value)}
                    className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
                    placeholder="https://example.com/avatar.jpg"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-300 mb-2">Biyografi</label>
                  <textarea
                    value={formData.bio}
                    onChange={(e) => updateFormData('bio', e.target.value)}
                    rows={4}
                    className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 resize-none"
                    placeholder="Kendiniz hakkında kısa bir açıklama yazın..."
                  />
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-white">Profil Detayları</h2>
              <div className="space-y-6">
                {formData.bio && (
                  <div>
                    <h3 className="text-lg font-semibold text-slate-300 mb-3">Biyografi</h3>
                    <p className="text-slate-400 leading-relaxed bg-slate-700/30 rounded-xl p-4">
                      {formData.bio}
                    </p>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-300">İletişim Bilgileri</h3>
                    <div className="space-y-3">
                      {formData.email && (
                        <div className="flex items-center gap-3 text-slate-400">
                          <Mail size={18} className="text-blue-400" />
                          <span>{formData.email}</span>
                        </div>
                      )}
                      {formData.phone && (
                        <div className="flex items-center gap-3 text-slate-400">
                          <Phone size={18} className="text-green-400" />
                          <span>{formData.phone}</span>
                        </div>
                      )}
                      {formData.location && (
                        <div className="flex items-center gap-3 text-slate-400">
                          <MapPin size={18} className="text-red-400" />
                          <span>{formData.location}</span>
                        </div>
                      )}
                      {formData.website && (
                        <div className="flex items-center gap-3 text-slate-400">
                          <Globe size={18} className="text-purple-400" />
                          <a
                            href={formData.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors underline"
                          >
                            {formData.website}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-slate-300">Hesap Bilgileri</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-slate-400">
                        <User size={18} className="text-yellow-400" />
                        <span>Admin Kullanıcısı</span>
                      </div>
                      <div className="flex items-center gap-3 text-slate-400">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span>Aktif</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}