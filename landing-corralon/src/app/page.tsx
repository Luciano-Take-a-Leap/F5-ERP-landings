import { Button } from '@ui';
import Hero from '@ui/Hero';
import TestimonialsSection from '@ui/TestimonialsSection';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans dark:bg-black">
      <Hero
        title={
          <span>
            <p className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              El sistema para
            </p>
            <p className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
              profesionalizar
            </p>
            <p className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              corralones y ferreterías
            </p>
          </span>
        }
        description="This is a description of our site."
        button={<Button size="lg">Click Me</Button>}
        backgroundImage="https://as2.ftcdn.net/v2/jpg/03/39/67/57/1000_F_339675724_zKIsiEcSss6x2KOXUfHMfBrK9b0qbYCQ.jpg"
        mobileBackgroundImage="https://as2.ftcdn.net/v2/jpg/03/39/67/57/1000_F_339675724_zKIsiEcSss6x2KOXUfHMfBrK9b0qbYCQ.jpg"
      />
      <TestimonialsSection title="What our customers say" cards={[]} />
    </div>
  );
}
