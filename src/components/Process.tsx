
import React from "react";
import { 
  Clock, 
  ArrowsUpFromLine, 
  Handshake
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedElement from "@/components/ui/animated-element";
import StaggeredChildren from "@/components/ui/staggered-children";

const Process = () => {
  const researchOptions = [
    {
      icon: <Clock className="h-8 w-8 text-white" />,
      color: "bg-agency-blue",
      title: "Rapid Discovery (1-week Sprint)",
      description: "Identify your product's critical questions and quickly validate ideas. Get clear, actionable insights in just one week, ensuring you can move forward fast."
    },
    {
      icon: <ArrowsUpFromLine className="h-8 w-8 text-white" />,
      color: "bg-agency-purple",
      title: "Flexible Research (Custom Duration)",
      description: "Research tailored to your schedule and evolving needs. Easily integrate ongoing user insights into your product development process."
    },
    {
      icon: <Handshake className="h-8 w-8 text-white" />,
      color: "bg-agency-navy",
      title: "Long-Term Strategic Partnership",
      description: "Dedicated research support as your product scales. Regular, deep-dive insights and guidance to continuously inform your key product decisions."
    }
  ];

  return (
    <section className="py-16 bg-white" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement animation="animate-fade-up" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-agency-navy">
            Flexible Research Tailored to Your Pace
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Rapid 1-week discovery sprints or continuous collaboration—choose what your product needs.
          </p>
        </AnimatedElement>

        {/* Research Options - Desktop View */}
        <StaggeredChildren 
          className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8"
          animation="animate-fade-up"
          staggerDelay={200}
        >
          {researchOptions.map((option, index) => (
            <Card key={index} className="border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className={`${option.color} p-6 flex items-center justify-center group`}>
                <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110">
                  {option.icon}
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-semibold text-agency-navy mb-3">
                  {option.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {option.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </StaggeredChildren>

        {/* Research Options - Mobile View */}
        <StaggeredChildren 
          className="md:hidden space-y-8"
          animation="animate-fade-up"
          staggerDelay={150}
        >
          {researchOptions.map((option, index) => (
            <div key={index} className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className={`${option.color} p-4 flex items-center justify-center group`}>
                <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110">
                  {option.icon}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-agency-navy mb-2">
                  {option.title}
                </h3>
                <p className="text-gray-600">
                  {option.description}
                </p>
              </div>
            </div>
          ))}
        </StaggeredChildren>
      </div>
    </section>
  );
};

export default Process;
