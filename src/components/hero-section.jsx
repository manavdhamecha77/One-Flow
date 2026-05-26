import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
    return (
        <main className="bg-cream  min-h-screen flex items-center">
            <section className="relative w-full px-6 pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        
                        {/* Left Column: Copy & CTAs */}
                        <div className="font-sans text-left">
                            <div className="mb-8 flex items-center gap-2">
                                <div className="live-status-dot" />
                                <span className="text-micro text-teal font-bold">System Pulse</span>
                            </div>
                            
                            <h1 className="font-serif text-5xl leading-[1.1] text-ink md:text-7xl lg:text-8xl tracking-tight">
                                Plan to Bill <br />
                                <span className="text-teal italic">in One Place.</span>
                            </h1>
                            
                            <p className="mt-10 max-w-xl text-lg md:text-xl leading-relaxed text-ink-2">
                                OneFlow is a modular Project Management system designed for 
                                financial precision and operational clarity.
                            </p>

                            <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
                                <Button asChild size="lg" className="bg-teal text-white rounded-[7px] px-10 h-12 text-xs font-medium uppercase tracking-wider transition-all w-full sm:w-auto shadow-none">
                                    <Link href="/register">Get Started</Link>
                                </Button>
                                <Button asChild variant="outline" size="lg" className="border-rule bg-transparent text-ink hover:bg-ink hover:text-paper rounded-[7px] px-10 h-12 text-xs font-medium uppercase tracking-wider transition-all w-full sm:w-auto">
                                    <Link href="/login">Sign In</Link>
                                </Button>
                            </div>
                        </div>

                        {/* Right Column: Workflow Visualization */}
                        <div className="relative">
                            <div className="grid grid-cols-1 gap-6 relative z-10">
                                {/* Phase 01 */}
                                <div className="group bg-paper border border-rule p-6 rounded-[12px] shadow-none hover:border-teal transition-all duration-300 transform lg:translate-x-4">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-micro text-ink-3 group-hover:text-teal transition-colors">Phase 01</span>
                                        <div className="w-1.5 h-1.5 rounded-full bg-rule group-hover:bg-teal transition-colors" />
                                    </div>
                                    <p className="font-serif text-2xl text-ink">Project Design</p>
                                    <div className="mt-4 space-y-2 opacity-40 group-hover:opacity-100 transition-opacity">
                                        <div className="h-1 w-full bg-rule rounded-full overflow-hidden">
                                            <div className="h-full bg-teal w-1/3" />
                                        </div>
                                        <div className="h-1 w-2/3 bg-rule rounded-full" />
                                    </div>
                                </div>

                                {/* Phase 02 */}
                                <div className="group bg-paper border border-teal p-6 rounded-[12px] shadow-none relative z-20 transform lg:-translate-x-4">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-micro text-teal">Phase 02</span>
                                        <div className="live-status-dot" />
                                    </div>
                                    <p className="font-serif text-2xl text-ink">Resource Flow</p>
                                    <div className="mt-4 h-1.5 w-full bg-teal-soft rounded-full overflow-hidden">
                                        <div className="h-full bg-teal w-3/4 animate-pulse" />
                                    </div>
                                </div>

                                {/* Phase 03 */}
                                <div className="group bg-paper border border-rule p-6 rounded-[12px] shadow-none hover:border-teal transition-all duration-300 transform lg:translate-x-8">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-micro text-ink-3 group-hover:text-teal transition-colors">Phase 03</span>
                                        <div className="w-1.5 h-1.5 rounded-full bg-rule group-hover:bg-teal transition-colors" />
                                    </div>
                                    <p className="font-serif text-2xl text-ink">Final Margin</p>
                                    <div className="mt-4 flex gap-1 items-end h-8 opacity-40 group-hover:opacity-100 transition-opacity">
                                        <div className="h-4 w-full bg-rule rounded-[2px]" />
                                        <div className="h-6 w-full bg-rule rounded-[2px]" />
                                        <div className="h-8 w-full bg-teal rounded-[2px]" />
                                        <div className="h-5 w-full bg-rule rounded-[2px]" />
                                    </div>
                                </div>
                            </div>

                            {/* Background pulse effect */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-soft/20 rounded-full blur-[100px] -z-10" />
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}
