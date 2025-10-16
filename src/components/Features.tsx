
import React from "react";

const Features = () => {
  const features = [
    {
      title: "15+ Years of Experience",
      description: "Deep expertise in user research methodologies and AI product challenges."
    },
    {
      title: "One-Week Sprints",
      description: "High-velocity research that keeps pace with your development cycles."
    },
    {
      title: "AI-Focused Expertise",
      description: "Understanding adoption barriers, trust issues, and user expectations for intelligent systems."
    },
    {
      title: "Actionable Results",
      description: "Clear, strategic recommendations that directly influence product success."
    }
  ];

  return (
    <section className="py-24 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-agency-navy mb-6 leading-tight">
            Why Startups Choose Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 max-w-5xl">
          {features.map((feature, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-2xl font-semibold text-agency-navy">{feature.title}</h3>
              <p className="text-lg text-agency-gray leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
