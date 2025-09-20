import { Button } from '@/components/ui/button';

const Wave = () => (
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className="relative block w-[calc(100%+1.3px)] h-[150px]"
    >
      <defs>
        <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 0.5 }} />
          <stop offset="100%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 0.5 }} />
        </linearGradient>
      </defs>
      <path
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
        fill="url(#wave-gradient)"
      ></path>
    </svg>
  </div>
);

const HomeSection = () => {
  return (
    <section id="home" className="relative h-screen w-full flex flex-col items-center justify-center text-center">
      <div className="z-10 p-4">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-balance">
          Fly Longer, See Sharper
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
          Cutting-edge solutions for spatial monitoring, modeling, and planning.
        </p>
        <div className="mt-8 flex justify-center">
          <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/80">
            <a href="#services">Explore Now</a>
          </Button>
        </div>
      </div>
      <Wave />
    </section>
  );
};

export default HomeSection;
