
import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  const benefits = [
    "In-depth user insights in just one week",
    "Specialized expertise in AI product research",
    "Actionable recommendations, not just data",
    "Ongoing support for implementation"
  ];

  return (
    <section className="py-16 bg-white" id="cta">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-agency-blue to-agency-purple rounded-xl overflow-hidden shadow-xl">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-3/5 p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Accelerate Your AI Product Success?
              </h2>
              <p className="text-white/90 text-lg mb-6">
                Schedule a free 30-minute consultation to discuss how our rapid user research can give your AI startup the competitive edge.
              </p>
              
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-white/90">
                    <CheckCircle className="h-5 w-5 text-white mr-2 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <Link to="/contact">
                <Button className="bg-white text-agency-blue hover:bg-gray-100 text-base px-6 py-6 h-auto font-semibold shadow-lg">
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            
            <div className="md:w-2/5 bg-white/10 backdrop-blur-sm p-8 md:p-12 flex items-center">
              <div className="w-full bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-agency-navy mb-4">
                  Have urgent research needs?
                </h3>
                <p className="text-gray-600 mb-6">
                  Contact us directly and we can start your research project within 24 hours.
                </p>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Email us at:</p>
                    <p className="text-agency-blue font-medium">contact@rapidairesearch.com</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Call us at:</p>
                    <p className="text-agency-blue font-medium">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
