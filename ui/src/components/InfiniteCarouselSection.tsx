import React from 'react';
import { cn } from '../lib/utils';
import InfiniteCarousel from './InfiniteCarousel';

interface InfiniteCarouselRow {
  _key: string;
  speed?: 'slow' | 'medium' | 'fast';
  direction?: 'leftToRight' | 'rightToLeft';
  items: string[];
}

interface InfiniteCarouselSectionProps {
  title?: string;
  data: InfiniteCarouselRow[];
}

const InfiniteCarouselSection: React.FC<InfiniteCarouselSectionProps> = ({
  data,
  title,
}) => {
  if (!data?.length) return null;

  return (
    <section className={cn('relative w-full overflow-hidden py-8')}>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, #9ca3af 1px, transparent 1px)',
          backgroundSize: '30px 30px',
          maskImage:
            'radial-gradient(ellipse 50% 50% at 50% 50%, black 10%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 50% 50% at 50% 50%, black 10%, transparent 100%)',
        }}
      />

      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32"
        style={{
          background: 'linear-gradient(to right, var(--color-background), transparent)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32"
        style={{
          background: 'linear-gradient(to left, var(--color-background), transparent)',
        }}
      />

      {title && (
        <h2 className="relative z-20 px-6 text-center text-xl tracking-tight">{title}</h2>
      )}

      <div className="relative flex w-full flex-col gap-3">
        {data.map((row) => (
          <InfiniteCarousel
            key={row._key}
            speed={row.speed}
            direction={row.direction}
            items={row.items}
          />
        ))}
      </div>
    </section>
  );
};

export default InfiniteCarouselSection;
