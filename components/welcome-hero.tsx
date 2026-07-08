'use client'

import { ArrowRight, Lightbulb } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function WelcomeHero() {
  return (
    <Card className="overflow-hidden bg-gradient-to-br from-primary/15 via-primary/5 to-background border-primary/20">
      <div className="p-6 sm:p-8">
        <div className="flex items-start gap-4 mb-4">
          <div className="rounded-lg bg-primary/20 p-2.5">
            <Lightbulb className="size-6 text-primary" />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
              Welcome to InvestWhat
            </h1>
            <p className="text-sm text-muted-foreground mb-4">
              Learn investing smarter. Our AI copilot helps you build diversified portfolios, understand market trends, and make confident investment decisions—whether you're just starting out or expanding your portfolio.
            </p>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          <div className="rounded-lg bg-background/50 p-3 border border-primary/10">
            <h3 className="text-sm font-semibold mb-1">🤖 AI-Powered Guidance</h3>
            <p className="text-xs text-muted-foreground">Get personalized portfolio recommendations based on your goals</p>
          </div>
          <div className="rounded-lg bg-background/50 p-3 border border-primary/10">
            <h3 className="text-sm font-semibold mb-1">📚 Learn as You Invest</h3>
            <p className="text-xs text-muted-foreground">Explore real portfolios and strategies from community experts</p>
          </div>
          <div className="rounded-lg bg-background/50 p-3 border border-primary/10">
            <h3 className="text-sm font-semibold mb-1">🎯 Track Progress</h3>
            <p className="text-xs text-muted-foreground">Monitor your portfolio performance and key metrics in real-time</p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button size="lg" className="gap-2">
            Create Your First Portfolio
            <ArrowRight className="size-4" />
          </Button>
          <Button variant="outline" size="lg" className="gap-2">
            Learn More
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
    </Card>
  )
}
