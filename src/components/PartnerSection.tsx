import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const partnerOptions = [
  {
    title: "Become a Community Partner",
    description: "Join our network of organizations committed to inclusive employment",
    action: "Partner With Us",
  },
  {
    title: "Host a City Meetup or Panel",
    description: "Bring the Enabled Canada Tour to your community",
    action: "Host an Event",
  },
  {
    title: "Sponsor a Local Activation",
    description: "Support accessibility initiatives in your region",
    action: "Sponsor Tour",
  },
  {
    title: "Share Your Resources",
    description: "Contribute tools, networks, or expertise to the movement",
    action: "Get Involved",
  },
];

const PartnerSection = () => (
  <section className="py-24 gradient-section">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-6">Get Involved</h2>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
          We're inviting changemakers from every corner—employers, municipalities, 
          nonprofits, colleges, entrepreneurs, and inclusion advocates—to join us in 
          building a barrier-free Canada.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-10">
        {partnerOptions.map((option, index) => (
          <div key={index} className={`card-fluid card-stagger rounded-3xl p-8 cursor-pointer group`}>
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {option.title}
                </h3>
                <ChevronRight className="w-6 h-6 text-primary group-hover:translate-x-2 transition-transform duration-300" />
              </div>
              <p className="text-muted-foreground mb-8 flex-grow group-hover:text-foreground/80 transition-colors duration-300">
                {option.description}
              </p>
              <Button variant="outline" className="text-primary border-primary w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
                {option.action}
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12 space-y-4">
        <div className="flex flex-col items-center gap-4">
          <a href="https://www.enabledtalent.com" target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-bold text-xl shadow-lg hover:scale-105 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
            Learn more at www.enabledtalent.com
          </a>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-foreground font-bold text-lg shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8c0-2.21-1.79-4-4-4S8 5.79 8 8c0 2.21 1.79 4 4 4s4-1.79 4-4zm-4 6c-4.42 0-8 1.79-8 4v2h16v-2c0-2.21-3.58-4-8-4z" /></svg>
            <span className="text-primary font-extrabold">#EnabledCanadaTour</span>
            <span className="ml-2 text-foreground font-semibold">Follow the journey</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PartnerSection;
