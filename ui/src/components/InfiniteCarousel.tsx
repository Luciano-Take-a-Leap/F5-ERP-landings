import { cn } from '../lib/utils';
import React from 'react';
import InfiniteCarouselItem from './InfiniteCarouselItem';

interface InfiniteCarouselProps {
  speed?: 'slow' | 'medium' | 'fast';
  direction?: 'leftToRight' | 'rightToLeft';
  items: string[];
  className?: string;
  gap?: string;
}

const range = (length: number): number[] => Array.from({ length }, (_, i) => i);

const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({
  speed = 'medium',
  direction = 'righToLeft',
  items,
  className,
  gap = '1rem',
}) => {
  const isReverse = direction.includes('leftToRight');

  const getDuration = () => {
    if (speed.includes('slow')) return '50s';
    if (speed.includes('fast')) return '30s';
    return '40s';
  };

  return (
    <div className={cn('group flex overflow-hidden w-full', className)}>
      {range(2).map((n) => (
        <div
          key={n}
          className={cn(
            'flex shrink-0 flex-row justify-around gap-[var(--gap)]',
            'animate-marquee-left py-3 transform',
            isReverse && 'direction-reverse'
          )}
          style={
            {
              '--gap': gap,
              '--duration': getDuration(),
            } as React.CSSProperties
          }
        >
          {items.map((item, index) => (
            <InfiniteCarouselItem key={`${item}-${index}`} imageUrl={item} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default InfiniteCarousel;
