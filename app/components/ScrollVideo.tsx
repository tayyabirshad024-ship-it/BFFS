"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollVideo() {
  const sectionRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [watching, setWatching] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current, media = mediaRef.current, video = videoRef.current;
    if (!section || !media || !video) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let locked = false, completed = false;
    const unlock = () => { locked = false; setWatching(false); document.body.classList.remove("video-locked"); };
    const lock = () => { locked = true; setWatching(true); document.body.classList.add("video-locked"); };
    const finish = () => { completed = true; unlock(); window.scrollBy({ top: window.innerHeight * .72, behavior: "smooth" }); };
    const onTime = () => { if (video.duration) setProgress(video.currentTime / video.duration); };
    const onWheel = (e: WheelEvent) => {
      if (window.innerWidth < 800 || reduce || completed) return;
      const r = section.getBoundingClientRect();
      const nearTop = r.top > -12 && r.top < 20;
      if (nearTop && e.deltaY > 0 && !locked) { e.preventDefault(); lock(); video.currentTime = 0; video.loop = false; video.play().catch(unlock); }
      else if (locked && e.deltaY < 0) unlock();
      else if (locked && e.deltaY > 0) e.preventDefault();
    };
    video.addEventListener("timeupdate", onTime); video.addEventListener("ended", finish);
    window.addEventListener("wheel", onWheel, { passive: false });
    const ctx = gsap.context(() => {
      gsap.fromTo(media, { scale: .58, borderRadius: 34 }, { scale: 1, borderRadius: 0, ease: "none", scrollTrigger: { trigger: section, start: "top top", end: "+=85%", scrub: 1 } });
    }, section);
    return () => { unlock(); video.removeEventListener("timeupdate", onTime); video.removeEventListener("ended", finish); window.removeEventListener("wheel", onWheel); ctx.revert(); };
  }, []);

  return <section ref={sectionRef} className="scroll-video-section section-dark" aria-label="Day of Beauty story">
    <div className="scroll-video-copy"><p className="eyebrow gold-text">02 — REAL PEOPLE · REAL IMPACT</p><h2>Come closer to<br /><em>the work.</em></h2><p>Scroll into the story. On desktop, the film takes over the screen before the page moves on.</p></div>
    <div className="scroll-video-stage"><motion.div ref={mediaRef} className={`scroll-video-media ${watching ? "watching" : ""}`}>
      <video ref={videoRef} autoPlay muted playsInline preload="auto" poster="/video-poster.jpg"><source src="/hero-video.mp4" type="video/mp4" /></video>
      <div className="scroll-video-frame-line" /><div className="scroll-video-label"><span>DAY OF BEAUTY</span><i /><span>BRIGHT FUTURE FOUNDATION</span></div>
      {watching && <div className="video-watch-ui"><span>WATCHING THE STORY</span><div><i style={{ width: `${progress * 100}%` }} /></div><b>{Math.round(progress * 100)}%</b></div>}
      {!watching && <div className="scroll-video-scroll-cue"><span /> SCROLL TO WATCH</div>}
    </motion.div></div>
  </section>;
}
