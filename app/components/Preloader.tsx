"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const minTime = reduce ? 350 : 1050;
    const started = performance.now();
    let revealTimer: number | undefined;
    let removeTimer: number | undefined;

    const finish = () => {
      const wait = Math.max(0, minTime - (performance.now() - started));
      window.setTimeout(() => {
        setDone(true);
        removeTimer = window.setTimeout(() => setHidden(true), 850);
      }, wait);
    };

    if (document.readyState === "complete") finish();
    else {
      const onLoad = () => finish();
      window.addEventListener("load", onLoad, { once: true });
      revealTimer = window.setTimeout(finish, 2200);
      return () => {
        window.removeEventListener("load", onLoad);
        if (revealTimer) window.clearTimeout(revealTimer);
        if (removeTimer) window.clearTimeout(removeTimer);
      };
    }

    return () => {
      if (revealTimer) window.clearTimeout(revealTimer);
      if (removeTimer) window.clearTimeout(removeTimer);
    };
  }, []);

  if (hidden) return null;

  return (
    <div className={`preloader ${done ? "is-done" : ""}`} aria-hidden="true">
      <div className="preloader-orbit preloader-orbit-a" />
      <div className="preloader-orbit preloader-orbit-b" />
      <div className="preloader-center">
        <img src="/logo.png" alt="" />
        <div className="preloader-name">BRIGHT FUTURE</div>
        <div className="preloader-sub">FOUNDATION OF AMERICA</div>
      </div>
      <div className="preloader-progress"><span /></div>
      <div className="preloader-year">EST. 2006</div>
    </div>
  );
}
