"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function ScrollProgressIndicator() {
  const { scrollYProgress } = useScroll();
  
  // Ultra smooth spring physics for progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 50,
    restDelta: 0.0001
  });
  
  const scaleX = useTransform(smoothProgress, [0, 1], [0, 1]);
  const opacity = useTransform(smoothProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);

  return (
    <>
      {/* Ultra smooth Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transform origin-left z-50"
        style={{ 
          scaleX, 
          opacity,
          willChange: "transform, opacity"
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 50
        }}
      />
      
      {/* Ultra smooth Scroll Progress Circle */}
      <motion.div
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full border-4 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-xl z-50 flex items-center justify-center cursor-pointer"
        style={{ 
          opacity,
          willChange: "transform, opacity"
        }}
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
        }}
        whileTap={{ scale: 0.95 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg className="w-8 h-8 transform -rotate-90" viewBox="0 0 36 36">
          <motion.path
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="100"
            strokeDashoffset="100"
            className="text-slate-300 dark:text-slate-600"
          />
          <motion.path
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="2"
            strokeDasharray="100"
            style={{
              strokeDashoffset: useTransform(smoothProgress, [0, 1], [100, 0])
            }}
            strokeLinecap="round"
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 50
            }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute text-xs font-semibold text-slate-600 dark:text-slate-300">
          ↑
        </div>
      </motion.div>
    </>
  );
}
