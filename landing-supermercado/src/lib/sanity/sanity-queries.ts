import { groq } from 'next-sanity';

export const HEADER_QUERY = groq`
  *[_type == "header"][0] {
    _id,
    navigation[] {
      key,
      label,
      href,
      isButton
    },
    logo {
      asset->{
        url
      }
    },
    ctaButton {
      href,
      label
    },
  }
`;

export const FOOTER_QUERY = groq`
  *[_type == "footer"][0] {
    _id,
    copyrightText,
    navigation[] {
      key,
      label,
      href
    },
    logo {
      asset->{
        url
      }
    }
  }
`;

export const homePageSEOQuery = groq`
  *[_type == "homePage"][0]{
    seo{
      title,
      description,
      keywords,
      openGraph{
        title,
        description,
        image{
          asset->{
            url,
            metadata{
              dimensions{
                width,
                height
              }
            }
          },
          alt
        },
        type
      },
      twitter{
        cardType,
        site,
        creator
      },
      canonical,
      noIndex,
      noFollow
    }
  }
`;

export const heroQuery = groq`
  *[_type == "hero"][0]{
    subtitle,
    video,
    mainContent,
    ctaButton{
      label,
      href
    },
    coloredSectionText,
    backgroundImage{
      asset->{url},
      alt
    }
    mobileBackgroundImage{
      asset->{url},
      alt
    }
  }
`;

export const calendlySectionQuery = groq`
  *[_type == "calendlySection"][0]{
    title,
    calendlyLink
  }
`;

export const cardsSectionQuery = groq`
  *[_type == "cardsSection"][0]{
    tag,
    title,
    subtitle,
    cards[]{
      icon,
      title,
      description,
      _key
    },
  }
`;

export const duplexSectionQuery = groq`
  *[_type == "duplexSection"][0]{
    tag,
    title,
    textContent,
    images[]{
      asset->{url},
      alt
    },
    ctaButton{
      label,
      href
    }
  }
`;

export const faqSectionQuery = groq`
  *[_type == "FAQSection"][0]{
    title,
    faqs[]{
      question,
      answer,
      _key
    }
  }
`;

export const fullWidthTextSectionQuery = groq`
  *[_type == "fullWidthTextSection"][0]{
    text
   }
`;

export const scrollableSectionQuery = groq`
  *[_type == "scrollableSection"][0]{
    tag,
    title,
    subsections[]{
      title,
      content,
      images[]{
        asset->{url},
        alt
      },
      _key
    }
  }
`;

export const testimonialsSectionQuery = groq`
  *[_type == "testimonialsSection"][0]{
    title,
    subtitle,
    cards[]{
      rate,
      quote,
      author{
        name,
        avatar{
          asset->{url}
        }
          role,
      },
      _key
    }
  }
`;

export const infiniteCarouselSectionQuery = groq`
  *[_type == "infiniteCarouselSection"][0]{
    title,
    rows[]{
      items[]{
        asset->{url},
        media,
        hotspot,
        crop,
        _key
      },
      speed,
      direction,
      _key
    }
  }
`;

export const integrationsSectionQuery = groq`
  *[_type == "integrationsSection"][0]{
    title,
    mainImage{
      asset->{url},
      alt
    },
    orbits[]{
      direction,
      items[]{
        image{
          asset->{url},
          alt
        },
        alt,
        _key
      },
      _key
    }
  }
`;

export const homePageSectionsQuery = groq`
  *[_type == "homePage"][0]{
    sections[]->{
      _type,
      _id,
      _key,
      _type == "hero" => {
        subtitle,
        video,
        mainContent,
        ctaButton{
          label,
          href
        },
        backgroundImage{
          asset->{url},
          alt
        },
        mobileBackgroundImage{
          asset->{url},
          alt
        }
      },
      _type == "fullWidthTextSection" => {
        text
      },
      _type == "cardsSection" => {
        tag,
        title,
        subtitle,
        cards[]
      },
      _type == "duplexSection" => {
        tag,
        title,
        textContent,
        images[]{
          asset->{url},
          alt
        },
        ctaButton{
          label,
          href
        }
      },
      _type == "FAQSection" => {
        title,
        faqs[]{
          question,
          answer,
          _key
        }
      },
      _type == "testimonialsSection" => {
        title,
        subtitle,
        cards[]
      },
      _type == "calendlySection" => {
        title,
        calendlyLink
      },
      _type == "infiniteCarouselSection" => {
        title,
        rows[]{
          items[]{
            asset->{url},
            media,
            hotspot,
            crop,
            _key
          },
          speed,
          direction,
          _key
        }
      },
      _type == "integrationsSection" => {
        title,
        mainImage{
          asset->{url},
          alt
        },
        orbits[]{
          direction,
          items[]{
            image{
              asset->{url},
              alt
            },
            alt,
            _key
          },
          _key
        }
      },
      _type == "scrollableSection" => {
        tag,
        title,
        subsections[]{
          title,
          content,
          images[]{
            asset->{url},
            alt
          },
          _key
        }
      },
    }
  }
`;
