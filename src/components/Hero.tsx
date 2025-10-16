
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [showTitle, setShowTitle] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    // Wait 1 second, then show title
    const titleTimer = setTimeout(() => setShowTitle(true), 1000);
    // Show subtitle 600ms after title
    const subtitleTimer = setTimeout(() => setShowSubtitle(true), 1600);
    // Show CTA 600ms after subtitle
    const ctaTimer = setTimeout(() => setShowCTA(true), 2200);

    return () => {
      clearTimeout(titleTimer);
      clearTimeout(subtitleTimer);
      clearTimeout(ctaTimer);
    };
  }, []);

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
          <div className="max-w-2xl relative">
            {/* Mobile background animation - very subtle */}
            <div className="lg:hidden absolute inset-0 -top-10 -bottom-10 flex items-center justify-center pointer-events-none opacity-60">
              <div className="relative w-[300px] h-[300px]">
                {/* Central circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-white/[0.02] border border-white/[0.05] flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/[0.03] animate-pulse-soft"></div>
                </div>

                {/* Orbiting elements - reduced to 3 */}
                <div className="absolute inset-0 animate-spin-slow">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white/[0.02] border border-white/[0.08]"></div>
                </div>
                <div className="absolute inset-0 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '14s' }}>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white/[0.02] border border-white/[0.08]"></div>
                </div>
                <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: '18s' }}>
                  <div className="absolute top-1/2 right-0 -translate-y-1/2 w-7 h-7 rounded-full bg-white/[0.02] border border-white/[0.08]"></div>
                </div>

                {/* Connecting line */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-dashed border-white/[0.05]"></div>
              </div>
            </div>

            <h1
              className={`relative text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-8 transition-all duration-700 ${
                showTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              User Research for AI Products
            </h1>

            <p
              className={`relative text-xl md:text-2xl text-agency-lightGray mb-12 leading-relaxed transition-all duration-700 ${
                showSubtitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              From insight to impact in one week.
            </p>

            <div
              className={`relative flex items-center space-x-6 transition-all duration-700 ${
                showCTA ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <Link to="/contact">
                <button className="group inline-flex items-center bg-white text-agency-navy font-semibold text-base px-6 py-3 border-2 border-white hover:bg-transparent hover:text-white transition-all duration-200">
                  Schedule Call
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
            </div>
          </div>

          {/* Visual element - Orbiting circles animation - Desktop only */}
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
