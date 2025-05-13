
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import TrustedBy from "@/components/TrustedBy";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when navigating to this page
  useEffect(() => {
    setIsMenuOpen(false);
  }, []);

  // Share menu state with Navbar
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <Hero />
      <Features />
      <TrustedBy />
      <Services />
      <Process />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
