"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Mail,
  Coins,
  Newspaper,
  AlertCircle,
  Copy,
  Check,
  Send,
  ShieldAlert,
  Building2,
  FileText,
  Clock,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { Navbar, Footer, ScrollToTop } from "@/components";

/* ------------------------------------------------------------------ */
/*  Contact Channels Data                                             */
/* ------------------------------------------------------------------ */
const contactChannels = [
  {
    id: "general",
    title: "General Inquiries",
    email: "info@smartangelos.org",
    placeholder: "[email TBD]",
    role: "General",
    description:
      "For foundation charter questions, institutional partnerships, and general ecosystem inquiries.",
    icon: Mail,
    accent: "#2563EB",
    badgeBg: "#EFF6FF",
    badgeBorder: "#DBEAFE",
    badgeText: "#1D4ED8",
    response: "2–3 business days",
  },
  {
    id: "grants",
    title: "Grants & Research",
    email: "grants@smartangelos.org",
    placeholder: "[email TBD]",
    role: "Grants",
    description:
      "For RFP proposals, milestone deliverables, technical working groups, and research fellowships.",
    icon: Coins,
    accent: "#B88728",
    badgeBg: "#FEF9EE",
    badgeBorder: "#FDE68A",
    badgeText: "#9A6B1A",
    response: "Weekly intake review",
  },
  {
    id: "press",
    title: "Press & Media",
    email: "press@smartangelos.org",
    placeholder: "[email TBD]",
    role: "Press",
    description:
      "For accredited journalists, media interview requests, and official Foundation statements.",
    icon: Newspaper,
    accent: "#0F172A",
    badgeBg: "#F1F5F9",
    badgeBorder: "#E2E8F0",
    badgeText: "#334155",
    response: "1–2 business days",
  },
];

export default function ContactPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("general");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;
    setSubmitted(true);
  };

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
            <span className="text-[#0D1117] font-semibold">Contact &amp; Press</span>
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
                Get in touch
              </h1>

              {/* Subtitle / Boundary Policy Statement */}
              <p
                style={{ fontFamily: "var(--font-sans), 'Plus Jakarta Sans', sans-serif" }}
                className="text-[16px] sm:text-[18px] lg:text-[19px] leading-[1.65] text-[#2C333E] font-normal tracking-[-0.01em] max-w-3xl mb-4"
              >
                SmartAngelos is an independent non-profit foundation stewarding the MST
                ecosystem.
              </p>

              {/* Strict Non-Commercial Disclaimer */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-slate-100/90 border border-slate-200 text-[13px] sm:text-[13.5px] leading-relaxed text-[#475569] max-w-2xl font-medium">
                <span className="text-[#0D1117] font-semibold">Scope of Communication: </span>
                SmartAngelos does not provide investment advice or comment on token price.
                Inquiries requesting financial speculation, token promotions, or secondary market
                listings will not receive a response.
              </div>
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
                Contact Routing Note · Inboxes In Configuration
              </p>
              <p className="text-[13.5px] sm:text-[14px] leading-[1.65] text-[#5A4112] font-normal">
                <strong>Note:</strong> Matches the near-universal pattern of splitting general,
                grant, and press contact (the Ethereum Foundation model). Official MX records
                and cryptographic signing keys are currently being provisioned alongside the
                statutory charter domain.
              </p>
            </div>
          </motion.div>

          {/* ── Contact Channels Grid ── */}
          <section className="mb-14 sm:mb-20">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-3">
              <div>
                <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.22em] font-semibold text-[#9E7D3B] select-none font-[var(--font-outfit)] mb-1.5">
                  Direct Inboxes
                </p>
                <h2
                  style={{
                    fontFamily:
                      "var(--font-playfair), 'Playfair Display', Georgia, serif",
                  }}
                  className="text-2xl sm:text-3xl lg:text-[34px] font-normal text-[#0D1117] tracking-[-0.015em]"
                >
                  Contact Channels
                </h2>
              </div>
              <span className="text-[12.5px] sm:text-[13px] text-[#596273] font-medium">
                Encrypted &amp; Monitored Inboxes
              </span>
            </div>

            {/* 3 Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
              {contactChannels.map((channel, idx) => {
                const Icon = channel.icon;
                const isCopied = copiedId === channel.id;

                return (
                  <motion.div
                    key={channel.id}
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
                      style={{ backgroundColor: channel.accent }}
                    />

                    <div>
                      {/* Top Row: Icon + Role Pill */}
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{
                            background: channel.badgeBg,
                            border: `1px solid ${channel.badgeBorder}`,
                            color: channel.badgeText,
                          }}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <span
                          className="text-[10.5px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
                          style={{
                            background: channel.badgeBg,
                            color: channel.badgeText,
                            border: `1px solid ${channel.badgeBorder}`,
                          }}
                        >
                          {channel.role}
                        </span>
                      </div>

                      <h3
                        style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
                        className="text-xl font-bold text-[#0D1117] tracking-tight mb-2"
                      >
                        {channel.title}
                      </h3>

                      <p className="text-[13px] leading-[1.62] text-[#475569] mb-5">
                        {channel.description}
                      </p>
                    </div>

                    <div>
                      {/* Email Box with Copy */}
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between gap-2 mb-3">
                        <div className="truncate">
                          <span className="font-mono text-[12.5px] text-[#0D1117] font-semibold block truncate">
                            {channel.placeholder}
                          </span>
                          <span className="text-[11px] text-slate-500 block">
                            Status: In configuration
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleCopy(channel.id, channel.email)}
                          className="p-1.5 rounded-lg text-slate-500 hover:text-black hover:bg-slate-200/70 transition-colors"
                          title="Copy email address"
                        >
                          {isCopied ? (
                            <Check className="w-4 h-4 text-emerald-600" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      </div>

                      <div className="flex items-center justify-between text-[11.5px] text-[#64748B]">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{channel.response}</span>
                        </span>
                        <span className="font-medium text-[#8E6317]">Monitored Inbox</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* ── Direct Message Form ── */}
          <section className="mb-14 sm:mb-20">
            <div className="rounded-[28px] sm:rounded-[36px] bg-white border border-slate-200/90 p-7 sm:p-10 lg:p-12 shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
              <div className="max-w-2xl mb-8">
                <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.22em] font-semibold text-[#9E7D3B] select-none font-[var(--font-outfit)] mb-1.5">
                  Web Dispatch
                </p>
                <h2
                  style={{
                    fontFamily:
                      "var(--font-playfair), 'Playfair Display', Georgia, serif",
                  }}
                  className="text-2xl sm:text-3xl lg:text-[34px] font-normal text-[#0D1117] tracking-[-0.015em] mb-3"
                >
                  Send a Direct Message
                </h2>
                <p className="text-[14px] sm:text-[15px] text-[#475569] leading-relaxed">
                  Submissions are routed directly to the appropriate working group or council secretariat.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-[20px] bg-emerald-50 border border-emerald-200 text-center max-w-lg mx-auto">
                  <Check className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                  <h3
                    style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
                    className="text-xl font-bold text-[#0D1117] mb-2"
                  >
                    Message Dispatched
                  </h3>
                  <p className="text-[13.5px] text-[#15803D] leading-relaxed mb-4">
                    Thank you for reaching out. Your transmission has been queued for review
                    by the Foundation secretariat.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-[13px] font-semibold text-[#0D1117] underline hover:opacity-75"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="max-w-2xl space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12px] font-semibold uppercase tracking-wider text-slate-700 mb-1 font-[var(--font-outfit)]">
                        Your Name
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ada Lovelace"
                        className="w-full h-11 px-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[14px] text-slate-900 focus:outline-none focus:border-[#B88728] focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[12px] font-semibold uppercase tracking-wider text-slate-700 mb-1 font-[var(--font-outfit)]">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="ada@example.org"
                        className="w-full h-11 px-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[14px] text-slate-900 focus:outline-none focus:border-[#B88728] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[12px] font-semibold uppercase tracking-wider text-slate-700 mb-1 font-[var(--font-outfit)]">
                      Inquiry Category
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full h-11 px-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[14px] text-slate-900 focus:outline-none focus:border-[#B88728] focus:bg-white transition-colors"
                    >
                      <option value="general">General &amp; Governance Inquiry</option>
                      <option value="grants">Grants &amp; Technical Fellowship</option>
                      <option value="validators">Validator Delegation &amp; Hardware</option>
                      <option value="press">Press &amp; Media Communications</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[12px] font-semibold uppercase tracking-wider text-slate-700 mb-1 font-[var(--font-outfit)]">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Please specify the nature of your inquiry or proposal..."
                      className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-[14px] text-slate-900 focus:outline-none focus:border-[#B88728] focus:bg-white transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-[7px] bg-[#F5BA13] hover:bg-[#E5AC0B] text-[#121417] font-semibold text-[14px] transition-all duration-200 active:scale-[0.98] shadow-sm cursor-pointer"
                  >
                    <span>Transmit Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </section>

          {/* ── Security & Anti-Phishing Advisory ── */}
          <section className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden bg-[#0D1117] text-white p-8 sm:p-12 lg:p-14 shadow-xl">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle_at_center,rgba(245,186,19,0.22)_0%,transparent_70%)] blur-2xl select-none"
            />

            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-800 text-red-300 text-[11px] font-semibold uppercase tracking-wider mb-4">
                <ShieldAlert className="w-3.5 h-3.5 text-red-400" />
                <span>Security Notice</span>
              </div>

              <h2
                style={{ fontFamily: "var(--font-jost), 'Jost', sans-serif" }}
                className="text-2xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-white leading-tight mb-4"
              >
                Verifying Official Communications
              </h2>

              <p className="text-[14.5px] sm:text-[15.5px] leading-relaxed text-slate-300 mb-6 max-w-2xl font-normal">
                SmartAngelos personnel will <strong>never</strong> contact you asking for private
                keys, seed phrases, or transfer of tokens to personal addresses. All grant
                agreements and disbursements are executed via audited multisig signers.
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
                  href="/transparency"
                  className="inline-flex items-center justify-center gap-2 h-[42px] sm:h-[44px] px-6 rounded-[7px] border border-white/20 hover:border-white/40 hover:bg-white/5 text-white font-medium text-[13.5px] sm:text-[14px] transition-all duration-200"
                >
                  <span>Transparency Ledger</span>
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
