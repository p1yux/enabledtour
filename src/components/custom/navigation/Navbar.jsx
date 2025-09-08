"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full py-2 sticky top-0 z-50 bg-white border-b border-[#F2F2F4]">
      <div className="relative max-w-[1100px] mx-auto px-4 h-14 flex items-center justify-between">
        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          className="md:hidden text-[#1d191a] p-2 -ml-2"
          onClick={() => setOpen((v) => !v)}
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>

        {/* Left links */}
        <div className="hidden md:flex items-center gap-6 text-sm text-[#1d191a]">
          <Link href="#register">Contact</Link>
          {/* <Link href="#">Get app</Link> */}
          <Link href="#plans">Plans</Link>
          <div className="flex items-center gap-1">
            <Link href="#community">Community</Link>
          </div>
        </div>

        {/* Center logo */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
          <img src="/images/nav/logo.svg" alt="Enabled Talent" className="h-7 w-auto" />
        </Link>

        {/* Right actions */}
        <div className="ml-auto flex items-center gap-3 text-sm">
          <Link href="https://enabledtalent.com" target="_blank" className="hidden sm:inline text-[#1d191a]">Log in</Link>
          <Link
            href="https://enabledtalent.com" target="_blank"
            className="bg-[#cd7f32] text-white rounded-md px-3 sm:px-4 py-1.5 inline-flex items-center gap-2"
          >
            <span>Sign up</span>
            <span>→</span>
          </Link>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden absolute top-14 left-0 right-0 bg-white border-t border-[#F2F2F4] shadow-sm">
            <ul className="p-4 space-y-3 text-sm text-[#1d191a]">
              <li><Link href="#register" onClick={() => setOpen(false)}>Contact</Link></li>
              <li><Link href="#" onClick={() => setOpen(false)}>Get app</Link></li>
              <li><Link href="#plans" onClick={() => setOpen(false)}>Plans</Link></li>
              <li><Link href="#community" onClick={() => setOpen(false)}>Community</Link></li>
              <li className="pt-2 border-t border-[#F2F2F4]"><Link href="#" onClick={() => setOpen(false)}>Log in</Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}


