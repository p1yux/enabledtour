import React from "react";
import { MapPin, Users, Lightbulb } from "lucide-react";

const stats = [
    {
      number: "27%",
      label: "of Canadians live with a disability",
      description: "Over 8 million people across the country"
    },
    {
      number: "852K",
      label: "people with disabilities seeking work",
      description: "Actively looking but remain unemployed"
    },
    {
      number: "1.9M",
      label: "youth & adults with disabilities",
      description: "Currently out of school or college"
    },
    {
      number: "20%",
      label: "lower employment rates",
      description: "Compared to those without disabilities"
    }
];

const solutions = [
    "Bridge the gap between untapped talent and inclusive employers",
    "Co-design community-first, accessibility-driven solutions", 
    "Align grassroots action with national policy goals under ACA and DIAP",
    "Build a united ecosystem of innovators, educators, and changemakers—city by city"
];

const WhyWeAreDoingItSection = () => (
  <section id="about" className="pt-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Why We're Doing It</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Across Canada, millions of talented people with disabilities still face significant barriers. 
            The statistics tell a story of untapped potential and urgent need for change.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="card-fluid card-stagger rounded-3xl p-8 text-center group">
              <div className="relative z-10">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {stat.label}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-12 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Enabled Talent is on a mission to change that—not just through conversation, but through collaboration.
            </h3>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h4 className="text-xl font-semibold mb-6 text-center">The ENABLE Canada Tour is designed to:</h4>
            <div className="grid md:grid-cols-2 gap-6">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground leading-relaxed">{solution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
);

export default WhyWeAreDoingItSection;
