const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="font-headline text-4xl font-bold text-center tracking-tighter sm:text-5xl">
          About Us
        </h2>
        <div className="mt-8 text-lg text-foreground/80 text-balance space-y-6">
          <p>
            Aerovision is a deep-tech startup in the field of aerial photogrammetry, offering cutting-edge solutions for spatial monitoring, modeling, and planning. By combining Artificial Intelligence, multispectral sensors, and 3D data analytics, we deliver innovative, scalable tools for clients across sectors.
          </p>
          <p>
            Established in 2018 in Iran, Aerovision is now preparing to expand into the Canadian market. Our focus is on sustainable development, intelligent resource management, and providing high-precision data to support strategic decision-making at scale.
          </p>
          <p>
            Our team of engineers, data scientists, and photogrammetry experts is united by a mission: to empower industries and governments through smart, scalable, and ethical geospatial solutions. We are currently finalizing patent registrations, establishing a Canadian entity in Toronto, and preparing to enter the North American market in 2026.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
