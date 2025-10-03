import React from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar } from "lucide-react";

const EventsSection = () => (
  <section id="events" className="py-24 bg-[#f7f8f9]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-6">Upcoming Events</h2>
        <p className="text-xl text-muted-foreground">
          Join us at these upcoming tour stops across Canada
        </p>
      </div>
      {/* <div className="bg-secondary/30 rounded-2xl p-8 text-center">
        <div className="text-6xl mb-6">📅</div>
        <h3 className="text-2xl font-bold mb-4">Event Calendar Integration</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Connect your Lu.ma events here to display a dynamic list of upcoming tour stops, 
          workshops, and community meetups across Canada.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="default" className="gap-2">
            <ExternalLink className="w-5 h-5" />
            View Full Schedule
          </Button>
          <Button variant="outline" className="gap-2">
            <Calendar className="w-5 h-5" />
            Add to Calendar
          </Button>
        </div>
      </div> */}
      <div className="flex justify-center items-center py-8 bg-transparent">
        <iframe
          src="https://luma.com/embed/calendar/cal-IHaOFJmuYTyy8x5/events?lt=light"
          width="1200"
          height="600"
          frameBorder="0"
          style={{ border: 'none', backgroundColor: 'transparent' }}
          allowFullScreen
          aria-hidden="false"
          tabIndex={0}
        />
      </div>
    </div>
  </section>
);

export default EventsSection;
