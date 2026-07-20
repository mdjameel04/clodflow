"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useUser,UserButton } from "@clerk/nextjs";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string>("#");
  
  const {isSignedIn} = useUser()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-4 left-0 right-0 z-50 transition-all duration-300 ease-in-out
        ${
          scrolled
            ? "bg-[#070912]/95 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            : "bg-transparent border-b border-transparent"
        }
      `}
    >
      <div className="max-w-[1300px] mx-auto px-6 h-[60px] flex items-center justify-between">
        {/* LOGO */}  
        <Link href="/" className="flex items-center gap-[9px] group">
      
          <Image src={"/logo1.png"} alt="logo" width={50} height={60}   />
          <span className="text-2xl font-blod tracking-[-0.2px] text-[#F0F0F8]">
            Cold
            <span className="text-yellow-500 font-bold ">Flow</span>
          </span>
        </Link>

        {/* DESKTOP LINKS — centered */}
<ul className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2 list-none">
  {[
    { label: "How-it-works", href: "#how" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ].map(({ label, href }) => (
    <li key={href}>
      <a
        href={href}
        onClick={() => setActive(href)}
        className={`relative inline-block pb-2 text-[18px] font-medium transition-all duration-300 ${
          active === href
            ? "text-[#e5fc16]"
            : "text-[#8888A8] hover:text-[#f8f9f4]"
        }`}
      >
        {label}

        <span
          className={`absolute left-0 -bottom-[4px] h-[2px] w-full rounded-full bg-[#e5fc16]
            transition-transform duration-300 origin-left
            ${active === href ? "scale-x-100" : "scale-x-0"}
          `}
        />
      </a>
    </li>
  ))}
</ul>

        {/* RIGHT ACTIONS */}
         {/* RIGHT ACTIONS */}
<div className="hidden md:flex items-center gap-[10px]">
 {!isSignedIn ? (
  <>
    <Link
      href="/sign-in"
      className="text-[18px] font-medium text-[#8888A8]
        border border-white/[0.08] px-[18px] py-[7px] rounded-[6px]
        hover:border-[#C9A84C]/40 hover:text-[#C9A84C]
        transition-all duration-200"
    >
      Sign in
    </Link>

    <Link
      href="/sign-up"
      className="text-[15px] font-[800] text-[#070912]
        bg-[#C9A84C] px-[20px] py-[8px] rounded-[6px]
        hover:bg-[#D9B85C] hover:shadow-[0_6px_20px_rgba(201,168,76,0.3)]
        transition-all duration-200 tracking-[0.1px]"
    >
      Join waitlist
    </Link>
  </>
) : (
  <>
    <Link
      href="/dashboard"
      className="text-[15px] font-[700] text-[#070912]
        bg-[#C9A84C] px-[20px] py-[8px] rounded-[6px]
        hover:bg-[#D9B85C] hover:shadow-[0_6px_20px_rgba(201,168,76,0.3)]
        transition-all duration-200 tracking-[0.1px]"
    >
      Dashboard
    </Link>

    <UserButton
      appearance={{
        elements: {
          avatarBox: "w-9 h-9",
        },
      }}
    />
  </>
)}
</div>

        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-[1.5px] bg-[#8888A8] transition-all duration-300
              ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-[#8888A8] transition-all duration-300
              ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-[#8888A8] transition-all duration-300
              ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`}
          />
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden
          bg-[#0C0F1E]/98 backdrop-blur-xl border-t border-white/[0.06]
          ${menuOpen ? "max-h-[380px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-6 py-6 flex flex-col gap-1 text-center">
          {[
  { label: "How it works", href: "#how" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
].map(({ label, href }) => (
  <a
    key={href}
    href={href}
    onClick={() => {
      setActive(href);
      setMenuOpen(false);
    }}
    className={`py-3 border-b border-white/[0.05] text-[14px] font-medium transition-colors duration-300 ${
      active === href
        ? "text-[#e5fc16]"
        : "text-[#8888A8] hover:text-[#F0F0F8]"
    }`}
  >
    {label}
  </a>
))}

         <div className="flex flex-col gap-3 mt-4 h-auto">
 {!isSignedIn ? (
  <>
    <Link
      href="/sign-in"
      className="text-[14px] font-medium text-center text-[#8888A8]
        border border-white/[0.08] px-5 py-3 rounded-[6px]
        hover:border-[#C9A84C]/40 hover:text-[#C9A84C]
        transition-all duration-200"
      onClick={() => setMenuOpen(false)}
    >
      Sign in
    </Link>

    <Link
      href="/sign-up"
      className="text-[14px] font-[800] text-center text-[#070912]
        bg-[#C9A84C] px-5 py-4 rounded-[6px]
        hover:bg-[#D9B85C]
        transition-all duration-200"
      onClick={() => setMenuOpen(false)}
    >
      Join waitlist
    </Link>
  </>
) : (
  <>
    <Link
      href="/dashboard"
      className="text-[14px] font-[700] text-center text-[#070912]
        bg-[#C9A84C] px-5 py-4 rounded-[6px]
        hover:bg-[#D9B85C]
        transition-all duration-200"
      onClick={() => setMenuOpen(false)}
    >
      Dashboard
    </Link>

    <div className="flex justify-center pt-2">
      <UserButton />
    </div>
  </>
)}
</div>
        </div>
      </div>
    </nav>
  );
}
