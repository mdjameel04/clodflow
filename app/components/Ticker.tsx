/* ─────────────────────────────────────────────────────────────
   Ticker.tsx  —  ColdFlow infinite marquee strip
   Pure CSS animation, no external library.
   Duplicates the items array so the loop is seamless.
───────────────────────────────────────────────────────────── */

const ITEMS = [
  "AI company research",
  "14.2% reply rate",
  "n8n auto-send",
  "8 precision tones",
  "A/B subject testing",
  "Auto follow-up sequences",
  "Personalization score",
  "Spam score checker",
  "50+ industry templates",
];

/* ─────────────────────────────────────────
   SUB: Single ticker item
───────────────────────────────────────── */
function TickerItem({ label }: { label: string }) {
  return (
    <li
      className="
        flex-shrink-0
        flex items-center gap-3
        text-[12px] font-medium uppercase tracking-[1.5px]
        text-[#52526A]
        select-none
      "
    >
      {/* Gold diamond separator */}
      <span
        className="text-[#C9A84C] text-[7px] leading-none"
        aria-hidden="true"
      >
        ◆
      </span>
      {label}
    </li>
  );
}

/* ─────────────────────────────────────────
   MAIN: TICKER
───────────────────────────────────────── */
export default function Ticker() {
  /* Duplicate so the marquee loops seamlessly */
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div
      className="
        relative w-full overflow-hidden
        bg-[#0C0F1E]
        border-t border-b border-white/[0.06]
        py-[18px]
      "
      aria-hidden="true"  /* decorative — no semantic content */
    >
      {/* Left fade */}
      <div
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10"
        style={{
          background:
            "linear-gradient(to right, #0C0F1E, transparent)",
        }}
      />

      {/* Right fade */}
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10"
        style={{
          background:
            "linear-gradient(to left, #0C0F1E, transparent)",
        }}
      />

      {/* SCROLLING TRACK */}
      <ul
        className="
          flex gap-14
          w-max
          animate-[ticker_28s_linear_infinite]
          hover:[animation-play-state:paused]
        "
      >
        {doubled.map((label, i) => (
          <TickerItem key={`${label}-${i}`} label={label} />
        ))}
      </ul>

      {/* KEYFRAME injected once */}
      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}