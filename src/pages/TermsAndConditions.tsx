
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedElement from "@/components/ui/animated-element";
import { ArrowLeft } from "lucide-react";

const TermsAndConditions = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Background gradient that extends under the navbar */}
      <div className="absolute inset-0 bg-gradient-to-br from-agency-purple/5 via-white to-agency-lightBlue/20 pointer-events-none z-0"></div>
      
      <Navbar />
      <div className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-28 relative z-10">
          <AnimatedElement animation="animate-fade-up">
            <Link 
              to="/" 
              className="inline-flex items-center text-agency-purple hover:text-agency-navy transition-colors duration-300 mb-6 group"
            >
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              Back to home
            </Link>
            
            <h1 className="text-3xl md:text-4xl font-bold text-agency-navy mb-4 relative">
              <span className="bg-gradient-to-r from-agency-navy to-agency-purple bg-clip-text text-transparent">Terms and Conditions</span>
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-agency-purple to-agency-blue rounded-full mb-8"></div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-8">
                Welcome to Simplifi. These Terms and Conditions ("Terms") govern your access to and use of the website of Simplifi, and the services we provide (collectively referred to as "Services"). By accessing or using our website, you agree to be bound by these Terms.
              </p>
              
              <h2 className="text-2xl font-bold text-agency-navy mt-8 mb-4">1. Company Information</h2>
              <p>
                Simplifi<br/>
                Brezovička cesta 21L/1, 10020 Zagreb, Croatia<br/>
                Contact Email: filip@rapid-research.org
              </p>
              
              <h2 className="text-2xl font-bold text-agency-navy mt-8 mb-4">2. Use of the Website</h2>
              <p>
                By using our website, you agree that you will not engage in any activity that could harm or disrupt our Services or their operation. You are responsible for your use of the website and any content that you post or provide through the website. You must not:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>Use the website in violation of any applicable laws or regulations.</li>
                <li>Transmit any malicious code, viruses, or harmful content.</li>
                <li>Attempt to gain unauthorized access to any part of the website.</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-agency-navy mt-8 mb-4">3. Intellectual Property</h2>
              <p>
                All content on the website, including text, images, graphics, logos, and software, is the intellectual property of Simplifi or its licensors. You may not copy, distribute, modify, or use any of this content without prior written permission from Simplifi.
              </p>
              
              <h2 className="text-2xl font-bold text-agency-navy mt-8 mb-4">4. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites or services that are not owned or controlled by Simplifi. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
              </p>
              
              <h2 className="text-2xl font-bold text-agency-navy mt-8 mb-4">5. Limitation of Liability</h2>
              <p>
                Simplifi will not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of data, revenue, profits, or business interruption, arising from or related to the use of our Services.
              </p>
              
              <h2 className="text-2xl font-bold text-agency-navy mt-8 mb-4">6. Governing Law</h2>
              <p>
                These Terms will be governed and interpreted according to the laws of Croatia. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts located in Zagreb, Croatia.
              </p>
              
              <h2 className="text-2xl font-bold text-agency-navy mt-8 mb-4">7. Modifications to the Terms</h2>
              <p>
                We may revise these Terms from time to time. Any changes will be posted on this page, and by continuing to use our Services after such changes, you agree to the revised Terms.
              </p>
              
              <div className="mt-12 text-center">
                <p className="text-gray-500 mb-6">Last updated: {currentYear}</p>
                <Link to="/">
                  <Button className="bg-gradient-to-r from-agency-blue to-agency-purple hover:brightness-110 transition-all text-white">
                    Return to Home
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
