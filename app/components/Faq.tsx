"use client"

import React, { useId, useState } from 'react'

interface FaqItem {
  question: string
  answer: string
}

const FAQS: FaqItem[] = [
  {
    question: "How is ColdFlow different from generic AI writing tools?",
    answer: "ColdFlow researches each company before writing. It finds their pain points, social media gaps, and competitive angles — then writes specifically to that. Generic tools just fill templates. ColdFlow builds arguments."
  },
  {
    question: "Do I need technical skills to use it?",
    answer: "None. It's a chat interface. You talk to it like you'd talk to a teammate. No forms, no dashboards to configure, no technical setup required for the core product."
  },
  {
    question: "What is the n8n auto-send feature?",
    answer: "n8n is an automation tool that connects ColdFlow to your Gmail or Outlook. Once connected, emails are sent automatically, and follow-ups are scheduled for 5 days later if no reply is received. You stay completely hands-free."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes. No contracts, no commitments. Cancel from your dashboard with one click. You keep access until your current billing period ends."
  },
  {
    question: "Is my email data safe?",
    answer: "Your emails are stored securely in encrypted Convex databases. We never share, sell, or train on your emails. Your outreach strategy stays yours."
  },
]


        const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const toggleFAQ = (index: number) =>
    setOpenIndex((prev) => (prev === index ? null : index))

  return (
    <section className="bg-[#070912] px-6 md:px-12 py-24">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center gap-2">
          <span className="block w-8 h-[1px] bg-[#e3b127]" />
          <span className="text-[11px] font-bold uppercase tracking-[2.5px] text-[#C9A84C]">FAQ</span>
        </div>

        <h2 className="text-[44px] md:text-[52px] font-black leading-[1.05] tracking-[-2px] text-[#F0F0F8] mt-2 mb-16">
          <span className="text-[#cda330]">Questions</span> we get before people sign up.
        </h2>

        <div className="space-y-1">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index
            const panelId = `faq-panel-${index}`
            return (
              <div key={faq.question} className="border-b border-gray-700">
                <h3>
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="w-full flex justify-between items-center gap-4 p-5 text-left text-[#F0F0F8] font-medium hover:text-[#cda330] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <span
                      aria-hidden="true"
                      className={`shrink-0 text-2xl font-light transition-transform duration-300 ease-out ${isOpen ? "rotate-45" : "rotate-0"}`}
                    >
                      +
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-gray-400 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Faq