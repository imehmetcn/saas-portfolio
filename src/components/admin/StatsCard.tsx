"use client";

import React from 'react';
import Link from 'next/link';

interface StatsCardProps {
  title: string;
  count: number;
  color: string;
  icon: string;
  link: string;
}

export default function StatsCard({ title, count, color, icon, link }: StatsCardProps) {
  return (
    <Link href={link}>
      <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-slate-600 transition-all cursor-pointer group">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-slate-400 text-sm font-medium">{title}</p>
            <p className="text-3xl font-bold mt-2 text-white">{count.toLocaleString()}</p>
          </div>
          <div className={`w-14 h-14 ${color} rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
            {icon}
          </div>
        </div>
      </div>
    </Link>
  );
}