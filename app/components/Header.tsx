"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Header({ current = "home" }: { current?: "home" | "nvp" }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const href = (id: string) => current === "home" ? id : `/${id}`;
  return <>
    <motion.header className={`site-header ${scrolled ? "scrolled" : ""}`} initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .8, delay: .9, ease: [0.22,1,.36,1] }}>
      <a className="brand" href={current === "home" ? "#top" : "/"}>
        <span className="brand-symbol">B</span><span><strong>Bright Future</strong><small>FOUNDATION OF AMERICA</small></span>
      </a>
      <nav className="desktop-nav">
        {[["Mission", "#mission"],["Programs", "#programs"],["Impact", "#impact"],["Our Story", "#story"]].map(([label,id]) => <a key={id} href={href(id)}>{label}</a>)}
        <a className={current === "nvp" ? "active" : ""} href="/nvp">The Pledge</a>
      </nav>
      <a className="header-donate" href="https://bbf2026.kinsta.cloud/get-involved/#donate" target="_blank" rel="noreferrer"><span>Donate</span><b>↗</b></a>
      <button className={`menu-button ${open ? "active" : ""}`} aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(v => !v)}><i /><i /></button>
    </motion.header>
    <AnimatePresence>{open && <motion.div className="mobile-menu" initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}><div className="mobile-menu-inner">
      <small>BRIGHT FUTURE FOUNDATION</small>
      {[['Mission','#mission'],['Programs','#programs'],['Impact','#impact'],['Our Story','#story'],['The Pledge','/nvp']].map(([label,id]) => <motion.a key={id} href={current === 'home' || id === '/nvp' ? id : `/${id}`} onClick={() => setOpen(false)} whileHover={{ x: 8 }}>{label}<span>↗</span></motion.a>)}
      <a className="mobile-donate" href="https://bbf2026.kinsta.cloud/get-involved/#donate" target="_blank" rel="noreferrer">Donate ↗</a>
    </div></motion.div>}</AnimatePresence>
  </>;
}
