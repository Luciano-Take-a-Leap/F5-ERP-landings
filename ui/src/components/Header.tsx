'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { HugeiconsIcon } from '@hugeicons/react';
import { Menu, X } from '@hugeicons/core-free-icons';
import navigateToLink from '../utils/useNavigateToLink';
import { useRouter } from 'next/navigation';
interface HeaderProps {
  logo: string;
  menuItems: { label: string; href: string }[];
  ctaButton: React.ReactNode;
  id?: string;
}

const Header: React.FC<HeaderProps> = ({ logo, menuItems, ctaButton, id }) => {
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [drawerOpen]);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      <header
        className="w-full py-3 px-4 md:px-12 lg:px-20 fixed top-0 left-0 z-50 bg-black/70 backdrop-blur-xs"
        id={id}
      >
        <div className="flex items-center justify-between w-full md:justify-around md:gap-8">
          <div>
            <Image src={logo} alt="Logo" className="h-8" width={32} height={32} />
          </div>

          <nav className="hidden md:flex gap-6">
            {menuItems.map((item) => (
              <Button
                variant="link"
                key={item.label}
                onClick={() => navigateToLink(item.href, router)}
                className="text-md font-medium text-white hover:text-primary transition-colors"
              >
                {item.label}
              </Button>
            ))}
          </nav>

          <div className="hidden md:block">{ctaButton}</div>

          <button
            className="md:hidden text-white p-1 rounded-md hover:bg-white/10 transition-colors"
            onClick={() => setDrawerOpen(true)}
            aria-label="Abrir menú"
          >
            <HugeiconsIcon icon={Menu} size={24} />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          drawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeDrawer}
        aria-hidden="true"
      />

      <div
        className={`fixed top-0 right-0 z-50 h-full w-[calc(100%-8rem)] bg-black/90 backdrop-blur-md shadow-2xl flex flex-col transition-transform duration-300 ease-in-out md:hidden ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
      >
        <div className="flex items-center justify-between px-5 py-2 border-b border-white/10">
          {ctaButton}
          <button
            onClick={closeDrawer}
            className="text-white p-1 rounded-md hover:bg-white/10 transition-colors"
            aria-label="Cerrar menú"
          >
            <HugeiconsIcon icon={X} size={22} />
          </button>
        </div>

        <nav className="flex flex-col gap-1 px-4 py-6 flex-1">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => {
                navigateToLink(item.href, router);
                closeDrawer();
              }}
              className="text-left text-white text-base font-medium px-3 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
