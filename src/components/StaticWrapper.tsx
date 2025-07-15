"use client";

import { ReactNode } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface StaticWrapperProps {
  children: ReactNode;
  className?: string;
}

// Mobilde motion'ı tamamen devre dışı bırakan wrapper
export default function StaticWrapper({ children, className }: StaticWrapperProps) {
  const shouldReduceMotion = useReducedMotion();
  
  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }
  
  return <div className={className}>{children}</div>;
}