"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Calendar, 
  Clock, 
  Tag, 
  Search,
  BookOpen,
  TrendingUp,
  Eye
} from "lucide-react";
import { useAdmin } from "@/contexts/AdminContext";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { blogPosts } = useAdmin();

  const categories = [
    { id: 'all', label: 'Tümü' },
    { id: 'teknoloji', label: 'Teknoloji' },
    { id: 'tasarim', label: 'Tasarım' },
    { id: 'programlama', label: 'Programlama' },
    { id: 'kisisel', label: 'Kişisel' }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const isPublished = post.published; // Sadece yayınlanan yazıları göster
    return matchesCategory && matchesSearch && isPublished;
  });

  const featuredPosts = blogPosts.filter(post => post.published);

  const stats = [
    { number: `${blogPosts.length}+`, label: "Yazı", icon: BookOpen },
    { number: "5K+", label: "Okuyucu", icon: Eye },
    { number: "15+", label: "Kategori", icon: Tag }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <BookOpen size={16} />
            Blog
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Yazılarım
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Teknoloji, tasarım ve geliştirme konularında deneyimlerimi ve öğrendiklerimi paylaşıyorum.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                <stat.icon className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.number}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-8">
              <TrendingUp className="text-blue-600 dark:text-blue-400" size={20} />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Öne Çıkan Yazılar
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.slice(0, 2).map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
                    <div className="relative">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={600}
                        height={300}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Öne Çıkan
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          {formatDate(post.date)}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          {post.readTime}
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye size={14} />
                          {post.views}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Filters and Search */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-12">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Yazılarda ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
                <div className="relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-2 py-1 rounded text-xs font-medium capitalize">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      {formatDate(post.date)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                      <Eye size={12} />
                      {post.views}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">📝</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Yazı bulunamadı
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Arama kriterlerinizi değiştirmeyi deneyin
            </p>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Yeni Yazılardan Haberdar Olun
          </h3>
          <p className="mb-6 opacity-90">
            En son yazılarımı ve teknoloji güncellemelerini e-posta ile alın
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="E-posta adresiniz"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:ring-opacity-50"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Abone Ol
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}