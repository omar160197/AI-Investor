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
      <div className="p-5 space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0 flex-1">
            <h3 className="font-bold truncate">{portfolio.name}</h3>
            <p className="text-xs text-muted-foreground truncate">{portfolio.creator}</p>
          </div>
          <Badge variant="outline" className="text-xs">{portfolio.type}</Badge>
        </div>

        {/* Description */}
        <p className="text-xs text-muted-foreground line-clamp-2">
          {portfolio.description}
        </p>

        {/* Compact Metrics */}
        <div className="grid grid-cols-4 gap-2 py-2 border-y">
          {/* Return % */}
          <div className="text-center">
            <p className="text-xs text-muted-foreground mb-0.5">Return</p>
            <p className={cn(
              "text-sm font-bold",
              isPositive ? "text-green-600" : "text-red-600"
            )}>
              {isPositive ? "+" : ""}{portfolio.performance}%
            </p>
          </div>

          {/* Holdings */}
          <div className="text-center">
            <p className="text-xs text-muted-foreground mb-0.5">Holdings</p>
            <p className="text-sm font-bold">{portfolio.holdings}</p>
          </div>

          {/* Value */}
          <div className="text-center">
            <p className="text-xs text-muted-foreground mb-0.5">Value</p>
            <p className="text-sm font-bold">${portfolio.value}</p>
          </div>

          {/* Volatility */}
          <div className="text-center">
            <p className="text-xs text-muted-foreground mb-0.5">Div</p>
            <p className="text-sm font-bold">{portfolio.diversification}</p>
          </div>
        </div>

        {/* Sparkline Chart */}
        <div className="h-8">
          <Sparkline data={portfolio.data} positive={isPositive} height={32} />
        </div>

        {/* Action Button */}
        <Button
          variant="ghost"
          size="sm"
          className="w-full gap-2 justify-center text-xs group-hover:bg-primary/10"
        >
          View Details
          <ExternalLink className="size-3" />
        </Button>
      </div>
    </Card>
  )
}
