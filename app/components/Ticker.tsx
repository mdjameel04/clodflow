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

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div
      className="relative w-full overflow-hidden bg-[#0C0F1E] border-y border-white/[0.06] py-[18px]"
      aria-hidden="true"
    >
      {/* Left fade */}
      <div
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10"
        style={{
          background: "linear-gradient(to right, #0C0F1E, transparent)",
        }}
      />

      {/* Right fade */}
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10"
        style={{
          background: "linear-gradient(to left, #0C0F1E, transparent)",
        }}
      />

      {/* Scrolling Track */}
      <ul className="flex w-max gap-14 animate-[ticker_28s_linear_infinite] hover:[animation-play-state:paused]">
        {doubled.map((label, i) => (
          <li
            key={`${label}-${i}`}
            className="flex shrink-0 items-center gap-3 text-[12px] font-medium uppercase tracking-[1.5px] text-[#cccfb6] select-none"
          >
            <span
              className="text-[#C9A84C] text-[7px] leading-none"
              aria-hidden="true"
            >
              ◆
            </span>

            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}