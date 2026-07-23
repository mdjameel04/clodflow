import React from 'react'


const Rows = [
    {
     feature: "Monthly Price",
    apollo: "$69+",
    instantly: "$96+",
    coldflow: "$9",   
    },
    {
    feature: "AI Company Research",
    apollo: false,
    instantly: false,
    coldflow: true,
  },
  {
    feature: "Chat-based refinement",
    apollo: false,
    instantly: false,
    coldflow: true,
  },
  {
    feature: "8 tone customizations",
    apollo: false,
    instantly: "Limited",
    coldflow: true,
  },
  {
    feature: "n8n Auto-send",
    apollo: false,
    instantly: false,
    coldflow: true,
  },
  {
    feature: "Unlimited emails",
    apollo: false,
    instantly: false,
    coldflow: "✓ Pro",
  },
]


const renderValue= (value:boolean | string) =>{
  if(value===true) {
    return <span className="text-green-400 text-lg font-bold">✓</span>;
  }
   if (value === false) {
    return <span className="text-red-500 text-lg font-bold">✕</span>;
  }
  return (
    <span className="text-[14px] text-[#F0F0F8] font-medium">
      {value}
    </span>
  )
}



const Comparison = () => {
  return (
    <section className="bg-[#070912] px-6 md:px-12 py-24">
        <div className='max-w-[1200px] mx-auto'>
 {/* tagline */}
          <div className='flex items-center gap-2'>
<span className="block w-8 h-[1px] bg-[#e3b127]" />
          <span className="text-[11px] font-bold uppercase tracking-[2.5px] text-[#C9A84C]">
            Comparison
          </span>
          </div>
         
          {/* heading */}
          <h1 className='text-[44px]  md:text-[52px] font-black leading-[1.05] tracking-[-2px] text-[#F0F0F8] mt-2 mb-16'>  
            We do 
           <span className='text-[#cda330]'> More. </span>
           
    <br/> You pay   <span className='text-[#cda330]'>less.</span>
          </h1>
        

        {/* table */}

        <div className='max-w-[1200px] overflow-hidden '>
          <table className='w-full  border-collapse'>
          {/* header  */}
         <thead >
          <tr>
            <th className='pb-4 text-left'>
  <span className="text-[11px] font-semibold uppercase tracking-[1.5px] text-[#4A4A5A]">
                    Feature
                  </span>
            </th>
          
         
         {/* Apollo */}
                <th className="pb-4 text-left">
                  <span className="text-[11px] font-semibold uppercase tracking-[1.5px] text-[#4A4A5A]">
                    Apollo.io
                  </span>
                </th>
 
                {/* Instantly */}
                <th className="pb-4 text-left">
                  <span className="text-[11px] font-semibold uppercase tracking-[1.5px] text-[#4A4A5A]">
                    Instantly.ai
                  </span>
                </th>
 
                {/* ColdFlow — gold highlighted header */}
                <th className="pb-4 text-left">
                  <div
                    className="
                      inline-flex items-center gap-2
                      bg-[rgba(201,168,76,0.12)]
                      border border-[rgba(201,168,76,0.25)]
                      rounded-t-lg px-5 py-3
                      w-full
                    "
                  >
                    <span className="text-[13px] font-bold uppercase tracking-[1.5px] text-[#C9A84C]">
                      ColdFlow
                    </span>
                    <span className="text-[#C9A84C] text-[12px]">✦</span>
                  </div>
                </th>
                </tr>
         </thead>

       <tbody>
        {Rows.map((row,i)=>(
          <tr key={i} 
           className="border-t border-[#1E1E28] group">

{/* Feature name */}
                  <td className="py-[18px] pr-6">
                    <span className="text-[14px] font-semibold text-[#F0F0F8] leading-snug">
                      {row.feature}
                    </span>
                  </td>
 
                  {/* Apollo */}
                  <td className="py-[18px] pr-6">
                     {renderValue(row.apollo)}
                  </td>
 
                  {/* Instantly */}
                  <td className="py-[18px] pr-6">
                      {renderValue(row.instantly)} 
                  </td>
 
                  {/* ColdFlow — gold column */}
                  <td className="py-[18px]">
                    <div
                      className={`
                        px-5 bg-[rgba(201,168,76,0.08)]
                        border-x border-[rgba(201,168,76,0.2)]
                        ${i === Rows.length - 1 ? "border-b rounded-b-lg pb-5" : ""}
                        py-[18px] -my-[18px]
                        transition-colors duration-200
                        group-hover:bg-[rgba(201,168,76,0.12)]
                      `}
                    >
                      {renderValue(row.coldflow)}
                    </div>
                  </td>
                </tr>
              ))}
       </tbody>


          </table>

        </div>
       </div>

    </section>
  )
}

export default Comparison