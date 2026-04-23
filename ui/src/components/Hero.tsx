'use client';

import Image from 'next/image';
import VimeoPlayer from './VimeoPlayer';

interface HeroProps {
  title: React.ReactNode;
  description?: string;
  backgroundImage: string;
  mobileBackgroundImage?: string;
  button: React.ReactNode;
  video?: string;
  id?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  description,
  backgroundImage,
  mobileBackgroundImage,
  button,
  video,
  id,
}) => {
  return (
    <div
      className="relative w-full h-auto flex items-center justify-center pt-16 pb-10"
      id={id}
    >
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
      <div className="absolute inset-0 hero-gradient" />
      <div className="relative z-10 text-center px-4 flex flex-col items-center gap-2">
        {title}
        <p className="text-lg md:text-xl max-w-lg">{description}</p>
        {video ? <VimeoPlayer key={video} url={video} /> : null}
        {button}
      </div>
    </div>
  );
};

export default Hero;
