"use client"

import { TrendingUp, TrendingDown, ExternalLink } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkline } from "@/components/sparkline"
import type { Portfolio } from "@/lib/mock-data"
import { cn } from "@/lib/utils"

interface PortfolioCardCompactProps {
  portfolio: Portfolio
}

export function PortfolioCardCompact({ portfolio }: PortfolioCardCompactProps) {
  const isPositive = portfolio.performance >= 0

  return (
    <Card className="group relative overflow-hidden transition-all hover:shadow-lg hover:border-primary/50">
      <div className="p-3 space-y-2">
        {/* Header */}
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0 flex-1">
            <h3 className="text-sm font-bold truncate">{portfolio.name}</h3>
            <p className="text-xs text-muted-foreground truncate">{portfolio.creator}</p>
          </div>
          <Badge variant="outline" className="text-xs whitespace-nowrap">{portfolio.type}</Badge>
        </div>

        {/* Description */}
        <p className="text-xs text-muted-foreground line-clamp-2 leading-snug">
          {portfolio.description}
        </p>

        {/* Compact Metrics */}
        <div className="grid grid-cols-4 gap-1.5 py-1.5 border-y text-center">
          {/* Return % */}
          <div>
            <p className="text-xs text-muted-foreground mb-0.5">Return</p>
            <div className="flex items-center justify-center gap-0.5">
              {isPositive ? (
                <TrendingUp className="size-3 text-green-600" />
              ) : (
                <TrendingDown className="size-3 text-red-600" />
              )}
              <p className={cn(
                "text-xs font-bold",
                isPositive ? "text-green-600" : "text-red-600"
              )}>
                {Math.abs(portfolio.performance).toFixed(1)}%
              </p>
            </div>
          </div>

          {/* Holdings */}
          <div>
            <p className="text-xs text-muted-foreground mb-0.5">Holdings</p>
            <p className="text-xs font-bold">{portfolio.holdings}</p>
          </div>

          {/* Value */}
          <div>
            <p className="text-xs text-muted-foreground mb-0.5">Value</p>
            <p className="text-xs font-bold">${portfolio.value}</p>
          </div>

          {/* Diversification */}
          <div>
            <p className="text-xs text-muted-foreground mb-0.5">Div</p>
            <p className="text-xs font-bold">{portfolio.diversification}</p>
          </div>
        </div>

        {/* Sparkline Chart */}
        <div className="h-7">
          <Sparkline data={portfolio.data} positive={isPositive} height={28} />
        </div>

        {/* Action Button */}
        <Button
          variant="ghost"
          size="sm"
          className="w-full gap-1 justify-center text-xs h-7 group-hover:bg-primary/10"
        >
          View Details
          <ExternalLink className="size-2.5" />
        </Button>
      </div>
    </Card>
  )
}
