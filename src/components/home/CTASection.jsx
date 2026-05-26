'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function CTASection() {
    return (
        <section className="py-24 bg-teal-soft border-y border-teal-mid  ">
            <div className="max-w-4xl mx-auto px-6 text-center font-sans">
                <h2 className="font-serif text-4xl md:text-5xl text-ink mb-6">
                    Ready to scale with <span className="italic">precision?</span>
                </h2>
                <p className="text-lg text-ink-2 mb-10 max-w-xl mx-auto leading-relaxed">
                    Join forward-thinking teams who have gained real-time visibility 
                    into their project margins with OneFlow.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button asChild size="lg" className="bg-teal px-10 h-12 text-xs font-medium uppercase tracking-wider rounded-[7px] hover:opacity-88">
                        <Link href="/register">
                            Get Started
                        </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="border-rule text-ink hover:bg-ink hover:text-paper  px-10 h-12 text-xs font-medium uppercase tracking-wider rounded-[7px]">
                        <Link href="/login">
                            Explore Demo
                        </Link>
                    </Button>
                </div>

                <div className="mt-8 flex items-center justify-center gap-6">
                    <p className="text-micro text-ink-3">14-day trial</p>
                    <div className="w-1 h-1 rounded-full bg-rule" />
                    <p className="text-micro text-ink-3">No credit card</p>
                    <div className="w-1 h-1 rounded-full bg-rule" />
                    <p className="text-micro text-ink-3">Cancel anytime</p>
                </div>
            </div>
        </section>
    )
}
