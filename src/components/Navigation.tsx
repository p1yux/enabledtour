import React from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => (
  <nav className="bg-background border-b border-border sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-6 py-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src="/ET Logo-02.png" alt="Enabled Talent Logo" className="w-15 h-15 rounded-full" />
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About Tour</a>
          <a href="#cities" className="text-muted-foreground hover:text-foreground transition-colors">Cities</a>
          <a href="#events" className="text-muted-foreground hover:text-foreground transition-colors">Events</a>
          <a href="#partner" className="text-muted-foreground hover:text-foreground transition-colors">Get Involved</a>
        </div>
        <a href="#events">
        <Button variant="default" size="sm">
          Join the Tour
        </Button>
        </a>
      </div>
    </div>
  </nav>
);

export default Navigation;
