"use client";

import { motion } from "framer-motion";
import { User, Code2, Briefcase, Award, Download } from "lucide-react";

export default function About() {
  const skills = [
    { name: "React/Next.js", level: 95, color: "bg-blue-500" },
    { name: "TypeScript", level: 90, color: "bg-indigo-500" },
    { name: "Node.js", level: 85, color: "bg-green-500" },
    { name: "Python", level: 80, color: "bg-yellow-500" },
    { name: "UI/UX Design", level: 85, color: "bg-purple-500" },
    { name: "PostgreSQL", level: 75, color: "bg-cyan-500" },
  ];

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp",
      period: "2022 - Günümüz",
      description: "SaaS uygulamaları geliştirme ve takım liderliği"
    },
    {
      title: "Frontend Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      description: "React tabanlı modern web uygulamaları geliştirme"
    },
    {
      title: "Full Stack Developer",
      company: "WebStudio",
      period: "2018 - 2020",
      description: "E-ticaret ve kurumsal web çözümleri"
    }
  ];

  const stats = [
    { number: "50+", label: "Tamamlanan Proje", icon: Briefcase },
    { number: "5+", label: "Yıl Deneyim", icon: User },
    { number: "15+", label: "Mutlu Müşteri", icon: Award },
    { number: "10+", label: "Teknoloji", icon: Code2 },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Scroll-triggered background animations */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="absolute inset-0 overflow-hidden"
      >
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: [0.25, 0.1, 0.25, 1],
            type: "tween"
          }}
          className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: [0.4, 0, 0.2, 1],
            type: "tween"
          }}
          className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Başlık */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-4">
            Hakkımda
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Tutkulu bir yazılım geliştirici olarak modern teknolojilerle yaratıcı çözümler üretiyorum
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Sol Taraf - Açıklama */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">
              Yaratıcı Çözümler, Modern Teknolojiler
            </h3>
            <div className="space-y-4 text-slate-600 dark:text-slate-300 text-lg">
              <p>
                5+ yıllık deneyimimle, kullanıcı odaklı ve performanslı web uygulamaları geliştiriyorum. 
                Modern JavaScript ekosisteminde uzmanlaşmış olup, özellikle React, Next.js ve TypeScript 
                ile güçlü SaaS çözümleri oluşturuyorum.
              </p>
              <p>
                Her projede en iyi kullanıcı deneyimini sunmayı hedefliyor, temiz kod yazma prensiplerini 
                benimsiyor ve sürekli öğrenmeye odaklanıyorum. Startup&apos;lardan büyük şirketlere kadar 
                çeşitli sektörlerde projeler gerçekleştirdim.
              </p>
              <p>
                Amacım, teknolojiyi insanların hayatını kolaylaştıracak şekilde kullanmak ve 
                işletmelerin dijital dönüşüm süreçlerinde güvenilir partner olmak.
              </p>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:shadow-lg transition-all duration-300"
            >
              <Download size={20} />
              CV İndir
            </motion.button>
          </motion.div>

          {/* Sağ Taraf - Yetenekler */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
              Teknik Yetenekler
            </h3>
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-slate-700 dark:text-slate-300">
                    {skill.name}
                  </span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`h-2 rounded-full ${skill.color}`}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* İstatistikler */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-6 mb-4">
                <stat.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-slate-800 dark:text-white">
                  {stat.number}
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-300 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Deneyim */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-slate-800 dark:text-white text-center mb-12">
            Profesyonel Deneyim
          </h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-6 border border-slate-200 dark:border-slate-600"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 dark:text-white">
                      {exp.title}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-slate-500 dark:text-slate-400 font-medium">
                    {exp.period}
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
