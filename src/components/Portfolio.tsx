"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Eye, Calendar, Tag } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "E-Ticaret SaaS Platformu",
      description: "Modern e-ticaret çözümü sunan SaaS platformu. Çoklu mağaza desteği, ödeme entegrasyonları ve analitik dashboard.",
      image: "/api/placeholder/600/400",
      tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind"],
      category: "SaaS",
      date: "2024",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: true
    },
    {
      id: 2,
      title: "AI Destekli CRM Sistemi",
      description: "Yapay zeka tabanlı müşteri ilişkileri yönetim sistemi. Otomatik lead skorlama ve akıllı öneriler.",
      image: "/api/placeholder/600/400",
      tags: ["React", "Python", "OpenAI", "FastAPI", "MongoDB"],
      category: "AI/ML",
      date: "2024",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: true
    },
    {
      id: 3,
      title: "Fintech Dashboard",
      description: "Finansal verileri görselleştiren gerçek zamanlı dashboard. Kripto para ve borsa verileri entegrasyonu.",
      image: "/api/placeholder/600/400",
      tags: ["Vue.js", "D3.js", "WebSocket", "Express", "Redis"],
      category: "Fintech",
      date: "2023",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: false
    },
    {
      id: 4,
      title: "Sosyal Medya Analitik Aracı",
      description: "Sosyal medya performansını analiz eden kapsamlı araç. Multi-platform veri toplama ve raporlama.",
      image: "/api/placeholder/600/400",
      tags: ["React", "Node.js", "GraphQL", "Chart.js", "Docker"],
      category: "Analytics",
      date: "2023",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: false
    },
    {
      id: 5,
      title: "IoT Cihaz Yönetim Paneli",
      description: "IoT cihazlarını merkezi olarak yöneten web uygulaması. Gerçek zamanlı monitoring ve kontrol.",
      image: "/api/placeholder/600/400",
      tags: ["Angular", "MQTT", "InfluxDB", "Grafana", "Docker"],
      category: "IoT",
      date: "2023",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: false
    },
    {
      id: 6,
      title: "Eğitim Yönetim Sistemi",
      description: "Online eğitim platformu. Video streaming, quiz sistemi ve öğrenci takip modülleri.",
      image: "/api/placeholder/600/400",
      tags: ["Next.js", "Prisma", "AWS", "Zoom API", "Stripe"],
      category: "EdTech",
      date: "2022",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      featured: false
    }
  ];

  const categories = ["Tümü", "SaaS", "AI/ML", "Fintech", "Analytics", "IoT", "EdTech"];

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Başlık */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-4">
            Projelerim
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Modern teknolojilerle geliştirdiğim bazı projeler ve çözümler
          </p>
        </motion.div>

        {/* Kategori Filtreleri */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300"
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Öne Çıkan Projeler */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-8 text-center">
            Öne Çıkan Projeler
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.filter(project => project.featured).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Proje Görseli */}
                <div className="relative h-64 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <motion.a
                      href={project.liveUrl}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white/20 backdrop-blur-lg p-2 rounded-full text-white hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink size={18} />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white/20 backdrop-blur-lg p-2 rounded-full text-white hover:bg-white/30 transition-colors"
                    >
                      <Github size={18} />
                    </motion.a>
                  </div>
                </div>

                {/* Proje Bilgileri */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-2">
                    <Calendar size={16} />
                    {project.date}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium text-center hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Eye size={16} />
                      Canlı Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex-1 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-4 py-2 rounded-lg font-medium text-center hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Github size={16} />
                      Kod
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Diğer Projeler */}
        <div>
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-8 text-center">
            Diğer Projeler
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(project => !project.featured).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Tag className="text-blue-600 dark:text-blue-400" size={20} />
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      {project.category}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.liveUrl}
                      className="text-slate-400 hover:text-blue-600 transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="text-slate-400 hover:text-blue-600 transition-colors"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-slate-400 text-xs px-2 py-1">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {project.date}
                  </span>
                  <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium transition-colors">
                    Detayları Gör →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* GitHub Linki */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            Daha fazla proje için GitHub profilimi ziyaret edebilirsiniz
          </p>
          <motion.a
            href="https://github.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
          >
            <Github size={20} />
            GitHub&apos;da Daha Fazla
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
