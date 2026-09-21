"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  FileSpreadsheet,
  Coins,
  Building2,
  Lock,
  Activity,
  AlertCircle,
  FileText,
  Clock,
  ExternalLink,
  Server,
  Layers,
  CheckCircle2,
  Landmark,
} from "lucide-react";
import { Navbar, Footer, ScrollToTop } from "@/components";

/* ------------------------------------------------------------------ */
/*  Treasury Disclosure Cards                                         */
/* ------------------------------------------------------------------ */
const treasuryCards = [
  {
    label: "Total Treasury (public)",
    value: "[TBD]",
    status: "Under Audit",
    detail: "Combined liquid reserves, stable treasury assets, and protocol endowment.",
    accent: "#2563EB",
    badgeBg: "#EFF6FF",
    badgeBorder: "#DBEAFE",
    badgeText: "#1D4ED8",
    icon: Landmark,
  },
  {
    label: "Sources of Funds",
    value: "Genesis Endowment",
    status: "Charter Allocation",
    detail: "Initial protocol foundation allocation and community treasury trust.",
    accent: "#0F172A",
    badgeBg: "#F1F5F9",
    badgeBorder: "#E2E8F0",
    badgeText: "#334155",
    icon: Coins,
  },
  {
    label: "YTD Disbursed",
    value: "$0.00",
    status: "Inaugural Round",
    detail: "Total grants and operational disbursements deployed in current fiscal year.",
    accent: "#B88728",
    badgeBg: "#FEF9EE",
    badgeBorder: "#FDE68A",
    badgeText: "#9A6B1A",
    icon: FileSpreadsheet,
  },
];

export default function TransparencyPage() {
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
            <span className="text-[#0D1117] font-semibold">Transparency</span>
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
                What we fund. What we hold. What we spend.
              </h1>

              {/* Subtitle Description */}
              <p
                style={{ fontFamily: "var(--font-sans), 'Plus Jakarta Sans', sans-serif" }}
                className="text-[16px] sm:text-[18px] lg:text-[19px] leading-[1.65] text-[#2C333E] font-normal tracking-[-0.01em] max-w-3xl"
              >
                An annual accounting of SmartAngelos’ stewardship — not a marketing dashboard.
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
                Transparency Advisory · Inaugural Operating Year
              </p>
              <p className="text-[13.5px] sm:text-[14px] leading-[1.65] text-[#5A4112] font-normal">
                <strong>Note:</strong> SmartAngelos is in the process of concluding its founding
                statutory setup. Financial ledger figures will be populated and reconciled
                monthly as the inaugural grants cohort is disbursed and confirmed by our
                independent accounting auditor.
              </p>
            </div>
          </motion.div>

          {/* ── Treasury Holdings ── */}
          <section className="mb-14 sm:mb-20">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-3">
              <div>
                <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.22em] font-semibold text-[#9E7D3B] select-none font-[var(--font-outfit)] mb-1.5">
                  Balance Sheet Overview
                </p>
                <h2
                  style={{
                    fontFamily:
                      "var(--font-playfair), 'Playfair Display', Georgia, serif",
                  }}
                  className="text-2xl sm:text-3xl lg:text-[34px] font-normal text-[#0D1117] tracking-[-0.015em]"
                >
                  Treasury Holdings
                </h2>
              </div>
              <span className="text-[12.5px] sm:text-[13px] text-[#596273] font-medium">
                Public Multi-Sig Custody
              </span>
            </div>

            {/* 3 Treasury Metric Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
              {treasuryCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.label}
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
                      style={{ backgroundColor: card.accent }}
                    />

                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{
                            background: card.badgeBg,
                            border: `1px solid ${card.badgeBorder}`,
                            color: card.badgeText,
                          }}
                        >
                          <Icon className="w-5 h-5" strokeWidth={2.1} />
                        </div>
                        <span
                          className="text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider"
                          style={{
                            background: card.badgeBg,
                            color: card.badgeText,
                            border: `1px solid ${card.badgeBorder}`,
                          }}
                        >
                          {card.status}
                        </span>
                      </div>

                      <p className="text-[12.5px] font-semibold text-[#64748B] uppercase tracking-[0.14em] font-[var(--font-outfit)] mb-1">
                        {card.label}
                      </p>
                      <h3
                        style={{ fontFamily: "var(--font-jost), 'Jost', sans-serif" }}
                        className="text-2xl sm:text-[28px] font-bold text-[#0D1117] tracking-tight mb-2"
                      >
                        {card.value}
                      </h3>
                    </div>

                    <p className="text-[13px] leading-[1.6] text-[#475569] font-normal pt-3 border-t border-slate-100">
                      {card.detail}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* ── Annual Reports Section ── */}
          <section className="mb-14 sm:mb-20">
            <div className="rounded-[28px] sm:rounded-[36px] bg-white border border-slate-200/90 p-7 sm:p-10 lg:p-12 shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
              <div className="max-w-2xl mb-8">
                <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.22em] font-semibold text-[#9E7D3B] select-none font-[var(--font-outfit)] mb-1.5">
                  Statutory Reporting
                </p>
                <h2
                  style={{
                    fontFamily:
                      "var(--font-playfair), 'Playfair Display', Georgia, serif",
                  }}
                  className="text-2xl sm:text-3xl lg:text-[34px] font-normal text-[#0D1117] tracking-[-0.015em] mb-3"
                >
                  Annual Reports
                </h2>
                <p className="text-[14px] sm:text-[15px] text-[#475569] leading-relaxed">
                  Published accounts, balance sheets, and governance records audited by an
                  independent external accounting firm.
                </p>
              </div>

              {/* Empty State Card */}
              <div className="p-8 sm:p-10 rounded-[22px] bg-[#FAF7F2] border border-amber-200/70 text-center flex flex-col items-center justify-center max-w-xl mx-auto">
                <Clock className="w-10 h-10 text-[#B88728] mb-3 opacity-80" />
                <h3
                  style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
                  className="text-xl font-bold text-[#0D1117] mb-2"
                >
                  First Annual Report in Preparation
                </h3>
                <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-[#5A4112] max-w-md">
                  No annual report has been published yet. Our first report will follow our
                  first full year of operation and will include full audited financial statements.
                </p>
              </div>
            </div>
          </section>

          {/* ── Full Public Grants Ledger ── */}
          <section className="mb-14 sm:mb-20">
            <div className="rounded-[28px] sm:rounded-[36px] bg-white border border-slate-200/90 p-7 sm:p-10 lg:p-12 shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-6 border-b border-slate-100 gap-4">
                <div>
                  <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.22em] font-semibold text-[#9E7D3B] select-none font-[var(--font-outfit)] mb-1.5">
                    Disbursement Ledger
                  </p>
                  <h2
                    style={{
                      fontFamily:
                        "var(--font-playfair), 'Playfair Display', Georgia, serif",
                    }}
                    className="text-2xl sm:text-3xl lg:text-[34px] font-normal text-[#0D1117] tracking-[-0.015em]"
                  >
                    Full Public Grants Ledger
                  </h2>
                </div>
                <span className="text-[12.5px] sm:text-[13px] text-[#596273] font-medium">
                  Live On-Chain Disclosures
                </span>
              </div>

              {/* Empty Ledger Table Placeholder */}
              <div className="rounded-[18px] border border-slate-200/80 overflow-hidden bg-[#F8FAFC]">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-[13px]">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-100/70 text-[11px] uppercase tracking-wider font-semibold text-slate-600 font-[var(--font-outfit)]">
                        <th className="py-3.5 px-4 sm:px-6">Grant ID</th>
                        <th className="py-3.5 px-4 sm:px-6">Recipient</th>
                        <th className="py-3.5 px-4 sm:px-6">Category</th>
                        <th className="py-3.5 px-4 sm:px-6">Status</th>
                        <th className="py-3.5 px-4 sm:px-6 text-right">Committed</th>
                        <th className="py-3.5 px-4 sm:px-6 text-right">Disbursed</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan={6} className="py-12 text-center text-slate-500 font-normal">
                          <p className="font-semibold text-slate-800 text-[14.5px] mb-1">
                            No grants have been disbursed yet
                          </p>
                          <p className="text-[13px] text-slate-500 max-w-sm mx-auto">
                            This table will populate automatically as Cohort 01 grants are awarded and milestone tranches are executed.
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* ── Validator Delegation List ── */}
          <section className="mb-14 sm:mb-20">
            <div className="rounded-[28px] sm:rounded-[36px] bg-white border border-slate-200/90 p-7 sm:p-10 lg:p-12 shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-6 border-b border-slate-100 gap-4">
                <div>
                  <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.22em] font-semibold text-[#9E7D3B] select-none font-[var(--font-outfit)] mb-1.5">
                    Consensus Staking
                  </p>
                  <h2
                    style={{
                      fontFamily:
                        "var(--font-playfair), 'Playfair Display', Georgia, serif",
                    }}
                    className="text-2xl sm:text-3xl lg:text-[34px] font-normal text-[#0D1117] tracking-[-0.015em]"
                  >
                    Validator Delegation List
                  </h2>
                </div>
                <span className="text-[12.5px] sm:text-[13px] text-[#596273] font-medium">
                  Stake Allocation Register
                </span>
              </div>

              {/* Empty State Banner */}
              <div className="p-8 sm:p-10 rounded-[22px] bg-[#FAF7F2] border border-amber-200/70 text-center flex flex-col items-center justify-center max-w-xl mx-auto">
                <Server className="w-10 h-10 text-[#B88728] mb-3 opacity-80" />
                <h3
                  style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
                  className="text-xl font-bold text-[#0D1117] mb-2"
                >
                  No delegations yet.
                </h3>
                <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-[#5A4112] max-w-md mb-5">
                  Foundation stake allocations will be published here alongside node operator
                  monikers, geographic jurisdictions, and performance uptime metrics.
                </p>

                <Link
                  href="/validators"
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#8E6317] hover:underline"
                >
                  <span>Review Validator Program</span>
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
                Verifiable Trust
              </p>
              <h2
                style={{ fontFamily: "var(--font-jost), 'Jost', sans-serif" }}
                className="text-2xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white leading-tight mb-4"
              >
                Everything in public. Reconciled monthly.
              </h2>
              <p className="text-[14.5px] sm:text-[15.5px] leading-relaxed text-slate-300 mb-8 max-w-2xl font-normal">
                Inspect how every dollar is committed to research, grants, and infrastructure.
                Participate in public assembly discussions and review audited bylaws.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
                <Link
                  href="/governance"
                  className="inline-flex items-center justify-center gap-2 h-[42px] sm:h-[44px] px-6 rounded-[7px] bg-[#F5BA13] hover:bg-[#E5AC0B] text-[#121417] font-semibold text-[13.5px] sm:text-[14px] tracking-normal transition-all duration-200 active:scale-[0.98] shadow-sm cursor-pointer"
                >
                  <span>Governance Record</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/grants#apply"
                  className="inline-flex items-center justify-center gap-2 h-[42px] sm:h-[44px] px-6 rounded-[7px] border border-white/20 hover:border-white/40 hover:bg-white/5 text-white font-medium text-[13.5px] sm:text-[14px] transition-all duration-200"
                >
                  <span>Apply for a Grant</span>
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
