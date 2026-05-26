'use client'
import React from 'react'
import { CheckCircle2 } from 'lucide-react'

const steps = [
    {
        number: "01",
        title: "Project Design",
        description: "Set up your workspace with surgical precision. Define roles, invite teams, and design your financial flow.",
    },
    {
        number: "02",
        title: "Execution & Tracking",
        description: "Manage tasks via our Kanban system. Log hours and capture expenses with real-time attribution.",
    },
    {
        number: "03",
        title: "Smart Billing",
        description: "Convert work into revenue. One-click billing fetches all unbilled items to prevent leakage.",
    }
]

export default function HowItWorksSection() {
    return (
        <section id="architecture" className="py-32 bg-cream dark:bg-background border-t border-rule font-sans">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-24">
                    <span className="text-micro text-teal">Our Framework</span>
                    <h2 className="font-serif text-4xl md:text-5xl text-ink mt-4">
                        Engineered for <span className="italic">clarity.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    {steps.map((step, index) => (
                        <div key={index} className="space-y-6">
                            <div className="font-serif text-5xl text-teal opacity-20">
                                {step.number}
                            </div>
                            <h3 className="font-serif text-2xl text-ink">{step.title}</h3>
                            <p className="text-ink-2 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
