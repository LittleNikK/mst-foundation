"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { markHeroLoaded } from "@/lib/loaderState";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#governance", label: "Governance" },
  { href: "#funding", label: "Funding" },
  { href: "#validators", label: "Validators" },
  { href: "#research", label: "Research" },
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
          "flex h-14 sm:h-16 w-full max-w-7xl items-center justify-between rounded-2xl bg-white/95 backdrop-blur-md px-4 sm:px-6 xl:px-8 shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-black/5 transition-all duration-300",
          isVisible ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        {/* Left: Brand */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
          <div className="relative flex h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 items-center justify-center overflow-hidden rounded-full shrink-0">
            <Image
              src="/logo.png"
              alt="Smart Angelos Foundation Logo"
              width={44}
              height={44}
              className="h-full w-full object-contain transition-transform duration-200 group-hover:scale-105"
              priority
            />
          </div>
          <span className="text-sm sm:text-base md:text-[17px] font-bold tracking-tight text-slate-900 whitespace-nowrap">
            Smart Angelos
          </span>
        </Link>

        {/* Desktop Nav Items + Action Button */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-8">
          {/* Navigation Links with middle dot separators */}
          <nav className="flex items-center gap-1.5 xl:gap-2.5 2xl:gap-3.5">
            {navLinks.map((link, idx) => {
              const fullHref = link.href.startsWith("#")
                ? pathname === "/"
                  ? link.href
                  : `/${link.href}`
                : link.href;
              return (
                <div key={link.label} className="flex items-center gap-1.5 xl:gap-2.5 2xl:gap-3.5">
                  <Link
                    href={fullHref}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="font-[var(--font-inter)] text-[13.5px] xl:text-[14px] 2xl:text-[14.5px] font-medium tracking-tight text-[#2B303B] whitespace-nowrap transition-colors duration-150 hover:text-black"
                  >
                    {link.label}
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

          {/* Apply for a Grant Button */}
          <Link
            href={pathname === "/" ? "#funding" : "/#funding"}
            onClick={(e) => handleLinkClick(e, "#funding")}
            className="inline-flex items-center justify-center rounded-[6px] border border-[#B68B42] bg-[#B68B42]/10 px-3.5 py-1.5 sm:px-4 sm:py-2 font-[var(--font-inter)] text-[13px] sm:text-[13.5px] font-medium text-[#9E7329] whitespace-nowrap transition-all duration-200 hover:bg-[#B68B42] hover:text-white active:scale-[0.98] shrink-0"
          >
            Apply for a Grant
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="flex lg:hidden p-2 rounded-lg text-slate-700 hover:text-black hover:bg-black/5 pointer-events-auto transition-colors"
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
                  className="font-[var(--font-inter)] text-[15px] font-medium tracking-tight text-[#2B303B] py-1 hover:text-black transition-colors"
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="h-px w-full bg-slate-200/80 my-1" />

          <Link
            href={pathname === "/" ? "#funding" : "/#funding"}
            onClick={(e) => handleLinkClick(e, "#funding")}
            className="inline-flex items-center justify-center rounded-[6px] border border-[#B68B42] bg-[#B68B42]/10 px-4 py-2 font-[var(--font-inter)] text-[14px] font-medium text-[#9E7329] transition-all hover:bg-[#B68B42] hover:text-white"
          >
            Apply for a Grant
          </Link>
        </div>
      )}
    </header>
  );
}