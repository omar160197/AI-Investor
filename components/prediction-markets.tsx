import { Card } from "@/components/ui/card"
import { predictionMarkets } from "@/lib/mock-data"
import { Scale, ChevronRight } from "lucide-react"

export function PredictionMarkets() {
  return (
    <Card className="gap-4 p-5">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="flex items-center gap-2 text-lg font-semibold tracking-tight">
            <Scale className="size-4 text-muted-foreground" /> Prediction markets
          </h2>
          <p className="text-xs text-muted-foreground">Crowd-sourced event odds</p>
        </div>
        <button className="flex items-center gap-1 text-sm font-medium text-primary hover:underline">
          Explore <ChevronRight className="size-4" />
        </button>
      </div>

      <ul className="space-y-3">
        {predictionMarkets.map((m, i) => (
          <li key={i}>
            <button className="w-full space-y-2 rounded-lg border border-border/60 p-3 text-left transition-colors hover:border-primary/40 hover:bg-accent/30">
              <div className="flex items-start justify-between gap-3">
                <p className="text-sm font-medium leading-snug text-pretty">{m.question}</p>
                <span className="shrink-0 font-mono text-sm font-semibold text-primary">{m.yes}%</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                <div className="h-full rounded-full bg-primary" style={{ width: `${m.yes}%` }} />
              </div>
              <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                <span className="rounded-full bg-muted px-2 py-0.5 font-medium">{m.category}</span>
                <span>{m.volume} vol</span>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </Card>
  )
}
