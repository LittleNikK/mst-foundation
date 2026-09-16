"use client";

import { motion } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */
const items = [
  {
    id: "01",
    badge: "Whitepaper",
    accent: "#3B7DD8",
    title: "The Foundation charter and the case for community stewardship",
    footer: "Publication date to confirm",
  },
  {
    id: "02",
    badge: "Event",
    accent: "#B38D4A",
    title: "Annual community assembly",
    footer: "Date and venue to confirm",
  },
  {
    id: "03",
    badge: "Event · monthly",
    accent: "#5C8A6E",
    title: "Open council call",
    footer: "Anyone may attend · minutes published after",
  },
  {
    id: "04",
    badge: "Report",
    accent: "#7B5EA7",
    title: "First annual report and accounts",
    footer: "In preparation",
  },
];

/* ------------------------------------------------------------------ */
/*  Single row item                                                    */
/* ------------------------------------------------------------------ */
function ListItem({
  item,
  index,
}: {
  item: (typeof items)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.55,
        delay: 0.1 + index * 0.07,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative"
    >
      {/* Hover background wash */}
      <div
        className="absolute inset-0 -mx-4 sm:-mx-6 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ backgroundColor: `${item.accent}07` }}
      />

      {/* Left accent bar — slides in on hover */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[2.5px] rounded-full scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-400"
        style={{ backgroundColor: item.accent, left: "-1px" }}
      />

      <div className="relative flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 py-5 sm:py-6 pl-4 sm:pl-5">

        {/* Left col: number + badge */}
        <div className="flex items-center gap-3 sm:w-52 shrink-0">
          <span
            className="tabular-nums font-bold text-[11px] select-none leading-none"
            style={{
              fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif",
              color: item.accent,
              opacity: 0.5,
            }}
          >
            {item.id}
          </span>
          <span
            className="inline-block rounded-[3px] px-2.5 py-1 text-[10.5px] font-semibold tracking-wide select-none whitespace-nowrap"
            style={{
              backgroundColor: `${item.accent}12`,
              border: `1px solid ${item.accent}28`,
              color: item.accent,
            }}
          >
            {item.badge}
          </span>
        </div>

        {/* Centre: title */}
        <h3
          style={{
            fontFamily:
              "var(--font-serif), Newsreader, 'Times New Roman', Georgia, serif",
          }}
          className="flex-1 text-[17px] sm:text-[19px] lg:text-[20px] font-normal leading-[1.3] text-[#121417] group-hover:text-[#0D1117] transition-colors duration-200"
        >
          {item.title}
        </h3>

        {/* Right: footer — fades up slightly on hover */}
        <p
          style={{
            fontFamily: "var(--font-serif), Newsreader, Georgia, serif",
          }}
          className="sm:w-52 shrink-0 text-[12px] sm:text-[12.5px] text-[#8A919C] sm:text-right leading-relaxed group-hover:text-[#6B7280] transition-colors duration-200"
        >
          {item.footer}
        </p>

        {/* Arrow — appears on hover */}
        <div
          className="hidden sm:flex items-center justify-center w-7 h-7 rounded-full shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0"
          style={{
            backgroundColor: `${item.accent}14`,
            border: `1px solid ${item.accent}28`,
            color: item.accent,
          }}
        >
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
            <path
              d="M2 9L9 2M9 2H4.5M9 2V6.5"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Divider */}
      <div
        className="h-px w-full transition-colors duration-300"
        style={{ backgroundColor: "rgba(0,0,0,0.06)" }}
      />
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Section                                                            */
/* ------------------------------------------------------------------ */
export function NewsEvents() {
  return (
    <section
      id="news"
      className="relative w-full py-12 sm:py-16 lg:py-20 overflow-hidden scroll-mt-24"
    >
      {/* Ambient glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-5%] top-[-5%] w-[650px] h-[500px] blur-3xl select-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(253,230,138,0.30) 0%, rgba(254,243,199,0.14) 45%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-5%] top-[10%] w-[550px] h-[450px] blur-3xl select-none"
        style={{
          background:
            "radial-gradient(circle at left, rgba(186,207,228,0.30) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-[11px] sm:text-[12px] uppercase tracking-[0.24em] font-semibold text-[#9E7D3B] select-none"
          >
            NEWS &amp; EVENTS
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
            className="mt-3 sm:mt-4 text-4xl sm:text-5xl lg:text-[54px] xl:text-[58px] font-normal leading-[1.08] tracking-[-0.02em] text-[#121417]"
          >
            What we are publishing
            <br />
            and where to find us
          </motion.h2>
        </div>

        {/* ── Top rule ── */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="h-px w-full origin-left mb-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(179,141,74,0.40) 0%, rgba(0,0,0,0.08) 50%, transparent 100%)",
          }}
        />

        {/* ── List items ── */}
        <div>
          {items.map((item, i) => (
            <ListItem key={item.id} item={item} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default NewsEvents;
