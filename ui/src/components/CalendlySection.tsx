'use client';

import { InlineWidget } from 'react-calendly';
import { useEffect, useState } from 'react';

interface CalendlySectionProps {
  title: React.ReactNode;
  calendlyUrl: string;
  id?: string;
}

function CalendlySection({ title, calendlyUrl, id }: CalendlySectionProps) {
  const [primaryColor, setPrimaryColor] = useState<string | null>(null);

  useEffect(() => {
    const raw = getComputedStyle(document.documentElement)
      .getPropertyValue('--primary')
      .trim();
      //eslint-disable-next-line
    setPrimaryColor(raw.replace('#', '') || '007bff');
  }, []);

  return (
    <section className="w-full py-10 flex items-center justify-center text-center" id={id}>
      <div className="mx-auto w-full px-4">
        <h2 className="text-4xl font-extrabold tracking-tight mt-6 mb-12">
          {title}
        </h2>
        {primaryColor && (
          <InlineWidget
            url={calendlyUrl}
            pageSettings={{ primaryColor }}
            styles={{ height: '900px', width: '100%' }}
          />
        )}
      </div>
    </section>
  );
}

export default CalendlySection;