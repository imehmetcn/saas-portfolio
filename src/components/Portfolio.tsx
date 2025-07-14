"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from 'next/image';
import { 
  ExternalLink, 
  Github, 
  ChevronLeft,
  ChevronRight,
  Search,
  Star,
  Eye,
  Palette,
  Smartphone,
  Globe,
  Zap,
  Award,
  TrendingUp,
  Users,
  Clock,
  Target
} from "lucide-react";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const categories = [
    { id: 'all', label: 'All Projects', icon: Globe },
    { id: 'web', label: 'Web Apps', icon: Globe },
    { id: 'mobile', label: 'Mobile', icon: Smartphone },
    { id: 'design', label: 'UI/UX', icon: Palette },
    { id: 'saas', label: 'SaaS', icon: Zap }
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with advanced features including real-time inventory management, AI-powered recommendations, and seamless payment integration.",
      fullDescription: "A comprehensive e-commerce platform built with Next.js and TypeScript, featuring advanced inventory management, AI-powered product recommendations, multi-vendor support, and integrated payment solutions. The platform handles over 10,000 daily transactions with 99.9% uptime.",
      image: "/api/placeholder/600/400",
      category: "web",
      tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Redis"],
      features: ["Real-time Inventory", "AI Recommendations", "Multi-vendor Support", "Analytics Dashboard"],
      client: "RetailTech Solutions",
      timeline: "6 months",
      team: "5 developers",
      role: "Lead Full Stack Developer",
      metrics: {
        users: "50K+",
        performance: "98%",
        conversion: "+40%"
      },
      github: "https://github.com",
      live: "https://example.com",
      year: 2024,
      status: "Live",
      rating: 5.0
    },
    {
      id: 2,
      title: "SaaS Analytics Dashboard",
      description: "Comprehensive analytics platform with real-time data visualization, custom reporting, and AI-powered insights for business intelligence.",
      fullDescription: "A powerful SaaS analytics platform that processes millions of data points daily, providing real-time insights through interactive dashboards. Features include custom report builders, automated alerting, and machine learning-powered trend analysis.",
      image: "/api/placeholder/600/400",
      category: "saas",
      tags: ["React", "D3.js", "Node.js", "MongoDB", "WebSocket"],
      features: ["Real-time Charts", "Custom Reports", "AI Insights", "API Integration"],
      client: "DataCorp Analytics",
      timeline: "8 months",
      team: "4 developers",
      role: "Frontend Team Lead",
      metrics: {
        users: "25K+",
        performance: "99%",
        dataProcessed: "10M/day"
      },
      github: "https://github.com",
      live: "https://example.com",
      year: 2024,
      status: "Live",
      rating: 4.9
    },
    {
      id: 3,
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication, real-time transactions, and comprehensive financial management tools.",
      fullDescription: "A cutting-edge mobile banking application built with React Native, featuring advanced security measures, real-time transaction processing, budget tracking, and investment portfolio management. Supports both iOS and Android platforms.",
      image: "/api/placeholder/600/400",
      category: "mobile",
      tags: ["React Native", "TypeScript", "Firebase", "Biometrics"],
      features: ["Biometric Auth", "Real-time Transfers", "Budget Tracking", "Investment Tools"],
      client: "FinTech Innovations",
      timeline: "10 months",
      team: "6 developers",
      role: "Mobile App Lead",
      metrics: {
        users: "100K+",
        transactions: "1M+/month",
        security: "Bank-grade"
      },
      github: "https://github.com",
      live: "https://apps.apple.com",
      year: 2023,
      status: "Live",
      rating: 4.8
    },
    {
      id: 4,
      title: "Design System Library",
      description: "Comprehensive design system and component library for consistent user interfaces across multiple products and platforms.",
      fullDescription: "A complete design system built with Storybook and styled-components, providing a unified visual language and component library. Includes design tokens, accessibility guidelines, and automated testing for consistent UI/UX across products.",
      image: "/api/placeholder/600/400",
      category: "design",
      tags: ["Storybook", "Styled Components", "Figma", "Accessibility"],
      features: ["Design Tokens", "Component Library", "Documentation", "A11y Guidelines"],
      client: "TechStart Ecosystem",
      timeline: "4 months",
      team: "3 designers + 2 developers",
      role: "Design System Lead",
      metrics: {
        components: "120+",
        adoption: "100%",
        consistency: "+85%"
      },
      github: "https://github.com",
      live: "https://storybook.example.com",
      year: 2023,
      status: "Maintained",
      rating: 4.9
    },
    {
      id: 5,
      title: "Healthcare Management System",
      description: "Comprehensive healthcare management platform with patient records, appointment scheduling, and telemedicine capabilities.",
      fullDescription: "A complete healthcare management solution featuring patient record management, appointment scheduling, telemedicine integration, and HIPAA-compliant data handling. Built for scalability and security in healthcare environments.",
      image: "/api/placeholder/600/400",
      category: "web",
      tags: ["Vue.js", "Laravel", "MySQL", "WebRTC", "HIPAA"],
      features: ["Patient Records", "Telemedicine", "Scheduling", "HIPAA Compliance"],
      client: "MedTech Solutions",
      timeline: "12 months",
      team: "8 developers",
      role: "Backend Architect",
      metrics: {
        patients: "25K+",
        appointments: "500/day",
        uptime: "99.9%"
      },
      github: "https://github.com",
      live: "https://example.com",
      year: 2023,
      status: "Live",
      rating: 4.7
    },
    {
      id: 6,
      title: "Real Estate Platform",
      description: "Modern real estate platform with virtual tours, advanced search filters, and integrated communication tools for buyers and sellers.",
      fullDescription: "A comprehensive real estate platform featuring virtual property tours, advanced search and filtering, integrated messaging, document management, and CRM tools for real estate professionals. Includes mobile apps for both agents and clients.",
      image: "/api/placeholder/600/400",
      category: "web",
      tags: ["Angular", "Node.js", "PostgreSQL", "AWS", "3D Tours"],
      features: ["Virtual Tours", "Advanced Search", "CRM Integration", "Document Management"],
      client: "PropTech Innovations",
      timeline: "9 months",
      team: "7 developers",
      role: "Full Stack Developer",
      metrics: {
        properties: "15K+",
        users: "30K+",
        tours: "100K+ views"
      },
      github: "https://github.com",
      live: "https://example.com",
      year: 2022,
      status: "Live",
      rating: 4.6
    }
  ];

  const featuredProjects = projects.slice(0, 3);

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  const stats = [
    { number: "50+", label: "Projects Completed", icon: Target },
    { number: "25+", label: "Happy Clients", icon: Users },
    { number: "99%", label: "Success Rate", icon: TrendingUp },
    { number: "24/7", label: "Support Available", icon: Clock }
  ];

  return (
    <section 
      ref={containerRef}
      id="portfolio" 
      className="py-20 bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 overflow-hidden"
      >
        <div className="absolute top-32 left-10 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-80 right-20 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute bottom-60 left-1/3 w-40 h-40 bg-gradient-to-r from-cyan-400/15 to-purple-400/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-1/4 w-28 h-28 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-full blur-2xl animate-bounce"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          style={{ y: textY }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 px-6 py-3 rounded-full text-sm font-semibold mb-6"
          >
            <Eye size={16} />
            Featured Work
          </motion.div>
          
          <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent mb-6">
            Portfolio
          </h2>
          
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Discover my latest projects showcasing innovative solutions, cutting-edge technologies, and exceptional user experiences
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group text-center bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-slate-700/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="text-white" size={20} />
              </div>
              <div className="text-2xl font-bold text-slate-800 dark:text-white mb-1">{stat.number}</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Projects Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">Featured Projects</h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Highlighting some of my most impactful and innovative work
            </p>
          </div>

          <div className="relative bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-slate-700/50">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-2">
                <Award className="text-purple-600 dark:text-purple-400" size={20} />
                <span className="font-semibold text-slate-800 dark:text-white">Featured Work</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prevSlide}
                  className="p-2 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid lg:grid-cols-2 gap-8 items-center"
              >
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium">
                      {featuredProjects[currentSlide].category.toUpperCase()}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="text-yellow-400 fill-current" size={16} />
                      <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                        {featuredProjects[currentSlide].rating}
                      </span>
                    </div>
                  </div>

                  <h4 className="text-3xl font-bold text-slate-800 dark:text-white">
                    {featuredProjects[currentSlide].title}
                  </h4>

                  <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                    {featuredProjects[currentSlide].fullDescription}
                  </p>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-slate-800 dark:text-white">
                        {featuredProjects[currentSlide].metrics.users}
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">Users</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-slate-800 dark:text-white">
                        {featuredProjects[currentSlide].metrics.performance}
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">Performance</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-slate-800 dark:text-white">
                        {featuredProjects[currentSlide].timeline}
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">Timeline</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {featuredProjects[currentSlide].tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <motion.a
                      href={featuredProjects[currentSlide].live}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:shadow-lg transition-all duration-300"
                    >
                      <ExternalLink size={18} />
                      View Live
                    </motion.a>
                    <motion.a
                      href={featuredProjects[currentSlide].github}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-slate-800 dark:bg-slate-700 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-slate-700 dark:hover:bg-slate-600 transition-all duration-300"
                    >
                      <Github size={18} />
                      Code
                    </motion.a>
                  </div>
                </div>

                <div className="relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                  src={featuredProjects[currentSlide].image}
                  alt={featuredProjects[currentSlide].title}
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover"
                />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="font-semibold">{featuredProjects[currentSlide].client}</div>
                      <div className="text-sm opacity-90">{featuredProjects[currentSlide].year}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center mt-8 gap-2">
              {featuredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-purple-600 w-8'
                      : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-12"
        >
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
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
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 rounded-full text-slate-800 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20 dark:border-slate-700/50 hover:shadow-2xl transition-all duration-500"
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
                    {project.category.toUpperCase()}
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
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white/90 text-slate-800 p-2 rounded-full hover:bg-white transition-colors"
                    >
                      <ExternalLink size={16} />
                    </motion.a>
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-slate-800/90 text-white p-2 rounded-full hover:bg-slate-800 transition-colors"
                    >
                      <Github size={16} />
                    </motion.a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
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
                  <div className="text-sm text-slate-500 dark:text-slate-400 mb-2">Key Features:</div>
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
                        +{project.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-xs font-medium"
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
                    {project.timeline}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
              No projects found
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Try adjusting your search criteria or category filter
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
