"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ─── Types ───────────────────────────────────────────────
type PlanFeature = {
  text: string;
  included: boolean;
};

type Plan = {
  id: string;
  name: string;
  price: string;
  period: string;
  features: PlanFeature[];
  cta: string;
  featured: boolean;
};

// ─── Data ────────────────────────────────────────────────
const PLANS: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    price: "$0",
    period: "Forever free",
    featured: false,
    cta: "Get Started",
    features: [
      { text: "3 emails per month",  included: true  },
      { text: "Basic templates",     included: true  },
      { text: "Email preview",       included: true  },
      { text: "AI research",         included: false },
      { text: "Auto-send",           included: false },
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: "$9",
    period: "per month · cancel anytime",
    featured: true,
    cta: "Start Free Trial",
    features: [
      { text: "Unlimited emails",    included: true },
      { text: "AI company research", included: true },
      { text: "8 tone modes",        included: true },
      { text: "A/B testing",         included: true },
      { text: "n8n auto-send",       included: true },
      { text: "Analytics dashboard", included: true },
    ],
  },
  {
    id: "teams",
    name: "Teams",
    price: "$29",
    period: "per month · up to 5 users",
    featured: false,
    cta: "Contact Sales",
    features: [
      { text: "Everything in Pro",   included: true },
      { text: "5 team seats",        included: true },
      { text: "Shared templates",    included: true },
      { text: "Team analytics",      included: true },
      { text: "Priority support",    included: true },
    ],
  },
];

// ─── Feature Row ─────────────────────────────────────────
function FeatureRow({
  feature,
  featured,
}: {
  feature: PlanFeature;
  featured: boolean;
}) {
  return (
    <li className="flex items-center gap-3 py-[14px] border-b border-[#2A2A35] last:border-b-0">
      {feature.included ? (
        <span className="text-[#C9A84C] text-[13px] font-bold flex-shrink-0">
          ✦
        </span>
      ) : (
        <span className="text-[#3A3A45] text-[16px] font-bold flex-shrink-0 leading-none">
          —
        </span>
      )}
      <span
        className={`text-[14px] leading-snug ${
          feature.included
            ? featured
              ? "text-[#C9A84C]"
              : "text-[#9A9AAA]"
            : "text-[#3A3A45]"
        }`}
      >
        {feature.text}
      </span>
    </li>
  );
}

// ─── Featured Plan Card ───────────────────────────────────
function FeaturedCard({ plan }: { plan: Plan }) {
  return (
    <div className="price-card relative flex flex-col">
      {/* Most Popular badge */}
      <div className="absolute -top-[18px] left-1/2 -translate-x-1/2 z-10">
        <div className="bg-[#C9A84C] text-[#0C0C0F] text-[11px] font-black uppercase tracking-[1.5px] px-5 py-[7px] rounded-full whitespace-nowrap">
          Most Popular
        </div>
      </div>

      <div
        className="
          flex flex-col flex-1
          bg-[#131318]
          border-2 border-[#C9A84C]
          rounded-2xl p-8 pt-10
          shadow-[0_0_40px_rgba(201,168,76,0.12)]
        "
      >
        <p className="text-[11px] font-semibold uppercase tracking-[2px] text-[#6B6B7A] mb-6">
          {plan.name}
        </p>
        <p className="text-[64px] font-black leading-none tracking-[-3px] text-[#C9A84C] mb-2">
          {plan.price}
        </p>
        <p className="text-[13px] text-[#6B6B7A] mb-8">{plan.period}</p>

        <ul className="flex flex-col mb-8 flex-1">
          {plan.features.map((f, i) => (
            <FeatureRow key={i} feature={f} featured={true} />
          ))}
        </ul>

        <button
          className="
            w-full py-4 rounded-xl
            bg-[#C9A84C] hover:bg-[#D9B85C]
            text-[#0C0C0F] text-[15px] font-black
            transition-all duration-200
            hover:shadow-[0_8px_24px_rgba(201,168,76,0.35)]
            active:scale-[0.98]
          "
        >
          {plan.cta}
        </button>
      </div>
    </div>
  );
}

// ─── Regular Plan Card ────────────────────────────────────
function RegularCard({ plan }: { plan: Plan }) {
  return (
    <div className="price-card flex flex-col">
      <div
        className="
          flex flex-col flex-1
          bg-[#0F0F14]
          border border-[#2A2A35]
          rounded-2xl p-8
          transition-colors duration-300
          hover:border-[#3A3A45]
        "
      >
        <p className="text-[11px] font-semibold uppercase tracking-[2px] text-[#6B6B7A] mb-6">
          {plan.name}
        </p>
        <p className="text-[64px] font-black leading-none tracking-[-3px] text-[#F0F0F8] mb-2">
          {plan.price}
        </p>
        <p className="text-[13px] text-[#6B6B7A] mb-8">{plan.period}</p>

        <ul className="flex flex-col mb-8 flex-1">
          {plan.features.map((f, i) => (
            <FeatureRow key={i} feature={f} featured={false} />
          ))}
        </ul>

        <button
          className="
            w-full py-4 rounded-xl
            bg-transparent
            border border-[#2A2A35]
            hover:border-[#4A4A55]
            text-[#9A9AAA] hover:text-[#F0F0F8]
            text-[15px] font-semibold
            transition-all duration-200
            active:scale-[0.98]
          "
        >
          {plan.cta}
        </button>
      </div>
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────
const Pricing = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const st = {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none" as const,
      };

      gsap.from(".prc-eyebrow-line", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 0.4,
        ease: "power2.out",
        scrollTrigger: st,
      });

      gsap.from(".prc-eyebrow-text", {
        y: 16,
        opacity: 0,
        duration: 0.4,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: st,
      });

      gsap.from(".prc-heading", {
        y: 50,
        opacity: 0,
        duration: 0.9,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: st,
      });

      gsap.from(".price-card", {
        y: 50,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.15,
        delay: 0.4,
        scrollTrigger: {
          trigger: ".prc-grid",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="bg-[#0C0C0F] px-8 md:px-12 lg:px-24 py-24"
    >
      <div className="max-w-[1200px] mx-auto">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <span className="prc-eyebrow-line block w-5 h-[1.5px] bg-[#C9A84C] origin-left" />
          <span className="prc-eyebrow-text text-[11px] font-semibold uppercase tracking-[2.5px] text-[#C9A84C]">
            Pricing
          </span>
        </div>

        {/* Heading */}
        <h2 className="prc-heading text-[48px] md:text-[56px] font-black leading-[1.08] tracking-[-2px] text-[#F0F0F8] mb-16">
          One deal pays for
          <br />
          a year of ColdFlow.
        </h2>

        {/* Cards — pt-6 gives room for the "Most Popular" badge */}
        <div className="prc-grid grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 items-start">
          {PLANS.map((plan) =>
            plan.featured ? (
              <FeaturedCard key={plan.id} plan={plan} />
            ) : (
              <RegularCard key={plan.id} plan={plan} />
            )
          )}
        </div>

      </div>
    </section>
  );
};

export default Pricing;