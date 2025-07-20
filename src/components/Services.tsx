"use client";

import { motion } from "framer-motion";
import { useAdmin } from "@/contexts/AdminContext";
import { 
  Code2, 
  Smartphone, 
  Palette, 
  Database,
  CheckCircle,
  Sparkles,
  Star
} from "lucide-react";

export default function Services() {
  const { services } = useAdmin();
  
  const getIcon = (iconName: string) => {
    const icons: { [key: string]: any } = {
      'code': Code2,
      'smartphone': Smartphone,
      'palette': Palette,
      'database': Database,
      'globe': Code2
    };
    return icons[iconName] || Code2;
  };

  return (
    <section id="services" className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-green-50/30 dark:from-gray-800 dark:via-gray-900 dark:to-green-900/10 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 backdrop-blur-sm border border-green-200/50 dark:border-green-700/50 text-green-600 dark:text-green-400 px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg">
            <Sparkles size={18} />
            Hizmetlerim
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-green-800 to-blue-800 dark:from-white dark:via-green-200 dark:to-blue-200 mb-8 leading-tight">
            Dijital Çözümler
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = getIcon(service.icon);
            return (
              <motion.div 
                key={service.id} 
                className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-white/20 dark:border-gray-700/50 rounded-3xl p-8 shadow-2xl"
                whileHover={{ y: -10 }}
              >
                {service.featured && (
                  <div className="absolute -top-3 -right-3">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <Star size={12} />
                      Öne Çıkan
                    </div>
                  </div>
                )}

                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <IconComponent className="text-white" size={28} />
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300"
                    >
                      <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between mb-6">
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-blue-600 dark:from-white dark:to-blue-400">
                    {service.price}
                  </div>
                  {service.duration && (
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {service.duration}
                    </div>
                  )}
                </div>

                <motion.button
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Detayları Görüntüle
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}