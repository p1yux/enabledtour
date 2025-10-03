import React from "react";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";

const FooterSection = () => (
  <footer className="py-16 bg-foreground text-background">
    <div className="max-w-7xl mx-auto px-6">
      <div className="space-y-8">
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold">A Movement Rooted in Lived Experience</h2>
          <p className="text-lg max-w-4xl mx-auto leading-relaxed opacity-90">
            Founded by people with disabilities, Enabled Talent is more than a tech company—
            it's a community redefining what's possible when we design for everyone, by 
            everyone. Our tour carries the spirit of the Disability Inclusion Action Plan 
            (DIAP) and Barrier-Free Canada 2040, turning these visions into tangible 
            momentum on the ground.
          </p>
        </div>
        <div className="text-center space-y-6 border-t border-background/20 pt-8">
          <h3 className="text-2xl font-bold">Ready to join us?</h3>
          <p className="text-xl opacity-90">Let's build the future—Enabled, together.</p>
          <a href="#partner" className="inline-block">
            <Button variant="default" size="lg" className="gap-2">
              <Users className="w-5 h-5" />
              Join the Movement
            </Button>
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default FooterSection;
