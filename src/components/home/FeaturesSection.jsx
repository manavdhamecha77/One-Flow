'use client'
import React from 'react'
import { Kanban, DollarSign, TrendingUp, FileText, Clock, Shield } from 'lucide-react'

const features = [
    {
        icon: Kanban,
        title: "Visual Ops",
        description: "Intuitive Kanban systems for real-time progress tracking.",
    },
    {
        icon: DollarSign,
        title: "Capital Flow",
        description: "Direct linkage of financial documents to operational tasks.",
    },
    {
        icon: TrendingUp,
        title: "Live Margins",
        description: "Instant profitability calculation (Revenue - Costs).",
    },
    {
        icon: FileText,
        title: "Precision Billing",
        description: "Automated invoice generation from unbilled activities.",
    },
    {
        icon: Clock,
        title: "Resource Audit",
        description: "Seamless logging of hours and surgical expense tracking.",
    },
    {
        icon: Shield,
        title: "Access Logic",
        description: "Granular RBAC for organizational security and clarity.",
    }
]

export default function FeaturesSection() {
    return (
        <section id="features" className="py-32 bg-paper dark:bg-card border-y border-rule font-sans">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-20 text-center">
                    <span className="text-micro text-teal">Capabilities</span>
                    <h2 className="font-serif text-4xl md:text-5xl text-ink mt-4">
                        Comprehensive control.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {features.map((feature, index) => (
                        <div 
                            key={index}
                            className="group p-8 border border-rule rounded-[12px] bg-cream/50 hover:bg-cream transition-colors"
                        >
                            <div className="text-teal mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                                <feature.icon className="w-8 h-8 stroke-[1.5]" />
                            </div>
                            <h3 className="font-serif text-2xl text-ink mb-4">{feature.title}</h3>
                            <p className="text-ink-2 leading-relaxed text-sm">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
