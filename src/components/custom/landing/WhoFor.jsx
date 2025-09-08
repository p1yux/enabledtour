export default function WhoFor() {
  const cards = [
    {
      title: "Disabled Professionals",
      desc:
        "Tech workers, entrepreneurs, and innovators looking to advance their careers and build inclusive solutions.",
      color: "#F5A623",
      icon: (
        <>
          <circle cx="12" cy="8" r="3" />
          <path d="M6 20v-1a6 6 0 0 1 12 0v1" />
        </>
      ),
      gains: [
        "Career networking",
        "Skill development",
        "Mentorship opportunities",
        "Community building",
      ],
    },
    {
      title: "Employers & HR Leaders",
      desc:
        "Companies committed to building diverse, inclusive workplaces and tapping into underutilized talent.",
      color: "#F5A623",
      highlight: true,
      icon: (
        <>
          <rect x="4" y="6" width="16" height="12" rx="2" />
          <path d="M8 10h8M8 14h5" />
        </>
      ),
      gains: [
        "Recruitment strategies",
        "Accessibility training",
        "Best practices",
        "Policy guidance",
      ],
    },
    {
      title: "Students & Educators",
      desc:
        "Academic institutions and students preparing for careers in accessible technology and inclusive design.",
      color: "#F5A623",
      icon: (
        <>
          <path d="M12 3l9 5-9 5-9-5 9-5z" />
          <path d="M6 12v5c2 1.5 4 2 6 2s4-.5 6-2v-5" />
        </>
      ),
      gains: [
        "Educational resources",
        "Career pathways",
        "Research collaboration",
        "Scholarship opportunities",
      ],
    },
    {
      title: "Tech Innovators",
      desc:
        "Developers, designers, and product managers creating accessible technologies and inclusive experiences.",
      color: "#F5A623",
      icon: (
        <>
          <path d="M8 6l-6 6 6 6" />
          <path d="M16 6l6 6-6 6" />
        </>
      ),
      gains: [
        "Technical workshops",
        "Tool demonstrations",
        "Code reviews",
        "Innovation challenges",
      ],
    },
    {
      title: "Investors & Funders",
      desc:
        "VCs, angels, and grant makers interested in supporting accessibility-focused startups and initiatives.",
      color: "#F5A623",
      icon: (
        <>
          <path d="M3 20v-6l9-4 9 4v6" />
          <path d="M16 14v6M8 14v6" />
        </>
      ),
      gains: [
        "Investment opportunities",
        "Market insights",
        "Portfolio guidance",
        "Impact measurement",
      ],
    },
    {
      title: "Allies & Advocates",
      desc:
        "Anyone passionate about accessibility, inclusion, and supporting the disabled community.",
      color: "#F5A623",
      highlight: true,
      icon: (
        <>
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
        </>
      ),
      gains: [
        "Education & awareness",
        "Volunteer opportunities",
        "Advocacy training",
        "Community support",
      ],
    },
  ];

  return (
    <section data-reveal className="w-full bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center max-w-[900px] mx-auto">
          <h2 className="font-bold text-[#1d191a] text-3xl md:text-4xl leading-tight">Who This Is For</h2>
          <p className="mt-4 text-[#3d3638] text-sm md:text-base leading-6 md:leading-7">
            This tour is for everyone—students, job seekers, HR leaders, city officials, families, and
            service providers. Whether you're navigating the job market, making workplaces inclusive,
            or simply care about equity and access, you'll find a place here
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-[#EEEFF2] shadow-[0_6px_18px_rgba(0,0,0,0.05)] p-5">
              <div className="flex flex-col items-start gap-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: '#ff0000', color: '#ffffff' }}
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {card.icon}
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#1d191a] text-[16px] leading-6">{card.title}</h3>
                  <p className="mt-1 text-[#616065] text-sm leading-6">{card.desc}</p>
                </div>
              </div>

              <div className={`mt-4 rounded-lg p-4 ${card.highlight ? 'bg-[#F9E3BF]' : 'bg-[#F5F7FF]'} border border-[#ECECEC]`}>
                <p className="text-xs font-medium text-[#1d191a]">What You'll Gain:</p>
                <ul className="mt-2 space-y-1">
                  {card.gains.map((gain, gIdx) => (
                    <li key={gIdx} className="text-[13px] text-[#3d3638] leading-6">{gain}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


