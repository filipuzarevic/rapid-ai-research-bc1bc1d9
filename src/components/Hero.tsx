
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-agency-navy via-agency-charcoal to-agency-navy pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-soft"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }}></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl">
            {/* Eyebrow text */}
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-blue-200">The AI Startup Differentiator</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              User Research for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">AI Products</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed">
              The difference between fine-tuned success and mediocre failure.
            </p>

            <p className="text-lg text-gray-400 mb-12 leading-relaxed">
              Get actionable insights in one week that transform your AI product from generic to indispensable.
            </p>

            <div className="flex items-center space-x-6">
              <Link to="/contact">
                <Button
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-base px-8 py-6 h-auto transition-all duration-200 shadow-lg shadow-blue-500/25"
                >
                  Schedule Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href="#features" className="text-blue-300 hover:text-white font-medium transition-colors">
                Learn More →
              </a>
            </div>
          </div>

          {/* Visual element - User-centric diagram */}
          <div className="hidden lg:block relative h-[500px]">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Central circle - represents users */}
              <div className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-blue-400/30 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 animate-pulse-soft"></div>
              </div>

              {/* Orbiting elements - represent insights */}
              <div className="absolute w-full h-full animate-spin-slow">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-blue-500/20 border border-blue-400/40"></div>
              </div>
              <div className="absolute w-full h-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '12s' }}>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-purple-500/20 border border-purple-400/40"></div>
              </div>
              <div className="absolute w-full h-full animate-spin-slow" style={{ animationDuration: '15s' }}>
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-8 h-8 rounded-full bg-blue-400/20 border border-blue-400/40"></div>
              </div>
              <div className="absolute w-full h-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '18s' }}>
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-10 h-10 rounded-full bg-purple-400/20 border border-purple-400/40"></div>
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
