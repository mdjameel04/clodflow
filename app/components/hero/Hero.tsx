import React from 'react'
import HeroText from './HeroText'
import HeroCards from './HeroCards'

const Hero = () => {
  return (
    <section className='relative min-h-screen w-full flex  px-6 md:px-12 lg:px-20 pt-[150px] pb-[80px] overflow-hidden bg-[#070912] '>

  <div className='pointer-events-none absolute top-0 right-0 w-[65%] h-full '

        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 75% 45%, rgba(100,60,200,0.13) 0%, transparent 65%)",
        }}
  />
       {/* Faint gold breath bottom-left */}
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

       {/* ── CONTENT GRID ── */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full">
        <div
          className="
            grid grid-cols-1 lg:grid-cols-2
            gap-12 lg:gap-0
            items-center
          "
        >
          {/* LEFT */}
          <HeroText />
 
          {/* RIGHT */}
          <HeroCards />
        </div>
      </div>
    </section>
  )
}

export default Hero