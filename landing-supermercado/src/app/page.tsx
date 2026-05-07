import Footer from '@ui/Footer';
import { getHeaderData } from '../lib/sanity/fetching-functions/header';
import { getFooterData } from '../lib/sanity/fetching-functions/footer';
import { getHomePageSections } from '../lib/sanity/fetching-functions/homepage';
import { generateSanityImageUrl } from '../utils/generate-sanity-image-url';
import HeaderWrapper from '../components/layout/header-wrapper';
import ComponentResolver from '../components/layout/homepage-component-resolver';
import { HomePageSection, isHeroSection } from '../types';

export default async function Home() {
  const headerData = await getHeaderData();
  const footerData = await getFooterData();
  const pageData = await getHomePageSections();

  return (
    <div className="flex flex-col flex-1 items-center justify-start font-sans dark:bg-black relative">
      <HeaderWrapper
        logo={headerData?.logo}
        menuItems={headerData?.navigation}
        ctaButton={headerData?.ctaButton}
      />
      <ComponentResolver
        sections={
          ((pageData?.sections as unknown as HomePageSection[])?.filter((sect) =>
            isHeroSection(sect)
          ) as unknown as HomePageSection[]) || []
        }
      />
      <div className="w-full md:px:none flex items-center justify-center flex-col">
        <ComponentResolver
          sections={
            ((pageData?.sections as unknown as HomePageSection[])?.filter(
              (sect) => !isHeroSection(sect)
            ) as unknown as HomePageSection[]) || []
          }
        />
      </div>
      <Footer
        icon={generateSanityImageUrl(footerData?.logo)}
        navItems={
          footerData?.navigation?.map((item) => ({
            label: item.label || '',
            href: item.href || '#',
          })) || []
        }
        copyRightText={footerData?.copyrightText || ''}
      />
    </div>
  );
}
