"use client"

import { TrendingUp, TrendingDown, Star, Share2 } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Portfolio } from "@/lib/mock-data"
import { cn } from "@/lib/utils"

interface PortfolioHeroCardProps {
  portfolio: Portfolio
}

export function PortfolioHeroCard({ portfolio }: PortfolioHeroCardProps) {
  const isPositive = portfolio.performance >= 0

  return (
    <Card className="overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-primary/20">
      <div className="p-6 sm:p-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {/* Left Content */}
          <div>
            {/* Header */}
            <div className="mb-6 flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl font-bold">{portfolio.name}</h3>
                  <Star className="size-5 fill-primary text-primary" />
                </div>
                <p className="mt-1 text-sm text-muted-foreground">by {portfolio.creator}</p>
              </div>
              <Badge variant="secondary">{portfolio.type}</Badge>
            </div>

            {/* Description */}
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
              {portfolio.description}
            </p>

            {/* Metrics Grid */}
            <div className="mb-4 grid grid-cols-2 gap-3">
              {/* Return */}
              <div className="rounded-lg bg-background/50 p-3">
                <p className="text-xs text-muted-foreground">Total Return</p>
                <p className={cn(
                  "text-lg font-bold",
                  isPositive ? "text-green-600" : "text-red-600"
                )}>
                  {isPositive ? "+" : ""}{portfolio.performance}%
                </p>
              </div>

              {/* Holdings */}
              <div className="rounded-lg bg-background/50 p-3">
                <p className="text-xs text-muted-foreground">Holdings</p>
                <p className="text-lg font-bold">{portfolio.holdings}</p>
              </div>

              {/* Value */}
              <div className="rounded-lg bg-background/50 p-3">
                <p className="text-xs text-muted-foreground">Portfolio Value</p>
                <p className="text-lg font-bold">${portfolio.value}</p>
              </div>

              {/* Allocation */}
              <div className="rounded-lg bg-background/50 p-3">
                <p className="text-xs text-muted-foreground">Diversification</p>
                <p className="text-lg font-bold">{portfolio.diversification}</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <Button className="flex-1">View Portfolio</Button>
              <Button variant="outline" size="icon">
                <Share2 className="size-4" />
              </Button>
            </div>
          </div>

          {/* Right - Performance Chart Area */}
          <div className="flex flex-col justify-start">
            {/* Trend Indicator */}
            <div className="mb-3 rounded-lg bg-background/50 p-3">
              <div className="flex items-center gap-2 mb-2">
                {isPositive ? (
                  <TrendingUp className="size-4 text-green-600" />
                ) : (
                  <TrendingDown className="size-4 text-red-600" />
                )}
                <span className="text-xs font-medium">Performance Trend</span>
              </div>
              
              {/* Simple sparkline-like representation */}
              <div className="h-12 bg-gradient-to-r from-primary/20 via-primary/40 to-primary rounded-md flex items-end justify-center gap-1 p-1.5">
                {[40, 45, 35, 50, 55, 48, 60].map((height, i) => (
                  <div
                    key={i}
                    className={cn(
                      "flex-1 rounded-sm transition-all",
                      i === 6 ? "bg-primary" : "bg-primary/60"
                    )}
                    style={{ height: `${(height / 60) * 100}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-lg bg-background/50 p-2 text-center">
                <p className="text-xs text-muted-foreground mb-0.5">Best Day</p>
                <p className="text-xs font-bold text-green-600">+5.2%</p>
              </div>
              <div className="rounded-lg bg-background/50 p-2 text-center">
                <p className="text-xs text-muted-foreground mb-0.5">Worst Day</p>
                <p className="text-xs font-bold text-red-600">-3.8%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
