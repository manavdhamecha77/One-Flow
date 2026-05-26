import React from 'react'

export function HeroVisual() {
  return (
    <div className="relative w-full max-w-2xl mx-auto py-12">
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {/* Node 1: Plan */}
        <div className="bg-paper border border-rule p-5 rounded-[10px] space-y-4 shadow-none">
          <div className="flex justify-between items-center">
            <span className="text-micro">Phase 01</span>
            <div className="w-1.5 h-1.5 rounded-full bg-ink-3" />
          </div>
          <p className="font-serif text-lg text-ink">Project Design</p>
          <div className="space-y-2">
            <div className="h-1 w-full bg-rule rounded-full" />
            <div className="h-1 w-2/3 bg-rule rounded-full" />
          </div>
        </div>

        {/* Node 2: Execute */}
        <div className="bg-paper border border-rule p-5 rounded-[10px] space-y-4 relative shadow-none">
          <div className="flex justify-between items-center">
            <span className="text-micro text-teal">Phase 02</span>
            <div className="live-status-dot" />
          </div>
          <p className="font-serif text-lg text-ink">Resource Flow</p>
          <div className="h-1 w-full bg-teal-soft rounded-full overflow-hidden">
            <div className="h-full bg-teal w-3/4 animate-pulse" />
          </div>
        </div>

        {/* Node 3: Bill */}
        <div className="bg-paper border border-rule p-5 rounded-[10px] space-y-4 relative shadow-none">
          <div className="flex justify-between items-center">
            <span className="text-micro">Phase 03</span>
            <div className="w-1.5 h-1.5 rounded-full bg-ink-3" />
          </div>
          <p className="font-serif text-lg text-ink">Final Margin</p>
          <div className="flex gap-1 items-end h-8">
            <div className="h-4 w-full bg-rule rounded-[2px]" />
            <div className="h-6 w-full bg-rule rounded-[2px]" />
            <div className="h-8 w-full bg-teal rounded-[2px]" />
            <div className="h-5 w-full bg-rule rounded-[2px]" />
          </div>
        </div>
      </div>

      {/* Decorative background pulse */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal-soft/30 rounded-full blur-3xl -z-10" />
    </div>
  )
}
