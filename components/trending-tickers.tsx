import { Card } from "@/components/ui/card"
import { trending } from "@/lib/mock-data"
import { Flame, ArrowUpRight, ArrowDownRight } from "lucide-react"
import { cn } from "@/lib/utils"

export function TrendingTickers() {
  return (
    <Card className="gap-3 p-5">
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
          <Flame className="size-3.5 text-amber-400" /> Trending now
        </h3>
        <button className="text-xs font-medium text-primary hover:underline">Explore</button>
      </div>

      <div className="grid grid-cols-2 gap-1.5">
        {trending.map((t) => {
          const up = t.change >= 0
          return (
            <button
              key={t.symbol}
              className="flex items-center justify-between gap-2 rounded-lg px-2.5 py-2 text-left transition-colors hover:bg-accent"
            >
              <div className="min-w-0">
                <p className="truncate text-sm font-medium">{t.symbol}</p>
                <p className="font-mono text-xs text-muted-foreground">${t.price}</p>
              </div>
              <span
                className={cn(
                  "flex shrink-0 items-center gap-0.5 text-xs font-medium",
                  up ? "text-positive" : "text-negative",
                )}
              >
                {up ? <ArrowUpRight className="size-3" /> : <ArrowDownRight className="size-3" />}
                {up ? "+" : ""}
                {t.change}%
              </span>
            </button>
          )
        })}
      </div>
    </Card>
  )
}
