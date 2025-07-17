"use client";

import { motion, Variants } from "framer-motion";
import { 
  Code2, 
  Smartphone, 
  Palette, 
  Database,
  CheckCircle,
  Sparkles,
  Zap,
  Star,
  TrendingUp,
  Award,
  Rocket
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Code2,
      title: "Web Geliştirme",
      description: "Modern web teknolojileri ile responsive ve hızlı web siteleri geliştiriyorum.",
      features: ["React/Next.js", "TypeScript", "Responsive Tasarım", "SEO Optimizasyonu"],
      price: "₺15,000+",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: Palette,
      title: "UI/UX Tasarım",
      description: "Kullanıcı odaklı tasarım ve modern arayüzler ile unutulmaz deneyimler yaratıyorum.",
      features: ["Figma Tasarım", "Prototipleme", "Kullanıcı Deneyimi", "Görsel Tasarım"],
      price: "₺12,000+",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/10 to-pink-500/10"
    },
    {
      icon: Smartphone,
      title: "Mobil Uyumlu",
      description: "Tüm cihazlarda mükemmel çalışan, mobil öncelikli tasarımlar geliştiriyorum.",
      features: ["Responsive Design", "Mobile First", "Cross-browser", "Performance"],
      price: "₺8,000+",
      color: "from-green-500 to-teal-500",
      bgColor: "from-green-500/10 to-teal-500/10"
    },
    {
      icon: Database,
      title: "Backend Entegrasyon",
      description: "API entegrasyonları ve veritabanı bağlantıları ile dinamik web uygulamaları.",
      features: ["API Entegrasyonu", "Veritabanı", "Authentication", "Real-time"],
      price: "₺20,000+",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-500/10 to-red-500/10"
    }
  ];

  const plans = [
    {
      name: 'Temel',
      price: '₺8,000',
      description: 'Küçük işletmeler için',
      features: [
        '5 sayfa responsive website',
        'Temel SEO optimizasyonu',
        'İletişim formu',
        '3 ay destek'
      ],
      icon: Rocket,
      color: 'from-gray-600 to-gray-800'
    },
    {
      name: 'Profesyonel',
      price: '₺25,000',
      description: 'Büyüyen işletmeler için',
      features: [
        'Özel tasarım ve geliştirme',
        'Admin paneli',
        'Gelişmiş SEO',
        'Analytics entegrasyonu',
        '6 ay destek'
      ],
      popular: true,
      icon: Star,
      color: 'from-blue-600 to-purple-600'
    },
    {
      name: 'Kurumsal',
      price: '₺50,000+',
      description: 'Büyük şirketler için',
      features: [
        'Tam özelleştirilmiş çözüm',
        'API entegrasyonları',
        'Güvenlik optimizasyonu',
        'Performans optimizasyonu',
        '12 ay destek'
      ],
      icon: Award,
      color: 'from-purple-600 to-pink-600'
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section id="services" className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-green-50/30 dark:from-gray-800 dark:via-gray-900 dark:to-green-900/10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Header */}
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div 
            className="inline-flex items-center gap-3 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 backdrop-blur-sm border border-green-200/50 dark:border-green-700/50 text-green-600 dark:text-green-400 px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <Sparkles size={18} />
            Hizmetlerim
            <Zap size={16} className="text-yellow-500" />
          </motion.div>
          
          <motion.h2 
            className="text-4xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-green-800 to-blue-800 dark:from-white dark:via-green-200 dark:to-blue-200 mb-8 leading-tight"
            variants={itemVariants}
          >
            Dijital
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-blue-600 to-purple-600">
              Çözümler
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Modern teknolojiler kullanarak işinizi dijital dünyada öne çıkaracak 
            <span className="text-green-600 dark:text-green-400 font-semibold"> profesyonel çözümler</span> sunuyorum.
            Her hizmet, kalite ve mükemmellik odaklı.
          </motion.p>
        </motion.div>

        {/* Enhanced Services Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div 
              key={service.title} 
              className="group relative"
              variants={cardVariants}
              whileHover={{ 
                y: -15,
                transition: { duration: 0.3 }
              }}
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.bgColor} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-white/20 dark:border-gray-700/50 rounded-3xl p-8 shadow-2xl h-full">
                {/* Icon */}
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                  whileHover={{ 
                    rotate: [0, -10, 10, 0],
                    scale: 1.1
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon className="text-white" size={28} />
                </motion.div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-blue-600 dark:group-hover:from-white dark:group-hover:to-blue-400 transition-all duration-300">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={feature} 
                      className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + featureIndex * 0.05 + 0.5 }}
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full shadow-sm`} />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* Price */}
                <motion.div 
                  className={`text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r ${service.color}`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.7, type: "spring", stiffness: 200 }}
                >
                  {service.price}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Pricing Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h3 
            className="text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-blue-600 dark:from-white dark:to-blue-400 mb-4"
            whileHover={{ scale: 1.02 }}
          >
            Fiyatlandırma Paketleri
          </motion.h3>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            İhtiyacınıza uygun <span className="text-blue-600 dark:text-blue-400 font-semibold">mükemmel paketi</span> seçin
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`group relative ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${plan.color}/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className={`relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-2 rounded-3xl p-8 shadow-2xl h-full ${
                plan.popular 
                  ? 'border-blue-500/50 dark:border-blue-400/50' 
                  : 'border-white/20 dark:border-gray-700/50'
              }`}>
                {/* Popular Badge */}
                {plan.popular && (
                  <motion.div 
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                    initial={{ scale: 0, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  >
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                      <Star size={14} className="fill-current" />
                      En Popüler
                    </span>
                  </motion.div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <plan.icon className="text-white" size={28} />
                  </motion.div>
                  
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {plan.description}
                  </p>
                  <motion.div 
                    className={`text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r ${plan.color}`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.5, type: "spring", stiffness: 200 }}
                  >
                    {plan.price}
                  </motion.div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={feature} 
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + featureIndex * 0.05 + 0.7 }}
                    >
                      <CheckCircle className="text-green-500 flex-shrink-0" size={18} />
                      <span className="text-gray-600 dark:text-gray-300">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button 
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl hover:scale-105'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 hover:scale-105'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {plan.popular ? (
                    <span className="flex items-center justify-center gap-2">
                      <Rocket size={18} />
                      Şimdi Başla
                    </span>
                  ) : (
                    'Planı Seç'
                  )}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div 
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl cursor-pointer"
            whileHover={{ 
              scale: 1.05, 
              y: -5,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <TrendingUp size={20} />
            Ücretsiz Konsültasyon Al
            <Sparkles size={18} className="text-yellow-300" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}