"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PartnerMarquee } from "./PartnerMarquee";

/* ------------------------------------------------------------------ */
/*  Three Tracks Data                                                   */
/* ------------------------------------------------------------------ */
const tracks = [
  {
    tag: "FOR BUILDERS",
    title: "Grants and tooling",
    description:
      "Funding, documentation and maintainer support for the work the ecosystem depends on.",
    cta: "Apply for a grant",
    href: "/grants",
    accentColor: "#3B7DD8",
    accentBg: "rgba(59, 125, 216, 0.06)",
    accentBorder: "rgba(59, 125, 216, 0.18)",
    tagColor: "#2C64B5",
    cardBg: "linear-gradient(155deg, rgba(255,255,255,0.55) 0%, rgba(235,242,253,0.45) 100%)",
    number: "01",
  },
  {
    tag: "FOR INSTITUTIONS",
    title: "Assurance and reporting",
    description:
      "Audited accounts, a published charter and a governance record you can read end to end.",
    cta: "See the record",
    href: "/governance",
    accentColor: "#1A1D23",
    accentBg: "rgba(26, 29, 35, 0.04)",
    accentBorder: "rgba(26, 29, 35, 0.10)",
    tagColor: "#4A505C",
    cardBg: "linear-gradient(155deg, rgba(255,255,255,0.58) 0%, rgba(245,246,249,0.48) 100%)",
    number: "02",
  },
  {
    tag: "FOR THE COMMUNITY",
    title: "Membership and voting",
    description:
      "Join free, elect the council, and hold the Foundation to the mandate it publishes.",
    cta: "Become a member",
    href: "/membership",
    accentColor: "#B88728",
    accentBg: "rgba(184, 135, 40, 0.06)",
    accentBorder: "rgba(184, 135, 40, 0.20)",
    tagColor: "#8C6A28",
    cardBg: "linear-gradient(155deg, rgba(255,255,255,0.55) 0%, rgba(253,246,228,0.45) 100%)",
    number: "03",
  },
];

export function EcosystemTracks() {
  return (
    <section id="ecosystem" className="relative w-full py-10 sm:py-14 lg:py-16 overflow-hidden scroll-mt-24 bg-[#FAFAFC]">
      {/* Anchor for Validators */}
      <div id="validators" className="absolute -top-24 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 sm:mb-10"
        >
          <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.24em] font-semibold text-[#9E7D3B] mb-2 select-none">
            Three tracks
          </p>
          <h2
            style={{ fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif" }}
            className="text-xl sm:text-2xl lg:text-[26px] font-bold text-[#0D1117] tracking-tight"
          >
            How we serve the ecosystem
          </h2>
        </motion.div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 items-stretch">
          {tracks.map((track, i) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.55,
                delay: 0.08 + i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative flex flex-col justify-between rounded-2xl sm:rounded-[22px] border overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(18,20,23,0.12)]"
              style={{
                background: track.cardBg,
                borderColor: track.accentBorder,
                boxShadow: "0 4px 24px rgba(18,20,23,0.05), 0 1px 4px rgba(18,20,23,0.03), inset 0 1px 0 rgba(255,255,255,0.8)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
              }}
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[22px]"
                style={{ backgroundColor: track.accentColor, opacity: 0.85 }}
              />

              <div className="p-7 sm:p-8 lg:p-9 pt-8 sm:pt-9">
                {/* Number + Tag row */}
                <div className="flex items-center justify-between mb-5">
                  <p
                    className="text-[11px] sm:text-[11.5px] uppercase tracking-[0.2em] font-semibold select-none"
                    style={{ color: track.tagColor }}
                  >
                    {track.tag}
                  </p>
                  <span
                    className="text-[13px] font-bold tabular-nums select-none"
                    style={{ color: track.accentColor, opacity: 0.35 }}
                  >
                    {track.number}
                  </span>
                </div>

                {/* Heading */}
                <h3
                  style={{
                    fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif",
                  }}
                  className="text-xl sm:text-[22px] lg:text-[23px] font-bold leading-[1.22] text-[#0D1117] tracking-tight"
                >
                  {track.title}
                </h3>

                {/* Thin divider */}
                <div
                  className="mt-4 mb-4 h-px w-10 rounded-full"
                  style={{ backgroundColor: track.accentColor, opacity: 0.22 }}
                />

                {/* Description */}
                <p
                  style={{
                    fontFamily: "var(--font-serif), Newsreader, Georgia, serif",
                  }}
                  className="text-[14px] sm:text-[14.5px] leading-[1.68] text-[#404651] font-normal"
                >
                  {track.description}
                </p>
              </div>

              {/* CTA Footer */}
              <div
                className="mx-7 sm:mx-8 mb-7 sm:mb-8 mt-0 pt-4 border-t"
                style={{ borderColor: track.accentBorder }}
              >
                <Link
                  href={track.href}
                  className="inline-flex items-center gap-2 text-[13px] sm:text-[13.5px] font-semibold transition-all duration-200"
                  style={{ color: track.accentColor }}
                >
                  <span className="group-hover:underline underline-offset-2">
                    {track.cta}
                  </span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partner Marquee */}
        <div className="mt-10 sm:mt-12 lg:mt-14">
          <PartnerMarquee />
        </div>
      </div>
    </section>
  );
}

export default EcosystemTracks;