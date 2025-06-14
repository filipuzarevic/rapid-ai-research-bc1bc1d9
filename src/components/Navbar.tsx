
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Info } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface NavbarProps {
  isMenuOpen?: boolean;
  toggleMenu?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, toggleMenu }) => {
  // If props aren't provided, use internal state
  const [internalIsMenuOpen, setInternalIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const isOpen = isMenuOpen !== undefined ? isMenuOpen : internalIsMenuOpen;
  const handleToggle = toggleMenu || (() => setInternalIsMenuOpen(!internalIsMenuOpen));

  // Check if we are on the home page
  const isHomePage = location.pathname === "/";

  // Add scroll event listener to track scroll position
  useEffect(() => {
    const handleScroll = () => {
      // For homepage, consider scrolled state after 100px
      // For other pages, consider scrolled immediately (they have light backgrounds)
      const scrollThreshold = isHomePage ? 100 : 0;
      setScrolled(window.scrollY > scrollThreshold);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Initialize correct state on component mount
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHomePage]);

  // Create navigation links based on current page
  const getNavLink = (section: string, label: string) => {
    if (isHomePage) {
      // If on home page, use anchor links
      return (
        <a 
          href={`#${section}`} 
          className={`font-medium transition-colors ${scrolled ? 'text-gray-700 hover:text-agency-navy' : 'text-gray-100 hover:text-white'}`}
        >
          {label}
        </a>
      );
    } else {
      // If on any other page, navigate to home page with anchor
      return (
        <Link 
          to={`/#${section}`} 
          className="text-gray-700 hover:text-agency-navy font-medium transition-colors"
        >
          {label}
        </Link>
      );
    }
  };

  // For homepage, we want a transparent navbar that blends with hero,
  // but becomes white/transparent when scrolled
  const navbarClasses = isHomePage 
    ? `fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-sm border-b border-gray-200' : 'bg-transparent'}` 
    : "fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-200";

  // Text colors based on homepage scroll position or other pages
  const logoClasses = isHomePage && !scrolled
    ? "text-xl font-bold text-white transition-colors duration-300" 
    : "text-xl font-bold text-agency-navy transition-colors duration-300";

  const accentClasses = isHomePage && !scrolled
    ? "text-white transition-colors duration-300" 
    : "text-agency-purple transition-colors duration-300";

  // Icon color for mobile menu toggle
  const menuIconColor = isHomePage && !scrolled ? "text-white" : "text-gray-700";

  return (
    <nav className={navbarClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className={logoClasses}>
              Rapid<span className={accentClasses}>Research</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {/* Added About Link first in the navigation */}
            <Link to="/about" className={`${isHomePage && !scrolled ? "text-gray-100 hover:text-white" : "text-gray-700 hover:text-agency-navy"} font-medium transition-colors flex items-center gap-1 rounded-md px-3 py-1.5 bg-opacity-10 hover:bg-opacity-20 ${location.pathname === "/about" ? "bg-agency-purple/10" : ""}`}>
              <Info className="h-4 w-4" />
              <span>About</span>
            </Link>
            {getNavLink("services", "Services")}
            {getNavLink("process", "Our Process")}
            {getNavLink("testimonials", "Results")}
            <Link to="/contact">
              <Button className={isHomePage && !scrolled 
                ? "bg-white hover:bg-gray-100 text-agency-blue font-medium" 
                : "bg-[#F97316] hover:bg-[#F59E0B] text-white font-medium"}>
                Schedule Consultation
              </Button>
            </Link>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={handleToggle}
              className={`inline-flex items-center justify-center p-2 rounded-md ${menuIconColor} hover:text-agency-blue focus:outline-none transition-colors duration-300`}
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate-fade-in">
          <div className="pt-2 pb-4 space-y-1 px-4">
            {/* About link first in mobile menu */}
            <Link
              to="/about"
              className="block py-2 text-base font-medium text-agency-blue hover:text-agency-purple flex items-center"
              onClick={handleToggle}
            >
              <Info className="h-4 w-4 mr-2" />
              About
            </Link>
            
            {isHomePage ? (
              <>
                <a
                  href="#services"
                  className="block py-2 text-base font-medium text-gray-600 hover:text-agency-blue"
                  onClick={handleToggle}
                >
                  Services
                </a>
                <a
                  href="#process"
                  className="block py-2 text-base font-medium text-gray-600 hover:text-agency-blue"
                  onClick={handleToggle}
                >
                  Our Process
                </a>
                <a
                  href="#testimonials"
                  className="block py-2 text-base font-medium text-gray-600 hover:text-agency-blue"
                  onClick={handleToggle}
                >
                  Results
                </a>
              </>
            ) : (
              <>
                <Link
                  to="/#services"
                  className="block py-2 text-base font-medium text-gray-600 hover:text-agency-blue"
                  onClick={handleToggle}
                >
                  Services
                </Link>
                <Link
                  to="/#process"
                  className="block py-2 text-base font-medium text-gray-600 hover:text-agency-blue"
                  onClick={handleToggle}
                >
                  Our Process
                </Link>
                <Link
                  to="/#testimonials"
                  className="block py-2 text-base font-medium text-gray-600 hover:text-agency-blue"
                  onClick={handleToggle}
                >
                  Results
                </Link>
              </>
            )}
            
            <div className="pt-2 pb-3">
              <Link to="/contact" onClick={handleToggle}>
                <Button className="w-full bg-[#F97316] hover:bg-[#F59E0B] text-white font-medium">
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
