"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { markHeroLoaded } from "@/lib/loaderState";

const navLinks = [
  { href: "#funding", label: "Funding" },
  { href: "#transparency", label: "Transparency" },
  { href: "#ecosystem", label: "Ecosystem" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // If user visits any single page, mark hero as already loaded
  // so subsequent redirects back to the home page do not play the loader
  useEffect(() => {
    if (pathname !== "/") {
      markHeroLoaded();
    }
  }, [pathname]);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show at top of page
      if (currentScrollY < 60) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 180) {
        // Scrolling down -> hide navbar
        setIsVisible(false);
        setMobileMenuOpen(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up -> reveal navbar
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      if (pathname === "/") {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // If on another route, Next.js Link will handle navigation to `/#section`
      }
      setMobileMenuOpen(false);
    } else {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-4 sm:top-5 left-0 right-0 z-50 flex flex-col items-center px-4 sm:px-6 pointer-events-none transition-all duration-500 ease-out",
        isVisible
          ? "translate-y-0 opacity-100"
          : "-translate-y-28 opacity-0 pointer-events-none"
      )}
    >
      {/* Clean White Floating Capsule Navbar */}
      <div
        className={cn(
          "relative flex h-14 sm:h-16 w-full max-w-7xl items-center justify-between rounded-2xl bg-white/95 backdrop-blur-md px-4 sm:px-6 xl:px-8 shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-black/5 transition-all duration-300",
          isVisible ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        {/* Left: Brand */}
        <div className="flex items-center shrink-0">
          <Link href="/" className="flex items-center group shrink-0" aria-label="Smart Angelos Foundation">
            <div className="relative flex h-13 w-13 sm:h-[72px] sm:w-[72px] md:h-[78px] md:w-[78px] items-center justify-center shrink-0">
              <Image
                src="/logo-transparent.png"
                alt="Smart Angelos Foundation"
                width={92}
                height={92}
                className="h-full w-full object-contain scale-125 transition-transform duration-200 group-hover:scale-130"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-2.5 xl:gap-4 2xl:gap-5 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link, idx) => {
            const fullHref = link.href.startsWith("#")
              ? pathname === "/"
                ? link.href
                : `/${link.href}`
              : link.href;
            return (
              <div key={link.label} className="flex items-center gap-2.5 xl:gap-4 2xl:gap-5">
                <Link
                  href={fullHref}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="group relative py-1 font-[var(--font-inter)] text-[14px] xl:text-[14.5px] 2xl:text-[15px] font-medium tracking-tight text-[#2B303B] whitespace-nowrap transition-colors duration-200 hover:text-[#000066]"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#FFCC00] transition-all duration-300 ease-out group-hover:w-full rounded-full" />
                </Link>
                {idx < navLinks.length - 1 && (
                  <span className="text-slate-300/90 text-[11px] select-none" aria-hidden="true">
                    ·
                  </span>
                )}
              </div>
            );
          })}
        </nav>

        {/* Right: Apply for a Grant Button */}
        <div className="hidden lg:flex items-center shrink-0">
          <Link
            href={pathname === "/" ? "#funding" : "/#funding"}
            onClick={(e) => handleLinkClick(e, "#funding")}
            className="animated-button-gold relative inline-flex items-center justify-center rounded-[6px] border border-[#FFCC00]/50 bg-white/95 px-3.5 py-1.5 sm:px-4 sm:py-2 font-[var(--font-inter)] text-[13px] sm:text-[13.5px] font-semibold text-[#000066] whitespace-nowrap shadow-sm overflow-hidden transition-all duration-200 active:scale-[0.98] shrink-0"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="relative z-10">Apply for a Grant</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="flex lg:hidden p-2 rounded-lg text-slate-700 hover:text-[#000066] hover:bg-black/5 pointer-events-auto transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 w-full max-w-7xl rounded-2xl bg-white/95 backdrop-blur-md p-5 shadow-[0_15px_35px_rgba(0,0,0,0.12)] border border-black/5 flex flex-col gap-4 pointer-events-auto transition-all animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-2.5">
            {navLinks.map((link) => {
              const fullHref = link.href.startsWith("#")
                ? pathname === "/"
                  ? link.href
                  : `/${link.href}`
                : link.href;
              return (
                <Link
                  key={link.label}
                  href={fullHref}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="group relative inline-flex items-center w-fit font-[var(--font-inter)] text-[15px] font-medium tracking-tight text-[#2B303B] py-1 hover:text-[#000066] transition-colors duration-200"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#FFCC00] transition-all duration-300 ease-out group-hover:w-full rounded-full" />
                </Link>
              );
            })}
          </nav>

          <div className="h-px w-full bg-slate-200/80 my-1" />

          <Link
            href={pathname === "/" ? "#funding" : "/#funding"}
            onClick={(e) => handleLinkClick(e, "#funding")}
            className="animated-button-gold relative inline-flex items-center justify-center rounded-[6px] border border-[#FFCC00]/50 bg-white/95 px-4 py-2 font-[var(--font-inter)] text-[14px] font-semibold text-[#000066] shadow-sm overflow-hidden transition-all duration-200 active:scale-[0.98]"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="relative z-10">Apply for a Grant</span>
          </Link>
        </div>
      )}
    </header>
  );
}