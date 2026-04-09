'use client';

import * as React from 'react';

interface FaqProps {
  title: React.ReactNode;
  items: {
    question: string;
    answer: React.ReactNode;
  }[];
  id?: string;
}

const Faq: React.FC<FaqProps> = ({ title, items, id }) => {
  const [open, SetOpen] = React.useState<number | null>(null);

  const handleToggle = (index: number) => {
    SetOpen((prev) => (prev === index ? null : index));
  };

  return (
    <section className="w-full py-16 md:py-24" id={id}>
      <div className="mx-auto w-full max-w-6xl px-4">
        <h2 className="mb-20 text-center text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          {title}
        </h2>

        <div className="flex flex-col gap-4">
          {items.map((item, index) => {
            const isOpen = open === index;
            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-2xl border border-white/10"
              >
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-6 text-left md:px-8"
                >
                  <span className="text-lg font-bold text-white md:text-1xl">
                    {item.question}
                  </span>

                  <span className="shrink-0 text-2xl leading-none text-primary">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 md:px-8">
                      <div>{item.answer}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
