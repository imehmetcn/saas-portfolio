"use client";

import React, { useState } from 'react';
import { useAdmin } from '@/contexts/AdminContext';
import Sidebar from '@/components/admin/Sidebar';
import Header from '@/components/admin/Header';
import ProjectCard from '@/components/admin/ProjectCard';
import ProjectModal from '@/components/admin/ProjectModal';
import { Project } from '@/contexts/AdminContext';

export default function ProjectsPage() {
  const { projects, updateProjects } = useAdmin();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [currentProject, setCurrentProject] = useState<Project | undefined>(undefined);

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesStatus = selectedStatus === 'all' || project.status === selectedStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const handleSaveProject = (project: Project) => {
    if (currentProject) {
      // Mevcut projeyi güncelle
      const updatedProjects = projects.map(p => 
        p.id === project.id ? project : p
      );
      updateProjects(updatedProjects);
    } else {
      // Yeni proje ekle
      updateProjects([...projects, project]);
    }
    setShowAddModal(false);
    setCurrentProject(undefined);
  };

  const handleEditProject = (project: Project) => {
    setCurrentProject(project);
    setShowAddModal(true);
  };

  const handleDeleteProject = (id: number) => {
    if (confirm('Bu projeyi silmek istediğinizden emin misiniz?')) {
      const updatedProjects = projects.filter(p => p.id !== id);
      updateProjects(updatedProjects);
    }
  };

  const handleToggleFeatured = (id: number) => {
    const updatedProjects = projects.map(p => 
      p.id === id ? { ...p, featured: !p.featured } : p
    );
    updateProjects(updatedProjects);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white flex">
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header 
          title="Projeler" 
          description="Tüm projelerinizi yönetin"
          actionButton={{
            label: "+ Yeni Proje Ekle",
            onClick: () => {
              setCurrentProject(undefined);
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
                placeholder="Proje ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 pl-10 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400">🔍</div>
            </div>
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
            >
              <option value="all">Tüm Kategoriler</option>
              <option value="web">Web</option>
              <option value="mobile">Mobile</option>
              <option value="desktop">Desktop</option>
              <option value="design">Design</option>
              <option value="other">Diğer</option>
            </select>
            <select 
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
            >
              <option value="all">Tüm Durumlar</option>
              <option value="active">Aktif</option>
              <option value="completed">Tamamlandı</option>
              <option value="maintenance">Bakım</option>
            </select>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard 
                key={project.id}
                project={project}
                onEdit={handleEditProject}
                onDelete={handleDeleteProject}
                onToggleFeatured={handleToggleFeatured}
              />
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📁</div>
              <h3 className="text-xl font-semibold text-slate-300 mb-2">Proje bulunamadı</h3>
              <p className="text-slate-400 mb-6">Arama kriterlerinizi değiştirin veya yeni proje ekleyin</p>
              <button 
                onClick={() => {
                  setCurrentProject(undefined);
                  setShowAddModal(true);
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                + Yeni Proje Ekle
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal 
        isOpen={showAddModal}
        onClose={() => {
          setShowAddModal(false);
          setCurrentProject(undefined);
        }}
        onSave={handleSaveProject}
        project={currentProject}
      />
    </div>
  );
}