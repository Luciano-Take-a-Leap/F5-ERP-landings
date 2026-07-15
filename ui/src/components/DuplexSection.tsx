'use client';
import ImageCarousel from './ImageCarousel';

interface DuplexSectionProps {
  tag: React.ReactNode;
  title: React.ReactNode;
  textSection?: React.ReactNode;
  images: string[];
  ctaButton?: React.ReactNode;
  textFirst?: boolean;
  id?: string;
}

function DuplexSection({
  tag,
  title,
  images,
  textSection,
  ctaButton,
  textFirst = true,
  id,
}: DuplexSectionProps) {
  const ImageBlock = () => (
    <ImageCarousel images={images || []} alt={`Image for ${title}`} imageClassName='object-contain' />
  );

  const TextBlock = () => (
    <div className="flex flex-col gap-4 md:max-w-[70%]">
      {textSection}
      {ctaButton && <div className="mt-6">{ctaButton}</div>}
    </div>
  );

  return (
    <section
      className="w-full flex flex-col justify-center items-center py-10 overflow-hidden relative"
      id={id}
    >
      <div className='bg-primary/75 absolute inset-0 -z-10'/>
      <div className="noise-filter absolute inset-0 -z-10" />
      <div className="max-w-7xl px-6 md:px-0 ">
        {tag}
        <h2 className="text-4xl font-extrabold tracking-tight mt-6 mb-12 max-w-2xl">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {textFirst ? (
            <>
              <TextBlock />
              <ImageBlock />
            </>
          ) : (
            <>
              <ImageBlock />
              <TextBlock />
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default DuplexSection;
