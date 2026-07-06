import { Card } from "@/components/ui/card"
import { Sparkline } from "@/components/sparkline"
import { communityPortfolios } from "@/lib/mock-data"
import { Sparkles, TrendingUp, ChevronRight } from "lucide-react"

export function CommunityPortfolios() {
  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold tracking-tight">Top community portfolios</h2>
        <button className="flex items-center gap-1 text-sm font-medium text-primary hover:underline">
          View all <ChevronRight className="size-4" />
        </button>
      </div>
      <div className="grid gap-3 md:grid-cols-3">
        {communityPortfolios.map((p) => (
          <Card key={p.name} className="cursor-pointer justify-between gap-4 p-5 transition-colors hover:border-primary/40">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1 rounded-full bg-primary/15 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-primary">
                  <Sparkles className="size-3" /> AI curated
                </span>
                <span className="flex size-8 items-center justify-center rounded-full border border-border text-xs font-semibold">
                  {p.score}
                </span>
              </div>
              <div>
                <h3 className="font-semibold leading-snug text-balance">{p.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              </div>
            </div>
            <div>
              <div className="mb-2 h-10">
                <Sparkline data={p.data} positive height={40} />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Total return</span>
                <span className="flex items-center gap-1 font-mono text-lg font-semibold text-positive">
                  <TrendingUp className="size-4" />+{p.returnPct}%
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
