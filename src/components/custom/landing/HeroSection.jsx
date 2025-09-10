"use client";

import { Button } from "@/components/ui/button";
import HeroSectionParallax from "./HeroSectionParallax";


export default function HeroSection() {
    return (
        <section data-reveal className="w-full relative bg-white py-10 lg:py-12">
        <div data-hero-root className="flex flex-col items-center px-4 py-10 lg:py-16 max-w-[1440px] mx-auto relative">
          <HeroSectionParallax />
          <img
            data-parallax="0.35"
            className="hidden md:block absolute will-change-transform md:w-20 md:h-20 md:top-40 md:left-6 lg:w-[136px] lg:h-[132px] lg:top-[258px] lg:left-[132px]"
            alt="Image"
            src="images/hero/image-328.svg"
          />

          <img
            data-parallax="0.25"
            className="hidden md:block absolute will-change-transform md:w-20 md:h-20 md:top-24 md:right-8 lg:w-[121px] lg:h-[117px] lg:top-[200px] lg:right-[133px]"
            alt="Image"
            src="images/hero/image-329.svg"
          />

          <img
            data-parallax="0.5"
            className="hidden md:block absolute will-change-transform md:w-8 md:h-8 md:top-2 md:left-24 lg:w-12 lg:h-[46px] lg:top-[-20px] lg:left-[328px]"
            alt="Image"
            src="images/hero/image-330.svg"
          />

          <img
            data-parallax="0.6"
            className="hidden md:block absolute will-change-transform md:w-4 md:h-4 md:top-0 md:right-24 lg:w-6 lg:h-6 lg:top-[-40px] lg:right-[424px]"
            alt="Image"
            src="images/hero/image-331.svg"
          />

          <div className="text-center mb-8">
            <h1 className="[font-family:'Archivo',Helvetica] font-bold text-[#1d191a] text-2xl sm:text-3xl md:text-4xl tracking-[0] mb-2">
              The Enabled Canada Tour
            </h1>
            <h2 className="[font-family:'Archivo',Helvetica] font-bold text-[#1d191a] text-2xl sm:text-3xl md:text-4xl tracking-[0]">
              A National Movement for Inclusive Innovation.
            </h2>
          </div>

          <p className="[font-family:'Inter',Helvetica] font-normal text-[#3d3638] text-sm sm:text-base text-center tracking-[0] leading-[24px] sm:leading-[26px] max-w-[686px] mb-8">
            From Toronto to Thunder Bay. Mississauga to Markham. Guelph to{" "}
            <br />
            Sudbury. We&apos;re hitting the road to spark real conversations,
            build local partnerships, and <br />
            open doors to inclusive employment and accessibility across Canada.
          </p>

          {/* Join the Movement Button scroll to register with mt-10 offset */}
          <Button className="bg-[#cd7f32]  cursor-pointer hover:bg-[#cd7f32]/90 text-white rounded-[10px] border-0 h-auto px-5 py-3" onClick={() => {
            const registerSection = document.getElementById('register');
            if (registerSection) {
              const offset = 60;
              const top = registerSection.getBoundingClientRect().top + window.scrollY - offset;
              window.scrollTo({ top, behavior: 'smooth' });
            }
          }}>
            <span className="[font-family:'Inter',Helvetica] font-normal text-lg leading-7">
              Join the Movement
            </span>
          </Button>

          <div className="py-14 w-full mt-10 lg:w-6xl">
            <img src="images/hero/video.png" alt="Video" className="w-full h-auto" />
          </div>
        </div>
      </section>       
    );
  }