"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, easeOut, useMotionValueEvent, MotionValue } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Timeline Helpers                                                  */
/*  Card 0 lands cleanly and transitions promptly (~35vh dwell),     */
/*  while Cards 1, 2, 3 retain their exact glide and dwell pace.     */
/* ------------------------------------------------------------------ */
const TIMELINE = {
  cards: [
    { entryStart: 0.000, entryEnd: 0.001 },
    { entryStart: 0.150, entryEnd: 0.390 },
    { entryStart: 0.460, entryEnd: 0.700 },
    { entryStart: 0.770, entryEnd: 1.000 },
  ],
  card(index: number, _total?: number) {
    if (index >= 0 && index < this.cards.length) {
      return this.cards[index];
    }
    return { entryStart: 0, entryEnd: 0.001 };
  },
};

/* ------------------------------------------------------------------ */
/*  Data — The Frontiers / Programmes exactly matching the design     */
/* ------------------------------------------------------------------ */
const frontiers = [
  {
    id: "01",
    tag: "Programme 1",
    title: "Open grants",
    description:
      "Rolling awards to individuals and teams maintaining shared infrastructure.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&q=80",
  },
  {
    id: "02",
    tag: "Programme 2",
    title: "Research fellowships",
    description:
      "Funded working papers on governance, assurance and public-good funding models.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
  },
  {
    id: "03",
    tag: "Programme 3",
    title: "Education",
    description:
      "Free curricula and workshops for schools, co-operatives and public bodies.",
    image:
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=1200&q=80",
  },
  {
    id: "04",
    tag: "Programme 4",
    title: "Community fund",
    description:
      "Small, fast awards decided by members for local and volunteer-led work.",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&q=80",
  },
];

/* ------------------------------------------------------------------ */
/*  Decorative Segmented Wheel — left edge geometry matching design   */
/* ------------------------------------------------------------------ */
function DecorativeWheel() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -left-48 sm:-left-40 top-1/2 -translate-y-1/2 w-[560px] h-[560px] select-none"
    >
      <svg viewBox="0 0 560 560" className="w-full h-full">
        {/* Outer segmented rings */}
        <path
          d="M 280 40 A 240 240 0 0 1 520 280"
          fill="none"
          stroke="rgba(0,0,0,0.038)"
          strokeWidth="48"
        />
        <path
          d="M 520 280 A 240 240 0 0 1 360 500"
          fill="none"
          stroke="rgba(0,0,0,0.028)"
          strokeWidth="48"
        />
        <path
          d="M 220 510 A 240 240 0 0 1 40 280"
          fill="none"
          stroke="rgba(0,0,0,0.038)"
          strokeWidth="48"
        />

        {/* Middle segmented rings */}
        <path
          d="M 280 115 A 165 165 0 0 1 445 280"
          fill="none"
          stroke="rgba(0,0,0,0.045)"
          strokeWidth="40"
        />
        <path
          d="M 115 280 A 165 165 0 0 0 280 445"
          fill="none"
          stroke="rgba(0,0,0,0.035)"
          strokeWidth="40"
        />

        {/* Inner ring */}
        <path
          d="M 280 180 A 100 100 0 0 1 380 280"
          fill="none"
          stroke="rgba(0,0,0,0.05)"
          strokeWidth="32"
        />
        <path
          d="M 180 280 A 100 100 0 0 0 280 380"
          fill="none"
          stroke="rgba(0,0,0,0.04)"
          strokeWidth="32"
        />
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Stacking Image (exact PublicObligations glide-up transition)       */
/* ------------------------------------------------------------------ */
function StackImage({
  item,
  index,
  total,
  progress,
}: {
  item: typeof frontiers[0];
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const isFirst = index === 0;
  const { entryStart, entryEnd } = TIMELINE.card(index, total);

  // y translation: item 0 anchored; incoming images glide up from 100% to 0% with easeOut
  const y = useTransform(
    progress,
    [entryStart, entryEnd],
    [isFirst ? "0%" : "100%", "0%"],
    { clamp: true, ease: easeOut }
  );

  // Subtle scale expansion (0.96 -> 1.0)
  const scale = useTransform(
    progress,
    [entryStart, entryEnd],
    [isFirst ? 1 : 0.96, 1],
    { clamp: true, ease: easeOut }
  );

  // Opacity: fades in gracefully across ascent
  const opacity = useTransform(
    progress,
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
        boxShadow:
          index === 0
            ? "0 20px 50px rgba(0,0,0,0.08)"
            : "0 -14px 36px -4px rgba(0,0,0,0.30), 0 20px 50px rgba(0,0,0,0.15)",
      }}
      className="absolute inset-0 rounded-[20px] overflow-hidden will-change-transform bg-[#121417]"
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover select-none"
      />
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Synchronous Copy Stack matching the design layout                  */
/* ------------------------------------------------------------------ */
function StackCopy({
  item,
  index,
  total,
  progress,
}: {
  item: typeof frontiers[0];
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const isFirst = index === 0;
  const isLast = index === total - 1;
  const { entryStart, entryEnd } = TIMELINE.card(index, total);
  const nextCard = !isLast ? TIMELINE.card(index + 1, total) : null;
  const nextEntryStart = nextCard ? nextCard.entryStart : 1.0;
  const nextEntryFade = nextCard ? (nextCard.entryStart + nextCard.entryEnd) / 2 : 1.0;

  const opacity = useTransform(
    progress,
    isFirst
      ? [0, nextEntryStart, nextEntryFade]
      : isLast
        ? [entryStart, entryEnd, 1.0]
        : [entryStart, entryEnd, nextEntryStart, nextEntryFade],
    isFirst
      ? [1, 1, 0]
      : isLast
        ? [0, 1, 1]
        : [0, 1, 1, 0],
    { clamp: true, ease: easeOut }
  );

  const y = useTransform(
    progress,
    isFirst
      ? [0, nextEntryStart, nextEntryFade]
      : isLast
        ? [entryStart, entryEnd, 1.0]
        : [entryStart, entryEnd, nextEntryStart, nextEntryFade],
    isFirst
      ? ["0px", "0px", "-14px"]
      : isLast
        ? ["14px", "0px", "0px"]
        : ["14px", "0px", "0px", "-14px"],
    { clamp: true, ease: easeOut }
  );

  return (
    <motion.div
      style={{
        opacity,
        y,
      }}
      className="absolute inset-0 flex flex-col justify-center will-change-transform"
    >
      <h3
        style={{
          fontFamily:
            "var(--font-montserrat), 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif",
        }}
        className="text-[26px] sm:text-[30px] lg:text-[34px] font-semibold text-[#111827] tracking-tight leading-[1.18] mb-5 sm:mb-6 max-w-[420px]"
      >
        {item.title}
      </h3>

      <p className="text-[14.5px] sm:text-[15.5px] leading-[1.68] text-[#374151] mb-6 sm:mb-8 max-w-[420px]">
        {item.description}
      </p>

      <Link
        href="/grants/apply"
        className="inline-block text-[14px] font-normal text-[#111827] border-b border-[#111827] pb-0.5 self-start hover:opacity-70 transition-opacity select-none"
      >
        Discover
      </Link>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Section Component                                                  */
/* ------------------------------------------------------------------ */
export function Programmes() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Snappy, low-inertia spring physics that stops immediately when scroll input pauses:
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 30,
    mass: 0.20,
    restDelta: 0.0005,
  });

  // Track active index smoothly based on midpoint of each transition:
  useMotionValueEvent(smoothProgress, "change", (v) => {
    const total = frontiers.length;
    let idx = 0;
    const c1 = TIMELINE.card(1, total);
    const m1 = (c1.entryStart + c1.entryEnd) / 2;
    if (v < m1) {
      idx = 0;
    } else {
      idx = total - 1;
      for (let i = 1; i < total - 1; i++) {
        const cCurr = TIMELINE.card(i, total);
        const cNext = TIMELINE.card(i + 1, total);
        const midCurr = (cCurr.entryStart + cCurr.entryEnd) / 2;
        const midNext = (cNext.entryStart + cNext.entryEnd) / 2;
        if (v >= midCurr && v < midNext) {
          idx = i;
          break;
        }
      }
    }
    setActive((prev) => (prev === idx ? prev : idx));
  });

  // Click a nav item or dot to jump directly to its calm resting zone
  const goTo = (i: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const trackTop = window.scrollY + rect.top;
    const trackHeight = el.offsetHeight - window.innerHeight;

    const total = frontiers.length;
    let progressTarget = 0;
    if (i === 0) {
      progressTarget = 0.07;
    } else if (i === total - 1) {
      progressTarget = 0.999;
    } else {
      const c = TIMELINE.card(i, total);
      const nextC = TIMELINE.card(i + 1, total);
      progressTarget = (c.entryEnd + nextC.entryStart) / 2;
    }

    const target = trackTop + progressTarget * trackHeight;
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  const scrollHeightVh = 470;

  return (
    <section
      id="what-we-do"
      className="relative w-full scroll-mt-24 bg-[#FAFAFC]"
    >
      {/* Anchors for Funding & Research */}
      <div id="funding" className="absolute -top-24 pointer-events-none" />
      <div id="research" className="absolute -top-24 pointer-events-none" />

      {/*
        Scroll track matching PublicObligations: keeps the layout locked static
        in one viewport while cards glide in smoothly, releasing cleanly only
        after the final card is seated.
      */}
      <div
        ref={containerRef}
        className="relative w-full"
        style={{ height: `${scrollHeightVh}vh` }}
      >
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center px-6 sm:px-10 lg:px-16 overflow-hidden">



          {/* Main 3-column stage */}
          <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[240px_auto_1fr] gap-8 lg:gap-14 xl:gap-20 items-center">

            {/* ── Left Column: Nav list with decorative wheel ── */}
            <div className="relative hidden lg:flex flex-col justify-center">
              <DecorativeWheel />
              <div className="relative z-10 flex flex-col gap-5 pl-4 select-none">
                {frontiers.map((item, i) => {
                  const isActive = i === active;
                  return (
                    <button
                      key={item.id}
                      onClick={() => goTo(i)}
                      className="text-left cursor-pointer transition-colors duration-200"
                    >
                      <span
                        className={`text-[15px] sm:text-[16px] transition-colors duration-200 ${isActive
                          ? "text-[#111827] font-medium"
                          : "text-[#9CA3AF] hover:text-[#4B5563]"
                          }`}
                      >
                        {isActive ? `•  ${item.tag}` : item.tag}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mobile nav for smaller screens */}
            <div className="flex lg:hidden gap-5 overflow-x-auto pb-1 -mx-2 px-2 w-full justify-center">
              {frontiers.map((item, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={item.id}
                    onClick={() => goTo(i)}
                    className={`shrink-0 text-[13.5px] whitespace-nowrap pb-1 transition-colors duration-200 cursor-pointer ${isActive
                      ? "text-[#111827] font-medium border-b border-[#111827]"
                      : "text-[#9CA3AF]"
                      }`}
                  >
                    {isActive ? `• ${item.tag}` : item.tag}
                  </button>
                );
              })}
            </div>

            {/* ── Center Column: "The Frontiers" title + image card + vertical dots ── */}
            <div className="relative flex flex-col items-center">
              {/* Top centered label */}
              <p className="text-[14px] sm:text-[15px] text-[#111827] font-normal tracking-tight text-center mb-5 sm:mb-6 select-none">
                Programmes
              </p>

              <div className="relative flex items-center">
                {/* Central Portrait Card */}
                <div className="relative aspect-[3.2/4] w-[310px] sm:w-[360px] md:w-[390px] lg:w-[420px] rounded-[20px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.10)] bg-[#121417]">
                  {frontiers.map((item, i) => (
                    <StackImage
                      key={item.id}
                      item={item}
                      index={i}
                      total={frontiers.length}
                      progress={smoothProgress}
                    />
                  ))}
                </div>

                {/* Vertical pagination dots + active capsule pill */}
                <div className="flex flex-col items-center gap-2.5 ml-4 sm:ml-5 select-none">
                  {frontiers.map((item, i) => {
                    const isActive = i === active;
                    return (
                      <span
                        key={item.id}
                        onClick={() => goTo(i)}
                        className={`cursor-pointer transition-all duration-300 rounded-full ${isActive
                          ? "w-1 h-5 bg-[#111827]"
                          : "w-1 h-1 bg-[#D1D5DB] hover:bg-[#9CA3AF]"
                          }`}
                      />
                    );
                  })}
                </div>
              </div>
            </div>

            {/* ── Right Column: Stacked Copy ── */}
            <div className="relative w-full max-w-[440px] h-[240px] sm:h-[260px]">
              {frontiers.map((item, i) => (
                <StackCopy
                  key={item.id}
                  item={item}
                  index={i}
                  total={frontiers.length}
                  progress={smoothProgress}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Programmes;