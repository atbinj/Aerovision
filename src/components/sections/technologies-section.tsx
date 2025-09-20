import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle } from "lucide-react";

const technologies = [
  {
    value: "flexible-flight-path",
    title: "Flexible Flight Path",
    description: "Our proprietary aerial imaging software enables fully adaptable flight path planning based on project needs, environmental conditions, and real-time updates.",
    benefits: [
      "Optimized flight time and lower energy usage",
      "Real-time weather adaptation (wind, clouds, rain)",
      "Precision data capture over critical areas",
      "Dynamic adjustments based on data type (RGB, multispectral, LiDAR)",
      "Faster operations and reduced costs",
      "Higher flexibility for complex or changing sites",
      "Enhanced safety through obstacle-aware routing",
    ],
  },
  {
    value: "adjustable-imaging",
    title: "Adjustable Imaging",
    description: "Our system supports various cameras and lenses for custom data capture:",
    benefits: [
      "Real-time control over exposure, shutter speed, ISO, and altitude",
      "Better image quality under variable lighting",
      "Higher modeling precision through optimized angles",
      "Seamless support for multispectral and LiDAR sensors",
      "Time and cost efficiency for large-scale missions",
    ],
  },
  {
    value: "real-time-geotagging",
    title: "Real-Time Geotagging",
    description: "Using dual-frequency GPS (including L5 band), our system geotags each image live:",
    benefits: [
      "Instant geospatial accuracy",
      "Faster data processing and visualization",
      "Effective real-time project tracking",
      "Seamless team coordination and location-based workflows",
      "Valuable for disaster response and 3D reconstruction",
    ],
  },
  {
    value: "continuous-imaging",
    title: "Continuous Imaging",
    description: "Thanks to external battery integration, our system can capture uninterrupted data for long durations:",
    benefits: [
      "Ideal for large-scale areas",
      "Reduced downtime from fewer takeoffs/landings",
      "Better image consistency and operational efficiency",
      "Critical in countries like Canada where sunny days are rare",
    ],
  }
];

const TechnologiesSection = () => {
  return (
    <section id="technologies" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="font-headline text-4xl font-bold text-center tracking-tighter sm:text-5xl">
          Innovative Technologies
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-center text-lg text-foreground/80 text-balance">
          Explore the core technologies that power our advanced aerial intelligence platform.
        </p>
        <div className="mt-12 max-w-4xl mx-auto">
          <Tabs defaultValue="flexible-flight-path" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
              {technologies.map(tech => (
                <TabsTrigger key={tech.value} value={tech.value} className="py-2 data-[state=active]:bg-background/80">
                  {tech.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {technologies.map(tech => (
              <TabsContent key={tech.value} value={tech.value} className="mt-8">
                <div className="p-6 rounded-lg bg-background">
                  <h3 className="text-2xl font-bold font-headline">{tech.title}</h3>
                  <p className="mt-2 text-foreground/80">{tech.description}</p>
                  <ul className="mt-6 space-y-3">
                    {tech.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 mr-3 mt-1 text-primary-foreground/80 bg-primary rounded-full" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
