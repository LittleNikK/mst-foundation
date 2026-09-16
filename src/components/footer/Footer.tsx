"use client";

import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Link column data                                                   */
/* ------------------------------------------------------------------ */
const columns = [
  {
    label: "FOUNDATION",
    links: [
      { text: "Governance", href: "/governance" },
      { text: "Council", href: "/council" },
      { text: "Charter", href: "/charter" },
      { text: "Accounts", href: "/accounts" },
      { text: "Careers", href: "/careers" },
    ],
  },
  {
    label: "PROGRAMMES",
    links: [
      { text: "Open grants", href: "/grants" },
      { text: "Fellowships", href: "/fellowships" },
      { text: "Education", href: "/education" },
      { text: "Community fund", href: "/community-fund" },
    ],
  },
  {
    label: "CONNECTED",
    links: [
      { text: "News", href: "/news" },
      { text: "Events", href: "/events" },
      { text: "Contact", href: "/contact" },
    ],
  },
];

const orgs = [
  { text: "MST Blockchain", href: "https://mstblockchain.com", external: true, active: true },
  { text: "Second — in formation", href: null },
  { text: "Third — in formation", href: null },
];

const legal = [
  { text: "Terms", href: "/terms" },
  { text: "Privacy", href: "/privacy" },
  { text: "Trademark policy", href: "/trademarks" },
];

/* ------------------------------------------------------------------ */
/*  Footer                                                             */
/* ------------------------------------------------------------------ */
export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 pt-4 sm:pt-6">
      <div
        className="relative z-10 w-full max-w-7xl mx-auto rounded-[28px] sm:rounded-[36px] lg:rounded-[42px] overflow-hidden text-white"
        style={{
          background: "linear-gradient(145deg, #1A2B42 0%, #1E3352 50%, #233554 100%)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 25px 70px rgba(10,14,20,0.22), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        {/* Gold top-edge accent */}
        <div
          className="absolute top-0 left-0 right-0 h-[1.5px]"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(200,162,101,0.55) 30%, rgba(200,162,101,0.70) 50%, rgba(200,162,101,0.55) 70%, transparent 100%)",
          }}
        />

        {/* Ambient glow — top right */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 w-1/2 h-2/3 select-none"
          style={{
            background:
              "radial-gradient(circle at top right, rgba(200,162,101,0.07) 0%, transparent 65%)",
          }}
        />
        {/* Ambient glow — bottom left */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 bottom-0 w-1/3 h-1/2 select-none"
          style={{
            background:
              "radial-gradient(circle at bottom left, rgba(59,125,216,0.06) 0%, transparent 65%)",
          }}
        />

        <div className="relative z-10 p-8 sm:p-12 lg:p-16">

          {/* ── Top grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

            {/* Brand col */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div>
                <h3
                  style={{
                    fontFamily:
                      "var(--font-serif), Newsreader, 'Times New Roman', Georgia, serif",
                  }}
                  className="text-[26px] sm:text-[30px] font-normal leading-[1.18] tracking-[-0.01em]"
                >
                  Smart Angelos{" "}
                  <span style={{ color: "#C8A265" }}>Foundation</span>
                </h3>
                <p
                  style={{ fontFamily: "var(--font-serif), Newsreader, Georgia, serif" }}
                  className="mt-3 text-[13.5px] sm:text-[14px] leading-relaxed font-normal max-w-xs"
                  style={{ color: "rgba(203,213,225,0.70)" }}
                >
                  A non-profit foundation, maintained by its community.
                </p>
              </div>

              <p className="text-[12px]" style={{ color: "rgba(148,163,184,0.70)" }}>
                Press — address to confirm
              </p>

              {/* Organisations */}
              <div>
                <p
                  className="text-[10.5px] uppercase tracking-[0.20em] font-semibold mb-3 select-none"
                  style={{ color: "rgba(148,163,184,0.60)" }}
                >
                  ORGANISATIONS
                </p>
                <ul className="space-y-2">
                  {orgs.map((org) => (
                    <li key={org.text} className="text-[13px] sm:text-[13.5px]">
                      {org.href ? (
                        <Link
                          href={org.href}
                          target={org.external ? "_blank" : undefined}
                          rel={org.external ? "noreferrer" : undefined}
                          className="font-medium transition-colors duration-200"
                          style={{ color: "rgba(226,232,240,0.90)" }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = "#C8A265")}
                          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(226,232,240,0.90)")}
                        >
                          {org.text}
                        </Link>
                      ) : (
                        <span style={{ color: "rgba(100,116,139,0.80)" }}>{org.text}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Link columns */}
            {columns.map((col) => (
              <div key={col.label} className="lg:col-span-2 xl:col-span-2">
                <p
                  className="text-[10.5px] uppercase tracking-[0.20em] font-semibold mb-4 select-none"
                  style={{ color: "rgba(148,163,184,0.60)" }}
                >
                  {col.label}
                </p>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.text} className="text-[13px] sm:text-[13.5px]">
                      <Link
                        href={link.href}
                        className="transition-colors duration-200 group flex items-center gap-1"
                        style={{ color: "rgba(203,213,225,0.75)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#C8A265")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(203,213,225,0.75)")}
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Social links placeholder — rightmost col */}
            <div className="lg:col-span-2">
              <p
                className="text-[10.5px] uppercase tracking-[0.20em] font-semibold mb-4 select-none"
                style={{ color: "rgba(148,163,184,0.60)" }}
              >
                SOCIAL
              </p>
              <p
                className="text-[13px]"
                style={{ color: "rgba(100,116,139,0.80)" }}
              >
                Links to confirm
              </p>
            </div>
          </div>

          {/* ── Bottom bar ── */}
          <div
            className="mt-10 sm:mt-12 pt-6 flex flex-col md:flex-row md:items-center justify-between gap-4"
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
          >
            <div
              className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-5 text-[12px] sm:text-[12.5px]"
              style={{ color: "rgba(100,116,139,0.80)" }}
            >
              <span>© Smart Angelos Foundation</span>
              <span className="hidden sm:inline" style={{ color: "rgba(100,116,139,0.40)" }}>·</span>
              <span>Registration details to confirm</span>
            </div>

            <div className="flex items-center gap-4 sm:gap-5 flex-wrap">
              {legal.map((item) => (
                <Link
                  key={item.text}
                  href={item.href}
                  className="text-[12px] sm:text-[12.5px] transition-colors duration-200"
                  style={{ color: "rgba(148,163,184,0.65)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.90)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(148,163,184,0.65)")}
                >
                  {item.text}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
