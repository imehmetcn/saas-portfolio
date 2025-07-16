import React from 'react';

type FlexDirection = 'row' | 'row-reverse' | 'col' | 'col-reverse';
type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';
type FlexJustify = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
type FlexItems = 'start' | 'end' | 'center' | 'baseline' | 'stretch';
type FlexGap = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface FlexProps {
  children: React.ReactNode;
  direction?: FlexDirection;
  wrap?: FlexWrap;
  justify?: FlexJustify;
  items?: FlexItems;
  gap?: FlexGap | { x?: FlexGap; y?: FlexGap };
  className?: string;
  as?: React.ElementType;
}

export function Flex({ 
  children, 
  direction = 'row', 
  wrap = 'nowrap', 
  justify = 'start', 
  items = 'start',
  gap = 'none',
  className = '',
  as: Component = 'div'
}: FlexProps) {
  // Base classes
  const baseClasses = 'flex';
  
  // Direction classes
  const directionClasses = {
    'row': 'flex-row',
    'row-reverse': 'flex-row-reverse',
    'col': 'flex-col',
    'col-reverse': 'flex-col-reverse',
  };
  
  // Wrap classes
  const wrapClasses = {
    'nowrap': 'flex-nowrap',
    'wrap': 'flex-wrap',
    'wrap-reverse': 'flex-wrap-reverse',
  };
  
  // Justify classes
  const justifyClasses = {
    'start': 'justify-start',
    'end': 'justify-end',
    'center': 'justify-center',
    'between': 'justify-between',
    'around': 'justify-around',
    'evenly': 'justify-evenly',
  };
  
  // Items classes
  const itemsClasses = {
    'start': 'items-start',
    'end': 'items-end',
    'center': 'items-center',
    'baseline': 'items-baseline',
    'stretch': 'items-stretch',
  };
  
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
  const flexClasses = `
    ${baseClasses} 
    ${directionClasses[direction]} 
    ${wrapClasses[wrap]} 
    ${justifyClasses[justify]} 
    ${itemsClasses[items]} 
    ${gapClasses} 
    ${className}
  `.trim().replace(/\s+/g, ' ');
  
  return (
    <Component className={flexClasses}>
      {children}
    </Component>
  );
}

// Helper function to get gap class
function getGapClass(gap: FlexGap): string {
  return `gap-${getGapValue(gap)}`;
}

// Helper function to get gap value
function getGapValue(gap: FlexGap): string {
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