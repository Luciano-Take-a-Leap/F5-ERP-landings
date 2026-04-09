import Footer from '@ui/Footer';
import { getHeaderData } from '../lib/sanity/fetching-functions/header';
import { getFooterData } from '../lib/sanity/fetching-functions/footer';
import { getHomePageSections } from '../lib/sanity/fetching-functions/homepage';
import { generateSanityImageUrl } from '../utils/generate-sanity-image-url';
import HeaderWrapper from '../components/layout/header-wrapper';
import ComponentResolver from '../components/layout/homepage-component-resolver';
import { HomePageSection, isHeroSection } from '../types';

export default async function Home() {
  const headerData = await getHeaderData();
  const footerData = await getFooterData();
  const pageData = await getHomePageSections();

  return (
    <div className="flex flex-col flex-1 items-center justify-start font-sans dark:bg-black relative">
      <HeaderWrapper
        logo={headerData?.logo}
        menuItems={headerData?.navigation}
        ctaButton={headerData?.ctaButton}
      />
      <ComponentResolver
        sections={
          ((pageData?.sections as unknown as HomePageSection[])?.filter((sect) =>
            isHeroSection(sect)
          ) as unknown as HomePageSection[]) || []
        }
      />
      <div className="max-w-7xl w-full px-6 md:px:none">
        <ComponentResolver
          sections={
            ((pageData?.sections as unknown as HomePageSection[])?.filter(
              (sect) => !isHeroSection(sect)
            ) as unknown as HomePageSection[]) || []
          }
        />
      </div>
      {/* <Hero
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
      <div className="max-w-7xl w-full">
        <FullWidthText>
          <div className="mx-auto max-w-5xl px-4 text-center">
            <h2 className="text-3xl leading-tight text-white sm:text-4xl d:text-6xl">
              <span className="text-white font-extrabold">+180</span>{' '}
              <span className="text-white">
                Pymes en el norte de Argentina usan F5 para odenar su negocio.
              </span>{' '}
              <span className="text-primary font-extrabold">Sumate</span>
            </h2>
          </div>
        </FullWidthText>

        <CardSection
          tag={<Tag text="EL PROBLEMA" variant="outline" />}
          title={'La falta de control sobre tu negocio, te cuesta mucha plata'}
          subtitle={'Y eso te está frenando el crecimiento de tu empresa'}
          cards={contentCards}
        />
        <ScrollableSection
          tag={<Tag text="LA SOLUCIÓN" variant="outline" />}
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
        <DuplexSection
          tag={<Tag text="DIFERENCIAL" variant="outline" />}
          title="Una suite completa diseñada para el sector de la construcción"
          images={[
            'https://ferreteriamlo.com.ar/wp-content/uploads/2022/01/louis-hansel-Rf9eElW3Qxo-unsplash.jpg',
            'https://ferreteriamlo.com.ar/wp-content/uploads/2022/01/pexels-pixabay-162534-600x400.jpg',
            'https://ferreteriamlo.com.ar/wp-content/uploads/2022/01/pexels-lisa-1301856-600x400.jpg',
          ]}
          ctaButton={
            <Button className="font-extrabold p-5" size="lg">
              Agenda una reunión
            </Button>
          }
          textSection={
            <span>
              <h6 className="text-xl font-bold mb-1">
                Mové el stock con remitos para hacer entregas parciales
              </h6>
              <p className="text-sm mb-4 opacity-70">
                Hacé entregas por partes y mantené un registro preciso del stock real.
              </p>
              <h6 className="text-xl font-bold mb-1">
                Estructura de artículos pensada para materiales
              </h6>
              <p className="text-sm mb-4 opacity-70">
                Manejá unidades de medida, bultos y pallets sin complicaciones.
              </p>
              <h6 className="text-xl font-bold mb-1">
                Sincronización de precios con proveedores
              </h6>
              <p className="text-sm mb-4 opacity-70">
                Actualizá tus listas de precios automáticamente con tus proveedores
                principales.
              </p>
            </span>
          }
        />
      </div>
      <div className="w-full max-w-[1600px]">
        <TestimonialsSection
          title="Lo que dicen nuestros clientes"
          cards={[
            <TestimonialCard
              key="Testimonial_1"
              author={{
                name: 'Juan Dalmiro',
                role: 'Dueño de Corralón El Norte',
                avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
              }}
              rate={5}
              text="F5 cambió radicalmente la forma en que controlamos el stock. Antes era un caos, ahora sabemos exactamente qué tenemos en cada depósito en tiempo real."
            />,
            <TestimonialCard
              key="Testimonial_2"
              author={{
                name: 'Marta López',
                role: 'Gerente Administrativa, Constru-Materiales',
                avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
              }}
              rate={4}
              text="La integración con AFIP y la facilidad para manejar cuentas corrientes es lo que más valoramos. El soporte técnico siempre está cuando lo necesitamos."
            />,
            <TestimonialCard
              key="Testimonial_3"
              author={{
                name: 'Carlos Rodríguez',
                role: 'Propietario, Ferretería Central',
                avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
              }}
              rate={5}
              text="La solución de F5 nos ha permitido automatizar procesos que antes eran manuales y propensos a errores. La eficiencia en la gestión del inventario es increíble."
            />,
            <TestimonialCard
              key="Testimonial_4"
              author={{
                name: 'Lucía Gómez',
                role: 'Encargada de Ventas, Materiales Gómez',
                avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
              }}
              rate={3}
              text="La curva de aprendizaje fue rápida y el equipo de soporte nos acompañó en cada paso. Ahora podemos enfocarnos en hacer crecer nuestro negocio en lugar de preocuparnos por la gestión diaria."
            />,
            <TestimonialCard
              key="Testimonial_5"
              author={{
                name: 'Miguel Fernández',
                role: 'Dueño, Corralón Fernández',
                avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
              }}
              rate={5}
              text="Recomendaría F5 a cualquier corralón o ferretería que quiera profesionalizar su gestión. Es una inversión que se paga sola con el tiempo que ahorra y la mejora en la organización."
            />,
          ]}
        />
        <Faq title="Preguntas frecuentes" items={faqContent} />
      </div>*/}
      <Footer
        icon={generateSanityImageUrl(footerData?.logo)}
        navItems={
          footerData?.navigation?.map((item) => ({
            label: item.label || '',
            href: item.href || '#',
          })) || []
        }
        copyRightText={footerData?.copyrightText || ''}
      />
    </div>
  );
}
