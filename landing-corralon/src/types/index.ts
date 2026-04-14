import type {
  Hero,
  FAQSection,
  CardsSection,
  ScrollableSection,
  DuplexSection,
  TestimonialsSection,
  CalendlySection,
  FullWidthTextSection,
  InfiniteCarouselSection,
} from './sanity.types';

type BaseSectionType = {
  _id: string;
  _key?: string;
  _createdAt?: string;
  _updatedAt?: string;
  _rev?: string;
};

export type HomePageSection =
  | (Hero & BaseSectionType & { _type: 'hero' })
  | (CardsSection & BaseSectionType & { _type: 'cardsSection' })
  | (ScrollableSection & BaseSectionType & { _type: 'scrollableSection' })
  | (DuplexSection & BaseSectionType & { _type: 'duplexSection' })
  | (TestimonialsSection & BaseSectionType & { _type: 'testimonialsSection' })
  | (FullWidthTextSection & BaseSectionType & { _type: 'fullWidthTextSection' })
  | (CalendlySection & BaseSectionType & { _type: 'calendlySection' })
  | (FAQSection & BaseSectionType & { _type: 'FAQSection' })
  | (InfiniteCarouselSection & BaseSectionType & { _type: 'infiniteCarouselSection' });

export type HomePageData = {
  sections: HomePageSection[];
} | null;

export type ComponentPropsMap = {
  hero: { data: Hero & BaseSectionType & { _type: 'hero' } };
  cardsSection: {
    data: CardsSection & BaseSectionType & { _type: 'cardsSection' };
    onViewChange?: () => void;
  };
  scrollableSection: {
    data: ScrollableSection & BaseSectionType & { _type: 'scrollableSection' };
  };
  duplexSection: {
    data: DuplexSection & BaseSectionType & { _type: 'duplexSection' };
  };
  testimonialsSection: {
    data: TestimonialsSection & BaseSectionType & { _type: 'testimonialsSection' };
  };
  fullWidthTextSection: {
    data: FullWidthTextSection & BaseSectionType & { _type: 'fullWidthTextSection' };
  };
  calendlySection: {
    data: CalendlySection & BaseSectionType & { _type: 'calendlySection' };
  };
  FAQSection: { data: FAQSection & BaseSectionType & { _type: 'FAQSection' } };
  infiniteCarouselSection: {
    data: InfiniteCarouselSection &
      BaseSectionType & { _type: 'infiniteCarouselSection' };
  };
};

export type GetComponentProps<T extends keyof ComponentPropsMap> = ComponentPropsMap[T];

export function isHeroSection(
  section: HomePageSection
): section is Hero & BaseSectionType & { _type: 'hero' } {
  return section._type === 'hero';
}

export function isCardsSection(
  section: HomePageSection
): section is CardsSection & BaseSectionType & { _type: 'cardsSection' } {
  return section._type === 'cardsSection';
}

export function isScrollableSection(
  section: HomePageSection
): section is ScrollableSection & BaseSectionType & { _type: 'scrollableSection' } {
  return section._type === 'scrollableSection';
}

export function isDuplexSection(
  section: HomePageSection
): section is DuplexSection & BaseSectionType & { _type: 'duplexSection' } {
  return section._type === 'duplexSection';
}

export function isTestimonialsSection(
  section: HomePageSection
): section is TestimonialsSection & BaseSectionType & { _type: 'testimonialsSection' } {
  return section._type === 'testimonialsSection';
}

export function isFullWidthTextSection(
  section: HomePageSection
): section is FullWidthTextSection & BaseSectionType & { _type: 'fullWidthTextSection' } {
  return section._type === 'fullWidthTextSection';
}

export function isCalendlySection(
  section: HomePageSection
): section is CalendlySection & BaseSectionType & { _type: 'calendlySection' } {
  return section._type === 'calendlySection';
}

export function isFAQSection(
  section: HomePageSection
): section is FAQSection & BaseSectionType & { _type: 'FAQSection' } {
  return section._type === 'FAQSection';
}

export function isInfiniteCarouselSection(
  section: HomePageSection
): section is InfiniteCarouselSection &
  BaseSectionType & { _type: 'infiniteCarouselSection' } {
  return section._type === 'infiniteCarouselSection';
}
