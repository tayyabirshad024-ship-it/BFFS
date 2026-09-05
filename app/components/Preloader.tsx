"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const key = "bffs-preloader-seen";
    if (sessionStorage.getItem(key)) return;
    setVisible(true);
    sessionStorage.setItem(key, "1");
    const timer = window.setTimeout(() => setVisible(false), 1150);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
          aria-hidden="true"
        >
          <div className="preloader-mark"><span>B</span><i /></div>
          <div className="preloader-wordmark">
            <strong>BRIGHT FUTURE</strong>
            <small>FOUNDATION OF AMERICA</small>
          </div>
          <div className="preloader-line"><motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.9, ease: "easeInOut" }} /></div>
          <small className="preloader-status">CREATING A BRIGHTER FUTURE</small>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
