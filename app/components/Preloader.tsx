"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const key = "bffs-preloader-v3";
    if (sessionStorage.getItem(key)) return;
    sessionStorage.setItem(key, "1"); setVisible(true);
    const start = performance.now(); const duration = 1350; let raf = 0;
    const tick = () => { const p=Math.min(100,Math.round(((performance.now()-start)/duration)*100)); setProgress(p); if(p<100) raf=requestAnimationFrame(tick); else setTimeout(()=>setVisible(false),380); };
    raf=requestAnimationFrame(tick); const fallback=setTimeout(()=>setVisible(false),3000);
    return()=>{cancelAnimationFrame(raf);clearTimeout(fallback)};
  },[]);
  return <AnimatePresence>{visible&&<motion.div className="preloader" initial={{opacity:1}} exit={{opacity:0,scale:1.015}} transition={{duration:.45,ease:[.76,0,.24,1]}} aria-hidden="true">
    <div className="preloader-grid"/><div className="preloader-orbit preloader-orbit-one"/><div className="preloader-orbit preloader-orbit-two"/>
    <motion.div className="preloader-content" initial={{y:18,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:.7,ease:[.22,1,.36,1]}}>
      <div className="preloader-logo-wrap"><img src="/logo.png" alt=""/></div><p className="preloader-overline">BRIGHT FUTURE FOUNDATION OF AMERICA</p><h2>BRIGHT <em>FUTURE</em></h2>
    </motion.div>
    <div className="preloader-bottom"><span>ENCOURAGE · EDUCATE · EMPOWER</span><div className="preloader-progress-track"><motion.i animate={{scaleX:progress/100}} transition={{duration:.12,ease:"linear"}}/></div><b>{String(progress).padStart(2,"0")}</b></div>
  </motion.div>}</AnimatePresence>;
}
