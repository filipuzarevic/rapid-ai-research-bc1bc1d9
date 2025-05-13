
import React from "react";
import AnimatedElement from "@/components/ui/animated-element";
import StaggeredChildren from "@/components/ui/staggered-children";

const TrustedBy = () => {
  const companies = [
    {
      name: "Kiwi.com",
      logo: "/lovable-uploads/c9d1df73-0b48-47e6-99ae-c91819f42333.png"
    },
    {
      name: "Polling.com",
      logo: "/lovable-uploads/7cfa34b6-69b6-49ee-91b3-402bda4553e6.png"
    }
  ];

  return (
    <section className="py-16 bg-white" id="trusted-by">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement animation="animate-fade-up" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-agency-navy">
            Trusted By
          </h2>
        </AnimatedElement>

        <StaggeredChildren 
          className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20"
          animation="animate-fade-up"
          staggerDelay={150}
        >
          {companies.map((company, index) => (
            <div 
              key={index}
              className="group hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-center h-full">
                <img 
                  src={company.logo} 
                  alt={`${company.name} logo`} 
                  className="max-h-16 md:max-h-20 w-auto object-contain"
                />
              </div>
            </div>
          ))}
        </StaggeredChildren>
      </div>
    </section>
  );
};

export default TrustedBy;
