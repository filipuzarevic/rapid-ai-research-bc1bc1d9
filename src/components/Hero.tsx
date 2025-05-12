
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedElement from "@/components/ui/animated-element";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-agency-navy to-agency-blue pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Subtle background pattern for visual interest */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')]"></div>
      </div>
      
      {/* Flowing shapes for visual interest without card-like elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-[-10%] w-[40%] h-[40%] rounded-full bg-agency-purple/20 blur-3xl"></div>
        <div className="absolute bottom-[-5%] left-[-5%] w-[30%] h-[30%] rounded-full bg-agency-blue/20 blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-12">
          <div className="md:w-1/2 space-y-6">
            <AnimatedElement animation="animate-fade-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                User Insights <br className="hidden sm:block" />
                <span className="text-agency-lightBlue">Make or Break</span> <br className="hidden sm:block" />
                Your AI Startup
              </h1>
            </AnimatedElement>
            
            <AnimatedElement animation="animate-fade-left" delay={200}>
              <p className="text-lg md:text-xl text-gray-100/80">
                In the AI startup race, understanding your users isn't optional, it's the decisive factor between market leadership and obsolescence. Get actionable insights in just one week that deliver measurable business outcomes.
              </p>
            </AnimatedElement>
            
            <AnimatedElement animation="animate-fade-left" delay={400}>
              <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
                <Link to="/contact">
                  <Button className="bg-white hover:bg-gray-100 text-agency-blue text-base md:text-lg px-6 py-6 h-auto transition-all duration-300 hover:scale-105">
                    Schedule Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a href="#process" className="inline-flex items-center text-white hover:text-agency-lightBlue font-medium text-base md:text-lg transition-all duration-300 hover:translate-x-1">
                  See how we work
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </AnimatedElement>
          </div>
          
          <AnimatedElement animation="animate-fade-right" delay={300} className="md:w-1/2 mt-10 md:mt-0">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Team conducting user research for AI products"
                className="w-full h-auto object-cover rounded-lg overflow-hidden shadow-xl transition-transform duration-700 hover:scale-105"
              />
              <AnimatedElement animation="animate-fade-up" delay={600} className="absolute -bottom-4 -right-4 max-w-[240px]">
                <div className="backdrop-blur-sm bg-white/15 p-3 rounded-lg shadow-lg border border-white/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <p className="font-medium text-sm text-white drop-shadow-sm">Tailored to You</p>
                  <p className="text-white/90 text-xs font-normal">From rapid 5-day sprints to long-term research support.</p>
                </div>
              </AnimatedElement>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </div>
  );
};

export default Hero;
