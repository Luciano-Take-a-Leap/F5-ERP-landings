import React from 'react';
import { cn } from '../lib/utils';
import Image from 'next/image';

interface InfiniteCarouselItemProps {
  imageUrl: string;
  alt?: string;
  className?: string;
}

const InfiniteCarouselItem: React.FC<InfiniteCarouselItemProps> = ({
  imageUrl,
  alt = '',
  className,
}) => {
  return (
    <div
      className={cn(
        'relative shrink-0',
        'h-16 w-16 md:h-24 md:w-24',
        'rounded-xl overflow-hidden',
        'border border-zinc-200 dark:border-zinc-800',
        'bg-zinc-50 dark:bg-zinc-900',
        'shadow-sm',
        'select-none',
        className
      )}
    >
      <Image
        src={imageUrl}
        alt={alt}
        draggable={false}
        className="w-full h-full object-contain p-2"
        fill
      />
    </div>
  );
};

export default InfiniteCarouselItem;
