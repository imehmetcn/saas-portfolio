"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Mail, Globe, Code, Palette, Github, Linkedin } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [heroData, setHeroData] = useState({
    title: "Mehmet Can Şahin",
    subtitle: "UI/UX Front-End Developer",
    description: "Teknolojiye olan merakım ve tutkum nedeniyle web geliştirme alanında uzmanlaşıyor, kullanıcı odaklı ve görsel açıdan etkileyici dijital deneyimler tasarlıyorum.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript", "UI/UX", "Figma"]
  });

  // Admin panelinden verileri yükle
  useEffect(() => {
    const savedData = localStorage.getItem("heroData");
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        setHeroData(parsedData);
      } catch (error) {
        console.error("Hero verileri yüklenirken hata:", error);
      }
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Scroll animasyonları - mobilde daha yumuşak
  const springConfig = shouldReduceMotion
    ? { stiffness: 120, damping: 40, restDelta: 0.01 }
    : { stiffness: 80, damping: 50, restDelta: 0.0001 };

  const smoothProgress = useSpring(scrollYProgress, springConfig);

  // Parallax efektleri - mobilde azaltılmış
  const y = useTransform(smoothProgress, [0, 1], shouldReduceMotion ? ["0%", "15%"] : ["0%", "30%"]);
  const opacity = useTransform(smoothProgress, [0, 0.5, 0.8], shouldReduceMotion ? [1, 0.9, 0.7] : [1, 0.6, 0]);
  const scale = useTransform(smoothProgress, [0, 1], shouldReduceMotion ? [1, 0.99] : [1, 0.95]);

  // İsmi parçalara ayır
  const nameParts = heroData.title.split(" ");
  const firstName = nameParts.slice(0, -1).join(" ");
  const lastName = nameParts[nameParts.length - 1];

  // Animasyon ayarları - mobilde daha yumuşak
  const animationProps = shouldReduceMotion ? {
    initial: { opacity: 0.9 },
    animate: { opacity: 1 },
    transition: { duration: 0.3 }
  } : {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  return (
    <motion.section
      ref={ref}
      style={{
        y,
        opacity,
        scale,
        willChange: "transform, opacity"
      }}
      className="min-h-screen flex items-center justify-center pt-28 md:pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Minimal Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-indigo-400/10 via-blue-400/10 to-purple-400/10 blur-3xl"></div>

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:80px_80px] opacity-20"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10 mt-10 sm:mt-0">
        {/* Professional Badge */}
        <motion.div
          {...animationProps}
          className="inline-flex items-center gap-2 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 px-4 py-2 rounded-full text-sm font-medium mb-8"
        >
          <span>{heroData.subtitle}</span>
        </motion.div>

        {/* Main Heading - Clean & Bold */}
        <motion.h1
          initial={animationProps.initial}
          animate={animationProps.animate}
          transition={{ ...animationProps.transition, delay: shouldReduceMotion ? 0.1 : 0.2 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-800 dark:text-white mb-6 tracking-tight"
        >
          <span className="block mb-2">{firstName}</span>
          <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">{lastName}</span>
        </motion.h1>

        {/* Professional Description */}
        <motion.p
          initial={animationProps.initial}
          animate={animationProps.animate}
          transition={{ ...animationProps.transition, delay: shouldReduceMotion ? 0.15 : 0.4 }}
          className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8"
        >
          {heroData.description}
        </motion.p>

        {/* Skills Tags */}
        <motion.div
          initial={animationProps.initial}
          animate={animationProps.animate}
          transition={{ ...animationProps.transition, delay: shouldReduceMotion ? 0.2 : 0.5 }}
          className="flex flex-wrap gap-2 justify-center mb-8"
        >
          {heroData.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50"
            >
              {skill}
            </span>
          ))}
        </motion.div>

        {/* Social Links - Responsive - Mobilde animasyon yok */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          <a
            href="https://github.com/mehmetcn"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/80 dark:bg-slate-800/80 rounded-full text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors"
          >
            <Github size={14} className="sm:block" />
            <span className="hidden sm:block">github.com/mehmetcn</span>
            <span className="sm:hidden">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/emcshn"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/80 dark:bg-slate-800/80 rounded-full text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors"
          >
            <Linkedin size={14} className="sm:block" />
            <span className="hidden sm:block">linkedin.com/in/emcshn</span>
            <span className="sm:hidden">LinkedIn</span>
          </a>
          <a
            href="mailto:imehmetshn@hotmail.com"
            className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/80 dark:bg-slate-800/80 rounded-full text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors"
          >
            <Mail size={14} className="sm:block" />
            <span className="hidden sm:block">imehmetshn@hotmail.com</span>
            <span className="sm:hidden">Email</span>
          </a>
          <a
            href="https://mehmetcn.com.tr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/80 dark:bg-slate-800/80 rounded-full text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors"
          >
            <Globe size={14} className="sm:block" />
            <span className="hidden sm:block">mehmetcn.com.tr</span>
            <span className="sm:hidden">Web</span>
          </a>
        </div>

        {/* Clean CTA Buttons - Responsive - Mobilde animasyon yok */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#portfolio"
            className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 sm:px-10 py-3 sm:py-5 rounded-full font-semibold text-base sm:text-lg hover:shadow-lg transition-all duration-300 flex items-center gap-2"
          >
            <Code className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Projelerimi İncele</span>
          </a>
          <a
            href="#contact"
            className="bg-white dark:bg-slate-800 text-slate-800 dark:text-white px-6 sm:px-10 py-3 sm:py-5 rounded-full font-semibold text-base sm:text-lg border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 flex items-center gap-2"
          >
            <Palette className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>İletişime Geç</span>
          </a>
        </div>
      </div>
    </motion.section>
  );
}