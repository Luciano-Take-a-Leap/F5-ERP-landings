import React from "react";
import { cn } from "../lib/utils";
import InfiniteCarousel from "./InfiniteCarousel";

interface InfiniteCarouselRow {
  _key: string;
  speed?: "slow" | "medium" | "fast";
  direction?: "leftToRight" | "rightToLeft";
  items: string[];
}

interface InfiniteCarouselSectionProps {
  title?: string;
  data: InfiniteCarouselRow[];
}

const InfiniteCarouselSection: React.FC<InfiniteCarouselSectionProps> = ({
  data,
  title,
}) => {
  if (!data?.length) return null;

  return (
    <section className={cn("w-full overflow-hidden py-8")}>
      {title && (
        <h2 className="mb-6 px-6 text-center text-xl font-semibold tracking-tight">
          {title}
        </h2>
      )}

      <div className="flex w-full flex-col gap-3">
        {data.map((row) => (
          <InfiniteCarousel
            key={row._key}
            speed={row.speed}
            direction={row.direction}
            items={row.items}
          />
        ))}
      </div>
    </section>
  );
};

export default InfiniteCarouselSection;