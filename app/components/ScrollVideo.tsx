"use client";

import { useEffect, useRef } from "react";

export default function ScrollVideo() {
  const sectionRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const media = mediaRef.current;
    const copy = copyRef.current;
    if (!section || !media || !copy) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let raf = 0;
    const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, n));
    const ease = (n: number) => 1 - Math.pow(1 - n, 3);

    const update = () => {
      const rect = section.getBoundingClientRect();
      const scrollDistance = Math.max(1, section.offsetHeight - window.innerHeight);
      const raw = clamp(-rect.top / scrollDistance, 0, 1);
      const progress = ease(raw);
      const mobile = window.innerWidth < 700;

      const startWidth = mobile ? 0.84 : 0.56;
      const scale = startWidth + (1 - startWidth) * progress;
      const radius = mobile ? 26 * (1 - progress) : 30 * (1 - progress);
      const y = (1 - progress) * (mobile ? 8 : 4);

      media.style.transform = `translate3d(0, ${y}vh, 0) scale(${scale})`;
      media.style.borderRadius = `${radius}px`;
      media.style.setProperty("--scroll-progress", String(raw));
      copy.style.opacity = String(1 - clamp(raw * 2.8, 0, 1));
      copy.style.transform = `translate3d(0, ${-raw * 7}px, 0)`;
      raf = 0;
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section ref={sectionRef} className="scroll-video-section section-dark" aria-label="Day of Beauty story">
      <div ref={copyRef} className="scroll-video-copy">
        <div>
          <p className="eyebrow gold-text">02 — REAL PEOPLE · REAL IMPACT</p>
          <h2>Come closer to<br /><em>the work.</em></h2>
        </div>
        <p>Keep scrolling. The story moves from a glimpse to an immersive moment — letting the work take over the screen instead of sitting inside another media card.</p>
      </div>

      <div className="scroll-video-stage">
        <div ref={mediaRef} className="scroll-video-media">
          <video autoPlay muted loop playsInline preload="auto" poster="/video-poster.jpg">
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="scroll-video-frame-line" />
          <div className="scroll-video-label">
            <span>DAY OF BEAUTY</span><i /><span>BRIGHT FUTURE FOUNDATION</span>
          </div>
          <div className="scroll-video-scroll-cue"><span /> KEEP GOING</div>
        </div>
      </div>
    </section>
  );
}
