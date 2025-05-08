
import React from "react";
import { 
  Users, 
  LineChart, 
  Search, 
  Clipboard, 
  Eye, 
  BarChart3,
  MessagesSquare,
  ArrowUpRight
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: <Users className="h-6 w-6 text-agency-blue" />,
      title: "User Interviews",
      description: "In-depth conversations with your target users to uncover needs, pain points, and expectations for your AI product."
    },
    {
      icon: <Eye className="h-6 w-6 text-agency-blue" />,
      title: "Usability Testing",
      description: "Observe real users interacting with your AI solution to identify friction points and optimization opportunities."
    },
    {
      icon: <Clipboard className="h-6 w-6 text-agency-blue" />,
      title: "Survey Design",
      description: "Expertly crafted surveys that capture quantitative insights from larger user samples with statistical significance."
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-agency-blue" />,
      title: "Data Analysis",
      description: "Rigorous quantitative and qualitative analysis that translates research data into actionable product recommendations."
    },
    {
      icon: <LineChart className="h-6 w-6 text-agency-blue" />,
      title: "Competitive Analysis",
      description: "Understand how users perceive competing AI solutions and identify opportunities for differentiation."
    },
    {
      icon: <MessagesSquare className="h-6 w-6 text-agency-blue" />,
      title: "AI Interaction Research",
      description: "Specialized research on how users interact with and perceive AI-driven features and conversations."
    }
  ];

  return (
    <section className="py-16 bg-agency-gray" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-agency-navy">
            Our Research Services
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Mixed-method research tailored specifically for AI-powered products
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-gray-200 hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="p-2 bg-agency-blue/10 rounded-lg w-fit mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-agency-navy">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#cta" 
            className="inline-flex items-center text-agency-blue hover:text-agency-navy font-semibold transition-colors group"
          >
            View our complete methodology
            <ArrowUpRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
