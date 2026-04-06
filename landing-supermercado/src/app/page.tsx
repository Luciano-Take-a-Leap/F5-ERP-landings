import { Button } from '@ui';
import DuplexSection from '@ui/DuplexSection';
import Hero from '@ui/Hero';
import Tag from '@ui/Tag';

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
              supermercados y almacenes
            </p>
          </span>
        }
        description="Somos el ERP del norte del país con más experiencia en el sector de ventas minoristas"
        button={
          <Button className="font-extrabold p-5" size="lg">
            Agenda una reunión
          </Button>
        }
        backgroundImage="https://www.shutterstock.com/image-photo/supermarket-aisle-shelves-blurred-background-600w-1972817378.jpg"
        mobileBackgroundImage="https://www.shutterstock.com/image-photo/supermarket-aisle-shelves-blurred-background-600w-1972817378.jpg"
      />{' '}
      <div className="max-w-7xl w-full">
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
    </div>
  );
}
