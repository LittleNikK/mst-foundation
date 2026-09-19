"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Join the Foundation / Partnership & Contact Form Section           */
/* ------------------------------------------------------------------ */
export function JoinFoundation() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [reason, setReason] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section
      id="talk-to-us"
      className="relative w-full overflow-hidden px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 scroll-mt-16 bg-[#F1F3F6]"
    >
      {/* Anchor for Contact */}
      <div id="contact" className="absolute -top-24 pointer-events-none" />

      {/* Outer Section Card with exact warm linen background */}
      <div
        className="relative z-10 w-full max-w-7xl mx-auto rounded-[24px] sm:rounded-[32px] overflow-hidden"
        style={{
          backgroundColor: "#FAF7F2",
          border: "1px solid rgba(232, 222, 212, 0.85)",
          boxShadow:
            "0 20px 60px rgba(18,20,23,0.05), inset 0 1px 0 rgba(255,255,255,0.9)",
        }}
      >
        {/* ── Left organic wave shape from reference image ── */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 bottom-0 select-none z-0 overflow-visible"
        >
          <svg
            className="w-[200px] sm:w-[280px] md:w-[360px] lg:w-[420px] h-[280px] sm:h-[360px] lg:h-[440px]"
            viewBox="0 0 480 540"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-40 560 L140 560 C210 490 230 400 185 330 C145 270 95 245 85 185 C75 125 25 65 -40 30 Z"
              fill="url(#left-wave-gradient)"
              stroke="#ECC4B2"
              strokeWidth="1.5"
            />
            <defs>
              <linearGradient id="left-wave-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F9E6DC" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#F6DDD1" stopOpacity="0.95" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* ── Right organic wave shape from reference image ── */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-1/4 sm:top-1/6 select-none z-0 overflow-visible"
        >
          <svg
            className="w-[220px] sm:w-[300px] md:w-[380px] lg:w-[460px] h-[380px] sm:h-[480px] lg:h-[580px]"
            viewBox="0 0 540 720"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 560 -20 L 560 740 C 440 710 365 635 345 535 C 320 425 390 345 355 245 C 325 160 380 60 560 -20 Z"
              fill="url(#right-wave-gradient)"
              stroke="#ECC4B2"
              strokeWidth="1.5"
            />
            <defs>
              <linearGradient id="right-wave-gradient" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#F9E6DC" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#F6DDD1" stopOpacity="0.95" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* ── Inner Content: Two Partitions Grid (Compact for Single Viewport) ── */}
        <div className="relative z-10 px-5 sm:px-8 lg:px-12 xl:px-14 py-7 sm:py-9 lg:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">

            {/* ── Left Partition: Headline, Subtitle, and Pills ── */}
            <div className="lg:col-span-6 flex flex-col justify-center text-left">
              <motion.h2
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontFamily:
                    "var(--font-playfair), 'Playfair Display', Georgia, serif",
                }}
                className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] font-normal leading-[1.12] tracking-[-0.015em] text-[#1A1A1A]"
              >
                Let’s Explore
                <br />
                A <span className="text-[#D99400]">Partnership</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontFamily:
                    "var(--font-sans), 'Plus Jakarta Sans', Inter, sans-serif",
                }}
                className="mt-3.5 text-[14px] sm:text-[15px] lg:text-[15.5px] leading-[1.6] text-[#5A6270] max-w-lg"
              >
                Membership is open and free. Join the Foundation, explore ecosystem partnerships, or submit an inquiry to our council.
              </motion.p>

              {/* Feature Pills */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="mt-6 flex items-center flex-wrap gap-2"
              >
                {["Free to join", "One member, one vote", "Unsubscribe any time"].map((label) => (
                  <span
                    key={label}
                    className="inline-flex items-center rounded-full px-3 py-0.5 text-[11.5px] text-[#725936] select-none bg-white/80 border border-[#E9DFD0] shadow-2xs"
                  >
                    {label}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* ── Right Partition: Form Card ── */}
            <div className="lg:col-span-6 relative">

              {/* Luxury Pen Prop resting on the right side of the card */}
              <div
                aria-hidden="true"
                className="hidden xl:block absolute -right-8 bottom-6 w-7 h-52 pointer-events-none select-none z-20"
                style={{
                  filter: "drop-shadow(5px 12px 14px rgba(0,0,0,0.16))",
                  transform: "rotate(-3deg)",
                }}
              >
                <svg viewBox="0 0 32 260" fill="none" className="w-full h-full">
                  {/* Pen Nib (Metallic Silver) */}
                  <path
                    d="M16 2 L21 34 L11 34 Z"
                    fill="url(#nib-metallic)"
                    stroke="#A6ACB2"
                    strokeWidth="0.5"
                  />
                  <line x1="16" y1="2" x2="16" y2="24" stroke="#6C7278" strokeWidth="0.75" />
                  <circle cx="16" cy="20" r="1.2" fill="#4B5056" />

                  {/* Section / Grip (Dark Gunmetal) */}
                  <rect x="11.5" y="34" width="9" height="28" rx="1" fill="url(#grip-metallic)" />

                  {/* Chrome Accent Ring */}
                  <rect x="10.5" y="62" width="11" height="4" rx="0.5" fill="url(#chrome-accent)" />

                  {/* Pen Barrel (Glossy Obsidian Black) */}
                  <rect x="11" y="66" width="10" height="170" rx="1.5" fill="url(#barrel-gloss)" />

                  {/* Chrome Clip on the right */}
                  <path
                    d="M19.5 76 L24 82 L24 160 C24 164 22 166 19.5 166"
                    stroke="url(#clip-metallic)"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    fill="none"
                  />

                  {/* Barrel End Cap */}
                  <path d="M12 236 C12 242 20 242 20 236 Z" fill="url(#chrome-accent)" />

                  <defs>
                    <linearGradient id="nib-metallic" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#E2E5E8" />
                      <stop offset="35%" stopColor="#FFFFFF" />
                      <stop offset="70%" stopColor="#CBD0D5" />
                      <stop offset="100%" stopColor="#9AA0A6" />
                    </linearGradient>
                    <linearGradient id="grip-metallic" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#23272B" />
                      <stop offset="40%" stopColor="#3C4249" />
                      <stop offset="100%" stopColor="#15181B" />
                    </linearGradient>
                    <linearGradient id="chrome-accent" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#D8DCE0" />
                      <stop offset="50%" stopColor="#FFFFFF" />
                      <stop offset="100%" stopColor="#8E959D" />
                    </linearGradient>
                    <linearGradient id="barrel-gloss" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#1A1D20" />
                      <stop offset="30%" stopColor="#383E44" />
                      <stop offset="60%" stopColor="#1C1F22" />
                      <stop offset="100%" stopColor="#0B0C0E" />
                    </linearGradient>
                    <linearGradient id="clip-metallic" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFFFFF" />
                      <stop offset="60%" stopColor="#C2C7CC" />
                      <stop offset="100%" stopColor="#7E858D" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Pristine White Form Card */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 w-full bg-white rounded-[18px] sm:rounded-[22px] p-5 sm:p-6 lg:p-7 shadow-[0_16px_40px_-10px_rgba(0,0,0,0.07),0_2px_6px_rgba(0,0,0,0.02)] border border-[#EFE8DF]"
              >
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="flex flex-col items-center justify-center py-8 text-center"
                    >
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center mb-3.5"
                        style={{
                          background: "rgba(245, 186, 19, 0.15)",
                          border: "1px solid rgba(245, 186, 19, 0.40)",
                        }}
                      >
                        <svg width="22" height="22" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                          <path
                            d="M4 10.5l4.5 4.5 7.5-9"
                            stroke="#D99400"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <p
                        style={{
                          fontFamily:
                            "var(--font-playfair), 'Playfair Display', Georgia, serif",
                        }}
                        className="text-[22px] sm:text-[24px] font-normal text-[#1A1A1A] leading-snug mb-1.5"
                      >
                        Thank you — received.
                      </p>
                      <p
                        style={{
                          fontFamily: "var(--font-sans), 'Plus Jakarta Sans', Inter, sans-serif",
                        }}
                        className="text-[13.5px] text-[#5A6270] leading-[1.6]"
                      >
                        We&apos;ll be in touch within five working days.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
                      {/* Full Name * */}
                      <div>
                        <label
                          htmlFor="foundation-name"
                          style={{
                            fontFamily: "var(--font-sans), 'Plus Jakarta Sans', Inter, sans-serif",
                          }}
                          className="block text-[12px] font-medium text-[#8A4A26] mb-1"
                        >
                          Full Name *
                        </label>
                        <input
                          id="foundation-name"
                          type="text"
                          required
                          placeholder="John Doe"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          onFocus={() => setFocused("name")}
                          onBlur={() => setFocused(null)}
                          className="w-full h-[38px] sm:h-[40px] rounded-[7px] border bg-white px-3 text-[13.5px] text-[#1A1A1A] placeholder-[#B5ADA4] outline-none transition-all duration-200"
                          style={{
                            borderColor: focused === "name" ? "#F5BA13" : "#E5DDD4",
                            boxShadow: focused === "name" ? "0 0 0 3px rgba(245, 186, 19, 0.20)" : "none",
                          }}
                        />
                      </div>

                      {/* Email address */}
                      <div>
                        <label
                          htmlFor="foundation-email"
                          style={{
                            fontFamily: "var(--font-sans), 'Plus Jakarta Sans', Inter, sans-serif",
                          }}
                          className="block text-[12px] font-medium text-[#8A4A26] mb-1"
                        >
                          Email address
                        </label>
                        <input
                          id="foundation-email"
                          type="email"
                          required
                          placeholder="you@example.org"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          onFocus={() => setFocused("email")}
                          onBlur={() => setFocused(null)}
                          className="w-full h-[38px] sm:h-[40px] rounded-[7px] border bg-white px-3 text-[13.5px] text-[#1A1A1A] placeholder-[#B5ADA4] outline-none transition-all duration-200"
                          style={{
                            borderColor: focused === "email" ? "#F5BA13" : "#E5DDD4",
                            boxShadow: focused === "email" ? "0 0 0 3px rgba(245, 186, 19, 0.20)" : "none",
                          }}
                        />
                      </div>

                      {/* Company name * */}
                      <div>
                        <label
                          htmlFor="foundation-company"
                          style={{
                            fontFamily: "var(--font-sans), 'Plus Jakarta Sans', Inter, sans-serif",
                          }}
                          className="block text-[12px] font-medium text-[#8A4A26] mb-1"
                        >
                          Company name *
                        </label>
                        <input
                          id="foundation-company"
                          type="text"
                          required
                          placeholder="Acme Inc. or Independent"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          onFocus={() => setFocused("company")}
                          onBlur={() => setFocused(null)}
                          className="w-full h-[38px] sm:h-[40px] rounded-[7px] border bg-white px-3 text-[13.5px] text-[#1A1A1A] placeholder-[#B5ADA4] outline-none transition-all duration-200"
                          style={{
                            borderColor: focused === "company" ? "#F5BA13" : "#E5DDD4",
                            boxShadow: focused === "company" ? "0 0 0 3px rgba(245, 186, 19, 0.20)" : "none",
                          }}
                        />
                      </div>

                      {/* What brings you here? (optional) */}
                      <div>
                        <label
                          htmlFor="foundation-reason"
                          style={{
                            fontFamily: "var(--font-sans), 'Plus Jakarta Sans', Inter, sans-serif",
                          }}
                          className="block text-[12px] font-medium text-[#8A4A26] mb-1"
                        >
                          What brings you here?{" "}
                          <span className="text-[#9BA3AF] font-normal text-[11px]">(optional)</span>
                        </label>
                        <textarea
                          id="foundation-reason"
                          rows={2}
                          placeholder="Grants, partnership, validator node, or something else..."
                          value={reason}
                          onChange={(e) => setReason(e.target.value)}
                          onFocus={() => setFocused("reason")}
                          onBlur={() => setFocused(null)}
                          className="w-full rounded-[7px] border bg-white p-2.5 sm:p-3 text-[13.5px] text-[#1A1A1A] placeholder-[#B5ADA4] outline-none transition-all duration-200 resize-none"
                          style={{
                            borderColor: focused === "reason" ? "#F5BA13" : "#E5DDD4",
                            boxShadow: focused === "reason" ? "0 0 0 3px rgba(245, 186, 19, 0.20)" : "none",
                          }}
                        />
                      </div>

                      {/* Contact us Button in vibrant yellow */}
                      <div className="pt-1.5">
                        <button
                          type="submit"
                          className="w-full h-[40px] sm:h-[42px] rounded-[7px] bg-[#F5BA13] hover:bg-[#E5AC0B] active:scale-[0.99] text-[#121417] font-semibold text-[13.5px] sm:text-[14px] tracking-normal transition-all duration-200 cursor-pointer shadow-xs hover:shadow-sm flex items-center justify-center gap-2"
                        >
                          <span>Contact us</span>
                          <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                            <path d="M2.5 11.5L11 3M11 3H5M11 3v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>
                      </div>

                      {/* Assurance note and charter link */}
                      <div className="pt-1 flex flex-col sm:flex-row items-center justify-between gap-1.5 text-center sm:text-left text-[11px] sm:text-[11.5px] text-[#8C939E]">
                        <span>We only use your address for Foundation business.</span>
                        <Link
                          href="/charter"
                          className="font-medium text-[#8A4A26] hover:text-[#D99400] transition-colors duration-150 underline underline-offset-2"
                        >
                          Read the charter →
                        </Link>
                      </div>
                    </form>
                  )}
                </AnimatePresence>
              </motion.div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default JoinFoundation;
