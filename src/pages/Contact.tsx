
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHeader from "@/components/ContactHeader";
import ContactForm from "@/components/ContactForm";
import AnimatedElement from "@/components/ui/animated-element";

const Contact = () => {
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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-agency-lightBlue/30">
      {/* Neural network pattern background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <div className="absolute left-0 top-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCI+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iMiIgZmlsbD0iIzhCNUNGNiIvPjxsaW5lIHgxPSIyMCIgeTE9IjMwIiB4Mj0iODAiIHkyPSI4MCIgc3Ryb2tlPSIjOEI1Q0Y2IiBzdHJva2Utd2lkdGg9IjAuNSIvPjxsaW5lIHgxPSI4MCIgeTE9IjMwIiB4Mj0iMjAiIHkyPSI4MCIgc3Ryb2tlPSIjOEI1Q0Y2IiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvcGF0dGVybj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+PC9zdmc+')]"></div>
      </div>

      <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <div className="flex-grow pt-24 pb-16 relative z-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Floating decorative elements */}
          <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-agency-purple/5 animate-float hidden md:block"></div>
          <div className="absolute top-40 -right-20 w-32 h-32 rounded-full bg-agency-teal/5 animate-float animation-delay-2000 hidden md:block"></div>

          <AnimatedElement animation="animate-fade-down" delay={100}>
            <ContactHeader />
          </AnimatedElement>

          <AnimatedElement animation="animate-zoom-in" delay={300}>
            <ContactForm />
          </AnimatedElement>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
