
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

          {/* Visual element - Abstract geometric composition */}
          <div className="hidden lg:block relative h-[500px]">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Large square */}
              <div className="absolute w-64 h-64 border border-white/10 rotate-12"></div>
              {/* Medium square */}
              <div className="absolute w-48 h-48 border border-white/20 -rotate-6"></div>
              {/* Small square */}
              <div className="absolute w-32 h-32 bg-white/5 backdrop-blur-sm"></div>
              {/* Accent line */}
              <div className="absolute w-1 h-96 bg-gradient-to-b from-transparent via-agency-blue/30 to-transparent left-1/2 -translate-x-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
