import { Button } from "@/components/ui/button";

function TierCard({ accent, badge, title, price, features }) {
  return (
    <div className="relative rounded-2xl border border-[#E7E7EA] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.06)] overflow-visible">
      <div className="h-3" style={{ background: accent }} />
      {badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] tracking-wide bg-[#1d191a] text-white px-3 py-1 rounded-full shadow z-10">
          {badge}
        </span>
      )}
      <div className="p-6">
        <h3 className="text-center font-semibold text-[#1d191a]">{title}</h3>
        <p className="text-center text-[#E2963F] font-bold mt-2">{price}</p>
        <ul className="mt-4 space-y-3">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-[#3d3638]">
              <span className="mt-1 inline-block w-3 h-3 rounded-full border border-[#CCD2FF] bg-[#F5F7FF]" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <Button className="mt-6 w-full bg-[#E2963F] hover:bg-[#E2963F]/90 text-white rounded-md h-10">Learn More</Button>
      </div>
    </div>
  );
}

export default function PartnershipOrg() {
  return (
    <>
      <section data-reveal className="w-full bg-white py-20">
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="text-center max-w-[800px] mx-auto">
            <h2 className="font-bold text-[#1d191a] text-3xl md:text-4xl">Partnership Opportunities</h2>
            <p className="mt-3 text-[#616065] text-sm md:text-base">
              Choose the level that aligns with your organization's goals
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <TierCard
              accent="linear-gradient(90deg,#F3B08E,#E68064)"
              badge="MOST POPULAR"
              title="Presenting Partner"
              price="$25,000+"
              features={[
                "Logo on all tour materials",
                "Speaking opportunity at every stop",
                "Dedicated recruitment booth",
                "Custom workshop or presentation",
                "Year-round partnership recognition",
                "Access to talent pipeline",
              ]}
            />

            <TierCard
              accent="linear-gradient(90deg,#97A7C3,#6D7D97)"
              title="City Sponsor"
              price="$10,000+"
              features={[
                "Title sponsor for one city",
                "Speaking slot in sponsored city",
                "Recruitment table",
                "Logo on city-specific materials",
                "Social media recognition",
                "Networking event access",
              ]}
            />

            <TierCard
              accent="linear-gradient(90deg,#F2C972,#E7A43E)"
              title="Supporting Partner"
              price="$5,000+"
              features={[
                "Logo in tour program",
                "Booth at select events",
                "Job posting opportunities",
                "Newsletter mentions",
                "Community recognition",
                "Volunteer coordination",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Other Ways to Support */}
      <section data-reveal className="w-full bg-white pb-20">
        <div className="max-w-[1100px] mx-auto px-4">
          <div className="text-center max-w-[800px] mx-auto">
            <h3 className="font-bold text-[#1d191a] text-2xl md:text-3xl">Other Ways to Support</h3>
            <p className="mt-3 text-[#616065] text-sm md:text-base">
              Every contribution makes a difference in building inclusive communities
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Volunteer */}
            <div className="rounded-xl border border-[#E7E7EA] bg-white shadow-[0_6px_18px_rgba(0,0,0,0.05)] p-6 text-center">
              <div className="mx-auto w-12 h-12 rounded-full flex items-center justify-center text-[#E2963F]">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 11c1.66 0 3-1.34 3-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zM8 11c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3z" />
                  <path d="M2 19c0-2.76 3.58-5 8-5m4 0c4.42 0 8 2.24 8 5" />
                </svg>
              </div>
              <h4 className="mt-3 font-medium text-[#1d191a]">Volunteer</h4>
              <p className="mt-2 text-sm text-[#616065]">Help us create amazing experiences in your city</p>
              <div className="mt-4 text-[#E2963F] text-sm font-medium inline-flex items-center gap-2 justify-center">
                <span>Sign Up</span>
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M13 5l7 7-7 7M5 12h14"/></svg>
              </div>
            </div>

            {/* Spread the Word */}
            <div className="rounded-xl border border-[#E7E7EA] bg-white shadow-[0_6px_18px_rgba(0,0,0,0.05)] p-6 text-center">
              <div className="mx-auto w-12 h-12 rounded-full flex items-center justify-center text-[#E2963F]">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 11l18-5v12l-18-5v8a2 2 0 0 0 2 2h2" />
                </svg>
              </div>
              <h4 className="mt-3 font-medium text-[#1d191a]">Spread the Word</h4>
              <p className="mt-2 text-sm text-[#616065]">Share our mission with your network</p>
              <div className="mt-4 text-[#E2963F] text-sm font-medium inline-flex items-center gap-2 justify-center">
                <span>Share</span>
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M13 5l7 7-7 7M5 12h14"/></svg>
              </div>
            </div>

            {/* Attend */}
            <div className="rounded-xl border border-[#E7E7EA] bg-white shadow-[0_6px_18px_rgba(0,0,0,0.05)] p-6 text-center">
              <div className="mx-auto w-12 h-12 rounded-full flex items-center justify-center text-[#E2963F]">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <h4 className="mt-3 font-medium text-[#1d191a]">Attend</h4>
              <p className="mt-2 text-sm text-[#616065]">Join us at a tour stop near you</p>
              <div className="mt-4 text-[#E2963F] text-sm font-medium inline-flex items-center gap-2 justify-center">
                <span>Register</span>
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M13 5l7 7-7 7M5 12h14"/></svg>
              </div>
            </div>

            {/* Corporate Partnership */}
            <div className="rounded-xl border border-[#E7E7EA] bg-white shadow-[0_6px_18px_rgba(0,0,0,0.05)] p-6 text-center">
              <div className="mx-auto w-12 h-12 rounded-full flex items-center justify-center text-[#E2963F]">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20" />
                </svg>
              </div>
              <h4 className="mt-3 font-medium text-[#1d191a]">Corporate Partnership</h4>
              <p className="mt-2 text-sm text-[#616065]">Partner with us to make lasting impact</p>
              <div className="mt-4 text-[#E2963F] text-sm font-medium inline-flex items-center gap-2 justify-center">
                <span>Contact Us</span>
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M13 5l7 7-7 7M5 12h14"/></svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


