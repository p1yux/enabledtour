import MarqueeBar from "@/components/MarqueeBar";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WhyTourSection from "@/components/WhyTourSection";
import WhyWeAreDoingItSection from "@/components/WhyWeAreDoingItSection";
import ExpectationSection from "@/components/ExpectationSection";
import AudienceSection from "@/components/AudienceSection";
import OntarioMap from "@/components/OntarioMap";
import EventsSection from "@/components/EventsSection";
import PartnershipSection from "@/components/PartnershipSection";
import SupportSection from "@/components/SupportSection";
import FooterSection from "@/components/FooterSection";

const CanadaTourPage = () => (
  <div className="min-h-screen">
    <MarqueeBar />
    <Navigation />
    <HeroSection />
    {/* <WhyTourSection /> */}
    <WhyWeAreDoingItSection />
    <OntarioMap />
    <ExpectationSection />
    <AudienceSection />
    <EventsSection />
    <PartnershipSection />
    <SupportSection />
    <FooterSection />
  </div>
);

export default CanadaTourPage;