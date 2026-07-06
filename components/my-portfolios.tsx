import { Card } from "@/components/ui/card"
import { Sparkline } from "@/components/sparkline"
import { myPortfolios } from "@/lib/mock-data"
import { ArrowUpRight, ArrowDownRight, Plus } from "lucide-react"
import { cn } from "@/lib/utils"

function currency(n: number) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })
}

export function MyPortfolios() {
  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold tracking-tight">Your portfolios</h2>
        <button className="flex items-center gap-1 text-sm font-medium text-primary hover:underline">
          <Plus className="size-4" /> New portfolio
        </button>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {myPortfolios.map((p) => {
          const up = p.change >= 0
          return (
            <Card key={p.name} className="cursor-pointer gap-3 p-4 transition-colors hover:border-primary/40">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-medium">{p.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {p.holdings} holdings · {p.tag}
                  </p>
                </div>
                <span
                  className={cn(
                    "flex items-center gap-0.5 rounded-full px-2 py-0.5 text-xs font-medium",
                    up ? "bg-positive/15 text-positive" : "bg-negative/15 text-negative",
                  )}
                >
                  {up ? <ArrowUpRight className="size-3" /> : <ArrowDownRight className="size-3" />}
                  {up ? "+" : ""}
                  {p.change}%
                </span>
              </div>
              <div className="flex items-end justify-between gap-3">
                <span className="font-mono text-xl font-semibold">{currency(p.value)}</span>
                <div className="h-10 w-24">
                  <Sparkline data={p.data} positive={up} height={40} />
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
