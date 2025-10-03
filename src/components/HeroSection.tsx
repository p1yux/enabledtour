import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-[80vh] flex items-center gradient-section">
    {/* Smooth rounded rectangle background at top-right 1/4th */}
    
    <div className="flex max-w-7xl mx-auto px-6 gap-12 items-center w-full">
      <div className="space-y-8 w-full">
        <div className="absolute top-16 right-0 mr-4 h-[45%] w-[70%] md:top-20 md:right-[10%] md:h-[55%] md:w-[40%] lg:right-[18%] lg:h-[60%] lg:w-1/3 bg-[#ffca65] rounded-[64px] bg-opacity-25 z-0">
            <div className="absolute mr-4 md:mr-0 -top-6 -right-6 bg-primary text-white p-6 rounded-2xl shadow-xl z-10">
                <div className="text-3xl font-bold">30 +</div>
                <div className="text-sm">Cities Visiting</div>
            </div>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-4xl">🇨🇦</span>
          <Badge variant="secondary" className="text-primary font-medium bg-transparent border border-primary rounded-3xl">
            National Movement
          </Badge>
        </div>
        {/* Floating pill badge at top-right, above the yellow background */}
        {/* <div className="absolute top-8 right-10 z-10 px-4 py-2 shadow-lg flex items-center gap-2 font-semibold">
          <span className="text-lg">24+</span>
          <span className="text-xs opacity-90">Cities Visiting</span>
        </div> */}
        <div className="space-y-6">
          <h1 className="hidden md:block text-5xl lg:text-6xl font-bold leading-tight">
            Enable <span className="text-primary"> Canada</span> Tour
          </h1>
          <h1 className="block md:hidden text-5xl lg:text-6xl font-bold leading-tight">
            Enable <br /><span className="text-primary"> Canada</span> Tour
          </h1>
          
          <h2 className="text-2xl lg:text-3xl text-muted-foreground font-medium">
            A National Movement for Inclusive Innovation
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-full">
            From Ontario to the Atlantic and all the way to BC, the ENABLE Canada Tour is bringing communities together to spark change and open doors to inclusion.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-full">
            Guided by the vision of a barrier-free Canada by 2040, this initiative aligns with the Accessible Canada Act (ACA) and the federal Disability Inclusion Action Plan (DIAP)—bringing together community, innovation, and policy to accelerate lasting change.
          </p>
        </div>
        <div className="flex flex-row sm:flex-row gap-4">
          <a href="#events">
          <Button variant="default" size="lg" className="gap-2">
            <Calendar className="w-5 h-5" />
            View Event Schedule
          </Button>
          </a>
          <a href="#partner">
            <Button variant="outline" size="lg" className="gap-2">
              <Users className="w-5 h-5" />
              Become a Partner
            </Button>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
