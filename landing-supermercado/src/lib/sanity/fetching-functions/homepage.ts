import { HomePage } from '@/landing-corralon/types/sanity.types';
import { sanityClient } from '../client';
import { homePageSectionsQuery, homePageSEOQuery } from '../sanity-queries';

export async function getHomePageSections(): Promise<HomePage | null> {
  try {
    return await sanityClient.fetch(homePageSectionsQuery);
  } catch (error) {
    console.error('Error fetching homepage sections:', error);
    return null;
  }
}

export async function getHomePageSEOData() {
  try {
    return await sanityClient.fetch(homePageSEOQuery);
  } catch (error) {
    console.error('Error fetching homepage SEO Data:', error);
    return null;
  }
}
