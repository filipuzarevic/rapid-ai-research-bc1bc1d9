
import React from "react";
import AnimatedElement from "@/components/ui/animated-element";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-agency-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AnimatedElement animation="animate-fade-up" className="flex flex-col items-center md:flex-row md:justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold">
              Rapid<span className="text-agency-purple">Research</span>
            </h2>
            <p className="mt-2 text-gray-300 max-w-md">
              Expert user research for AI-powered products. Get actionable insights for your business.
            </p>
          </div>
        </AnimatedElement>
        
        <AnimatedElement animation="animate-fade-up" delay={200} className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© {currentYear} RapidResearch. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm hover:underline">Terms & Conditions</Link>
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm hover:underline">Privacy Policy</Link>
          </div>
        </AnimatedElement>
      </div>
    </footer>
  );
};

export default Footer;
