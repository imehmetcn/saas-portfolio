"use client";

import React from 'react';
import { BlogPost } from '@/contexts/AdminContext';

interface BlogPostCardProps {
  post: BlogPost;
  onEdit: (post: BlogPost) => void;
  onDelete: (id: number) => void;
  onTogglePublished: (id: number) => void;
}

export default function BlogPostCard({ post, onEdit, onDelete, onTogglePublished }: BlogPostCardProps) {
  return (
    <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden hover:border-slate-600 transition-all">
      <div className="relative">
        <div className="h-40 bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center">
          {post.image ? (
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-4xl opacity-80">📝</div>
          )}
        </div>
        <div className="absolute top-3 left-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            post.published ? 'bg-green-500 text-white' : 'bg-yellow-500 text-black'
          }`}>
            {post.published ? 'Yayında' : 'Taslak'}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <button 
            onClick={() => onTogglePublished(post.id)}
            className={`text-xl transition-colors ${
              post.published ? 'text-green-400' : 'text-slate-400 hover:text-green-400'
            }`}
          >
            {post.published ? '✓' : '✎'}
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2 text-white">{post.title}</h3>
        <p className="text-slate-400 text-sm mb-3 line-clamp-2">{post.excerpt}</p>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {post.tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="bg-slate-700 text-slate-300 px-2 py-1 rounded text-xs">
              {tag}
            </span>
          ))}
          {post.tags.length > 3 && (
            <span className="bg-slate-700 text-slate-300 px-2 py-1 rounded text-xs">
              +{post.tags.length - 3}
            </span>
          )}
        </div>
        
        <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
          <span>👁️ {post.views}</span>
          <span>📅 {new Date(post.date).toLocaleDateString('tr-TR')}</span>
        </div>
        
        <div className="flex gap-2">
          <button 
            onClick={() => onEdit(post)}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded text-sm transition-colors"
          >
            Düzenle
          </button>
          <button 
            onClick={() => onDelete(post.id)}
            className="text-red-400 hover:text-red-300 p-2 rounded hover:bg-slate-700 transition-colors"
          >
            🗑️
          </button>
        </div>
      </div>
    </div>
  );
}