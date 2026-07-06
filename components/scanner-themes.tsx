import { Card } from "@/components/ui/card"
import { scannerThemes } from "@/lib/mock-data"
import { Gem, TrendingUp, Activity, Coins, ShieldCheck, Zap, Radar, ChevronRight, type LucideIcon } from "lucide-react"

const ICONS: Record<string, LucideIcon> = {
  gem: Gem,
  "trending-up": TrendingUp,
  activity: Activity,
  coins: Coins,
  "shield-check": ShieldCheck,
  zap: Zap,
}

export function ScannerThemes() {
  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-lg font-semibold tracking-tight">
          <Radar className="size-4 text-primary" /> AI scanner
        </h2>
        <button className="flex items-center gap-1 text-sm font-medium text-primary hover:underline">
          Open scanner <ChevronRight className="size-4" />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
        {scannerThemes.map((t) => {
          const Icon = ICONS[t.icon] ?? Radar
          return (
            <Card
              key={t.name}
              className="cursor-pointer gap-2 p-4 transition-colors hover:border-primary/40"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-4" />
                </span>
                <span className="rounded-full bg-muted px-2 py-0.5 font-mono text-[11px] font-medium text-muted-foreground">
                  {t.matches} matches
                </span>
              </div>
              <div>
                <h3 className="text-sm font-semibold">{t.name}</h3>
                <p className="text-xs leading-snug text-muted-foreground">{t.blurb}</p>
              </div>
              <p className="text-xs text-muted-foreground">
                Top pick <span className="font-mono font-medium text-foreground">{t.top}</span>
              </p>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
