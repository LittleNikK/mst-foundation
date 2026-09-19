"use client";

import Image from "next/image";
import Link from "next/link";

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

/* ------------------------------------------------------------------ */
/*  Footer Component                                                   */
/* ------------------------------------------------------------------ */
export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8 pt-2 sm:pt-4 bg-[#F1F3F6]">
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

        {/* Flying bird silhouette from reference image */}
        <div
          aria-hidden="true"
          className="hidden md:block pointer-events-none absolute left-[55%] top-[45%] -translate-x-1/2 select-none z-[3] opacity-65"
        >
          <svg width="38" height="26" viewBox="0 0 54 38" fill="none">
            <path
              d="M27 18 C23 10 14 3 2 1 C10 8 18 16 23 24 C24 21 26 20 27 20 C28 20 30 21 31 24 C36 16 44 8 52 1 C40 3 31 10 27 18 Z"
              fill="#242E38"
            />
          </svg>
        </div>

        {/* ── Content Area ── */}
        <div className="relative z-10 pt-8 sm:pt-10 lg:pt-12 px-6 sm:px-10 lg:px-12 pb-0">
          
          {/* Top Row: Brand column on left + 3 Link columns on right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left Column: Brand, Headline, Paragraph, Button, Copyright */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                {/* Brand Badge */}
                <Link href="/" className="inline-flex items-center gap-2.5 select-none group">
                  <div className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full shrink-0">
                    <Image
                      src="/logo.png"
                      alt="Smart Angelos Foundation Logo"
                      width={36}
                      height={36}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-sans), 'Plus Jakarta Sans', Inter, sans-serif",
                    }}
                    className="text-[16px] font-bold text-[#0D1117] tracking-tight"
                  >
                    Smart Angelos
                  </span>
                </Link>

                {/* Bold Headline */}
                <h3
                  style={{
                    fontFamily: "var(--font-sans), 'Plus Jakarta Sans', Inter, sans-serif",
                  }}
                  className="mt-3 text-[19px] sm:text-[21px] font-bold text-[#0D1117] leading-snug tracking-[-0.015em] max-w-sm"
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

                {/* Black Pill Button */}
                <div className="mt-4">
                  <Link
                    href="/whitepaper"
                    className="inline-flex items-center gap-2 h-[36px] px-4 rounded-full bg-[#0D1117] hover:bg-black text-white text-[12.5px] font-medium shadow-xs transition-all duration-200 active:scale-[0.98]"
                  >
                    <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                      <path d="M4 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6.414A2 2 0 0 0 13.414 5L11 2.586A2 2 0 0 0 9.586 2H4zm5 1.5V6a1 1 0 0 0 1 1h2.5L9 3.5zM4 3h4v4a2 2 0 0 0 2 2h4v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/>
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
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 lg:pl-4">
              {navigationColumns.map((col) => (
                <div key={col.title}>
                  <p
                    style={{
                      fontFamily: "var(--font-sans), 'Plus Jakarta Sans', Inter, sans-serif",
                    }}
                    className="font-bold text-[14px] text-[#0D1117] mb-2.5 sm:mb-3 tracking-tight select-none"
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
                            className="text-[13px] sm:text-[13.5px] text-[#4A5361] hover:text-[#0D1117] transition-colors duration-150 leading-[1.65] font-normal inline-block"
                          >
                            {link.text}
                          </Link>
                        ) : (
                          <span className="text-[13px] sm:text-[13.5px] text-[#8C95A3] leading-[1.65] font-normal inline-block">
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
            <h2
              style={{
                fontFamily: "var(--font-jost), 'Jost', var(--font-outfit), sans-serif",
              }}
              className="text-[10.2vw] sm:text-[11.1vw] md:text-[11.7vw] font-bold tracking-tight text-white leading-[0.84] whitespace-nowrap drop-shadow-[0_4px_24px_rgba(0,0,0,0.18)] opacity-90 transition-opacity ml-1 sm:ml-1.5 lg:ml-2"
            >
              Smart Angelos
            </h2>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
