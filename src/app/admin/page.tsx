"use client";

import { useState, useEffect } from "react";
import { 
  BarChart3, 
  Users, 
  FileText, 
  MessageSquare, 
  Settings,
  Eye,
  TrendingUp,
  Calendar,
  Star,
  Activity
} from "lucide-react";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalProjects: 0,
    totalMessages: 0,
    totalBlogPosts: 0,
    totalTestimonials: 0,
    monthlyViews: 0,
    conversionRate: 0
  });

  const [recentMessages, setRecentMessages] = useState([]);
  const [recentActivity, setRecentActivity] = useState([]);

  useEffect(() => {
    // İstatistikleri yükle
    const projects = JSON.parse(localStorage.getItem("portfolioData") || "[]");
    const messages = JSON.parse(localStorage.getItem("contactMessages") || "[]");
    const blogPosts = JSON.parse(localStorage.getItem("blogData") || "[]");
    const testimonials = JSON.parse(localStorage.getItem("testimonialsData") || "[]");

    setStats({
      totalProjects: projects.length,
      totalMessages: messages.length,
      totalBlogPosts: blogPosts.length,
      totalTestimonials: testimonials.length,
      monthlyViews: 12500,
      conversionRate: 3.2
    });

    setRecentMessages(messages.slice(0, 5));

    // Son aktiviteleri oluştur
    const activities = [
      { id: 1, type: "message", text: "Yeni mesaj alındı", time: "2 saat önce" },
      { id: 2, type: "project", text: "Proje güncellendi", time: "5 saat önce" },
      { id: 3, type: "blog", text: "Yeni blog yazısı yayınlandı", time: "1 gün önce" },
      { id: 4, type: "testimonial", text: "Yeni testimonial eklendi", time: "2 gün önce" }
    ];
    setRecentActivity(activities);
  }, []);

  const dashboardCards = [
    {
      title: "Toplam Proje",
      value: stats.totalProjects,
      icon: FileText,
      color: "bg-blue-500",
      change: "+2 bu ay"
    },
    {
      title: "Mesajlar",
      value: stats.totalMessages,
      icon: MessageSquare,
      color: "bg-green-500",
      change: "+5 bu hafta"
    },
    {
      title: "Blog Yazıları",
      value: stats.totalBlogPosts,
      icon: FileText,
      color: "bg-purple-500",
      change: "+1 bu ay"
    },
    {
      title: "Testimonials",
      value: stats.totalTestimonials,
      icon: Star,
      color: "bg-yellow-500",
      change: "+3 bu ay"
    },
    {
      title: "Aylık Görüntüleme",
      value: stats.monthlyViews.toLocaleString(),
      icon: Eye,
      color: "bg-indigo-500",
      change: "+15% bu ay"
    },
    {
      title: "Dönüşüm Oranı",
      value: `${stats.conversionRate}%`,
      icon: TrendingUp,
      color: "bg-red-500",
      change: "+0.5% bu ay"
    }
  ];

  const quickActions = [
    { title: "Yeni Proje Ekle", href: "/admin/projects", icon: FileText, color: "bg-blue-500" },
    { title: "Blog Yazısı Yaz", href: "/admin/blog", icon: FileText, color: "bg-purple-500" },
    { title: "Mesajları Görüntüle", href: "/admin/messages", icon: MessageSquare, color: "bg-green-500" },
    { title: "Ayarlar", href: "/admin/settings", icon: Settings, color: "bg-gray-500" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Admin Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Portfolio yönetim paneline hoş geldiniz
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {dashboardCards.map((card) => (
            <div key={card.title} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    {card.title}
                  </p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {card.value}
                  </p>
                  <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                    {card.change}
                  </p>
                </div>
                <div className={`w-12 h-12 ${card.color} rounded-lg flex items-center justify-center`}>
                  <card.icon className="text-white" size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Hızlı İşlemler
              </h3>
              <div className="space-y-3">
                {quickActions.map((action) => (
                  <a
                    key={action.title}
                    href={action.href}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className={`w-10 h-10 ${action.color} rounded-lg flex items-center justify-center`}>
                      <action.icon className="text-white" size={18} />
                    </div>
                    <span className="text-gray-900 dark:text-white font-medium">
                      {action.title}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Son Aktiviteler
              </h3>
              <div className="space-y-3">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900 dark:text-white">
                        {activity.text}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Messages */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Son Mesajlar
                </h3>
                <a
                  href="/admin/messages"
                  className="text-blue-600 dark:text-blue-400 text-sm hover:underline"
                >
                  Tümünü Görüntüle
                </a>
              </div>
              
              {recentMessages.length > 0 ? (
                <div className="space-y-4">
                  {recentMessages.map((message: any) => (
                    <div key={message.id} className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-b-0">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-medium text-gray-900 dark:text-white">
                              {message.name}
                            </h4>
                            {!message.read && (
                              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                            {message.email}
                          </p>
                          <p className="text-sm text-gray-900 dark:text-white mb-2">
                            {message.subject}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                            {message.message}
                          </p>
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 ml-4">
                          {message.date}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <MessageSquare className="mx-auto text-gray-400 mb-4" size={48} />
                  <p className="text-gray-500 dark:text-gray-400">
                    Henüz mesaj bulunmuyor
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Performance Chart Placeholder */}
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Site Performansı
          </h3>
          <div className="h-64 bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="mx-auto text-gray-400 mb-4" size={48} />
              <p className="text-gray-500 dark:text-gray-400">
                Grafik verileri yükleniyor...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}