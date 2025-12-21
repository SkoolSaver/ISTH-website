'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

export default function CommunityFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0) // First item open by default

  const faqs: FAQItem[] = [
    {
      question: 'Is the community really free?',
      answer:
        'Yes, our International Students Talent Hub community is completely free to join and participate in, hosted on Nas.io. We believe in providing accessible support to all international students.',
    },
    {
      question: 'Do I need to be in a specific country?',
      answer:
        'No, the community is global, with resources for international students worldwide. Whether you are studying in the US, UK, Canada, Australia, or anywhere else, you are welcome to join.',
    },
    {
      question: 'What kind of job support do I get?',
      answer:
        'You get access to exclusive job postings, resume workshops, interview tips, and networking opportunities. Our community shares job openings specifically targeting international students.',
    },
    {
      question: 'How active is the community?',
      answer:
        'The community is highly active with daily discussions, virtual events, and dedicated channels for different topics. Members are engaged and supportive, making it easy to get help when you need it.',
    },
    {
      question: 'Can I connect with alumni?',
      answer:
        'Yes, the platform facilitates connections with alumni for insights and mentorship. Many alumni members actively participate and share their experiences to help current students succeed.',
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="bg-white py-3xl px-md">
      <div className="max-w-7xl mx-auto">
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-dark text-center mb-xl">
          Frequently Asked Questions
        </h2>

        {/* FAQ Items */}
        <div className="space-y-md max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border-light rounded-lg overflow-hidden bg-white"
            >
              {/* Question Header */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-lg text-left hover:bg-[#ededed] transition-colors"
                aria-expanded={openIndex === index}
              >
                <div className="flex items-center gap-md flex-1">
                  {/* Golden Circular Icon with lowercase 'i' */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-accent-light flex items-center justify-center bg-accent-light/10">
                    <span className="text-accent-light font-bold text-lg lowercase">i</span>
                  </div>

                  {/* Question Text */}
                  <span className="text-lg md:text-xl font-semibold text-primary-dark flex-1">
                    {faq.question}
                  </span>
                </div>

                {/* Arrow Icon */}
                <div className="flex-shrink-0 ml-md">
                  <svg
                    className={`w-6 h-6 text-text-secondary transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {/* Answer Content */}
              {openIndex === index && (
                <div className="px-lg pb-lg pl-[4.5rem]">
                  <p className="text-text-secondary leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
