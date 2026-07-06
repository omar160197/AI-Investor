"use client"

import { Card } from "@/components/ui/card"
import { netWorth } from "@/lib/mock-data"
import { Wallet, ArrowUpRight, Link2 } from "lucide-react"

function fmt(n: number) {
  return n.toLocaleString("en-US")
}

export function NetWorth() {
  const total = netWorth.total
  return (
    <Card className="gap-4 p-5">
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
          <Wallet className="size-3.5" /> Net worth
        </h3>
        <button className="flex items-center gap-1 text-xs font-medium text-primary hover:underline">
          <Link2 className="size-3.5" /> Link bank
        </button>
      </div>

      <div>
        <p className="font-mono text-2xl font-semibold tracking-tight">${fmt(total)}</p>
        <p className="flex items-center gap-1 text-xs font-medium text-positive">
          <ArrowUpRight className="size-3.5" />+{netWorth.changePct}% this month
        </p>
      </div>

      {/* stacked allocation bar */}
      <div className="flex h-2.5 overflow-hidden rounded-full">
        {netWorth.accounts.map((a) => (
          <div key={a.name} style={{ width: `${(a.value / total) * 100}%`, backgroundColor: a.color }} />
        ))}
      </div>

      <ul className="space-y-1.5">
        {netWorth.accounts.map((a) => (
          <li key={a.name} className="flex items-center justify-between text-xs">
            <span className="flex items-center gap-2 text-muted-foreground">
              <span className="size-2 rounded-full" style={{ backgroundColor: a.color }} />
              {a.name}
            </span>
            <span className="font-mono font-medium">${fmt(a.value)}</span>
          </li>
        ))}
      </ul>

      <div className="grid grid-cols-2 gap-2 border-t border-border pt-3">
        <div>
          <p className="text-[11px] text-muted-foreground">Investable surplus</p>
          <p className="font-mono text-sm font-semibold">${fmt(netWorth.investable)}</p>
        </div>
        <div>
          <p className="text-[11px] text-muted-foreground">Savings rate</p>
          <p className="font-mono text-sm font-semibold text-positive">{netWorth.savingsRate}%</p>
        </div>
      </div>
    </Card>
  )
}
