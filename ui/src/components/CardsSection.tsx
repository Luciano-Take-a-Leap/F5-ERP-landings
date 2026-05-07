'use client';

import * as React from 'react';
import Card, { CardProps } from './Card';

interface CardSectionProps {
  tag: React.ReactNode;
  title: React.ReactNode;
  subtitle: string;
  cards: CardProps[];
  id?: string;
}

const CardSection: React.FC<CardSectionProps> = ({ tag, title, subtitle, cards, id }) => {
  return (
    <section className="w-full py-10" id={id}>
      <div className="mx-auto max-w-7xl px-6 md:px-0 ">
        <div className="mb-14">
          <h3>{tag}</h3>
          <h2 className="mt-6 max-w-4xl text-4xl font-extrabold tracking-tight text-white">
            {title}
          </h2>

          <p className="mt-4 max-w-[3000px] md:text-xl text-md text-zinc-400">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card) => (
            <Card
              key={card.title}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSection;
