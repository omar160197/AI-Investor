import { Compass, Gamepad2, Blocks, Sparkles, ArrowRight, type LucideIcon } from "lucide-react"
import { Card } from "@/components/ui/card"
import { quickActions } from "@/lib/mock-data"
import { cn } from "@/lib/utils"

const iconMap: Record<string, LucideIcon> = {
  compass: Compass,
  gamepad: Gamepad2,
  blocks: Blocks,
  sparkles: Sparkles,
}

export function QuickStart() {
  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold tracking-tight">Make your first portfolio</h2>
        <span className="text-sm text-muted-foreground">4 ways to get started</span>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {quickActions.map((a) => {
          const Icon = iconMap[a.icon]
          return (
            <Card
              key={a.title}
              className={cn(
                "group cursor-pointer gap-0 p-5 transition-colors hover:border-primary/50",
                a.accent && "border-primary/40 bg-primary/5",
              )}
            >
              <div
                className={cn(
                  "mb-4 flex size-10 items-center justify-center rounded-lg",
                  a.accent ? "bg-primary text-primary-foreground" : "bg-accent text-primary",
                )}
              >
                <Icon className="size-5" />
              </div>
              <h3 className="font-semibold">{a.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{a.description}</p>
              <span className="mt-4 flex items-center gap-1 text-sm font-medium text-primary">
                {a.cta}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
