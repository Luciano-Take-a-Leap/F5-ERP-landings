'use client';

import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

const navigateToLink = (href: string, router: AppRouterInstance) => {
  if (href?.startsWith('#')) {
    window.scrollTo({
      top: document.getElementById(href.replace('#', ''))?.offsetTop || 0,
      behavior: 'smooth',
    });
  } else if (href?.startsWith('/')) {
    router.push(href);
  } else if (href) {
    window.open(href, '_blank');
  }
};

export default navigateToLink;
