"use client";

import { useEffect, useRef } from "react";

export default function NvpScrollVideo() {
  const sectionRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const media = mediaRef.current;
    if (!section || !media || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      const rect = section.getBoundingClientRect();
      const range = Math.max(1, section.offsetHeight - window.innerHeight);
      const p = Math.min(1, Math.max(0, -rect.top / range));
      const eased = 1 - Math.pow(1 - p, 3);
      const start = window.innerWidth < 700 ? .86 : .62;
      const scale = start + (1 - start) * eased;
      media.style.transform = `scale(${scale})`;
      media.style.borderRadius = `${Math.max(0, 30 - 30 * eased)}px`;
      raf = 0;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); if (raf) cancelAnimationFrame(raf); };
  }, []);

  return (
    <section ref={sectionRef} className="nvp-scroll-section section-dark">
      <div className="nvp-scroll-stage">
        <div ref={mediaRef} className="nvp-scroll-media">
          <video autoPlay muted loop playsInline preload="auto" poster="/video-poster.jpg">
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="nvp-scroll-overlay" />
          <div className="nvp-scroll-copy"><span>FOUNDATION IN ACTION</span><i /><b>KEEP SCROLLING</b></div>
        </div>
      </div>
      <div className="nvp-scroll-intro"><p className="eyebrow gold-text">02 — THE MESSAGE</p><h2>See the promise<br /><em>in motion.</em></h2></div>
    </section>
  );
}
