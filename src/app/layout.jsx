import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/custom/navigation/Navbar";
import SmoothScroll from "@/components/custom/navigation/SmoothScroll";
import ScrollReveal from "@/components/custom/navigation/ScrollReveal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Enabled Tour",
  description: "Enabled Canada Tour",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScroll />
        <ScrollReveal />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
