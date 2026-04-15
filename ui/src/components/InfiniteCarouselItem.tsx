import React from "react";
import { cn } from "../lib/utils";
import Image from "next/image";

interface InfiniteCarouselItemProps {
  imageUrl: string;
  alt?: string;
  className?: string;
}

const InfiniteCarouselItem: React.FC<InfiniteCarouselItemProps> = ({
  imageUrl,
  alt = "",
  className,
}) => {
  return (
    <div
      className={cn(
        "relative shrink-0 overflow-hidden rounded-xl bg-transparent shadow-sm select-none",
        "h-16 w-16 md:h-24 md:w-24",
        className
      )}
    >
      <Image
        src={imageUrl}
        alt={alt}
        fill
        draggable={false}
        className="object-contain p-2"
        sizes="(max-width: 768px) 64px, 96px"
      />
    </div>
  );
};

export default InfiniteCarouselItem;