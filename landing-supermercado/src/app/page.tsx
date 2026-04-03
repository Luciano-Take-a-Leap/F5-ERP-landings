import { Button } from '@ui';
import Hero from '@ui/Hero';

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
      />
    </div>
  );
}
