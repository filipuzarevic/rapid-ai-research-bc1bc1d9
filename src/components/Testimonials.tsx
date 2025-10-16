
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedElement from "@/components/ui/animated-element";

const Testimonials = () => {
  const resultMetrics = [
    {
      metric: "+14%",
      title: "Revenue Lift",
      description: "From optimized product bundling"
    },
    {
      metric: "+56%",
      title: "Ancillary Sales",
      description: "Through targeted enhancements"
    },
    {
      metric: "+6.2%",
      title: "Price Acceptance",
      description: "Through clearer messaging"
    },
    {
      metric: "+16%",
      title: "Revenue Lift",
      description: "From personalized recommendations"
    }
  ];

  return (
    <section className="py-24 bg-pattern" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement animation="animate-fade-up">
          <div className="max-w-3xl mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-agency-navy mb-6 leading-tight">
              Results
            </h2>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {resultMetrics.map((item, index) => (
            <AnimatedElement key={index} animation="animate-fade-up" delay={index * 100}>
              <div className="space-y-3 p-6 rounded-lg transition-all duration-300 hover:shadow-md" style={{ boxShadow: '0 1px 3px rgba(15, 23, 42, 0.04)' }}>
                <div className="text-5xl font-bold text-agency-navy font-mono">
                  {item.metric}
                </div>
                <h3 className="text-xl font-semibold text-agency-navy">{item.title}</h3>
                <p className="text-base text-agency-gray">{item.description}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>

        <AnimatedElement animation="animate-fade-up" delay={400}>
          <div className="mt-16">
            <Link to="/contact">
              <button className="group inline-flex items-center border-2 border-agency-navy text-agency-navy hover:bg-agency-navy hover:text-white font-semibold px-6 py-3 transition-all duration-200">
                Schedule Call
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default Testimonials;
