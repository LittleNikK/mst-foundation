"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Join the Foundation / Membership & Contact Form Section           */
/* ------------------------------------------------------------------ */
export function JoinFoundation() {
  const [email, setEmail] = useState("");
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
      className="relative w-full overflow-hidden px-4 sm:px-6 lg:px-8 py-8 sm:py-12 scroll-mt-24"
    >
      {/* Anchor for Contact */}
      <div id="contact" className="absolute -top-24 pointer-events-none" />
      {/* Outer glass container */}
      <div
        className="relative z-10 w-full max-w-7xl mx-auto rounded-[28px] sm:rounded-[36px] lg:rounded-[42px] overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, rgba(213,225,237,0.88) 0%, rgba(234,239,245,0.90) 40%, rgba(250,246,237,0.85) 100%)",
          border: "1px solid rgba(255,255,255,0.82)",
          boxShadow:
            "0 24px 72px rgba(18,20,23,0.07), inset 0 1px 0 rgba(255,255,255,0.92)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
        }}
      >
        {/* Ambient glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-3/5 select-none"
          style={{
            background:
              "radial-gradient(ellipse at 80% 40%, rgba(253,230,138,0.38) 0%, rgba(254,243,199,0.16) 40%, transparent 70%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-2/5 select-none"
          style={{
            background:
              "radial-gradient(circle at 10% 30%, rgba(186,207,228,0.35) 0%, transparent 65%)",
          }}
        />

        <div className="relative z-10 p-8 sm:p-12 lg:p-16 xl:p-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

            {/* ── Left col ── */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full">
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[11px] sm:text-[12px] uppercase tracking-[0.24em] font-semibold text-[#9E7D3B] select-none mb-3"
                >
                  JOIN US
                </motion.p>

                <motion.h2
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    fontFamily:
                      "var(--font-serif), Newsreader, 'Times New Roman', Georgia, serif",
                  }}
                  className="text-4xl sm:text-5xl lg:text-[54px] font-normal leading-[1.08] tracking-[-0.02em] text-[#121417]"
                >
                  Join the Foundation, or
                  <br />
                  ask us anything
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  style={{ fontFamily: "var(--font-serif), Newsreader, Georgia, serif" }}
                  className="mt-6 text-[14.5px] sm:text-[15.5px] lg:text-[16px] leading-[1.7] text-[#3D434E] font-normal max-w-lg"
                >
                  Membership is open and free. Members vote in the assembly and
                  receive the council&apos;s minutes.
                </motion.p>
              </div>

              {/* Pills */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="mt-10 lg:mt-16 flex items-center flex-wrap gap-2"
              >
                {["Free to join", "One member, one vote", "Unsubscribe any time"].map(
                  (label) => (
                    <span
                      key={label}
                      className="inline-flex items-center rounded-full px-3 py-1 text-[11.5px] sm:text-[12px] text-[#5A6270] select-none"
                      style={{
                        background: "rgba(255,255,255,0.55)",
                        border: "1px solid rgba(0,0,0,0.07)",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      {label}
                    </span>
                  )
                )}
              </motion.div>
            </div>

            {/* ── Right col: form ── */}
            <div className="lg:col-span-6">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col justify-center py-12"
                  >
                    {/* Tick */}
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center mb-5"
                      style={{
                        background: "rgba(179,141,74,0.12)",
                        border: "1px solid rgba(179,141,74,0.30)",
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <path
                          d="M4 10.5l4.5 4.5 7.5-9"
                          stroke="#B38D4A"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <p
                      style={{
                        fontFamily:
                          "var(--font-serif), Newsreader, 'Times New Roman', Georgia, serif",
                      }}
                      className="text-[22px] sm:text-[26px] font-normal text-[#121417] leading-snug mb-3"
                    >
                      Thank you — received.
                    </p>
                    <p
                      style={{ fontFamily: "var(--font-serif), Newsreader, Georgia, serif" }}
                      className="text-[13.5px] sm:text-[14.5px] text-[#4A505C] leading-[1.65]"
                    >
                      We&apos;ll be in touch within five working days.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-0"
                  >
                    {/* Email field — underline style */}
                    <div className="relative pb-7">
                      <label
                        htmlFor="foundation-email"
                        className="block text-[10.5px] sm:text-[11px] uppercase tracking-[0.18em] font-semibold text-[#9E7D3B] select-none mb-3"
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
                        className="w-full bg-transparent border-0 border-b pb-2.5 text-[15px] sm:text-[16px] text-[#121417] placeholder-[#B0B8C4] outline-none transition-colors duration-200"
                        style={{
                          borderColor:
                            focused === "email"
                              ? "#B38D4A"
                              : "rgba(0,0,0,0.14)",
                          borderBottomWidth: "1.5px",
                          borderBottomStyle: "solid",
                          fontFamily: "var(--font-serif), Newsreader, Georgia, serif",
                        }}
                      />
                      {/* Animated gold underline on focus */}
                      <motion.div
                        className="absolute bottom-7 left-0 h-[1.5px] rounded-full"
                        style={{ backgroundColor: "#B38D4A" }}
                        animate={{ width: focused === "email" ? "100%" : "0%" }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </div>

                    {/* Textarea field — underline style */}
                    <div className="relative pb-7">
                      <label
                        htmlFor="foundation-reason"
                        className="block text-[10.5px] sm:text-[11px] uppercase tracking-[0.18em] font-semibold text-[#9E7D3B] select-none mb-3"
                      >
                        What brings you here?{" "}
                        <span className="text-[#9BA3AF] normal-case tracking-normal font-normal">(optional)</span>
                      </label>
                      <textarea
                        id="foundation-reason"
                        rows={3}
                        placeholder="Grants, partnership, press, or something else"
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        onFocus={() => setFocused("reason")}
                        onBlur={() => setFocused(null)}
                        className="w-full resize-none bg-transparent border-0 border-b pb-2.5 text-[15px] sm:text-[16px] text-[#121417] placeholder-[#B0B8C4] outline-none transition-colors duration-200"
                        style={{
                          borderColor:
                            focused === "reason"
                              ? "#B38D4A"
                              : "rgba(0,0,0,0.14)",
                          borderBottomWidth: "1.5px",
                          borderBottomStyle: "solid",
                          fontFamily: "var(--font-serif), Newsreader, Georgia, serif",
                        }}
                      />
                      <motion.div
                        className="absolute bottom-7 left-0 h-[1.5px] rounded-full"
                        style={{ backgroundColor: "#B38D4A" }}
                        animate={{ width: focused === "reason" ? "100%" : "0%" }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </div>

                    {/* Actions */}
                    <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-2.5 rounded-[10px] px-6 py-2.5 sm:px-7 sm:py-3 text-[13px] sm:text-[13.5px] font-medium text-white select-none active:scale-[0.98] transition-all duration-200 cursor-pointer"
                        style={{
                          background: "linear-gradient(135deg, #B38D4A 0%, #C8A265 50%, #B38D4A 100%)",
                          boxShadow: "0 4px 16px rgba(179,141,74,0.32), inset 0 1px 0 rgba(255,255,255,0.18)",
                          border: "1px solid rgba(179,141,74,0.55)",
                        }}
                      >
                        Join the Foundation
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                          <path d="M2.5 10.5L10 3M10 3H4.5M10 3v5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>

                      <Link
                        href="/charter"
                        className="text-[13px] sm:text-[13.5px] font-medium text-[#94712F] transition-all duration-200 hover:text-[#7D5E24] self-center sm:self-auto"
                        style={{ textDecoration: "none" }}
                      >
                        Read the charter →
                      </Link>
                    </div>

                    <p className="text-[11.5px] sm:text-[12px] text-[#8A919C] font-normal pt-4">
                      We only use your address for Foundation business.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default JoinFoundation;
