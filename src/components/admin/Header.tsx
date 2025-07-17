"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

interface HeaderProps {
  title: string;
  description?: string;
  actionButton?: {
    label: string;
    onClick: () => void;
    icon?: React.ReactNode;
  };
}

export default function Header({ title, description, actionButton }: HeaderProps) {
  return (
    <motion.div 
      className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-xl border-b border-slate-700/50 p-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            {title}
          </h1>
          {description && (
            <p className="text-slate-400 mt-1">{description}</p>
          )}
        </div>
        {actionButton && (
          <motion.button
            onClick={actionButton.onClick}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {actionButton.icon || <Zap size={16} />}
            {actionButton.label}
          </motion.button>
        )}
      </div>
    </motion.div>
  );
}