"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Rotating headline word — cross-fades with smooth upward motion    */
/*  and subtle blur. Sizer trick prevents layout shifts.              */
/* ------------------------------------------------------------------ */
function RotatingWord({
  words = ["accountable", "commonly held", "transparent"],
  interval = 4000,
}: {
  words?: string[];
  interval?: number;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  const longest = words.reduce((a, b) => (b.length > a.length ? b : a), "");

  return (
    <span className="relative inline-grid align-baseline">
      {/* Invisible sizer — reserves width for the widest word */}
      <span className="invisible col-start-1 row-start-1" aria-hidden="true">
        {longest}
      </span>

      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: 14, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -14, filter: "blur(4px)" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative col-start-1 row-start-1 inline-block whitespace-nowrap text-[#9B6F22]"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function Hero() {
  return (
    <section
      className="relative w-full min-h-[calc(100vh-4.5rem)] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-6 sm:pb-8 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0.48), rgba(255, 255, 255, 0.48)), url('/asstes/bg-2.jpg')",
      }}
    >
      {/* Outer Floating Glassmorphic Container Card */}
      <div className="relative z-10 w-full max-w-7xl mx-auto rounded-[32px] sm:rounded-[40px] lg:rounded-[44px] border border-white/60 bg-white/30 backdrop-blur-2xl p-7 sm:p-12 lg:p-14 xl:p-16 shadow-[0_16px_40px_rgba(15,23,42,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] overflow-hidden">
        {/* Inner Content Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">

          {/* Left Column: Editorial Headline, Subtitle, and CTAs */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-center max-w-4xl">

            {/* Crisp Eyebrow Badge */}
            {/* Bold Headline in Jost */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily:
                  "var(--font-jost), 'Jost', sans-serif",
              }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[54px] 2xl:text-[60px] font-bold leading-[1.12] tracking-[-0.02em] text-[#0D1117]"
            >
              <span className="block text-[#0D1117]">
                Smart Angelos
              </span>
              <span className="block mt-1 sm:mt-2 text-[#0D1117]">
                <span className="inline whitespace-nowrap">The non-profit{" "}
                  <RotatingWord
                    words={["home", "steward", "foundation"]}
                    interval={3500}
                  /></span>
                <br />
                for public infrastructure.
              </span>
            </motion.h1>

            {/* Subtitle Description */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily:
                  "var(--font-sans), 'Plus Jakarta Sans', Inter, system-ui, -apple-system, sans-serif",
              }}
              className="mt-5 sm:mt-6 max-w-2xl text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.62] text-[#2C333E] font-normal tracking-[-0.01em]"
            >
              The non-profit parent foundation of the MST ecosystem. We hold the shared treasury and infrastructure in trust, fund builders through grants, and govern by open, elected membership.
            </motion.p>

            {/* Action Row: Rectangular Buttons + Assurance Badges */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-7 sm:mt-9 flex flex-wrap items-center gap-3.5 sm:gap-4 lg:gap-5"
            >
              {/* Primary Button — 4-Span Continuous Traveling Border Effect */}
              <Link
                href="/whitepaper"
                className="animated-button-gold relative inline-flex items-center justify-center h-[38px] sm:h-[42px] rounded-[6px] border border-[#B88728]/35 bg-white/90 px-5 sm:px-6 text-[13px] sm:text-[13.5px] font-medium text-[#8E6317] shadow-sm overflow-hidden"
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span className="relative z-10">Read the whitepaper</span>
              </Link>

              {/* Secondary Button — Button No 3 Diagonal Expand Hover Effect */}
              <Link
                href="/briefing"
                className="btn-hover-diagonal relative inline-flex items-center justify-center h-[38px] sm:h-[42px] rounded-[6px] border border-[#0D1117] px-5 sm:px-6 text-[13px] sm:text-[13.5px] font-medium shadow-sm transition-all duration-200 active:scale-[0.98]"
              >
                <span className="relative z-10">Book a briefing</span>
              </Link>

              {/* Inline Assurance List */}
              <span
                style={{
                  fontFamily:
                    "var(--font-sans), 'Plus Jakarta Sans', Inter, system-ui, -apple-system, sans-serif",
                }}
                className="text-[12px] sm:text-[12.5px] text-[#596273] font-medium sm:ml-1 tracking-normal"
              >
                Elected Council · Open Votes · No Shareholders · Open Grants · Milestone-Based · Publicly Disclosed
              </span>
            </motion.div>
          </div>

          {/* Right Column: Full Hero Logo Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 xl:col-span-4 relative flex items-center justify-center lg:justify-end select-none pointer-events-none"
          >
            {/* Full-size floating logo with no box background */}
            <motion.div
              animate={{ y: [-5, 6, -5] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-[300px] sm:w-[380px] lg:w-[420px] xl:w-[460px] aspect-square flex items-center justify-center drop-shadow-[0_16px_32px_rgba(202,138,4,0.18)]"
            >
              <Image
                src="/logo.png"
                alt="Smart Angelos Foundation"
                fill
                priority
                className="object-contain mix-blend-multiply"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Hero;