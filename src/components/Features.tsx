
import React from "react";
import { CheckCircle, Award, Clock, TrendingUp } from "lucide-react";

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
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-agency-navy">
            Why AI Startups Choose Us
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            In the fast-paced world of AI product development, our specialized approach gives you the competitive edge
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 p-2 bg-agency-lightBlue rounded-lg">
                  {feature.icon}
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-agency-navy">{feature.title}</h3>
                  <p className="mt-2 text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-agency-blue to-agency-purple rounded-xl shadow-lg overflow-hidden">
          <div className="px-6 py-10 sm:px-10 sm:py-12 md:py-16 text-center md:text-left md:flex md:items-center md:justify-between">
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
                className="inline-block px-6 py-3 bg-white text-agency-blue font-semibold rounded-lg shadow-md hover:bg-gray-50 transition-colors"
              >
                Get Started Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
