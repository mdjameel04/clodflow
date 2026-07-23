import React from 'react'
import { ArrowRight } from 'lucide-react'

const CTA = () => {
  return (
    <section className="bg-[#6c71873e] px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center justify-center text-center">

        {/* tagline */}
        <div className="flex items-center gap-2">
          <span className="block w-8 h-[1px] bg-[#e3b127]" />
          <span className="text-[13px] font-bold uppercase tracking-[2.5px] text-[#C9A84C]">
            Ready when you are
          </span>
        </div>

        {/* heading */}
        <h2 className="text-[44px] md:text-[52px] font-black leading-[1.06] tracking-[-2px] text-[#F0F0F8] mt-5 mb-2">
          The best email you
          <br />
          never had to <span className="text-[#cda330]">write</span>.
        </h2>

        {/* paragraph */}
        <p className="text-[17px] text-white/60 max-w-sm mt-4">
          Join 500+ freelancers who stopped guessing and started closing.
          First 14 days completely free.
        </p>

        {/* buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
          <button className="group flex items-center gap-2 bg-[#cda330] text-[#070912] font-bold px-6 py-3 rounded-lg hover:bg-[#e3b127] transition-colors">
            Get Early Access
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button className="border border-white/20 text-[#F0F0F8] font-bold px-6 py-3 rounded-lg hover:bg-white/5 transition-colors">
            See Demo
          </button>
        </div>

      </div>
    </section>
  )
}

export default CTA