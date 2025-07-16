"use client";

import { 
  Code2, 
  Smartphone, 
  Palette, 
  Database,
  CheckCircle,
  Sparkles
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Code2,
      title: "Web Geliştirme",
      description: "Modern web teknolojileri ile responsive ve hızlı web siteleri geliştiriyorum.",
      features: ["React/Next.js", "TypeScript", "Responsive Tasarım", "SEO Optimizasyonu"],
      price: "₺15,000+"
    },
    {
      icon: Palette,
      title: "UI/UX Tasarım",
      description: "Kullanıcı odaklı tasarım ve modern arayüzler ile unutulmaz deneyimler yaratıyorum.",
      features: ["Figma Tasarım", "Prototipleme", "Kullanıcı Deneyimi", "Görsel Tasarım"],
      price: "₺12,000+"
    },
    {
      icon: Smartphone,
      title: "Mobil Uyumlu",
      description: "Tüm cihazlarda mükemmel çalışan, mobil öncelikli tasarımlar geliştiriyorum.",
      features: ["Responsive Design", "Mobile First", "Cross-browser", "Performance"],
      price: "₺8,000+"
    },
    {
      icon: Database,
      title: "Backend Entegrasyon",
      description: "API entegrasyonları ve veritabanı bağlantıları ile dinamik web uygulamaları.",
      features: ["API Entegrasyonu", "Veritabanı", "Authentication", "Real-time"],
      price: "₺20,000+"
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
      ]
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
      popular: true
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
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles size={16} />
            Hizmetlerim
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Dijital Çözümler
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Modern teknolojiler kullanarak işinizi dijital dünyada öne çıkaracak çözümler sunuyorum.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((service) => (
            <div key={service.title} className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {service.description}
              </p>

              <ul className="space-y-2 mb-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="text-lg font-bold text-gray-900 dark:text-white">
                {service.price}
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Plans */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Fiyatlandırma
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            İhtiyacınıza uygun paketi seçin
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white dark:bg-gray-900 rounded-lg p-6 border-2 ${
                plan.popular 
                  ? 'border-blue-600 relative' 
                  : 'border-gray-200 dark:border-gray-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Popüler
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {plan.description}
                </p>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">
                  {plan.price}
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                    <span className="text-gray-600 dark:text-gray-300 text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-lg font-medium ${
                plan.popular
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
              }`}>
                {plan.popular ? 'Şimdi Başla' : 'Planı Seç'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}