import React from 'react';
import Image from 'next/image';

type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  size?: AvatarSize;
  className?: string;
  status?: 'online' | 'offline' | 'busy' | 'away';
}

export function Avatar({ 
  src, 
  alt = '', 
  name = '', 
  size = 'md', 
  className = '',
  status
}: AvatarProps) {
  // Size classes
  const sizeClasses = {
    xs: 'w-6 h-6 text-xs',
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
    xl: 'w-16 h-16 text-xl',
  };
  
  // Status classes
  const statusClasses = {
    online: 'bg-success-500',
    offline: 'bg-neutral-400',
    busy: 'bg-error-500',
    away: 'bg-warning-500',
  };
  
  // Get initials from name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };
  
  // Base classes
  const baseClasses = 'relative inline-flex rounded-full overflow-hidden';
  
  // Combine all classes
  const avatarClasses = `${baseClasses} ${sizeClasses[size]} ${className}`;
  
  return (
    <div className={avatarClasses}>
      {src ? (
        <Image 
          src={src} 
          alt={alt || name} 
          width={64}
          height={64}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-muted text-muted-foreground font-medium">
          {name ? getInitials(name) : '?'}
        </div>
      )}
      
      {status && (
        <span className={`absolute bottom-0 right-0 block rounded-full ring-2 ring-background ${statusClasses[status]}`} style={{
          width: size === 'xs' ? '8px' : size === 'sm' ? '10px' : size === 'md' ? '12px' : size === 'lg' ? '14px' : '16px',
          height: size === 'xs' ? '8px' : size === 'sm' ? '10px' : size === 'md' ? '12px' : size === 'lg' ? '14px' : '16px',
        }}></span>
      )}
    </div>
  );
}

interface AvatarGroupProps {
  children: React.ReactNode;
  max?: number;
  className?: string;
}

export function AvatarGroup({ children, max, className = '' }: AvatarGroupProps) {
  const childrenArray = React.Children.toArray(children);
  const totalAvatars = childrenArray.length;
  const visibleAvatars = max ? childrenArray.slice(0, max) : childrenArray;
  const remainingAvatars = max && totalAvatars > max ? totalAvatars - max : 0;
  
  return (
    <div className={`flex -space-x-2 ${className}`}>
      {visibleAvatars.map((child, index) => (
        <div key={index} className="relative inline-block ring-2 ring-background rounded-full">
          {child}
        </div>
      ))}
      
      {remainingAvatars > 0 && (
        <div className="relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-muted text-muted-foreground font-medium text-sm ring-2 ring-background">
          +{remainingAvatars}
        </div>
      )}
    </div>
  );
}