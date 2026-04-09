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
            <section key={sectionKey} className="w-full md:mt-20">
              <Hero
                title={<RichText value={mainContent} />}
                description={subtitle}
                mobileBackgroundImage={
                  mobileBackgroundImage
                    ? generateSanityImageUrl(mobileBackgroundImage)
                    : generateSanityImageUrl(backgroundImage)
                }
                backgroundImage={generateSanityImageUrl(backgroundImage)}
                button={
                  ctaButton ? (
                    <Button
                      className="font-extrabold p-5"
                      size="lg"
                      onClick={() => navigateToLink(ctaButton.href || '', router)}
                    >
                      {ctaButton.label}
                    </Button>
                  ) : null
                }
              />
            </section>
          );
        }

        if (isFAQSection(section)) {
          return (
            <FAQSection
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
              key={sectionKey}
              tag={<Tag text={section.tag || ''} variant="outline" />}
              title={<RichText value={section.title} />}
              textSection={<RichText value={section.textContent} />}
              images={section.images?.map((img) => generateSanityImageUrl(img)) || []}
              ctaButton={
                section.ctaButton ? (
                  <Button
                    className="font-extrabold p-5"
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

        if (isScrollableSection(section)) {
          return (
            <ScrollableSection
              key={sectionKey}
              tag={<Tag text={section.tag || ''} variant="outline" />}
              title={<RichText value={section.title} />}
              subsections={
                section.subsections?.map((subsect) => ({
                  title: subsect.title || '',
                  description: <RichText value={subsect.content} />,
                  image: subsect.image
                    ? generateSanityImageUrl(subsect.image)
                    : undefined,
                })) || []
              }
            />
          );
        }

        if (isTestimonialsSection(section)) {
          return (
            <TestimonialsSection
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

        if (section._type === 'calendlySection') {
          return (
            <CalendlySection
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
