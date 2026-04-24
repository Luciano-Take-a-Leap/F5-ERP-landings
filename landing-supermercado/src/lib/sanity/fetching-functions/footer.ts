import { sanityClient } from '../client';
import { FOOTER_QUERY } from '../sanity-queries';
import { Footer } from '@/landing-corralon/types/sanity.types';

export async function getFooterData(): Promise<Footer | null> {
  try {
    const data = await sanityClient.fetch(FOOTER_QUERY, {}, {
      stega: false,
    });
    return data;
  } catch (error) {
    console.error('Error fetching footer data:', error);
    return null;
  }
}
