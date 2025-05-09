
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-white to-agency-lightBlue pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Abstract shapes for visual interest */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-agency-purple/5"></div>
        <div className="absolute top-1/2 -left-20 w-60 h-60 rounded-full bg-agency-blue/5"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-12">
          <div className="md:w-1/2 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-agency-navy">
              User Insights <br className="hidden sm:block" />
              <span className="text-agency-blue">Make or Break</span> <br className="hidden sm:block" />
              Your AI Startup
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600">
              In the AI startup race, understanding your users isn't optional, it's the decisive factor between market leadership and obsolescence. Get actionable insights in just one week that deliver measurable business outcomes.
            </p>
            
            <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <Link to="/contact">
                <Button className="bg-agency-blue hover:bg-agency-navy text-white text-base md:text-lg px-6 py-6 h-auto">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="#process" className="inline-flex items-center text-agency-blue hover:text-agency-navy font-medium text-base md:text-lg">
                See how we work
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-10 md:mt-0 animate-slide-up">
            <div className="relative">
              <div className="absolute inset-0 -m-6 rounded-3xl bg-gradient-to-br from-agency-blue/20 to-agency-purple/20 transform rotate-3"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Team conducting user research for AI products"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg border border-gray-100">
                <p className="text-agency-navy font-semibold text-lg">Flexible Collaboration</p>
                <p className="text-gray-600">From continuous support to quick sprints</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
