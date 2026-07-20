"use client";

import Link from "next/link";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
 
gsap.registerPlugin(useGSAP);

const STATS = [
  { value: "14.2%", label: "Reply rate" },
  { value: "10×",   label: "Faster than manual" },
  { value: "$9",    label: "Per month" },
];

export default function HeroText() {
    const container = useRef<HTMLDivElement>(null)


useGSAP(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },
    });

    tl.from(".eyebrow", {
      opacity: 0,
      y: 20,
      duration: 0.6,
    })
      .from(
        ".headline-line",
        {
          opacity: 0,
          y: 60,
          duration: 0.9,
          stagger: 0.12,
        },
        "-=0.3"
      )
      .from(
        ".body",
        {
          opacity: 0,
          y: 30,
          duration: 0.7,
        },
        "-=0.5"
      )
      .from(
        ".cta",
        {
          opacity: 0,
          y: 25,
          duration: 0.6,
        },
        "-=0.4"
      )
      .from(
        ".stat",
        {
          opacity: 0,
          y: 20,
          stagger: 0.08,
          duration: 0.5,
        },
        "-=0.3"
      );

    gsap.to(".gradient-word", {
      backgroundPosition: "200% center",
      duration: 4,
      ease: "none",
      repeat: -1,
    });

    gsap.to(".cursor", {
      opacity: 0,
      repeat: -1,
      yoyo: true,
      duration: 0.6,
      ease: "none",
    });
  }, { scope: container });


  return (
    <div  ref={container} className="flex flex-col ">

      {/* ── EYEBROW ── */}
      <div className="eyebrow flex items-center gap-3 mb-10">
        <span className=" block w-6 h-[1px] bg-[#C9A84C] opacity-80" />
        <span
          className=" text-[10px] font-bold uppercase tracking-[2.5px] text-[#C9A84C] opacity-80 ">
          V1 · Beta Release
        </span>
      </div>

      {/* ── HEADLINE ── */}
      <h1
        className="  font-black leading-[1.0] tracking-[-3px]  text-[64px] md:text-[80px] lg:text-[92px]  mb-8 "  >
        {/* Line 1 */}
        <span className="headline-line block text-[#F0F0F8]">
          Cold emails that
        </span>

        {/* Line 2 — gradient word + cursor */}
        <span className="  headline-line block relative">
          {/* "command" with gold → amber gradient */}
          <span
            className="gradient-word  font-[900] italic  bg-clip-text text-transparent  select-none "
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              backgroundImage:
                "linear-gradient(100deg, #C9A84C 0%, #E8C96A 40%, #F5DFA0 65%, #C9A84C 100%)",
              backgroundSize: "200% auto",
              
            }}
          >
            command
          </span>

          {/* Blinking cursor */}
          <span className=" cursor inline-block ml-[2px]  w-[3px] h-[0.82em] bg-[#C9A84C] align-middle relative top-[-2px] "
            aria-hidden="true"
          />
        </span>

        {/* Line 3 */}
        <span className=" headline-line block text-[#F0F0F8]">
          every inbox.
        </span>
      </h1>

      {/* ── BODY TEXT ── */}
      <p
        className="body text-[15px] md:text-[16px] text-[#6B6B88]  leading-[1.8] max-w-[480px] mb-10 " >
        ColdFlow is the intelligence layer for cold outreach.
        Research, composition, and signal —{" "}
        <span className="text-[#8888A8]">one continuous flow.</span>
      </p>

      {/* ── CTA BUTTONS ── */}
      <div className= " cta flex items-center gap-3 mb-12 flex-wrap">
        <Link
 href="/sign-up"
 className="inline-flex items-center gap-2 bg-[#C9A84C] text-[#070912]  text-[14px] font-black  px-8 py-[13px] rounded-[8px]  tracking-[0.1px]  hover:bg-[#D9B85C]  hover:shadow-[0_16px_40px_rgba(201,168,76,0.3)]  hover:-translate-y-[2px]  transition-all duration-200">
          Get Early Access
          <span className="text-[16px] leading-none">→</span>
        </Link>

        <button
          className=" text-[14px] font-medium text-[#6B6B88]  border border-white/[0.08]  px-7 py-[13px] rounded-[8px]  hover:border-white/[0.16] hover:text-[#F0F0F8]  transition-all duration-200"  >
          Watch Demo
        </button>
      </div>

      {/* ── STATS ROW ── */}
      <div className=" flex gap-8 pt-8 border-t border-white/[0.06]">
        {STATS.map(({ value, label }, i) => (
          <div key={label} className=" stat flex items-start gap-8">
            <div>
              <p
                className="
                  text-[26px] font-black leading-none
                  tracking-[-1px] text-[#C9A84C] mb-1
                "
              >
                {value}
              </p>
              <p
                className="
                  text-[11px] uppercase tracking-[0.5px]
                  text-[#52526A] font-medium
                "
              >
                {label}
              </p>
            </div>
            {/* divider between stats (not after last) */}
            {i < STATS.length - 1 && (
              <div className="w-[1px] h-8 bg-white/[0.06] self-center" />
            )}
          </div>
        ))}
      </div>

    </div>
  );
}