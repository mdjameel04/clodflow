"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

const messages = [
  "Initializing AI...",
  "Loading Prospect Engine...",
  "Researching Companies...",
  "Generating Personalized Emails...",
  "Optimizing Deliverability...",
  "Launching ColdFlow..."
];

export default function LoadingScreen({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev === messages.length - 1) {
          clearInterval(interval);

          gsap.to(".loader", {
            opacity: 0,
            duration: 0.8,
            delay: 0.5,
            onComplete,
          });

          return prev;
        }

        return prev + 1;
      });
    }, 700);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="loader fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#070912]">
      <h1 className="text-5xl font-bold text-white">
        Cold<span className="text-yellow-500">Flow</span>
      </h1>

      <p className="mt-6 text-[#8E8EA0]">{messages[index]}</p>

      <div className="mt-10 h-[2px] w-64 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full bg-yellow-500 transition-all duration-700"
          style={{
            width: `${((index + 1) / messages.length) * 100}%`,
          }}
        />
      </div>
    </div>
  );
}