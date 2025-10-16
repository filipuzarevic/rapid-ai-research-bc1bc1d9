
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-agency-navy mb-16 max-w-3xl">
            Behind RapidResearch
          </h1>

          <div className="flex flex-col lg:flex-row-reverse gap-16 items-start">
            <div className="w-full lg:w-2/5">
              <div className="overflow-hidden">
                <img
                  src="/lovable-uploads/91835533-f515-45b0-8076-324011ff7615.png"
                  alt="RapidResearch Founder"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="w-full lg:w-3/5 space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-agency-navy mb-6">
                  A Research-Driven Approach Built on Experience
                </h2>

                <div className="space-y-6 text-lg text-agency-gray leading-relaxed">
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
        <div className="bg-agency-light py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-agency-navy mb-8">
              Why This Matters to You
            </h2>

            <div className="space-y-6 text-lg text-agency-gray leading-relaxed">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <h3 className="text-3xl md:text-4xl font-semibold text-agency-navy mb-8">
              Curious if we're a fit? Schedule a consultation and let's talk.
            </h3>

            <Link to="/contact">
              <Button className="bg-agency-navy hover:bg-agency-charcoal text-white font-medium px-8 py-6 h-auto text-base">
                Schedule Call
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
