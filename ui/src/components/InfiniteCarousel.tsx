import { cn } from '../lib/utils';
import React from 'react';
import InfiniteCarouselItem from './InfiniteCarouselItem';

interface InfiniteCarouselProps {
  speed?: 'slow' | 'medium' | 'fast';
  direction?: 'leftToRight' | 'rightToLeft';
  items: string[];
  className?: string;
}

const SPEED_MAP: Record<NonNullable<InfiniteCarouselProps['speed']>, string> = {
  slow: '45s',
  medium: '25s',
  fast: '12s',
};

const range = (length: number): number[] => Array.from({ length }, (_, i) => i);

const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({
  speed = 'medium',
  direction = 'leftToRight',
  items,
  className,
}) => {
  const duration = SPEED_MAP[speed ?? 'medium'];
  const isReverse = direction === 'leftToRight';

  return (
    <div className={cn('group flex overflow-hidden w-full', className)}>
      {range(2).map((n) => (
        <div
          key={n}
          className={cn(
            'flex shrink-0 flex-row justify-around gap-[var(--gap)]',
            'animate-marquee-left py-3',
            'group-hover:[animation-play-state:paused]'
          )}
          style={
            {
              animationDuration: duration,
              animationDirection: isReverse ? 'reverse' : 'normal',
            } as React.CSSProperties
          }
        >
          {items.map((item) => (
            <InfiniteCarouselItem key={item} imageUrl={item} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default InfiniteCarousel;
