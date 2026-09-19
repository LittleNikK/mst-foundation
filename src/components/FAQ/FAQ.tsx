"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  FAQ Categories & Items (Preserving 100% of previous content)       */
/* ------------------------------------------------------------------ */
type CategoryKey = "charter" | "governance" | "grants";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface CategoryGroup {
  key: CategoryKey;
  pillLabel: string;
  displayTitle: string;
  questions: FAQItem[];
}

const CATEGORIES: CategoryGroup[] = [
  {
    key: "charter",
    pillLabel: "Foundation & Charter™",
    displayTitle: "Foundation & Charter",
    questions: [
      {
        id: "fc-1",
        question: "Is the Foundation really non-profit?",
        answer:
          "Yes. It has no shareholders and distributes no profit. Surplus returns to the mission through grants, and the accounts are published each year.",
      },
      {
        id: "fc-2",
        question: "What is the relationship to MST Blockchain?",
        answer:
          "MST Blockchain is an independent open-ledger project stewarded by the Foundation. Contributor teams operate autonomously while the Foundation holds core IP and infrastructure in trust.",
      },
      {
        id: "fc-3",
        question: "What does stewardship mean in practice?",
        answer:
          "Stewardship ensures protocol neutrality, long-term digital asset preservation, and defense of foundational open-source standards against commercial capture.",
      },
      {
        id: "fc-4",
        question: "Where is the Foundation chartered and regulated?",
        answer:
          "The Foundation operates as an independent, non-profit public-interest entity governed by open constitutional bylaws, public council assembly minutes, and transparent filings.",
      },
    ],
  },
  {
    key: "governance",
    pillLabel: "Governance & Treasury™",
    displayTitle: "Governance & Treasury",
    questions: [
      {
        id: "gt-1",
        question: "Who decides what gets funded?",
        answer:
          "Grant committees and the elected council evaluate all applications according to published rubric criteria. Decisions and review notes are archived publicly.",
      },
      {
        id: "gt-2",
        question: "How is the treasury managed and audited?",
        answer:
          "Treasury reserves are safeguarded with multi-signature custodial controls, governed by published investment guidelines, and verified through independent external audits.",
      },
      {
        id: "gt-3",
        question: "How does the community participate in voting?",
        answer:
          "Active contributors and ecosystem participants take part in regular assembly votes on constitutional amendments, council appointments, and major grant mandate renewals.",
      },
      {
        id: "gt-4",
        question: "Are council deliberations and resolutions publicly accessible?",
        answer:
          "Yes. All council resolutions, committee evaluation rubrics, and assembly recordings are published openly in the Foundation's public governance archive.",
      },
    ],
  },
  {
    key: "grants",
    pillLabel: "Grants & Membership™",
    displayTitle: "Grants & Membership",
    questions: [
      {
        id: "gm-1",
        question: "How do I become a member?",
        answer:
          "Membership opens ahead of annual assemblies to active contributors, researchers, and ecosystem participants who endorse the charter.",
      },
      {
        id: "gm-2",
        question: "Can an institution partner with the Foundation?",
        answer:
          "Yes. Institutions can collaborate on research fellowships, educational pilots, or sponsor specific open grant tracks through our secretariat.",
      },
      {
        id: "gm-3",
        question: "What is the timeline for grant proposal review?",
        answer:
          "Standard applications receive preliminary reviews within 14 days, followed by peer rubric scoring and council determination within a single monthly cycle.",
      },
      {
        id: "gm-4",
        question: "What types of initiatives qualify for open grant funding?",
        answer:
          "We prioritize open-source infrastructure tooling, cryptographic protocol research, security verification, developer documentation, and public-benefit educational workshops.",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  FAQ Component                                                      */
/* ------------------------------------------------------------------ */
export function FAQ() {
  const [activeCategoryKey, setActiveCategoryKey] = useState<CategoryKey>("charter");
  const [openId, setOpenId] = useState<string | null>("fc-1");

  const currentCategory =
    CATEGORIES.find((c) => c.key === activeCategoryKey) || CATEGORIES[0];

  const handleCategoryChange = (key: CategoryKey) => {
    setActiveCategoryKey(key);
    const targetCat = CATEGORIES.find((c) => c.key === key);
    if (targetCat && targetCat.questions.length > 0) {
      setOpenId(targetCat.questions[0].id);
    } else {
      setOpenId(null);
    }
  };

  const toggleQuestion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="relative w-full overflow-hidden px-4 sm:px-6 lg:px-8 py-8 sm:py-14 scroll-mt-24"
    >
      {/* Outer Container with seamless rounded border */}
      <div className="relative z-10 w-full max-w-7xl mx-auto rounded-[28px] sm:rounded-[36px] lg:rounded-[40px] overflow-hidden border border-[#E4DCD3] shadow-[0_20px_50px_rgba(18,20,23,0.06)]">
        
        {/* ========================================================= */}
        {/* TOP HEADER BLOCK: Brand Yellow Background                 */}
        {/* ========================================================= */}
        <div className="bg-[#F5BA13] pt-14 pb-12 sm:pt-18 sm:pb-16 px-6 sm:px-10 lg:px-16 text-center border-b border-[#E2A90D]">
          <div className="max-w-3xl mx-auto">
            
            {/* Main Heading in Playfair Display Serif */}
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
              }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-normal leading-[1.15] tracking-[-0.015em] text-[#121417]"
            >
              Frequently Asked Questions
            </motion.h2>

            {/* Subtitle Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 sm:mt-5 text-[14.5px] sm:text-[15.5px] md:text-[16px] leading-[1.68] text-[#24272E] max-w-2xl mx-auto font-normal font-[var(--font-sans)]"
            >
              Essential questions about our non-profit mission, governance, treasury stewardship,
              and grant programs are completely natural. We’ve organized clear answers to guide
              contributors, developers, and partners.
            </motion.p>

            {/* Category Pill Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5"
            >
              {CATEGORIES.map((cat) => {
                const isActive = cat.key === activeCategoryKey;
                return (
                  <button
                    key={cat.key}
                    type="button"
                    onClick={() => handleCategoryChange(cat.key)}
                    className={`rounded-full px-5 sm:px-6 py-2.5 sm:py-3 text-[13px] sm:text-[14px] font-medium tracking-tight transition-all duration-200 cursor-pointer select-none ${
                      isActive
                        ? "bg-[#121417] text-white shadow-lg ring-1 ring-black/15 scale-[1.02]"
                        : "bg-[#121417]/80 text-white/90 hover:bg-[#121417] hover:text-white"
                    }`}
                  >
                    {cat.pillLabel}
                  </button>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* BOTTOM SECTION: Pure White Background + Split Layout      */}
        {/* ========================================================= */}
        <div className="bg-[#FFFFFF] p-8 sm:p-12 lg:p-16 xl:p-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            
            {/* ── Left Column: Active Category Title ── */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentCategory.key}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
                    }}
                    className="text-3xl sm:text-4xl lg:text-[46px] xl:text-[50px] font-normal leading-[1.12] tracking-tight text-[#14171D]"
                  >
                    {currentCategory.displayTitle}
                    <sup className="text-xl sm:text-2xl font-light ml-1 -top-3 sm:-top-4 text-[#14171D]">
                      ™
                    </sup>
                  </h3>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ── Right Column: Accordion List with Dividers & '+' ── */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentCategory.key}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="divide-y divide-[#E5E7EB] border-t border-b border-[#E5E7EB]"
                >
                  {currentCategory.questions.map((faq) => {
                    const isOpen = openId === faq.id;
                    return (
                      <div key={faq.id} className="transition-colors">
                        <button
                          type="button"
                          onClick={() => toggleQuestion(faq.id)}
                          aria-expanded={isOpen}
                          className="w-full py-5 sm:py-6 flex items-start justify-between gap-6 text-left group transition-colors cursor-pointer"
                        >
                          <span
                            style={{
                              fontFamily:
                                "var(--font-serif), Newsreader, 'Times New Roman', Georgia, serif",
                            }}
                            className="text-[16.5px] sm:text-[18px] lg:text-[19px] font-medium leading-[1.35] text-[#12161D] group-hover:text-black transition-colors"
                          >
                            {faq.question}
                          </span>

                          <span
                            className="shrink-0 text-2xl font-light text-[#1F242E] group-hover:text-black transition-transform duration-300 leading-none select-none"
                            style={{
                              transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                              display: "inline-block",
                            }}
                            aria-hidden="true"
                          >
                            +
                          </span>
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="pb-6 pr-8">
                                <p className="text-[14.5px] sm:text-[15.5px] text-[#4B5565] leading-[1.75] font-normal font-[var(--font-sans)]">
                                  {faq.answer}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default FAQ;
