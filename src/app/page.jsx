import HeroSection from "@/components/custom/landing/HeroSection";
import WhyTour from "@/components/custom/landing/WhyTour";
import WhatExpect from "@/components/custom/landing/WhatExpect";
import WhoFor from "@/components/custom/landing/WhoFor";
import CitiesVisiting from "@/components/custom/landing/CitiesVisiting";
import PartnershipOrg from "@/components/custom/landing/PartnershipOrg";
import Register from "@/components/custom/landing/Register";
import Footer from "@/components/custom/navigation/Footer";

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <WhyTour />
      <WhatExpect />
      <WhoFor />
      <CitiesVisiting />
      <PartnershipOrg />
      <Register />
      <Footer />
    </div>
  );
}