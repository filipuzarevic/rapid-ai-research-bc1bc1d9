
import React from "react";

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
    <section className="py-24 bg-agency-light" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-agency-navy mb-6 leading-tight">
            Research Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10 max-w-6xl">
          {services.map((service, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-xl font-semibold text-agency-navy">{service.title}</h3>
              <p className="text-base text-agency-gray leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
