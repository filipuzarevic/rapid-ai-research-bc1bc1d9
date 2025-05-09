
import React from "react";
import { 
  Clock, 
  ArrowsUpFromLine, 
  Handshake
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Process = () => {
  const researchOptions = [
    {
      icon: <Clock className="h-8 w-8 text-white" />,
      color: "bg-agency-blue",
      title: "Rapid Discovery (1-week Sprint)",
      description: "Identify your product's critical questions and quickly validate ideas. Get clear, actionable insights in just one week, ensuring you can move forward fast."
    },
    {
      icon: <ArrowsUpFromLine className="h-8 w-8 text-white" />,
      color: "bg-agency-purple",
      title: "Flexible Research (Custom Duration)",
      description: "Research tailored to your schedule and evolving needs. Easily integrate ongoing user insights into your product development process."
    },
    {
      icon: <Handshake className="h-8 w-8 text-white" />,
      color: "bg-agency-navy",
      title: "Long-Term Strategic Partnership",
      description: "Dedicated research support as your product scales. Regular, deep-dive insights and guidance to continuously inform your key product decisions."
    }
  ];

  return (
    <section className="py-16 bg-white" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-agency-navy">
            Flexible Research Tailored to Your Pace
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Rapid 1-week discovery sprints or continuous collaboration—choose what your product needs.
          </p>
        </div>

        {/* Research Options - Desktop View */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
          {researchOptions.map((option, index) => (
            <Card key={index} className="border border-gray-200 rounded-xl overflow-hidden shadow-md">
              <CardHeader className={`${option.color} p-6 flex items-center justify-center`}>
                <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center">
                  {option.icon}
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-semibold text-agency-navy mb-3">
                  {option.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {option.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Research Options - Mobile View */}
        <div className="md:hidden space-y-8">
          {researchOptions.map((option, index) => (
            <div key={index} className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-200">
              <div className={`${option.color} p-4 flex items-center justify-center`}>
                <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
                  {option.icon}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-agency-navy mb-2">
                  {option.title}
                </h3>
                <p className="text-gray-600">
                  {option.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
