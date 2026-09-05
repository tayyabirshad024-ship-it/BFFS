"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [visible, setVisible] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("bffs-preloader-seen")) return;
    setVisible(true);
    const finish = () => setReady(true);
    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });
    const fallback = window.setTimeout(finish, 1200);
    return () => { window.removeEventListener("load", finish); window.clearTimeout(fallback); };
  }, []);

  useEffect(() => {
    if (!ready || !visible) return;
    const timer = window.setTimeout(() => {
      sessionStorage.setItem("bffs-preloader-seen", "1");
      setVisible(false);
    }, 500);
    return () => window.clearTimeout(timer);
  }, [ready, visible]);

  return <AnimatePresence>{visible && <motion.div className="preloader" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .55, ease: [0.76,0,.24,1] }}>
    <div className="preloader-mark"><img src="/logo.png" alt="" /><span /></div>
    <div className="preloader-wordmark"><strong>BRIGHT FUTURE</strong><small>FOUNDATION OF AMERICA</small></div>
    <div className="preloader-line"><motion.span initial={{ scaleX: 0 }} animate={{ scaleX: ready ? 1 : .72 }} transition={{ duration: .8, ease: "easeOut" }} /></div>
    <small className="preloader-status">{ready ? "WELCOME" : "LOADING THE STORY"}</small>
  </motion.div>}</AnimatePresence>;
}
