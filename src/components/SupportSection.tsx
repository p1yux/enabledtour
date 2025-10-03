import React from "react";

const supportWays = [
  {
    key: 'volunteer',
    title: 'Volunteer',
    description: 'Help us create amazing experiences in your city',
    // simple outline people icon
    icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 11c1.66 0 3-1.34 3-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zM8 11c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3z"></path>
            <path d="M2 19c0-2.76 3.58-5 8-5m4 0c4.42 0 8 2.24 8 5"></path>
        </svg>
    ),
  },
  {
    key: 'spread',
    title: 'Spread the Word',
    description: 'Share our mission with your network',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11l18-5v12l-18-5v8a2 2 0 0 0 2 2h2"></path>
      </svg>
    ),
  },
  {
    key: 'attend',
    title: 'Attend',
    description: 'Join us at a tour stop near you',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
    ),
  },
  {
    key: 'partnership',
    title: 'Corporate Partnership',
    description: 'Partner with us to make lasting impact',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20"></path>
      </svg>
    ),
  },
];

const SupportSection = () => (
    <section className="py-24 gradient-section">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Other Ways to Support</h2>
          <p className="text-xl text-muted-foreground">
            Every contribution makes a difference in building inclusive communities
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {supportWays.map((way) => (
            <div
              key={way.key}
              className="rounded-xl border border-[#E7E7EA] bg-white shadow-[0_6px_18px_rgba(0,0,0,0.05)] p-6 text-center"
            >
              <div className="mx-auto w-12 h-12 rounded-full flex items-center justify-center text-[#E2963F]">
                {/* keep svg from data with consistent stroke width and round caps/joins */}
                {React.cloneElement(way.icon as any, {
                  className: 'w-8 h-8',
                  strokeWidth: 1.8,
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                })}
              </div>
              <h4 className="mt-3 font-medium text-[#1d191a]">{way.title}</h4>
              <p className="mt-2 text-sm text-[#616065]">{way.description}</p>
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

export default SupportSection;
