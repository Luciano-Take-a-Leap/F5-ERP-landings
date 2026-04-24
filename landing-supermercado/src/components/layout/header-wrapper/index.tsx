'use client';

import { Button } from '@ui';
import Header from '@ui/Header';
import { useRouter } from 'next/navigation';
import navigateToLink from '../../../../../ui/src/utils/useNavigateToLink';
import { generateSanityImageUrl } from '@/landing-corralon/utils/generate-sanity-image-url';
import { Header as Theader } from '@/landing-corralon/types/sanity.types';

interface HeaderWrapperProps {
  logo: Theader['logo'];
  menuItems: Theader['navigation'];
  ctaButton?: Theader['ctaButton'] | null;
}

const HeaderWrapper = ({ logo, menuItems, ctaButton }: HeaderWrapperProps) => {
  const router = useRouter();
  return (
    <Header
      logo={generateSanityImageUrl(logo)}
      menuItems={
        menuItems?.map((item) => ({
          label: item.label || '',
          href: item.href || '#',
        })) || []
      }
      ctaButton={
        ctaButton ? (
          <Button
            className="font-extrabold p-5 text-black"
            size="lg"
            onClick={() => navigateToLink(ctaButton?.href || '', router)}
          >
            {ctaButton?.label}
          </Button>
        ) : undefined
      }
    />
  );
};

export default HeaderWrapper;
