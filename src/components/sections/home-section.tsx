import { Button } from '@/components/ui/button';

const Wave = () => (
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className="relative block w-full h-[150px]"
    >
      <path
        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.3-35.83,69.76-2.48,138.65,13.23,207.4,35.83,69.36,22.75,137.55,33.38,206.3,35.83,69.73,2.5,138.6-13.13,207.37-35.83,69.2-22.78,137.8-33.43,206.3-35.83C1131.35,12.89,1168.65,23.35,1200,46.29V0Z"
        opacity=".2"
        className="fill-foreground"
      />
      <path
        d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
        opacity=".5"
        className="fill-foreground"
      />
      <path
        d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,122.49,0,184.82,15.7,63.45,15.84,134.24,28.24,209.82,15.7,74.45-12.38,146.36-46.32,209.82-62.28C1205.85,5.63,1200,0,1200,0Z"
        className="fill-foreground"
      />
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
