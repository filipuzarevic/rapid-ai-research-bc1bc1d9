
import React from "react";
import { 
  ClipboardList, 
  Users, 
  LineChart, 
  PenTool,
  ArrowRight
} from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: <ClipboardList className="h-8 w-8 text-white" />,
      color: "bg-agency-blue",
      day: "Day 1-2",
      title: "Discovery & Design",
      description: "We quickly identify research goals, design the study, and set up recruitment for your specific user segments."
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      color: "bg-agency-purple",
      day: "Day 3-4",
      title: "Conduct Research",
      description: "Rapidly execute interviews, testing, and surveys with your target users while your team observes in real-time."
    },
    {
      icon: <LineChart className="h-8 w-8 text-white" />,
      color: "bg-agency-navy",
      day: "Day 5",
      title: "Analysis & Insights",
      description: "Our expert team analyzes findings and prepares actionable recommendations focused on your most pressing questions."
    },
    {
      icon: <PenTool className="h-8 w-8 text-white" />,
      color: "bg-agency-blue",
      day: "Day 5",
      title: "Action Planning",
      description: "We present clear insights and collaborate on specific action items to immediately improve your AI product."
    }
  ];

  return (
    <section className="py-16 bg-white" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-agency-navy">
            1-Week Discovery Sprint
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Our high-velocity research process designed specifically for AI startups
          </p>
        </div>

        {/* Process Steps - Desktop View */}
        <div className="hidden md:block relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2"></div>
          <div className="grid grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className={`${step.color} h-16 w-16 rounded-full flex items-center justify-center mx-auto z-10 relative shadow-lg`}>
                  {step.icon}
                </div>
                <div className="mt-6 text-center">
                  <span className="inline-block px-3 py-1 rounded-full bg-agency-lightBlue text-agency-blue text-sm font-medium mb-2">
                    {step.day}
                  </span>
                  <h3 className="text-lg font-semibold text-agency-navy">{step.title}</h3>
                  <p className="mt-2 text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Steps - Mobile View */}
        <div className="md:hidden space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className={`${step.color} h-12 w-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg`}>
                {step.icon}
              </div>
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-agency-lightBlue text-agency-blue text-sm font-medium mb-2">
                  {step.day}
                </span>
                <h3 className="text-lg font-semibold text-agency-navy">{step.title}</h3>
                <p className="mt-1 text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-agency-lightBlue rounded-xl p-8 text-center">
          <h3 className="text-xl md:text-2xl font-bold text-agency-navy mb-4">
            Need insights even faster?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our modular approach allows us to deliver preliminary insights within 48 hours for urgent product decisions.
          </p>
          <a 
            href="#cta" 
            className="inline-flex items-center px-6 py-3 bg-agency-blue text-white font-medium rounded-lg hover:bg-agency-navy transition-colors"
          >
            Ask about our rapid insights package
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
