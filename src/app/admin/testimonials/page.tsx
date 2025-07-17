"use client";

import React, { useState } from 'react';
import { useAdmin } from '@/contexts/AdminContext';
import Sidebar from '@/components/admin/Sidebar';
import Header from '@/components/admin/Header';
import TestimonialCard from '@/components/admin/TestimonialCard';
import TestimonialModal from '@/components/admin/TestimonialModal';
import { Testimonial } from '@/contexts/AdminContext';

export default function TestimonialsPage() {
  const { testimonials, updateTestimonials } = useAdmin();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRating, setSelectedRating] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState<Testimonial | undefined>(undefined);

  const filteredTestimonials = testimonials.filter(testimonial => {
    const matchesSearch = testimonial.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         testimonial.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         testimonial.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRating = selectedRating === 'all' || testimonial.rating.toString() === selectedRating;
    const matchesStatus = selectedStatus === 'all' || 
                         (selectedStatus === 'featured' && testimonial.featured) || 
                         (selectedStatus === 'normal' && !testimonial.featured);
    
    return matchesSearch && matchesRating && matchesStatus;
  });

  const handleSaveTestimonial = (testimonial: Testimonial) => {
    if (currentTestimonial) {
      // Mevcut referansı güncelle
      const updatedTestimonials = testimonials.map(t => 
        t.id === testimonial.id ? testimonial : t
      );
      updateTestimonials(updatedTestimonials);
    } else {
      // Yeni referans ekle
      updateTestimonials([...testimonials, testimonial]);
    }
    setShowAddModal(false);
    setCurrentTestimonial(undefined);
  };

  const handleEditTestimonial = (testimonial: Testimonial) => {
    setCurrentTestimonial(testimonial);
    setShowAddModal(true);
  };

  const handleDeleteTestimonial = (id: number) => {
    if (confirm('Bu referansı silmek istediğinizden emin misiniz?')) {
      const updatedTestimonials = testimonials.filter(t => t.id !== id);
      updateTestimonials(updatedTestimonials);
    }
  };

  const handleToggleFeatured = (id: number) => {
    const updatedTestimonials = testimonials.map(t => 
      t.id === id ? { ...t, featured: !t.featured } : t
    );
    updateTestimonials(updatedTestimonials);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white flex">
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header 
          title="Referanslar" 
          description="Müşteri referanslarınızı yönetin"
          actionButton={{
            label: "+ Yeni Referans Ekle",
            onClick: () => {
              setCurrentTestimonial(undefined);
              setShowAddModal(true);
            }
          }}
        />

        {/* Content */}
        <div className="flex-1 p-6 overflow-auto">
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Referans ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 pl-10 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400">🔍</div>
            </div>
            <select 
              value={selectedRating}
              onChange={(e) => setSelectedRating(e.target.value)}
              className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
            >
              <option value="all">Tüm Puanlar</option>
              <option value="5">5 Yıldız</option>
              <option value="4">4 Yıldız</option>
              <option value="3">3 Yıldız</option>
              <option value="2">2 Yıldız</option>
              <option value="1">1 Yıldız</option>
            </select>
            <select 
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
            >
              <option value="all">Tüm Durumlar</option>
              <option value="featured">Öne Çıkan</option>
              <option value="normal">Normal</option>
            </select>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTestimonials.map((testimonial) => (
              <TestimonialCard 
                key={testimonial.id}
                testimonial={testimonial}
                onEdit={handleEditTestimonial}
                onDelete={handleDeleteTestimonial}
                onToggleFeatured={handleToggleFeatured}
              />
            ))}
          </div>

          {/* Empty State */}
          {filteredTestimonials.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold text-slate-300 mb-2">Referans bulunamadı</h3>
              <p className="text-slate-400 mb-6">Arama kriterlerinizi değiştirin veya yeni referans ekleyin</p>
              <button 
                onClick={() => {
                  setCurrentTestimonial(undefined);
                  setShowAddModal(true);
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                + Yeni Referans Ekle
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Testimonial Modal */}
      <TestimonialModal 
        isOpen={showAddModal}
        onClose={() => {
          setShowAddModal(false);
          setCurrentTestimonial(undefined);
        }}
        onSave={handleSaveTestimonial}
        testimonial={currentTestimonial}
      />
    </div>
  );
}