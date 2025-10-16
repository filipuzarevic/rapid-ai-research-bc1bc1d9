
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-agency-navy pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-8">
            User Research for AI Products
          </h1>

          <p className="text-xl md:text-2xl text-agency-lightGray mb-12 max-w-2xl leading-relaxed">
            From insight to impact in one week.
          </p>

          <div className="flex items-center space-x-6">
            <Link to="/contact">
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-agency-navy text-base px-8 py-6 h-auto transition-all duration-200"
              >
                Schedule Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
