"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */
const programmes = [
  {
    id: "01",
    tag: "PROGRAMME 01",
    title: "Open grants",
    description:
      "Rolling awards to individuals and teams maintaining shared infrastructure.",
    accent: "#3B7DD8",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
  },
  {
    id: "02",
    tag: "PROGRAMME 02",
    title: "Research fellowships",
    description:
      "Funded working papers on governance, assurance and public-good funding models.",
    accent: "#B38D4A",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80",
  },
  {
    id: "03",
    tag: "PROGRAMME 03",
    title: "Education",
    description:
      "Free curricula and workshops for schools, co-operatives and public bodies.",
    accent: "#5C8A6E",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
  },
  {
    id: "04",
    tag: "PROGRAMME 04",
    title: "Community fund",
    description:
      "Small, fast awards decided by members for local and volunteer-led work.",
    accent: "#7B5EA7",
    image:
      "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=800&q=80",
  },
];

/* ------------------------------------------------------------------ */
/*  Motion variants — same easing/feel as the Hero scroll reveal       */
/* ------------------------------------------------------------------ */
const imageReveal = {
  hidden: { opacity: 0, scale: 1.08, y: 16 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.44, 0, 0.56, 1] },
  },
};

/* ------------------------------------------------------------------ */
/*  Section                                                            */
/* ------------------------------------------------------------------ */
export function Programmes() {
  return (
    <section
      id="what-we-do"
      className="relative w-full overflow-hidden px-4 sm:px-6 lg:px-8 py-8 sm:py-12 scroll-mt-24"
    >
      {/* Outer glass container */}
      <div
        className="relative z-10 w-full max-w-7xl mx-auto rounded-[28px] sm:rounded-[36px] lg:rounded-[42px] overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, rgba(213,225,237,0.88) 0%, rgba(234,239,245,0.90) 40%, rgba(250,246,237,0.85) 100%)",
          border: "1px solid rgba(255,255,255,0.82)",
          boxShadow:
            "0 24px 72px rgba(18,20,23,0.07), inset 0 1px 0 rgba(255,255,255,0.92)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
        }}
      >
        {/* Ambient glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-3/5 select-none"
          style={{
            background:
              "radial-gradient(ellipse at 80% 40%, rgba(253,230,138,0.38) 0%, rgba(254,243,199,0.16) 40%, transparent 70%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-2/5 select-none"
          style={{
            background:
              "radial-gradient(circle at 10% 30%, rgba(186,207,228,0.35) 0%, transparent 65%)",
          }}
        />

        <div className="relative z-10 p-8 sm:p-12 lg:p-14 xl:p-16">

          {/* ── Header ── */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">

            <div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-[11px] sm:text-[12px] uppercase tracking-[0.24em] font-semibold text-[#9E7D3B] select-none mb-3"
              >
                PROGRAMMES
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontFamily:
                    "var(--font-serif), Newsreader, 'Times New Roman', Georgia, serif",
                }}
                className="text-3xl sm:text-4xl lg:text-[46px] font-normal leading-[1.12] tracking-[-0.02em] text-[#121417]"
              >
                Where the money goes
              </motion.h2>
            </div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 flex-wrap"
            >
              <Link
                href="/grants/apply"
                className="inline-flex items-center justify-center rounded-[3px] border border-[#B38D4A] bg-transparent px-5 py-2.5 sm:px-6 sm:py-2.5 text-[13px] sm:text-[13.5px] font-medium text-[#94712F] transition-all duration-200 hover:bg-[#B38D4A]/10 hover:border-[#94712F] active:scale-[0.98] select-none shadow-sm"
              >
                Apply for a grant
              </Link>
              <Link
                href="/library"
                className="inline-flex items-center justify-center rounded-[3px] border border-white/80 bg-white/70 px-5 py-2.5 sm:px-6 sm:py-2.5 text-[13px] sm:text-[13.5px] font-medium text-[#1E2430] transition-all duration-200 hover:bg-white hover:border-slate-300 active:scale-[0.98] select-none shadow-sm backdrop-blur-sm"
              >
                Browse the library
              </Link>
            </motion.div>
          </div>

          {/* Thin gold rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 h-px w-full origin-left"
            style={{
              background:
                "linear-gradient(90deg, rgba(179,141,74,0.35) 0%, rgba(0,0,0,0.06) 55%, transparent 100%)",
            }}
          />

          {/* ── Cards ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch">
            {programmes.map((prog, i) => (
              <motion.div
                key={prog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.1 + i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative flex flex-col rounded-2xl sm:rounded-[22px] overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.58)",
                  border: "1px solid rgba(255,255,255,0.82)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  boxShadow: "0 6px 24px rgba(18,20,23,0.04)",
                }}
              >
                {/* Accent top bar — grows on hover */}
                <div
                  className="h-[2.5px] w-full transition-all duration-500"
                  style={{
                    background: `linear-gradient(90deg, ${prog.accent} 0%, ${prog.accent}60 100%)`,
                    opacity: 0.25,
                  }}
                />
                <div
                  className="absolute top-0 left-0 h-[2.5px] w-0 group-hover:w-full transition-all duration-500 z-10"
                  style={{ background: `linear-gradient(90deg, ${prog.accent}, ${prog.accent}90)` }}
                />

                {/* Image — reveals with a scroll-triggered scale/fade, same easing as the hero */}
                <div className="relative h-36 sm:h-40 w-full overflow-hidden">
                  <motion.img
                    src={prog.image}
                    alt={prog.title}
                    variants={imageReveal}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      ...imageReveal.show.transition,
                      delay: 0.15 + i * 0.08,
                    }}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0) 40%, rgba(255,255,255,0.58) 100%)",
                    }}
                  />
                </div>

                {/* Watermark number */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-4 bottom-3 select-none leading-none font-bold tabular-nums"
                  style={{
                    fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif",
                    fontSize: "72px",
                    color: prog.accent,
                    opacity: 0.055,
                    lineHeight: 1,
                  }}
                >
                  {prog.id}
                </span>

                <div className="relative flex flex-col flex-1 p-6 sm:p-7">
                  <p
                    className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-semibold select-none mb-3"
                    style={{ color: prog.accent }}
                  >
                    {prog.tag}
                  </p>

                  <h3
                    style={{
                      fontFamily:
                        "var(--font-serif), Newsreader, 'Times New Roman', Georgia, serif",
                    }}
                    className="text-xl sm:text-[22px] lg:text-[23px] font-normal leading-[1.2] text-[#121417] mb-3"
                  >
                    {prog.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: "var(--font-serif), Newsreader, Georgia, serif",
                    }}
                    className="text-[12.5px] sm:text-[13.5px] leading-[1.65] text-[#4A505C] font-normal"
                  >
                    {prog.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Programmes;