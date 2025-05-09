
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CircleCheck } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedElement from "@/components/ui/animated-element";
import StaggeredChildren from "@/components/ui/staggered-children";

const Testimonials = () => {
  const resultMetrics = [
    { 
      metric: "+14%", 
      title: "Revenue Lift",
      description: "Net revenue increase from optimized research-based product bundling" 
    },
    { 
      metric: "+56%", 
      title: "Ancillary Sales",
      description: "Boost in additional product sales through targeted enhancements" 
    },
    { 
      metric: "+6.2%", 
      title: "Higher Price Acceptance",
      description: "Increase in customer willingness to accept price changes through clearer messaging" 
    },
    { 
      metric: "+16%", 
      title: "Revenue Lift",
      description: "Net revenue increase from personalized product recommendations" 
    }
  ];

  return (
    <section className="py-16 bg-agency-gray" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement animation="animate-fade-up" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-agency-navy">
            Results That Drive Business Growth
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Our research translates directly into measurable outcomes for AI-driven products
          </p>
        </AnimatedElement>

        {/* Results Metrics */}
        <StaggeredChildren 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          animation="animate-zoom-in"
          staggerDelay={150}
        >
          {resultMetrics.map((item, index) => (
            <Card key={index} className="bg-white border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-agency-blue/10 text-agency-blue mb-4 transition-all duration-300 group-hover:scale-110">
                  <CircleCheck className="h-6 w-6" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-agency-blue mb-2">
                  {item.metric}
                </div>
                <h3 className="text-lg font-semibold text-agency-navy mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </StaggeredChildren>

        {/* Call to action */}
        <AnimatedElement animation="animate-fade-up" delay={300} className="mt-12">
          <div className="text-center">
            <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-6">
              Don't let competitors outpace you. Discover how our rapid research methodology can accelerate your AI product success.
            </p>
            <Link to="/contact">
              <button className="inline-flex items-center bg-agency-blue hover:bg-agency-navy text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105">
                Book Your Strategy Session
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </Link>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Testimonials;
