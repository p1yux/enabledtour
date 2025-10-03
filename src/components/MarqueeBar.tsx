import React from "react";
import eventData from "@/entities/Event.json";
import { format, parse } from "date-fns";

const getNextEvent = () => {
  const today = new Date();
  const events = Array.isArray(eventData) ? eventData : [];
  const upcoming = events.filter((e) => {
    const eventDate = new Date(e.date);
    const eventStatus = e.status?.toLowerCase();
    if (eventStatus === "upcoming") {
      return false;
    }
    return eventDate >= today;
  });
  upcoming.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  return upcoming[0];
};

const MarqueeBar = () => {
  const nextEvent = getNextEvent();

  const marqueeText = nextEvent
    ? `🎤 Next Event: ${nextEvent.title} · ${nextEvent.city} · ${format(
        parse(nextEvent.date, "yyyy-MM-dd", new Date()),
        "MMM d, yyyy"
      )}${nextEvent.time ? ` at ${nextEvent.time}` : ""}`
    : "No upcoming events.";

  return (
    <div className="bg-primary text-primary-foreground py-3 overflow-hidden relative">
      <div className="marquee-bar w-full overflow-hidden">
        <div className="marquee-track flex whitespace-nowrap">
          {nextEvent && nextEvent.registration_url ? (
            Array(6).fill(0).map((_, i) => (
              <a
                key={i}
                href={nextEvent.registration_url}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-12 hover:text-white transition-colors"
              >
                {marqueeText}
              </a>
            ))
          ) : (
            Array(6).fill(0).map((_, i) => (
              <span key={i} className="mx-12">{marqueeText}</span>
            ))
          )}
        </div>
      </div>
      <style>{`
        .marquee-bar {
          position: relative;
          width: 100%;
          overflow: hidden;
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 15s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default MarqueeBar;
