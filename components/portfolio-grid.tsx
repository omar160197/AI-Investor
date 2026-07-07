"use client"

import { PortfolioCardCompact } from "@/components/portfolio-card-compact"
import type { Portfolio } from "@/lib/mock-data"

interface PortfolioGridProps {
  portfolios: Portfolio[]
}

export function PortfolioGrid({ portfolios }: PortfolioGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {portfolios.map((portfolio) => (
        <PortfolioCardCompact key={portfolio.id} portfolio={portfolio} />
      ))}
    </div>
  )
}
