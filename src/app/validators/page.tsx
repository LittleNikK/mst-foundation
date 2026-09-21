"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Server,
  Globe2,
  Activity,
  Cpu,
  AlertCircle,
  Lock,
  Layers,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Zap,
} from "lucide-react";
import { Navbar, Footer, ScrollToTop } from "@/components";

/* ------------------------------------------------------------------ */
/*  Network Health Dashboard Metrics                                  */
/* ------------------------------------------------------------------ */
const healthMetrics = [
  {
    label: "Validator Count",
    value: "128 Nodes",
    status: "Target Active Set",
    detail: "Independent node operators maintaining consensus",
    accent: "#2563EB",
    badgeBg: "#EFF6FF",
    badgeBorder: "#DBEAFE",
    badgeText: "#1D4ED8",
  },
  {
    label: "Geographic Spread",
    value: "24 Countries",
    status: "Multi-Continental",
    detail: "Nodes distributed across 5 continents to prevent regional outages",
    accent: "#0F172A",
    badgeBg: "#F1F5F9",
    badgeBorder: "#E2E8F0",
    badgeText: "#334155",
  },
  {
    label: "Stake Distribution",
    value: "Max 4.2%",
    status: "Per Operator Cap",
    detail: "Anti-monopoly delegation ceiling enforced by Foundation bylaws",
    accent: "#B88728",
    badgeBg: "#FEF9EE",
    badgeBorder: "#FDE68A",
    badgeText: "#9A6B1A",
  },
  {
    label: "Nakamoto Coefficient",
    value: "33+",
    status: "Minimum Security Floor",
    detail: "Minimum distinct entities required to disrupt network consensus",
    accent: "#16A34A",
    badgeBg: "#F0FDF4",
    badgeBorder: "#DCFCE7",
    badgeText: "#15803D",
  },
];

/* ------------------------------------------------------------------ */
/*  Delegation Criteria (3 Assessment Pillars)                         */
/* ------------------------------------------------------------------ */
const criteriaPillars = [
  {
    number: "01",
    title: "Uptime and reliability track record",
    summary:
      "Consistent 99.9%+ availability, low block latency, and proactive client upgrade management.",
    details: [
      "Zero slashing history across all past testnet & mainnet epochs",
      "Redundant secondary hot-standby node failover setup",
      "Continuous Prometheus / Grafana telemetry monitoring",
    ],
    icon: Activity,
    topAccent: "#2563EB",
    glowColor: "rgba(37, 99, 235, 0.08)",
  },
  {
    number: "02",
    title: "Security practices and infrastructure",
    summary:
      "Isolated sentry-node architecture, hardware security modules (HSM), and defense against DDoS.",
    details: [
      "Key generation and validator signing keys kept in air-gapped HSMs",
      "Sentry nodes protecting the private validator IP address",
      "Enterprise DDoS mitigation and audited access controls",
    ],
    icon: Lock,
    topAccent: "#0F172A",
    glowColor: "rgba(15, 23, 42, 0.06)",
  },
  {
    number: "03",
    title: "Geographic and client diversity",
    summary:
      "Multi-jurisdictional independence and active deployment of minority consensus clients.",
    details: [
      "Bare-metal and regional ISP deployments outside hyper-scaler clouds",
      "Adoption of secondary client software to avert bug-cascade risks",
      "Distinct legal jurisdictions preventing regulatory single points of failure",
    ],
    icon: Globe2,
    topAccent: "#D99400",
    glowColor: "rgba(217, 148, 0, 0.09)",
  },
];

export default function ValidatorsPage() {
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
            <span className="text-[#0D1117] font-semibold">Validators</span>
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
                Securing the network, together
              </h1>

              {/* Subtitle Description */}
              <p
                style={{ fontFamily: "var(--font-sans), 'Plus Jakarta Sans', sans-serif" }}
                className="text-[16px] sm:text-[18px] lg:text-[19px] leading-[1.65] text-[#2C333E] font-normal tracking-[-0.01em] max-w-3xl"
              >
                The Foundation delegates stake to qualifying node operators based on
                uptime, security, and geographic distribution — prioritizing resilience
                over yield, not a yield product.
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
                Transparency Advisory · Delegation Program Status
              </p>
              <p className="text-[13.5px] sm:text-[14px] leading-[1.65] text-[#5A4112] font-normal">
                <strong>Note:</strong> SmartAngelos’ confirmed function so far is grants.
                This page and the hero’s &ldquo;security/decentralization&rdquo; claim both
                depend on a validator delegation program actually existing. The parameters
                below represent the proposed framework currently in review by technical working
                groups ahead of formal mainnet delegation deployment.
              </p>
            </div>
          </motion.div>

          {/* ── Network Health Dashboard ── */}
          <section className="mb-14 sm:mb-20">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-3">
              <div>
                <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.22em] font-semibold text-[#9E7D3B] select-none font-[var(--font-outfit)] mb-1.5">
                  Consensus Telemetry
                </p>
                <h2
                  style={{
                    fontFamily:
                      "var(--font-playfair), 'Playfair Display', Georgia, serif",
                  }}
                  className="text-2xl sm:text-3xl lg:text-[34px] font-normal text-[#0D1117] tracking-[-0.015em]"
                >
                  Network Health Dashboard
                </h2>
              </div>
              <div className="flex items-center gap-2 text-[12.5px] text-[#596273] font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Proposed Network Parameters</span>
              </div>
            </div>

            {/* 4 Health Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
              {healthMetrics.map((metric, idx) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.5,
                    delay: 0.08 + idx * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative rounded-[22px] border border-slate-200/90 bg-white p-6 shadow-[0_8px_24px_-4px_rgba(15,23,42,0.06),inset_0_1px_0_rgba(255,255,255,0.9)] overflow-hidden flex flex-col justify-between"
                >
                  {/* Colored top accent stripe */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[3.5px]"
                    style={{ backgroundColor: metric.accent }}
                  />

                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11.5px] font-semibold text-[#64748B] uppercase tracking-wider font-[var(--font-outfit)]">
                        {metric.label}
                      </span>
                      <span
                        className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full"
                        style={{
                          background: metric.badgeBg,
                          border: `1px solid ${metric.badgeBorder}`,
                          color: metric.badgeText,
                        }}
                      >
                        {metric.status}
                      </span>
                    </div>

                    <p
                      style={{ fontFamily: "var(--font-jost), 'Jost', sans-serif" }}
                      className="text-2xl sm:text-[28px] font-bold text-[#0D1117] tracking-tight mb-2"
                    >
                      {metric.value}
                    </p>
                  </div>

                  <p className="text-[12.5px] leading-[1.6] text-[#475569] font-normal pt-3 border-t border-slate-100">
                    {metric.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ── Delegation Criteria (Three Pillars) ── */}
          <section className="mb-14 sm:mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-8 sm:mb-10">
              <div className="lg:col-span-7">
                <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.22em] font-semibold text-[#9E7D3B] select-none font-[var(--font-outfit)] mb-2">
                  Selection Framework
                </p>
                <h2
                  style={{
                    fontFamily:
                      "var(--font-playfair), 'Playfair Display', Georgia, serif",
                  }}
                  className="text-2xl sm:text-3xl lg:text-[36px] font-normal text-[#0D1117] tracking-[-0.015em] leading-[1.18]"
                >
                  Delegation Criteria
                </h2>
              </div>
              <div className="lg:col-span-5 flex items-center lg:pt-8">
                <p className="text-[14px] sm:text-[15px] leading-[1.68] text-[#373E4A]">
                  The Foundation allocates community delegation stake based on operational
                  merit and censorship resistance rather than commercial yield promises.
                </p>
              </div>
            </div>

            {/* 3 Pillar Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch mb-6">
              {criteriaPillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={pillar.number}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.55,
                      delay: 0.08 + idx * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="group relative flex flex-col justify-between h-full rounded-[22px] border border-slate-200/90 bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-300/90 hover:shadow-[0_20px_38px_-8px_rgba(15,23,42,0.12),0_4px_12px_-2px_rgba(15,23,42,0.04)]"
                    style={{
                      background: `radial-gradient(circle at 88% 12%, ${pillar.glowColor} 0%, transparent 60%), #FFFFFF`,
                    }}
                  >
                    {/* Top colored accent stripe */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[3.5px] rounded-t-[22px] transition-all duration-300 group-hover:h-[4px]"
                      style={{ backgroundColor: pillar.topAccent }}
                    />

                    <div className="p-6 sm:p-7 lg:p-8 flex flex-col h-full justify-between">
                      <div>
                        {/* Top Row: Icon + Number */}
                        <div className="flex items-center justify-between gap-3 mb-5">
                          <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-slate-100 text-slate-800 border border-slate-200/80 group-hover:scale-105 transition-transform">
                            <Icon className="w-5 h-5" strokeWidth={2.1} />
                          </div>
                          <span className="text-[12px] font-bold tabular-nums px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 select-none">
                            {pillar.number}
                          </span>
                        </div>

                        {/* Title */}
                        <h3
                          style={{
                            fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
                          }}
                          className="text-xl sm:text-[21px] font-bold text-[#0D1117] leading-[1.25] tracking-tight mb-3 group-hover:text-[#090D14]"
                        >
                          {pillar.title}
                        </h3>

                        {/* Summary */}
                        <p className="text-[13.5px] sm:text-[14px] leading-[1.65] text-[#2C333E] font-medium mb-4">
                          {pillar.summary}
                        </p>

                        {/* Bulleted specifics */}
                        <ul className="space-y-2 mb-4">
                          {pillar.details.map((detail) => (
                            <li key={detail} className="flex items-start gap-2 text-[12.5px] sm:text-[13px] text-[#475569] leading-relaxed">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#B88728] shrink-0 mt-0.5" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-slate-100 text-[11.5px] font-semibold text-[#64748B] uppercase tracking-wider font-[var(--font-outfit)]">
                        Evaluation Standard
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Note on Illustrative Criteria */}
            <p className="text-[12.5px] text-[#64748B] italic text-center">
              Note: Illustrative criteria only — replace with SmartAngelos’ actual technical requirements once ratified by the engineering council.
            </p>
          </section>

          {/* ── Fractional Validator Support ── */}
          <section className="mb-14 sm:mb-20">
            <div className="rounded-[28px] sm:rounded-[36px] bg-white border border-slate-200/90 p-7 sm:p-10 lg:p-12 shadow-[0_16px_40px_rgba(15,23,42,0.06)] overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/70 text-blue-700 text-[11px] font-semibold uppercase tracking-wider mb-3">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Democratized Staking</span>
                  </div>

                  <h2
                    style={{
                      fontFamily:
                        "var(--font-playfair), 'Playfair Display', Georgia, serif",
                    }}
                    className="text-2xl sm:text-3xl lg:text-[36px] font-normal text-[#0D1117] tracking-[-0.015em] leading-[1.18] mb-4"
                  >
                    Fractional Validator Support
                  </h2>

                  <p className="text-[15px] sm:text-[16px] leading-[1.7] text-[#2C333E] font-normal mb-6">
                    A dedicated initiative designed to empower independent home-stakers,
                    university research labs, and grassroots collectives who possess exceptional
                    technical operations but lack full minimum capital requirements.
                  </p>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 mb-6 text-[13px] sm:text-[13.5px] leading-relaxed text-[#475569]">
                    <span className="font-semibold text-slate-800">[Program Definition Notice]: </span>
                    Detailed parameters regarding collateral ratios, hardware attestations,
                    and delegation matching tiers are currently in drafting with the
                    protocol economics working group.
                  </div>

                  <div className="flex flex-wrap items-center gap-3.5">
                    <a
                      href="#cta"
                      className="inline-flex items-center gap-2 h-[42px] px-5 rounded-[7px] bg-[#F5BA13] hover:bg-[#E5AC0B] text-[#121417] font-semibold text-[13.5px] transition-all duration-200 active:scale-[0.98] shadow-sm cursor-pointer"
                    >
                      <span>Join Operator Working Group</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Right Visual Module */}
                <div className="lg:col-span-5">
                  <div className="rounded-[22px] bg-[#0F172A] text-white p-6 sm:p-7 shadow-lg">
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                      <div className="flex items-center gap-2">
                        <Server className="w-5 h-5 text-[#F5BA13]" />
                        <span className="text-[13px] font-bold text-white">
                          Fractional Node Model
                        </span>
                      </div>
                      <span className="text-[10.5px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
                        In Spec
                      </span>
                    </div>

                    <div className="space-y-3.5 text-[12.5px] text-slate-300">
                      <div className="flex justify-between items-center py-2 border-b border-slate-800/80">
                        <span className="text-slate-400">Operator Bond</span>
                        <span className="font-mono text-white font-semibold">Partial Collateral</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-slate-800/80">
                        <span className="text-slate-400">Foundation Match</span>
                        <span className="font-mono text-[#F5BA13] font-semibold">Up to 80% Stake</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-slate-800/80">
                        <span className="text-slate-400">Reward Flow</span>
                        <span className="font-mono text-white font-semibold">100% Non-Custodial</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-slate-400">Slashing Protection</span>
                        <span className="font-mono text-slate-300">Automated Circuit Breaker</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── Call to Action Island ── */}
          <section id="cta" className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden bg-[#0D1117] text-white p-8 sm:p-12 lg:p-14 shadow-xl">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle_at_center,rgba(245,186,19,0.22)_0%,transparent_70%)] blur-2xl select-none"
            />

            <div className="relative z-10 max-w-3xl">
              <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.24em] font-semibold text-[#F5BA13] select-none font-[var(--font-outfit)] mb-3">
                Operator Intake
              </p>
              <h2
                style={{ fontFamily: "var(--font-jost), 'Jost', sans-serif" }}
                className="text-2xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white leading-tight mb-4"
              >
                Ready to secure the ecosystem?
              </h2>
              <p className="text-[14.5px] sm:text-[15.5px] leading-relaxed text-slate-300 mb-8 max-w-2xl font-normal">
                Review our minimum hardware and security requirements, connect with
                fellow node operators, and register your intent for upcoming Foundation
                delegation cohorts.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
                <Link
                  href="/#talk-to-us"
                  className="inline-flex items-center justify-center gap-2 h-[42px] sm:h-[44px] px-6 rounded-[7px] bg-[#F5BA13] hover:bg-[#E5AC0B] text-[#121417] font-semibold text-[13.5px] sm:text-[14px] tracking-normal transition-all duration-200 active:scale-[0.98] shadow-sm cursor-pointer"
                >
                  <span>Apply for Delegation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/whitepaper"
                  className="inline-flex items-center justify-center gap-2 h-[42px] sm:h-[44px] px-6 rounded-[7px] border border-white/20 hover:border-white/40 hover:bg-white/5 text-white font-medium text-[13.5px] sm:text-[14px] transition-all duration-200"
                >
                  <span>Validator Requirements</span>
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
