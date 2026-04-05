"use client";

import * as React from "react";
import Card from "./Card";
import { HugeiconsIcon } from "@hugeicons/react";
import { Clock01Icon } from "@hugeicons/core-free-icons";

const cards = [
  {
    icon: <HugeiconsIcon icon={Clock01Icon} />,
    title: "El stock no coincide",
    description:
      "Figuran productos que no están y vendés productos que no tenés. Y al mismo tiempo, perdés ventas por no saber qué hay.",
  },
  {
    title: "Desorden en entregas, pedidos y acopios",
    description: "No sabés qué pedidos hay que entregar.",
  },
  {
    title: "Precios desactualizados o mal cargados",
    description:
      "Cambiar listas es un dolor de cabeza y terminás vendiendo con márgenes incorrectos.",
  },
  {
    title: "Ausencia de información",
    description:
      "No sabés si estás ganando o perdiendo plata. Y lo más importante: no podés confiar en la información del sistema para tomar decisiones.",
  },
  {
    title: "Todo depende del dueño",
    description:
      "Si no estás, el negocio no funciona. No podés delegar ni tomarte tiempo para crecer o descansar.",
  },
  {
     icon: <HugeiconsIcon icon={Clock01Icon} />,
    title: "Ventas lentas y procesos complicados",
    description:
      "Muchos pasos para vender y sistemas poco intuitivos. Perdés mucho tiempo en el mostrador.",
  },
];

const CardSection: React.FC = () => {
  return (
    <section className="w-full bg-black px-6 py-20 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14">
          <div
            className="inline-flex rounded-full border border-icon-bg 
            px-4 py-2 font-semibold uppercase text-primary bg-card-from text-xs"
          >
            El problema
          </div>

          <h2 className="mt-6 max-w-4xl text-4xl font-extrabold tracking-tight text-white md:text-4xl">
            La falta de control sobre tu negocio,
            <br />
            te cuesta mucha plata
          </h2>

          <p className="mt-4 max-w-[3000px] text-zinc-400 md:text-sm">
            Y eso te está frenando el crecimiento de tu empresa
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