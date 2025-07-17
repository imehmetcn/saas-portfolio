"use client";

import React from 'react';
import { Service } from '@/contexts/AdminContext';

interface ServiceCardProps {
  service: Service;
  onEdit: (service: Service) => void;
  onDelete: (id: number) => void;
  onToggleFeatured: (id: number) => void;
}

export default function ServiceCard({ service, onEdit, onDelete, onToggleFeatured }: ServiceCardProps) {
  const getIconEmoji = (icon: string) => {
    const iconMap: { [key: string]: string } = {
      globe: '🌐',
      mobile: '📱',
      design: '🎨',
      code: '💻',
      analytics: '📊',
      seo: '🔍',
      consulting: '💡',
      support: '🛠️'
    };
    return iconMap[icon] || '🌐';
  };

  return (
    <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden hover:border-slate-600 transition-all">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl">
              {getIconEmoji(service.icon)}
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">{service.title}</h3>
              {service.duration && (
                <p className="text-slate-400 text-sm">⏱️ {service.duration}</p>
              )}
            </div>
          </div>
          <button 
            onClick={() => onToggleFeatured(service.id)}
            className={`text-xl transition-colors ${
              service.featured ? 'text-yellow-400' : 'text-slate-400 hover:text-yellow-400'
            }`}
          >
            ⭐
          </button>
        </div>
        
        <p className="text-slate-300 text-sm mb-4 line-clamp-2">{service.description}</p>
        
        {service.features.length > 0 && (
          <div className="mb-4">
            <h4 className="text-slate-300 text-sm font-medium mb-2">Özellikler:</h4>
            <div className="flex flex-wrap gap-1">
              {service.features.slice(0, 3).map((feature, index) => (
                <span key={index} className="bg-slate-700 text-slate-300 px-2 py-1 rounded text-xs">
                  {feature}
                </span>
              ))}
              {service.features.length > 3 && (
                <span className="bg-slate-700 text-slate-300 px-2 py-1 rounded text-xs">
                  +{service.features.length - 3}
                </span>
              )}
            </div>
          </div>
        )}
        
        {service.price && (
          <div className="mb-4">
            <p className="text-green-400 font-medium text-sm">💰 {service.price}</p>
          </div>
        )}
        
        {service.featured && (
          <div className="mb-4">
            <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-medium">
              Öne Çıkan Servis
            </span>
          </div>
        )}
        
        <div className="flex gap-2">
          <button 
            onClick={() => onEdit(service)}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded text-sm transition-colors"
          >
            Düzenle
          </button>
          <button 
            onClick={() => onDelete(service.id)}
            className="text-red-400 hover:text-red-300 p-2 rounded hover:bg-slate-700 transition-colors"
          >
            🗑️
          </button>
        </div>
      </div>
    </div>
  );
}