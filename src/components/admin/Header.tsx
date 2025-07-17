"use client";

import React from 'react';

interface HeaderProps {
  title: string;
  description?: string;
  actionButton?: {
    label: string;
    onClick: () => void;
  };
}

export default function Header({ title, description, actionButton }: HeaderProps) {
  return (
    <div className="bg-slate-800 p-6 border-b border-slate-700">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">{title}</h1>
          {description && <p className="text-slate-400 mt-1">{description}</p>}
        </div>
        {actionButton && (
          <button 
            onClick={actionButton.onClick}
            className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg text-sm font-medium transition-colors"
          >
            {actionButton.label}
          </button>
        )}
      </div>
    </div>
  );
}