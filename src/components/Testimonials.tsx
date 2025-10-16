
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedElement from "@/components/ui/animated-element";

const Testimonials = () => {
  const resultMetrics = [
    {
      metric: "+14%",
      title: "Revenue Lift",
      description: "From optimized product bundling",
      color: "from-blue-500 to-cyan-500"
    },
    {
      metric: "+56%",
      title: "Ancillary Sales",
      description: "Through targeted enhancements",
      color: "from-purple-500 to-pink-500"
    },
    {
      metric: "+6.2%",
      title: "Price Acceptance",
      description: "Through clearer messaging",
      color: "from-cyan-500 to-blue-500"
    },
    {
      metric: "+16%",
      title: "Revenue Lift",
      description: "From personalized recommendations",
      color: "from-blue-600 to-purple-600"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" id="testimonials">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedElement animation="animate-fade-up">
          <div className="max-w-3xl mb-20 text-center">
            <div className="inline-block px-4 py-2 bg-green-50 text-green-600 font-semibold text-sm rounded-full mb-6">
              Proven Impact
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-agency-navy mb-6 leading-tight">
              Real Results for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Real Products</span>
            </h2>
            <p className="text-xl text-agency-gray">
              Research that directly impacts your bottom line
            </p>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {resultMetrics.map((item, index) => (
            <AnimatedElement key={index} animation="animate-fade-up" delay={index * 100}>
              <div className="group relative p-6 bg-white rounded-2xl border border-gray-200 hover:border-blue-200 transition-all duration-300 hover:shadow-lg hover:shadow-blue-100/50 hover:-translate-y-1">
                <div className={`text-5xl font-bold bg-gradient-to-br ${item.color} bg-clip-text text-transparent mb-3`}>
                  {item.metric}
                </div>
                <h3 className="text-lg font-semibold text-agency-navy mb-2">{item.title}</h3>
                <p className="text-sm text-agency-gray">{item.description}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>

        <AnimatedElement animation="animate-fade-up" delay={400}>
          <div className="mt-16 text-center">
            <Link to="/contact">
              <button className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30">
                Get Started Today
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
