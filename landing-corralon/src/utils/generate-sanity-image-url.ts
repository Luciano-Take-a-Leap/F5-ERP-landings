import imageUrlBuilder, { SanityImageSource } from '@sanity/image-url';
import { sanityClient } from '../lib/sanity/client';

export const generateSanityImageUrl = (source?: SanityImageSource) => {
  if (!source) {
    return '';
  }

  const { projectId, dataset } = sanityClient.config();

  return projectId && dataset && source
    ? imageUrlBuilder({ projectId, dataset })
        .image(source)
        .maxWidth(1200)
        .format('webp')
        .quality(85)
        .url()
    : '';
};
