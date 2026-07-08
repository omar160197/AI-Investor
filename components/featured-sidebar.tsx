'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Sparkline } from '@/components/sparkline'
import { TrendingUp, Plus, ArrowRight } from 'lucide-react'

export function FeaturedSidebar() {
  // Sample sparkline data showing positive trend
  const portfolioData = [30, 35, 32, 40, 45, 42, 50, 55, 52, 58, 62, 65, 68, 72, 75]

  return (
    <div className="space-y-6">
      {/* Top Performer Portfolio */}
      <Card className="p-6 space-y-4 bg-gradient-to-br from-primary/5 to-transparent border-primary/20">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold text-primary uppercase">Top Performer</span>
              <span className="text-xs font-semibold text-foreground">This month</span>
            </div>
            <h3 className="text-xl font-bold">AI Growth Blend</h3>
            <p className="text-xs text-muted-foreground">by investwhat AI • 14 holdings</p>
          </div>
        </div>

        {/* Return stat */}
        <div className="space-y-2">
          <p className="text-xs text-muted-foreground">Return</p>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-green-600">+24.8%</span>
          </div>
        </div>

        {/* Period returns */}
        <div className="grid grid-cols-3 gap-2 py-3 border-y border-border/50">
          <div className="text-center">
            <p className="text-xs text-muted-foreground">1D</p>
            <p className="text-sm font-bold text-green-600">+1.2%</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-muted-foreground">1M</p>
            <p className="text-sm font-bold text-green-600">+8.4%</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-muted-foreground">YTD</p>
            <p className="text-sm font-bold text-green-600">+24.8%</p>
          </div>
        </div>

        {/* Sparkline with benchmark */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium">Performance</span>
            <span className="text-xs text-muted-foreground">vs S&P 500 (+11.2%)</span>
          </div>
          <div className="h-12">
            <Sparkline data={portfolioData} positive={true} height={48} />
          </div>
        </div>

        {/* Action button */}
        <Button variant="outline" className="w-full gap-2 border-primary/30 text-primary hover:bg-primary/10">
          View portfolio <ArrowRight className="w-4 h-4" />
        </Button>
      </Card>

      {/* Savings Goal */}
      <Card className="p-6 space-y-4 border-border/50">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-primary uppercase">Savings Goal</span>
            <Button variant="ghost" size="sm" className="p-0 h-auto w-6 h-6">
              <Plus className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-foreground">House deposit</h4>
          <p className="text-xs text-muted-foreground">Target • $50,000 by 2029</p>
        </div>

        <div className="space-y-2">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold">$18,240</span>
            <span className="text-xs font-semibold text-primary">36% there</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div className="bg-primary h-2 rounded-full" style={{ width: '36%' }} />
          </div>
        </div>

        {/* AI tip */}
        <div className="bg-primary/5 border border-primary/10 rounded-lg p-3 space-y-2">
          <div className="flex items-start gap-2">
            <Sparkline data={[10, 15, 12, 18, 20]} positive={true} height={16} />
          </div>
          <p className="text-xs text-muted-foreground">
            <span className="font-semibold text-foreground">AI tip:</span> Bump monthly saving to $420 and you hit target 7 months early.
          </p>
        </div>
      </Card>
    </div>
  )
}
