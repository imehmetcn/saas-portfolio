"use client";

import { useState, useRef, useEffect } from "react";
import Image from 'next/image';
import { 
  ExternalLink, 
  FileCode2, 
  Search,
  Star,
  Code,
  Globe
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

  const categories = [
    { id: 'all', label: 'Tümü', icon: Globe },
    { id: 'web', label: 'Web', icon: Globe },
    { id: 'ui', label: 'UI/UX', icon: Code }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const stats = [
    { number: "20+", label: "Proje" },
    { number: "15+", label: "Müşteri" },
    { number: "95%", label: "Başarı" }
  ];

  return (
    <section 
      ref={containerRef}
      id="portfolio" 
      className="py-20 bg-white dark:bg-gray-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Code size={16} />
            Projelerim
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Portföy
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Web geliştirme ve tasarım alanında geliştirdiğim projelerden örnekler
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.number}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-12">
          <div className="flex gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                }`}
              >
                <category.icon size={16} />
                {category.label}
              </button>
            ))}
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Projelerde ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden"
            >
              <div className="relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category === 'web' ? 'Web' : 'UI/UX'}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1 bg-white dark:bg-gray-800 rounded-full px-2 py-1">
                    <Star className="text-yellow-400 fill-current" size={14} />
                    <span className="text-xs font-medium text-gray-900 dark:text-white">
                      {project.rating}
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 flex gap-2">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-gray-900 p-2 rounded-full"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                  <a
                    href={`https://github.com/mehmetcn/${project.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900 text-white p-2 rounded-full"
                  >
                    <FileCode2 size={16} />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {project.year}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>{project.client}</span>
                  <span>{project.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Proje bulunamadı
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Arama kriterlerinizi değiştirmeyi deneyin
            </p>
          </div>
        )}
      </div>
    </section>
  );
}