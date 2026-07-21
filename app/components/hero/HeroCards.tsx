"use client";


import { useEffect, useRef } from "react";
import { gsap } from "gsap";

/* ── TYPES ── */
interface ReplyCardProps {
  sender: string;
  subject: string;
  preview: string;
  time: string;
  badge?: string;
  isAgent?: boolean;
  composed?: string;
  rotate: number; // degrees, numeric for gsap
  zIndex: number;
  className?: string;
  cardRef: (el: HTMLDivElement | null) => void;
}

/* ─────────────────────────────────────────
   SUB: Single Reply Card
───────────────────────────────────────── */
function ReplyCard({
  sender,
  subject,
  preview,
  time,
  badge,
  isAgent,
  composed,
  rotate,
  zIndex,
  className = "",
  cardRef,
}: ReplyCardProps) {
  const localRef = useRef<HTMLDivElement | null>(null);

  // Hover scale/border handled with GSAP instead of Tailwind hover: utilities
  useEffect(() => {
    const el = localRef.current;
    if (!el) return;

    const onEnter = () => {
      gsap.to(el, {
        scale: 1.02,
        borderColor: "rgba(201,168,76,0.2)",
        duration: 0.3,
        ease: "power2.out",
      });
    };
    const onLeave = () => {
      gsap.to(el, {
        scale: 1,
        borderColor: "rgba(255,255,255,0.08)",
        duration: 0.3,
        ease: "power2.out",
      });
    };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={(el) => {
        localRef.current = el;
        cardRef(el);
      }}
      data-rotate={rotate}
      className={`
        absolute
        bg-[#0E1225]/90
        border border-white/[0.08]
        rounded-[14px]
        backdrop-blur-[12px]
        shadow-[0_24px_60px_rgba(0,0,0,0.5)]
        p-4
        w-[320px]
        opacity-0
        ${className}
      `}
      style={{ zIndex }}
    >
      {/* CARD HEADER */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          {/* Online dot */}
          <span
            className={`
              w-[6px] h-[6px] rounded-full flex-shrink-0
              ${isAgent
                ? "bg-[#C9A84C] shadow-[0_0_6px_#C9A84C]"
                : "bg-[#28C840] shadow-[0_0_6px_#28C840]"
              }
            `}
          />
          <span className="text-[10px] uppercase tracking-[1.5px] text-[#52526A] font-semibold">
            {isAgent ? "ColdFlow · AI" : sender}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {badge && (
            <span
              className="
                text-[9px] uppercase tracking-[1px] font-bold
                bg-[rgba(201,168,76,0.12)] text-[#C9A84C]
                px-2 py-[2px] rounded-[3px]
              "
            >
              {badge}
            </span>
          )}
          <span className="text-[10px] text-[#52526A]">{time}</span>
        </div>
      </div>

      {/* SUBJECT */}
      <p
        className="
          text-[15px] font-semibold text-[#E8E8F8]
          leading-[1.3] tracking-[-0.2px] mb-2
        "
        style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
      >
        {subject}
      </p>

      {/* PREVIEW */}
      <p className="text-[12px] text-[#52526A] leading-[1.6] line-clamp-2">
        {preview}
      </p>

      {/* COMPOSED BADGE (agent card only) */}
      {composed && (
        <div className="flex items-center gap-2 mt-3 pt-3 border-t border-white/[0.06]">
          <span className="block w-3 h-[1px] bg-[#C9A84C]" />
          <span className="text-[10px] uppercase tracking-[1px] text-[#52526A] font-semibold">
            {composed}
          </span>
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────
   MAIN: HERO CARDS
───────────────────────────────────────── */
export default function HeroCards() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const pathsRef = useRef<(SVGPathElement | null)[]>([]);
  const dotsRef = useRef<(SVGCircleElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Container fade-in
      gsap.fromTo(
        containerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, delay: 0.3, ease: "power1.out" }
      );

      // Dashed connection dots pop-in with the lines
      gsap.fromTo(
        dotsRef.current,
        { opacity: 0, scale: 0 },
        {
          opacity: 0.5,
          scale: 1,
          duration: 0.4,
          delay: 0.9,
          stagger: 0.15,
          ease: "back.out(2)",
        }
      );

      // Dashed lines "draw in" then loop the marching-ants effect
      pathsRef.current.forEach((path, i) => {
        if (!path) return;
        const length = path.getTotalLength();
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
          opacity: 0.4,
        });
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 0.8,
          delay: 0.6 + i * 0.15,
          ease: "power2.inOut",
          onComplete: () => {
            // switch to the dashed marching pattern once drawn in
            gsap.set(path, { strokeDasharray: "4 6", strokeDashoffset: 0 });
            gsap.to(path, {
              strokeDashoffset: i % 2 === 0 ? -40 : 40,
              duration: 3,
              repeat: -1,
              ease: "none",
            });
          },
        });
      });

      // Cards: staggered fade + rise + settle into their rotation
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        const rotate = Number(card.dataset.rotate) || 0;
        gsap.fromTo(
          card,
          { opacity: 0, y: 24, rotate: 0 },
          {
            opacity: 1,
            y: 0,
            rotate,
            duration: 0.7,
            delay: 0.5 + i * 0.2,
            ease: "power3.out",
          }
        );
      });

      // Subtle ambient glow breathing
      gsap.to(glowRef.current, {
        opacity: 0.7,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative hidden lg:flex items-center justify-center h-[580px]"
    >
      {/* ── PURPLE AMBIENT GLOW ── */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 55% 50%, rgba(100,60,200,0.15) 0%, transparent 70%)",
        }}
      />

      {/* ── SVG DASHED CONNECTION LINES ── */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 600 580"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Line: Card 1 (top) → Card 2 (center) */}
        <path
          ref={(el) => { pathsRef.current[0] = el; }}
          d="M 370 120 L 300 270"
          stroke="#C9A84C"
          strokeWidth="1"
          strokeLinecap="round"
        />
        {/* Line: Card 2 (center) → Card 3 (bottom) */}
        <path
          ref={(el) => { pathsRef.current[1] = el; }}
          d="M 260 340 L 350 440"
          stroke="#C9A84C"
          strokeWidth="1"
          strokeLinecap="round"
        />
        {/* Dot at intersections */}
        <circle
          ref={(el) => { dotsRef.current[0] = el; }}
          cx="370" cy="120" r="3" fill="#C9A84C"
        />
        <circle
          ref={(el) => { dotsRef.current[1] = el; }}
          cx="300" cy="270" r="3" fill="#C9A84C"
        />
        <circle
          ref={(el) => { dotsRef.current[2] = el; }}
          cx="350" cy="440" r="3" fill="#C9A84C"
        />
      </svg>

      {/* ── CARD 1 — top right (reply from Nike) ── */}
      <ReplyCard
        cardRef={(el) => { cardsRef.current[0] = el; }}
        sender="sarah@nike.com"
        subject="Re: Your motion pitch"
        preview="Loved the angle on our Reels, this is exactly what we've been looking for..."
        time="TUE · 09:14"
        rotate={-2}
        zIndex={10}
        className="top-[20px] right-[20px]"
      />

      {/* ── CARD 2 — center prominent (ColdFlow Agent) ── */}
      <ReplyCard
        cardRef={(el) => { cardsRef.current[1] = el; }}
        sender=""
        subject="A short note about your freelance work"
        preview="Saw your portfolio last Thursday. The AdidasSME reel was exactly the kind of motion we need for our next drop..."
        time="JUST NOW"
        badge="Just Now"
        isAgent
        composed="Composed · 180ms"
        rotate={1.5}
        zIndex={20}
        className="
          top-[160px] left-[40px]
          shadow-[0_32px_80px_rgba(0,0,0,0.6),0_0_0_1px_rgba(201,168,76,0.15)]
        "
      />

      {/* ── CARD 3 — bottom right (meeting confirmed) ── */}
      <ReplyCard
        cardRef={(el) => { cardsRef.current[2] = el; }}
        sender="marcus@adidas.co"
        subject="Meeting confirmed — Friday 3pm"
        preview="Works on my end. I'll bring the creative lead. Looking forward to it."
        time="+30m"
        rotate={2.5}
        zIndex={10}
        className="bottom-[20px] right-[10px]"
      />
    </div>
  );
}