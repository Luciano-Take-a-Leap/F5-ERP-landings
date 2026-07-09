'use client';

import Image from 'next/image';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import { Card, CardContent } from './ui/card';

interface ImageCarouselProps {
  images: string[];
  alt: string;
  className?: string;
  singleImageClassName?: string;
  contentClassName?: string;
  imageClassName?: string;
}

function ImageCarousel({
  images,
  alt,
  className = 'w-full',
  singleImageClassName = 'relative w-full h-full min-h-64',
  contentClassName = 'flex aspect-video items-center justify-center relative',
  imageClassName = 'rounded-2xl object-cover',
}: ImageCarouselProps) {
  const plugin = useRef(Autoplay({ delay: 3500, stopOnInteraction: true }));

  if (images.length === 1) {
    return (
      <div className={singleImageClassName}>
        <Image src={images[0]} alt={alt} className={imageClassName} fill />
      </div>
    );
  }

  return (
    <Carousel
      plugins={[plugin.current]}
      className={className}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="h-full">
        {images.map((src, index) => (
          <CarouselItem key={index} className="h-full">
            <Card className="h-full bg-transparent border-none shadow-none outline-none">
              <CardContent className={contentClassName}>
                <Image src={src} alt={`${alt} - image ${index + 1}`} className={imageClassName} fill />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default ImageCarousel;
export { ImageCarousel };
