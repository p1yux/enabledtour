"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { addRegistration } from "@/components/custom/firebase/firebase";

export default function Register() {
  const [email, setEmail] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    if (!email) return;
    try {
      await addRegistration(email);
      setEmail("");
      alert("Thanks! We'll email you the registration link.");
    } catch (e) {
      alert("Failed to submit. Please try again.");
    }
  }

  return (
    <section id="register" data-reveal className="w-full bg-white py-16">
      <div className="max-w-[760px] mx-auto px-4 text-center">
        <h2 className="font-bold text-[#1d191a] text-2xl md:text-3xl">Register today!</h2>
        <p className="mt-2 text-[#616065] text-sm md:text-base">
          Send Us your email and we will send you a registration link
        </p>

        <form onSubmit={handleSubmit} className="mt-6 flex justify-center">
          <div className="flex w-full max-w-[560px] overflow-hidden rounded-2xl border border-[#E7E7EA] shadow-[0_6px_18px_rgba(0,0,0,0.05)]">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email address"
              aria-label="Email address"
              className="flex-1 h-12 px-4 text-black text-sm outline-none placeholder-[#9B9AA0] bg-white"
            />
            <Button
              type="submit"
              className="h-12 rounded-none rounded-r-2xl bg-[#cd7f32] hover:bg-[#cd7f32]/90 text-white px-5 text-sm"
            >
              Send your email
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}


