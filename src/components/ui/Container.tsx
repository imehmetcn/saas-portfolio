import React from 'react';

type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

interface ContainerProps {
  children: React.ReactNode;
  size?: ContainerSize;
  className?: string;
  as?: React.ElementType;
}

export function Container({ 
  children, 
  size = 'lg', 
  className = '',
  as: Component = 'div'
}: ContainerProps) {
  // Size classes
  const sizeClasses = {
    sm: 'max-w-screen-sm', // 640px
    md: 'max-w-screen-md', // 768px
    lg: 'max-w-screen-lg', // 1024px
    xl: 'max-w-screen-xl', // 1280px
    full: 'max-w-full',    // 100%
  };
  
  // Base classes
  const baseClasses = 'w-full mx-auto px-4 sm:px-6 md:px-8';
  
  // Combine all classes
  const containerClasses = `${baseClasses} ${sizeClasses[size]} ${className}`;
  
  return (
    <Component className={containerClasses}>
      {children}
    </Component>
  );
}