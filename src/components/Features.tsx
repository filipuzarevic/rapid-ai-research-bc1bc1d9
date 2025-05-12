
import React from "react";
import { CheckCircle, Award, Clock, TrendingUp } from "lucide-react";
import AnimatedElement from "@/components/ui/animated-element";
import StaggeredChildren from "@/components/ui/staggered-children";

const Features = () => {
  const features = [
    {
      icon: <Award className="h-8 w-8 text-agency-purple" />,
      title: "15+ Years of Experience",
      description: "Our seasoned team brings deep expertise in both user research methodologies and the unique challenges of AI-powered products."
    },
    {
      icon: <Clock className="h-8 w-8 text-agency-purple" />,
      title: "Agile 1-Week Sprints",
      description: "We've perfected high-velocity research sprints that deliver actionable insights in just one week, keeping pace with your rapid development cycles."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-agency-purple" />,
      title: "AI-Focused Expertise",
      description: "Specialized knowledge in researching AI products, understanding unique adoption barriers, trust issues, and user expectations for intelligent systems."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-agency-purple" />,
      title: "Actionable Results",
      description: "We transform complex research data into clear, strategic recommendations that directly influence your product's success."
    }
  ];

  return (
    <section className="py-16 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement animation="animate-fade-up" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-agency-navy">
            Why AI Startups Choose Us
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            In the fast-paced world of AI product development, our specialized approach gives you the competitive edge
          </p>
        </AnimatedElement>

        <StaggeredChildren 
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          animation="animate-fade-up"
          staggerDelay={150}
        >
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex space-x-5">
                <div className="flex-shrink-0 p-2 bg-agency-lightBlue rounded-lg h-fit">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-agency-navy mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </StaggeredChildren>
        
        <AnimatedElement animation="animate-fade-up" delay={400} className="mt-16">
          <div className="bg-gradient-to-r from-agency-blue to-agency-purple rounded-xl overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-10"></div>
            <div className="px-6 py-10 sm:px-10 sm:py-12 md:py-16 text-center md:text-left md:flex md:items-center md:justify-between relative z-10">
              <div className="md:flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Time is critical in AI product development
                </h3>
                <p className="mt-2 text-white/80 text-lg">
                  While your competitors are still planning their research, you could already be implementing insights.
                </p>
              </div>
              <div className="mt-8 md:mt-0 md:ml-8">
                <a 
                  href="#cta" 
                  className="inline-block px-6 py-3 bg-white text-agency-blue font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105"
                >
                  Get Started Now
                </a>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Features;
