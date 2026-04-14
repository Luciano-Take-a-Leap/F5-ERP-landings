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
    <section className={cn('w-full flex flex-col gap-4 py-8 overflow-hidden')}>
      {title && (
        <h2 className="px-6 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          {title}
        </h2>
      )}

      <div className="flex flex-col gap-3 w-full">
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
