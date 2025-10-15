
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* About Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-agency-navy mb-12 text-center">
            Behind RapidResearch
          </h1>
          
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
            <div className="w-full lg:w-2/5">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/lovable-uploads/91835533-f515-45b0-8076-324011ff7615.png" 
                  alt="RapidResearch Founder" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            <div className="w-full lg:w-3/5 space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-agency-blue mb-6">
                  A Research-Driven Approach Built on Experience
                </h2>
                
                <div className="space-y-4 text-gray-700">
                  <p>
                    RapidResearch was created to help AI startups move faster and smarter by understanding their users. Behind the scenes is a senior UX researcher with 15 years of experience turning complex behavior into business outcomes.
                  </p>
                  
                  <p>
                    With a PhD in psychology and a track record in fast-paced tech, I've led everything from 5-day sprints to strategic, multi-quarter studies. My work has contributed to measurable revenue growth and faster product-market fit—by helping teams make better decisions, faster.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Second Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-agency-blue mb-8 text-center">
              Why This Matters to You
            </h2>
            
            <div className="space-y-4 text-gray-700">
              <p>
                Startups rarely fail from lack of tech—they fail from building the wrong thing. My job is to make sure that doesn't happen to you.
              </p>
              
              <p>
                Whether you're validating an idea or scaling a proven product, RapidResearch gives you expert research strategy without the agency fluff.
              </p>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <h3 className="text-xl md:text-2xl font-semibold text-agency-navy mb-6">
              Curious if we're a fit? Schedule a consultation and let's talk.
            </h3>
            
            <Link to="/contact">
              <Button className="bg-agency-blue hover:bg-agency-navy text-white font-medium px-8 py-6 h-auto text-lg">
                Schedule a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
