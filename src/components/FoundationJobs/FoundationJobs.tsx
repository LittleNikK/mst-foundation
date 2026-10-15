"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { Shield, Landmark, Users } from "lucide-react";

/* ------------------------------------------------------------------ */
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
  },
  {
    icon: Landmark,
    title: "Accountability",
    description:
      "An elected council and standing committees, answerable to members. Not to shareholders.",
    cta: "Read Our Structure",
    href: "/governance",
    number: "02",
  },
  {
    icon: Users,
    title: "Growth",
    description:
      "Grants, education, and research that help builders use what the ecosystem makes, with everything we learn published back.",
    cta: "Browse programmes",
    href: "/programmes",
    number: "03",
  },
];

/* ------------------------------------------------------------------ */
/*  THEME — change these to re-skin the whole section                   */
/* ------------------------------------------------------------------ */
const THEME = {
  page: "#ffffff",
  card: "#282f96ff", // card + headline colour
  ink: "#ffffff", // text / lines drawn on the cards
};

// If your site has a fixed/floating navbar that overlaps the top of the pinned
// stage, put its height (px) here and the stage content will sit below it.
const NAV_OFFSET = 0;

const SANS = "'Roboto', system-ui, -apple-system, 'Segoe UI', sans-serif";
const MONO = "'Roboto Mono', ui-monospace, SFMono-Regular, Menlo, monospace";
const SERIF_ITALIC =
  "'Playfair Display', var(--font-playfair), Georgia, 'Times New Roman', serif";

const FONT_IMPORT =
  "@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400;1,500&family=Roboto:wght@300;400;500&family=Roboto+Mono:wght@500;600&display=swap');";

/* ------------------------------------------------------------------ */
/*  SCROLL CHOREOGRAPHY                                                 */
/*  P = progress (0 → 1) through the pinned scroll distance.            */
/* ------------------------------------------------------------------ */
const N = jobs.length;
const GROW_END = 0.58; // cards finish rising
const WHEEL_START = 0.27; // wheel starts rolling in from the left edge
const WHEEL_END = 0.94; // wheel stops (then a short hold, then unpin)

// Geometry as fractions of the cards' height (measured from the video)
const AXIS_FRAC = 0.331; // dashed line / wheel centre
const RADIUS_FRAC = 0.173; // wheel circumradius
const ROAD_FRAC = AXIS_FRAC + RADIUS_FRAC; // flat road line

// Card i rises at speed 1 / (1 + 0.5 i): card 1 fastest, last card slowest
const SPEED = (i: number) => 1 / (1 + 0.5 * i);
const S_END = 1 / SPEED(N - 1);

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));

// Every size is capped by BOTH viewport width and height, so the pinned stage
// always fits on screen (short / zoomed windows included).
const PAD = "clamp(12px, min(1.2vw, 2.2vh), 20px)";
const TOP_SAFE = 42; // px kept free at the top of a card for number + icon

function cardReveal(i: number, p: number) {
  const s = clamp(p / GROW_END) * S_END;
  return clamp(s * SPEED(i));
}

/* ------------------------------------------------------------------ */
/*  Card                                                                */
/* ------------------------------------------------------------------ */
function JobCard({
  job,
  index,
  progress,
  animated,
  staticReveal,
  isDesktop,
}: {
  job: (typeof jobs)[number];
  index: number;
  progress: MotionValue<number>;
  animated: boolean;
  staticReveal: boolean;
  isDesktop: boolean;
}) {
  const Icon = job.icon;

  // Desktop scrub reveal clip-path
  const clip = useTransform(
    progress,
    (p) => `inset(${(1 - cardReveal(index, p)) * 100}% 0% 0%)`
  );

  const pad = PAD;

  return (
    <motion.article
      className="relative min-w-0 w-full rounded-[18px] sm:rounded-[20px] overflow-hidden md:h-full"
      style={{ clipPath: animated ? clip : "inset(0% 0% 0%)" }}
      initial={staticReveal ? { opacity: 0, y: 22 } : false}
      whileInView={staticReveal ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className="relative flex min-w-0 flex-col justify-between rounded-[18px] sm:rounded-[20px] p-4 sm:p-5 md:p-0 md:h-full"
        style={{ background: THEME.card, color: THEME.ink }}
      >
        {/* Top row: Number & Icon */}
        <div className="flex items-center justify-between w-full md:contents">
          {/* index number */}
          <span
            className="select-none md:absolute"
            style={{
              top: isDesktop ? pad : undefined,
              left: isDesktop ? pad : undefined,
              fontFamily: MONO,
              fontWeight: 600,
              fontSize: "clamp(12px, min(0.8vw, 1.5vh), 14px)",
              letterSpacing: "0.04em",
            }}
          >
            {job.number}
          </span>

          {/* Icon */}
          <Icon
            aria-hidden="true"
            className="stroke-[1.5] md:absolute"
            style={{
              top: isDesktop ? `calc(${pad} - 3px)` : undefined,
              right: isDesktop ? pad : undefined,
              width: "clamp(18px, min(1.2vw, 2.2vh), 20px)",
              height: "clamp(18px, min(1.2vw, 2.2vh), 20px)",
              opacity: 0.9,
            }}
          />
        </div>

        {/* flexible zone / road divider */}
        <div className="relative min-h-[28px] sm:min-h-[36px] md:min-h-0 flex-1 my-3 sm:my-4 md:my-0">
          {!animated && (
            <>
              <div
                aria-hidden="true"
                className="absolute inset-x-0"
                style={{
                  top: "50%",
                  borderTop: "1.5px dashed rgba(255,255,255,0.35)",
                }}
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0"
                style={{ bottom: 0, height: 1.5, background: "rgba(255,255,255,0.7)" }}
              />
            </>
          )}
        </div>

        {/* text block */}
        <div
          data-fj-text
          className="relative z-10 flex flex-col md:block"
          style={{ padding: isDesktop ? `0 ${pad} ${pad}` : undefined }}
        >
          <h3
            className="text-xl sm:text-2xl md:text-[clamp(19px,min(1.8vw,3.2vh),32px)]"
            style={{
              fontFamily: SANS,
              fontWeight: 400,
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
            }}
          >
            {job.title}
          </h3>

          <p
            className="text-[13.5px] sm:text-sm md:text-[clamp(11px,min(0.78vw,1.35vh),13.5px)] text-white/90 leading-relaxed mt-2 sm:mt-2.5 md:mt-[clamp(6px,min(1vw,1.4vh),12px)] max-w-[38ch]"
            style={{
              fontFamily: SANS,
              fontWeight: 400,
            }}
          >
            {job.description}
          </p>

          <Link
            href={job.href}
            className="group flex items-center justify-between outline-none focus-visible:underline border-t border-white/35 mt-3 sm:mt-4 pt-2.5 sm:pt-3 text-[13.5px] sm:text-sm md:text-[clamp(12px,min(0.95vw,1.6vh),15px)]"
            style={{
              fontFamily: SERIF_ITALIC,
              fontStyle: "italic",
              color: THEME.ink,
            }}
          >
            <span className="underline-offset-4 group-hover:underline">
              {job.cta}
            </span>
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1.5 font-sans not-italic text-base"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

/* ------------------------------------------------------------------ */
/*  Section                                                             */
/* ------------------------------------------------------------------ */
export function FoundationJobs() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const roadRef = useRef<SVGPathElement>(null);
  const axisRef = useRef<SVGLineElement>(null);
  const wheelRef = useRef<SVGPolygonElement>(null);
  const dotRef = useRef<SVGCircleElement>(null);
  const size = useRef({ w: 0, h: 0, textH: 0 });

  const reduce = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(true);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const on = () => setIsDesktop(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);

  const animated = isDesktop && !reduce;
  const staticReveal = !animated && !reduce;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  // a touch of inertia so the scrub feels buttery
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    mass: 0.35,
    restDelta: 0.0002,
  });


  /* ---- draws the road, axis and rolling polygon for progress p ---- */
  const paint = useCallback((p: number) => {
    const { w: W, h: H } = size.current;
    if (!W || !H) return;

    const cols = N;
    const gap = W > 900 ? 16 : 12;
    const colW = (W - gap * (cols - 1)) / cols;

    // The road always sits just above the tallest text block, so the wheel and
    // road can never overlap the text — on any screen height.
    const textTop = H - size.current.textH;
    const roadY = Math.min(ROAD_FRAC * H, textTop - Math.max(14, H * 0.03));
    const R = Math.max(
      10,
      Math.min(H * RADIUS_FRAC, colW * 0.3, (roadY - TOP_SAFE) / 2)
    );
    const yc = roadY - R;

    // wheel travel: enters from the left edge, ends near the right
    const t = clamp((p - WHEEL_START) / (WHEEL_END - WHEEL_START));
    const X = -1.2 * R + t * (0.93 * W + 1.2 * R);

    // number of sides grows as the wheel travels (square → circle)
    const q = clamp(X / W);
    const n = Math.round(4 + 70 * Math.pow(q, 2.2));
    const PI = Math.PI;

    // ---- road: catenary arches matched to the n-gon -------------------
    let d: string;
    const apothem = R * Math.cos(PI / n);
    const sec = 1 / Math.cos(PI / n);
    const half = apothem * Math.asinh(Math.tan(PI / n));
    const archW = half * 2;

    if (n >= 34 || archW < 6) {
      d = `M0 ${(yc + R).toFixed(1)} L${W} ${(yc + R).toFixed(1)}`;
    } else {
      const steps = Math.max(6, Math.min(16, Math.ceil(archW / 7)));
      const kMax = Math.ceil(W / archW) + 1;
      const parts: string[] = [];
      for (let k = 0; k < kMax; k++) {
        const cx = (k + 0.5) * archW;
        for (let s = 0; s <= steps; s++) {
          const x = cx - half + (archW * s) / steps;
          const y = yc + R - apothem * (sec - Math.cosh((x - cx) / apothem));
          parts.push(`${k === 0 && s === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`);
        }
      }
      d = parts.join("");
    }
    roadRef.current?.setAttribute("d", d);

    // ---- wheel: rolls without slipping on those arches ----------------
    const k = Math.floor(X / archW);
    const u = clamp((X - (k + 0.5) * archW) / archW, -0.5, 0.5);
    const spin = u * ((2 * PI) / n);
    const pts: string[] = [];
    for (let j = 0; j < n; j++) {
      const a = PI / 2 + PI / n + (2 * PI * j) / n + spin;
      pts.push(`${(X + R * Math.cos(a)).toFixed(1)},${(yc + R * Math.sin(a)).toFixed(1)}`);
    }
    wheelRef.current?.setAttribute("points", pts.join(" "));

    dotRef.current?.setAttribute("cx", X.toFixed(1));
    dotRef.current?.setAttribute("cy", yc.toFixed(1));

    axisRef.current?.setAttribute("x1", "0");
    axisRef.current?.setAttribute("x2", String(W));
    axisRef.current?.setAttribute("y1", yc.toFixed(1));
    axisRef.current?.setAttribute("y2", yc.toFixed(1));
  }, []);

  useMotionValueEvent(progress, "change", (v) => {
    if (animated) paint(v);
  });

  // keep the overlay measured against the cards' real size
  useEffect(() => {
    if (!animated) return;
    const el = stageRef.current;
    if (!el) return;
    const measure = () => {
      const r = el.getBoundingClientRect();
      let textH = 0;
      el.querySelectorAll<HTMLElement>("[data-fj-text]").forEach((n) => {
        textH = Math.max(textH, n.offsetHeight);
      });
      size.current = { w: r.width, h: r.height, textH };
      svgRef.current?.setAttribute("viewBox", `0 0 ${r.width} ${r.height}`);
      paint(progress.get());
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    // web-fonts change the text height after first paint
    document.fonts?.ready.then(measure);
    return () => ro.disconnect();
  }, [animated, paint, progress]);

  return (
    <section
      ref={sectionRef}
      id="foundation-jobs"
      className={`relative w-full ${reduce ? "" : "md:h-[420vh]"}`}
      style={{ background: THEME.page }}
    >
      <style>{`${FONT_IMPORT}
@media (min-width: 768px) {
  #foundation-jobs .fj-stage {
    position: sticky;
    top: 0;
    height: 100vh;
    height: 100dvh;
    box-sizing: border-box;
    padding-top: calc(clamp(10px, 2vh, 22px) + ${NAV_OFFSET}px);
    padding-bottom: clamp(20px, 4vh, 36px);
  }
}
@media (min-width: 1024px) {
  #foundation-jobs .fj-stage {
    height: calc(100vh / 1.1);
    height: calc(100dvh / 1.1);
  }
}`}</style>

      {/* stage container */}
      <div
        className={`flex flex-col py-10 sm:py-14 md:py-0 md:justify-between px-4 sm:px-6 md:px-8 lg:px-12 w-full md:overflow-hidden ${
          reduce ? "" : "fj-stage"
        }`}
      >
        {/* ---------------- header ---------------- */}
        <header
          className="hidden md:grid md:grid-cols-3 md:items-end md:gap-x-6 md:gap-y-2 max-w-7xl mx-auto w-full shrink-0"
          style={{ color: THEME.card }}
        >
          <div className="md:col-span-2">
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl sm:text-3xl md:text-[clamp(22px,min(3vw,4.8vh),44px)]"
              style={{
                fontFamily: SANS,
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
                fontSize: isDesktop ? "clamp(22px, min(3vw, 4.8vh), 44px)" : undefined,
              }}
            >
              Three responsibilities,
              <br />
              <em
                style={{
                  fontFamily: SERIF_ITALIC,
                  fontStyle: "italic",
                  fontWeight: 400,
                  letterSpacing: "-0.01em",
                }}
              >
                kept in trust
              </em>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="text-[13.5px] sm:text-sm text-slate-600 md:text-inherit leading-relaxed"
            style={{
              fontFamily: SANS,
              fontWeight: 400,
              fontSize: isDesktop ? "clamp(11px, min(0.78vw, 1.35vh), 13.5px)" : undefined,
            }}
          >
            Useful infrastructure tends to outlive the companies that start it.
            The Foundation exists so that the code, the treasury and the brand
            sit with a non-profit body whose only mandate is to keep them
            available. Infrastructure outlasts the teams that build it only if
            someone is mandated to keep it that way. That&apos;s the whole of
            what SmartAngelos exists to do.
          </motion.p>
        </header>

        {/* ---------------- cards + road/wheel overlay ---------------- */}
        <div
          ref={stageRef}
          className="relative mt-0 md:mt-auto md:min-h-0 md:flex-1 max-w-7xl mx-auto w-full md:max-h-[480px]"
        >
          <div className="grid min-w-0 grid-cols-1 gap-3 sm:gap-4 md:absolute md:inset-0 md:grid-cols-3 md:gap-4 lg:gap-5">
            {jobs.map((job, i) => (
              <JobCard
                key={job.title}
                job={job}
                index={i}
                progress={progress}
                animated={animated}
                staticReveal={staticReveal}
                isDesktop={isDesktop}
              />
            ))}
          </div>

          {animated && (
            <svg
              ref={svgRef}
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
              fill="none"
              stroke="#fff"
              strokeWidth={1.6}
              strokeLinejoin="round"
            >
              <line
                ref={axisRef}
                strokeDasharray="5 5"
                strokeWidth={1.4}
                opacity={0.9}
              />
              <path ref={roadRef} />
              <polygon ref={wheelRef} />
              <circle ref={dotRef} r={3.2} fill="#fff" stroke="none" />
            </svg>
          )}
        </div>
      </div>
    </section>
  );
}

export default FoundationJobs;