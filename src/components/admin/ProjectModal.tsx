"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Project } from '@/contexts/AdminContext';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (project: Project) => void;
  project?: Project;
}

export default function ProjectModal({ isOpen, onClose, onSave, project }: ProjectModalProps) {
  const [formData, setFormData] = useState<Project>({
    id: 0,
    title: '',
    description: '',
    longDescription: '',
    image: '',
    category: 'web',
    tags: [],
    technologies: [],
    liveUrl: '',
    githubUrl: '',
    status: 'active',
    featured: false,
    date: new Date().toISOString().split('T')[0],
    client: '',
    duration: '',
    views: 0
  });

  const [imagePreview, setImagePreview] = useState<string>('');
  const [isLoadingScreenshot, setIsLoadingScreenshot] = useState(false);

  useEffect(() => {
    if (project) {
      setFormData(project);
      setImagePreview(project.image);
    } else {
      // Yeni proje için ID oluştur
      setFormData(prev => ({
        ...prev,
        id: Date.now(),
        date: new Date().toISOString().split('T')[0]
      }));
      setImagePreview('');
    }
  }, [project, isOpen]);

  // URL'den otomatik screenshot alma fonksiyonu
  const generateScreenshot = async (url: string) => {
    if (!url) return;
    
    setIsLoadingScreenshot(true);
    try {
      // Screenshot API kullanarak görsel oluştur
      const screenshotUrl = `https://api.screenshotmachine.com/?key=demo&url=${encodeURIComponent(url)}&dimension=1024x768&format=png`;
      
      setFormData(prev => ({
        ...prev,
        image: screenshotUrl
      }));
      setImagePreview(screenshotUrl);
    } catch (error) {
      console.error('Screenshot oluşturulamadı:', error);
    } finally {
      setIsLoadingScreenshot(false);
    }
  };

  // Dosya yükleme fonksiyonu
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Dosya boyutu kontrolü (5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('Dosya boyutu 5MB\'dan küçük olmalıdır.');
      return;
    }

    // Dosya tipini kontrol et
    if (!file.type.startsWith('image/')) {
      alert('Lütfen bir resim dosyası seçin.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      setFormData(prev => ({
        ...prev,
        image: result
      }));
      setImagePreview(result);
    };
    reader.readAsDataURL(file);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleArrayChange = (e: React.ChangeEvent<HTMLInputElement>, field: 'tags' | 'technologies') => {
    const values = e.target.value.split(',').map(item => item.trim()).filter(item => item);
    setFormData(prev => ({
      ...prev,
      [field]: values
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-slate-800 rounded-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-slate-700 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white">
            {project ? 'Projeyi Düzenle' : 'Yeni Proje Ekle'}
          </h2>
          <button onClick={onClose} className="text-slate-400 hover:text-white">
            ✕
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Proje Adı</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Kategori</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              >
                <option value="web">Web</option>
                <option value="mobile">Mobile</option>
                <option value="desktop">Desktop</option>
                <option value="design">Design</option>
                <option value="other">Diğer</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Durum</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              >
                <option value="active">Aktif</option>
                <option value="completed">Tamamlandı</option>
                <option value="maintenance">Bakım</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Müşteri</label>
              <input
                type="text"
                name="client"
                value={formData.client}
                onChange={handleChange}
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Tarih</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Süre</label>
              <input
                type="text"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                placeholder="örn: 3 ay"
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-300 mb-2">Kısa Açıklama</label>
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-300 mb-2">Detaylı Açıklama</label>
              <textarea
                name="longDescription"
                value={formData.longDescription}
                onChange={handleChange}
                rows={4}
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            
            {/* Gelişmiş Görsel Yükleme Bölümü */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-300 mb-4">Proje Görseli</label>
              
              {/* Görsel Önizleme */}
              {imagePreview && (
                <div className="mb-4">
                  <div className="relative w-full h-48 bg-slate-700 rounded-lg overflow-hidden">
                    <Image
                      src={imagePreview}
                      alt="Proje önizleme"
                      fill
                      className="object-cover"
                      onError={() => setImagePreview('')}
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setImagePreview('');
                        setFormData(prev => ({ ...prev, image: '' }));
                      }}
                      className="absolute top-2 right-2 w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              )}

              {/* Görsel Yükleme Seçenekleri */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Dosya Yükleme */}
                <div>
                  <label className="block w-full">
                    <div className="border-2 border-dashed border-slate-600 hover:border-blue-500 rounded-lg p-6 text-center cursor-pointer transition-colors">
                      <div className="text-3xl mb-2">📁</div>
                      <div className="text-sm text-slate-300 mb-1">Dosya Yükle</div>
                      <div className="text-xs text-slate-500">PNG, JPG (Max 5MB)</div>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>
                </div>

                {/* URL'den Screenshot */}
                <div>
                  <button
                    type="button"
                    onClick={() => generateScreenshot(formData.liveUrl)}
                    disabled={!formData.liveUrl || isLoadingScreenshot}
                    className="w-full border-2 border-dashed border-slate-600 hover:border-green-500 disabled:border-slate-700 disabled:cursor-not-allowed rounded-lg p-6 text-center transition-colors"
                  >
                    {isLoadingScreenshot ? (
                      <>
                        <div className="text-3xl mb-2">⏳</div>
                        <div className="text-sm text-slate-300 mb-1">Oluşturuluyor...</div>
                      </>
                    ) : (
                      <>
                        <div className="text-3xl mb-2">📸</div>
                        <div className="text-sm text-slate-300 mb-1">Otomatik Screenshot</div>
                        <div className="text-xs text-slate-500">Canlı URL'den</div>
                      </>
                    )}
                  </button>
                </div>

                {/* Manuel URL */}
                <div>
                  <div className="border-2 border-dashed border-slate-600 rounded-lg p-4">
                    <div className="text-3xl mb-2 text-center">🔗</div>
                    <div className="text-sm text-slate-300 mb-2 text-center">Manuel URL</div>
                    <input
                      type="url"
                      name="image"
                      value={formData.image}
                      onChange={(e) => {
                        handleChange(e);
                        setImagePreview(e.target.value);
                      }}
                      placeholder="https://..."
                      className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white text-xs focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Yardım Metni */}
              <div className="mt-3 text-xs text-slate-500">
                💡 İpucu: Canlı URL girildikten sonra "Otomatik Screenshot" butonuna tıklayarak sitenizin görselini otomatik oluşturabilirsiniz.
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Görüntülenme</label>
              <input
                type="number"
                name="views"
                value={formData.views}
                onChange={handleChange}
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Canlı URL</label>
              <input
                type="url"
                name="liveUrl"
                value={formData.liveUrl}
                onChange={handleChange}
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">GitHub URL</label>
              <input
                type="url"
                name="githubUrl"
                value={formData.githubUrl}
                onChange={handleChange}
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Etiketler (virgülle ayırın)</label>
              <input
                type="text"
                value={formData.tags.join(', ')}
                onChange={(e) => handleArrayChange(e, 'tags')}
                placeholder="örn: E-commerce, Portfolio, Mobile"
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Teknolojiler (virgülle ayırın)</label>
              <input
                type="text"
                value={formData.technologies.join(', ')}
                onChange={(e) => handleArrayChange(e, 'technologies')}
                placeholder="örn: React, Next.js, TypeScript"
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="featured"
                name="featured"
                checked={formData.featured}
                onChange={handleCheckboxChange}
                className="w-4 h-4 text-blue-600 bg-slate-700 border-slate-600 rounded focus:ring-blue-500"
              />
              <label htmlFor="featured" className="ml-2 text-sm font-medium text-slate-300">
                Öne Çıkan Proje
              </label>
            </div>
          </div>
          
          <div className="flex justify-end gap-3 pt-4 border-t border-slate-700">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
            >
              İptal
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              Kaydet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}