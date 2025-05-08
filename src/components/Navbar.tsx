
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-xl font-bold text-agency-navy">
              Rapid<span className="text-agency-purple">AI</span>Research
            </h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-agency-blue font-medium transition-colors">
              Services
            </a>
            <a href="#process" className="text-gray-600 hover:text-agency-blue font-medium transition-colors">
              Our Process
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-agency-blue font-medium transition-colors">
              Results
            </a>
            <Button className="bg-agency-blue hover:bg-agency-navy text-white font-medium">
              Schedule Consultation
            </Button>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-agency-blue focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate-fade-in">
          <div className="pt-2 pb-4 space-y-1 px-4">
            <a
              href="#services"
              className="block py-2 text-base font-medium text-gray-600 hover:text-agency-blue"
              onClick={toggleMenu}
            >
              Services
            </a>
            <a
              href="#process"
              className="block py-2 text-base font-medium text-gray-600 hover:text-agency-blue"
              onClick={toggleMenu}
            >
              Our Process
            </a>
            <a
              href="#testimonials"
              className="block py-2 text-base font-medium text-gray-600 hover:text-agency-blue"
              onClick={toggleMenu}
            >
              Results
            </a>
            <div className="pt-2 pb-3">
              <Button className="w-full bg-agency-blue hover:bg-agency-navy text-white font-medium">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
