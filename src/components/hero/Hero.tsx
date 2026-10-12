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
  words = ["foundation", "home", "steward"],
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
    <span className="relative inline-grid align-baseline text-[#FFCC00]">
      {/* Invisible sizer — reserves width for the widest word */}
      <span className="invisible col-start-1 row-start-1 select-none" aria-hidden="true">
        {longest}
      </span>

      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: 12, filter: "blur(3px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -12, filter: "blur(3px)" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative col-start-1 row-start-1 inline-block text-[#FFCC00] whitespace-nowrap"
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
      id="about"
      className="relative w-full min-h-[calc(100vh-4.5rem)] min-h-[calc(100dvh-4.5rem)] flex items-center justify-center overflow-hidden px-3 xs:px-4 sm:px-6 lg:px-8 pt-24 sm:pt-24 lg:pt-28 pb-6 sm:pb-8 bg-cover bg-center bg-no-repeat scroll-mt-20"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0.48), rgba(255, 255, 255, 0.48)), url('/asstes/bg-2.jpg')",
      }}
    >
      {/* Outer Floating Glassmorphic Container Card */}
      <div className="relative z-10 w-full max-w-7xl mx-auto rounded-[24px] xs:rounded-[28px] sm:rounded-[40px] lg:rounded-[44px] border border-white/60 bg-white/30 backdrop-blur-2xl p-5 xs:p-6 sm:p-10 lg:p-14 xl:p-16 shadow-[0_16px_40px_rgba(15,23,42,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] overflow-hidden">
        {/* Inner Content Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">

          {/* Left Column: Editorial Headline, Subtitle, and CTAs */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-center max-w-4xl">

            {/* Bold Headline in Sora */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: 'var(--font-sora), "Sora", sans-serif',
                fontWeight: 800,
                letterSpacing: "-0.03em",
              }}
              className="text-[28px] xs:text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[54px] 2xl:text-[60px] font-extrabold leading-[1.15] sm:leading-[1.12] text-[#000066]"
            >
              <span className="block text-[#000066]">
                Smart Angelos
              </span>
              <span className="block mt-1 sm:mt-2 text-[#000066]">
                <span className="inline">The non-profit{" "}</span>
                <RotatingWord
                  words={["foundation", "home", "steward"]}
                  interval={3500}
                />
                <br className="hidden sm:inline" />{" "}
                <span className="block sm:inline">for public infrastructure.</span>
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
              className="mt-4 sm:mt-6 max-w-2xl text-[14.5px] xs:text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.62] text-[#2C333E] font-normal tracking-[-0.01em]"
            >
              The non-profit parent foundation of the MST ecosystem. We hold the shared treasury and infrastructure in trust, fund builders through grants, and govern by open, elected membership.
            </motion.p>

            {/* Action Row: Rectangular Buttons + Assurance Badges */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 sm:mt-9 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4 lg:gap-5"
            >
              {/* Button Group: Always on the same line side-by-side */}
              <div className="flex flex-row items-center gap-2.5 sm:gap-3.5 w-auto">
                {/* Primary Button — 4-Span Continuous Traveling Border Effect */}
                <Link
                  href="/whitepaper"
                  className="animated-button-gold relative inline-flex items-center justify-center h-[38px] sm:h-[42px] rounded-[6px] border border-[#FFCC00]/50 bg-white/95 px-3.5 sm:px-6 text-[12.5px] sm:text-[13.5px] font-semibold text-[#000066] shadow-sm overflow-hidden text-center transition-all duration-200 active:scale-[0.98] shrink-0"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span className="relative z-10 whitespace-nowrap">Read the whitepaper</span>
                </Link>

                {/* Secondary Button — Button No 3 Diagonal Expand Hover Effect */}
                <Link
                  href="/briefing"
                  className="btn-hover-diagonal relative inline-flex items-center justify-center h-[38px] sm:h-[42px] rounded-[6px] border border-[#000066] px-3.5 sm:px-6 text-[12.5px] sm:text-[13.5px] font-medium text-[#000066] shadow-sm transition-all duration-200 active:scale-[0.98] text-center shrink-0"
                >
                  <span className="relative z-10 whitespace-nowrap">Book a briefing</span>
                </Link>
              </div>

              {/* Inline Assurance List */}
              <p
                style={{
                  fontFamily:
                    "var(--font-sans), 'Plus Jakarta Sans', Inter, system-ui, -apple-system, sans-serif",
                }}
                className="text-[11.5px] sm:text-[12.5px] text-[#596273] font-medium sm:ml-1 tracking-normal leading-relaxed w-full lg:w-auto"
              >
                Elected Council · Open Votes · No Shareholders · Open Grants · Milestone-Based · Publicly Disclosed
              </p>
            </motion.div>
          </div>

          {/* Right Column: Full Hero Logo Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 xl:col-span-4 relative flex items-center justify-center lg:justify-end select-none pointer-events-none mt-2 lg:mt-0"
          >
            {/* Full-size floating logo with responsive dimensions */}
            <motion.div
              animate={{ y: [-5, 6, -5] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-[190px] xs:w-[230px] sm:w-[320px] lg:w-[400px] xl:w-[440px] max-w-full aspect-square flex items-center justify-center drop-shadow-[0_16px_32px_rgba(255,204,0,0.25)]"
            >
              {/* Illuminating background gradient so logo text is crisp and legible */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-[-12%] sm:inset-[-16%] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.82)_42%,rgba(255,204,0,0.2)_72%,transparent_100%)] blur-2xl -z-10"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-[2%] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.88)_0%,rgba(255,255,255,0.6)_60%,transparent_90%)] -z-10"
              />

              <Image
                src="/logo-transparent.png"
                alt="Smart Angelos Foundation"
                fill
                priority
                className="object-contain relative z-10"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Hero;