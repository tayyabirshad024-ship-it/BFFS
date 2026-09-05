"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const obj = { n: 0 };
    const tween = gsap.to(obj, { n: value, duration: 1.8, ease: "power3.out", paused: true, onUpdate: () => { if (ref.current) ref.current.textContent = `${Math.round(obj.n).toLocaleString()}${suffix}`; } });
    const trigger = ScrollTrigger.create({ trigger: ref.current, start: "top 82%", once: true, onEnter: () => tween.play() });
    return () => { trigger.kill(); tween.kill(); };
  }, [value, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}
