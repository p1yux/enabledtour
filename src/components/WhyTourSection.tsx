import React from "react";
import { MapPin, Users, Lightbulb } from "lucide-react";

const features = [
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Meeting Communities Where They Are",
    description:
      "Every city has unique challenges and opportunities. We're coming to you to understand and address local needs.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Building Local Partnerships",
    description:
      "Connecting employers, job seekers, educators, and community leaders to create lasting change.",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Co-building Solutions",
    description:
      "Not just talking about inclusion—actively building Canada's most inclusive employment ecosystem together.",
  },
];

const WhyTourSection = () => (
  <section id="about" className="py-24 bg-background">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-primary text-3xl font-bold mb-4">Why We're Touring Canada</h2>
        <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          Across Canada 27% of the population, that is over 8 million people, live with a disability. Yet barriers persist:
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <div key={index} className={`card-fluid card-stagger rounded-3xl p-8 group`}>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyTourSection;
