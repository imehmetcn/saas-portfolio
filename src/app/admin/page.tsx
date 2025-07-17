"use client";

import React, { useState } from 'react';
import { useAdmin } from '@/contexts/AdminContext';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Sidebar from '@/components/admin/Sidebar';
import Header from '@/components/admin/Header';
import StatsCard from '@/components/admin/StatsCard';
import ProjectModal from '@/components/admin/ProjectModal';
import { Project } from '@/contexts/AdminContext';
import { 
  TrendingUp, 
  Users, 
  Eye, 
  Calendar,
  ArrowUpRight,
  Activity,
  Clock,
  Star,
  MessageSquare,
  Zap,
  Menu,
  X
} from 'lucide-react';

export default function AdminDashboard() {
  const { projects, blogPosts, testimonials, updateProjects } = useAdmin();
  const [showAddModal, setShowAddModal] = useState(false);
  const [currentProject, setCurrentProject] = useState<Project | undefined>(undefined);

  // Enhanced stats with better calculations
  const totalViews = projects.reduce((total, project) => total + project.views, 0);
  const completedProjects = projects.filter(p => p.status === 'completed').length;
  const activeProjects = projects.filter(p => p.status === 'active').length;
  const featuredProjects = projects.filter(p => p.featured);
  const recentProjects = projects.slice(0, 3);

  const stats = [
    {
      title: 'Toplam Proje',
      count: projects.length,
      change: '+12%',
      changeType: 'positive' as const,
      icon: TrendingUp,
      color: 'from-blue-500 to-blue-600',
      link: '/admin/projects'
    },
    {
      title: 'Aktif Projeler',
      count: activeProjects,
      change: '+5%',
      changeType: 'positive' as const,
      icon: Activity,
      color: 'from-green-500 to-green-600',
      link: '/admin/projects'
    },
    {
      title: 'Toplam Görüntülenme',
      count: totalViews,
      change: '+23%',
      changeType: 'positive' as const,
      icon: Eye,
      color: 'from-purple-500 to-purple-600',
      link: '/admin/analytics'
    },
    {
      title: 'Blog Yazıları',
      count: blogPosts.length,
      change: '+8%',
      changeType: 'positive' as const,
      icon: MessageSquare,
      color: 'from-orange-500 to-orange-600',
      link: '/admin/blog'
    }
  ];

  const quickActions = [
    {
      title: 'Yeni Proje Ekle',
      description: 'Portföyünüze yeni bir proje ekleyin',
      icon: Zap,
      color: 'from-blue-500 to-purple-600',
      action: () => {
        setCurrentProject(undefined);
        setShowAddModal(true);
      }
    },
    {
      title: 'Blog Yazısı Yaz',
      description: 'Yeni bir blog yazısı oluşturun',
      icon: MessageSquare,
      color: 'from-green-500 to-teal-600',
      action: () => window.location.href = '/admin/blog'
    },
    {
      title: 'Analitikleri Görüntüle',
      description: 'Detaylı istatistikleri inceleyin',
      icon: TrendingUp,
      color: 'from-orange-500 to-red-600',
      action: () => window.location.href = '/admin/analytics'
    }
  ];

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



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex">
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-0 ml-0">
        {/* Enhanced Header */}
        <motion.div 
          className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-xl border-b border-slate-700/50 p-4 md:p-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Dashboard
              </h1>
              <p className="text-slate-400 mt-1 text-sm md:text-base">Hoş geldiniz! İşte portföyünüzün genel durumu</p>
              <div className="flex items-center gap-4 mt-2 text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  Sistem Aktif
                </span>
                <span>Son güncelleme: {new Date().toLocaleDateString('tr-TR')}</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.button
                onClick={() => window.location.href = '/admin/analytics'}
                className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 px-4 py-2 md:px-6 md:py-3 rounded-xl text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <TrendingUp size={16} />
                Analitik
              </motion.button>
              <motion.button
                onClick={() => {
                  setCurrentProject(undefined);
                  setShowAddModal(true);
                }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-4 py-2 md:px-6 md:py-3 rounded-xl text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Zap size={16} />
                Yeni Proje
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <div className="flex-1 p-4 md:p-6 lg:p-8 overflow-auto bg-gradient-to-br from-slate-900/50 to-slate-800/50 pt-16 lg:pt-6">
          {/* Enhanced Welcome Card */}
          <motion.div
            className="relative bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-8 mb-8 shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl flex items-center justify-center shadow-2xl"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-3xl">👋</span>
                </motion.div>
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                    Hoş geldin, Mehmet Can!
                  </h2>
                  <p className="text-blue-200/80 text-base lg:text-lg mb-2">
                    Bugün portföyünü yönetmeye hazır mısın? İşte son durum...
                  </p>
                  <div className="flex items-center gap-4 text-sm text-blue-300/60">
                    <span className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      Sistem Aktif
                    </span>
                    <span>•</span>
                    <span>Son güncelleme: Bugün</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <motion.button
                  onClick={() => window.location.href = '/'}
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Eye size={16} />
                  Siteyi Görüntüle
                </motion.button>
                <motion.button
                  onClick={() => window.location.href = '/admin/analytics'}
                  className="bg-gradient-to-r from-green-500/20 to-teal-500/20 hover:from-green-500/30 hover:to-teal-500/30 backdrop-blur-sm border border-green-400/30 text-green-300 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <TrendingUp size={16} />
                  Performans
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Stats Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <Link href={stat.link}>
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-xl border border-slate-700/50 p-6 rounded-2xl hover:border-slate-600/50 transition-all duration-300 cursor-pointer group shadow-lg hover:shadow-xl">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <stat.icon size={20} className="text-white" />
                      </div>
                      <div className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${
                        stat.changeType === 'positive' ? 'text-green-400 bg-green-400/10' : 'text-red-400 bg-red-400/10'
                      }`}>
                        <ArrowUpRight size={12} />
                        {stat.change}
                      </div>
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm font-medium mb-1">{stat.title}</p>
                      <p className="text-3xl font-bold text-white">{stat.count.toLocaleString()}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Quick Actions */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Zap size={20} className="text-blue-400" />
                Hızlı İşlemler
              </h2>
              <div className="text-sm text-slate-400">
                Son kullanım: {new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
              {quickActions.map((action, index) => (
                <motion.div
                  key={index}
                  className="relative bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-xl border border-slate-700/50 p-6 rounded-2xl hover:border-slate-600/50 transition-all duration-300 cursor-pointer group shadow-lg hover:shadow-xl overflow-hidden"
                  onClick={action.action}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:20px_20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <motion.div 
                      className={`w-14 h-14 bg-gradient-to-r ${action.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <action.icon size={22} className="text-white" />
                    </motion.div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                      {action.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{action.description}</p>
                    
                    {/* Hover Arrow */}
                    <motion.div
                      className="absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ArrowUpRight size={14} className="text-white" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Recent Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Clock size={20} className="text-purple-400" />
                Son Projeler
              </h2>
              <Link 
                href="/admin/projects"
                className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-1 transition-colors"
              >
                Tümünü Gör
                <ArrowUpRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {recentProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden hover:border-slate-600/50 transition-all duration-300 group shadow-lg hover:shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="relative">
                    <div className="h-32 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={400}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-4xl opacity-80">📦</div>
                      )}
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className={`px-2 py-1 rounded-lg text-xs font-medium backdrop-blur-sm ${
                        project.status === 'completed' ? 'bg-green-500/80 text-white' :
                        project.status === 'active' ? 'bg-blue-500/80 text-white' : 'bg-yellow-500/80 text-black'
                      }`}>
                        {project.status === 'completed' ? 'Tamamlandı' :
                          project.status === 'active' ? 'Aktif' : 'Bakım'}
                      </span>
                    </div>
                    {project.featured && (
                      <div className="absolute top-3 right-3">
                        <Star size={16} className="text-yellow-400 fill-current" />
                      </div>
                    )}
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-3 line-clamp-2">{project.description}</p>

                    <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Eye size={12} />
                        {project.views.toLocaleString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {new Date(project.date).toLocaleDateString('tr-TR')}
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEditProject(project)}
                        className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-2 px-3 rounded-lg text-xs font-medium transition-all duration-300"
                      >
                        Düzenle
                      </button>
                      <Link 
                        href={project.liveUrl} 
                        target="_blank" 
                        className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-600/50 transition-all duration-300"
                      >
                        <Eye size={14} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Empty State */}
            {recentProjects.length === 0 && (
              <motion.div 
                className="text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="text-6xl mb-4">📁</div>
                <h3 className="text-xl font-semibold text-slate-300 mb-2">Henüz proje yok</h3>
                <p className="text-slate-400 mb-6">İlk projenizi ekleyerek başlayın</p>
                <motion.button
                  onClick={() => {
                    setCurrentProject(undefined);
                    setShowAddModal(true);
                  }}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  + İlk Projeyi Ekle
                </motion.button>
              </motion.div>
            )}
          </motion.div>
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