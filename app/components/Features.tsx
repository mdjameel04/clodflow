"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ─── Types ───────────────────────────────────────────────
type FeatureItem = {
  icon: string;
  title: string;
  description: string;
};

// ─── Data ────────────────────────────────────────────────
const FEATURES: FeatureItem[] = [
  {
    icon: "🤖",
    title: "Real-time Company Research",
    description:
      "Analyzes websites, social media, job postings, and recent news. Finds the exact angle that makes each email impossible to ignore.",
  },
  {
    icon: "🎨",
    title: "8 Precision Tones",
    description:
      "Formal, casual, bold, data-driven, story-led — match the exact tone your prospect responds to. Test which converts.",
  },
  {
    icon: "📊",
    title: "A/B Testing Engine",
    description:
      "Generate 3 variants per email. See which subject line, opening, and CTA gets the most replies. Compound your results over time.",
  },
  {
    icon: "⚡",
    title: "n8n Auto-Send + Follow-up",
    description:
      "Connect Gmail. ColdFlow sends, waits 5 days, and auto-sends a different-angle follow-up to non-responders. Hands-free sequences.",
  },
];

// ─── Component ───────────────────────────────────────────
const Features = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const baseScrollTrigger = {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none" as const,
      };

      // Eyebrow line scale in
      gsap.from(".feat-eyebrow-line", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 0.4,
        ease: "power2.out",
        scrollTrigger: baseScrollTrigger,
      });

      // Eyebrow text fade up
      gsap.from(".feat-eyebrow-text", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: baseScrollTrigger,
      });

      // Heading fade up
      gsap.from(".feat-heading", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.3,
        scrollTrigger: baseScrollTrigger,
      });

      // Cards stagger
      gsap.from(".feat-card", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".feat-grid",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Border logic per card position in 2-col grid
  const cardBorder = (i: number) => {
    // top-left  → right + bottom
    if (i === 0) return "border-r border-b border-[#2A2A35]";
    // top-right → bottom only
    if (i === 1) return "border-b border-[#2A2A35]";
    // bottom-left → right only
    if (i === 2) return "border-r border-[#2A2A35]";
    // bottom-right → no extra border
    return "";
  };

  return (
    <section
      id="features"
      ref={sectionRef}
      className="bg-[#0C0C0F] px-8 md:px-12 lg:px-24 py-24"
    >
      {/* ── Single max-width wrapper — grid lives INSIDE it ── */}
      <div className="max-w-[1200px] mx-auto">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="feat-eyebrow-line block w-5 h-[1.5px] bg-[#C9A84C] origin-left" />
          <span className="feat-eyebrow-text text-[11px] font-semibold uppercase tracking-[2.5px] text-[#C9A84C]">
            Features
          </span>
        </div>

        {/* Heading */}
        <h2 className="feat-heading text-[44px] md:text-[52px] font-black leading-[1.1] tracking-[-2px] text-[#F0F0F8] mb-16">
          Built for{" "}
          <span className="bg-gradient-to-r from-[#C9A84C] to-[#F4E3A1] text-transparent bg-clip-text">
            people who
          </span>
          <br />
          take outreach{" "}
          <span className="bg-gradient-to-r from-[#C9A84C] to-[#F4E3A1] text-transparent bg-clip-text">
            seriously.
          </span>
        </h2>

        {/* Feature Grid */}
        <div className="feat-grid grid grid-cols-1 md:grid-cols-2 border border-[#2A2A35] rounded-2xl overflow-hidden">
          {FEATURES.map((item, i) => (
            <div
              key={i}
              className={`
                feat-card group
                flex flex-col gap-5 p-8
                bg-[#131318]
                transition-colors duration-300
                hover:bg-[#1A1A21]
                ${cardBorder(i)}
              `}
            >
              {/* Icon Box */}
              <div
                className="
                  w-[52px] h-[52px] rounded-xl
                  flex items-center justify-center text-[22px]
                  flex-shrink-0
                  bg-[#1A1A21] border border-[#2A2A35]
                  group-hover:border-[rgba(201,168,76,0.35)]
                  group-hover:bg-[rgba(201,168,76,0.08)]
                  transition-all duration-300
                "
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-[17px] font-bold leading-snug tracking-[-0.3px] text-[#F0F0F8]">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[14px] leading-[1.75] text-[#6B6B7A]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;