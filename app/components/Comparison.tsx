import React from 'react'


const pricingList = [
    {
        
    }
]





const Comparison = () => {
  return (
    <section className="bg-[#070912] px-6 md:px-12 py-24">
        <div className='max-w-[1200px] mx-auto'>
 {/* tagline */}
          <div className='flex items-center gap-2'>
<span className="block w-8 h-[1px] bg-[#e3b127]" />
          <span className="text-[11px] font-bold uppercase tracking-[2.5px] text-[#C9A84C]">
            Process
          </span>
          </div>
         
          {/* heading */}
          <h1 className='text-[44px]  md:text-[52px] font-black leading-[1.05] tracking-[-2px] text-[#F0F0F8] mb-16'>  
           <span className='text-[#cda330]'>One </span>
            deal pays for
    <br/> a year of  <span className='text-[#cda330]'>ColdFlow.</span>

          </h1>

        </div>

    </section>
  )
}

export default Comparison