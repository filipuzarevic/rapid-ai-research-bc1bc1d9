
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Their 1-week sprint uncovered user insights that completely changed our AI assistant's conversation flow. Our engagement metrics improved by 43% after implementation.",
      name: "Sarah Chen",
      title: "CPO, ConvoAI",
      image: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      quote: "Trying to build an AI product without proper user research was our biggest mistake. This team helped us pivot quickly with clear insights into what our users actually needed.",
      name: "Michael Rodriguez",
      title: "CEO, Intellilearn",
      image: "https://randomuser.me/api/portraits/men/54.jpg"
    },
    {
      quote: "The speed and quality of their research gave us a competitive edge. We went from confused about user feedback to having a clear roadmap in just one week.",
      name: "Aisha Johnson",
      title: "Founder, PredictiveHR",
      image: "https://randomuser.me/api/portraits/women/65.jpg"
    }
  ];

  const resultMetrics = [
    { metric: "210+", description: "AI Products Improved" },
    { metric: "62%", description: "Average User Engagement Increase" },
    { metric: "41%", description: "Faster Product-Market Fit Achievement" },
    { metric: "87%", description: "Clients Report Accelerated Growth" }
  ];

  return (
    <section className="py-16 bg-agency-gray" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-agency-navy">
            Results That Speak for Themselves
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            See how our research directly influences AI product success
          </p>
        </div>

        {/* Results Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {resultMetrics.map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-4xl md:text-5xl font-bold text-agency-blue mb-2">
                {item.metric}
              </div>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-0 shadow-md overflow-hidden">
              <CardContent className="p-0">
                <div className="p-6">
                  <Quote className="h-8 w-8 text-agency-purple/30 mb-4" />
                  <p className="text-gray-700 mb-6">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full object-cover border-2 border-white shadow"
                    />
                    <div className="ml-3">
                      <h4 className="font-semibold text-agency-navy">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
