
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedElement from "@/components/ui/animated-element";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Background gradient that extends under the navbar */}
      <div className="absolute inset-0 bg-gradient-to-br from-agency-purple/5 via-white to-agency-lightBlue/20 pointer-events-none z-0"></div>
      
      <Navbar />
      <div className="flex-grow">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-28 relative z-10">
          <header className="text-center mb-16">
            <AnimatedElement animation="animate-fade-up">
              <h1 className="text-3xl md:text-4xl font-bold text-agency-navy mb-4">
                <span className="bg-gradient-to-r from-agency-navy to-agency-purple bg-clip-text text-transparent">Behind RapidResearch</span>
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-agency-purple to-agency-blue rounded-full mx-auto"></div>
            </AnimatedElement>
          </header>
          
          <section className="mb-16">
            <AnimatedElement animation="animate-fade-up" delay={200}>
              <h2 className="text-2xl font-bold text-agency-navy mb-6">
                A Research-Driven Approach Built on Experience
              </h2>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  RapidResearch was founded with one mission: to help AI startups move faster and smarter by understanding their users deeply. Behind this service is a seasoned UX researcher with 15 years of experience in turning complex user behavior into clear business outcomes.
                </p>
                
                <p>
                  With a PhD in psychology and years spent leading product research in high-velocity tech environments, I've seen firsthand how critical fast, focused research is to a product's success — especially in the high-stakes, fast-moving world of AI.
                </p>
                
                <p>
                  I've run everything from rapid 5-day discovery sprints to multi-quarter strategic research programs. My work has directly contributed to measurable growth — including double-digit revenue lifts and accelerated product-market fit — by helping teams make better, evidence-based decisions.
                </p>
                
                <p className="font-medium text-agency-navy">
                  RapidResearch is built for founders who want to move fast without guessing.
                </p>
              </div>
            </AnimatedElement>
          </section>
          
          <section className="mb-16">
            <AnimatedElement animation="animate-fade-up" delay={300}>
              <h2 className="text-2xl font-bold text-agency-navy mb-6">
                Why This Matters to You
              </h2>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  Startups don't fail because of bad tech. They fail because they build the wrong thing. My role is to make sure that doesn't happen to you.
                </p>
                
                <p>
                  Whether you're refining your MVP, validating a new feature, or scaling a successful product, you get access to enterprise-level research strategy, without the overhead.
                </p>
                
                <p>
                  When you work with RapidResearch, you're not hiring a generalist agency. You're partnering with someone who's embedded research into the heart of product strategy at scale, and knows how to adapt that to the pace and pressure of startup life.
                </p>
              </div>
            </AnimatedElement>
          </section>
          
          <section className="text-center">
            <AnimatedElement animation="animate-fade-up" delay={400}>
              <div className="bg-gradient-to-r from-agency-blue/10 to-agency-purple/10 rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-agency-navy mb-4">
                  Curious if we're a fit? Schedule a consultation and let's talk.
                </h3>
                
                <Link to="/contact">
                  <Button className="bg-agency-blue hover:bg-agency-navy text-white mt-4 font-medium group">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </AnimatedElement>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
