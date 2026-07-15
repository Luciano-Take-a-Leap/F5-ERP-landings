'use client';

import { useEffect, useRef, useState } from 'react';
import ImageCarousel from './ImageCarousel';

interface ScrollableSectionProps {
  tag: React.ReactNode;
  title: React.ReactNode;
  subsections: {
    title: string;
    description: React.ReactNode;
    images?: string[];
  }[];
  id?: string;
}

const ScrollableSection = ({ tag, title, subsections, id }: ScrollableSectionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const subsectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (activeIndex === visibleIndex) return;
    //eslint-disable-next-line
    setFading(true);
    const timeout = setTimeout(() => {
      setVisibleIndex(activeIndex);
      setFading(false);
    }, 250);

    return () => clearTimeout(timeout);
  }, [activeIndex, visibleIndex]);

  useEffect(() => {
    const handleScroll = () => {
      const viewportCenter = window.innerHeight / 2;
      let closestIndex = 0;
      let closestDistance = Infinity;

      subsectionRefs.current.forEach((el, index) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const elCenter = rect.top + rect.height / 2;
        const distance = Math.abs(elCenter - viewportCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [subsections]);

  const currentImages = subsections[visibleIndex]?.images ?? [];

  return (
    <section className="w-full max-w-7xl px-6 md:px-0 py-10 relative" id={id}>
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundSize: '20px 20px',
          background: 'radial-gradient(ellipse at 50% 50%, #11665738 20%, #000000 70%)',
        }}
      />
      <div className="mb-12 flex flex-col items-start gap-4">
        {tag}
        <h2 className="text-4xl font-bold tracking-tight">{title}</h2>
      </div>

      <div className="relative flex gap-12 lg:gap-20">
        <div className="flex flex-1 flex-col">
          {subsections.map((subsection, index) => (
            <div
              key={index}
              ref={(el) => {
                subsectionRefs.current[index] = el;
              }}
              className={[
                'flex flex-col min-h-[50vh] justify-evenly gap-3 border-b border-border py-16 transition-opacity duration-300 last:border-none',
                activeIndex === index ? 'opacity-100' : 'opacity-40',
              ].join(' ')}
            >
              <h3 className="text-2xl font-semibold">{subsection.title}</h3>
              <div className="max-w-prose text-base leading-relaxed">
                {subsection.description}
              </div>
              {subsection.images && subsection.images.length > 0 && (
                <div className="w-full h-56 lg:hidden">
                  <ImageCarousel
                    images={subsection.images}
                    alt={subsection.title}
                    className="h-full w-full"
                    singleImageClassName="relative w-full h-full"
                    contentClassName="relative h-full"
                    imageClassName="rounded-xl object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden w-[45%] lg:block">
          <div className="sticky top-[20vh] w-full h-[50vh]">
            <div
              className={[
                'h-full w-full transition-opacity duration-500',
                fading ? 'opacity-0' : 'opacity-100',
              ].join(' ')}
            >
              {currentImages.length > 0 ? (
                <ImageCarousel
                  key={visibleIndex}
                  images={currentImages}
                  alt={subsections[visibleIndex]?.title ?? ''}
                  className="h-full w-full"
                  singleImageClassName="relative w-full h-full"
                  contentClassName="relative h-full"
                  imageClassName="rounded-2xl shadow-xl object-contain"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center rounded-2xl bg-muted shadow-inner">
                  <span className="text-sm text-muted-foreground">No hay imagen</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollableSection;
