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
      className="relative w-full px-6 md:px-0 h-auto flex items-center justify-center py-24 md:min-h-[75vh]"
      id={id}
    >
      <Image
        src={backgroundImage}
        alt="Hero Background"
        fill
        className="object-cover hidden md:block grayscale"
      />
      <Image
        src={mobileBackgroundImage || backgroundImage}
        alt="Hero Background"
        fill
        className="object-cover md:hidden grayscale"
      />
      <div className="absolute inset-0 hero-gradient" />
      {video ? (
        <div className="relative z-10 text-start flex flex-col md:flex-row items-center gap-10 w-full max-w-7xl h-full">
          <div className="flex flex-col md:w-full items-center md:items-start justify-center text-center md:text-start md:justify-between h-full">
            {title}
            <p className="text-lg md:text-xl max-w-lg mt-6 mb-12">{description}</p>
            {button}
          </div>
          {<VimeoPlayer key={video} url={video} />}
        </div>
      ) : (
        <div className="relative z-10 text-center px-4 flex flex-col items-center gap-12 pt-4">
          {title}
          <p className="text-lg md:text-xl max-w-lg">{description}</p>
          {button}
        </div>
      )}
    </div>
  );
};

export default Hero;
