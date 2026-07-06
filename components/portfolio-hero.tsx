"use client"

import { Area, AreaChart, ResponsiveContainer, Tooltip, YAxis } from "recharts"
import { ArrowUpRight, Trophy, TrendingUp, Wallet } from "lucide-react"
import { Card } from "@/components/ui/card"
import { portfolioHistory, portfolioSummary } from "@/lib/mock-data"

const ranges = ["1D", "1W", "1M", "3M", "1Y", "All"]

function currency(n: number) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })
}

export function PortfolioHero() {
  const s = portfolioSummary
  return (
    <Card className="overflow-hidden border-border bg-card p-0">
      <div className="grid gap-0 lg:grid-cols-[1.4fr_1fr]">
        <div className="flex flex-col justify-between gap-6 p-6">
          <div>
            <p className="text-sm text-muted-foreground">Good morning,</p>
            <h1 className="text-2xl font-semibold tracking-tight">{s.user}</h1>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Total portfolio value</p>
            <div className="flex flex-wrap items-end gap-3">
              <span className="font-mono text-4xl font-semibold tracking-tight">{currency(s.totalValue)}</span>
              <span className="mb-1 flex items-center gap-1 rounded-full bg-positive/15 px-2 py-0.5 text-sm font-medium text-positive">
                <ArrowUpRight className="size-4" />+{currency(s.todayChange)} ({s.todayChangePct}%)
              </span>
            </div>
          </div>

          <div className="-mx-2 -mb-2 h-28">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={portfolioHistory} margin={{ top: 4, right: 8, bottom: 0, left: 8 }}>
                <defs>
                  <linearGradient id="hero-area" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-primary)" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="var(--color-primary)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <YAxis hide domain={["dataMin - 5000", "dataMax + 5000"]} />
                <Tooltip
                  cursor={{ stroke: "var(--color-border)" }}
                  contentStyle={{
                    background: "var(--color-popover)",
                    border: "1px solid var(--color-border)",
                    borderRadius: 10,
                    fontSize: 12,
                    color: "var(--color-foreground)",
                  }}
                  labelFormatter={() => ""}
                  formatter={(v: number) => [currency(v), "Value"]}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="var(--color-primary)"
                  strokeWidth={2}
                  fill="url(#hero-area)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {ranges.map((r, i) => (
              <button
                key={r}
                className={`rounded-md px-3 py-1 text-xs font-medium transition-colors ${
                  i === 2
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-px border-t border-border bg-border lg:border-l lg:border-t-0">
          <div className="flex flex-1 flex-col justify-center gap-1 bg-card p-6">
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-amber-400">
              <Trophy className="size-3.5" /> Best performer
            </div>
            <p className="text-lg font-semibold">{s.bestPerformer}</p>
            <p className="flex items-center gap-1 font-mono text-2xl font-semibold text-positive">
              <TrendingUp className="size-5" />+{s.allTimeReturnPct}%
            </p>
            <p className="text-xs text-muted-foreground">All-time return</p>
          </div>
          <div className="flex flex-1 flex-col justify-center gap-1 bg-card p-6">
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              <Wallet className="size-3.5" /> Buying power
            </div>
            <p className="font-mono text-2xl font-semibold">{currency(24850)}</p>
            <p className="text-xs text-muted-foreground">Available to invest across 4 portfolios</p>
          </div>
        </div>
      </div>
    </Card>
  )
}
