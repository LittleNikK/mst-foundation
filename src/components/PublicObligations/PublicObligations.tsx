"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

/* ──────────────────────────────────────────────
   Shared types
────────────────────────────────────────────── */
interface CardDef {
  number: string;
  accentColor: string;
  pastel: string; // solid pastel card background, video-style
  title: string;
  description: string;
}

const CARDS: CardDef[] = [
  { number: "01", accentColor: "#3B7DD8", pastel: "#CFE3FA", title: "Treasury", description: "Reserves, runway and every outgoing line, reconciled monthly." },
  { number: "02", accentColor: "#6B7280", pastel: "#E3E6EC", title: "Council votes", description: "Every resolution, how each seat voted, and the minute that recorded it." },
  { number: "03", accentColor: "#B88728", pastel: "#F5E7C4", title: "Grant pipeline", description: "Applications move through four stages, and the queue is visible to applicants." },
  { number: "04", accentColor: "#3B7DD8", pastel: "#CDEBD9", title: "Documents", description: "The charter, bylaws, minutes and accounts, versioned and permanently archived." },
  { number: "05", accentColor: "#6B7280", pastel: "#F4E4E6", title: "The council", description: "Four seats, elected annually. Names go up as the first assembly confirms them." },
  { number: "06", accentColor: "#2C5AA0", pastel: "#D8E0F2", title: "Assembly record", description: "Motions, turnout and outcomes from every members\u2019 assembly, kept as a permanent register." },
];

/* ──────────────────────────────────────────────
   Card body content per obligation — kept from the
   original component, restyled for solid pastel
   backgrounds instead of a white/glass card.
────────────────────────────────────────────── */
function CardContent({ card }: { card: CardDef }) {
  const tileBg = "rgba(255,255,255,0.55)";
  const tileBorder = "rgba(15,23,42,0.08)";

  if (card.number === "01") {
    return (
      <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
        {[
          { label: "Reserves", status: "Published" },
          { label: "Grants committed", status: "Audited" },
          { label: "Operating cost", status: "Published" },
          { label: "Runway", status: "Current" },
        ].map((item) => (
          <div key={item.label} className="p-2.5 sm:p-3 rounded-xl" style={{ background: tileBg, border: `1px solid ${tileBorder}` }}>
            <p className="text-[12.5px] font-semibold text-[#0F172A]">{item.label}</p>
            <p className="text-[10.5px] text-[#334155]/70 mt-0.5">{item.status}</p>
          </div>
        ))}
      </div>
    );
  }
  if (card.number === "02") {
    return (
      <div className="space-y-2.5">
        {[
          { label: "Charter amendment", result: "Carried", pct: 88 },
          { label: "Grant round 01 budget", result: "Carried", pct: 94 },
          { label: "Third organization intake", result: "Deferred", pct: 45 },
        ].map((row) => (
          <div key={row.label} className="p-2.5 rounded-xl" style={{ background: tileBg, border: `1px solid ${tileBorder}` }}>
            <div className="flex justify-between items-center text-[12px] font-medium mb-1.5 text-[#0F172A]">
              <span>{row.label}</span>
              <span className="text-[10.5px] font-semibold">{row.result}</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-black/10 overflow-hidden">
              <div className="h-full rounded-full bg-[#0F172A]/70" style={{ width: `${row.pct}%` }} />
            </div>
          </div>
        ))}
      </div>
    );
  }
  if (card.number === "03") {
    return (
      <div className="grid grid-cols-4 gap-2">
        {[
          { n: "01", label: "Enquiry", active: false },
          { n: "02", label: "Proposal", active: false },
          { n: "03", label: "Review", active: false },
          { n: "04", label: "Award", active: true },
        ].map((stage) => (
          <div
            key={stage.n}
            className="flex flex-col items-center text-center p-2 sm:p-2.5 rounded-xl"
            style={{ background: stage.active ? "rgba(255,255,255,0.85)" : tileBg, border: `1px solid ${tileBorder}` }}
          >
            <span className="text-[10px] font-bold text-[#0F172A]/60 mb-1">{stage.n}</span>
            <span className="text-[11px] font-semibold text-[#0F172A] leading-tight">{stage.label}</span>
          </div>
        ))}
      </div>
    );
  }
  if (card.number === "04") {
    return (
      <div className="grid grid-cols-2 gap-2">
        {[
          { label: "Charter & bylaws", href: "/documents/charter" },
          { label: "Council minutes", href: "/documents/minutes" },
          { label: "Annual accounts", href: "/documents/accounts" },
          { label: "Conflict policy", href: "/documents/conflict-policy" },
        ].map((doc) => (
          <Link
            key={doc.label}
            href={doc.href}
            className="flex items-center justify-between p-2.5 rounded-xl transition-colors hover:bg-white/70"
            style={{ background: tileBg, border: `1px solid ${tileBorder}` }}
          >
            <span className="text-[12px] font-medium text-[#0F172A]">{doc.label}</span>
            <span className="text-[#0F172A]/50 text-sm">&rarr;</span>
          </Link>
        ))}
      </div>
    );
  }
  if (card.number === "05") {
    return (
      <div className="grid grid-cols-2 gap-2.5">
        {[
          { tag: "Ch", name: "Chair", active: true },
          { tag: "Tr", name: "Treasurer", active: false },
          { tag: "Se", name: "Secretary", active: false },
          { tag: "Cd", name: "Delegate", active: false },
        ].map((seat) => (
          <div
            key={seat.tag}
            className="flex items-center gap-2 p-2.5 rounded-xl"
            style={{ background: seat.active ? "rgba(255,255,255,0.85)" : tileBg, border: `1px solid ${tileBorder}` }}
          >
            <span className="flex h-6 w-6 flex-none items-center justify-center rounded-md text-[10px] font-bold bg-[#0F172A]/10 text-[#0F172A]">
              {seat.tag}
            </span>
            <p className="text-[11.5px] font-semibold text-[#0F172A] leading-tight">{seat.name}</p>
          </div>
        ))}
      </div>
    );
  }
  // 06
  return (
    <div className="rounded-xl p-3 sm:p-3.5 space-y-2" style={{ background: tileBg, border: `1px solid ${tileBorder}` }}>
      {[
        ["Assembly", "First sitting, date to confirm"],
        ["Motions", "Published prior to sitting"],
        ["Turnout", "Register opens with membership"],
        ["Outcome", "Published within 7 days"],
      ].map(([key, val]) => (
        <div key={key} className="flex items-baseline justify-between border-b border-[#0F172A]/[0.08] pb-1.5 last:border-0 last:pb-0">
          <span className="text-[12px] font-semibold text-[#0F172A]">{key}</span>
          <span className="text-[11px] text-[#334155]">{val}</span>
        </div>
      ))}
    </div>
  );
}

/* ──────────────────────────────────────────────
   Responsive card metrics — width/gap tracked via
   window width so the stacking math below stays exact
   at every breakpoint instead of guessing from CSS.
────────────────────────────────────────────── */
function useCardMetrics(deckRef: React.RefObject<HTMLDivElement | null>) {
  const [metrics, setMetrics] = useState({ width: 470, gap: 20, height: 350, stackStep: 28 });

  useEffect(() => {
    const compute = () => {
      const el = deckRef.current;
      const w = el ? el.clientWidth : (typeof window !== "undefined" ? Math.min(window.innerWidth - 64, 1152) : 1152);

      if (w < 600) {
        // Mobile: 1 card + ~15% peek
        const cardW = Math.max(280, Math.round(w * 0.85));
        setMetrics({ width: cardW, gap: 14, height: 390, stackStep: 16 });
      } else if (w < 960) {
        // Tablet: 1.5 cards
        const gap = 18;
        const cardW = Math.round((w - gap) / 1.55);
        setMetrics({ width: cardW, gap, height: 365, stackStep: 22 });
      } else {
        // Desktop: exactly 2 full cards + ~32-35% peek of 3rd card
        const gap = 20;
        const cardW = Math.round((w - 2 * gap) / 2.35);
        setMetrics({ width: cardW, gap, height: 350, stackStep: 28 });
      }
    };

    compute();
    window.addEventListener("resize", compute);

    let ro: ResizeObserver | null = null;
    if (deckRef.current && typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(compute);
      ro.observe(deckRef.current);
    }

    return () => {
      window.removeEventListener("resize", compute);
      if (ro) ro.disconnect();
    };
  }, [deckRef]);

  return metrics;
}

/* ──────────────────────────────────────────────
   A single card, absolutely positioned.
   Cards before & up to active stack neatly on the
   left (matching the reference screenshot); cards
   after active flow with normal gap spacing.
────────────────────────────────────────────── */
function StackCard({
  card,
  index,
  active,
  metrics,
  onSelect,
}: {
  card: CardDef;
  index: number;
  active: number;
  metrics: { width: number; gap: number; height: number; stackStep: number };
  onSelect: () => void;
}) {
  const { width, gap, stackStep } = metrics;
  const isPast = index < active;

  // Exact stacking formula from the reference screenshots:
  // - All cards up to the active card stack on the left with stackStep (28px each)
  // - Subsequent cards flow to the right with standard gap spacing
  const x =
    index <= active
      ? index * stackStep
      : active * stackStep + (index - active) * (width + gap);

  return (
    <motion.div
      onClick={isPast ? onSelect : undefined}
      animate={{ x }}
      transition={{ type: "spring", stiffness: 240, damping: 28, mass: 0.7 }}
      style={{
        width,
        height: metrics.height,
        zIndex: index + 1,
        background: card.pastel,
      }}
      className={`absolute top-0 left-0 rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-[-6px_0_18px_rgba(0,0,0,0.12),0_18px_40px_rgba(0,0,0,0.22)] select-none ${
        isPast ? "cursor-pointer hover:brightness-[1.02]" : ""
      }`}
    >
      <div className="flex flex-col h-full p-5 sm:p-6">
        <span
          className="text-[11px] font-bold tracking-[0.16em] uppercase mb-1 font-[var(--font-outfit)]"
          style={{ color: card.accentColor }}
        >
          Obligation {card.number}
        </span>
        <h3
          style={{ fontFamily: "var(--font-display), Anton, sans-serif" }}
          className="text-[21px] sm:text-[23px] lg:text-[24px] font-normal uppercase tracking-[0.02em] text-[#0F172A] leading-[1.12] mb-1 max-w-[90%]"
        >
          {card.title}
        </h3>
        <p
          style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
          className="text-[12px] sm:text-[12.5px] leading-[1.45] text-[#334155] mb-3 max-w-[95%] font-normal"
        >
          {card.description}
        </p>
        <div className="mt-auto">
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
  const [active, setActive] = useState(0);
  const deckRef = useRef<HTMLDivElement>(null);
  const metrics = useCardMetrics(deckRef);
  const isAnimatingRef = useRef(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const goPrev = (e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    timerRef.current = setTimeout(() => {
      isAnimatingRef.current = false;
    }, 420);
    setActive((a) => Math.max(0, a - 1));
  };

  const goNext = (e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    timerRef.current = setTimeout(() => {
      isAnimatingRef.current = false;
    }, 420);
    setActive((a) => Math.min(CARDS.length - 1, a + 1));
  };

  const handleSelect = (i: number) => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    timerRef.current = setTimeout(() => {
      isAnimatingRef.current = false;
    }, 420);
    setActive(i);
  };

  return (
    <section
      id="obligations"
      className="relative scroll-mt-24 w-full overflow-hidden"
      style={{ background: "#1B1C21" }}
    >
      {/* Anchors for Governance & Transparency */}
      <div id="governance" className="absolute -top-24 pointer-events-none" />
      <div id="transparency" className="absolute -top-24 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24">
        {/* Header */}
        <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.22em] font-semibold text-[#B88728] select-none mb-3 font-[var(--font-outfit)]">
          EVERYTHING IN PUBLIC
        </p>
        <h2
          style={{
            fontFamily:
              "var(--font-playfair), 'Playfair Display', Georgia, serif",
          }}
          className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-normal leading-[1.12] tracking-[-0.015em] text-[#EAF1F2] mb-8 sm:mb-10"
        >
          How a foundation earns the name
        </h2>

        {/* Stacking deck */}
        <div
          ref={deckRef}
          className="relative overflow-hidden w-full"
          style={{ height: metrics.height }}
        >
          {CARDS.map((card, i) => (
            <StackCard
              key={card.number}
              card={card}
              index={i}
              active={active}
              metrics={metrics}
              onSelect={() => handleSelect(i)}
            />
          ))}
        </div>

        {/* Arrow controls */}
        <div className="flex items-center gap-3 mt-8 sm:mt-10">
          <button
            type="button"
            onClick={goPrev}
            disabled={active === 0}
            aria-label="Previous obligation"
            className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full transition-all duration-200 cursor-pointer disabled:cursor-not-allowed select-none"
            style={{
              background: active === 0 ? "#2B2E37" : "#D3E9EB",
              color: active === 0 ? "#6B7280" : "#1B1C21",
            }}
          >
            <ArrowLeft size={18} strokeWidth={2.2} className="pointer-events-none" />
          </button>
          <button
            type="button"
            onClick={goNext}
            disabled={active === CARDS.length - 1}
            aria-label="Next obligation"
            className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full transition-all duration-200 cursor-pointer disabled:cursor-not-allowed select-none"
            style={{
              background: active === CARDS.length - 1 ? "#2B2E37" : "#D3E9EB",
              color: active === CARDS.length - 1 ? "#6B7280" : "#1B1C21",
            }}
          >
            <ArrowRight size={18} strokeWidth={2.2} className="pointer-events-none" />
          </button>
        </div>
      </div>
    </section>
  );
}