'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Zap } from 'lucide-react'

export function GetStartedCards() {
  return (
    <div className="space-y-3">
      <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Get Started</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Card 1: I'm new to investing */}
        <Card className="p-6 cursor-pointer hover:shadow-md transition-shadow border-border/50">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
              <span className="text-xl">🎯</span>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">I'm new to investing</h4>
              <p className="text-sm text-muted-foreground mt-1">2 quick questions and we'll show you a starter portfolio.</p>
            </div>
            <Button variant="ghost" className="gap-2 p-0 h-auto text-primary hover:bg-transparent">
              Get started <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </Card>

        {/* Card 2: I already invest */}
        <Card className="p-6 cursor-pointer hover:shadow-md transition-shadow border-border/50">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
              <span className="text-xl">🔗</span>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">I already invest</h4>
              <p className="text-sm text-muted-foreground mt-1">Connect your bank & broker — we'll do the analysis.</p>
            </div>
            <Button variant="ghost" className="gap-2 p-0 h-auto text-primary hover:bg-transparent">
              Connect now <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </Card>

        {/* Card 3: Build with AI - FEATURED */}
        <Card className="p-6 cursor-pointer relative overflow-hidden border-primary/50 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-primary/5 via-primary/2 to-transparent">
          {/* Glow effect */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10" />
          
          <div className="relative space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                <Zap className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold text-primary uppercase">AI</span>
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Build with AI</h4>
              <p className="text-sm text-muted-foreground mt-1">Describe a goal, get a tailored portfolio in seconds.</p>
            </div>
            <Button className="w-full gap-2 bg-primary hover:bg-primary/90">
              Try it now <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
