"use client";

import { useState } from "react";
import { 
  Code2, 
  Smartphone, 
  Cloud, 
  Palette, 
  Database,
  Lock,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Sparkles
} from "lucide-react";

export default function Services() {
  const [selectedPlan, setSelectedPlan] = useState<string>('pro');

  const services = [
    {
      icon: Code2,
      title: "SaaS Platform Geliştirme",
      description: "Ölçeklenebilir, güvenli ve modern SaaS uygulamaları ile işinizi dijital dünyada zirveye taşıyın.",
      features: [
        "Multi-tenant mimarisi",
        "Real-time dashboard",
        "Advanced analytics",
        "API entegrasyonları",
        "Subscription yönetimi",
        "24/7 monitoring"
      ],
      price: "₺35,000+",
      duration: "8-12 hafta",
      color: "from-blue-500 to-cyan-400",
      bgGradient: "from-blue-50 to-cyan-50",
      popular: true
    },
    {
      icon: Smartphone,
      title: "Mobil Uygulama Geliştirme",
      description: "Cross-platform mobil uygulamalar ile kullanıcılarınıza her zaman ulaşın.",
      features: [
        "React Native/Flutter",
        "Native performans",
        "Offline-first yaklaşım",
        "Push notifications",
        "In-app purchases",
        "Analytics entegrasyonu"
      ],
      price: "₺25,000+",
      duration: "6-10 hafta",
      color: "from-purple-500 to-pink-400",
      bgGradient: "from-purple-50 to-pink-50",
      popular: false
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps Çözümleri",
      description: "Modern bulut teknolojileri ile uygulamalarınızı güvenli ve ölçeklenebilir hale getirin.",
      features: [
        "AWS/Google Cloud setup",
        "CI/CD pipeline",
        "Container orchestration",
        "Auto-scaling",
        "Security hardening",
        "Cost optimization"
      ],
      price: "₺20,000+",
      duration: "4-6 hafta",
      color: "from-green-500 to-emerald-400",
      bgGradient: "from-green-50 to-emerald-50",
      popular: false
    },
    {
      icon: Palette,
      title: "UI/UX Tasarım & Frontend",
      description: "Kullanıcı odaklı tasarım ve modern frontend teknolojileri ile unutulmaz deneyimler yaratın.",
      features: [
        "Design system oluşturma",
        "Figma to Code",
        "Responsive design",
        "Accessibility (WCAG)",
        "Performance optimization",
        "A/B testing setup"
      ],
      price: "₺18,000+",
      duration: "5-8 hafta",
      color: "from-orange-500 to-red-400",
      bgGradient: "from-orange-50 to-red-50",
      popular: false
    },
    {
      icon: Database,
      title: "Backend & API Geliştirme",
      description: "Güçlü backend sistemleri ve RESTful/GraphQL API&apos;ler ile veri yönetimini optimize edin.",
      features: [
        "Node.js/Python backend",
        "PostgreSQL/MongoDB",
        "GraphQL/REST API",
        "Microservices mimarisi",
        "Redis caching",
        "Real-time features"
      ],
      price: "₺22,000+",
      duration: "6-9 hafta",
      color: "from-indigo-500 to-purple-400",
      bgGradient: "from-indigo-50 to-purple-50",
      popular: false
    },
    {
      icon: Lock,
      title: "Güvenlik & Compliance",
      description: "Kurumsal seviyede güvenlik önlemleri ve compliance standartları ile verilerinizi koruyun.",
      features: [
        "OAuth 2.0/JWT auth",
        "GDPR compliance",
        "Penetration testing",
        "Data encryption",
        "Security monitoring",
        "Audit logging"
      ],
      price: "₺15,000+",
      duration: "3-5 hafta",
      color: "from-slate-500 to-gray-400",
      bgGradient: "from-slate-50 to-gray-50",
      popular: false
    }
  ];

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: '₺12,000',
      period: '/proje',
      description: 'Küçük işletmeler için ideal',
      features: [
        '5 sayfa responsive website',
        'Temel SEO optimizasyonu',
        'Contact form entegrasyonu',
        '3 ay ücretsiz destek',
        'SSL sertifikası'
      ],
      color: 'from-blue-400 to-blue-600',
      popular: false
    },
    {
      id: 'pro',
      name: 'Professional',
      price: '₺35,000',
      period: '/proje',
      description: 'Büyüyen işletmeler için',
      features: [
        'Özel SaaS platform',
        'Admin dashboard',
        'Kullanıcı yönetimi',
        'Analytics entegrasyonu',
        '6 ay ücretsiz destek',
        'Özel domain setup',
        'Database tasarımı'
      ],
      color: 'from-purple-400 to-purple-600',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: '₺75,000+',
      period: '/proje',
      description: 'Büyük şirketler için',
      features: [
        'Tam özelleştirilmiş platform',
        'Microservices mimarisi',
        'Advanced security',
        'Third-party entegrasyonlar',
        '12 ay premium destek',
        'Load balancing',
        'Custom integrations',
        'Dedicated support'
      ],
      color: 'from-yellow-400 to-orange-600',
      popular: false
    }
  ];

  return (
    <section 
      id="services" 
      className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-blue-700 dark:text-blue-300 font-medium">Premium Hizmetler</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Dijital Çözümler
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            İşinizi büyütecek profesyonel SaaS çözümleri ve modern teknolojilerle 
            rekabette önde olun. Her proje özel olarak tasarlanır ve geliştirilir.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-24">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3 -right-3 z-20">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    Popüler
                  </div>
                </div>
              )}

              <div className="relative h-full bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 overflow-hidden">
                {/* Icon */}
                <div className={`relative mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 shadow-lg`}>
                  <service.icon className="w-full h-full text-white" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-3"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`} />
                        <span className="text-slate-600 dark:text-slate-300 text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Price & Duration */}
                  <div className="flex justify-between items-center mb-6 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                    <div>
                      <div className="text-2xl font-bold text-slate-800 dark:text-white">
                        {service.price}
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        Başlangıç fiyatı
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-slate-600 dark:text-slate-300">
                        {service.duration}
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        Tahmini süre
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className={`w-full py-3 px-6 rounded-xl font-semibold bg-gradient-to-r ${service.color} text-white shadow-lg flex items-center justify-center gap-2`}>
                    Detayları Görüntüle
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Plans Section */}
        <div className="text-center mb-16">
          <h3 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Fiyatlandırma Planları
            </span>
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            İhtiyacınıza en uygun paketi seçin ve dijital dönüşümünüze hemen başlayın.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative group cursor-pointer ${plan.popular ? 'lg:scale-105' : ''}`}
              onClick={() => setSelectedPlan(plan.id)}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    En Popüler
                  </div>
                </div>
              )}

              <div className={`relative h-full bg-white dark:bg-slate-800 rounded-3xl p-8 border-2 ${
                  plan.popular 
                    ? 'border-purple-300 dark:border-purple-600 shadow-2xl' 
                    : 'border-slate-200 dark:border-slate-700'
                } ${selectedPlan === plan.id ? 'ring-4 ring-blue-200 dark:ring-blue-800' : ''}`}>

                <div className="relative z-10">
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <h4 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
                      {plan.name}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-8">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold text-slate-800 dark:text-white">
                        {plan.price}
                      </span>
                      <span className="text-slate-500 dark:text-slate-400">
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-slate-600 dark:text-slate-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button className={`w-full py-4 px-6 rounded-xl font-semibold ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                        : 'border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300'
                    }`}>
                    {plan.popular ? 'Şimdi Başla' : 'Planı Seç'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Özel Bir Çözüme Mi İhtiyacınız Var?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Size özel tasarlanmış çözümler için bizimle iletişime geçin. 
              Ücretsiz danışmanlık hizmeti sunuyoruz.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold flex items-center gap-2 mx-auto">
              Ücretsiz Danışmanlık Al
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}