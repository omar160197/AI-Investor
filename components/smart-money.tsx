import { Card } from "@/components/ui/card"
import { smartMoney } from "@/lib/mock-data"
import { Landmark, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export function SmartMoney() {
  return (
    <Card className="gap-4 p-5">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="flex items-center gap-2 text-lg font-semibold tracking-tight">
            <Landmark className="size-4 text-muted-foreground" /> Smart money
          </h2>
          <p className="text-xs text-muted-foreground">Latest congressional &amp; insider filings</p>
        </div>
        <button className="flex items-center gap-1 text-sm font-medium text-primary hover:underline">
          View all <ChevronRight className="size-4" />
        </button>
      </div>

      <ul className="divide-y divide-border">
        {smartMoney.map((t, i) => {
          const buy = t.action === "Buy"
          return (
            <li key={i}>
              <button className="flex w-full items-center gap-3 py-2.5 text-left transition-colors hover:bg-accent/40">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-semibold">
                  {t.person
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">{t.person}</p>
                  <p className="truncate text-xs text-muted-foreground">
                    {t.role} · {t.date}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-sm font-semibold">{t.symbol}</p>
                  <span
                    className={cn(
                      "rounded px-1.5 py-0.5 text-[11px] font-medium",
                      buy ? "bg-positive/15 text-positive" : "bg-negative/15 text-negative",
                    )}
                  >
                    {t.action} {t.amount}
                  </span>
                </div>
              </button>
            </li>
          )
        })}
      </ul>
    </Card>
  )
}
