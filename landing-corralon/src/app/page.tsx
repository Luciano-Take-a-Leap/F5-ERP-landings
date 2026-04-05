import { Button } from "@ui";
import CardSection from "@ui/CardsSection";
import FullWidthText from "@ui/FullWidthText";
import Hero from "@ui/Hero";
import ScrollableSection from "@ui/ScrollableSection";
import Tag from "@ui/Tag";
import TestimonialsSection from "@ui/TestimonialsSection";
import { HugeiconsIcon } from "@hugeicons/react";
import { Archive03Icon, Clock01Icon, TradeDownIcon } from "@hugeicons/core-free-icons";

export default function Home() {
  const contentCards = [
    {
      icon: <HugeiconsIcon icon={Clock01Icon} />,
      title: "El stock no coincide",
      description:
        "Figuran productos que no están y vendés productos que no tenés. Y al mismo tiempo, perdés ventas por no saber qué hay.",
    },
    {
      icon: <HugeiconsIcon icon={Archive03Icon} />,
      title: "Desorden en entregas, pedidos y acopios",
      description: "No sabés qué pedidos hay que entregar.",
    },
    {
      icon: <HugeiconsIcon icon={TradeDownIcon} />,
      title: "Precios desactualizados o mal cargados",
      description:
        "Cambiar listas es un dolor de cabeza y terminás vendiendo con márgenes incorrectos.",
    },
    {
      icon: <HugeiconsIcon icon={Clock01Icon} />,
      title: "Ausencia de información",
      description:
        "No sabés si estás ganando o perdiendo plata. Y lo más importante: no podés confiar en la información del sistema para tomar decisiones.",
    },
    {
      icon: <HugeiconsIcon icon={Archive03Icon} />,
      title: "Todo depende del dueño",
      description:
        "Si no estás, el negocio no funciona. No podés delegar ni tomarte tiempo para crecer o descansar.",
    },
    {
      icon: <HugeiconsIcon icon={TradeDownIcon} />,
      title: "Ventas lentas y procesos complicados",
      description:
        "Muchos pasos para vender y sistemas poco intuitivos. Perdés mucho tiempo en el mostrador.",
    },
  ];
  return (
    <div className="flex flex-col flex-1 items-center justify-start font-sans dark:bg-black">
      <Hero
        title={
          <span>
            <p className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
              El sistema para
            </p>
            <p className="text-4xl font-extrabold tracking-tight text-primary sm:text-6xl">
              profesionalizar
            </p>
            <p className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
              corralones y ferreterías
            </p>
          </span>
        }
        description="Somos el ERP del norte del país con más experiencia en el sector de la construcción"
        button={
          <Button className="font-extrabold p-5" size="lg">
            Agenda una reunión
          </Button>
        }
        backgroundImage="https://as2.ftcdn.net/v2/jpg/03/39/67/57/1000_F_339675724_zKIsiEcSss6x2KOXUfHMfBrK9b0qbYCQ.jpg"
        mobileBackgroundImage="https://as2.ftcdn.net/v2/jpg/03/39/67/57/1000_F_339675724_zKIsiEcSss6x2KOXUfHMfBrK9b0qbYCQ.jpg"
      />
      <div className="max-w-7xl">
        <FullWidthText>
          <div className="mx-auto max-w-5xl px-4 text-center">
            <h2 className="text-3xl leading-tight text-white sm:text-4xl d:text-6xl">
              <span className="text-white font-extrabold">+180</span>{" "}
              <span className="text-white">
                Pymes en el norte de Argentina usan F5 para odenar su negocio.
              </span>{" "}
              <span className="text-primary font-extrabold">Sumate</span>
            </h2>
          </div>
        </FullWidthText>

        <CardSection
          tag={<Tag text="EL PROBLEMA" variant="outline" />}
          title={"La falta de control sobre tu negocio, te cuesta mucha plata"}
          subtitle={"Y eso te está frenando el crecimiento de tu empresa"}
          cards={contentCards}
        />
        <TestimonialsSection title="What our customers say" cards={[]} />
        <ScrollableSection
          tag={<Tag text="LA SOLUCIÓN" variant="outline" />}
          title="Con F5 te ayudamos a que recuperes el control de tu negocio en un solo lugar"
          subsections={[
            {
              title: "Gestión manual y desorganizada",
              description:
                "Muchos corralones y ferreterías aún dependen de métodos tradicionales como papel y lápiz para llevar el control de inventarios, ventas y finanzas, lo que resulta en errores, pérdida de información y falta de eficiencia.",
              image:
                "https://ferreteriamlo.com.ar/wp-content/uploads/2022/01/louis-hansel-Rf9eElW3Qxo-unsplash.jpg",
            },
            {
              title: "Dificultad para competir",
              description:
                "La falta de digitalización limita la capacidad de los corralones y ferreterías para competir con empresas más grandes y tecnológicamente avanzadas, lo que puede resultar en pérdida de clientes y oportunidades de crecimiento.",
              image:
                "https://ferreteriamlo.com.ar/wp-content/uploads/2022/01/pexels-pixabay-162534-600x400.jpg",
            },
            {
              title: "Falta de visibilidad y control",
              description:
                "Sin un sistema digital, los propietarios y gerentes de corralones y ferreterías carecen de visibilidad en tiempo real sobre sus operaciones, lo que dificulta la toma de decisiones informadas y la identificación de áreas de mejora.",
              image:
                "https://ferreteriamlo.com.ar/wp-content/uploads/2022/01/pexels-lisa-1301856-600x400.jpg",
            },
          ]}
        />
      </div>
    </div>
  );
}
