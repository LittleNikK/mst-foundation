"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Shield, Landmark, Users } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Three Jobs Data — Premium Dark Card Design                          */
/* ------------------------------------------------------------------ */
const jobs = [
  {
    icon: Shield,
    title: "Custody",
    description:
      "The code, treasury, and trademarks of every organization in the ecosystem, held so no single party can privatize them.",
    cta: "See the ecosystem",
    href: "/ecosystem",
    number: "01",
    cardBg: "linear-gradient(145deg, #0F1829 0%, #152240 60%, #0D1520 100%)",
    glowColor: "rgba(59, 125, 216, 0.18)",
    accentColor: "#6BA3E8",
    iconBg: "rgba(59, 125, 216, 0.12)",
    iconBorder: "rgba(59, 125, 216, 0.25)",
    borderColor: "rgba(59, 125, 216, 0.14)",
    numColor: "rgba(59, 125, 216, 0.08)",
  },
  {
    icon: Landmark,
    title: "Accountability",
    description:
      "An elected council and standing committees, answerable to members. Not to shareholders.",
    cta: "Read Our Structure ",
    href: "/governance",
    number: "02",
    cardBg: "linear-gradient(145deg, #111318 0%, #1A1D26 60%, #0E1014 100%)",
    glowColor: "rgba(200, 210, 230, 0.08)",
    accentColor: "#A0AABE",
    iconBg: "rgba(160, 170, 190, 0.10)",
    iconBorder: "rgba(160, 170, 190, 0.20)",
    borderColor: "rgba(160, 170, 190, 0.10)",
    numColor: "rgba(160, 170, 190, 0.06)",
  },
  {
    icon: Users,
    title: "Growth",
    description:
      "Grants, education, and research that help builders use what the ecosystem makes, with everything we learn published back.",
    cta: "Browse programmes",
    href: "/programmes",
    number: "03",
    cardBg: "linear-gradient(145deg, #1A1200 0%, #261A00 60%, #150E00 100%)",
    glowColor: "rgba(245, 186, 19, 0.14)",
    accentColor: "#E5AC30",
    iconBg: "rgba(245, 186, 19, 0.10)",
    iconBorder: "rgba(245, 186, 19, 0.22)",
    borderColor: "rgba(245, 186, 19, 0.12)",
    numColor: "rgba(245, 186, 19, 0.07)",
  },
];

export function FoundationJobs() {
  return (
    <section className="relative w-full overflow-hidden px-4 sm:px-6 lg:px-8 py-10 sm:py-14" style={{ background: "linear-gradient(145deg, #D6E4F0 0%, #E4EEF6 30%, #F0EBE0 65%, #E8EFF6 100%)" }}>
      {/* Outer Container Card — glass */}
      <div className="relative z-10 w-full max-w-7xl mx-auto rounded-[28px] sm:rounded-[36px] lg:rounded-[42px] border border-white/50 bg-gradient-to-br from-white/52 via-white/42 to-white/32 p-8 sm:p-12 lg:p-14 xl:p-16 shadow-[0_8px_32px_rgba(15,23,42,0.10),0_2px_8px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.85)] backdrop-blur-2xl overflow-hidden">

        {/* Ambient radial glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-8%] top-[-15%] w-[650px] h-[650px] rounded-full bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.30)_0%,rgba(253,230,138,0.14)_45%,transparent_70%)] blur-2xl select-none"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[-12%] bottom-[-15%] w-[550px] h-[550px] rounded-full bg-[radial-gradient(circle_at_center,rgba(186,210,232,0.38)_0%,rgba(210,228,244,0.15)_55%,transparent_70%)] blur-2xl select-none"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,255,255,0.55)_0%,transparent_55%)] select-none"
        />

        {/* Section Header */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-10 sm:mb-12">
          <div className="lg:col-span-6 flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-[11px] sm:text-[12px] uppercase tracking-[0.22em] font-semibold text-[#9E7D3B] select-none mb-3"
            >
              WHAT THE FOUNDATION DOES
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
              className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-normal leading-[1.12] tracking-[-0.015em] text-[#0D1117]"
            >
              Three responsibilities,
              <br />
              kept in trust
            </motion.h2>
          </div>

          <div className="lg:col-span-6 flex items-center lg:pt-10">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontFamily: "var(--font-serif), Newsreader, Georgia, serif" }}
              className="text-[14.5px] sm:text-[15.5px] lg:text-[16px] leading-[1.7] text-[#373E4A] font-normal"
            >
              Useful infrastructure tends to outlive the companies that start it.
              The Foundation exists so that the code, the treasury and the
              brand sit with a non-profit body whose only mandate is to keep
              them available.Infrastructure outlasts the teams that build it only if someone is mandated to keep it that way. That's the whole of what SmartAngelos exists to do.
            </motion.p>
          </div>
        </div>

        {/* 3 Dark Cards Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 items-stretch">
          {jobs.map((job, i) => {
            const Icon = job.icon;
            return (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.08 + i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative flex flex-col justify-between rounded-2xl sm:rounded-[22px] overflow-hidden transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_32px_70px_rgba(0,0,0,0.35)]"
                style={{
                  background: job.cardBg,
                  border: `1px solid ${job.borderColor}`,
                  boxShadow: "0 8px 32px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.12)",
                }}
              >
                {/* Per-card ambient glow blob */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-[22px]"
                  style={{
                    background: `radial-gradient(ellipse at 80% 20%, ${job.glowColor} 0%, transparent 65%)`,
                  }}
                />

                {/* Giant ghost numeral — purely decorative */}
                <div
                  className="pointer-events-none absolute bottom-[-20px] right-[-12px] select-none font-bold leading-none"
                  style={{
                    fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif",
                    fontSize: "clamp(88px, 12vw, 128px)",
                    color: job.numColor,
                    letterSpacing: "-0.04em",
                  }}
                >
                  {job.number}
                </div>

                {/* Card body */}
                <div className="relative z-10 p-7 sm:p-8 lg:p-9">
                  {/* Icon box */}
                  <div
                    className="mb-6 flex h-11 w-11 items-center justify-center rounded-[11px]"
                    style={{
                      backgroundColor: job.iconBg,
                      border: `1px solid ${job.iconBorder}`,
                    }}
                  >
                    <Icon
                      className="h-[19px] w-[19px] stroke-[1.7]"
                      style={{ color: job.accentColor }}
                    />
                  </div>

                  {/* Heading */}
                  <h3
                    style={{ fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif" }}
                    className="text-[20px] sm:text-[22px] font-bold leading-[1.2] tracking-tight text-white"
                  >
                    {job.title}
                  </h3>

                  {/* Accent hairline */}
                  <div
                    className="mt-4 mb-4 h-px w-8 rounded-full opacity-40"
                    style={{ backgroundColor: job.accentColor }}
                  />

                  {/* Description */}
                  <p
                    style={{
                      fontFamily: "var(--font-serif), Newsreader, Georgia, serif",
                      color: "rgba(210, 218, 232, 0.75)",
                    }}
                    className="text-[14px] sm:text-[14.5px] leading-[1.7] font-normal"
                  >
                    {job.description}
                  </p>
                </div>

                {/* CTA Footer */}
                <div
                  className="relative z-10 mx-7 sm:mx-8 mb-7 sm:mb-8 pt-4"
                  style={{ borderTop: `1px solid ${job.borderColor}` }}
                >
                  <Link
                    href={job.href}
                    className="inline-flex items-center gap-2 text-[13px] sm:text-[13.5px] font-semibold transition-all duration-200"
                    style={{ color: job.accentColor }}
                  >
                    <span className="group-hover:underline underline-offset-2">
                      {job.cta}
                    </span>
                    <span className="transition-transform duration-200 group-hover:translate-x-1 text-base leading-none">
                      →
                    </span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FoundationJobs;
