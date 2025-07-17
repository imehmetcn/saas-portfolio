"use client";

import React, { useState, useEffect } from 'react';
import { BlogPost } from '@/contexts/AdminContext';

interface BlogPostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (post: BlogPost) => void;
  post?: BlogPost;
}

export default function BlogPostModal({ isOpen, onClose, onSave, post }: BlogPostModalProps) {
  const [formData, setFormData] = useState<BlogPost>({
    id: 0,
    title: '',
    excerpt: '',
    content: '',
    image: '',
    category: 'teknoloji',
    tags: [],
    author: '',
    date: new Date().toISOString().split('T')[0],
    readTime: '',
    published: true,
    views: 0
  });

  useEffect(() => {
    if (post) {
      setFormData(post);
    } else {
      // Yeni blog yazısı için ID oluştur
      setFormData(prev => ({
        ...prev,
        id: Date.now(),
        date: new Date().toISOString().split('T')[0]
      }));
    }
  }, [post, isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleArrayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const values = e.target.value.split(',').map(item => item.trim()).filter(item => item);
    setFormData(prev => ({
      ...prev,
      tags: values
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
            {post ? 'Blog Yazısını Düzenle' : 'Yeni Blog Yazısı Ekle'}
          </h2>
          <button onClick={onClose} className="text-slate-400 hover:text-white">
            ✕
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-300 mb-2">Başlık</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-300 mb-2">Özet</label>
              <input
                type="text"
                name="excerpt"
                value={formData.excerpt}
                onChange={handleChange}
                required
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-300 mb-2">İçerik</label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                rows={8}
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
                <option value="teknoloji">Teknoloji</option>
                <option value="tasarım">Tasarım</option>
                <option value="geliştirme">Geliştirme</option>
                <option value="kariyer">Kariyer</option>
                <option value="diğer">Diğer</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Yazar</label>
              <input
                type="text"
                name="author"
                value={formData.author}
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
              <label className="block text-sm font-medium text-slate-300 mb-2">Okuma Süresi</label>
              <input
                type="text"
                name="readTime"
                value={formData.readTime}
                onChange={handleChange}
                placeholder="örn: 5 dk"
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Görsel URL</label>
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              />
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
            
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-300 mb-2">Etiketler (virgülle ayırın)</label>
              <input
                type="text"
                value={formData.tags.join(', ')}
                onChange={handleArrayChange}
                placeholder="örn: React, Next.js, TypeScript"
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="published"
                name="published"
                checked={formData.published}
                onChange={handleCheckboxChange}
                className="w-4 h-4 text-blue-600 bg-slate-700 border-slate-600 rounded focus:ring-blue-500"
              />
              <label htmlFor="published" className="ml-2 text-sm font-medium text-slate-300">
                Yayınlandı
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