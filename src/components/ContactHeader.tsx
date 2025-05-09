
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ContactHeader = () => {
  return (
    <>
      <Link 
        to="/" 
        className="inline-flex items-center text-agency-blue hover:text-agency-navy mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to home
      </Link>
      
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-agency-navy mb-4">
          Get in Touch
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Ready to gain critical insights for your AI product? Fill out the form below and we'll get back to you within 24 hours.
        </p>
      </div>
    </>
  );
};

export default ContactHeader;
