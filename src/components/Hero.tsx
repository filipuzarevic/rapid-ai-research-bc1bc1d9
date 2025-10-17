
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [showAI, setShowAI] = useState(false);
  const [showUserResearch, setShowUserResearch] = useState(false);
  const [showForProducts, setShowForProducts] = useState(false);
  const [showTagline, setShowTagline] = useState(false);
  const [showCTA, setShowCTA] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Sequential reveal animation: AI, User Research, for Products, tagline, CTA
    const aiTimer = setTimeout(() => setShowAI(true), 300);
    const userResearchTimer = setTimeout(() => setShowUserResearch(true), 900);
    const forProductsTimer = setTimeout(() => setShowForProducts(true), 1500);
    const taglineTimer = setTimeout(() => setShowTagline(true), 2100);
    const ctaTimer = setTimeout(() => setShowCTA(true), 2700);

    return () => {
      clearTimeout(aiTimer);
      clearTimeout(userResearchTimer);
      clearTimeout(forProductsTimer);
      clearTimeout(taglineTimer);
      clearTimeout(ctaTimer);
    };
  }, []);

  useEffect(() => {
    let ticking = false;

    // Track scroll to reposition content when header appears
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Use passive event listener for better mobile performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('touchmove', handleScroll, { passive: true });

    // Check scroll position periodically as fallback for mobile browsers
    const intervalId = setInterval(handleScroll, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="relative bg-agency-navy min-h-screen flex items-center justify-center overflow-hidden">
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

      <div className={`relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center transition-all duration-500 ${scrolled ? 'mt-0' : '-mt-12 sm:mt-0'}`}>
        <div className="flex flex-col items-center justify-center space-y-6 sm:space-y-10">
          <h1 className="font-bold tracking-tight text-white leading-[1.1] sm:leading-[1.15]">
            <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mb-2 sm:mb-4">
              <span
                className={`transition-opacity duration-700 ${
                  showUserResearch ? 'opacity-100' : 'opacity-0'
                }`}
              >
                User Research
              </span>
            </div>
            <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
              <span
                className={`transition-opacity duration-700 ${
                  showForProducts ? 'opacity-100' : 'opacity-0'
                }`}
              >
                for{' '}
              </span>
              <span
                className={`transition-opacity duration-700 ${
                  showAI ? 'opacity-100' : 'opacity-0'
                }`}
              >
                AI{' '}
              </span>
              <span
                className={`transition-opacity duration-700 ${
                  showForProducts ? 'opacity-100' : 'opacity-0'
                }`}
              >
                Products
              </span>
            </div>
          </h1>

          <p
            className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl text-agency-lightGray leading-relaxed max-w-4xl px-4 transition-opacity duration-700 ${
              showTagline ? 'opacity-100' : 'opacity-0'
            }`}
          >
            From insight to impact in one week.
          </p>

          <div
            className={`pt-2 sm:pt-4 flex items-center justify-center transition-opacity duration-700 ${
              showCTA ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Link to="/contact">
              <button className="group inline-flex items-center bg-white text-agency-navy font-semibold text-base sm:text-lg md:text-xl px-8 sm:px-10 py-4 sm:py-5 border-2 border-white hover:bg-transparent hover:text-white transition-all duration-200">
                Schedule Call
                <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
