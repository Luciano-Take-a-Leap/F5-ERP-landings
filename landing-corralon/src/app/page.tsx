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
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          //dots
          backgroundColor: '#0a0a0a',
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px)',
          backgroundSize: '24px 24px',

          //grid
          // backgroundImage:
          //   'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          // backgroundSize: '40px 40px',

          // radial gradient
          // background: 'radial-gradient(ellipse at 50% 40%, #10877138 0%, #0a0a0a 90%)',
        }}
      />
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
      <div className="max-w-7xl w-full px-6 md:px:none">
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
