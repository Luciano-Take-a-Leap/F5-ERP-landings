'use client';

import { useEffect, useRef, useState } from 'react';

const DEFAULT_PRIMARY_COLOR = '00e6bb';
const DEFAULT_BACKGROUND_COLOR = '0d0d0d';
const DEFAULT_TEXT_COLOR = 'ffffff';
const DEFAULT_IFRAME_TITLE = 'Calendly Scheduling Page';

function getCalendlyPrimaryColor() {
  if (typeof window === 'undefined') {
    return DEFAULT_PRIMARY_COLOR;
  }

  const rawPrimaryColor = getComputedStyle(document.documentElement)
    .getPropertyValue('--primary')
    .trim()
    .replace('#', '');

  return /^([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(rawPrimaryColor)
    ? rawPrimaryColor
    : DEFAULT_PRIMARY_COLOR;
}

function buildCalendlyEmbedUrl(calendlyUrl: string, primaryColor: string) {
  try {
    const url = new URL(calendlyUrl);

    url.searchParams.set('background_color', DEFAULT_BACKGROUND_COLOR);
    url.searchParams.set('primary_color', primaryColor);
    url.searchParams.set('text_color', DEFAULT_TEXT_COLOR);
    url.searchParams.set('embed_type', 'Inline');
    url.searchParams.set('embed_domain', '1');

    return url.toString();
  } catch {
    return calendlyUrl;
  }
}

interface CalendlySectionProps {
  title: React.ReactNode;
  calendlyUrl: string;
  id?: string;
}

function CalendlySection({ title, calendlyUrl, id }: CalendlySectionProps) {
  const primaryColor = getCalendlyPrimaryColor();
  const embedUrl = buildCalendlyEmbedUrl(calendlyUrl, primaryColor);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
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
      <div className="mx-auto w-full px-4">
        <h2 className="text-4xl font-extrabold tracking-tight mt-6 mb-12">{title}</h2>
        <div className="relative w-full min-w-[320px] h-[900px]">
          <iframe
            src={embedUrl}
            title={DEFAULT_IFRAME_TITLE}
            className={
              isVisible
                ? 'h-full w-full border-0 opacity-100'
                : 'fixed top-0 left-0 h-px w-px border-0 opacity-0 pointer-events-none'
            }
            tabIndex={isVisible ? 0 : -1}
            aria-hidden={isVisible ? undefined : true}
          />
        </div>
      </div>
    </section>
  );
}

export default CalendlySection;
