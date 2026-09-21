"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Org Cards Data — Aurora Gradient-Border Design                     */
/* ------------------------------------------------------------------ */
const orgs = [
  {
    badge: "Live",
    badgeDot: "#16A34A",
    title: "MST Blockchain",
    description:
      "Open ledger infrastructure and the products built on it. Operated by its own contributor team; stewarded by the Foundation.",
    cta: "mstblockchain.com",
    href: "https://mstblockchain.com",
    external: true,
    // Gradient border: warm gold → amber → orange
    borderGradient: "linear-gradient(135deg, #F59E0B 0%, #D97706 40%, #EA580C 100%)",
    ctaColor: "#B45309",
    shimmerColor: "rgba(245,158,11,0.06)",
  },
  {
    badge: "In formation",
    badgeDot: "#6366F1",
    title: "Second organization",
    description:
      "Placeholder slot. Send me the name and one-line remit and I will set it.",
    cta: null,
    href: null,
    external: false,
    // Gradient border: indigo → violet → blue
    borderGradient: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #3B82F6 100%)",
    ctaColor: "#4F46E5",
    shimmerColor: "rgba(99,102,241,0.05)",
  },
  {
    badge: "In formation",
    badgeDot: "#0D9488",
    title: "Third organization",
    description:
      "Placeholder slot. Send me the name and one-line remit and I will set it.",
    cta: null,
    href: null,
    external: false,
    // Gradient border: teal → emerald → cyan
    borderGradient: "linear-gradient(135deg, #0D9488 0%, #059669 50%, #06B6D4 100%)",
    ctaColor: "#0F766E",
    shimmerColor: "rgba(13,148,136,0.05)",
  },
];

const stats = [
  { value: "01", label: "Organizations live" },
  { value: "—", label: "Grants deployed" },
  { value: "—", label: "Projects supported" },
  { value: "—", label: "Members enrolled" },
];

/* ------------------------------------------------------------------ */
/*  Component                                                           */
/* ------------------------------------------------------------------ */
export function EcosystemOrgs() {
  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 overflow-hidden bg-[#FAFAFC]">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-10 sm:mb-14">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-[11px] sm:text-[12px] uppercase tracking-[0.22em] font-semibold text-[#9E7D3B] select-none mb-3 font-[var(--font-outfit)]"
            >
              THE ECOSYSTEM
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily:
                  "var(--font-playfair), 'Playfair Display', Georgia, serif",
              }}
              className="text-3xl sm:text-4xl md:text-[40px] lg:text-[44px] xl:text-[48px] font-normal leading-[1.12] tracking-[-0.015em] text-[#0D1117]"
            >
              One non-profit parent,
              <br />
              <span className="sm:whitespace-nowrap">many independent teams</span>
            </motion.h2>
          </div>

          <div className="lg:col-span-5 flex items-center lg:pt-10">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
              className="text-[14.5px] sm:text-[15.5px] lg:text-[16px] leading-[1.7] text-[#373E4A] font-normal"
            >
              Each organization runs its own roadmap and its own contributors. The
              Foundation holds what they share and keeps the lights on between funding
              cycles.
            </motion.p>
          </div>
        </div>

        {/* ── Aurora Gradient-Border Org Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 items-stretch mb-5 sm:mb-6">
          {orgs.map((org, i) => (
            <motion.div
              key={org.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.55,
                delay: 0.08 + i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative"
            >
              {/* Gradient border wrapper — p-[1.5px] + gradient bg creates the aurora border */}
              <div
                className="relative h-full rounded-[22px] p-[1.5px] transition-all duration-300 group-hover:p-[2px]"
                style={{ background: org.borderGradient }}
              >
                {/* Soft outer glow on hover (blur layer behind border) */}
                <div
                  className="absolute inset-0 rounded-[22px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"
                  style={{ background: org.borderGradient }}
                />

                {/* Card inner surface */}
                <div
                  className="relative h-full flex flex-col justify-between rounded-[20px] bg-white overflow-hidden transition-all duration-300 group-hover:-translate-y-1"
                  style={{
                    boxShadow: "0 6px 30px rgba(18,20,23,0.06), 0 1px 4px rgba(18,20,23,0.04)",
                  }}
                >
                  {/* Subtle inner tint matching gradient direction */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-[20px] opacity-100"
                    style={{
                      background: `radial-gradient(ellipse at 10% 0%, ${org.shimmerColor} 0%, transparent 60%)`,
                    }}
                  />

                  <div className="relative z-10 p-7 sm:p-8 lg:p-9 font-[var(--font-outfit)]">
                    {/* Status badge */}
                    <div className="inline-flex items-center mb-6">
                      <span
                        className="text-[11px] font-semibold uppercase tracking-[0.16em] select-none"
                        style={{ color: org.badgeDot }}
                      >
                        {org.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
                      className="text-[20px] sm:text-[22px] font-semibold leading-[1.2] tracking-tight text-[#0D1117]"
                    >
                      {org.title}
                    </h3>

                    {/* Description */}
                    <p
                      style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
                      className="mt-3 text-[14px] sm:text-[14.5px] leading-[1.7] text-[#404651] font-normal"
                    >
                      {org.description}
                    </p>
                  </div>

                  {/* CTA footer */}
                  {org.cta && org.href ? (
                    <div className="relative z-10 px-7 sm:px-8 pb-7 sm:pb-8 pt-0 font-[var(--font-outfit)]">
                      <div
                        className="pt-4 border-t"
                        style={{ borderColor: `${org.badgeDot}22` }}
                      >
                        <Link
                          href={org.href}
                          target={org.external ? "_blank" : undefined}
                          rel={org.external ? "noreferrer" : undefined}
                          className="inline-flex items-center gap-2 text-[13px] sm:text-[13.5px] font-semibold transition-all duration-200"
                          style={{ color: org.ctaColor }}
                        >
                          <span className="group-hover:underline underline-offset-2">{org.cta}</span>
                          <span className="transition-transform duration-200 group-hover:translate-x-1 text-base leading-none">→</span>
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div className="pb-7 sm:pb-8" />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom Split: Dark Quote Card + Metrics + Secretariat ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 items-stretch">

          {/* Left: Dark Quote Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative rounded-2xl sm:rounded-[22px] overflow-hidden flex flex-col justify-between p-8 sm:p-10 lg:p-12"
            style={{
              background: "linear-gradient(145deg, #0F1829 0%, #1A2942 55%, #0D1A2E 100%)",
              border: "1px solid rgba(255,255,255,0.07)",
              boxShadow: "0 16px 50px rgba(0,0,0,0.22), 0 2px 8px rgba(0,0,0,0.14)",
            }}
          >
            <div
              className="pointer-events-none absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl select-none"
              style={{ background: "radial-gradient(circle, rgba(59,125,216,0.15) 0%, transparent 70%)" }}
            />

            <div className="relative z-10 font-[var(--font-outfit)]">
              <p className="text-[10.5px] sm:text-[11.5px] uppercase tracking-[0.22em] font-semibold text-[#C8A265] mb-6 sm:mb-8 select-none">
                FROM THE COUNCIL — QUOTE TO CONFIRM
              </p>
              <blockquote
                style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
                className="text-2xl sm:text-[27px] lg:text-[29px] font-normal italic leading-[1.38] text-white tracking-[-0.01em]"
              >
                "A foundation is a promise written down: that what we build
                together stays available to everyone who needs it."
              </blockquote>
            </div>

            <p className="relative z-10 mt-8 sm:mt-10 text-[12px] sm:text-[13px] text-slate-400/70 font-normal font-[var(--font-outfit)]">
              Chair, Smart Angelos Foundation — name to confirm
            </p>
          </motion.div>

          {/* Right: Metrics + Secretariat stacked */}
          <div className="lg:col-span-6 flex flex-col gap-4 sm:gap-5">
            {/* Metrics card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="flex-1 rounded-2xl sm:rounded-[22px] overflow-hidden p-7 sm:p-8 lg:p-9"
              style={{
                background: "linear-gradient(155deg, rgba(255,255,255,0.99) 0%, rgba(253,246,228,0.90) 100%)",
                border: "1px solid rgba(229,172,48,0.18)",
                boxShadow: "0 4px 24px rgba(18,20,23,0.05), 0 1px 4px rgba(18,20,23,0.03)",
              }}
            >
              <h3
                style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
                className="text-[19px] sm:text-[21px] font-semibold tracking-tight text-[#0D1117] mb-2"
              >
                Built for the long term
              </h3>
              <p
                style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
                className="text-[13px] sm:text-[13.5px] leading-relaxed text-[#4A505C] font-normal mb-6"
              >
                Every figure below is published with the annual report and
                independently reviewed. The dashes are placeholders until the
                first reporting year closes.
              </p>
              <div className="grid grid-cols-4 gap-4 pt-5 border-t border-black/[0.06] font-[var(--font-outfit)]">
                {stats.map((s) => (
                  <div key={s.label}>
                    <p
                      style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
                      className="text-[22px] sm:text-[26px] font-bold text-[#0D1117] tabular-nums tracking-tight"
                    >
                      {s.value}
                    </p>
                    <p className="mt-0.5 text-[10.5px] sm:text-[11.5px] text-[#6B7382] font-normal leading-tight">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Secretariat action bar */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl sm:rounded-[22px] p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-[var(--font-outfit)]"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.99) 0%, rgba(245,247,251,0.95) 100%)",
                border: "1px solid rgba(148,163,184,0.18)",
                boxShadow: "0 4px 18px rgba(18,20,23,0.04)",
              }}
            >
              <p
                style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
                className="text-[16px] sm:text-[17.5px] font-medium text-[#0D1117] leading-snug"
              >
                Want the detail before the report
                <br className="hidden sm:inline" />
                {" "}lands?
              </p>

              <Link
                href="/secretariat"
                className="animated-button-gold relative inline-flex items-center justify-center rounded-[6px] border border-[#B88728]/35 bg-white/90 px-5 py-2.5 text-[13px] font-medium text-[#8E6317] shadow-sm overflow-hidden flex-none self-start sm:self-auto font-[var(--font-outfit)]"
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span className="relative z-10">Ask the secretariat</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EcosystemOrgs;
