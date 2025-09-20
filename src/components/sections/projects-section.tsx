import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';

const ProjectsSection = () => {
  const projectImages = PlaceHolderImages.filter(img => img.id.startsWith('project-'));

  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <h2 className="font-headline text-4xl font-bold text-center tracking-tighter sm:text-5xl">
          Projects
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-center text-lg text-foreground/80 text-balance">
          A glimpse into our hardware, operations, and the high-quality data we produce.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {projectImages.map((image, index) => (
            <Card key={image.id} className="overflow-hidden group">
              <CardContent className="p-0">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  data-ai-hint={image.imageHint}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover aspect-video group-hover:scale-105 transition-transform duration-300"
                />
              </CardContent>
            </Card>
          ))}
          <Card className="overflow-hidden group md:col-span-2 lg:col-span-1">
             <CardContent className="p-0">
               <video
                  className="w-full h-full object-cover aspect-video"
                  src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
                  poster="https://picsum.photos/seed/aero-video/600/400"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                >
                  Sorry, your browser doesn&apos;t support embedded videos.
                </video>
              </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
