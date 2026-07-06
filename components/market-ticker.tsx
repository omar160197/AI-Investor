import { marketIndices } from "@/lib/mock-data"
import { ArrowDownRight, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

function TickerItem({
  symbol,
  value,
  change,
}: {
  symbol: string
  value: string
  change: number
}) {
  const up = change >= 0
  return (
    <div className="flex items-center gap-2 whitespace-nowrap px-5">
      <span className="text-sm font-semibold">{symbol}</span>
      <span className="font-mono text-sm text-muted-foreground">{value}</span>
      <span
        className={cn(
          "flex items-center gap-0.5 text-xs font-medium",
          up ? "text-positive" : "text-negative",
        )}
      >
        {up ? <ArrowUpRight className="size-3" /> : <ArrowDownRight className="size-3" />}
        {up ? "+" : ""}
        {change.toFixed(2)}%
      </span>
    </div>
  )
}

export function MarketTicker() {
  const items = [...marketIndices, ...marketIndices]
  return (
    <div className="relative overflow-hidden border-b border-border bg-card/40">
      <div className="flex animate-[ticker_38s_linear_infinite] py-2.5 hover:[animation-play-state:paused]">
        {items.map((m, i) => (
          <TickerItem key={`${m.symbol}-${i}`} symbol={m.symbol} value={m.value} change={m.change} />
        ))}
      </div>
      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
