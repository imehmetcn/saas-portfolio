"use client";

import { useState, useRef, useEffect } from "react";
import Image from 'next/image';
import { 
  ExternalLink, 
  FileCode2, 
  Search,
  Star,
  Code,
  Globe,
  Zap,
  TrendingUp,
  Users,
  Clock,
  Target
} from "lucide-react";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Anatolyadan-transfer.com",
      description: "Transfer hizmeti sunan bir web sitesi. Kullanıcılar için kolay rezervasyon sistemi ve yönetim paneli içerir.",
      image: "/file.svg",
      category: "web",
      tags: ["HTML", "CSS", "JavaScript", "PHP"],
      features: ["Rezervasyon Sistemi", "Yönetim Paneli", "Responsive Tasarım"],
      client: "Anatolyadan Transfer",
      year: 2023,
      status: "Live",
      rating: 5.0,
      url: "https://anatolyadan-transfer.com"
    },
    {
      id: 2,
      title: "Sultantekyap.com.tr",
      description: "İnşaat firması için kurumsal web sitesi. Proje portföyü, hizmetler ve iletişim bilgileri içerir.",
      image: "/file.svg",
      category: "web",
      tags: ["HTML", "CSS", "JavaScript", "WordPress"],
      features: ["Proje Galerisi", "İletişim Formu", "Responsive Tasarım"],
      client: "Sultan Tekyap",
      year: 2023,
      status: "Live",
      rating: 4.9,
      url: "https://sultantekyap.com.tr"
    }
  ]);

  // Admin panelinden verileri yükle
  useEffect(() => {
    const savedData = localStorage.getItem("portfolioData");
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        setProjects(parsedData);
      } catch (error) {
        console.error("Portfolio verileri yüklenirken hata:", error);
      }
    }
  }, []);
  
  // Removed scroll animations for better mobile performance

  const categories = [
    { id: 'all', label: 'Tüm Projeler', icon: Globe },
    { id: 'web', label: 'Web Projeleri', icon: Globe },
    { id: 'ui', label: 'UI/UX', icon: Code },
    { id: 'security', label: 'Güvenlik', icon: Zap }
  ];

  // Admin panelinden gelen projeler kullanılıyor

  // Featured projects removed as they're not being used

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const stats = [
    { number: "20+", label: "Tamamlanan Proje", icon: Target },
    { number: "15+", label: "Mutlu Müşteri", icon: Users },
    { number: "95%", label: "Başarı Oranı", icon: TrendingUp },
    { number: "24/7", label: "Destek", icon: Clock }
  ];

  return (
    <section 
      ref={containerRef}
      id="portfolio" 
      className="py-20 bg-gradient-to-br from-slate-50 via-indigo-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden"
    >
      {/* Simplified Background - Mobilde animasyon yok */}
      <div className="absolute inset-0 overflow-hidden hidden md:block">
        <div className="absolute top-32 left-10 w-32 h-32 bg-indigo-400/10 rounded-full"></div>
        <div className="absolute bottom-32 right-1/4 w-28 h-28 bg-blue-400/10 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header - Mobilde animasyon yok */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <Code className="w-5 h-5" />
            Projelerim
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent mb-6">
            Portföy
          </h2>
          
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Web geliştirme, UI/UX tasarım ve güvenlik alanlarında geliştirdiğim projelerden örnekler
          </p>
        </div>

        {/* Stats - Mobilde animasyon yok */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group text-center bg-white/60 dark:bg-slate-800/60 rounded-2xl p-6 border border-white/20 dark:border-slate-700/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="text-white" size={20} />
              </div>
              <div className="text-2xl font-bold text-slate-800 dark:text-white mb-1">{stat.number}</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Filters and Search - Mobilde animasyon yok */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-12">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg'
                    : 'bg-white/60 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white border border-white/20 dark:border-slate-700/50'
                }`}
              >
                <category.icon size={16} />
                {category.label}
              </button>
            ))}
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Projelerde ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 rounded-full text-slate-800 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Projects Grid - Mobilde animasyon yok */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white/60 dark:bg-slate-800/60 rounded-2xl overflow-hidden border border-white/20 dark:border-slate-700/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 dark:bg-slate-800/90 text-slate-800 dark:text-white rounded-full text-sm font-medium backdrop-blur-sm">
                    {project.category === 'web' ? 'Web' : project.category === 'ui' ? 'UI/UX' : 'Güvenlik'}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1 bg-white/90 dark:bg-slate-800/90 rounded-full px-2 py-1 backdrop-blur-sm">
                    <Star className="text-yellow-400 fill-current" size={14} />
                    <span className="text-xs font-medium text-slate-800 dark:text-white">
                      {project.rating}
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-2">
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/90 text-slate-800 p-2 rounded-full hover:bg-white transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                    <a
                      href={`https://github.com/mehmetcn/${project.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-slate-800/90 text-white p-2 rounded-full hover:bg-slate-800 transition-colors"
                    >
                      <FileCode2 size={16} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-sm text-slate-500 dark:text-slate-400 ml-2">
                    {project.year}
                  </span>
                </div>

                <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="mb-4">
                  <div className="text-sm text-slate-500 dark:text-slate-400 mb-2">Özellikler:</div>
                  <div className="flex flex-wrap gap-1">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                    {project.features.length > 3 && (
                      <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded text-xs">
                        +{project.features.length - 3} daha
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-full text-xs">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                  <span>{project.client}</span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {project.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
              Proje bulunamadı
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Arama kriterlerinizi veya kategori filtrenizi değiştirmeyi deneyin
            </p>
          </div>
        )}
      </div>
    </section>
  );
}