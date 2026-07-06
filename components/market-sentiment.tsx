import { Card } from "@/components/ui/card"
import { marketSentiment } from "@/lib/mock-data"
import { ArrowUp, ArrowDown, Minus } from "lucide-react"

function Gauge({ score }: { score: number }) {
  // Semicircle gauge: 0 (left) -> 100 (right)
  const radius = 80
  const cx = 100
  const cy = 100
  const angle = Math.PI - (score / 100) * Math.PI
  const needleX = cx + Math.cos(angle) * (radius - 10)
  const needleY = cy - Math.sin(angle) * (radius - 10)

  const arc = (start: number, end: number) => {
    const a0 = Math.PI - (start / 100) * Math.PI
    const a1 = Math.PI - (end / 100) * Math.PI
    const x0 = cx + Math.cos(a0) * radius
    const y0 = cy - Math.sin(a0) * radius
    const x1 = cx + Math.cos(a1) * radius
    const y1 = cy - Math.sin(a1) * radius
    return `M ${x0} ${y0} A ${radius} ${radius} 0 0 1 ${x1} ${y1}`
  }

  return (
    <svg viewBox="0 0 200 116" className="w-full max-w-[240px]">
      <path d={arc(0, 33)} fill="none" stroke="var(--color-negative)" strokeWidth={12} strokeLinecap="round" />
      <path d={arc(34, 66)} fill="none" stroke="var(--color-chart-3)" strokeWidth={12} strokeLinecap="round" />
      <path d={arc(67, 100)} fill="none" stroke="var(--color-positive)" strokeWidth={12} strokeLinecap="round" />
      <line x1={cx} y1={cy} x2={needleX} y2={needleY} stroke="var(--color-foreground)" strokeWidth={3} strokeLinecap="round" />
      <circle cx={cx} cy={cy} r={6} fill="var(--color-foreground)" />
      <text x={cx} y={70} textAnchor="middle" className="fill-foreground" fontSize={26} fontWeight={700}>
        {score}
      </text>
    </svg>
  )
}

export function MarketSentiment() {
  const s = marketSentiment
  return (
    <Card className="gap-3 p-5">
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Market sentiment</h3>
        <span className="rounded-full bg-chart-3/15 px-2 py-0.5 text-xs font-semibold text-chart-3">
          {s.label}
        </span>
      </div>

      <div className="flex flex-col items-center">
        <Gauge score={s.score} />
      </div>

      <div className="grid grid-cols-3 gap-2 text-center">
        <div className="rounded-lg bg-accent/50 p-2">
          <p className="flex items-center justify-center gap-1 font-mono text-sm font-semibold text-positive">
            <ArrowUp className="size-3" />
            {s.advancing}
          </p>
          <p className="text-[11px] text-muted-foreground">Advancing</p>
        </div>
        <div className="rounded-lg bg-accent/50 p-2">
          <p className="flex items-center justify-center gap-1 font-mono text-sm font-semibold text-muted-foreground">
            <Minus className="size-3" />
            {s.unchanged}
          </p>
          <p className="text-[11px] text-muted-foreground">Unchanged</p>
        </div>
        <div className="rounded-lg bg-accent/50 p-2">
          <p className="flex items-center justify-center gap-1 font-mono text-sm font-semibold text-negative">
            <ArrowDown className="size-3" />
            {s.declining}
          </p>
          <p className="text-[11px] text-muted-foreground">Declining</p>
        </div>
      </div>
    </Card>
  )
}
