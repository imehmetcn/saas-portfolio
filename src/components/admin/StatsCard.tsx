"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  count: number;
  change?: string;
  changeType?: 'positive' | 'negative';
  color: string;
  icon: LucideIcon | string;
  link: string;
}

export default function StatsCard({ 
  title, 
  count, 
  change, 
  changeType = 'positive', 
  color, 
  icon, 
  link 
}: StatsCardProps) {
  const IconComponent = typeof icon === 'string' ? null : icon;

  return (
    <Link href={link}>
      <motion.div 
        className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-xl border border-slate-700/50 p-6 rounded-2xl hover:border-slate-600/50 transition-all duration-300 cursor-pointer group shadow-lg hover:shadow-xl"
        whileHover={{ scale: 1.02, y: -5 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex items-center justify-between mb-4">
          <div className={`w-12 h-12 bg-gradient-to-r ${color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            {IconComponent ? (
              <IconComponent size={20} className="text-white" />
            ) : (
              <span className="text-xl">{icon}</span>
            )}
          </div>
          {change && (
            <div className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${
              changeType === 'positive' ? 'text-green-400 bg-green-400/10' : 'text-red-400 bg-red-400/10'
            }`}>
              <ArrowUpRight size={12} />
              {change}
            </div>
          )}
        </div>
        <div>
          <p className="text-slate-400 text-sm font-medium mb-1">{title}</p>
          <p className="text-3xl font-bold text-white">{count.toLocaleString()}</p>
        </div>
      </motion.div>
    </Link>
  );
}