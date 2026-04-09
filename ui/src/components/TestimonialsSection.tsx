'use client';
import { useRef } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

interface TestimonialsSectionProps {
  title: React.ReactNode;
  cards: React.ReactNode[];
  id?: string;
}

const TestimonialsSection = ({ title, cards, id }: TestimonialsSectionProps) => {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  return (
    <section className="w-full py-12 overflow-hidden" id={id}>
      <h2 className="text-4xl font-extrabold tracking-tight mt-6 mb-12 text-center">
        {title}
      </h2>

      <div className="relative px-12">
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {cards.map((card, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-full md:basis-1/2 lg:basis-1/3 flex"
              >
                {card}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
