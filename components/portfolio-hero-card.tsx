"use client"

import { TrendingUp, TrendingDown, Star, Share2 } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkline } from "@/components/sparkline"
import type { Portfolio } from "@/lib/mock-data"
import { cn } from "@/lib/utils"

interface PortfolioHeroCardProps {
  portfolio: Portfolio
}

export function PortfolioHeroCard({ portfolio }: PortfolioHeroCardProps) {
  const isPositive = portfolio.performance >= 0

  return (
    <Card className="overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-primary/20">
      <div className="p-4 sm:p-5">
        <div className="space-y-3">
          {/* Header */}
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold">{portfolio.name}</h3>
                <Star className="size-4 fill-primary text-primary" />
              </div>
              <p className="text-xs text-muted-foreground">by {portfolio.creator}</p>
            </div>
            <Badge variant="secondary" className="text-xs">{portfolio.type}</Badge>
          </div>

          {/* Description */}
          <p className="text-xs leading-relaxed text-muted-foreground line-clamp-2">
            {portfolio.description}
          </p>

          {/* Top Row: Metrics + Performance Chart */}
          <div className="grid grid-cols-5 gap-2">
            {/* Metrics Grid - 4 columns */}
            <div className="col-span-3 grid grid-cols-2 gap-1.5">
              {/* Return */}
              <div className="rounded bg-background/50 p-1.5">
                <p className="text-xs text-muted-foreground">Return</p>
                <p className={cn(
                  "text-sm font-bold",
                  isPositive ? "text-green-600" : "text-red-600"
                )}>
                  {isPositive ? "+" : ""}{portfolio.performance}%
                </p>
              </div>

              {/* Holdings */}
              <div className="rounded bg-background/50 p-1.5">
                <p className="text-xs text-muted-foreground">Holdings</p>
                <p className="text-sm font-bold">{portfolio.holdings}</p>
              </div>

              {/* Value */}
              <div className="rounded bg-background/50 p-1.5">
                <p className="text-xs text-muted-foreground">Value</p>
                <p className="text-xs font-bold">${portfolio.value}</p>
              </div>

              {/* Diversification */}
              <div className="rounded bg-background/50 p-1.5">
                <p className="text-xs text-muted-foreground">Div</p>
                <p className="text-xs font-bold">{portfolio.diversification}</p>
              </div>
            </div>

            {/* Performance Chart - Right column */}
            <div className="col-span-2">
              <div className="rounded bg-background/50 p-1.5 h-full flex flex-col justify-center">
                <div className="flex items-center gap-1 mb-1">
                  {isPositive ? (
                    <TrendingUp className="size-3 text-green-600" />
                  ) : (
                    <TrendingDown className="size-3 text-red-600" />
                  )}
                  <span className="text-xs font-medium">Trend</span>
                </div>
                <div className="h-7">
                  <Sparkline data={portfolio.data} positive={isPositive} height={28} />
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-2 pt-1">
            <Button size="sm" className="flex-1 text-xs">View Portfolio</Button>
            <Button variant="outline" size="sm" className="px-2">
              <Share2 className="size-3" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}
