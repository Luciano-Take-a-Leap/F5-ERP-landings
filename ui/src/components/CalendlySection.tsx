'use client';

import { InlineWidget } from 'react-calendly';
import { useEffect, useState } from 'react';

interface CalendlySectionProps {
  title: React.ReactNode;
  calendlyUrl: string;
}

function CalendlySection({ title, calendlyUrl }: CalendlySectionProps) {
  const [primaryColor, setPrimaryColor] = useState<string | null>(null);

  useEffect(() => {
    const raw = getComputedStyle(document.documentElement)
      .getPropertyValue('--primary')
      .trim();
        console.log('raw primary:', JSON.stringify(raw));

      //eslint-disable-next-line
    setPrimaryColor(raw.replace('#', '') || '007bff');
  }, []);

  return (
    <section className="w-full py-16 flex items-center justify-center text-center">
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