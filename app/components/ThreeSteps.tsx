"use client";

const steps = [
  {
    step: "STEP 01",
    icon: "🎯",
    title: "Tell us what you do",
    description:
      "Describe your service and best results. ColdFlow extracts your proof points and builds your pitch foundation.",
  },
  {
    step: "STEP 02",
    icon: "🔍",
    title: "AI researches targets",
    description:
      "Paste company names. ColdFlow researches each one — finding pain points, gaps, and personalized angles in seconds.",
  },
  {
    step: "STEP 03",
    icon: "⚡",
    title: "Send & get replies",
    description:
      "Review the preview, refine in chat, auto-send via Gmail or n8n. Follow-ups happen automatically. You just close deals.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="bg-[#070912] px-6 md:px-12 py-24">
      <div className="max-w-[1200px] mx-auto">
        {/* EYEBROW */}
        <div className="flex items-center gap-3 mb-6">
          <span className="block w-5 h-[1px] bg-[#C9A84C]" />
          <span className="text-[11px] font-bold uppercase tracking-[2.5px] text-[#C9A84C]">
            Process
          </span>
        </div>

        {/* HEADING */}
        <h2 className="text-[44px] md:text-[52px] font-black leading-[1.05] tracking-[-2px] text-[#F0F0F8] mb-16">
          Three steps to
          <br />
          your next client.
        </h2>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-white/[0.08] rounded-2xl overflow-hidden">
          {steps.map((step, i) => (
            <div
              key={step.step}
              className={`
                group relative p-10
                bg-[#0E1120]
                hover:bg-[#131728]
                transition-colors duration-300
                ${i < steps.length - 1 ? "md:border-r border-white/[0.08]" : ""}
                ${i > 0 ? "border-t md:border-t-0 border-white/[0.08]" : ""}
              `}
            >
              {/* STEP LABEL */}
              <p className="text-[11px] font-semibold uppercase tracking-[2px] text-[#52526A] mb-7">
                {step.step}
              </p>

              {/* ICON BOX */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-7 bg-[#1A1D2E] border border-white/[0.06] group-hover:border-[#C9A84C]/20 group-hover:bg-[#1E1F30] transition-all duration-300" >
                {step.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-[17px] font-bold text-[#F0F0F8] mb-3 tracking-[-0.3px]">
                {step.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-[14px] text-[#8888A8] leading-[1.75]">
                {step.description}
              </p>

              {/* HOVER GOLD LINE at bottom */}
              <span
                className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-[#C9A84C]/0 via-[#C9A84C]/40 to-[#C9A84C]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"  />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
