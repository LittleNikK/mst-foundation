"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Cpu,
  Terminal,
  ShieldCheck,
  BookOpen,
  GraduationCap,
  Globe2,
  FileText,
  Users,
  Vote,
  Coins,
  FileCheck2,
  AlertCircle,
  Clock,
  Sparkles,
  Layers,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { Navbar, Footer, ScrollToTop } from "@/components";

/* ------------------------------------------------------------------ */
/*  6 Confirmed Grant Categories                                      */
/* ------------------------------------------------------------------ */
const grantCategories = [
  {
    number: "01",
    title: "Protocol & Core Development",
    description:
      "Improvements, tooling, and infrastructure work on MST Blockchain's core protocol.",
    icon: Cpu,
    accent: "#2563EB",
    badgeBg: "#EFF6FF",
    badgeBorder: "#DBEAFE",
    badgeText: "#1D4ED8",
    glowColor: "rgba(37, 99, 235, 0.08)",
  },
  {
    number: "02",
    title: "Developer Tooling",
    description:
      "SDKs, APIs, explorers, indexers, and infrastructure that lower the barrier to building on MST.",
    icon: Terminal,
    accent: "#4F46E5",
    badgeBg: "#EEF2FF",
    badgeBorder: "#E0E7FF",
    badgeText: "#4338CA",
    glowColor: "rgba(79, 70, 229, 0.08)",
  },
  {
    number: "03",
    title: "Security & Audits",
    description:
      "Independent audits of contracts and infrastructure, plus bug bounty support.",
    icon: ShieldCheck,
    accent: "#0F172A",
    badgeBg: "#F1F5F9",
    badgeBorder: "#E2E8F0",
    badgeText: "#334155",
    glowColor: "rgba(15, 23, 42, 0.06)",
  },
  {
    number: "04",
    title: "Research",
    description:
      "Applied and academic work on consensus, cryptography, governance, and decentralization for the MST ecosystem.",
    icon: BookOpen,
    accent: "#B88728",
    badgeBg: "#FEF9EE",
    badgeBorder: "#FDE68A",
    badgeText: "#9A6B1A",
    glowColor: "rgba(184, 135, 40, 0.08)",
  },
  {
    number: "05",
    title: "Education & Community",
    description:
      "Documentation, workshops, translations, and regional developer communities.",
    icon: GraduationCap,
    accent: "#16A34A",
    badgeBg: "#F0FDF4",
    badgeBorder: "#DCFCE7",
    badgeText: "#15803D",
    glowColor: "rgba(22, 163, 74, 0.08)",
  },
  {
    number: "06",
    title: "Public Goods",
    description:
      "Open-source tools and infrastructure that benefit the wider MST ecosystem, not one company.",
    icon: Globe2,
    accent: "#7C3AED",
    badgeBg: "#F5F3FF",
    badgeBorder: "#EDE9FE",
    badgeText: "#6D28D9",
    glowColor: "rgba(124, 58, 237, 0.08)",
  },
];

/* ------------------------------------------------------------------ */
/*  5-Step Funding Lifecycle Workflow                                 */
/* ------------------------------------------------------------------ */
const fundingWorkflow = [
  {
    step: "01",
    title: "Submit a proposal",
    description: "Detailed scope, budget justification, and milestone timeline filed via the grants portal.",
    icon: FileText,
  },
  {
    step: "02",
    title: "Working group review",
    description: "Technical, security, and ecosystem impact assessment conducted by domain reviewers.",
    icon: Users,
  },
  {
    step: "03",
    title: "Council approval",
    description: "Funding allocations and milestone conditions are formally reviewed, voted on, and recorded.",
    icon: Vote,
  },
  {
    step: "04",
    title: "Milestone disbursement",
    description: "Funds released incrementally against verified, delivered milestones — never lump sums.",
    icon: Coins,
  },
  {
    step: "05",
    title: "Public disclosure",
    description: "Every grant is permanently archived on the public Transparency ledger for all to inspect.",
    icon: FileCheck2,
  },
];

/* ------------------------------------------------------------------ */
/*  Funding Tiers (In Preparation)                                    */
/* ------------------------------------------------------------------ */
const tierCategories = [
  {
    tier: "Tier 1",
    name: "Micro Grants / Exploratory",
    scope: "Proof of concepts, developer tooling bugfixes, localized documentation",
    disbursement: "Single milestone upon verification",
  },
  {
    tier: "Tier 2",
    name: "Project Grants / Applied Work",
    scope: "Production-grade SDKs, protocol indexers, security audits, academic research",
    disbursement: "2–3 phased milestone tranches",
  },
  {
    tier: "Tier 3",
    name: "Strategic Infrastructure",
    scope: "Core client maintenance, critical security infrastructure, consensus research",
    disbursement: "Formal working group oversight & multi-stage audits",
  },
];

export default function GrantsPage() {
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
            <span className="text-[#0D1117] font-semibold">Funding &amp; Grants</span>
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
                Funding the builders of MST
              </h1>

              {/* Subtitle Description */}
              <p
                style={{ fontFamily: "var(--font-sans), 'Plus Jakarta Sans', sans-serif" }}
                className="text-[16px] sm:text-[18px] lg:text-[19px] leading-[1.65] text-[#2C333E] font-normal tracking-[-0.01em] max-w-3xl mb-4"
              >
                SmartAngelos funds individuals and teams building public-good infrastructure,
                tooling, research, and education for the MST ecosystem.
              </p>

              {/* Scope Boundary Callout */}
              <p className="text-[13.5px] sm:text-[14px] leading-[1.6] text-[#64748B] font-medium border-l-2 border-[#B88728]/60 pl-4 max-w-2xl">
                We do not fund speculative projects, token launches, or marketing campaigns.
              </p>
            </div>
          </motion.section>

          {/* ── Grant Categories Grid ── */}
          <section className="mb-14 sm:mb-20">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-3">
              <div>
                <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.22em] font-semibold text-[#9E7D3B] select-none font-[var(--font-outfit)] mb-1.5">
                  Confirmed Tracks
                </p>
                <h2
                  style={{
                    fontFamily:
                      "var(--font-playfair), 'Playfair Display', Georgia, serif",
                  }}
                  className="text-2xl sm:text-3xl lg:text-[34px] font-normal text-[#0D1117] tracking-[-0.015em]"
                >
                  Grant Categories
                </h2>
              </div>
              <span className="text-[12.5px] sm:text-[13px] text-[#596273] font-medium">
                Six Open Focus Areas
              </span>
            </div>

            {/* 6 Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
              {grantCategories.map((cat, idx) => {
                const Icon = cat.icon;
                return (
                  <motion.div
                    key={cat.number}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.5,
                      delay: 0.06 + idx * 0.06,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="group relative flex flex-col justify-between h-full rounded-[22px] border border-slate-200/90 bg-white p-6 sm:p-7 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-300/90 hover:shadow-[0_20px_38px_-8px_rgba(15,23,42,0.12),0_4px_12px_-2px_rgba(15,23,42,0.04)]"
                    style={{
                      background: `radial-gradient(circle at 90% 10%, ${cat.glowColor} 0%, transparent 60%), #FFFFFF`,
                    }}
                  >
                    {/* Top colored accent stripe */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[3.5px] rounded-t-[22px] transition-all duration-300 group-hover:h-[4px]"
                      style={{ backgroundColor: cat.accent }}
                    />

                    <div>
                      {/* Top Row: Icon + Number */}
                      <div className="flex items-center justify-between gap-3 mb-5">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                          style={{
                            background: cat.badgeBg,
                            border: `1px solid ${cat.badgeBorder}`,
                            color: cat.badgeText,
                          }}
                        >
                          <Icon className="w-5 h-5" strokeWidth={2.1} />
                        </div>
                        <span className="text-[12px] font-bold tabular-nums px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 select-none">
                          {cat.number}
                        </span>
                      </div>

                      <h3
                        style={{
                          fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
                        }}
                        className="text-xl font-bold text-[#0D1117] leading-[1.25] tracking-tight mb-2.5 group-hover:text-[#090D14]"
                      >
                        {cat.title}
                      </h3>

                      <p className="text-[13.5px] leading-[1.65] text-[#475569] font-normal">
                        {cat.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between text-[12px] font-semibold text-[#8E6317]">
                      <span>Open for proposals</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* ── How Funding Works (5 Steps) ── */}
          <section className="mb-14 sm:mb-20">
            <div className="max-w-3xl mb-8 sm:mb-10">
              <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.22em] font-semibold text-[#9E7D3B] select-none font-[var(--font-outfit)] mb-2">
                Process &amp; Governance
              </p>
              <h2
                style={{
                  fontFamily:
                    "var(--font-playfair), 'Playfair Display', Georgia, serif",
                }}
                className="text-2xl sm:text-3xl lg:text-[34px] font-normal text-[#0D1117] tracking-[-0.015em] mb-3"
              >
                How Funding Works
              </h2>
              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-relaxed">
                A milestone-gated pipeline ensuring transparent review, community alignment,
                and public accounting at every stage.
              </p>
            </div>

            {/* 5-Step Horizontal Workflow */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 mb-5">
              {fundingWorkflow.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.5,
                      delay: 0.06 + idx * 0.06,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="relative p-5 sm:p-6 rounded-[22px] bg-white border border-slate-200/90 shadow-[0_8px_24px_-4px_rgba(15,23,42,0.06)] flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center border border-slate-200">
                          <Icon className="w-4.5 h-4.5" />
                        </div>
                        <span className="text-[11px] font-bold tabular-nums px-2 py-0.5 rounded-md bg-[#FAF7F2] text-[#8E6317] border border-amber-200/60 select-none">
                          {item.step}
                        </span>
                      </div>

                      <h3
                        style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
                        className="text-[16px] font-bold text-[#0D1117] mb-2 tracking-tight"
                      >
                        {item.title}
                      </h3>

                      <p className="text-[12.5px] leading-[1.6] text-[#475569]">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Note regarding Council Approval */}
            <div className="p-4 rounded-[16px] bg-amber-50/80 border border-amber-200/80 text-[12.5px] sm:text-[13px] leading-relaxed text-[#5A4112] flex items-start gap-3">
              <AlertCircle className="w-4.5 h-4.5 text-[#B88728] shrink-0 mt-0.5" />
              <div>
                <strong>Governance Advisory:</strong> Step 3 assumes a real Council. While
                the formal Council election cycle is finalized, grants undergo rigorous technical
                peer review and approval by Foundation maintainers under the same unredacted
                transparency ledger.
              </div>
            </div>
          </section>

          {/* ── Funding Tiers & Past Recipients ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 sm:mb-20 items-stretch">
            {/* Funding Tiers (Left 7 Cols) */}
            <div className="lg:col-span-7 rounded-[28px] bg-white border border-slate-200/90 p-7 sm:p-9 shadow-[0_16px_40px_rgba(15,23,42,0.06)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-3 mb-2">
                  <p className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#9E7D3B] select-none font-[var(--font-outfit)]">
                    Allocation Tranches
                  </p>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
                    Not Published
                  </span>
                </div>

                <h2
                  style={{
                    fontFamily:
                      "var(--font-playfair), 'Playfair Display', Georgia, serif",
                  }}
                  className="text-2xl sm:text-3xl font-normal text-[#0D1117] tracking-tight mb-3"
                >
                  Funding Tiers
                </h2>

                <p className="text-[13.5px] text-[#475569] leading-relaxed mb-6">
                  Dollar thresholds and budget caps are currently being finalized with the
                  treasury working group. Below is the proposed structural tier breakdown:
                </p>

                <div className="space-y-3.5 mb-6">
                  {tierCategories.map((t) => (
                    <div
                      key={t.tier}
                      className="p-4 rounded-[16px] bg-[#F8FAFC] border border-slate-200/70"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[11.5px] font-bold uppercase tracking-wider text-[#B88728] font-[var(--font-outfit)]">
                          {t.tier}
                        </span>
                        <span className="text-[11px] font-medium text-slate-500">
                          {t.disbursement}
                        </span>
                      </div>
                      <h4 className="text-[15px] font-bold text-[#0D1117] mb-1">
                        {t.name}
                      </h4>
                      <p className="text-[12.5px] text-[#475569] leading-relaxed">
                        {t.scope}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-[12px] text-[#64748B] italic pt-2 border-t border-slate-100">
                Amounts will be published ahead of Round 01 intake.
              </p>
            </div>

            {/* Past Recipients (Right 5 Cols) */}
            <div className="lg:col-span-5 rounded-[28px] bg-white border border-slate-200/90 p-7 sm:p-9 shadow-[0_16px_40px_rgba(15,23,42,0.06)] flex flex-col justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#9E7D3B] select-none font-[var(--font-outfit)] mb-2">
                  Award Archive
                </p>
                <h2
                  style={{
                    fontFamily:
                      "var(--font-playfair), 'Playfair Display', Georgia, serif",
                  }}
                  className="text-2xl sm:text-3xl font-normal text-[#0D1117] tracking-tight mb-3"
                >
                  Past Recipients
                </h2>

                <p className="text-[13.5px] text-[#475569] leading-relaxed mb-6">
                  The Foundation maintains an open, permanent ledger of every grant
                  awarded, including recipient team, milestone schedule, and total compensation.
                </p>

                {/* Empty State Banner */}
                <div className="p-6 rounded-[20px] bg-[#FAF7F2] border border-amber-200/70 text-center flex flex-col items-center justify-center mb-4">
                  <Clock className="w-8 h-8 text-[#B88728] mb-3 opacity-80" />
                  <h4 className="text-[16px] font-bold text-[#0D1117] mb-1.5">
                    Inaugural Cohort Forming
                  </h4>
                  <p className="text-[13px] text-[#5A4112] leading-relaxed max-w-xs mb-4">
                    No grants have been awarded yet. Check back after our first funding
                    round, or apply now to be part of Cohort 01.
                  </p>

                  <a
                    href="#apply"
                    className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#8E6317] hover:underline"
                  >
                    <span>Apply now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="text-[12px] text-[#64748B] pt-4 border-t border-slate-100 flex items-center justify-between">
                <span>Total Grants Awarded</span>
                <span className="font-mono font-bold text-slate-800">$0.00 (Pending Round 1)</span>
              </div>
            </div>
          </div>

          {/* ── Apply CTA Banner ── */}
          <section
            id="apply"
            className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden bg-[#0D1117] text-white p-8 sm:p-12 lg:p-14 shadow-xl scroll-mt-28"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle_at_center,rgba(245,186,19,0.22)_0%,transparent_70%)] blur-2xl select-none"
            />

            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[#F5BA13] text-[11px] font-semibold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Round 01 Intake</span>
              </div>

              <h2
                style={{ fontFamily: "var(--font-jost), 'Jost', sans-serif" }}
                className="text-3xl sm:text-4xl lg:text-[48px] font-bold tracking-tight text-white leading-tight mb-4"
              >
                Ready to apply?
              </h2>

              <p className="text-[15px] sm:text-[17px] leading-relaxed text-slate-300 mb-8 max-w-2xl font-normal">
                Every grant we award is disclosed publicly — amount, recipient, and purpose.
                If you are building protocol infrastructure, tooling, or research for MST,
                we want to review your proposal.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
                <Link
                  href="/#talk-to-us"
                  className="inline-flex items-center justify-center gap-2 h-[44px] sm:h-[46px] px-7 rounded-[7px] bg-[#F5BA13] hover:bg-[#E5AC0B] text-[#121417] font-semibold text-[14px] tracking-normal transition-all duration-200 active:scale-[0.98] shadow-sm cursor-pointer"
                >
                  <span>Submit Grant Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 h-[44px] sm:h-[46px] px-6 rounded-[7px] border border-white/20 hover:border-white/40 hover:bg-white/5 text-white font-medium text-[14px] transition-all duration-200"
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
