import { Card } from "@/components/ui/card"
import { learnArticles } from "@/lib/mock-data"
import { GraduationCap, ArrowRight } from "lucide-react"

export function LearnSection() {
  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-lg font-semibold tracking-tight">
          <GraduationCap className="size-5 text-primary" /> Learn
        </h2>
        <button className="flex items-center gap-1 text-sm font-medium text-primary hover:underline">
          Explore <ArrowRight className="size-4" />
        </button>
      </div>
      <div className="grid gap-3 md:grid-cols-3">
        {learnArticles.map((a) => (
          <Card
            key={a.title}
            className="group cursor-pointer justify-between gap-3 p-4 transition-colors hover:border-primary/40"
          >
            <span className="w-fit rounded bg-accent px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-primary">
              {a.category}
            </span>
            <h3 className="font-medium leading-snug text-pretty transition-colors group-hover:text-primary">
              {a.title}
            </h3>
            <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">{a.summary}</p>
            <span className="flex items-center gap-1 text-sm font-medium text-primary">
              Read more
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Card>
        ))}
      </div>
    </section>
  )
}
