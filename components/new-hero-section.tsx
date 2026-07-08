'use client'

import { Sparkles } from 'lucide-react'
import { AnimatedDataStreams } from '@/components/animated-data-streams'

export function NewHeroSection() {
  return (
    <div className="relative space-y-6 overflow-hidden rounded-xl">
      {/* Animated data streams background */}
      <div className="absolute inset-0 -z-10 h-full">
        <AnimatedDataStreams />
      </div>

      {/* AI Copilot Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full border border-primary/20">
        <Sparkles className="w-4 h-4 text-primary" />
        <span className="text-xs font-semibold text-primary uppercase tracking-wide">AI Copilot for Investors</span>
      </div>

      {/* Main Headline */}
      <div className="space-y-3">
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
          Investing,
          <br />
          <span className="text-primary">explained by AI.</span>
        </h1>
        
        <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
          Not sure where to start? Tell us where you are and we'll take it from there — no jargon, no dashboards to figure out.
        </p>
      </div>
    </div>
  )
}
