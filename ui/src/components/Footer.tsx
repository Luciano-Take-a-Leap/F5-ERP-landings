'use client';

import Image from 'next/image';
import { Button } from './ui/button';
import navigateToLink from '../utils/useNavigateToLink';
import { useRouter } from 'next/navigation';

interface FooterProps {
  icon: string;
  navItems: { label: string; href: string }[];
  copyRightText: string;
  id?: string;
}

const Footer: React.FC<FooterProps> = ({ icon, navItems, copyRightText, id }) => {
  const router = useRouter();
  return (
    <footer className="w-full bg-black border-t border-card-dark-background" id={id}>
      <div className="mx-auto flex min-h-[150px] w-full max-w-7xl flex-col items-center justify-between gap-6 px-6 py-6 md:flex-row lg:px-10">
        <div className="flex items-center gap-3 w-32 h-10 relative">
          <Image src={icon} alt="Logo" fill />
        </div>

        <nav className="flex flex-col items-center gap-2 md:flex-row md:gap-4 ">
          {navItems.map((item) => (
            <Button
              variant="link"
              key={item.label}
              onClick={() => navigateToLink(item.href, router)}
              className="h-auto p-0 text-sm font-medium text-white/50 transition-colors hover:text-primary"
            >
              {item.label}
            </Button>
          ))}
        </nav>

        <p className="text-xs text-white/50">{copyRightText}</p>
      </div>
    </footer>
  );
};

export default Footer;
