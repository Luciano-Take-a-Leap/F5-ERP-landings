import { Button } from "@ui";
import CardSection from "@ui/CardsSection";
import FullWidthText from "@ui/FullWidthText";
import Hero from "@ui/Hero";
import TestimonialsSection from "@ui/TestimonialsSection";

export default function Home() {
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

      <CardSection />
      <TestimonialsSection title="What our customers say" cards={[]} />
    </div>
  );
}
