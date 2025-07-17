"use client";

import React, { useState } from 'react';
import { useAdmin } from '@/contexts/AdminContext';
import Sidebar from '@/components/admin/Sidebar';
import Header from '@/components/admin/Header';
import ServiceCard from '@/components/admin/ServiceCard';
import ServiceModal from '@/components/admin/ServiceModal';
import { Service } from '@/contexts/AdminContext';

export default function ServicesPage() {
  const { services, updateServices } = useAdmin();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIcon, setSelectedIcon] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [currentService, setCurrentService] = useState<Service | undefined>(undefined);

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIcon = selectedIcon === 'all' || service.icon === selectedIcon;
    const matchesStatus = selectedStatus === 'all' || 
                         (selectedStatus === 'featured' && service.featured) || 
                         (selectedStatus === 'normal' && !service.featured);
    
    return matchesSearch && matchesIcon && matchesStatus;
  });

  const handleSaveService = (service: Service) => {
    if (currentService) {
      // Mevcut servisi güncelle
      const updatedServices = services.map(s => 
        s.id === service.id ? service : s
      );
      updateServices(updatedServices);
    } else {
      // Yeni servis ekle
      updateServices([...services, service]);
    }
    setShowAddModal(false);
    setCurrentService(undefined);
  };

  const handleEditService = (service: Service) => {
    setCurrentService(service);
    setShowAddModal(true);
  };

  const handleDeleteService = (id: number) => {
    if (confirm('Bu servisi silmek istediğinizden emin misiniz?')) {
      const updatedServices = services.filter(s => s.id !== id);
      updateServices(updatedServices);
    }
  };

  const handleToggleFeatured = (id: number) => {
    const updatedServices = services.map(s => 
      s.id === id ? { ...s, featured: !s.featured } : s
    );
    updateServices(updatedServices);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white flex">
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header 
          title="Servisler" 
          description="Sunduğunuz hizmetleri yönetin"
          actionButton={{
            label: "+ Yeni Servis Ekle",
            onClick: () => {
              setCurrentService(undefined);
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
                placeholder="Servis ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 pl-10 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400">🔍</div>
            </div>
            <select 
              value={selectedIcon}
              onChange={(e) => setSelectedIcon(e.target.value)}
              className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
            >
              <option value="all">Tüm Kategoriler</option>
              <option value="globe">🌐 Web</option>
              <option value="mobile">📱 Mobile</option>
              <option value="design">🎨 Tasarım</option>
              <option value="code">💻 Kod</option>
              <option value="analytics">📊 Analitik</option>
              <option value="seo">🔍 SEO</option>
              <option value="consulting">💡 Danışmanlık</option>
              <option value="support">🛠️ Destek</option>
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

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <ServiceCard 
                key={service.id}
                service={service}
                onEdit={handleEditService}
                onDelete={handleDeleteService}
                onToggleFeatured={handleToggleFeatured}
              />
            ))}
          </div>

          {/* Empty State */}
          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🛠️</div>
              <h3 className="text-xl font-semibold text-slate-300 mb-2">Servis bulunamadı</h3>
              <p className="text-slate-400 mb-6">Arama kriterlerinizi değiştirin veya yeni servis ekleyin</p>
              <button 
                onClick={() => {
                  setCurrentService(undefined);
                  setShowAddModal(true);
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                + Yeni Servis Ekle
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Service Modal */}
      <ServiceModal 
        isOpen={showAddModal}
        onClose={() => {
          setShowAddModal(false);
          setCurrentService(undefined);
        }}
        onSave={handleSaveService}
        service={currentService}
      />
    </div>
  );
}