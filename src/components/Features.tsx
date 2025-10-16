
import React from "react";
import AnimatedElement from "@/components/ui/animated-element";
import { Zap, Target, Brain, TrendingUp } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "15+ Years of Experience",
      description: "Deep expertise in user research methodologies and AI product challenges.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "One-Week Sprints",
      description: "High-velocity research that keeps pace with your development cycles.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "AI-Focused Expertise",
      description: "Understanding adoption barriers, trust issues, and user expectations for intelligent systems.",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Actionable Results",
      description: "Clear, strategic recommendations that directly influence product success.",
      gradient: "from-cyan-500 to-blue-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement animation="animate-fade-up">
          <div className="max-w-3xl mb-20">
            <div className="inline-block px-4 py-2 bg-blue-50 text-blue-600 font-semibold text-sm rounded-full mb-6">
              Why Choose RapidResearch
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-agency-navy mb-6 leading-tight">
              Built for AI Startups Who <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Move Fast</span>
            </h2>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
          {features.map((feature, index) => (
            <AnimatedElement key={index} animation="animate-fade-up" delay={index * 100}>
              <div className="group relative p-8 bg-white rounded-2xl border border-gray-200 hover:border-blue-200 transition-all duration-300 hover:shadow-lg hover:shadow-blue-100/50 hover:-translate-y-1">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.gradient} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-agency-navy mb-3">{feature.title}</h3>
                <p className="text-lg text-agency-gray leading-relaxed">{feature.description}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
