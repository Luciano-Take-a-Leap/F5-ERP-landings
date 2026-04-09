'use client';

import Image from 'next/image';

interface HeroProps {
  title: React.ReactNode;
  description?: string;
  backgroundImage: string;
  mobileBackgroundImage?: string;
  button: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({
  title,
  description,
  backgroundImage,
  mobileBackgroundImage,
  button,
}) => {
  return (
    <div className="relative w-full md:max-h-[640px] h-[80vh] flex items-center justify-center">
      <Image
        src={backgroundImage}
        alt="Hero Background"
        fill
        className="object-cover hidden md:block"
      />
      <Image
        src={mobileBackgroundImage || backgroundImage}
        alt="Hero Background"
        fill
        className="object-cover md:hidden"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black" />
      <div className="relative z-10 text-center text-white px-4  flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">{title}</h1>
        <p className="text-lg md:text-xl mb-12 max-w-lg">{description}</p>
        {button}
      </div>
    </div>
  );
};

export default Hero;
