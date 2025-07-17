"use client";

import React from 'react';
import { Testimonial } from '@/contexts/AdminContext';

interface TestimonialCardProps {
  testimonial: Testimonial;
  onEdit: (testimonial: Testimonial) => void;
  onDelete: (id: number) => void;
  onToggleFeatured: (id: number) => void;
}

export default function TestimonialCard({ testimonial, onEdit, onDelete, onToggleFeatured }: TestimonialCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-slate-600'}`}>
        ⭐
      </span>
    ));
  };

  return (
    <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden hover:border-slate-600 transition-all">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
              {testimonial.image ? (
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <span className="text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </span>
              )}
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
              <p className="text-slate-400 text-sm">
                {testimonial.position} {testimonial.company && `@ ${testimonial.company}`}
              </p>
            </div>
          </div>
          <button 
            onClick={() => onToggleFeatured(testimonial.id)}
            className={`text-xl transition-colors ${
              testimonial.featured ? 'text-yellow-400' : 'text-slate-400 hover:text-yellow-400'
            }`}
          >
            ⭐
          </button>
        </div>
        
        <div className="mb-4">
          <div className="flex items-center gap-1 mb-2">
            {renderStars(testimonial.rating)}
          </div>
          <p className="text-slate-300 text-sm line-clamp-3">{testimonial.content}</p>
        </div>
        
        <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
          <span>📅 {new Date(testimonial.date).toLocaleDateString('tr-TR')}</span>
          {testimonial.featured && (
            <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-medium">
              Öne Çıkan
            </span>
          )}
        </div>
        
        <div className="flex gap-2">
          <button 
            onClick={() => onEdit(testimonial)}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded text-sm transition-colors"
          >
            Düzenle
          </button>
          <button 
            onClick={() => onDelete(testimonial.id)}
            className="text-red-400 hover:text-red-300 p-2 rounded hover:bg-slate-700 transition-colors"
          >
            🗑️
          </button>
        </div>
      </div>
    </div>
  );
}