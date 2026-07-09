'use client';

import {
  HomePageSection,
  isHeroSection,
  isCalendlySection,
  isCardsSection,
  isDuplexSection,
  isFAQSection,
  isFullWidthTextSection,
  isScrollableSection,
  isTestimonialsSection,
  isInfiniteCarouselSection,
  isIntegrationsSection,
} from '@/landing-corralon/types';
import Hero from '@ui/Hero';
import FAQSection from '@ui/Faq';
import DuplexSection from '@ui/DuplexSection';
import CardsSection from '@ui/CardsSection';
import ScrollableSection from '@ui/ScrollableSection';
import TestimonialsSection from '@ui/TestimonialsSection';
import FullWidthText from '@ui/FullWidthText';

import React from 'react';
import { generateSanityImageUrl } from '@/landing-corralon/utils/generate-sanity-image-url';
import { Button } from '@ui';
import navigateToLink from '@ui/src/utils/useNavigateToLink';
import { useRouter } from 'next/navigation';
import RichText from '../rich-text-renderer';
import Tag from '@ui/Tag';
import TestimonialCard from '@ui/TestimonialCard';
import CalendlySection from '@ui/CalendlySection';
import InfiniteCarouselSection from '@ui/InfiniteCarouselSection';
import IntegrationSection from '@ui/IntegrationSection';
import { HugeiconsIcon } from '@hugeicons/react';
import { CheckCircle } from '@hugeicons/core-free-icons';
type ComponentResolverProps = {
  sections: HomePageSection[];
};

export default function ComponentResolver({ sections }: ComponentResolverProps) {
  const router = useRouter();
  if (!sections || sections.length === 0) {
    return null;
  }
  return (
    <>
      {sections.map((section, index) => {
        const sectionKey = section._key || section._id || `${section._type}-${index}`;

        if (isHeroSection(section)) {
          const {
            mainContent,
            subtitle,
            mobileBackgroundImage,
            backgroundImage,
            ctaButton,
          } = section;

          return (
            <Hero
              key={sectionKey}
              title={
                <RichText
                  value={mainContent}
                  textClassName="text-5xl md:text-6xl leading-none"
                  className="[&_h1]:-mb-1 [&_h1]:-mt-1 md:[&_h1]:mb-0 md:[&_h1]:-mt-3"
                />
              }
              description={subtitle}
              // video={section.video?.url}
              mobileBackgroundImage={
                mobileBackgroundImage
                  ? generateSanityImageUrl(mobileBackgroundImage)
                  : generateSanityImageUrl(backgroundImage)
              }
              backgroundImage={generateSanityImageUrl(backgroundImage)}
              button={
                ctaButton ? (
                  <Button
                    className="font-extrabold p-5 text-black max-w-60"
                    size="lg"
                    onClick={() => navigateToLink(ctaButton.href || '', router)}
                  >
                    {ctaButton.label}
                  </Button>
                ) : null
              }
            />
          );
        }

        if (isFAQSection(section)) {
          return (
            <FAQSection
              id="faq"
              key={sectionKey}
              title={<RichText value={section.title} />}
              items={
                section.faqs?.map((faq) => ({
                  question: faq.question || '',
                  answer: <RichText value={faq.answer} />,
                })) || []
              }
            />
          );
        }

        if (isDuplexSection(section)) {
          return (
            <DuplexSection
              id="integraciones"
              key={sectionKey}
              tag={
                <Tag text={section.tag || ''} variant="outline" className="text-black" />
              }
              title={<RichText value={section.title} />}
              textSection={
                <RichText
                  value={section.textContent}
                  bulletsIcon={
                    <HugeiconsIcon icon={CheckCircle} className="text-black" />
                  }
                />
              }
              images={section.images?.map((img) => generateSanityImageUrl(img)) || []}
              ctaButton={
                section.ctaButton ? (
                  <Button
                    className="font-extrabold p-5 text-primary bg-background"
                    size="lg"
                    onClick={() => navigateToLink(section.ctaButton?.href || '', router)}
                  >
                    {section.ctaButton.label}
                  </Button>
                ) : null
              }
            />
          );
        }

        if (isCardsSection(section)) {
          return (
            <CardsSection
              key={sectionKey}
              tag={<Tag text={section.tag || ''} variant="outline" />}
              title={<RichText value={section.title} />}
              subtitle={section.subtitle || ''}
              cards={
                section.cards?.map((card) => ({
                  title: card.title || '',
                  description: card.description || '',
                  icon: card.icon,
                })) || []
              }
            />
          );
        }

        if (isFullWidthTextSection(section)) {
          return (
            <FullWidthText key={section._id}>
              <RichText value={section.text} />
            </FullWidthText>
          );
        }

        if (isIntegrationsSection(section)) {
          return (
            <IntegrationSection
              key={sectionKey}
              title={<RichText value={section.title} />}
              mainImage={generateSanityImageUrl(section.mainImage)}
              data={
                section.orbits?.map((orbit) => ({
                  key: orbit._key,
                  direction: orbit.direction,
                  items: orbit.items?.map((item) => ({
                    key: item._key,
                    image: generateSanityImageUrl(item.image),
                    altText: item.alt || '',
                  })),
                })) || []
              }
            />
          );
        }

        if (isInfiniteCarouselSection(section)) {
          return (
            <InfiniteCarouselSection
              key={sectionKey}
              title={section.title}
              data={
                section.rows?.map((row, index) => ({
                  _key: `${row._key}-${index}`,
                  speed: row.speed,
                  items:
                    (row.items?.length || 0) > 0
                      ? Array.from(
                          { length: Math.ceil(25 / (row.items?.length || 1)) },
                          () => row.items || []
                        )
                          .flat()
                          .map((item) => generateSanityImageUrl(item))
                      : [],
                  direction: row.direction,
                })) || []
              }
            />
          );
        }

        if (isScrollableSection(section)) {
          return (
            <ScrollableSection
              id="soluciones"
              key={sectionKey}
              tag={<Tag text={section.tag || ''} variant="outline" />}
              title={<RichText value={section.title} textClassName='leading-none'/>}
              subsections={
                section.subsections?.map((subsect) => ({
                  title: subsect.title || '',
                  description: <RichText value={subsect.content} />,
                  images: subsect.images?.map((img) => generateSanityImageUrl(img)) || [],
                })) || []
              }
            />
          );
        }

        if (isTestimonialsSection(section)) {
          return (
            <TestimonialsSection
              id="clientes"
              key={sectionKey}
              title={<RichText value={section.title} />}
              cards={
                section.cards?.map((card) => (
                  <TestimonialCard
                    key={card._key}
                    text={card.quote || ''}
                    rate={card.rate || 0}
                    author={{
                      name: card.author?.name || '',
                      role: card.author?.role || '',
                      avatar: card.author?.avatar
                        ? generateSanityImageUrl(card.author.avatar)
                        : '',
                    }}
                  />
                )) || []
              }
            />
          );
        }

        if (isCalendlySection(section)) {
          return (
            <CalendlySection
              id="calendly"
              key={section._key}
              title={<RichText value={section.title} />}
              calendlyUrl={section.calendlyLink || ''}
            />
          );
        }

        return (
          <SectionFallback
            key={sectionKey}
            sectionType={(section as HomePageSection)._type}
          />
        );
      })}
    </>
  );
}

export function SectionFallback({ sectionType }: { sectionType: string }) {
  return (
    <div className="p-8 text-center text-gray-500">
      <p>Sección del tipo &quot;{sectionType}&quot; no implementada aún.</p>
    </div>
  );
}
