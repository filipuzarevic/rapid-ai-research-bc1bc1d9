
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import AnimatedElement from "@/components/ui/animated-element";

const ContactHeader = () => {
  return (
    <>
      <Link 
        to="/" 
        className="inline-flex items-center text-agency-purple hover:text-agency-navy transition-colors duration-300 mb-6 group"
      >
        <ArrowLeft className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
        Back to home
      </Link>
      
      <div className="mb-12">
        <AnimatedElement animation="animate-fade-up" delay={100} className="text-center mb-4">
          <h1 className="text-3xl md:text-5xl font-bold text-agency-navy mb-4 relative inline-block">
            <span className="relative z-10">Get in Touch</span>
            <div className="absolute -bottom-2 left-0 w-full h-2 bg-agency-purple/20 rounded-full transform -rotate-1"></div>
          </h1>
        </AnimatedElement>
        
        <AnimatedElement animation="animate-fade-up" delay={200} className="text-center">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Fill out the form below and we'll respond to your inquiry within 24 hours.
          </p>
        </AnimatedElement>
      </div>
    </>
  );
};

export default ContactHeader;
