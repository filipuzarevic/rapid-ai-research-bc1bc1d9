
import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedElement from "@/components/ui/animated-element";
import StaggeredChildren from "@/components/ui/staggered-children";

const CTA = () => {
  const benefits = [
    "Flexible collaboration options to suit your needs",
    "Specialized expertise in AI product research",
    "Actionable recommendations, not just data",
    "Ongoing support for implementation"
  ];

  return (
    <section className="py-16 bg-white" id="cta">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement animation="animate-fade-up">
          <div className="bg-gradient-to-br from-agency-blue to-agency-purple rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Accelerate Your AI Product Success?
              </h2>
              <p className="text-white/90 text-lg mb-6">
                Schedule a consultation to discuss how our user research can give your AI startup a competitive edge.
              </p>
              
              <StaggeredChildren
                className="space-y-3 mb-8"
                animation="animate-fade-left"
                staggerDelay={100}
                baseDelay={200}
              >
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-white/90">
                    <CheckCircle className="h-5 w-5 text-white mr-2 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </StaggeredChildren>
              
              <Link to="/contact#form">
                <Button className="bg-[#F97316] hover:bg-[#F59E0B] text-white text-base px-6 py-6 h-auto font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default CTA;
