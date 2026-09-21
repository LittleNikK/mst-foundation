"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Globe2,
  Users,
  GraduationCap,
  MapPin,
  Calendar,
  AlertCircle,
  Clock,
  Sparkles,
  Layers,
  Compass,
  ExternalLink,
  ChevronRight,
  Boxes,
} from "lucide-react";
import { Navbar, Footer, ScrollToTop } from "@/components";

/* ------------------------------------------------------------------ */
/*  Community Programs Data                                           */
/* ------------------------------------------------------------------ */
const communityPrograms = [
  {
    number: "01",
    title: "Ambassador Program",
    summary:
      "Empowering community advocates, localized translators, and regional developer liaisons across global hubs.",
    topics: [
      "Technical workshop facilitation & localized content",
      "Community moderation & governance translation",
      "Direct feedback pipeline to protocol maintainers",
    ],
    icon: Users,
    accent: "#2563EB",
    badgeBg: "#EFF6FF",
    badgeBorder: "#DBEAFE",
    badgeText: "#1D4ED8",
    glowColor: "rgba(37, 99, 235, 0.08)",
  },
  {
    number: "02",
    title: "Education Initiative",
    summary:
      "Open-source curricula, developer bootcamps, university research fellowships, and security workshops.",
    topics: [
      "Zero-to-production MST developer guides",
      "Security best practices & audit checklists",
      "Academic research grants for university CS labs",
    ],
    icon: GraduationCap,
    accent: "#B88728",
    badgeBg: "#FEF9EE",
    badgeBorder: "#FDE68A",
    badgeText: "#9A6B1A",
    glowColor: "rgba(184, 135, 40, 0.08)",
  },
  {
    number: "03",
    title: "Regional Chapters",
    summary:
      "Autonomous grassroots developer meetups, validator operator clubs, and localized hackathon events.",
    topics: [
      "Foundation micro-sponsorship for local meetups",
      "Node operator hardware clinics & setup assistance",
      "Regional community assembly representation",
    ],
    icon: MapPin,
    accent: "#16A34A",
    badgeBg: "#F0FDF4",
    badgeBorder: "#DCFCE7",
    badgeText: "#15803D",
    glowColor: "rgba(22, 163, 74, 0.08)",
  },
];

/* ------------------------------------------------------------------ */
/*  Ecosystem Directory Filter Tabs Placeholder                       */
/* ------------------------------------------------------------------ */
const directoryTabs = [
  "All Projects (0)",
  "Core Infrastructure",
  "Developer Tooling",
  "Security & Audits",
  "Community & Education",
];

export default function EcosystemPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#E9ECF0] bg-blueprint-grid overflow-x-clip font-[var(--font-sans)]">
      {/* Universal Floating Capsule Navbar */}
      <Navbar />

      {/* Main Page Layout */}
      <main className="flex-1 w-full pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Breadcrumb & Back Link ── */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 text-[12.5px] sm:text-[13px] text-[#596273] font-medium mb-6 sm:mb-8"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 hover:text-[#0D1117] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <span className="text-slate-400">/</span>
            <span className="text-[#0D1117] font-semibold">Ecosystem</span>
          </motion.div>

          {/* ── Hero Island Header Card ── */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-[28px] sm:rounded-[36px] lg:rounded-[40px] border border-white/60 bg-white/45 backdrop-blur-2xl p-7 sm:p-10 lg:p-14 shadow-[0_16px_40px_rgba(15,23,42,0.07),inset_0_1px_0_rgba(255,255,255,0.9)] overflow-hidden mb-10 sm:mb-12"
          >
            {/* Ambient Radial Background Glows */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-[-5%] top-[-20%] w-[520px] h-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(245,186,19,0.18)_0%,transparent_65%)] blur-2xl select-none"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-[-10%] bottom-[-20%] w-[450px] h-[450px] rounded-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.12)_0%,transparent_65%)] blur-2xl select-none"
            />

            <div className="relative z-10 max-w-4xl">
              {/* Bold Editorial Headline in Jost */}
              <h1
                style={{ fontFamily: "var(--font-jost), 'Jost', sans-serif" }}
                className="text-3xl sm:text-5xl lg:text-[54px] xl:text-[60px] font-bold text-[#0D1117] tracking-tight leading-[1.08] mb-5 sm:mb-6"
              >
                Built by an independent community
              </h1>

              {/* Subtitle Description */}
              <p
                style={{ fontFamily: "var(--font-sans), 'Plus Jakarta Sans', sans-serif" }}
                className="text-[16px] sm:text-[18px] lg:text-[19px] leading-[1.65] text-[#2C333E] font-normal tracking-[-0.01em] max-w-3xl"
              >
                SmartAngelos supports projects across the MST ecosystem — it does not control them.
              </p>
            </div>
          </motion.section>

          {/* ── Institutional Advisory / Placeholder Notice ── */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-[20px] border border-amber-300/70 bg-amber-50/80 p-5 sm:p-6 mb-12 sm:mb-16 flex items-start gap-4 shadow-xs"
          >
            <AlertCircle className="w-5 h-5 text-[#B88728] shrink-0 mt-0.5" />
            <div>
              <p className="text-[11.5px] font-bold uppercase tracking-wider text-[#8E6317] font-[var(--font-outfit)] mb-1">
                Ecosystem Directory Status · In Active Formation
              </p>
              <p className="text-[13.5px] sm:text-[14px] leading-[1.65] text-[#5A4112] font-normal">
                <strong>Note:</strong> The directory below will index verified community
                repositories, developer tools, and grant recipients as our inaugural funding
                round concludes. Teams building on MST may submit their project for ecosystem
                inclusion and grant consideration.
              </p>
            </div>
          </motion.div>

          {/* ── Ecosystem Map ── */}
          <section className="mb-14 sm:mb-20">
            <div className="rounded-[28px] sm:rounded-[36px] bg-white border border-slate-200/90 p-7 sm:p-10 lg:p-12 shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-6 border-b border-slate-100 gap-4">
                <div>
                  <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.22em] font-semibold text-[#9E7D3B] select-none font-[var(--font-outfit)] mb-1.5">
                    Project Directory
                  </p>
                  <h2
                    style={{
                      fontFamily:
                        "var(--font-playfair), 'Playfair Display', Georgia, serif",
                    }}
                    className="text-2xl sm:text-3xl lg:text-[34px] font-normal text-[#0D1117] tracking-[-0.015em]"
                  >
                    Ecosystem Map
                  </h2>
                </div>
                <span className="text-[12.5px] sm:text-[13px] text-[#596273] font-medium">
                  Independent Project Showcase
                </span>
              </div>

              {/* Directory Filter Pills */}
              <div className="flex flex-wrap gap-2 mb-8 select-none">
                {directoryTabs.map((tab, idx) => (
                  <span
                    key={tab}
                    className={`px-3.5 py-1.5 rounded-full text-[12.5px] font-medium transition-colors ${
                      idx === 0
                        ? "bg-[#0D1117] text-white font-semibold"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {tab}
                  </span>
                ))}
              </div>

              {/* Empty State Banner */}
              <div className="py-12 px-6 rounded-[22px] bg-[#FAF7F2] border border-amber-200/70 text-center flex flex-col items-center justify-center max-w-xl mx-auto">
                <div className="w-12 h-12 rounded-full bg-amber-100 border border-amber-200 flex items-center justify-center text-[#B88728] mb-4">
                  <Boxes className="w-6 h-6" />
                </div>

                <h3
                  style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
                  className="text-xl font-bold text-[#0D1117] mb-2"
                >
                  No funded projects to display yet.
                </h3>

                <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-[#5A4112] max-w-md mb-6">
                  This directory will populate as grants are awarded. Independent teams
                  building infrastructure, explorers, and tools are encouraged to submit
                  a grant proposal.
                </p>

                <Link
                  href="/grants#apply"
                  className="inline-flex items-center gap-2 h-[40px] px-5 rounded-[7px] bg-[#F5BA13] hover:bg-[#E5AC0B] text-[#121417] font-semibold text-[13px] transition-all duration-200 active:scale-[0.98] shadow-sm cursor-pointer"
                >
                  <span>Submit Your Project for Funding</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>

          {/* ── Community Programs ── */}
          <section className="mb-14 sm:mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-8 sm:mb-10">
              <div className="lg:col-span-7">
                <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.22em] font-semibold text-[#9E7D3B] select-none font-[var(--font-outfit)] mb-2">
                  Ecosystem Initiatives
                </p>
                <h2
                  style={{
                    fontFamily:
                      "var(--font-playfair), 'Playfair Display', Georgia, serif",
                  }}
                  className="text-2xl sm:text-3xl lg:text-[36px] font-normal text-[#0D1117] tracking-[-0.015em] leading-[1.18]"
                >
                  Community Programs
                </h2>
              </div>
              <div className="lg:col-span-5 flex items-center lg:pt-8">
                <p className="text-[14px] sm:text-[15px] leading-[1.68] text-[#373E4A]">
                  Grassroots initiatives connecting developers, educators, and operators
                  building across the global MST network.
                </p>
              </div>
            </div>

            {/* 3 Program Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch mb-5">
              {communityPrograms.map((prog, idx) => {
                const Icon = prog.icon;
                return (
                  <motion.div
                    key={prog.number}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.5,
                      delay: 0.08 + idx * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="group relative flex flex-col justify-between h-full rounded-[22px] border border-slate-200/90 bg-white p-6 sm:p-7 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-300/90 hover:shadow-[0_20px_38px_-8px_rgba(15,23,42,0.12),0_4px_12px_-2px_rgba(15,23,42,0.04)]"
                    style={{
                      background: `radial-gradient(circle at 90% 10%, ${prog.glowColor} 0%, transparent 60%), #FFFFFF`,
                    }}
                  >
                    {/* Top colored accent stripe */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[3.5px] rounded-t-[22px] transition-all duration-300 group-hover:h-[4px]"
                      style={{ backgroundColor: prog.accent }}
                    />

                    <div>
                      {/* Top Row: Icon + Number */}
                      <div className="flex items-center justify-between gap-3 mb-5">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                          style={{
                            background: prog.badgeBg,
                            border: `1px solid ${prog.badgeBorder}`,
                            color: prog.badgeText,
                          }}
                        >
                          <Icon className="w-5 h-5" strokeWidth={2.1} />
                        </div>
                        <span className="text-[12px] font-bold tabular-nums px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 select-none">
                          {prog.number}
                        </span>
                      </div>

                      <h3
                        style={{
                          fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
                        }}
                        className="text-xl font-bold text-[#0D1117] leading-[1.25] tracking-tight mb-2.5 group-hover:text-[#090D14]"
                      >
                        {prog.title}
                      </h3>

                      <p className="text-[13.5px] sm:text-[14px] leading-[1.65] text-[#2C333E] font-medium mb-4">
                        {prog.summary}
                      </p>

                      <ul className="space-y-2 mb-4">
                        {prog.topics.map((t) => (
                          <li key={t} className="flex items-start gap-2 text-[12.5px] text-[#475569] leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#B88728] shrink-0 mt-2" />
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[12px] font-semibold text-[#8E6317]">
                      <span>Program in Design</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Note on Planned Programs */}
            <p className="text-[12.5px] text-[#64748B] italic text-center">
              Note: Listed per the wireframe — confirm which of these are actually planned before publishing.
            </p>
          </section>

          {/* ── Supported Events ── */}
          <section className="mb-14 sm:mb-20">
            <div className="rounded-[28px] sm:rounded-[36px] bg-white border border-slate-200/90 p-7 sm:p-10 lg:p-12 shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-6 border-b border-slate-100 gap-4">
                <div>
                  <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.22em] font-semibold text-[#9E7D3B] select-none font-[var(--font-outfit)] mb-1.5">
                    Community Gatherings
                  </p>
                  <h2
                    style={{
                      fontFamily:
                        "var(--font-playfair), 'Playfair Display', Georgia, serif",
                    }}
                    className="text-2xl sm:text-3xl lg:text-[34px] font-normal text-[#0D1117] tracking-[-0.015em]"
                  >
                    Supported Events
                  </h2>
                </div>
                <span className="text-[12.5px] sm:text-[13px] text-[#596273] font-medium">
                  Conferences &amp; Hackathons
                </span>
              </div>

              {/* Empty State Banner */}
              <div className="py-12 px-6 rounded-[22px] bg-[#FAF7F2] border border-amber-200/70 text-center flex flex-col items-center justify-center max-w-xl mx-auto">
                <Calendar className="w-10 h-10 text-[#B88728] mb-3 opacity-80" />
                <h3
                  style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
                  className="text-xl font-bold text-[#0D1117] mb-2"
                >
                  None yet.
                </h3>
                <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-[#5A4112] max-w-md mb-5">
                  Official community assembly dates, hackathon calendars, and developer
                  summits will be announced as our Round 01 program commences.
                </p>

                <Link
                  href="/#talk-to-us"
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#8E6317] hover:underline"
                >
                  <span>Request Event Sponsorship</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </section>

          {/* ── Bottom Call-to-Action Island ── */}
          <section className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden bg-[#0D1117] text-white p-8 sm:p-12 lg:p-14 shadow-xl">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle_at_center,rgba(245,186,19,0.22)_0%,transparent_70%)] blur-2xl select-none"
            />

            <div className="relative z-10 max-w-3xl">
              <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.24em] font-semibold text-[#F5BA13] select-none font-[var(--font-outfit)] mb-3">
                Join the Network
              </p>
              <h2
                style={{ fontFamily: "var(--font-jost), 'Jost', sans-serif" }}
                className="text-2xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white leading-tight mb-4"
              >
                Building on MST? Join the independent ecosystem.
              </h2>
              <p className="text-[14.5px] sm:text-[15.5px] leading-relaxed text-slate-300 mb-8 max-w-2xl font-normal">
                Access non-dilutive grant capital, connect with validator operators, and
                collaborate with independent researchers across the world.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
                <Link
                  href="/grants#apply"
                  className="inline-flex items-center justify-center gap-2 h-[42px] sm:h-[44px] px-6 rounded-[7px] bg-[#F5BA13] hover:bg-[#E5AC0B] text-[#121417] font-semibold text-[13.5px] sm:text-[14px] tracking-normal transition-all duration-200 active:scale-[0.98] shadow-sm cursor-pointer"
                >
                  <span>Apply for a Grant</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 h-[42px] sm:h-[44px] px-6 rounded-[7px] border border-white/20 hover:border-white/40 hover:bg-white/5 text-white font-medium text-[13.5px] sm:text-[14px] transition-all duration-200"
                >
                  <span>About Our Mandate</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>

        </div>
      </main>

      {/* Universal Footer */}
      <Footer />

      {/* Floating Scroll To Top Button */}
      <ScrollToTop />
    </div>
  );
}
