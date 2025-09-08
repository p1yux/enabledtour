"use client";

import { useMemo, useState } from "react";

export default function CitiesVisiting() {
  const stops = [
    { city: "Toronto", province: "Ontario", date: "October 15, 2024", query: "Toronto, Ontario" },
    { city: "Vancouver", province: "British Columbia", date: "November 8, 2024", query: "Vancouver, British Columbia" },
    { city: "Montreal", province: "Quebec", date: "November 22, 2024", query: "Montreal, Quebec" },
    { city: "Calgary", province: "Alberta", date: "December 6, 2024", query: "Calgary, Alberta" },
    { city: "Ottawa", province: "Ontario", date: "January 18, 2025", query: "Ottawa, Ontario" },
    { city: "Halifax", province: "Nova Scotia", date: "February 14, 2025", query: "Halifax, Nova Scotia" },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const mapSrc = useMemo(() => {
    const q = encodeURIComponent(stops[selectedIndex].query);
    return `https://www.google.com/maps?q=${q}&output=embed&hl=en`;
  }, [selectedIndex]);

  return (
    <section id="plans" data-reveal className="w-full bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center max-w-[900px] mx-auto">
          <h2 className="font-bold text-[#1d191a] text-3xl md:text-4xl leading-tight">Cities We’re Visiting</h2>
          <p className="mt-4 text-[#3d3638] text-sm md:text-base leading-6 md:leading-7">
            From major cities to small towns, we’re meeting communities across Canada to spark
            conversations and drive inclusive change.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Map */}
          <div className="rounded-xl overflow-hidden border border-[#E7E7EA] shadow-[0_6px_18px_rgba(0,0,0,0.05)] h-full">
            <iframe
              title={`${stops[selectedIndex].city} Map`}
              src={mapSrc}
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Details Panel */}
          <div className="flex flex-col gap-4">
            <div className="rounded-xl border border-[#E7E7EA] bg-white p-5 shadow-[0_6px_18px_rgba(0,0,0,0.05)]">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-[#1d191a]">{stops[selectedIndex].city}</h3>
                    <span className="text-xs text-[#9B9AA0]">{stops[selectedIndex].province}</span>
                  </div>
                  <p className="mt-2 text-sm text-[#616065]">
                    Our largest stop featuring Canada’s tech hub with groundbreaking AI accessibility
                    demonstrations.
                  </p>
                </div>
                <span className="px-2 py-1 rounded-full text-[11px] bg-[#E8F7EB] text-[#2BB673]">Completed</span>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2 text-[13px] text-[#3d3638]">
                <div className="flex items-center gap-2">
                  <span className="text-[#9B9AA0]">Date:</span>
                  <span>{stops[selectedIndex].date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#9B9AA0]">Expected Attendees:</span>
                  <span>450+</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#9B9AA0]">Venue:</span>
                  <span>Metro Toronto Convention Centre</span>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-xs font-medium text-[#616065]">Highlights</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {[
                    "AI & Accessibility Summit",
                    "50+ Employers",
                    "Innovation Showcase",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2 py-1 rounded-full bg-[#F5F7FF] text-[#1d191a] border border-[#E7E7EA]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <button className="mt-4 w-full h-8 rounded-md bg-[#E9A04E] text-white text-xs font-medium">
                Event Completed
              </button>
            </div>

            <div className="rounded-xl border border-[#E7E7EA] bg-white p-0 overflow-hidden shadow-[0_6px_18px_rgba(0,0,0,0.05)]">
              <div className="px-5 py-4 border-b border-[#E7E7EA] text-sm font-medium text-[#1d191a]">
                All Tour Stops
              </div>
              <ul className="max-h-[360px] overflow-auto">
                {stops.map((s, i) => (
                  <li
                    key={i}
                    onClick={() => setSelectedIndex(i)}
                    className={`px-5 py-3 text-sm flex items-center justify-between gap-3 border-b border-[#F2F2F4] last:border-0 cursor-pointer ${
                      selectedIndex === i ? 'bg-[#EEF2FF]' : 'bg-white'
                    }`}
                  >
                    <div>
                      <p className="text-[#1d191a]">{s.city}, {s.province}</p>
                      <p className="mt-0.5 text-[12px] text-[#8B8A90]">{s.date}</p>
                    </div>
                    {selectedIndex === i && (
                      <span className="w-4 h-4 rounded-full bg-[#6C83FF] inline-block" />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

