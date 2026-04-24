import { Header } from '@/landing-corralon/types/sanity.types';
import { sanityClient } from '../client';
import { HEADER_QUERY } from '../sanity-queries';

export async function getHeaderData(): Promise<Header | null> {
  try {
    const data = await sanityClient.fetch(HEADER_QUERY);
    return data;
  } catch (error) {
    console.error('Error fetching header data:', error);
    return null;
  }
}
