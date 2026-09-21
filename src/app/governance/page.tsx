"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  FileText,
  Download,
  AlertCircle,
  Users,
  CheckCircle2,
  Scale,
  Landmark,
  FileCheck2,
  Vote,
  Clock,
  ExternalLink,
} from "lucide-react";
import { Navbar, Footer, ScrollToTop } from "@/components";

/* ------------------------------------------------------------------ */
/*  Council Seats Data                                                */
/* ------------------------------------------------------------------ */
const councilSeats = [
  {
    seat: "Seat 01",
    role: "Protocol & Technical Architecture",
    domain: "Core protocol roadmaps, security reviews & node specs",
    status: "Nomination / Confirmation in progress",
    placeholder: "Council Member, Technical",
    accent: "#2563EB",
    badgeBg: "#EFF6FF",
    badgeBorder: "#DBEAFE",
    badgeText: "#1D4ED8",
  },
  {
    seat: "Seat 02",
    role: "Treasury & Economic Assurance",
    domain: "Asset reserves, grant allocations & monthly reconciliations",
    status: "Nomination / Confirmation in progress",
    placeholder: "Council Member, Treasury",
    accent: "#B88728",
    badgeBg: "#FEF9EE",
    badgeBorder: "#FDE68A",
    badgeText: "#9A6B1A",
  },
  {
    seat: "Seat 03",
    role: "Governance & Legal Compliance",
    domain: "Charter adherence, statutory filings & conflict oversight",
    status: "Nomination / Confirmation in progress",
    placeholder: "Council Member, Governance",
    accent: "#0F172A",
    badgeBg: "#F1F5F9",
    badgeBorder: "#E2E8F0",
    badgeText: "#334155",
  },
  {
    seat: "Seat 04",
    role: "Community & Ecosystem Representation",
    domain: "Elected directly by open assembly of registered members",
    status: "Nomination / Confirmation in progress",
    placeholder: "Council Member, Community",
    accent: "#16A34A",
    badgeBg: "#F0FDF4",
    badgeBorder: "#DCFCE7",
    badgeText: "#15803D",
  },
];

/* ------------------------------------------------------------------ */
/*  4-Stage Decision-Making Process                                   */
/* ------------------------------------------------------------------ */
const processStages = [
  {
    step: "01",
    title: "Proposal submitted",
    description:
      "Public RFC or formal proposal filed with open specifications, budget breakdown, and impact rationale.",
    icon: FileText,
  },
  {
    step: "02",
    title: "Working group review",
    description:
      "Domain committees and peer maintainers evaluate feasibility, security audit requirements, and milestones.",
    icon: Users,
  },
  {
    step: "03",
    title: "Council vote",
    description:
      "Formal roll-call vote with mandatory conflict-of-interest disclosures recorded for each seat.",
    icon: Vote,
  },
  {
    step: "04",
    title: "Published in report",
    description:
      "Full voting record, meeting minutes, and disbursements published to the permanent public register.",
    icon: FileCheck2,
  },
];

/* ------------------------------------------------------------------ */
/*  Governance Document Downloads                                     */
/* ------------------------------------------------------------------ */
const downloads = [
  {
    title: "Foundation Charter",
    filename: "smartangelos-charter-v1.0.pdf",
    description: "The founding constitutional bylaws, scope of powers, and non-profit public mandate.",
    tag: "Constitutional",
    accent: "#2563EB",
  },
  {
    title: "Conflict of Interest Policy",
    filename: "conflict-of-interest-policy.pdf",
    description: "Mandatory disclosure rules, recusal procedures, and statutory compliance standards.",
    tag: "Ethics & Compliance",
    accent: "#B88728",
  },
];

export default function GovernancePage() {
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
            <span className="text-[#0D1117] font-semibold">Governance</span>
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
                How the Foundation is governed
              </h1>

              {/* Subtitle Description */}
              <p
                style={{ fontFamily: "var(--font-sans), 'Plus Jakarta Sans', sans-serif" }}
                className="text-[16px] sm:text-[18px] lg:text-[19px] leading-[1.65] text-[#2C333E] font-normal tracking-[-0.01em] max-w-3xl"
              >
                A governing council oversees grant approvals, treasury policy, and
                validator programs. Every council member discloses conflicts of interest
                before a vote.
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
                Governance Advisory Note · Formation Status
              </p>
              <p className="text-[13.5px] sm:text-[14px] leading-[1.65] text-[#5A4112] font-normal">
                <strong>Note:</strong> This entire page assumes a formally constituted
                Council that reviews and votes on decisions. As SmartAngelos completes its
                formal transition into an elected community council, decisions are currently
                stewarded by interim protocol maintainers under the same transparent
                disclosure principles outlined below.
              </p>
            </div>
          </motion.div>

          {/* ── Governing Council ── */}
          <section className="mb-14 sm:mb-20">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-3">
              <div>
                <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.22em] font-semibold text-[#9E7D3B] select-none font-[var(--font-outfit)] mb-1.5">
                  The Council
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
                Four Seats · Elected Annually · Public Roll-Call
              </span>
            </div>

            {/* 4 Council Seats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
              {councilSeats.map((seat, idx) => (
                <motion.div
                  key={seat.seat}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.5,
                    delay: 0.08 + idx * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative rounded-[22px] border border-slate-200/90 bg-white p-6 shadow-[0_8px_24px_-4px_rgba(15,23,42,0.06),inset_0_1px_0_rgba(255,255,255,0.9)] overflow-hidden flex flex-col justify-between hover:border-slate-300 transition-colors"
                >
                  {/* Colored top accent stripe */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[3.5px]"
                    style={{ backgroundColor: seat.accent }}
                  />

                  <div>
                    {/* Seat & Status Pill */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-[11.5px] font-bold tabular-nums px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 select-none">
                        {seat.seat}
                      </span>
                      <span
                        className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full"
                        style={{
                          background: seat.badgeBg,
                          border: `1px solid ${seat.badgeBorder}`,
                          color: seat.badgeText,
                        }}
                      >
                        Pending
                      </span>
                    </div>

                    {/* Placeholder Name */}
                    <div className="w-11 h-11 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 font-semibold text-sm mb-3">
                      {seat.seat.replace("Seat ", "S")}
                    </div>

                    <h3
                      style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
                      className="text-[17px] font-bold text-[#0D1117] leading-snug mb-1"
                    >
                      {seat.placeholder}
                    </h3>

                    <p className="text-[12px] font-semibold uppercase tracking-wider text-[#9E7D3B] font-[var(--font-outfit)] mb-3">
                      {seat.role}
                    </p>

                    <p className="text-[13px] leading-[1.6] text-[#475569] font-normal">
                      {seat.domain}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 text-[11.5px] text-[#64748B]">
                    {seat.status}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ── Conflict of Interest Policy Section ── */}
          <section className="mb-14 sm:mb-20">
            <div className="rounded-[28px] sm:rounded-[36px] bg-white border border-slate-200/90 p-7 sm:p-10 lg:p-12 shadow-[0_16px_40px_rgba(15,23,42,0.06)] overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-7">
                  <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.22em] font-semibold text-[#9E7D3B] select-none font-[var(--font-outfit)] mb-2">
                    Ethics &amp; Transparency
                  </p>
                  <h2
                    style={{
                      fontFamily:
                        "var(--font-playfair), 'Playfair Display', Georgia, serif",
                    }}
                    className="text-2xl sm:text-3xl lg:text-[36px] font-normal text-[#0D1117] tracking-[-0.015em] leading-[1.18] mb-4"
                  >
                    Conflict of Interest Policy
                  </h2>
                  <p className="text-[15px] sm:text-[16px] leading-[1.7] text-[#2C333E] font-normal mb-6">
                    SmartAngelos Council members disclose any financial or professional
                    interest in a proposal before participating in its review or vote.
                  </p>

                  <div className="space-y-3 mb-8">
                    {[
                      "Mandatory declaration filed in advance of working group evaluation",
                      "Complete recusal from voting on proposals where material interest exists",
                      "All declared affiliations permanently recorded in published minutes",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2.5 text-[13.5px] sm:text-[14px] text-[#475569]">
                        <CheckCircle2 className="w-4.5 h-4.5 text-[#B88728] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#downloads"
                    className="inline-flex items-center gap-2 h-[42px] sm:h-[44px] px-6 rounded-[7px] bg-[#F5BA13] hover:bg-[#E5AC0B] text-[#121417] font-semibold text-[13.5px] sm:text-[14px] transition-all duration-200 active:scale-[0.98] shadow-sm cursor-pointer"
                  >
                    <span>Download Policy (PDF)</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Right Decorative Policy Preview Card */}
                <div className="lg:col-span-5">
                  <div className="rounded-[20px] bg-[#F8FAFC] border border-slate-200 p-6 sm:p-7 shadow-xs">
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200/80">
                      <div className="flex items-center gap-2.5">
                        <Scale className="w-5 h-5 text-[#B88728]" />
                        <span className="text-[13px] font-bold text-[#0D1117]">
                          Code of Conduct §4.2
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-slate-500">
                        EST. 2026
                      </span>
                    </div>

                    <p className="text-[12.5px] leading-[1.65] text-[#475569] italic mb-4">
                      &ldquo;No council member may vote upon, or exercise unilateral
                      discretion regarding, any grant allocation, vendor procurement, or
                      validator nomination where direct or indirect commercial benefit is
                      realized.&rdquo;
                    </p>

                    <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11.5px] text-slate-500 font-medium">
                      <span>Public record</span>
                      <span className="text-emerald-700 font-semibold">Enforced</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Decision-Making Process ── */}
          <section className="mb-14 sm:mb-20">
            <div className="max-w-3xl mb-8 sm:mb-10">
              <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.22em] font-semibold text-[#9E7D3B] select-none font-[var(--font-outfit)] mb-2">
                Standard Pipeline
              </p>
              <h2
                style={{
                  fontFamily:
                    "var(--font-playfair), 'Playfair Display', Georgia, serif",
                }}
                className="text-2xl sm:text-3xl lg:text-[34px] font-normal text-[#0D1117] tracking-[-0.015em] mb-3"
              >
                Decision-Making Process
              </h2>
              <p className="text-[14px] sm:text-[15px] text-[#475569] leading-relaxed">
                From initial submission to final public archiving, every allocation and
                policy change moves through four structured gates.
              </p>
            </div>

            {/* 4-Step Process Pipeline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {processStages.map((stage, idx) => {
                const Icon = stage.icon;
                return (
                  <motion.div
                    key={stage.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.5,
                      delay: 0.08 + idx * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="relative p-6 rounded-[22px] bg-white border border-slate-200/90 shadow-[0_8px_24px_-4px_rgba(15,23,42,0.06)] flex flex-col justify-between"
                  >
                    <div>
                      {/* Step Indicator + Icon */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center border border-slate-200/80">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[12px] font-bold tabular-nums px-2.5 py-0.5 rounded-md bg-[#FAF7F2] text-[#8E6317] border border-amber-200/60 select-none">
                          Step {stage.step}
                        </span>
                      </div>

                      <h3
                        style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
                        className="text-[18px] font-bold text-[#0D1117] mb-2 tracking-tight"
                      >
                        {stage.title}
                      </h3>

                      <p className="text-[13px] leading-[1.65] text-[#475569]">
                        {stage.description}
                      </p>
                    </div>

                    {idx < processStages.length - 1 && (
                      <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-slate-300">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* ── Downloads Section ── */}
          <section id="downloads" className="mb-14 sm:mb-20 scroll-mt-28">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-3">
              <div>
                <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.22em] font-semibold text-[#9E7D3B] select-none font-[var(--font-outfit)] mb-1.5">
                  Governance Artifacts
                </p>
                <h2
                  style={{
                    fontFamily:
                      "var(--font-playfair), 'Playfair Display', Georgia, serif",
                  }}
                  className="text-2xl sm:text-3xl lg:text-[34px] font-normal text-[#0D1117] tracking-[-0.015em]"
                >
                  Downloads
                </h2>
              </div>
              <span className="text-[12.5px] sm:text-[13px] text-[#596273] font-medium">
                Official PDF Publications
              </span>
            </div>

            {/* Document Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {downloads.map((doc) => (
                <div
                  key={doc.title}
                  className="p-6 sm:p-7 rounded-[22px] bg-white border border-slate-200/90 shadow-[0_8px_24px_-4px_rgba(15,23,42,0.06)] flex flex-col justify-between hover:border-slate-300 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800 border border-slate-200">
                        <FileText className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
                        {doc.tag}
                      </span>
                    </div>

                    <h3
                      style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
                      className="text-xl font-bold text-[#0D1117] mb-1.5 tracking-tight"
                    >
                      {doc.title}
                    </h3>

                    <p className="text-[13px] leading-[1.62] text-[#475569] mb-5">
                      {doc.description}
                    </p>
                  </div>

                  <a
                    href={`/documents/${doc.filename}`}
                    className="inline-flex items-center justify-between w-full h-[40px] px-4 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-[13px] font-semibold text-[#0D1117] transition-colors"
                  >
                    <span className="font-mono text-[12px]">{doc.filename}</span>
                    <Download className="w-4 h-4 text-slate-500" />
                  </a>
                </div>
              ))}
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
                Accountability
              </p>
              <h2
                style={{ fontFamily: "var(--font-jost), 'Jost', sans-serif" }}
                className="text-2xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white leading-tight mb-4"
              >
                Audited accounts and an open governance record.
              </h2>
              <p className="text-[14.5px] sm:text-[15.5px] leading-relaxed text-slate-300 mb-8 max-w-2xl font-normal">
                Read the charter, inspect council deliberations, and participate as a
                member in future assembly elections.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
                <Link
                  href="/#talk-to-us"
                  className="inline-flex items-center justify-center gap-2 h-[42px] sm:h-[44px] px-6 rounded-[7px] bg-[#F5BA13] hover:bg-[#E5AC0B] text-[#121417] font-semibold text-[13.5px] sm:text-[14px] tracking-normal transition-all duration-200 active:scale-[0.98] shadow-sm cursor-pointer"
                >
                  <span>Become a Member</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 h-[42px] sm:h-[44px] px-6 rounded-[7px] border border-white/20 hover:border-white/40 hover:bg-white/5 text-white font-medium text-[13.5px] sm:text-[14px] transition-all duration-200"
                >
                  <span>About the Foundation</span>
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
