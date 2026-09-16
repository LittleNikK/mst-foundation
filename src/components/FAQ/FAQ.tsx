"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  FAQ Data                                                           */
/* ------------------------------------------------------------------ */
const faqs = [
  {
    id: "01",
    question: "Is the Foundation really non-profit?",
    answer:
      "Yes. It has no shareholders and distributes no profit. Surplus returns to the mission through grants, and the accounts are published each year.",
  },
  {
    id: "02",
    question: "What is the relationship to MST Blockchain?",
    answer:
      "MST Blockchain is an independent open-ledger project stewarded by the Foundation. Contributor teams operate autonomously while the Foundation holds core IP and infrastructure in trust.",
  },
  {
    id: "03",
    question: "Who decides what gets funded?",
    answer:
      "Grant committees and the elected council evaluate all applications according to published rubric criteria. Decisions and review notes are archived publicly.",
  },
  {
    id: "04",
    question: "How do I become a member?",
    answer:
      "Membership opens ahead of annual assemblies to active contributors, researchers, and ecosystem participants who endorse the charter.",
  },
  {
    id: "05",
    question: "Can an institution partner with the Foundation?",
    answer:
      "Yes. Institutions can collaborate on research fellowships, educational pilots, or sponsor specific open grant tracks through our secretariat.",
  },
];

/* ------------------------------------------------------------------ */
/*  Section                                                            */
/* ------------------------------------------------------------------ */
export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full overflow-hidden px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
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

            {/* ── Left col: heading ── */}
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-[11px] sm:text-[12px] uppercase tracking-[0.24em] font-semibold text-[#9E7D3B] select-none"
              >
                QUESTIONS, ANSWERED
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontFamily:
                    "var(--font-serif), Newsreader, 'Times New Roman', Georgia, serif",
                }}
                className="mt-3 sm:mt-4 text-4xl sm:text-5xl lg:text-[52px] font-normal leading-[1.1] tracking-[-0.02em] text-[#121417]"
              >
                The things people ask
                <br />
                first
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                style={{ fontFamily: "var(--font-serif), Newsreader, Georgia, serif" }}
                className="mt-6 text-[14px] sm:text-[15px] leading-[1.7] text-[#4A505C] font-normal"
              >
                If your question is not here, the secretariat answers mail within
                five working days.
              </motion.p>

              {/* Small decorative rule */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 h-px w-16 origin-left"
                style={{ backgroundColor: "rgba(179,141,74,0.45)" }}
              />
            </div>

            {/* ── Right col: accordion ── */}
            <div className="lg:col-span-8">
              {/* Top rule */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="h-px w-full origin-left mb-0"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.04) 70%, transparent 100%)",
                }}
              />

              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.5,
                      delay: 0.08 + index * 0.06,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="relative"
                  >
                    {/* Active gold left bar */}
                    <motion.div
                      className="absolute left-0 top-0 bottom-0 w-[2px] rounded-full"
                      style={{ backgroundColor: "#B38D4A" }}
                      animate={{ opacity: isOpen ? 1 : 0, scaleY: isOpen ? 1 : 0.4 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    />

                    <button
                      type="button"
                      onClick={() => toggle(index)}
                      aria-expanded={isOpen}
                      className="w-full flex items-start justify-between gap-6 py-6 pl-5 sm:pl-6 text-left group transition-colors duration-200"
                    >
                      {/* Question number + text */}
                      <div className="flex items-baseline gap-3 sm:gap-4">
                        <span
                          className="tabular-nums text-[10.5px] font-bold select-none shrink-0 translate-y-[1px]"
                          style={{
                            fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif",
                            color: isOpen ? "#B38D4A" : "#9BA3AF",
                            transition: "color 0.2s",
                          }}
                        >
                          {faq.id}
                        </span>
                        <span
                          style={{
                            fontFamily:
                              "var(--font-serif), Newsreader, 'Times New Roman', Georgia, serif",
                          }}
                          className="text-[17px] sm:text-[19px] lg:text-[20px] font-normal leading-[1.3] text-[#121417] group-hover:text-[#0D1117] transition-colors duration-200"
                        >
                          {faq.question}
                        </span>
                      </div>

                      {/* +/– icon */}
                      <span
                        className="shrink-0 flex items-center justify-center w-6 h-6 rounded-full mt-0.5 transition-all duration-300"
                        style={{
                          backgroundColor: isOpen ? "rgba(179,141,74,0.12)" : "transparent",
                          border: isOpen ? "1px solid rgba(179,141,74,0.30)" : "1px solid rgba(0,0,0,0.08)",
                          color: isOpen ? "#9E7D3B" : "#9BA3AF",
                        }}
                        aria-hidden="true"
                      >
                        <motion.svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          animate={{ rotate: isOpen ? 45 : 0 }}
                          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <path
                            d="M5 1v8M1 5h8"
                            stroke="currentColor"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                          />
                        </motion.svg>
                      </span>
                    </button>

                    {/* Answer */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pl-5 sm:pl-6 pb-6">
                            <div className="pl-7 sm:pl-8">
                              <p
                                style={{
                                  fontFamily:
                                    "var(--font-serif), Newsreader, Georgia, serif",
                                }}
                                className="text-[13.5px] sm:text-[14.5px] leading-[1.7] text-[#4A505C] font-normal"
                              >
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Divider */}
                    <div
                      className="h-px w-full"
                      style={{ backgroundColor: "rgba(0,0,0,0.06)" }}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
