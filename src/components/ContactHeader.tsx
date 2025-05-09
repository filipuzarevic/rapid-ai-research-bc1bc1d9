
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Cpu, MessageCircle, Sparkles } from "lucide-react";
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
            Ready to gain critical insights for your AI product? Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </AnimatedElement>
        
        <AnimatedElement animation="animate-fade-up" delay={300}>
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            <div className="flex items-center bg-white bg-opacity-70 backdrop-blur-sm px-4 py-3 rounded-lg shadow-sm border border-gray-200">
              <Cpu className="h-5 w-5 text-agency-purple mr-2" />
              <span className="text-sm text-gray-700">AI-Specific Research</span>
            </div>
            <div className="flex items-center bg-white bg-opacity-70 backdrop-blur-sm px-4 py-3 rounded-lg shadow-sm border border-gray-200">
              <MessageCircle className="h-5 w-5 text-agency-teal mr-2" />
              <span className="text-sm text-gray-700">24hr Response Time</span>
            </div>
            <div className="flex items-center bg-white bg-opacity-70 backdrop-blur-sm px-4 py-3 rounded-lg shadow-sm border border-gray-200">
              <Sparkles className="h-5 w-5 text-agency-blue mr-2" />
              <span className="text-sm text-gray-700">Data-Driven Insights</span>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </>
  );
};

export default ContactHeader;
