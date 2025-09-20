import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Building, Gem, Leaf, TreePine, Wrench, Siren } from 'lucide-react';

const industries = [
  {
    icon: <Building className="w-6 h-6 mr-3 text-accent" />,
    title: "Urban Planning & Smart City Development",
    description: "Includes Digital Twin creation, urban density analysis, and infrastructure design for sustainable city development."
  },
  {
    icon: <Gem className="w-6 h-6 mr-3 text-accent" />,
    title: "Mining & Natural Resources",
    description: "Solutions for volume assessment, environmental monitoring, and surface deformation tracking in active mining zones."
  },
  {
    icon: <Leaf className="w-6 h-6 mr-3 text-accent" />,
    title: "Precision Agriculture & Natural Resources",
    description: "Use of multispectral imagery and NDVI analysis to evaluate crop health, detect disease, and optimize irrigation."
  },
  {
    icon: <TreePine className="w-6 h-6 mr-3 text-accent" />,
    title: "Forest Resource Management",
    description: "Tree volume estimation and vegetation classification maps using LiDAR imaging for improved forestry planning."
  },
  {
    icon: <Wrench className="w-6 h-6 mr-3 text-accent" />,
    title: "Infrastructure & Civil Engineering",
    description: "Project monitoring and documentation through accurate surface change detection and high-resolution mapping."
  },
  {
    icon: <Siren className="w-6 h-6 mr-3 text-accent" />,
    title: "Disaster & Crisis Management",
    description: "Post-disaster damage assessments following earthquakes, floods, or wildfires to accelerate emergency response and recovery efforts."
  }
];

const IndustriesSection = () => {
  return (
    <section id="industries" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <h2 className="font-headline text-4xl font-bold text-center tracking-tighter sm:text-5xl">
          Industries We Serve
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-center text-lg text-foreground/80 text-balance">
          From smart cities to sustainable agriculture, our solutions are tailored to meet the unique challenges of diverse sectors.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <Card key={index} className="border-border/40 hover:bg-card/95 transition-colors">
              <CardHeader>
                <div className="flex items-center">
                  {industry.icon}
                  <CardTitle className="font-headline text-xl">{industry.title}</CardTitle>
                </div>
                <CardDescription className="pt-2 text-base">
                  {industry.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
