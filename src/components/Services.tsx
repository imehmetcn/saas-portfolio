"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Smartphone, 
  Cloud, 
  Palette, 
  Zap, 
  Shield, 
  Rocket,
  Users,
  CheckCircle,
  ArrowRight
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Code2,
      title: "Web Uygulama Geliştirme",
      description: "Modern JavaScript teknolojileri ile ölçeklenebilir ve performanslı web uygulamaları geliştiriyorum.",
      features: [
        "React/Next.js ile SPA geliştirme",
        "TypeScript entegrasyonu",
        "Responsive tasarım",
        "SEO optimizasyonu",
        "Performance optimization"
      ],
      price: "₺15,000+",
      duration: "4-8 hafta",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Smartphone,
      title: "Mobil Uygulama Geliştirme",
      description: "Cross-platform mobil uygulamalar ile iOS ve Android platformlarında varlık gösterin.",
      features: [
        "React Native geliştirme",
        "Native performans",
        "App Store ve Play Store yayını",
        "Push notification",
        "Offline çalışma desteği"
      ],
      price: "₺20,000+",
      duration: "6-10 hafta",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Cloud,
      title: "SaaS Platform Geliştirme",
      description: "Tam kapsamlı SaaS çözümleri ile işinizi bulutta büyütün ve ölçeklendirin.",
      features: [
        "Multi-tenant mimari",
        "Subscription yönetimi",
        "Analytics dashboard",
        "API geliştirme",
        "Cloud deployment"
      ],
      price: "₺35,000+",
      duration: "8-16 hafta",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Palette,
      title: "UI/UX Tasarım",
      description: "Kullanıcı odaklı tasarımlar ile marka deneyiminizi güçlendirin.",
      features: [
        "Figma ile prototyping",
        "User research",
        "Design system oluşturma",
        "Usability testing",
        "Brand identity"
      ],
      price: "₺8,000+",
      duration: "2-4 hafta",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Zap,
      title: "Performance Optimizasyonu",
      description: "Mevcut uygulamalarınızın performansını artırın ve kullanıcı deneyimini iyileştirin.",
      features: [
        "Code splitting",
        "Image optimization",
        "Bundle size azaltma",
        "Loading time iyileştirme",
        "SEO score artırma"
      ],
      price: "₺5,000+",
      duration: "1-3 hafta",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "Güvenlik Denetimi",
      description: "Uygulamalarınızın güvenlik açıklarını tespit edin ve güçlendirin.",
      features: [
        "Security audit",
        "Penetration testing",
        "OWASP standartları",
        "SSL/TLS konfigürasyonu",
        "Güvenlik raporlama"
      ],
      price: "₺7,000+",
      duration: "1-2 hafta",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Keşif ve Planlama",
      description: "İhtiyaçlarınızı analiz ediyor, proje kapsamını belirliyoruz.",
      icon: Users
    },
    {
      step: 2,
      title: "Tasarım ve Prototyping",
      description: "UI/UX tasarımı ve interaktif prototip oluşturuyoruz.",
      icon: Palette
    },
    {
      step: 3,
      title: "Geliştirme",
      description: "Modern teknolojiler ile kodlama sürecini başlatıyoruz.",
      icon: Code2
    },
    {
      step: 4,
      title: "Test ve Optimizasyon",
      description: "Kapsamlı testler ve performans optimizasyonu yapıyoruz.",
      icon: Zap
    },
    {
      step: 5,
      title: "Deployment ve Destek",
      description: "Projeyi yayınlıyor ve sürekli destek sağlıyoruz.",
      icon: Rocket
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-slate-900">
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
            Hizmetlerim
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Dijital dönüşüm yolculuğunuzda size eşlik eden kapsamlı teknoloji çözümleri
          </p>
        </motion.div>

        {/* Hizmetler Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 dark:border-slate-700 overflow-hidden"
            >
              {/* Gradient Background */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color}`} />
              
              {/* Icon */}
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="text-white" size={24} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                {service.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300"
                  >
                    <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                    {feature}
                  </motion.li>
                ))}
              </ul>

              {/* Pricing */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-2xl font-bold text-slate-800 dark:text-white">
                    {service.price}
                  </span>
                  <div className="text-sm text-slate-500 dark:text-slate-400">
                    {service.duration}
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:shadow-lg transition-all duration-300"
                >
                  Başla
                  <ArrowRight size={16} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Çalışma Süreci */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">
              Çalışma Sürecim
            </h3>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Projenizin başarıya ulaşması için izlediğim adımlar
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-purple-200 dark:from-blue-800 dark:to-purple-800 transform translate-x-4" />
                )}
                
                {/* Step Number */}
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4 mx-auto relative z-10">
                  {step.step}
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                  <step.icon className="text-slate-600 dark:text-slate-300" size={24} />
                </div>

                {/* Content */}
                <h4 className="font-bold text-slate-800 dark:text-white mb-2">
                  {step.title}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-3xl font-bold mb-4">
            Projenizi Hayata Geçirmeye Hazır mısınız?
          </h3>
          <p className="text-xl opacity-90 mb-8">
            Ücretsiz konsültasyon için benimle iletişime geçin
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              Ücretsiz Konsültasyon
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Portfolio İncele
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
