"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ChevronDown, Code, Palette, Zap } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Ultra smooth parallax transforms with spring physics
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 50,
    restDelta: 0.0001
  });

  const y = useTransform(smoothProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(smoothProgress, [0, 0.5, 0.8], [1, 0.6, 0]);
  const scale = useTransform(smoothProgress, [0, 1], [1, 0.95]);
  const blur = useTransform(smoothProgress, [0, 1], ["blur(0px)", "blur(2px)"]);

  return (
    <motion.section 
      ref={ref}
      style={{ 
        y, 
        opacity, 
        scale,
        filter: blur,
        willChange: "transform, opacity, filter"
      }}
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Ana Başlık */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-800 dark:text-white mb-6">
            <span className="block">Modern</span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              SaaS Çözümleri
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Yaratıcı tasarım ve gelişmiş teknoloji ile işinizi dijital dünyada öne çıkarıyorum
          </p>
        </motion.div>

        {/* CTA Butonları */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
            View My Work
          </button>
          <button className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300">
            Get In Touch
          </button>
        </motion.div>

        {/* Özellik Kartları */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-lg rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300">
            <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Code className="text-blue-600 dark:text-blue-400" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
              Modern Kodlama
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              En güncel teknolojiler ile performanslı ve ölçeklenebilir uygulamalar
            </p>
          </div>

          <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-lg rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300">
            <div className="bg-purple-100 dark:bg-purple-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Palette className="text-purple-600 dark:text-purple-400" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
              Yaratıcı Tasarım
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Kullanıcı deneyimini önceleyen, etkileyici ve işlevsel arayüzler
            </p>
          </div>

          <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-lg rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300">
            <div className="bg-green-100 dark:bg-green-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Zap className="text-green-600 dark:text-green-400" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
              Hızlı Çözümler
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Zamanında teslimat ve sürekli destek ile projelerinizi hayata geçiriyorum
            </p>
          </div>
        </motion.div>

        {/* Scroll İndikartörü */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-slate-400 dark:text-slate-500"
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
