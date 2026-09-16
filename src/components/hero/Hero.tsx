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
    <section className="relative w-full min-h-[calc(100vh-4.5rem)] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-6 sm:pb-8" style={{ background: "linear-gradient(145deg, #D6E4F0 0%, #E4EEF6 30%, #F0EBE0 65%, #E8EFF6 100%)" }}>
      {/* Outer Floating Glassmorphic Container Card with fresh luminous gradient */}
      <div className="relative z-10 w-full max-w-7xl mx-auto rounded-[32px] sm:rounded-[40px] lg:rounded-[44px] border border-white/50 bg-gradient-to-br from-white/55 via-white/40 to-white/30 p-7 sm:p-12 lg:p-14 xl:p-16 shadow-[0_8px_32px_rgba(15,23,42,0.12),0_2px_8px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-2xl overflow-hidden">

        {/* Luminous Sunbeam & Atmospheric Radial Glows inside the card */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-10%] top-[-20%] w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.30)_0%,rgba(253,230,138,0.14)_40%,transparent_70%)] blur-3xl select-none"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[-15%] bottom-[-20%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(186,210,232,0.35)_0%,rgba(210,228,244,0.15)_50%,transparent_70%)] blur-3xl select-none"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,255,255,0.55)_0%,transparent_60%)] select-none"
        />

        {/* Inner Content Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">

          {/* Left Column: Editorial Headline, Subtitle, and CTAs */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-center max-w-4xl">

            {/* Crisp Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 mb-4 sm:mb-5 self-start"
            >

              <span className="text-[11px] sm:text-[12px] uppercase tracking-[0.22em] font-semibold text-[#8C6A28] select-none">
                NON-PROFIT FOUNDATION · PARENT OF MST BLOCKCHAIN
              </span>
            </motion.div>

            {/* Bold Montserrat Headline strictly formatted into 3 lines */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily:
                  "var(--font-montserrat), 'Montserrat', sans-serif",
              }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[54px] 2xl:text-[60px] font-bold leading-[1.12] tracking-[-0.03em] text-[#0D1117]"
            >
              <span className="inline-block whitespace-nowrap">
                Building a{" "}
                <RotatingWord
                  words={["accountable", "commonly held", "transparent"]}
                  interval={4000}
                />
              </span>
              <br />
              <span className="inline-block whitespace-nowrap">future for public</span>
              <br />
              <span className="inline-block whitespace-nowrap">infrastructure.</span>
            </motion.h1>

            {/* Subtitle Description */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "var(--font-serif), Newsreader, Georgia, serif",
              }}
              className="mt-5 sm:mt-6 max-w-2xl text-[14.5px] sm:text-[15.5px] lg:text-[16px] leading-[1.65] text-[#373E4A] font-normal"
            >
              Smart Angelos Foundation is the non-profit parent of a family of
              independent organizations, among them MST Blockchain. We hold the
              shared assets, fund the work through grants, and answer to the
              community that maintains it.
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
                className="animated-button-gold relative inline-flex items-center justify-center rounded-[6px] border border-[#B88728]/35 bg-white/90 px-5 sm:px-6 py-2 sm:py-2.5 text-[13px] sm:text-[13.5px] font-medium text-[#8E6317] shadow-sm overflow-hidden"
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span className="relative z-10">Read the whitepaper</span>
              </Link>

              {/* Secondary Button — Soft Tinted Glass Box */}
              <Link
                href="/briefing"
                className="inline-flex items-center justify-center rounded-[6px] border border-black/5 bg-[#E4ECF4]/80 px-5 sm:px-6 py-2 sm:py-2.5 text-[13px] sm:text-[13.5px] font-medium text-[#1A1F26] shadow-sm transition-all duration-200 hover:bg-[#D9E3ED] hover:shadow hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Book a briefing</span>
              </Link>

              {/* Inline Assurance List */}
              <span
                style={{
                  fontFamily: "var(--font-serif), Newsreader, Georgia, serif",
                }}
                className="text-[12px] sm:text-[13px] text-[#616875] font-normal sm:ml-1 tracking-wide"
              >
                Open membership · Published accounts · No shareholders
              </span>
            </motion.div>
          </div>

          {/* Right Column: Hero Graphic (Isolated Yellow Feather Wing with radiant depth) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 xl:col-span-4 relative flex items-center justify-center lg:justify-end select-none pointer-events-none"
          >
            {/* Ambient soft glow ring behind the graphic */}
            <div className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-gradient-to-tr from-amber-200/40 via-yellow-100/30 to-sky-100/30 blur-3xl" />

            {/* Dedicated crop container isolating solely the yellow feather wing with floating micro-motion */}
            <motion.div
              animate={{ y: [-4, 5, -4] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-[280px] sm:w-[360px] lg:w-[420px] aspect-[4/3.2] overflow-hidden flex items-center justify-center drop-shadow-[0_20px_40px_rgba(202,138,4,0.15)]"
            >
              <div className="relative w-[340%] h-[340%] -left-[30%] -top-[106%] flex-none">
                <Image
                  src="/logo.png"
                  alt="Smart Angelos Feather"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Hero;