"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Coins, ShieldCheck, Users } from "lucide-react";
import { PartnerMarquee } from "./PartnerMarquee";

/* ------------------------------------------------------------------ */
/*  Three Tracks Data — Fresh & High-Visibility Design                */
/* ------------------------------------------------------------------ */
const tracks = [
  {
    tag: "FOR BUILDERS",
    title: "Grants & Funding",
    description:
      "Funding protocol, security, and research work across the ecosystem Protocol & Core Dev  ·  Security & Audits  ·  Research",
    cta: "Apply for a grant",
    href: "/grants",
    accentColor: "#2563EB",
    badgeBg: "#EFF6FF",
    badgeBorder: "#DBEAFE",
    badgeText: "#1D4ED8",
    topAccent: "#3B82F6",
    glowColor: "rgba(37, 99, 235, 0.08)",
    number: "01",
    icon: Coins,
  },
  {
    tag: "FOR INSTITUTIONS",
    title: "Governance & Assurance",
    description:
      "A governance structure with no shareholders and no controlling party Elected Annually · Minutes Published · Accountable to Members",
    cta: "See the record",
    href: "/governance",
    accentColor: "#0F172A",
    badgeBg: "#F1F5F9",
    badgeBorder: "#E2E8F0",
    badgeText: "#334155",
    topAccent: "#334155",
    glowColor: "rgba(15, 23, 42, 0.06)",
    number: "02",
    icon: ShieldCheck,
  },
  {
    tag: "FOR THE COMMUNITY",
    title: "Voice & Vote",
    description:
      "Accountability starts with the people who elect the council Free Membership · Direct Vote · Public Turnout Record",
    cta: "Become a member",
    href: "/membership",
    accentColor: "#B88728",
    badgeBg: "#FEF9EE",
    badgeBorder: "#FDE68A",
    badgeText: "#9A6B1A",
    topAccent: "#D99400",
    glowColor: "rgba(217, 148, 0, 0.09)",
    number: "03",
    icon: Users,
  },
];

export function EcosystemTracks() {
  return (
    <section id="ecosystem" className="relative w-full py-10 sm:py-14 lg:py-16 overflow-hidden scroll-mt-24 bg-[#F0F5F9]">
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
          <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.24em] font-semibold text-[#9E7D3B] mb-2 select-none font-[var(--font-outfit)]">
            Three tracks
          </p>
          <h2
            style={{
              fontFamily:
                "var(--font-playfair), 'Playfair Display', Georgia, serif",
            }}
            className="text-2xl sm:text-3xl lg:text-[32px] font-normal text-[#0D1117] tracking-[-0.015em] leading-[1.18]"
          >
            How we serve the ecosystem
          </h2>
        </motion.div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {tracks.map((track, i) => {
            const Icon = track.icon;
            return (
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
                className="h-full"
              >
                <Link
                  href={track.href}
                  className="group relative flex flex-col justify-between h-full rounded-[22px] border border-slate-200/90 bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-300/90 hover:shadow-[0_20px_38px_-8px_rgba(15,23,42,0.12),0_4px_12px_-2px_rgba(15,23,42,0.04)] cursor-pointer"
                  style={{
                    background: `radial-gradient(circle at 88% 12%, ${track.glowColor} 0%, transparent 60%), #FFFFFF`,
                    boxShadow:
                      "0 8px 24px -4px rgba(15,23,42,0.06), 0 2px 6px -1px rgba(15,23,42,0.04), inset 0 1px 0 rgba(255,255,255,0.9)",
                  }}
                >
                  {/* Top colored accent stripe */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[3.5px] rounded-t-[22px] transition-all duration-300 group-hover:h-[4px]"
                    style={{ backgroundColor: track.topAccent }}
                  />

                  <div className="p-6 sm:p-7 lg:p-8 flex flex-col h-full justify-between">
                    {/* Top Row: Icon badge + Tag + Number */}
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-5">
                        {/* Icon Badge */}
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                          style={{
                            background: track.badgeBg,
                            border: `1px solid ${track.badgeBorder}`,
                            color: track.badgeText,
                          }}
                        >
                          <Icon className="w-5 h-5" strokeWidth={2.1} />
                        </div>

                        {/* Number & Tag */}
                        <div className="flex items-center gap-2">
                          <span
                            className="text-[10.5px] sm:text-[11px] uppercase tracking-[0.16em] font-bold px-2.5 py-1 rounded-full select-none"
                            style={{
                              background: track.badgeBg,
                              border: `1px solid ${track.badgeBorder}`,
                              color: track.badgeText,
                            }}
                          >
                            {track.tag}
                          </span>
                          <span
                            className="text-[11.5px] font-bold tabular-nums px-2 py-0.5 rounded-md bg-slate-100 text-slate-500 select-none"
                          >
                            {track.number}
                          </span>
                        </div>
                      </div>

                      {/* Card Title */}
                      <h3
                        style={{
                          fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
                        }}
                        className="text-xl sm:text-[22px] lg:text-[23px] font-bold leading-[1.25] text-[#0F172A] tracking-[-0.015em] mb-2.5 transition-colors duration-200 group-hover:text-[#090D14]"
                      >
                        {track.title}
                      </h3>

                      {/* Card Description */}
                      <p
                        style={{
                          fontFamily: "var(--font-sans), 'Plus Jakarta Sans', Inter, sans-serif",
                        }}
                        className="text-[13.5px] sm:text-[14px] leading-[1.65] text-[#475569] font-normal"
                      >
                        {track.description}
                      </p>
                    </div>

                    {/* CTA Action Row */}
                    <div className="mt-7 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span
                        className="text-[13px] sm:text-[13.5px] font-semibold transition-colors duration-200"
                        style={{ color: track.accentColor }}
                      >
                        {track.cta}
                      </span>
                      <span
                        className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:translate-x-1"
                        style={{
                          background: track.badgeBg,
                          border: `1px solid ${track.badgeBorder}`,
                          color: track.badgeText,
                        }}
                      >
                        <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.4} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
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