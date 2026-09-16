"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#ecosystem", label: "Ecosystem" },
  { href: "#what-we-do", label: "What we do" },
  { href: "#in-public", label: "In public" },
  { href: "#news", label: "News" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          "flex h-14 sm:h-16 w-full max-w-7xl items-center justify-between rounded-2xl bg-white/95 backdrop-blur-md px-5 sm:px-8 shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-black/5 transition-all duration-300",
          isVisible ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        {/* Left: Brand */}
        <Link href="/" className="flex items-center gap-3 sm:gap-3.5 group shrink-0">
          <div className="relative flex h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11 items-center justify-center overflow-hidden rounded-full shrink-0">
            <Image
              src="/logo.png"
              alt="Smart Angelos Foundation Logo"
              width={48}
              height={48}
              className="h-full w-full object-contain transition-transform duration-200 group-hover:scale-105"
              priority
            />
          </div>
          <span className="text-base sm:text-lg md:text-[19px] font-bold tracking-tight text-slate-900">
            Smart Angelos
          </span>
        </Link>

        {/* Desktop Nav Items + Action Buttons */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-10">
          {/* Navigation Links */}
          <nav className="flex items-center gap-7 xl:gap-9">
            {navLinks.map((link) => {
              const fullHref = pathname === "/" ? link.href : `/${link.href}`;
              return (
                <Link
                  key={link.label}
                  href={fullHref}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-serif text-[15px] sm:text-[15.5px] text-[#2F343F] transition-colors duration-150 hover:text-black"
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 xl:gap-3.5">
            {/* Talk to us button */}
            <Link
              href={pathname === "/" ? "#talk-to-us" : "/#talk-to-us"}
              onClick={(e) => handleLinkClick(e, "#talk-to-us")}
              className="inline-flex items-center justify-center rounded-[6px] border border-[#CCD2DC] bg-transparent px-4.5 py-1.5 sm:px-5 sm:py-2 font-serif text-[14.5px] sm:text-[15px] text-[#262B34] transition-all duration-200 hover:border-slate-400 hover:bg-black/[0.02] active:scale-[0.98]"
            >
              Talk to us
            </Link>

            {/* Read the whitepaper button */}
            <Link
              href="/whitepaper"
              className="inline-flex items-center justify-center rounded-[6px] border border-[#B68B42] bg-transparent px-4.5 py-1.5 sm:px-5 sm:py-2 font-serif text-[14.5px] sm:text-[15px] text-[#9E7329] transition-all duration-200 hover:border-[#8E631B] hover:bg-[#B68B42]/10 active:scale-[0.98]"
            >
              Read the whitepaper
            </Link>
          </div>
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
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const fullHref = pathname === "/" ? link.href : `/${link.href}`;
              return (
                <Link
                  key={link.label}
                  href={fullHref}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-serif text-[16px] text-[#2F343F] py-1.5 hover:text-black transition-colors"
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="h-px w-full bg-slate-200/80 my-1" />

          <div className="flex flex-col sm:flex-row gap-2.5">
            <Link
              href={pathname === "/" ? "#talk-to-us" : "/#talk-to-us"}
              onClick={(e) => handleLinkClick(e, "#talk-to-us")}
              className="inline-flex items-center justify-center rounded-[6px] border border-[#CCD2DC] bg-transparent px-4 py-2 font-serif text-[15px] text-[#262B34] transition-all hover:bg-slate-50"
            >
              Talk to us
            </Link>

            <Link
              href="/whitepaper"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center rounded-[6px] border border-[#B68B42] bg-transparent px-4 py-2 font-serif text-[15px] text-[#9E7329] transition-all hover:bg-[#B68B42]/10"
            >
              Read the whitepaper
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}