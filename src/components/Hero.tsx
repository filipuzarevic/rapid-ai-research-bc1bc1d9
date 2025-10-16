
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-agency-navy pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      {/* Minimal accent shape */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-8">
              User Research for AI Products
            </h1>

            <p className="text-xl md:text-2xl text-agency-lightGray mb-12 leading-relaxed">
              From insight to impact in one week.
            </p>

            <div className="flex items-center space-x-6">
              <Link to="/contact">
                <Button
                  className="bg-white text-agency-navy hover:bg-gray-100 text-base px-8 py-6 h-auto transition-all duration-200"
                >
                  Schedule Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Visual element - Orbiting circles animation */}
          <div className="hidden lg:block relative h-[500px]">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Central circle - represents users */}
              <div className="absolute w-32 h-32 rounded-full bg-white/5 border-2 border-white/10 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/10 animate-pulse-soft"></div>
              </div>

              {/* Orbiting elements - represent insights */}
              <div className="absolute w-full h-full animate-spin-slow">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white/5 border border-white/20"></div>
              </div>
              <div className="absolute w-full h-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '12s' }}>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white/5 border border-white/20"></div>
              </div>
              <div className="absolute w-full h-full animate-spin-slow" style={{ animationDuration: '15s' }}>
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-8 h-8 rounded-full bg-white/5 border border-white/20"></div>
              </div>
              <div className="absolute w-full h-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '18s' }}>
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-10 h-10 rounded-full bg-white/5 border border-white/20"></div>
              </div>

              {/* Connecting lines */}
              <div className="absolute w-64 h-64 rounded-full border border-dashed border-white/10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
