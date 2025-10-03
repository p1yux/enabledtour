import React from "react";

const audiences = [
  {
    icon: "👤",
    title: "Disabled Professionals", 
    description: "Tech workers, entrepreneurs, and innovators looking to advance their careers and build inclusive solutions.",
    benefits: [
      "Career networking",
      "Skill development", 
      "Mentorship opportunities",
      "Community building"
    ],
    highlighted: true
  },
  {
    icon: "💼",
    title: "Employers & HR Leaders",
    description: "Companies committed to building diverse, inclusive workplaces and tapping into underutilized talent.",
    benefits: [
      "Recruitment strategies",
      "Accessibility training",
      "Best practices",
      "Policy guidance"
    ]
  },
  {
    icon: "🎓", 
    title: "Students & Educators",
    description: "Academic institutions and students preparing for careers in accessible technology and inclusive design.",
    benefits: [
      "Educational resources",
      "Career pathways",
      "Research collaboration", 
      "Scholarship opportunities"
    ],
    highlighted: true
  },
  {
    icon: "💻",
    title: "Tech Innovators",
    description: "Developers, designers, and product managers creating accessible technologies and inclusive experiences.",
    benefits: [
      "Technical workshops",
      "Tool demonstrations",
      "Innovation showcases",
      "Collaboration opportunities"
    ]
  },
  {
    icon: "💰",
    title: "Investors & Funders", 
    description: "VCs, angels, and grant makers interested in supporting accessibility-focused startups and initiatives.",
    benefits: [
      "Investment opportunities",
      "Market insights",
      "Portfolio diversification",
      "Impact measurement"
    ],
    highlighted: true
  },
  {
    icon: "❤️",
    title: "Allies & Advocates",
    description: "Anyone passionate about accessibility, inclusion, and supporting the disabled community.",
    benefits: [
      "Education & awareness",
      "Volunteer opportunities", 
      "Advocacy training",
      "Community connection"
    ]
  }
];

const AudienceSection = () => (
  <section className="py-24 bg-background">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-6">Who This Is For</h2>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          This tour is for everyone—students, job seekers, HR leaders, city officials, families, and service providers. 
          Whether you're navigating the job market, making workplaces inclusive, or simply care about equity and access, you'll find a place here.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {audiences.map((audience, index) => (
          <div key={index} className={`card-fluid card-stagger rounded-3xl p-8 group ${audience.highlighted ? 'ring-2 ring-primary/20' : ''}`}>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-transparent border border-primary rounded-full flex items-center justify-center text-white text-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {audience.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                {audience.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6 group-hover:text-foreground/80 transition-colors duration-300">
                {audience.description}
              </p>
              <div className="bg-primary/10 rounded-xl p-4">
                <p className="text-sm font-medium text-foreground mb-3">What You'll Gain:</p>
                <ul className="space-y-2">
                  {audience.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AudienceSection;
