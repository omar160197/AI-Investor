import { Card } from "@/components/ui/card"
import { Sparkline } from "@/components/sparkline"
import { watchlist } from "@/lib/mock-data"
import { Eye, Plus } from "lucide-react"
import { cn } from "@/lib/utils"

export function Watchlist() {
  return (
    <Card className="gap-3 p-5">
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
          <Eye className="size-3.5" /> Watchlist
        </h3>
        <button
          className="flex items-center gap-1 text-xs font-medium text-primary hover:underline"
          aria-label="Add to watchlist"
        >
          <Plus className="size-3.5" /> Add
        </button>
      </div>

      <ul className="-mx-2">
        {watchlist.map((w) => {
          const up = w.change >= 0
          return (
            <li key={w.symbol}>
              <button className="flex w-full items-center gap-3 rounded-lg px-2 py-2 text-left transition-colors hover:bg-accent">
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold">{w.symbol}</p>
                  <p className="truncate text-xs text-muted-foreground">{w.name}</p>
                </div>
                <div className="h-7 w-14">
                  <Sparkline data={w.data} positive={up} height={28} />
                </div>
                <div className="w-20 text-right">
                  <p className="font-mono text-xs font-medium">${w.price}</p>
                  <p className={cn("font-mono text-xs", up ? "text-positive" : "text-negative")}>
                    {up ? "+" : ""}
                    {w.change}%
                  </p>
                </div>
              </button>
            </li>
          )
        })}
      </ul>
    </Card>
  )
}
