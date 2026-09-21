"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Users,
  Building2,
  FileCheck2,
  AlertCircle,
  Clock,
  ExternalLink,
  ChevronRight,
  Scale,
  Cpu,
  Coins,
  Globe2,
  Lock,
} from "lucide-react";
import { Navbar, Footer, ScrollToTop } from "@/components";

/* ------------------------------------------------------------------ */
/*  Council Members Data                                              */
/* ------------------------------------------------------------------ */
const councilMembers = [
  {
    seat: "Seat 01",
    name: "[Name — Pending Confirmation]",
    role: "Core Technical Architecture Lead",
    affiliation: "Independent Protocol Maintainer",
    disclosure: "No commercial equity or dual role with any MST commercial spin-off entity.",
    domain: "Protocol consensus, node specifications, and cryptographic audits.",
    accent: "#2563EB",
    badgeBg: "#EFF6FF",
    badgeBorder: "#DBEAFE",
    badgeText: "#1D4ED8",
    icon: Cpu,
  },
  {
    seat: "Seat 02",
    name: "[Name — Pending Confirmation]",
    role: "Treasury & Financial Stewardship Lead",
    affiliation: "Independent Non-Profit Trustee",
    disclosure: "No direct or indirect financial interest in grant applicant entities.",
    domain: "Multi-sig asset custody, runway modeling, and monthly ledger reconciliations.",
    accent: "#B88728",
    badgeBg: "#FEF9EE",
    badgeBorder: "#FDE68A",
    badgeText: "#9A6B1A",
    icon: Coins,
  },
  {
    seat: "Seat 03",
    name: "[Name — Pending Confirmation]",
    role: "Governance & Legal Compliance Lead",
    affiliation: "External Statutory Counsel",
    disclosure: "Retained solely by the Foundation. Discloses all advisory retainers before votes.",
    domain: "Constitutional bylaws, conflict-of-interest enforcement, and public filings.",
    accent: "#0F172A",
    badgeBg: "#F1F5F9",
    badgeBorder: "#E2E8F0",
    badgeText: "#334155",
    icon: Scale,
  },
  {
    seat: "Seat 04",
    name: "[Name — Pending Confirmation]",
    role: "Community & Ecosystem Delegate",
    affiliation: "Elected Community Representative",
    disclosure: "Elected directly by open assembly vote. Full public disclosure filed annually.",
    domain: "Grassroots developer advocacy, regional chapter oversight, and voter turnout.",
    accent: "#16A34A",
    badgeBg: "#F0FDF4",
    badgeBorder: "#DCFCE7",
    badgeText: "#15803D",
    icon: Users,
  },
];

/* ------------------------------------------------------------------ */
/*  Three Working Groups Data                                         */
/* ------------------------------------------------------------------ */
const workingGroups = [
  {
    id: "WG-01",
    title: "Research WG",
    lead: "[Research Lead — In Review]",
    scope: "Consensus mechanics, cryptography, zero-knowledge proofs, and fellowship evaluations.",
    cadence: "Bi-weekly open call · Minutes published to GitHub",
    accent: "#2563EB",
    badgeBg: "#EFF6FF",
    badgeBorder: "#DBEAFE",
    badgeText: "#1D4ED8",
    icon: Cpu,
  },
  {
    id: "WG-02",
    title: "Ecosystem WG",
    lead: "[Ecosystem Lead — In Review]",
    scope: "Grant proposal technical assessments, tooling milestones, and developer SDK support.",
    cadence: "Weekly review session · Grant pipeline updated live",
    accent: "#B88728",
    badgeBg: "#FEF9EE",
    badgeBorder: "#FDE68A",
    badgeText: "#9A6B1A",
    icon: Globe2,
  },
  {
    id: "WG-03",
    title: "Validators WG",
    lead: "[Validators Lead — In Review]",
    scope: "Node operator telemetry, client diversity health, and fractional delegation specifications.",
    cadence: "Monthly operator clinic · Telemetry open to public",
    accent: "#16A34A",
    badgeBg: "#F0FDF4",
    badgeBorder: "#DCFCE7",
    badgeText: "#15803D",
    icon: ShieldCheck,
  },
];

export default function TeamPage() {
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
            <span className="text-[#0D1117] font-semibold">Team &amp; Council</span>
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
                Foundation leadership
              </h1>

              {/* Subtitle Description */}
              <p
                style={{ fontFamily: "var(--font-sans), 'Plus Jakarta Sans', sans-serif" }}
                className="text-[16px] sm:text-[18px] lg:text-[19px] leading-[1.65] text-[#2C333E] font-normal tracking-[-0.01em] max-w-3xl"
              >
                SmartAngelos’ Council and working-group leads. Any dual roles with MST
                commercial products are disclosed below.
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
                Council Registry Notice · Real Names &amp; Roles In Confirmation
              </p>
              <p className="text-[13.5px] sm:text-[14px] leading-[1.65] text-[#5A4112] font-normal">
                <strong>Note:</strong> This directory displays the constitutional governance
                seats and working-group leads. Real names, bios, and verified cryptographic
                signing keys will populate once the initial assembly confirms candidates.
                Per our Conflict of Interest Policy, any active, past, or commercial affiliations
                with MST commercial spin-offs must be declared in the disclosure section of each profile.
              </p>
            </div>
          </motion.div>

          {/* ── Council Section ── */}
          <section className="mb-14 sm:mb-20">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-3">
              <div>
                <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.22em] font-semibold text-[#9E7D3B] select-none font-[var(--font-outfit)] mb-1.5">
                  Elected Leadership
                </p>
                <h2
                  style={{
                    fontFamily:
                      "var(--font-playfair), 'Playfair Display', Georgia, serif",
                  }}
                  className="text-2xl sm:text-3xl lg:text-[34px] font-normal text-[#0D1117] tracking-[-0.015em]"
                >
                  Governing Council
                </h2>
              </div>
              <span className="text-[12.5px] sm:text-[13px] text-[#596273] font-medium">
                Mandatory Dual-Role Disclosures
              </span>
            </div>

            {/* 4 Council Member Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 items-stretch">
              {councilMembers.map((member, idx) => {
                const Icon = member.icon;
                return (
                  <motion.div
                    key={member.seat}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.5,
                      delay: 0.08 + idx * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="relative rounded-[22px] border border-slate-200/90 bg-white p-6 sm:p-7 shadow-[0_8px_24px_-4px_rgba(15,23,42,0.06),inset_0_1px_0_rgba(255,255,255,0.9)] overflow-hidden flex flex-col justify-between"
                  >
                    {/* Colored top accent stripe */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[3.5px]"
                      style={{ backgroundColor: member.accent }}
                    />

                    <div>
                      {/* Top Row: Seat & Icon */}
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <div className="flex items-center gap-2.5">
                          <div
                            className="w-9 h-9 rounded-lg flex items-center justify-center"
                            style={{
                              background: member.badgeBg,
                              border: `1px solid ${member.badgeBorder}`,
                              color: member.badgeText,
                            }}
                          >
                            <Icon className="w-4.5 h-4.5" />
                          </div>
                          <span className="text-[11.5px] font-bold tabular-nums px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 select-none">
                            {member.seat}
                          </span>
                        </div>

                        <span
                          className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                          style={{
                            background: member.badgeBg,
                            color: member.badgeText,
                            border: `1px solid ${member.badgeBorder}`,
                          }}
                        >
                          Seat in Formation
                        </span>
                      </div>

                      {/* Name & Role */}
                      <h3
                        style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
                        className="text-xl font-bold text-[#0D1117] tracking-tight mb-1"
                      >
                        {member.name}
                      </h3>

                      <p className="text-[13px] font-semibold text-[#8E6317] mb-1">
                        {member.role}
                      </p>

                      <p className="text-[12.5px] text-[#64748B] mb-4">
                        Affiliation: {member.affiliation}
                      </p>

                      {/* Domain Focus */}
                      <p className="text-[13px] leading-[1.62] text-[#475569] mb-4">
                        {member.domain}
                      </p>
                    </div>

                    {/* Disclosure Box */}
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-[12px] leading-relaxed text-[#475569]">
                      <span className="font-bold text-slate-800 uppercase tracking-wider text-[10px] block mb-0.5">
                        Statutory Conflict Disclosure:
                      </span>
                      {member.disclosure}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* ── Working Groups Section ── */}
          <section className="mb-14 sm:mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-8 sm:mb-10">
              <div className="lg:col-span-7">
                <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.22em] font-semibold text-[#9E7D3B] select-none font-[var(--font-outfit)] mb-2">
                  Specialized Committees
                </p>
                <h2
                  style={{
                    fontFamily:
                      "var(--font-playfair), 'Playfair Display', Georgia, serif",
                  }}
                  className="text-2xl sm:text-3xl lg:text-[36px] font-normal text-[#0D1117] tracking-[-0.015em] leading-[1.18]"
                >
                  Working Groups
                </h2>
              </div>
              <div className="lg:col-span-5 flex items-center lg:pt-8">
                <p className="text-[14px] sm:text-[15px] leading-[1.68] text-[#373E4A]">
                  Domain-specific committees that evaluate grant requests, draft protocol
                  specifications, and monitor network health before council ratification.
                </p>
              </div>
            </div>

            {/* 3 Working Groups Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
              {workingGroups.map((wg, idx) => {
                const Icon = wg.icon;
                return (
                  <motion.div
                    key={wg.id}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.5,
                      delay: 0.08 + idx * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="relative rounded-[22px] border border-slate-200/90 bg-white p-6 sm:p-7 shadow-[0_8px_24px_-4px_rgba(15,23,42,0.06),inset_0_1px_0_rgba(255,255,255,0.9)] overflow-hidden flex flex-col justify-between"
                  >
                    {/* Top colored accent stripe */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[3.5px]"
                      style={{ backgroundColor: wg.accent }}
                    />

                    <div>
                      {/* Top Row: Icon + ID */}
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{
                            background: wg.badgeBg,
                            border: `1px solid ${wg.badgeBorder}`,
                            color: wg.badgeText,
                          }}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[11.5px] font-bold tabular-nums px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 select-none">
                          {wg.id}
                        </span>
                      </div>

                      <h3
                        style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
                        className="text-xl font-bold text-[#0D1117] tracking-tight mb-1"
                      >
                        {wg.title}
                      </h3>

                      <p className="text-[12.5px] font-semibold text-[#8E6317] mb-3">
                        Lead: {wg.lead}
                      </p>

                      <p className="text-[13px] leading-[1.62] text-[#475569] mb-4">
                        {wg.scope}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 text-[11.5px] text-[#64748B]">
                      {wg.cadence}
                    </div>
                  </motion.div>
                );
              })}
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
                Working Group Participation
              </p>
              <h2
                style={{ fontFamily: "var(--font-jost), 'Jost', sans-serif" }}
                className="text-2xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white leading-tight mb-4"
              >
                Interested in serving on a working group?
              </h2>
              <p className="text-[14.5px] sm:text-[15.5px] leading-relaxed text-slate-300 mb-8 max-w-2xl font-normal">
                Working groups welcome external peer reviewers, academics, and protocol
                maintainers. Learn more about committee charters or submit an expression of interest.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
                <Link
                  href="/governance"
                  className="inline-flex items-center justify-center gap-2 h-[42px] sm:h-[44px] px-6 rounded-[7px] bg-[#F5BA13] hover:bg-[#E5AC0B] text-[#121417] font-semibold text-[13.5px] sm:text-[14px] tracking-normal transition-all duration-200 active:scale-[0.98] shadow-sm cursor-pointer"
                >
                  <span>Governance Charter</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/#talk-to-us"
                  className="inline-flex items-center justify-center gap-2 h-[42px] sm:h-[44px] px-6 rounded-[7px] border border-white/20 hover:border-white/40 hover:bg-white/5 text-white font-medium text-[13.5px] sm:text-[14px] transition-all duration-200"
                >
                  <span>Contact the Council</span>
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
