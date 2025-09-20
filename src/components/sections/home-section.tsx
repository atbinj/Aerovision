import { Button } from '@/components/ui/button';

const Wave = () => (
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className="relative block w-[calc(100%+1.3px)] h-[200px] md:h-[280px]"
    >
      <path
        d="M0,120L1200,120L1200,0C1080,40,960,80,840,80C720,80,600,40,480,40C360,40,240,80,120,80C60,80,0,40,0,0Z"
        fill="hsl(var(--accent) / 0.2)"
      ></path>
      <path
        d="M0,120L1200,120L1200,40C1080,80,960,120,840,120C720,120,600,80,480,80C360,80,240,120,120,120C60,120,0,80,0,40Z"
        fill="hsl(var(--accent) / 0.3)"
      ></path>
      <path
        d="M0,120L1200,120L1200,80C1080,40,960,0,840,0C720,0,600,40,480,40C360,40,240,80,120,80C60,80,0,40,0,0Z"
        fill="hsl(var(--card))"
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
