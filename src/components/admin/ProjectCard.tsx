"use client";

import React from 'react';
import Image from 'next/image';
import { Project } from '@/contexts/AdminContext';

interface ProjectCardProps {
  project: Project;
  onEdit: (project: Project) => void;
  onDelete: (id: number) => void;
  onToggleFeatured: (id: number) => void;
}

export default function ProjectCard({ project, onEdit, onDelete, onToggleFeatured }: ProjectCardProps) {
  return (
    <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden hover:border-slate-600 transition-all">
      <div className="relative">
        <div className="h-40 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
          {project.image ? (
            <Image 
              src={project.image} 
              alt={project.title} 
              width={400}
              height={160}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-4xl opacity-80">📦</div>
          )}
        </div>
        <div className="absolute top-3 left-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            project.status === 'completed' ? 'bg-green-500 text-white' : 
            project.status === 'active' ? 'bg-blue-500 text-white' : 'bg-yellow-500 text-black'
          }`}>
            {project.status === 'completed' ? 'Tamamlandı' : 
             project.status === 'active' ? 'Aktif' : 'Bakım'}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <button 
            onClick={() => onToggleFeatured(project.id)}
            className={`text-xl transition-colors ${
              project.featured ? 'text-yellow-400' : 'text-slate-400 hover:text-yellow-400'
            }`}
          >
            ⭐
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2 text-white">{project.title}</h3>
        <p className="text-slate-400 text-sm mb-3 line-clamp-2">{project.description}</p>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span key={index} className="bg-slate-700 text-slate-300 px-2 py-1 rounded text-xs">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="bg-slate-700 text-slate-300 px-2 py-1 rounded text-xs">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
        
        <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
          <span>👁️ {project.views}</span>
          <span>📅 {new Date(project.date).toLocaleDateString('tr-TR')}</span>
        </div>
        
        <div className="flex gap-2">
          <button 
            onClick={() => onEdit(project)}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded text-sm transition-colors"
          >
            Düzenle
          </button>
          <button 
            onClick={() => onDelete(project.id)}
            className="text-red-400 hover:text-red-300 p-2 rounded hover:bg-slate-700 transition-colors"
          >
            🗑️
          </button>
        </div>
      </div>
    </div>
  );
}