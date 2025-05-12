
import React from "react";
import { 
  Users, 
  LineChart, 
  Search, 
  Clipboard, 
  Eye, 
  BarChart3,
  MessagesSquare
} from "lucide-react";
import AnimatedElement from "@/components/ui/animated-element";
import StaggeredChildren from "@/components/ui/staggered-children";

const Services = () => {
  const services = [
    {
      icon: <Users className="h-6 w-6 text-agency-blue" />,
      title: "User Interviews",
      description: "In-depth conversations with your target users to uncover needs, pain points, and expectations for your AI product."
    },
    {
      icon: <Eye className="h-6 w-6 text-agency-blue" />,
      title: "Usability Testing",
      description: "Observe real users interacting with your AI solution to identify friction points and optimization opportunities."
    },
    {
      icon: <Clipboard className="h-6 w-6 text-agency-blue" />,
      title: "Survey Design",
      description: "Expertly crafted surveys that capture quantitative insights from larger user samples with statistical significance."
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-agency-blue" />,
      title: "Data Analysis",
      description: "Rigorous quantitative and qualitative analysis that translates research data into actionable product recommendations."
    },
    {
      icon: <LineChart className="h-6 w-6 text-agency-blue" />,
      title: "Competitive Analysis",
      description: "Understand how users perceive competing AI solutions and identify opportunities for differentiation."
    },
    {
      icon: <MessagesSquare className="h-6 w-6 text-agency-blue" />,
      title: "AI Interaction Research",
      description: "Specialized research on how users interact with and perceive AI-driven features and conversations."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-agency-gray/50 to-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement animation="animate-fade-up" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-agency-navy">
            Our Research Services
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Mixed-method research tailored specifically for AI-powered products
          </p>
        </AnimatedElement>

        <StaggeredChildren 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          animation="animate-fade-up"
          staggerDelay={100}
        >
          {services.map((service, index) => (
            <div key={index} className="group hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-agency-blue/10 rounded-lg h-fit transition-all duration-300 group-hover:bg-agency-blue/20">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-agency-navy mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </StaggeredChildren>
      </div>
    </section>
  );
};

export default Services;
