import { Card } from "@/components/ui/card"
import { sectors } from "@/lib/mock-data"
import { LayoutGrid } from "lucide-react"
import { cn } from "@/lib/utils"

// Map a sector's % change to a tinted background using the positive/negative tokens.
function tint(change: number) {
  const mag = Math.min(Math.abs(change) / 2.5, 1) // 0..1
  const alpha = 0.12 + mag * 0.33
  const color = change >= 0 ? "var(--positive)" : "var(--negative)"
  return { backgroundColor: `color-mix(in oklch, ${color} ${alpha * 100}%, var(--card))` }
}

export function SectorHeatmap() {
  return (
    <Card className="gap-4 p-5">
      <div className="flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-lg font-semibold tracking-tight">
          <LayoutGrid className="size-4 text-muted-foreground" /> Sector heatmap
        </h2>
        <span className="text-xs text-muted-foreground">Today&apos;s performance</span>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
        {sectors.map((s) => {
          const up = s.change >= 0
          return (
            <button
              key={s.name}
              style={tint(s.change)}
              className="flex flex-col gap-1 rounded-lg border border-border/60 p-3 text-left transition-transform hover:scale-[1.03]"
            >
              <span className="truncate text-xs font-medium text-foreground">{s.name}</span>
              <span className={cn("font-mono text-sm font-semibold", up ? "text-positive" : "text-negative")}>
                {up ? "+" : ""}
                {s.change}%
              </span>
              <span className="text-[10px] text-muted-foreground">{s.weight}% wt.</span>
            </button>
          )
        })}
      </div>
    </Card>
  )
}
