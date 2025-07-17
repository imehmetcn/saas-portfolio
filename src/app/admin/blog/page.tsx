"use client";

import React, { useState } from 'react';
import { useAdmin } from '@/contexts/AdminContext';
import Sidebar from '@/components/admin/Sidebar';
import Header from '@/components/admin/Header';
import BlogPostCard from '@/components/admin/BlogPostCard';
import BlogPostModal from '@/components/admin/BlogPostModal';
import { BlogPost } from '@/contexts/AdminContext';

export default function BlogPage() {
  const { blogPosts, updateBlogPosts } = useAdmin();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [currentPost, setCurrentPost] = useState<BlogPost | undefined>(undefined);

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesStatus = selectedStatus === 'all' || 
                         (selectedStatus === 'published' && post.published) || 
                         (selectedStatus === 'draft' && !post.published);
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const handleSavePost = (post: BlogPost) => {
    if (currentPost) {
      // Mevcut yazıyı güncelle
      const updatedPosts = blogPosts.map(p => 
        p.id === post.id ? post : p
      );
      updateBlogPosts(updatedPosts);
    } else {
      // Yeni yazı ekle
      updateBlogPosts([...blogPosts, post]);
    }
    setShowAddModal(false);
    setCurrentPost(undefined);
  };

  const handleEditPost = (post: BlogPost) => {
    setCurrentPost(post);
    setShowAddModal(true);
  };

  const handleDeletePost = (id: number) => {
    if (confirm('Bu blog yazısını silmek istediğinizden emin misiniz?')) {
      const updatedPosts = blogPosts.filter(p => p.id !== id);
      updateBlogPosts(updatedPosts);
    }
  };

  const handleTogglePublished = (id: number) => {
    const updatedPosts = blogPosts.map(p => 
      p.id === id ? { ...p, published: !p.published } : p
    );
    updateBlogPosts(updatedPosts);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white flex">
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header 
          title="Blog Yazıları" 
          description="Blog içeriklerinizi yönetin"
          actionButton={{
            label: "+ Yeni Yazı Ekle",
            onClick: () => {
              setCurrentPost(undefined);
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
                placeholder="Blog yazısı ara..."
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
              <option value="teknoloji">Teknoloji</option>
              <option value="tasarım">Tasarım</option>
              <option value="geliştirme">Geliştirme</option>
              <option value="kariyer">Kariyer</option>
              <option value="diğer">Diğer</option>
            </select>
            <select 
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
            >
              <option value="all">Tüm Durumlar</option>
              <option value="published">Yayında</option>
              <option value="draft">Taslak</option>
            </select>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <BlogPostCard 
                key={post.id}
                post={post}
                onEdit={handleEditPost}
                onDelete={handleDeletePost}
                onTogglePublished={handleTogglePublished}
              />
            ))}
          </div>

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-xl font-semibold text-slate-300 mb-2">Blog yazısı bulunamadı</h3>
              <p className="text-slate-400 mb-6">Arama kriterlerinizi değiştirin veya yeni yazı ekleyin</p>
              <button 
                onClick={() => {
                  setCurrentPost(undefined);
                  setShowAddModal(true);
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                + Yeni Blog Yazısı Ekle
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Blog Post Modal */}
      <BlogPostModal 
        isOpen={showAddModal}
        onClose={() => {
          setShowAddModal(false);
          setCurrentPost(undefined);
        }}
        onSave={handleSavePost}
        post={currentPost}
      />
    </div>
  );
}