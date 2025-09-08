export default function WhatExpect() {
  const items = [
    {
      color: "#6C83FF",
      bg: "#6C83FF1A",
      title: "Job seeker info sessions &\nworkshops",
      desc:
        "Inspiring talks from accessibility leaders, tech innovators, and disability advocates sharing real-world success stories.",
      icon: "/images/what-expect/job.svg",
      ring: "ring-[#BFC9FF]",
    },
    {
      color: "#2BB673",
      bg: "#2BB6731A",
      title: "Inclusive hiring dialogues with\nemployers",
      desc:
        "Interactive sessions on accessible design, assistive technology, and inclusive development practices.",
      icon: "/images/what-expect/inclusive.svg",
      ring: "ring-[#BFEBD6]",
    },
    {
      color: "#9C78FF",
      bg: "#9C78FF1A",
      title: "Panel talks with local DEI leaders",
      desc:
        "Connect with employers, entrepreneurs, and innovators committed to building inclusive workplaces and products.",
      icon: "/images/what-expect/panel.svg",
      ring: "ring-[#D6CCFF]",
    },
    {
      color: "#FFC455",
      bg: "#FFC4551A",
      title: "Showcase of assistive tools &\ninclusive tech",
      desc:
        "Discover cutting-edge accessible technologies and solutions created by the disabled community.",
      icon: "/images/what-expect/showcase.svg",
      ring: "ring-[#FFE7B0]",
    },
    {
      color: "#FF7A7A",
      bg: "#FF7A7A1A",
      title: "Real stories from people with lived\nexperience",
      desc:
        "Thought-provoking conversations about the future of accessibility, policy, and inclusive innovation.",
      icon: "/images/what-expect/real.svg",
      ring: "ring-[#FFD1D1]",
    },
    {
      color: "#6C83FF",
      bg: "#6C83FF1A",
      title: "Community building, networking &\ncollaboration",
      desc:
        "Celebrating accessibility champions, inclusive employers, and breakthrough innovations in each city.",
      icon: "/images/what-expect/community.svg",
      ring: "ring-[#BFC9FF]",
    },
  ];

  return (
    <section data-reveal className="w-full bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center max-w-[900px] mx-auto">
          <h2 className="font-bold text-[#1d191a] text-3xl md:text-4xl leading-tight">What to Expect</h2>
          <p className="mt-4 text-[#3d3638] text-sm md:text-base leading-6 md:leading-7">
            Each tour stop is a full day of inspiration, learning, and connection. Here's what awaits you
            at every location.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-2xl border border-transparent ring-1 ${item.ring} bg-white p-6 shadow-[0_6px_18px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.07)] transition-shadow`}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: item.bg, color: item.color }}
              >
                <img src={item.icon} alt={item.title} className="w-24 h-24" />
              </div>

              <h3 className="mt-5 font-semibold text-[#1d191a] text-[18px] leading-6 whitespace-pre-line">
                {item.title}
              </h3>
              <p className="mt-3 text-[#3d3638] text-sm leading-6">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


