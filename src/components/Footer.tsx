
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNavigate = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-agency-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center md:flex-row md:justify-between mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold">
              Rapid<span className="text-agency-lightGray">Research</span>
            </h2>
            <p className="mt-2 text-agency-lightGray max-w-md">
              User research for AI products.
            </p>
          </div>
        </div>

        <div className="border-t border-agency-slate/30 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-agency-gray text-sm">© {currentYear} RapidResearch. All rights reserved.</p>
          <div className="flex flex-wrap gap-6 mt-4 md:mt-0 justify-center">
            <Link to="/terms" onClick={handleNavigate} className="text-agency-gray hover:text-white transition-colors text-sm">Terms & Conditions</Link>
            <Link to="/privacy" onClick={handleNavigate} className="text-agency-gray hover:text-white transition-colors text-sm">Privacy Policy</Link>
            <Link to="/cookies" onClick={handleNavigate} className="text-agency-gray hover:text-white transition-colors text-sm">Cookies Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
