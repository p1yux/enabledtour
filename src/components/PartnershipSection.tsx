import React from "react";
import { Button } from "@/components/ui/button";

const partnerships = [
    {
      icon: "🏙️",
      title: "City Sponsor",
      price: "$3,000",
      description: "Best for employers looking to lead local inclusive hiring efforts",
      features: [
        "Title sponsor for one city",
        "Speaking opportunity at local stop", 
        "Recruitment table access",
        "Logo on all local materials",
        "Featured in press & social media",
        "VIP access to networking events",
        "Year-round recognition & job listing priority"
      ],
      popular: true
    },
    {
      icon: "🤝", 
      title: "Community Partner",
      price: "$1,000",
      description: "Ideal for employers ready to build brand presence",
      features: [
        "Booth at select events",
        "Logo in event program",
        "Job posting access for 3 roles", 
        "Newsletter & social media shout-out",
        "Community recognition"
      ]
    },
    {
      icon: "🌱",
      title: "Supporter", 
      price: "$500",
      description: "Perfect for first-time collaborators and inclusive employers",
      features: [
        "Logo on supporter board",
        "1 job posting slot",
        "Access to talent mailing list",
        "Listed on partner thank-you page"
      ]
    }
];

const PartnershipSection = () => (
  <section id="partner" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Partnership Opportunities</h2>
          <p className="text-xl text-muted-foreground">
            Choose the level that aligns with your organization's goals
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {partnerships.map((tier, index) => (
            <div key={index} className={`card-fluid card-stagger rounded-3xl p-8 group relative flex flex-col h-full overflow-visible ${tier.popular ? 'ring-2 ring-primary scale-105' : ''}`}>
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <span className="bg-foreground text-background px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {tier.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                    {tier.title}
                  </h3>
                  <div className="text-3xl font-bold text-primary mb-4">
                    {tier.price}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {tier.description}
                  </p>
                </div>
                
                <div className="flex-grow">
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto">
                  <a
                    href={`mailto:aman@enabledtalent.com?subject=Request to partner as a ${encodeURIComponent(tier.title)}&body=I want to know more about partnering as a ${encodeURIComponent(tier.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      size="lg"
                    >
                      Learn More
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
);

export default PartnershipSection;
