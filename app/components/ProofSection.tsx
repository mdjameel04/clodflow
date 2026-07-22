"use client";

/* ─────────────────────────────────────────
   ProofSection.tsx
   "Every email, researched."

   LEFT  → Heading + description
   RIGHT → Annotated email card with
           floating gold labels
───────────────────────────────────────── */

const ANNOTATIONS = [
  { label: "Company name",   top: "8%",  right: "-44%" },
  { label: "Real data point", top: "30%", right: "-48%" },
  { label: "Social proof",   top: "52%", right: "-44%" },
  { label: "Pain identified", top: "72%", right: "-46%" },
];

/* ── Annotation pill ── */
function Annotation({
  label,
  top,
  right,
}: {
  label: string;
  top: string;
  right: string;
}) {
  return (
    <div
      className="absolute flex items-center gap-2"
      style={{ top, right }}
    >
      {/* connecting line */}
      <span className="block w-8 h-[1px] bg-[#C9A84C] opacity-50" />
      {/* pill */}
      <span
        className="
          text-[10px] font-bold uppercase tracking-[1px]
          text-[#C9A84C] whitespace-nowrap
          bg-[rgba(201,168,76,0.08)]
          border border-[rgba(201,168,76,0.2)]
          px-[10px] py-[4px] rounded-[4px]
        "
      >
        {label} ✦
      </span>
    </div>
  );
}

/* ── Annotated email card ── */
function EmailCard() {
  return (
    <div className="relative pr-[160px]">
      {/* Card */}
      <div
        className="
          bg-[#0E1225]
          border border-[rgba(201,168,76,0.15)]
          rounded-[14px] p-6
          text-[13px] leading-[2]
          shadow-[0_40px_80px_rgba(0,0,0,0.4)]
        "
      >
        {/* Header fields */}
        <div
          className="
            grid grid-cols-2 gap-4
            pb-4 mb-4
            border-b border-white/[0.06]
          "
        >
          <div>
            <p className="text-[9px] uppercase tracking-[1px] text-[#52526A] font-bold mb-1">
              To
            </p>
            <p className="text-[13px] text-[#F0F0F8]">sarah@nike.com</p>
          </div>
          <div>
            <p className="text-[9px] uppercase tracking-[1px] text-[#52526A] font-bold mb-1">
              Subject
            </p>
            <p className="text-[13px] text-[#F0F0F8]">
              Your Reels Are Costing You 40% in Sales
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="text-[#8888A8] leading-[2]">
          {"Hi "}
          <span className="text-[#C9A84C] font-semibold">Sarah</span>
          {","}
          <br />
          <br />
          {"Noticed "}
          <span className="text-[#C9A84C] font-semibold">@NikeBrand</span>
          {" posts 5×/week but Reels average only "}
          <span className="text-[#C9A84C] font-semibold">12K views</span>
          {" while competitors hit 400K+."}
          <br />
          <br />
          {"Worked with "}
          <span className="text-[#C9A84C] font-semibold">AdidasSME</span>
          {" last quarter → "}
          <span className="text-[#C9A84C] font-semibold">
            3.2M views in 30 days
          </span>
          {", cart clicks up 32%."}
          <br />
          <br />
          {"Your "}
          <span className="text-[#00E5CC] font-medium">Gen-Z audience</span>
          {" responds to energy. Motion design is the gap."}
          <br />
          <br />
          {"Open to a 5-min look?"}
        </div>
      </div>

      {/* Floating annotations */}
      {ANNOTATIONS.map((a) => (
        <Annotation key={a.label} {...a} />
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────── */
export default function ProofSection() {
  return (
    <section
      className="
        relative
        bg-[#0C0F1E]
        border-t border-b border-white/[0.06]
        px-6 md:px-12 lg:px-20
        py-[120px]
        overflow-hidden
      "
    >
      {/* Subtle gold glow top-left */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── LEFT: COPY ── */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <span className="block w-5 h-[1px] bg-[#C9A84C] opacity-70" />
              <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#C9A84C] opacity-70">
                Personalization Engine
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
                text-[52px] lg:text-[60px] font-black
                leading-[1.05] tracking-[-2.5px]
                mb-6
              "
            >
              <span className="block text-[#F0F0F8]">Every email,</span>
              <span
                className="block text-[#C9A84C] tracking-[-2px]"
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                }}
              >
                researched.
              </span>
            </h2>

            {/* Body */}
            <p className="text-[15px] text-[#6B6B88] leading-[1.8] max-w-[420px] mb-8">
              Before writing a single word, ColdFlow crawls the prospect's
              website, social media, job posts, and recent news — then builds
              a custom argument only{" "}
              <span className="text-[#8888A8]">they</span> could receive.
            </p>

            {/* Feature list */}
            <ul className="flex flex-col gap-3">
              {[
                "Company website analysis",
                "Social media gap detection",
                "Recent news & job postings",
                "Competitor angle discovery",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-[14px] text-[#8888A8]"
                >
                  <span className="text-[#C9A84C] text-[10px]">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ── RIGHT: EMAIL CARD ── */}
          <div className="animate-[fadeUp_0.8s_ease-out_both]">
            <EmailCard />
          </div>

        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}