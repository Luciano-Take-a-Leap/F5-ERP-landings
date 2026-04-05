import { Button } from '@ui';
import Hero from '@ui/Hero';
import ScrollableSection from '@ui/ScrollableSection';
import Tag from '@ui/Tag';
import TestimonialsSection from '@ui/TestimonialsSection';

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
      <div className="max-w-7xl">
        <TestimonialsSection title="What our customers say" cards={[]} />
        <ScrollableSection
          tag={<Tag text="EL PROBLEMA" variant="outline" />}
          title="Con F5 te ayudamos a que recuperes el control de tu negocio en un solo lugar"
          subsections={[
            {
              title: 'Gestión manual y desorganizada',
              description:
                'Muchos corralones y ferreterías aún dependen de métodos tradicionales como papel y lápiz para llevar el control de inventarios, ventas y finanzas, lo que resulta en errores, pérdida de información y falta de eficiencia.',
              image:
                'https://ferreteriamlo.com.ar/wp-content/uploads/2022/01/louis-hansel-Rf9eElW3Qxo-unsplash.jpg',
            },
            {
              title: 'Dificultad para competir',
              description:
                'La falta de digitalización limita la capacidad de los corralones y ferreterías para competir con empresas más grandes y tecnológicamente avanzadas, lo que puede resultar en pérdida de clientes y oportunidades de crecimiento.',
              image:
                'https://ferreteriamlo.com.ar/wp-content/uploads/2022/01/pexels-pixabay-162534-600x400.jpg',
            },
            {
              title: 'Falta de visibilidad y control',
              description:
                'Sin un sistema digital, los propietarios y gerentes de corralones y ferreterías carecen de visibilidad en tiempo real sobre sus operaciones, lo que dificulta la toma de decisiones informadas y la identificación de áreas de mejora.',
              image:
                'https://ferreteriamlo.com.ar/wp-content/uploads/2022/01/pexels-lisa-1301856-600x400.jpg',
            },
          ]}
        />
      </div>
    </div>
  );
}
