
import React from "react";
import AnimatedElement from "@/components/ui/animated-element";

const Services = () => {
  const services = [
    {
      title: "User Interviews",
      description: "In-depth conversations to uncover needs and expectations."
    },
    {
      title: "Usability Testing",
      description: "Observe real users to identify friction and optimization opportunities."
    },
    {
      title: "Survey Design",
      description: "Quantitative insights from larger user samples."
    },
    {
      title: "Data Analysis",
      description: "Translate research data into actionable recommendations."
    },
    {
      title: "Competitive Analysis",
      description: "Understand user perception and identify differentiation opportunities."
    },
    {
      title: "AI Interaction Research",
      description: "Specialized research on user interactions with AI-driven features."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="services">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedElement animation="animate-fade-up">
          <div className="max-w-3xl mb-20">
            <div className="inline-block px-4 py-2 bg-purple-50 text-purple-600 font-semibold text-sm rounded-full mb-6">
              Our Approach
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-agency-navy mb-6 leading-tight">
              Research Methods That <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Actually Work</span>
            </h2>
            <p className="text-xl text-agency-gray">
              Mixed-method research tailored for AI product development
            </p>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
          {services.map((service, index) => (
            <AnimatedElement key={index} animation="animate-fade-up" delay={index * 80}>
              <div className="group p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:border-blue-200 transition-all duration-300 hover:shadow-lg hover:shadow-blue-100/30 hover:-translate-y-1">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <h3 className="text-lg font-semibold text-agency-navy mb-2">{service.title}</h3>
                <p className="text-sm text-agency-gray leading-relaxed">{service.description}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
