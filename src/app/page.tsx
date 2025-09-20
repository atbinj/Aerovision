import HomeSection from '@/components/sections/home-section';
import AboutSection from '@/components/sections/about-section';
import ServicesSection from '@/components/sections/services-section';
import IndustriesSection from '@/components/sections/industries-section';
import TechnologiesSection from '@/components/sections/technologies-section';
import ProjectsSection from '@/components/sections/projects-section';
import AiFlightPlannerSection from '@/components/sections/ai-flight-planner-section';
import ContactSection from '@/components/sections/contact-section';

export default function Home() {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <ServicesSection />
      <IndustriesSection />
      <TechnologiesSection />
      <ProjectsSection />
      <AiFlightPlannerSection />
      <ContactSection />
    </>
  );
}
