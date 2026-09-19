"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, easeOut, MotionValue } from "framer-motion";

const VH_PER_CARD = 165; // 165vh per card ensures an unhurried, silky-smooth scroll glide

/* ──────────────────────────────────────────────
   Shared types
────────────────────────────────────────────── */
interface CardDef {
  number: string;
  accentColor: string;
  title: string;
  description: string;
  dark: boolean;
}

const CARDS: CardDef[] = [
  { number: "01", accentColor: "#3B7DD8", title: "Treasury", description: "Reserves, runway and every outgoing line, reconciled monthly.", dark: false },
  { number: "02", accentColor: "#6B7280", title: "Council votes", description: "Every resolution, how each seat voted, and the minute that recorded it.", dark: false },
  { number: "03", accentColor: "#B88728", title: "Grant pipeline", description: "Applications move through four stages, and the queue is visible to applicants.", dark: false },
  { number: "04", accentColor: "#3B7DD8", title: "Documents", description: "The charter, bylaws, minutes and accounts, versioned and permanently archived.", dark: false },
  { number: "05", accentColor: "#6B7280", title: "The council", description: "Four seats, elected annually. Names go up as the first assembly confirms them.", dark: false },
  { number: "06", accentColor: "#6BA3E8", title: "Assembly record", description: "Motions, turnout and outcomes from every members’ assembly, kept as a permanent register.", dark: true },
];

/* ──────────────────────────────────────────────
   Card content per obligation
────────────────────────────────────────────── */
function CardContent({ card }: { card: CardDef }) {
  if (card.number === "01") {
    return (
      <div className="grid grid-cols-2 gap-3 sm:gap-3.5">
        {[
          { label: "Reserves", status: "Published", detail: "Reconciled monthly" },
          { label: "Grants committed", status: "Audited", detail: "Full public ledger" },
          { label: "Operating cost", status: "Published", detail: "Line-by-line accounts" },
          { label: "Runway", status: "Current", detail: "Maintained in treasury" },
        ].map((item) => (
          <div key={item.label} className="p-3 sm:p-3.5 rounded-xl bg-slate-50/90 border border-slate-200/90 font-[var(--font-outfit)]">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[13px] font-semibold text-[#0F172A]">{item.label}</span>
              <span className="text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded bg-blue-50 text-[#3B7DD8]">
                {item.status}
              </span>
            </div>
            <p className="text-[11.5px] text-slate-500 font-normal">{item.detail}</p>
          </div>
        ))}
      </div>
    );
  }
  if (card.number === "02") {
    return (
      <div className="space-y-3 font-[var(--font-outfit)]">
        {[
          { label: "Charter amendment", result: "Carried", pct: 88, color: "#3B7DD8" },
          { label: "Grant round 01 budget", result: "Carried", pct: 94, color: "#3B7DD8" },
          { label: "Third organization intake", result: "Deferred", pct: 45, color: "#94A3B8" },
        ].map((row) => (
          <div key={row.label} className="p-3 rounded-xl bg-slate-50/90 border border-slate-200/90">
            <div className="flex justify-between items-center text-[13px] font-medium mb-2 text-[#0D1117]">
              <span>{row.label}</span>
              <span className="text-[#3B7DD8] font-semibold text-xs bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                {row.result} &bull; {row.pct}%
              </span>
            </div>
            <div className="h-2 w-full rounded-full bg-slate-200/80 overflow-hidden">
              <div className="h-full rounded-full transition-all" style={{ width: `${row.pct}%`, backgroundColor: row.color }} />
            </div>
          </div>
        ))}
      </div>
    );
  }
  if (card.number === "03") {
    return (
      <div className="grid grid-cols-4 gap-2 sm:gap-2.5 font-[var(--font-outfit)]">
        {[
          { n: "01", label: "Enquiry", status: "Submitted", active: false },
          { n: "02", label: "Proposal", status: "Published", active: false },
          { n: "03", label: "Review", status: "In queue", active: false },
          { n: "04", label: "Award", status: "Public minute", active: true },
        ].map((stage) => (
          <div
            key={stage.n}
            className={`flex flex-col items-center text-center p-2.5 sm:p-3 rounded-xl border transition-all ${
              stage.active
                ? "bg-[#FAF5E8] border-[#B88728]/40 shadow-sm ring-1 ring-[#B88728]/20"
                : "bg-slate-50/90 border-slate-200/90"
            }`}
          >
            <span
              className={`text-[10px] font-bold px-1.5 py-0.5 rounded mb-1.5 ${
                stage.active ? "bg-[#B88728] text-white" : "bg-slate-200 text-slate-700"
              }`}
            >
              {stage.n}
            </span>
            <span className="text-[12px] font-semibold text-[#0D1117] leading-tight mb-1">
              {stage.label}
            </span>
            <span className={`text-[10px] sm:text-[10.5px] leading-tight font-normal ${stage.active ? "text-[#9E7D3B]" : "text-slate-500"}`}>
              {stage.status}
            </span>
          </div>
        ))}
      </div>
    );
  }
  if (card.number === "04") {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-[var(--font-outfit)]">
        {[
          { label: "Charter & bylaws", desc: "Permanent archive", href: "/documents/charter" },
          { label: "Council minutes", desc: "Versioned registry", href: "/documents/minutes" },
          { label: "Annual accounts", desc: "Reconciled ledger", href: "/documents/accounts" },
          { label: "Conflict policy", desc: "Standing register", href: "/documents/conflict-policy" },
        ].map((doc) => (
          <Link
            key={doc.label}
            href={doc.href}
            className="group/doc flex items-center justify-between p-3 rounded-xl bg-slate-50/90 border border-slate-200/90 hover:border-blue-300 hover:bg-blue-50/40 transition-all"
          >
            <div>
              <p className="text-[13px] font-medium text-[#0D1117] group-hover/doc:text-[#3B7DD8] transition-colors">
                {doc.label}
              </p>
              <p className="text-[11px] text-slate-500 mt-0.5 font-normal">{doc.desc}</p>
            </div>
            <span className="text-[#3B7DD8] text-sm font-bold opacity-70 group-hover/doc:opacity-100 group-hover/doc:translate-x-0.5 transition-all">
              &rarr;
            </span>
          </Link>
        ))}
      </div>
    );
  }
  if (card.number === "05") {
    return (
      <div className="grid grid-cols-2 gap-2.5 sm:gap-3 font-[var(--font-outfit)]">
        {[
          { tag: "Ch", name: "Chair", sub: "Elected annually", active: true },
          { tag: "Tr", name: "Treasurer", sub: "Elected annually", active: false },
          { tag: "Se", name: "Secretary", sub: "Elected annually", active: false },
          { tag: "Cd", name: "Community delegate", sub: "Assembly confirmed", active: false },
        ].map((seat) => (
          <div
            key={seat.tag}
            className={`flex items-start gap-2.5 p-2.5 sm:p-3 rounded-xl border ${
              seat.active
                ? "bg-[#FAF5E8] border-[#B88728]/35 shadow-sm ring-1 ring-[#B88728]/15"
                : "bg-slate-50/90 border-slate-200/90"
            }`}
          >
            <span
              className={`flex h-8 w-8 flex-none items-center justify-center rounded-lg text-[11px] font-bold ${
                seat.active ? "bg-[#B88728] text-white" : "bg-slate-200 text-slate-700"
              }`}
            >
              {seat.tag}
            </span>
            <div>
              <p className="text-[12.5px] font-semibold text-[#0D1117] leading-tight">{seat.name}</p>
              <p className="text-[11px] text-slate-500 leading-tight mt-1 font-normal">{seat.sub}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  // Card 06 — dark
  return (
    <div className="rounded-xl border border-sky-500/25 bg-slate-900/90 p-4 sm:p-5 space-y-2.5 text-[13px] font-[var(--font-outfit)]">
      {[
        ["Assembly", "First sitting, date to confirm"],
        ["Motions", "Published prior to sitting"],
        ["Turnout", "Register opens with membership"],
        ["Outcome", "Signed & published within 7 days"],
      ].map(([key, val]) => (
        <div key={key} className="flex items-baseline justify-between border-b border-white/[0.08] pb-2 last:border-0 last:pb-0">
          <span className="text-[#6BA3E8] font-semibold text-[13px]">{key}</span>
          <span className="text-slate-200 text-[12.5px] font-normal">{val}</span>
        </div>
      ))}
    </div>
  );
}

/* ──────────────────────────────────────────────
   StackCard Component
   Each card starts hidden below the screen. As the user
   scrolls down, each card rises slowly and smoothly from below,
   settles squarely in the center, and stays completely static
   while subsequent cards stack on top of it.
────────────────────────────────────────────── */
function StackCard({
  card,
  index,
  total,
  scrollYProgress,
}: {
  card: CardDef;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  // 5 exact card transitions between 6 cards (total - 1):
  // Perfect 1:1 forward and reverse symmetry with zero dead zone at the end.
  const totalSteps = total - 1;
  const step = 1 / totalSteps;
  const isFirst = index === 0;

  // Strict uniform timing across all cards in both directions:
  // Card 1 is seated at 0vh from the start.
  // Each card spends 0.7 * step traveling up and 0.3 * step resting.
  // In reverse, Card 6 descends immediately over 0.7 * step to uncover Card 5!
  const entryStart = isFirst ? 0 : (index - 0.7) * step;
  const entryEnd = isFirst ? 0.001 : index * step;

  // y translation: Card 1 is anchored at 0vh; all incoming cards glide smoothly from 38vh to 0vh with gentle deceleration
  const y = useTransform(
    scrollYProgress,
    [entryStart, entryEnd],
    [isFirst ? "0vh" : "38vh", "0vh"],
    { clamp: true, ease: easeOut }
  );

  // Smooth subtle scale expansion as it settles into place (0.97 -> 1.0)
  const scale = useTransform(
    scrollYProgress,
    [entryStart, entryEnd],
    [isFirst ? 1 : 0.97, 1],
    { clamp: true, ease: easeOut }
  );

  // Opacity: fades in gracefully across ascent
  const opacity = useTransform(
    scrollYProgress,
    [entryStart, isFirst ? 0.001 : entryStart + (entryEnd - entryStart) * 0.45],
    [isFirst ? 1 : 0, 1],
    { clamp: true, ease: easeOut }
  );

  return (
    <motion.div
      style={{
        y,
        scale,
        opacity,
        zIndex: (index + 1) * 10,
        background: card.dark
          ? "linear-gradient(145deg, #0B1120 0%, #131E32 100%)"
          : "#FFFFFF",
        border: card.dark
          ? "1px solid rgba(107,163,232,0.25)"
          : "1px solid rgba(15,23,42,0.09)",
        boxShadow: card.dark
          ? "0 25px 60px -15px rgba(0,0,0,0.70), 0 0 0 1px rgba(255,255,255,0.08)"
          : "0 20px 50px -12px rgba(15,23,42,0.14), 0 4px 16px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.04)",
      }}
      className="absolute inset-0 w-full h-full rounded-[24px] sm:rounded-[28px] overflow-hidden flex flex-col justify-between will-change-transform"
    >
      {/* Card header strip */}
      <div
        className="flex items-center gap-3 px-6 sm:px-8 lg:px-10 py-3 border-b"
        style={{
          borderColor: card.dark ? "rgba(107,163,232,0.12)" : "rgba(0,0,0,0.06)",
          backgroundColor: card.dark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.02)",
        }}
      >
        <span
          className="text-[11px] uppercase tracking-[0.22em] font-bold tabular-nums select-none font-[var(--font-outfit)]"
          style={{ color: card.accentColor }}
        >
          {card.number}
        </span>
        <div
          className="h-3 w-px"
          style={{ backgroundColor: card.dark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.12)" }}
        />
        <span
          className="text-[10px] uppercase tracking-[0.18em] font-semibold select-none font-[var(--font-outfit)]"
          style={{ color: card.dark ? "rgba(210,218,232,0.60)" : "#64748B" }}
        >
          Standing Obligation
        </span>
      </div>

      {/* Card body */}
      <div className="grid grid-cols-1 md:grid-cols-[230px_1fr] gap-6 md:gap-8 lg:gap-10 px-6 sm:px-8 lg:px-10 py-5 sm:py-7 flex-1 items-center">
        <div className="pt-0 font-[var(--font-outfit)]">
          <span
            style={{
              fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
              color: card.accentColor,
              opacity: card.dark ? 0.35 : 0.25,
            }}
            className="block text-[32px] sm:text-[42px] font-bold leading-none tabular-nums select-none mb-1.5"
          >
            {card.number}
          </span>
          <h3
            style={{
              fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
              color: card.dark ? "#FFFFFF" : "#0F172A",
            }}
            className="text-[19px] sm:text-[21px] font-semibold tracking-[-0.015em] leading-tight mb-2"
          >
            {card.title}
          </h3>
          <div
            className="h-0.5 w-8 mb-2.5 rounded-full"
            style={{ backgroundColor: card.accentColor, opacity: 0.8 }}
          />
          <p
            style={{
              fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
              color: card.dark ? "#CBD5E1" : "#334155",
            }}
            className="text-[13.5px] sm:text-[14px] leading-[1.6] font-normal"
          >
            {card.description}
          </p>
        </div>
        <div className="flex flex-col justify-center">
          <CardContent card={card} />
        </div>
      </div>
    </motion.div>
  );
}

/* ──────────────────────────────────────────────
   Page section
────────────────────────────────────────────── */
export default function PublicObligations() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Silky-smooth spring physics: eliminates discrete mouse-wheel notches and glides with continuous liquid momentum
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 24,
    mass: 0.45,
    restDelta: 0.0005,
  });

  const scrollHeightVh = (CARDS.length - 1) * VH_PER_CARD + 100;

  return (
    <section
      id="obligations"
      className="relative scroll-mt-24"
      style={{ background: "linear-gradient(145deg, #D6E4F0 0%, #E4EEF6 30%, #F0EBE0 65%, #E8EFF6 100%)" }}
    >
      {/* Anchors for Governance & Transparency */}
      <div id="governance" className="absolute -top-24 pointer-events-none" />
      <div id="transparency" className="absolute -top-24 pointer-events-none" />
      {/* Ambient glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-5%] top-[-5%] w-[600px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.22)_0%,transparent_70%)] blur-3xl select-none"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-5%] bottom-[5%] w-[500px] h-[400px] bg-[radial-gradient(circle,rgba(186,210,232,0.32)_0%,transparent_65%)] blur-3xl select-none"
      />

      {/* Scroll-driven stacking cards container */}
      <div
        ref={containerRef}
        className="relative w-full"
        style={{ height: `${scrollHeightVh}vh` }}
      >
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="w-full max-w-5xl flex flex-col justify-center -translate-y-6 sm:-translate-y-8 lg:-translate-y-12">
            {/* Section header: stays visible in viewport during the entire cards showcase */}
            <div className="w-full mb-4 sm:mb-6">
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="text-[11px] sm:text-[12px] uppercase tracking-[0.22em] font-semibold text-[#9E7D3B] select-none mb-1.5 sm:mb-2 font-[var(--font-outfit)]"
              >
                EVERYTHING IN PUBLIC
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
                className="text-2xl sm:text-3xl lg:text-[36px] font-semibold leading-[1.15] tracking-[-0.02em] text-[#0D1117]"
              >
                How a foundation earns
                <br className="hidden sm:inline" /> the name
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
                className="mt-1.5 sm:mt-2 text-[13px] sm:text-[14.5px] leading-[1.55] text-[#373E4A] max-w-2xl font-normal"
              >
                Six standing obligations. Each one has a page, a document trail and a person accountable for it.
              </motion.p>
            </div>

            {/* Stacking cards */}
            <div className="relative w-full h-[460px] sm:h-[420px] md:h-[390px] lg:h-[380px] flex items-center justify-center">
              {CARDS.map((card, i) => (
                <StackCard
                  key={card.number}
                  card={card}
                  index={i}
                  total={CARDS.length}
                  scrollYProgress={smoothProgress}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}