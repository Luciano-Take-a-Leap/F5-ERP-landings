'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface ScrollableSectionProps {
  tag: React.ReactNode;
  title: string;
  subsections: {
    title: string;
    description: string;
    image?: string;
  }[];
}

const ScrollableSection = ({ tag, title, subsections }: ScrollableSectionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const subsectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (activeIndex === visibleIndex) return;

    const fadeStart = setTimeout(() => {
      setFading(true);
    }, 0);

    const timeout = setTimeout(() => {
      setVisibleIndex(activeIndex);
      setFading(false);
    }, 250);

    return () => {
      clearTimeout(fadeStart);
      clearTimeout(timeout);
    };
  }, [activeIndex, visibleIndex]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    subsectionRefs.current.forEach((el, index) => {
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(index);
          }
        },
        {
          root: null,
          rootMargin: '-40% 0px -40% 0px',
          threshold: 0,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [subsections]);

  const currentImage = subsections[visibleIndex]?.image;

  return (
    <section className="w-full px-6 py-24 md:px-12 lg:px-20">
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
              <p className="max-w-prose text-base leading-relaxed text-muted-foreground">
                {subsection.description}
              </p>
            </div>
          ))}
        </div>
        <div className="hidden w-[45%] lg:block">
          <div className="sticky top-[20vh] w-full h-[50vh]">
            {currentImage ? (
              <Image
                key={visibleIndex}
                src={currentImage}
                fill
                alt={subsections[visibleIndex]?.title ?? ''}
                className={[
                  'h-full w-full rounded-2xl object-cover shadow-xl transition-opacity duration-500',
                  fading ? 'opacity-0' : 'opacity-100',
                ].join(' ')}
              />
            ) : (
              <div
                className={[
                  'flex h-full w-full items-center justify-center rounded-2xl bg-muted shadow-inner transition-opacity duration-500',
                  fading ? 'opacity-0' : 'opacity-100',
                ].join(' ')}
              >
                <span className="text-sm text-muted-foreground">No hay imagen</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollableSection;
