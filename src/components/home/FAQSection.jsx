'use client'
import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
    {
        question: "How is profitability calculated?",
        answer: "Profitability is derived from Revenue (Customer Invoices) minus total Costs (Vendor Bills, Expenses, and Billed Labor). OneFlow calculates this delta in real-time."
    },
    {
        question: "How does the Smart Billing engine work?",
        answer: "OneFlow identifies all unbilled activities linked to a project. With one click, these are consolidated into a professional invoice, ensuring no revenue is lost."
    },
    {
        question: "What organizational roles are supported?",
        answer: "We support four specific roles: Admin, Project Manager, Sales/Finance, and Team Member—each with tailored visibility and operational permissions."
    },
    {
        question: "Is data exported to accounting software?",
        answer: "Yes. All financial data is exportable via CSV or accessible through our developer-grade API for seamless integration with ERP systems."
    }
]

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null)

    return (
        <section className="py-32 bg-cream dark:bg-background border-t border-rule font-sans">
            <div className="max-w-3xl mx-auto px-6">
                <div className="mb-20">
                    <span className="text-micro text-teal">Support</span>
                    <h2 className="font-serif text-4xl text-ink mt-4">
                        Common inquiries.
                    </h2>
                </div>

                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index}
                            className="border-b border-rule pb-6"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full text-left flex items-center justify-between group py-2"
                            >
                                <span className="font-serif text-xl text-ink group-hover:text-teal transition-colors">
                                    {faq.question}
                                </span>
                                <ChevronDown 
                                    className="w-4 h-4 text-ink-3 transition-transform duration-200"
                                />
                            </button>
                            
                            {openIndex === index && (
                                <div className="mt-4 text-ink-2 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
