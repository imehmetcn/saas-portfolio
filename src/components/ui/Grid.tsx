import React from 'react';

type GridColumns = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type GridGap = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface GridProps {
  children: React.ReactNode;
  cols?: GridColumns | { sm?: GridColumns; md?: GridColumns; lg?: GridColumns; xl?: GridColumns };
  gap?: GridGap | { x?: GridGap; y?: GridGap };
  className?: string;
}

export function Grid({ 
  children, 
  cols = 1, 
  gap = 'md',
  className = '' 
}: GridProps) {
  // Base classes
  const baseClasses = 'grid';
  
  // Column classes
  let colClasses = '';
  
  if (typeof cols === 'number') {
    colClasses = `grid-cols-${cols}`;
  } else {
    const { sm, md, lg, xl } = cols;
    colClasses = [
      'grid-cols-1',
      sm && `sm:grid-cols-${sm}`,
      md && `md:grid-cols-${md}`,
      lg && `lg:grid-cols-${lg}`,
      xl && `xl:grid-cols-${xl}`,
    ].filter(Boolean).join(' ');
  }
  
  // Gap classes
  let gapClasses = '';
  
  if (typeof gap === 'string') {
    gapClasses = getGapClass(gap);
  } else {
    const { x, y } = gap;
    gapClasses = [
      x && `gap-x-${getGapValue(x)}`,
      y && `gap-y-${getGapValue(y)}`,
    ].filter(Boolean).join(' ');
  }
  
  // Combine all classes
  const gridClasses = `${baseClasses} ${colClasses} ${gapClasses} ${className}`;
  
  return (
    <div className={gridClasses}>
      {children}
    </div>
  );
}

// Helper function to get gap class
function getGapClass(gap: GridGap): string {
  return `gap-${getGapValue(gap)}`;
}

// Helper function to get gap value
function getGapValue(gap: GridGap): string {
  switch (gap) {
    case 'none': return '0';
    case 'xs': return '2';
    case 'sm': return '4';
    case 'md': return '6';
    case 'lg': return '8';
    case 'xl': return '12';
    default: return '6';
  }
}