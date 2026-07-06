'use client'

import { Card } from "@/components/ui/card"
import { copilotExamples } from "@/lib/mock-data"
import { ChevronRight, Heart, MessageCircle, Sparkles, TrendingUp, Wand2, ChartBar, AlertCircle, Award, Activity, GitCompare } from "lucide-react"
import { cn } from "@/lib/utils"

const iconMap: Record<string, React.ReactNode> = {
  'chart-bar': <ChartBar className="size-5" />,
  'wand-2': <Wand2 className="size-5" />,
  'trending-up': <TrendingUp className="size-5" />,
  'git-compare': <GitCompare className="size-5" />,
  'sparkles': <Sparkles className="size-5" />,
  'alert-circle': <AlertCircle className="size-5" />,
  'award': <Award className="size-5" />,
  'activity': <Activity className="size-5" />,
}

export function ExploreCopilot() {
  const capabilities = copilotExamples.filter(e => e.type === "capability").slice(0, 2)
  const community = copilotExamples.filter(e => e.type === "community").slice(0, 2)

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Explore what's possible</h2>
        <a href="/explore" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
          See all <ChevronRight className="size-4" />
        </a>
      </div>

      {/* Grid: Capabilities + Community */}
      <div className="grid gap-4 lg:grid-cols-2">
        {/* Capabilities Section */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">What your copilot can do</h3>
          <div className="space-y-3">
            {capabilities.map((example) => (
              <Card
                key={example.id}
                className="group cursor-pointer gap-0 p-4 transition-all hover:border-primary/50 hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
                    {iconMap[example.icon]}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">{example.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{example.description}</p>
                    {example.query && (
                      <p className="mt-2 rounded bg-muted/50 px-2.5 py-1.5 text-xs leading-relaxed text-muted-foreground italic border border-border/50">
                        "{example.query}"
                      </p>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Community Section */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">How people use it</h3>
          <div className="space-y-3">
            {community.map((example) => (
              <Card
                key={example.id}
                className="group cursor-pointer gap-0 p-4 transition-all hover:border-primary/50 hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex size-9 items-center justify-center rounded-lg bg-accent/10 text-accent flex-shrink-0">
                    {iconMap[example.icon]}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">{example.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{example.description}</p>
                    <div className="mt-3 flex items-center justify-between gap-2">
                      <span className="text-xs font-medium text-muted-foreground">by {example.author}</span>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1 hover:text-foreground transition-colors cursor-pointer">
                          <Heart className="size-3" /> {example.likes}
                        </span>
                        <span className="flex items-center gap-1 hover:text-foreground transition-colors cursor-pointer">
                          <MessageCircle className="size-3" /> {example.replies}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <a
        href="/explore"
        className="flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-muted/50 px-4 py-3 text-sm font-medium text-foreground transition-all hover:bg-muted hover:border-primary/50"
      >
        Explore all examples
        <ChevronRight className="size-4" />
      </a>
    </section>
  )
}
