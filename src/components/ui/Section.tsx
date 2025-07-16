import React from 'react';
import { Container } from './Container';

type SectionVariant = 'default' | 'primary' | 'secondary' | 'muted';
type SectionPadding = 'none' | 'sm' | 'md' | 'lg' | 'xl';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  variant?: SectionVariant;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  paddingY?: SectionPadding;
  className?: string;
}

export function Section({ 
  children, 
  id,
  variant = 'default', 
  containerSize = 'lg',
  paddingY = 'lg',
  className = '' 
}: SectionProps) {
  // Variant classes
  const variantClasses = {
    'default': 'bg-background text-foreground',
    'primary': 'bg-primary text-primary-foreground',
    'secondary': 'bg-secondary text-secondary-foreground',
    'muted': 'bg-muted text-muted-foreground',
  };
  
  // Padding classes
  const paddingClasses = {
    'none': 'py-0',
    'sm': 'py-8',
    'md': 'py-12',
    'lg': 'py-16',
    'xl': 'py-24',
  };
  
  // Base classes
  const baseClasses = 'relative';
  
  // Combine all classes
  const sectionClasses = `${baseClasses} ${variantClasses[variant]} ${paddingClasses[paddingY]} ${className}`;
  
  return (
    <section id={id} className={sectionClasses}>
      <Container size={containerSize}>
        {children}
      </Container>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({ 
  title, 
  subtitle, 
  centered = false,
  className = '' 
}: SectionHeaderProps) {
  const headerClasses = `mb-12 ${centered ? 'text-center' : ''} ${className}`;
  
  return (
    <div className={headerClasses}>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}