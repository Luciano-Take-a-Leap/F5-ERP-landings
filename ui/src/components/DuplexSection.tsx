'use client';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';
import { Card, CardContent } from './ui/card';

interface DuplexSectionProps {
  tag: React.ReactNode;
  title: React.ReactNode;
  textSection?: React.ReactNode;
  images: string[];
  ctaButton?: React.ReactNode;
  textFirst?: boolean;
  id?: string;
}

function DuplexSection({
  tag,
  title,
  images,
  textSection,
  ctaButton,
  textFirst = true,
  id,
}: DuplexSectionProps) {
  const plugin = useRef(Autoplay({ delay: 3500, stopOnInteraction: true }));

  const ImageBlock = () =>
    images?.length === 1 ? (
      <div className="relative w-full h-full min-h-64">
        <Image
          src={images[0]}
          alt={`Image for ${title}`}
          className="rounded-lg object-cover"
          fill
        />
      </div>
    ) : (
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index}>
              <Card className="bg-transparent border-none shadow-none outline-none">
                <CardContent className="flex aspect-video items-center justify-center relative">
                  <Image
                    src={src}
                    alt={`${title} - image ${index + 1}`}
                    className="rounded-lg object-cover"
                    fill
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    );

  const TextBlock = () => (
    <div className="flex flex-col gap-4 md:max-w-[70%]">
      {textSection}
      {ctaButton && <div className='mt-6'>{ctaButton}</div>}
    </div>
  );

  return (
    <section className="w-full py-12 overflow-hidden" id={id}>
      {tag}
      <h2 className="text-4xl font-extrabold tracking-tight mt-6 mb-12 max-w-2xl">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {textFirst ? (
          <>
            <TextBlock />
            <ImageBlock />
          </>
        ) : (
          <>
            <ImageBlock />
            <TextBlock />
          </>
        )}
      </div>
    </section>
  );
}

export default DuplexSection;
