import Image from "next/image"
import { ArrowRight, type LucideIcon } from "lucide-react"
import { Card } from "@/components/ui/card"
import { quickActions } from "@/lib/mock-data"
import { cn } from "@/lib/utils"

const illustrationMap: Record<string, string> = {
  compass: "/illustrations/browse-portfolios.png",
  gamepad: "/illustrations/fantasy-portfolio.png",
  blocks: "/illustrations/build-portfolio.png",
  sparkles: "/illustrations/build-ai.png",
}

export function QuickStart() {
  const heroAction = quickActions.find(a => a.accent) || quickActions[3]
  const otherActions = quickActions.filter(a => !a.accent)

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">Get started in 4 ways</h2>
        <span className="text-sm text-muted-foreground">Choose your path</span>
      </div>

      {/* Featured Hero Card */}
      <Card className="group relative overflow-hidden border-primary/40 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-0 transition-all hover:border-primary/60 hover:shadow-lg">
        <div className="grid gap-6 sm:grid-cols-2 items-center">
          {/* Content */}
          <div className="p-8 sm:p-10">
            <div className="mb-6 inline-flex items-center justify-center rounded-xl bg-primary/20 p-3">
              <svg className="size-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="mb-3 text-2xl font-bold text-foreground">{heroAction.title}</h3>
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{heroAction.description}</p>
            <button className="group/btn inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 font-medium text-primary-foreground transition-all hover:shadow-md hover:gap-3">
              {heroAction.cta}
              <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-0.5" />
            </button>
          </div>
          {/* Illustration */}
          <div className="relative hidden h-64 sm:block sm:h-80">
            <Image
              src={illustrationMap[heroAction.icon]}
              alt={heroAction.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Card>

      {/* Grid of other actions */}
      <div className="grid gap-4 sm:grid-cols-3">
        {otherActions.map((action) => (
          <Card
            key={action.title}
            className="group relative overflow-hidden cursor-pointer transition-all hover:shadow-md hover:border-primary/50"
          >
            {/* Background illustration */}
            <div className="absolute inset-0 opacity-40 group-hover:opacity-50 transition-opacity">
              <Image
                src={illustrationMap[action.icon]}
                alt={action.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative p-6 flex flex-col h-full justify-between">
              <div>
                <h3 className="mb-2 font-bold text-foreground">{action.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{action.description}</p>
              </div>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                {action.cta}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
