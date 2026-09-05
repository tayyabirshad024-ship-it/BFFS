"use client";

import { useEffect, useState } from "react";

export default function Header({ current = "home" }: { current?: "home" | "nvp" }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`site-header ${scrolled ? "scrolled" : ""} ${open ? "open" : ""}`}>
        <a className="brand" href={current === "home" ? "#top" : "/"}>
          <img src="/logo.png" alt="Bright Future Foundation of America" />
          <span>
            <strong>Bright Future</strong>
            <small>FOUNDATION OF AMERICA</small>
          </span>
        </a>

        <nav className="desktop-nav">
          <a href={current === "home" ? "#mission" : "/#mission"}>Mission</a>
          <a href={current === "home" ? "#programs" : "/#programs"}>Programs</a>
          <a href={current === "home" ? "#impact" : "/#impact"}>Impact</a>
          <a href={current === "home" ? "#story" : "/#story"}>Founder Story</a>
          <a className={current === "nvp" ? "active" : ""} href="/nvp">The Pledge</a>
        </nav>

        <a className="header-donate" href="https://bbf2026.kinsta.cloud/get-involved/#donate" target="_blank" rel="noreferrer">
          Donate <span>↗</span>
        </a>

        <button
          className="menu-button"
          aria-label="Open navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <i /><i />
        </button>
      </header>

      <div className={`mobile-menu ${open ? "visible" : ""}`}>
        <div className="mobile-menu-inner">
          <p className="eyebrow">BRIGHT FUTURE FOUNDATION</p>
          <a href={current === "home" ? "#mission" : "/#mission"} onClick={() => setOpen(false)}>Mission</a>
          <a href={current === "home" ? "#programs" : "/#programs"} onClick={() => setOpen(false)}>Programs</a>
          <a href={current === "home" ? "#impact" : "/#impact"} onClick={() => setOpen(false)}>Impact</a>
          <a href={current === "home" ? "#story" : "/#story"} onClick={() => setOpen(false)}>Founder Story</a>
          <a href="/nvp" onClick={() => setOpen(false)}>The Pledge</a>
          <a className="button gold mobile-cta" href="https://bbf2026.kinsta.cloud/get-involved/#donate" target="_blank" rel="noreferrer">Donate ↗</a>
        </div>
      </div>
    </>
  );
}
