
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHeader from "@/components/ContactHeader";
import ContactForm from "@/components/ContactForm";

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
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <div className="flex-grow pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactHeader />
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
