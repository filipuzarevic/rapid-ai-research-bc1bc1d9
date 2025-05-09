
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedElement from "@/components/ui/animated-element";
import { Info } from "lucide-react";

const CookiesPolicy = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-28">
          <AnimatedElement animation="animate-fade-up">
            <h1 className="text-3xl md:text-4xl font-bold text-agency-navy mb-8">
              Cookies Policy
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 mb-8">
                This Cookies Policy explains how Simplifi uses cookies and similar technologies when you visit our website.
              </p>
              
              <h2 className="text-2xl font-bold text-agency-navy mt-8 mb-4">1. What Are Cookies?</h2>
              <p>
                Cookies are small text files stored on your device (computer, tablet, or mobile) when you visit a website. They help websites remember your preferences and improve your experience.
              </p>
              
              <h2 className="text-2xl font-bold text-agency-navy mt-8 mb-4">2. Types of Cookies We Use</h2>
              <div className="space-y-4">
                <div className="pl-5 border-l-4 border-agency-purple">
                  <h3 className="font-semibold text-xl">Essential Cookies</h3>
                  <p>These are necessary for the website to function and cannot be switched off. They are usually set in response to actions you take, such as filling out forms or setting privacy preferences.</p>
                </div>

                <div className="pl-5 border-l-4 border-agency-blue">
                  <h3 className="font-semibold text-xl">Performance Cookies</h3>
                  <p>These cookies collect information about how visitors use our website, such as which pages are visited most often. They help us improve the performance of our site.</p>
                </div>

                <div className="pl-5 border-l-4 border-agency-green">
                  <h3 className="font-semibold text-xl">Functional Cookies</h3>
                  <p>These cookies enable the website to provide enhanced functionality and personalization, such as remembering your preferences.</p>
                </div>

                <div className="pl-5 border-l-4 border-agency-gold">
                  <h3 className="font-semibold text-xl">Analytics Cookies</h3>
                  <p>We may use tools like Google Analytics to understand how users interact with our site. These cookies help us measure and improve the website's performance.</p>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-agency-navy mt-8 mb-4">3. Managing Cookies</h2>
              <p>
                You can control or delete cookies through your browser settings. Most browsers allow you to block or delete cookies, but please note that some features of our website may not function properly without them.
              </p>
              <p className="mt-4">To manage your cookies:</p>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>In Chrome: Go to Settings > Privacy and Security > Cookies and other site data</li>
                <li>In Firefox: Go to Preferences > Privacy & Security > Cookies and Site Data</li>
                <li>In Safari: Go to Preferences > Privacy > Manage Website Data</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-agency-navy mt-8 mb-4">4. Changes to This Policy</h2>
              <p>
                We may update this Cookies Policy from time to time. Any changes will be posted on this page, so please review it periodically.
              </p>
              
              <div className="bg-blue-50 p-5 rounded-lg mt-8 flex items-start">
                <Info className="text-agency-blue mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-xl mb-2">Contact</h3>
                  <p>
                    If you have any questions about our use of cookies, please contact us at:
                    <br />
                    📧 <a href="mailto:filip@rapid-research.org" className="text-agency-blue hover:underline">filip@rapid-research.org</a>
                  </p>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <p className="text-gray-500 mb-6">Last updated: {currentYear}</p>
                <Link to="/">
                  <Button className="bg-agency-blue hover:bg-agency-navy text-white">
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

export default CookiesPolicy;
