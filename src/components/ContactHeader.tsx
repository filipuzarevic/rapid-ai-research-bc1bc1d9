
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import AnimatedElement from "@/components/ui/animated-element";

const ContactHeader = () => {
  return (
    <div className="mb-8">
      <Link 
        to="/" 
        className="inline-flex items-center text-agency-purple hover:text-agency-navy transition-colors duration-300 mb-6 group"
      >
        <ArrowLeft className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
        Back to home
      </Link>
      
      <AnimatedElement animation="animate-fade-up" delay={100}>
        <h1 className="text-3xl md:text-5xl font-bold text-agency-navy mb-3 relative">
          <span className="bg-gradient-to-r from-agency-navy to-agency-purple bg-clip-text text-transparent">Get in Touch</span>
        </h1>
        
        <p className="text-lg text-gray-600 max-w-2xl mb-3">
          Fill out the form below and we'll respond to your inquiry within 24 hours.
        </p>
        
        <div className="w-20 h-1 bg-gradient-to-r from-agency-purple to-agency-blue rounded-full mt-2"></div>
      </AnimatedElement>
    </div>
  );
};

export default ContactHeader;
