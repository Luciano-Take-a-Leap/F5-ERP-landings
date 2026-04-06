"use client";

import Image from "next/image";
import { Button } from "./ui/button";

interface FooterProps {
  icon: string;
  name: string;
  navItems: { label: string; onClick: () => void }[];
  copyRightText: string;
}

const Footer: React.FC<FooterProps> = ({
  icon,
  name,
  navItems,
  copyRightText,
}) => {
  return (
    <footer className="w-full bg-primary-foreground border-t border-card-dark-background">
      <div className="mx-auto flex min-h-[150px] w-full max-w-7xl flex-col items-center justify-between gap-6 px-6 py-6 md:flex-row lg:px-10">
        <div className="flex items-center gap-3 ">
          <Image src={icon} alt="Logo" width={22} height={22} />
          <h2 className="font-extrabold">{name}</h2>
        </div>

        <nav className="flex flex-col items-center gap-2 md:flex-row md:gap-4 ">
          {navItems.map((item) => (
            <Button
              variant="link"
              key={item.label}
              onClick={item.onClick}
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
