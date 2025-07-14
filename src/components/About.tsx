"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { 
  User, 
  Code2, 
  Briefcase, 
  Star, 
  TrendingUp, 
  Download, 
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Target,
  Coffee,
  MapPin,
  Calendar,
  Globe,
  BookOpen,
  Lightbulb,
  Rocket,
  Heart,
  Brain
} from "lucide-react";

export default function About() {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const skills = [
    { 
      name: "React/Next.js", 
      level: 95, 
      color: "from-blue-500 to-cyan-500",
      description: "En yeni React ekosistemiyle modern web uygulamaları oluşturma"
    },
    { 
      name: "TypeScript", 
      level: 92, 
      color: "from-indigo-500 to-purple-500",
      description: "Ölçeklenebilir uygulamalar için tip güvenli geliştirme"
    },
    { 
      name: "Node.js", 
      level: 88, 
      color: "from-green-500 to-emerald-500",
      description: "Arka uç geliştirme ve API tasarımı"
    },
    { 
      name: "UI/UX Tasarımı", 
      level: 85, 
      color: "from-purple-500 to-pink-500",
      description: "Sezgisel ve güzel kullanıcı deneyimleri oluşturma"
    },
    { 
      name: "Python", 
      level: 82, 
      color: "from-yellow-500 to-orange-500",
      description: "Veri işleme ve makine öğrenimi entegrasyonu"
    },
    { 
      name: "Veritabanı Tasarımı", 
      level: 80, 
      color: "from-cyan-500 to-blue-500",
      description: "PostgreSQL, MongoDB ve Redis optimizasyonu"
    },
  ];

  const experiences = [
    {
      title: "Kıdemli Full Stack Geliştirici",
      company: "TechCorp Solutions",
      period: "2022 - Günümüz",
      location: "İstanbul, Türkiye",
      type: "Tam Zamanlı",
      description: "10 binden fazla kullanıcıya hizmet veren kurumsal SaaS uygulamalarının geliştirilmesine liderlik ediyorum. Ölçeklenebilir mikroservis mimarisi kurdum ve genç geliştiricilere mentorluk yaptım.",
      achievements: [
        "Optimizasyon sayesinde uygulama yükleme süresini %60 azalttım",
        "Çevik bir ortamda 5 geliştiriciden oluşan bir ekibe liderlik ettim",
        "Dağıtım süresini %80 azaltan CI/CD ardışık düzenini uyguladım"
      ],
      technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker"]
    },
    {
      title: "Frontend Takım Lideri",
      company: "Innovation Labs",
      period: "2020 - 2022",
      location: "Uzaktan",
      type: "Tam Zamanlı",
      description: "Birden fazla müşteri projesi için ön uç mimarisine öncülük ettim. Organizasyon genelinde kodlama standartları ve en iyi uygulamaları oluşturdum.",
      achievements: [
        "15'ten fazla başarılı projeyi zamanında ve bütçeye uygun olarak teslim ettim",
        "Mentorluk yoluyla ekip verimliliğini %40 artırdım",
        "Projeler arasında kullanılan yeniden kullanılabilir bir bileşen kütüphanesi oluşturdum"
      ],
      technologies: ["React", "Vue.js", "Angular", "TypeScript", "SASS"]
    },
    {
      title: "Full Stack Geliştirici",
      company: "WebStudio Pro",
      period: "2018 - 2020",
      location: "İstanbul, Türkiye",
      type: "Tam Zamanlı",
      description: "Özel e-ticaret çözümleri ve iş uygulamaları geliştirdim. Gereksinimleri anlamak ve özel çözümler sunmak için müşterilerle yakın çalıştım.",
      achievements: [
        "20'den fazla özel web uygulaması oluşturdum",
        "%98 müşteri memnuniyeti oranına ulaştım",
        "WebSocket kullanarak gerçek zamanlı özellikler uyguladım"
      ],
      technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap"]
    }
  ];

  const stats = [
    { 
      number: "50+", 
      label: "Tamamlanan Proje", 
      icon: Briefcase,
      description: "Başarıyla teslim edilen projeler",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      number: "5+", 
      label: "Yıl Deneyim", 
      icon: Calendar,
      description: "Profesyonel gelişim",
      color: "from-green-500 to-emerald-500"
    },
    { 
      number: "25+", 
      label: "Mutlu Müşteri", 
      icon: Heart,
      description: "Dünya çapında memnun müşteriler",
      color: "from-purple-500 to-pink-500"
    },
    { 
      number: "15+", 
      label: "Teknolojiler", 
      icon: Code2,
      description: "Modern teknoloji yığınında ustalık",
      color: "from-orange-500 to-red-500"
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Ürün Yöneticisi",
      company: "TechStartup Inc",
      image: "/api/placeholder/60/60",
      rating: 5,
      text: "Bu geliştiriciyle çalışmak olağanüstüydü. Kod kalitesi ve detaylara gösterilen özen beklentilerimizi aştı. Kesinlikle tavsiye ederim!"
    },
    {
      name: "Mike Chen",
      role: "CTO",
      company: "Digital Solutions",
      image: "/api/placeholder/60/60",
      rating: 5,
      text: "Olağanüstü teknik beceriler ve iletişim. Karmaşık SaaS platformumuzu zamanından önce ve dikkate değer bir kalitede teslim etti."
    },
    {
      name: "Emily Rodriguez",
      role: "Startup Kurucusu",
      company: "InnovateLab",
      image: "/api/placeholder/60/60",
      rating: 5,
      text: "Vizyonumuzu gerçeğe dönüştürdü. Modern teknolojilerdeki ve kullanıcı deneyimi tasarımındaki uzmanlığı tam da ihtiyacımız olan şeydi."
    }
  ];

  const personalInfo = [
    { icon: MapPin, label: "Konum", value: "İstanbul, Türkiye" },
    { icon: Globe, label: "Diller", value: "Türkçe, İngilizce" },
    { icon: Coffee, label: "Tüketilen Kahve", value: "2.847 fincan" },
    { icon: BookOpen, label: "Okunan Kitap", value: "Bu yıl 24" }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "İnovasyon",
      description: "Her zaman yeni teknolojileri ve yaratıcı çözümleri keşfetmek"
    },
    {
      icon: Target,
      title: "Kalite",
      description: "Her seferinde olağanüstü sonuçlar sunmaya adanmışlık"
    },
    {
      icon: Rocket,
      title: "Gelişim",
      description: "Her projede sürekli öğrenme ve gelişim"
    },
    {
      icon: Brain,
      title: "Strateji",
      description: "Gerçek iş problemlerini çözmek için kodun ötesinde düşünmek"
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Genel Bakış', icon: User },
    { id: 'experience', label: 'Deneyim', icon: Briefcase },
    { id: 'skills', label: 'Yetenekler', icon: Code2 },
    { id: 'testimonials', label: 'Referanslar', icon: Star }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section 
      ref={containerRef}
      id="about" 
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 overflow-hidden"
      >
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-60 right-32 w-24 h-24 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-full blur-2xl animate-bounce"></div>
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
            className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-full text-sm font-semibold mb-6"
          >
            <User size={16} />
            Beni Daha Yakından Tanıyın
          </motion.div>
          
          <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent mb-6">
            Hakkımda
          </h2>
          
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Modern teknolojiler ve yaratıcı problem çözme ile yenilikçi dijital deneyimler yaratan tutkulu bir geliştirici
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group text-center bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-slate-700/50 hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="text-white" size={28} />
              </div>
              <div className="text-3xl font-bold text-slate-800 dark:text-white mb-2">{stat.number}</div>
              <div className="font-semibold text-slate-700 dark:text-slate-300 mb-1">{stat.label}</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl p-2 border border-white/20 dark:border-slate-700/50">
            <div className="flex gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-700/50'
                  }`}
                >
                  <tab.icon size={18} />
                  <span className="hidden sm:block">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-3 gap-12"
            >
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-slate-700/50">
                  <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">
                    Yaratıcı Çözümler, Modern Teknolojiler
                  </h3>
                  <div className="space-y-6 text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                    <p>
                      5 yılı aşkın full-stack geliştirme deneyimimle, kullanıcı odaklı, yüksek performanslı web uygulamaları oluşturma konusunda uzmanım. 
                      Uzmanlığım, özellikle sağlam SaaS çözümleri oluşturduğum React, Next.js ve TypeScript gibi modern JavaScript ekosisteminde yatmaktadır.
                    </p>
                    <p>
                      Temiz kod prensipleri ve sürekli öğrenme yoluyla olağanüstü kullanıcı deneyimleri sunma konusunda tutkuluyum. 
                      Startup'lardan kurumsal şirketlere kadar çeşitli sektörlerde, her zaman ölçeklenebilirlik ve sürdürülebilirliğe odaklanarak projeleri başarıyla teslim ettim.
                    </p>
                    <p>
                      Amacım, insanların hayatını kolaylaştırmak için teknolojiden yararlanmak ve işletmelerin dijital dönüşüm yolculuklarında güvenilir bir ortak olmaktır. 
                      Karmaşık sorunları çözmek için iş birliğinin ve yenilikçi düşüncenin gücüne inanıyorum.
                    </p>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:shadow-xl transition-all duration-300"
                  >
                    <Download size={20} />
                    CV'mi İndir
                  </motion.button>
                </div>

                {/* Values */}
                <div className="grid md:grid-cols-2 gap-6">
                  {values.map((value, index) => (
                    <motion.div
                      key={value.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-slate-700/50 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                        <value.icon className="text-white" size={20} />
                      </div>
                      <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">
                        {value.title}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400">
                        {value.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Personal Info */}
                <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-slate-700/50">
                  <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">Kişisel Bilgiler</h4>
                  <div className="space-y-4">
                    {personalInfo.map((info) => (
                      <div key={info.label} className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                          <info.icon className="text-blue-600 dark:text-blue-400" size={16} />
                        </div>
                        <div>
                          <div className="text-sm text-slate-500 dark:text-slate-400">{info.label}</div>
                          <div className="font-medium text-slate-800 dark:text-white">{info.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
                  <h4 className="text-lg font-semibold mb-4">Hızlı Bilgiler</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="opacity-90">Yanıt Süresi</span>
                      <span className="font-semibold">&lt; 24 saat</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="opacity-90">Saat Dilimi</span>
                      <span className="font-semibold">GMT+3</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="opacity-90">Müsaitlik</span>
                      <span className="font-semibold">Pzt-Cum</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'experience' && (
            <motion.div
              key="experience"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-slate-700/50 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <span className="text-blue-600 dark:text-blue-400 font-semibold text-lg">
                          {exp.company}
                        </span>
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                          {exp.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-slate-600 dark:text-slate-300 text-lg mb-6 leading-relaxed">
                    {exp.description}
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-800 dark:text-white mb-3">Temel Başarılar:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                          <TrendingUp className="text-green-500 mt-1 flex-shrink-0" size={16} />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-white mb-3">Kullanılan Teknolojiler:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'skills' && (
            <motion.div
              key="skills"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-8"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-slate-700/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                      {skill.name}
                    </h3>
                    <span className="text-lg font-semibold text-slate-600 dark:text-slate-400">
                      {skill.level}%
                    </span>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    {skill.description}
                  </p>
                  
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color} relative`}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'testimonials' && (
            <motion.div
              key="testimonials"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <div className="relative bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-slate-700/50">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
                    Müşteri Yorumları
                  </h3>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                    >
                      {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                    </button>
                    <button
                      onClick={prevTestimonial}
                      className="p-2 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="p-2 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTestimonial}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                  >
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="text-yellow-400 fill-current" size={20} />
                      ))}
                    </div>
                    
                    <blockquote className="text-xl text-slate-700 dark:text-slate-300 mb-8 leading-relaxed italic">
                      &quot;{testimonials[currentTestimonial].text}&quot;
                    </blockquote>
                    
                    <div className="flex items-center justify-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                        {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-slate-800 dark:text-white">
                          {testimonials[currentTestimonial].name}
                        </div>
                        <div className="text-slate-600 dark:text-slate-400">
                          {testimonials[currentTestimonial].role}
                        </div>
                        <div className="text-blue-600 dark:text-blue-400 font-medium">
                          {testimonials[currentTestimonial].company}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="flex justify-center mt-8 gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentTestimonial(i)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        i === currentTestimonial
                          ? 'bg-blue-600 w-8'
                          : 'bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
