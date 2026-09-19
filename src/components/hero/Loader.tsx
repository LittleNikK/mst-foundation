"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  onDone?: () => void;
}

export function Loader({ onDone }: LoaderProps) {
  const [isExiting, setIsExiting] = useState(false);
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Start video playback safely
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }

    // Schedule curtain exit after crisp headline presentation (~1.4s)
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 1400);

    // Guaranteed failsafe timer to ensure loader never gets stuck
    const failsafe = setTimeout(() => {
      onDoneRef.current?.();
    }, 2600);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(failsafe);
    };
  }, []);

  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => {
        onDoneRef.current?.();
      }}
    >
      {!isExiting && (
        <motion.div
          key="hero-loader-curtain"
          initial={{ y: "0%" }}
          exit={{ y: "-105%" }}
          transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#87B4D4] via-[#BFD8E8] to-[#E9F1F6] text-slate-950 select-none will-change-transform"
        >
          {/* Background Video Layer with Sky Ambiance Fallback */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="h-full w-full object-cover scale-[1.03]"
            >
              <source src="/asstes/hero-bg.mp4" type="video/mp4" />
            </video>

            {/* Soft Ambient Light Overlays for clear text readability */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-white/20 pointer-events-none"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-b from-white/25 via-transparent to-white/30 pointer-events-none"
            />
          </div>

          {/* Hero Headline Content Inside Loader */}
          <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center text-center my-auto px-4 sm:px-6 lg:px-8">
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
                fontWeight: 800,
                textTransform: "uppercase",
              }}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-[94px] xl:text-[108px] font-normal uppercase tracking-[-0.015em] leading-[0.96] sm:leading-[0.93] text-slate-950 drop-shadow-[0_2px_14px_rgba(255,255,255,0.7)] max-w-6xl"
            >
              <span className="block">BUILDING AN</span>
              <span className="block mt-0.5 sm:mt-1 text-amber-600 drop-shadow-[0_2px_14px_rgba(255,255,255,0.7)]">
                ACCOUNTABLE
              </span>
              <span className="block mt-0.5 sm:mt-1">
                FUTURE FOR PUBLIC INFRASTRUCTURE.
              </span>
            </motion.h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loader;