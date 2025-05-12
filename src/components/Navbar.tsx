
import React from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface NavbarProps {
  isMenuOpen?: boolean;
  toggleMenu?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, toggleMenu }) => {
  // If props aren't provided, use internal state
  const [internalIsMenuOpen, setInternalIsMenuOpen] = React.useState(false);
  const location = useLocation();
  
  const isOpen = isMenuOpen !== undefined ? isMenuOpen : internalIsMenuOpen;
  const handleToggle = toggleMenu || (() => setInternalIsMenuOpen(!internalIsMenuOpen));

  // Check if we are on the home page
  const isHomePage = location.pathname === "/";

  // Create navigation links based on current page
  const getNavLink = (section: string, label: string) => {
    if (isHomePage) {
      // If on home page, use anchor links
      return (
        <a 
          href={`#${section}`} 
          className="text-gray-100 hover:text-white font-medium transition-colors"
        >
          {label}
        </a>
      );
    } else {
      // If on any other page, navigate to home page with anchor
      return (
        <Link 
          to={`/#${section}`} 
          className="text-gray-100 hover:text-white font-medium transition-colors"
        >
          {label}
        </Link>
      );
    }
  };

  // For homepage, we want a transparent navbar that blends with hero
  const navbarClasses = isHomePage 
    ? "fixed w-full bg-transparent z-50" 
    : "fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-200";

  // Text colors based on homepage or other pages
  const logoClasses = isHomePage 
    ? "text-xl font-bold text-white" 
    : "text-xl font-bold text-agency-navy";

  const accentClasses = isHomePage
    ? "text-white" 
    : "text-agency-purple";

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
            {getNavLink("services", "Services")}
            {getNavLink("process", "Our Process")}
            {getNavLink("testimonials", "Results")}
            <Link to="/contact">
              <Button className={isHomePage ? "bg-white hover:bg-gray-100 text-agency-blue font-medium" : "bg-agency-blue hover:bg-agency-navy text-white font-medium"}>
                Schedule Consultation
              </Button>
            </Link>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={handleToggle}
              className={`inline-flex items-center justify-center p-2 rounded-md ${isHomePage ? "text-white" : "text-gray-700"} hover:text-agency-blue focus:outline-none`}
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
                <Button className="w-full bg-agency-blue hover:bg-agency-navy text-white font-medium">
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
