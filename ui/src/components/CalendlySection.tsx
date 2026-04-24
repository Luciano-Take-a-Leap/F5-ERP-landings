'use client';

import { InlineWidget } from 'react-calendly';
import { useEffect, useRef, useState } from 'react';

interface CalendlySectionProps {
  title: React.ReactNode;
  calendlyUrl: string;
  id?: string;
}

function CalendlySection({ title, calendlyUrl, id }: CalendlySectionProps) {
  const [primaryColor, setPrimaryColor] = useState<string | null>(null);
  const [backgroundColor, setBackgroundColor] = useState<string | null>(null);
  const [textColor, setTextColor] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const rawDocument = getComputedStyle(document.documentElement);

    const primaryRaw = rawDocument.getPropertyValue('--primary').trim();
    const backgroundRaw = rawDocument.getPropertyValue('--background-gray').trim();
    const textRaw = rawDocument.getPropertyValue('--foreground').trim();

    //eslint-disable-next-line
    setPrimaryColor(primaryRaw.replace('#', '') || '007bff');
    setBackgroundColor(backgroundRaw.replace('#', '') || '000000');
    setTextColor(textRaw.replace('#', '') || 'ffffff');

    const sectionElement = sectionRef.current;

    if (!sectionElement) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        setIsVisible(true);
        observer.disconnect();
      },
      { rootMargin: '300px 0px' }
    );

    observer.observe(sectionElement);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-10 flex items-center justify-center text-center"
      id={id}
    >
      <div
        className={`mx-auto w-full px-4 ${isVisible ? 'h-full w-full border-0 opacity-100' : 'fixed top-0 left-0 h-px w-px border-0 opacity-0 pointer-events-none'}`}
      >
        <h2 className="text-4xl font-extrabold tracking-tight mt-6 mb-12">{title}</h2>
        {primaryColor && backgroundColor && textColor && (
          <InlineWidget
            url={calendlyUrl}
            pageSettings={{
              primaryColor,
              backgroundColor,
              textColor,
            }}
            styles={{ height: '900px', width: '100%' }}
          />
        )}
      </div>
    </section>
  );
}

export default CalendlySection;
