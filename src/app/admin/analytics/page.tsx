"use client";

import React from 'react';
import Image from 'next/image';
import { useAdmin } from '@/contexts/AdminContext';
import Sidebar from '@/components/admin/Sidebar';
import Header from '@/components/admin/Header';

export default function AnalyticsPage() {
  const { projects, blogPosts, testimonials, services } = useAdmin();

  // İstatistikleri hesapla
  const totalViews = projects.reduce((sum, project) => sum + project.views, 0) + 
                    blogPosts.reduce((sum, post) => sum + post.views, 0);
  
  const avgRating = testimonials.length > 0 
    ? testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length 
    : 0;

  const projectsByCategory = projects.reduce((acc, project) => {
    acc[project.category] = (acc[project.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const projectsByStatus = projects.reduce((acc, project) => {
    acc[project.status] = (acc[project.status] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const topProjects = [...projects]
    .sort((a, b) => b.views - a.views)
    .slice(0, 5);

  const topBlogPosts = [...blogPosts]
    .sort((a, b) => b.views - a.views)
    .slice(0, 5);

  const recentTestimonials = [...testimonials]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  const stats = [
    {
      title: 'Toplam Görüntülenme',
      value: totalViews.toLocaleString(),
      icon: '👁️',
      color: 'bg-blue-600'
    },
    {
      title: 'Ortalama Puan',
      value: avgRating.toFixed(1),
      icon: '⭐',
      color: 'bg-yellow-600'
    },
    {
      title: 'Toplam Proje',
      value: projects.length.toString(),
      icon: '📁',
      color: 'bg-green-600'
    },
    {
      title: 'Blog Yazısı',
      value: blogPosts.length.toString(),
      icon: '📝',
      color: 'bg-purple-600'
    },
    {
      title: 'Referans',
      value: testimonials.length.toString(),
      icon: '💬',
      color: 'bg-pink-600'
    },
    {
      title: 'Servis',
      value: services.length.toString(),
      icon: '🛠️',
      color: 'bg-indigo-600'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white flex">
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header 
          title="Analitik" 
          description="Site performansınızı ve istatistiklerinizi görüntüleyin"
        />

        {/* Content */}
        <div className="flex-1 p-6 overflow-auto">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-400 text-sm font-medium">{stat.title}</p>
                    <p className="text-3xl font-bold mt-2 text-white">{stat.value}</p>
                  </div>
                  <div className={`w-14 h-14 ${stat.color} rounded-xl flex items-center justify-center text-2xl`}>
                    {stat.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Proje Kategorileri */}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold mb-4">Proje Kategorileri</h3>
              <div className="space-y-3">
                {Object.entries(projectsByCategory).map(([category, count]) => (
                  <div key={category} className="flex items-center justify-between">
                    <span className="text-slate-300 capitalize">{category}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-slate-700 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full" 
                          style={{ width: `${(count / projects.length) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-white font-medium">{count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Proje Durumları */}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold mb-4">Proje Durumları</h3>
              <div className="space-y-3">
                {Object.entries(projectsByStatus).map(([status, count]) => (
                  <div key={status} className="flex items-center justify-between">
                    <span className="text-slate-300 capitalize">
                      {status === 'completed' ? 'Tamamlandı' : 
                       status === 'active' ? 'Aktif' : 'Bakım'}
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-slate-700 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${
                            status === 'completed' ? 'bg-green-500' : 
                            status === 'active' ? 'bg-blue-500' : 'bg-yellow-500'
                          }`}
                          style={{ width: `${(count / projects.length) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-white font-medium">{count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* En Çok Görüntülenen Projeler */}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold mb-4">En Çok Görüntülenen Projeler</h3>
              <div className="space-y-3">
                {topProjects.map((project, index) => (
                  <div key={project.id} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-medium">{project.title}</p>
                      <p className="text-slate-400 text-sm">{project.views.toLocaleString()} görüntülenme</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* En Çok Okunan Blog Yazıları */}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <h3 className="text-xl font-bold mb-4">En Çok Okunan Blog Yazıları</h3>
              <div className="space-y-3">
                {topBlogPosts.map((post, index) => (
                  <div key={post.id} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-medium">{post.title}</p>
                      <p className="text-slate-400 text-sm">{post.views.toLocaleString()} görüntülenme</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Son Referanslar */}
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 lg:col-span-2">
              <h3 className="text-xl font-bold mb-4">Son Referanslar</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {recentTestimonials.map((testimonial) => (
                  <div key={testimonial.id} className="bg-slate-700 rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                        {testimonial.image ? (
                          <Image 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            width={40}
                            height={40}
                            className="w-full h-full rounded-full object-cover"
                          />
                        ) : (
                          <span className="text-white font-bold">
                            {testimonial.name.charAt(0)}
                          </span>
                        )}
                      </div>
                      <div>
                        <p className="text-white font-medium">{testimonial.name}</p>
                        <p className="text-slate-400 text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 mb-2">
                      {Array.from({ length: 5 }, (_, i) => (
                        <span key={i} className={`text-sm ${i < testimonial.rating ? 'text-yellow-400' : 'text-slate-600'}`}>
                          ⭐
                        </span>
                      ))}
                    </div>
                    <p className="text-slate-300 text-sm line-clamp-3">{testimonial.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}