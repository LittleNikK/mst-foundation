"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Reveal button after user scrolls past 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.6, y: 14 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 14 }}
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.94 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          aria-label="Scroll to top"
          title="Scroll to top"
          className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 flex items-center justify-center w-11 h-11 sm:w-[50px] sm:h-[50px] rounded-full bg-[#FFCC00] hover:bg-[#E6B800] text-[#000066] shadow-[0_8px_24px_rgba(0,0,102,0.22),0_2px_8px_rgba(255,204,0,0.45)] hover:shadow-[0_12px_28px_rgba(0,0,102,0.30),0_4px_14px_rgba(255,204,0,0.60)] transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFCC00] focus-visible:ring-offset-2"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 19V5" />
            <path d="M5 12l7-7 7 7" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default ScrollToTop;
