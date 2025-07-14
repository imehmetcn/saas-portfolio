"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function ScrollAnimations() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Ultra smooth spring physics
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 40,
    restDelta: 0.0001
  });

  // More subtle parallax transforms
  const backgroundY = useTransform(smoothProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(smoothProgress, [0, 1], ["0%", "60%"]);
  const opacity = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [1, 0.8, 0.5, 0.2]);

  return (
    <div ref={ref} className="fixed inset-0 pointer-events-none z-0">
      {/* Animated Background Elements with smoother motion */}
      <motion.div
        style={{ y: backgroundY, opacity }}
        className="absolute inset-0 opacity-20"
      >
        {/* Floating Shapes with ultra smooth animations */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: [0.4, 0, 0.2, 1],
            type: "tween"
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 25, 0],
            rotate: [0, -8, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: [0.25, 0.1, 0.25, 1],
            type: "tween",
            delay: 2
          }}
          className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-l from-purple-400 to-pink-400 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: [0.4, 0, 0.2, 1],
            type: "tween",
            delay: 4
          }}
          className="absolute bottom-40 left-1/4 w-16 h-16 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 35, 0],
            rotate: [0, 12, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: [0.25, 0.1, 0.25, 1],
            type: "tween",
            delay: 1
          }}
          className="absolute bottom-20 right-1/3 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur-3xl"
        />
      </motion.div>

      {/* Ultra smooth grid pattern */}
      <motion.div
        style={{ y: textY, opacity: useTransform(opacity, [1, 0], [0.05, 0]) }}
        className="absolute inset-0"
      >
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </motion.div>
    </div>
  );
}
