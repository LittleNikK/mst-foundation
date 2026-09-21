"use client";

import { useRef } from "react";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Partner Slot Schema & Data                                          */
/* ------------------------------------------------------------------ */
export interface PartnerSlot {
  id: string;
  label: string;
  href?: string;
}

export const defaultPartnerSlots: PartnerSlot[] = [
  { id: "slot-04", label: "Partner slot 04", href: "#" },
  { id: "slot-05", label: "Partner slot 05", href: "#" },
  { id: "slot-06", label: "Partner slot 06", href: "#" },
  { id: "slot-07", label: "Partner slot 07", href: "#" },
  { id: "slot-01", label: "Partner slot 01", href: "#" },
  { id: "slot-02", label: "Partner slot 02", href: "#" },
  { id: "slot-03", label: "Partner slot 03", href: "#" },
  { id: "slot-08", label: "Partner slot 08", href: "#" },
];

function PartnerSlotCard({ slot }: { slot: PartnerSlot }) {
  return (
    <Link
      href={slot.href || "#"}
      className="group relative flex items-center justify-center rounded-xl sm:rounded-[14px] border border-dashed border-[#8A95A5]/40 bg-white/50 px-6 py-3 sm:px-8 sm:py-3.5 shadow-[0_2px_10px_rgba(0,0,0,0.03)] backdrop-blur-sm transition-all duration-200 hover:border-[#B88728]/60 hover:bg-white/80 hover:shadow-[0_6px_20px_rgba(0,0,0,0.07)] select-none flex-none"
    >
      <span
        style={{
          fontFamily: "var(--font-serif), Newsreader, 'Times New Roman', Georgia, serif",
        }}
        className="text-[13px] sm:text-[14px] font-normal text-[#5A6172] transition-colors duration-200 group-hover:text-[#0D1117] whitespace-nowrap"
      >
        {slot.label}
      </span>
    </Link>
  );
}

export function PartnerMarquee({
  slots = defaultPartnerSlots,
  className = "",
}: {
  slots?: PartnerSlot[];
  className?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  // Duplicate items 4x for continuous seamless loop across ultrawide viewports
  const loopedSlots = [...slots, ...slots, ...slots, ...slots];

  const handleMouseEnter = () => {
    if (trackRef.current) {
      const animations = trackRef.current.getAnimations();
      animations.forEach((anim) => {
        anim.playbackRate = 0.2;
      });
    }
  };

  const handleMouseLeave = () => {
    if (trackRef.current) {
      const animations = trackRef.current.getAnimations();
      animations.forEach((anim) => {
        anim.playbackRate = 1.0;
      });
    }
  };

  return (
    <div className={`relative w-full ${className}`}>
      {/* Eyebrow label */}
      <div className="mb-4 sm:mb-5 flex items-center gap-3">
        <div className="h-px flex-1 bg-gradient-to-r from-[#CBD5E1]/80 to-transparent" />
        <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.22em] font-semibold text-[#8A95A5] select-none whitespace-nowrap">
          Working with · Partner slots
        </p>
        <div className="h-px flex-1 bg-gradient-to-l from-[#CBD5E1]/80 to-transparent" />
      </div>

      {/* Marquee Track */}
      <div
        className="relative w-full overflow-hidden py-1"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Soft edge fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-14 sm:w-28 bg-gradient-to-r from-[#F0F5F9] via-[#F0F5F9]/80 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-14 sm:w-28 bg-gradient-to-l from-[#F0F5F9] via-[#F0F5F9]/80 to-transparent" />

        <div
          ref={trackRef}
          className="flex flex-none gap-3 sm:gap-4 pr-4 animate-marquee-left"
          style={{ animationDuration: "52s" }}
        >
          {loopedSlots.map((slot, index) => (
            <PartnerSlotCard
              key={`${slot.id}-${index}`}
              slot={slot}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PartnerMarquee;
