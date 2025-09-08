"use client";

import { useEffect } from "react";

export default function HeroSectionParallax() {
  useEffect(() => {
    const root = document.querySelector('[data-hero-root]');
    if (!root) return;
    const layers = Array.from(root.querySelectorAll('[data-parallax]'));

    const handle = () => {
      const rect = root.getBoundingClientRect();
      const viewportH = window.innerHeight || 1;
      const progress = 1 - Math.min(Math.max((rect.top + rect.height) / (viewportH + rect.height), 0), 1);
      layers.forEach((el) => {
        const depth = parseFloat(el.getAttribute('data-parallax')) || 0.2;
        el.style.transform = `translate3d(0, ${-progress * depth * 40}px, 0)`;
      });
    };

    const onScroll = () => {
      requestAnimationFrame(handle);
    };
    handle();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return null;
}


