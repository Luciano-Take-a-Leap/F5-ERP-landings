'use client';

import ComponentResolver from '@/landing-corralon/components/layout/homepage-component-resolver';
import { HomePageSection } from '@/landing-corralon/types';
import React from 'react';

interface HomePageClientProps {
  sections: Array<HomePageSection>;
  redirectionUrl: string | null;
  whatsappConfig: {
    phoneNumber: string;
    initialMessage: string;
  } | null;
  countdownLimitDate?: string;
}

export default function HomePageComponent({
  sections,
  redirectionUrl,
  countdownLimitDate,
}: HomePageClientProps) {
  if (!sections || sections.length === 0) {
    return (
      <div className="flex flex-col w-screen justify-center items-center min-h-screen">
        <div>No sections configured in Sanity Studio</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-screen justify-center items">
      <main className="flex-1 w-full flex flex-col items-center justify-center">
        <ComponentResolver
          sections={sections}
          redirectionUrl={redirectionUrl}
          countdownLimitDate={countdownLimitDate}
        />
      </main>
    </div>
  );
}
