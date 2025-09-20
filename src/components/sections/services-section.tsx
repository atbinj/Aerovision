import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Zap, ScanLine, BrainCircuit } from 'lucide-react';

const services = [
  {
    icon: <Zap className="w-8 h-8 mb-4 text-primary" />,
    title: "Customized Aerial Photogrammetry Projects",
    description: "We deliver tailored solutions for each client's needs, including aerial imaging, cloud-based data processing, and the generation of engineering outputs such as Digital Surface Models (DSM/DTM), 3D maps, and Smart City models.",
  },
  {
    icon: <ScanLine className="w-8 h-8 mb-4 text-primary" />,
    title: "Multispectral and LiDAR-Based Analysis",
    description: "Using high-precision LiDAR and multispectral sensors, we provide insights into vegetation cover, soil moisture, mineral resources, and various geological and environmental parameters.",
  },
  {
    icon: <BrainCircuit className="w-8 h-8 mb-4 text-primary" />,
    title: "Advanced Technology Services (MAF Technology Services)",
    description: "We develop next-generation solutions in AI-powered image analysis for object detection, environmental change monitoring, land surface classification, and intelligent mission management considering weather, environmental, and safety conditions.",
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="font-headline text-4xl font-bold text-center tracking-tighter sm:text-5xl">
          Our Services
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-center text-lg text-foreground/80 text-balance">
          Delivering high-precision data and innovative analytics to power your projects.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col border-border/40 hover:border-primary/50 hover:shadow-lg transition-all transform hover:-translate-y-1">
              <CardHeader>
                {service.icon}
                <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardDescription className="p-6 pt-0 text-base">
                {service.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
