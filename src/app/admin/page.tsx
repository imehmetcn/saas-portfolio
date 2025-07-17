"use client";

import React, { useState } from 'react';
import { useAdmin } from '@/contexts/AdminContext';
import Link from 'next/link';
import Sidebar from '@/components/admin/Sidebar';
import Header from '@/components/admin/Header';
import StatsCard from '@/components/admin/StatsCard';
import ProjectModal from '@/components/admin/ProjectModal';
import { Project } from '@/contexts/AdminContext';

export default function AdminDashboard() {
  const { projects, blogPosts, testimonials, services, updateProjects } = useAdmin();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [currentProject, setCurrentProject] = useState<Project | undefined>(undefined);

  const stats = [
    {
      title: 'Projeler',
      count: projects.length,
      color: 'bg-blue-600',
      icon: '�',
      link: '/admin/projects'
    },
    {
      title: 'Blog Yazıları', 
      count: blogPosts.length,
      color: 'bg-green-600',
      icon: '📝',
      link: '/admin/blog'
    },
    {
      title: 'Referanslar',
      count: testimonials.length,
      color: 'bg-purple-600', 
      icon: '⭐',
      link: '/admin/testimonials'
    },
    {
      title: 'Toplam Görüntülenme',
      count: projects.reduce((total, project) => total + project.views, 0),
      color: 'bg-red-600',
      icon: '👁️',
      link: '/admin/analytics'
    }
  ];

  const featuredProjects = projects.filter(p => p.featured).slice(0, 2);

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

  const handleToggleFeatured = (id: number) => {
    const updatedProjects = projects.map(p => 
      p.id === id ? { ...p, featured: !p.featured } : p
    );
    updateProjects(updatedProjects);
  };

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesStatus = selectedStatus === 'all' || project.status === selectedStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-slate-900 text-white flex">
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header 
          title="Proje Yönetimi" 
          description="Portföy projelerinizi buradan yönetebilirsiniz"
          actionButton={{
            label: "+ Yeni Proje",
            onClick: () => {
              setCurrentProject(undefined);
              setShowAddModal(true);
            }
          }}
        />

        {/* Content */}
        <div className="flex-1 p-6 overflow-auto">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <StatsCard 
                key={index}
                title={stat.title}
                count={stat.count}
                color={stat.color}
                icon={stat.icon}
                link={stat.link}
              />
            ))}
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Proje ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 pl-10 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400">
                🔍
              </div>
            </div>
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
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
              className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            >
              <option value="all">Tüm Durumlar</option>
              <option value="active">Aktif</option>
              <option value="completed">Tamamlandı</option>
              <option value="maintenance">Bakım</option>
            </select>
          </div>

          {/* Featured Projects */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <div key={project.id} className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden hover:border-slate-600 transition-all group">
                <div className="relative">
                  <div className="h-48 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 flex items-center justify-center">
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-6xl opacity-80">📦</div>
                    )}
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'completed' ? 'bg-green-500 text-white' : 
                      project.status === 'active' ? 'bg-blue-500 text-white' : 'bg-yellow-500 text-black'
                    }`}>
                      {project.status === 'completed' ? 'Tamamlandı' : 
                       project.status === 'active' ? 'Aktif' : 'Bakım'}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <button 
                      onClick={() => handleToggleFeatured(project.id)}
                      className="text-yellow-400 hover:text-yellow-300 text-xl transition-colors"
                    >
                      ⭐
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <p className="text-slate-400 mb-4 line-clamp-2">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, index) => (
                      <span key={index} className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-xs font-medium">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-slate-400 mb-4">
                    <span className="flex items-center gap-1">
                      <span>👁️</span>
                      {project.views.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <span>📅</span>
                      {new Date(project.date).toLocaleDateString('tr-TR')}
                    </span>
                  </div>
                  
                  <div className="flex gap-2">
                    <button 
                      onClick={() => handleEditProject(project)}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors"
                    >
                      Düzenle
                    </button>
                    <Link href={project.liveUrl} target="_blank" className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-700 transition-colors">
                      👁️
                    </Link>
                    <Link href={project.githubUrl} target="_blank" className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-700 transition-colors">
                      🔗
                    </Link>
                    <Link href={`/admin/analytics?project=${project.id}`} className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-700 transition-colors">
                      📊
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {featuredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📁</div>
              <h3 className="text-xl font-semibold text-slate-300 mb-2">Henüz öne çıkan proje yok</h3>
              <p className="text-slate-400 mb-6">İlk projenizi ekleyerek başlayın</p>
              <button 
                onClick={() => {
                  setCurrentProject(undefined);
                  setShowAddModal(true);
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                + İlk Projeyi Ekle
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