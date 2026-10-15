"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

/* ------------------------------------------------------------------ */
/*  Link column data                                                   */
/* ------------------------------------------------------------------ */
const navigationColumns = [
  {
    title: "Foundation",
    links: [
      { text: "Governance", href: "/governance" },
      { text: "Council", href: "/council" },
      { text: "Charter", href: "/charter" },
      { text: "Accounts", href: "/accounts" },
      { text: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Programmes",
    links: [
      { text: "Open grants", href: "/grants" },
      { text: "Fellowships", href: "/fellowships" },
      { text: "Education", href: "/education" },
      { text: "Community fund", href: "/community-fund" },
      { text: "News & Events", href: "/news" },
    ],
  },
  {
    title: "Ecosystem",
    links: [
      { text: "MST Blockchain", href: "https://mstblockchain.com", external: true },
      { text: "Second — in formation", href: null },
      { text: "Third — in formation", href: null },
      { text: "Terms of service", href: "/terms" },
      { text: "Privacy policy", href: "/privacy" },
    ],
  },
];

function ProximityText({
  text,
  radius = 220,
  minScale = 0.12,
}: {
  text: string;
  radius?: number;
  minScale?: number;
}) {
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const mouse = useRef({ x: -9999, y: -9999 });
  const scales = useRef<number[]>([]);

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      mouse.current = { x: event.clientX, y: event.clientY };
    };
    const onLeave = () => {
      mouse.current = { x: -9999, y: -9999 };
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);

    let raf = 0;
    const tick = () => {
      lettersRef.current.forEach((element, index) => {
        if (!element) return;

        const bounds = element.getBoundingClientRect();
        const distance = Math.hypot(
          mouse.current.x - (bounds.left + bounds.width / 2),
          mouse.current.y - (bounds.top + bounds.height / 2)
        );
        const distanceRatio = Math.min(distance / radius, 1);
        const target = minScale + (1 - minScale) * distanceRatio * distanceRatio;
        const previous = scales.current[index] ?? 1;
        const next = previous + (target - previous) * 0.15;

        scales.current[index] = next;
        element.style.transform = `scale(${next})`;
        element.style.opacity = String(0.4 + 0.6 * next);
      });

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [minScale, radius]);

  return (
    <h2
      aria-label={text}
      className="flex w-full select-none justify-between px-1 sm:px-2 text-center text-[clamp(2rem,10.2vw,11.7vw)] font-bold tracking-[-0.03em] text-white leading-[0.84] drop-shadow-[0_4px_24px_rgba(0,0,0,0.18)] opacity-90"
    >
      {text.split("").map((character, index) => (
        <span
          key={`${character}-${index}`}
          ref={(element) => {
            lettersRef.current[index] = element;
          }}
          aria-hidden="true"
          className="inline-block origin-center will-change-transform"
        >
          {character === " " ? "\u00a0" : character}
        </span>
      ))}
    </h2>
  );
}

/* ------------------------------------------------------------------ */
/*  Footer Component                                                   */
/* ------------------------------------------------------------------ */
export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden px-3 sm:px-6 lg:px-8 pb-5 sm:pb-8 pt-2 sm:pt-4 bg-[#EFF1F4]">
      {/* Outer Card Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto rounded-[24px] sm:rounded-[32px] lg:rounded-[36px] overflow-hidden border border-white/60 shadow-[0_16px_48px_rgba(15,23,42,0.07)] bg-[#ECEFF2]">

        {/* Background Mountainous Scenery Image */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <Image
            src="/asstes/foggy-mountainous-scenery-gloomy-sky.jpg"
            alt="Foggy mountainous scenery"
            fill
            priority
            className="object-cover object-bottom"
          />
        </div>

        {/* Luminous Sky Gradient Overlay for text readability at top */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[1] select-none"
          style={{
            background:
              "linear-gradient(to bottom, #ECEFF2 0%, rgba(236,239,242,0.96) 26%, rgba(236,239,242,0.85) 44%, rgba(236,239,242,0.20) 70%, transparent 100%)",
          }}
        />

        {/* Bottom Mist Gradient Overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 sm:h-36 z-[2] select-none"
          style={{
            background:
              "linear-gradient(to top, rgba(236,239,242,0.85) 0%, rgba(236,239,242,0.35) 50%, transparent 100%)",
          }}
        />

        {/* ── Content Area ── */}
        <div className="relative z-10 min-w-0 pt-7 sm:pt-10 lg:pt-12 px-4 sm:px-10 lg:px-12 pb-0">

          {/* Top Row: Brand column on left + 3 Link columns on right */}
          <div className="grid min-w-0 grid-cols-1 lg:grid-cols-12 gap-7 sm:gap-8 lg:gap-10 items-start">

            {/* Left Column: Brand, Headline, Paragraph, Button, Copyright */}
            <div className="min-w-0 lg:col-span-5 flex flex-col justify-between">
              <div>
                {/* Brand Badge */}
                <Link href="/" className="inline-flex items-center select-none group">
                  <div className="relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center shrink-0">
                    <Image
                      src="/logo-transparent.png"
                      alt="Smart Angelos Foundation Logo"
                      width={72}
                      height={72}
                      className="absolute left-1/2 top-1/2 h-32 w-32 max-w-none -translate-x-1/2 -translate-y-1/2 object-contain sm:h-40 sm:w-40"
                    />
                  </div>
                </Link>

                {/* Bold Headline */}
                <h3
                  style={{
                    fontFamily: "var(--font-sans), 'Plus Jakarta Sans', Inter, sans-serif",
                  }}
                  className="mt-3 text-[19px] sm:text-[21px] font-bold text-[#000066] leading-snug tracking-[-0.015em] max-w-sm"
                >
                  The non-profit home for public infrastructure.
                </h3>

                {/* Paragraph */}
                <p
                  style={{
                    fontFamily: "var(--font-sans), 'Plus Jakarta Sans', Inter, sans-serif",
                  }}
                  className="mt-2.5 text-[13px] sm:text-[13.5px] leading-[1.6] text-[#485160] max-w-sm font-normal"
                >
                  A non-profit foundation, maintained by its community. We hold shared infrastructure in trust, fund builders through grants, and govern by open, elected membership.
                </p>

                {/* Blue & Gold Pill Button */}
                <div className="mt-4">
                  <Link
                    href="/whitepaper"
                    className="inline-flex items-center gap-2 h-[36px] px-4 rounded-full bg-[#000066] hover:bg-[#00004d] text-[#FFCC00] text-[12.5px] font-semibold shadow-xs transition-all duration-200 active:scale-[0.98]"
                  >
                    <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                      <path d="M4 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6.414A2 2 0 0 0 13.414 5L11 2.586A2 2 0 0 0 9.586 2H4zm5 1.5V6a1 1 0 0 0 1 1h2.5L9 3.5zM4 3h4v4a2 2 0 0 0 2 2h4v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
                    </svg>
                    <span>Read Whitepaper</span>
                  </Link>
                </div>
              </div>

              {/* Copyright & Attribution */}
              <div className="mt-5 sm:mt-6 space-y-1">
                <p className="text-[12.5px] sm:text-[13px] text-[#1A222E] font-medium">
                  © 2026 Smart Angelos Foundation — All rights reserved
                </p>
                <p className="text-[12px] sm:text-[12.5px] text-[#334155] font-medium">
                  Built by elected community members
                </p>
              </div>
            </div>

            {/* Right Side: 3 Navigation Link Columns */}
            <div className="min-w-0 lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-7 sm:gap-8 lg:pl-4">
              {navigationColumns.map((col) => (
                <div key={col.title} className="min-w-0">
                  <p
                    style={{
                      fontFamily: "var(--font-sans), 'Plus Jakarta Sans', Inter, sans-serif",
                    }}
                    className="font-bold text-[14px] text-[#000066] mb-2.5 sm:mb-3 tracking-tight select-none"
                  >
                    {col.title}
                  </p>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {col.links.map((link) => (
                      <li key={link.text}>
                        {link.href ? (
                          <Link
                            href={link.href}
                            target={link.external ? "_blank" : undefined}
                            rel={link.external ? "noreferrer" : undefined}
                            className="max-w-full break-words text-[13px] sm:text-[13.5px] text-black hover:text-black transition-colors duration-150 leading-[1.65] font-medium inline-block"
                          >
                            {link.text}
                          </Link>
                        ) : (
                          <span className="max-w-full break-words text-[13px] sm:text-[13.5px] text-black leading-[1.65] font-normal inline-block">
                            {link.text}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>

          {/* ── Giant Watermark Text across mountains at bottom ── */}
          <div className="relative w-full overflow-hidden text-left pt-8 sm:pt-10 md:pt-12 pb-3 sm:pb-4 md:pb-5 select-none pointer-events-none">
            <div style={{ fontFamily: "var(--font-jost), 'Jost', var(--font-outfit), sans-serif" }}>
              <ProximityText text="Smart Angelos" />
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
