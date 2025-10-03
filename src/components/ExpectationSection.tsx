import React from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Users } from "lucide-react";

const expectations = [
  {
    icon: "💼",
    title: "Job Seeker Sessions",
    description:
      "Tailored workshops on resumes, interviews and career navigation — designed to support diverse learners and job seekers.",
  },
  {
    icon: "🤝",
    title: "Inclusive Hiring Dialogues",
    description:
      "Open conversations with employers about accessible hiring, workplace accommodations and inclusive design.",
  },
  {
    icon: "🗣️",
    title: "DEI Leadership Panels",
    description:
      "Featuring voices of lived experience, DEI experts and accessibility advocates from each region.",
  },
  {
    icon: "🔧",
    title: "Assistive Technology Showcase",
    description:
      "Explore cutting-edge innovations — from navigation tools to communication devices — created by and for the disability community.",
  },
  {
    icon: "📖",
    title: "Real Stories & Experiences",
    description:
      "Hear directly from individuals breaking barriers and shaping Canada’s inclusion movement.",
  },
  {
    icon: "🌐",
    title: "Community Building",
    description:
      "Connect with local organizations, social enterprises, and leaders building Canada’s most inclusive workforce.",
  },
];

const ExpectationSection = () => (
  <section className="py-24 gradient-section">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-6">What to Expect</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Every tour stop is a full-day experience rooted in accessibility, learning, and action.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {expectations.map((item, index) => (
          <div key={index} className={`card-fluid card-stagger rounded-3xl p-8 text-center group`}>
            <div className="relative z-10">
              <div className="text-6xl mb-6 group-hover:scale-125 transition-transform duration-500 filter group-hover:drop-shadow-lg">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <a href="#events">
          <Button variant="default" size="lg" className="gap-2 hover-scale">
            <ExternalLink className="w-5 h-5" />
            Register for Events
          </Button>
        </a>
      </div>
    </div>
  </section>
);

export default ExpectationSection;
