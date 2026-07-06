import { Card } from "@/components/ui/card"
import { earnings } from "@/lib/mock-data"
import { CalendarClock } from "lucide-react"

export function EarningsCalendar() {
  return (
    <Card className="gap-3 p-5">
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
          <CalendarClock className="size-3.5" /> Upcoming earnings
        </h3>
        <button className="text-xs font-medium text-primary hover:underline">View all</button>
      </div>

      <ul className="divide-y divide-border">
        {earnings.map((e) => (
          <li key={e.symbol} className="flex items-center gap-3 py-2.5">
            <div className="flex size-9 items-center justify-center rounded-lg bg-accent text-[11px] font-semibold">
              {e.symbol.slice(0, 4)}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">{e.name}</p>
              <p className="text-xs text-muted-foreground">EPS est. {e.epsEstimate}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium">{e.date}</p>
              <p className="text-[11px] text-muted-foreground">{e.session}</p>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  )
}
