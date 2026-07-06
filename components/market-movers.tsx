"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Sparkline } from "@/components/sparkline"
import { movers } from "@/lib/mock-data"
import { ArrowUpRight, ArrowDownRight } from "lucide-react"
import { cn } from "@/lib/utils"

const TABS = [
  { id: "gainers", label: "Top Gainers" },
  { id: "losers", label: "Top Losers" },
  { id: "active", label: "Most Active" },
] as const

type TabId = (typeof TABS)[number]["id"]

export function MarketMovers() {
  const [tab, setTab] = useState<TabId>("gainers")
  const rows = movers[tab]

  return (
    <Card className="gap-0 overflow-hidden p-0">
      <div className="flex items-center justify-between gap-3 border-b border-border px-5 py-4">
        <h2 className="text-lg font-semibold tracking-tight">Market movers</h2>
        <div className="flex rounded-lg bg-muted p-0.5">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={cn(
                "rounded-md px-3 py-1.5 text-xs font-medium transition-colors",
                tab === t.id ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="divide-y divide-border">
        {rows.map((m) => {
          const up = m.change >= 0
          return (
            <button
              key={m.symbol}
              className="flex w-full items-center gap-4 px-5 py-3 text-left transition-colors hover:bg-accent/50"
            >
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold">{m.symbol}</p>
                <p className="truncate text-xs text-muted-foreground">{m.name}</p>
              </div>

              <div className="hidden h-8 w-24 sm:block">
                <Sparkline data={m.data} positive={up} height={32} />
              </div>

              <div className="hidden w-20 text-right sm:block">
                <p className="text-xs text-muted-foreground">Vol</p>
                <p className="font-mono text-xs">{m.volume}</p>
              </div>

              <div className="w-24 text-right">
                <p className="font-mono text-sm font-medium">${m.price}</p>
                <span
                  className={cn(
                    "flex items-center justify-end gap-0.5 font-mono text-xs font-medium",
                    up ? "text-positive" : "text-negative",
                  )}
                >
                  {up ? <ArrowUpRight className="size-3" /> : <ArrowDownRight className="size-3" />}
                  {up ? "+" : ""}
                  {m.change}%
                </span>
              </div>
            </button>
          )
        })}
      </div>
    </Card>
  )
}
