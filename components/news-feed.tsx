"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { news, newsCategories, newsRegions, type NewsArticle } from "@/lib/mock-data"
import { Newspaper, Clock, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"

const sentimentStyles: Record<NewsArticle["sentiment"], string> = {
  Bullish: "bg-positive/15 text-positive",
  Bearish: "bg-negative/15 text-negative",
  Neutral: "bg-accent text-muted-foreground",
}

export function NewsFeed() {
  const [category, setCategory] = useState("Latest")
  const [region, setRegion] = useState("All Regions")

  const filtered = news.filter((a) => {
    const matchCat = category === "Latest" || a.category === category
    const matchRegion = region === "All Regions" || a.region === region
    return matchCat && matchRegion
  })

  return (
    <Card className="gap-4 p-5">
      <div className="flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-lg font-semibold tracking-tight">
          <Newspaper className="size-5 text-primary" /> News Hub
        </h2>
        <button className="text-sm font-medium text-primary hover:underline">All articles</button>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {newsCategories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={cn(
              "rounded-full px-3 py-1 text-xs font-medium transition-colors",
              category === c
                ? "bg-primary text-primary-foreground"
                : "bg-accent/40 text-muted-foreground hover:text-foreground",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-1.5 border-y border-border py-2">
        <span className="mr-1 flex items-center gap-1 text-xs text-muted-foreground">
          <MapPin className="size-3" /> Region:
        </span>
        {newsRegions.map((r) => (
          <button
            key={r}
            onClick={() => setRegion(r)}
            className={cn(
              "rounded-md px-2 py-0.5 text-xs transition-colors",
              region === r ? "bg-accent text-foreground" : "text-muted-foreground hover:text-foreground",
            )}
          >
            {r}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="py-8 text-center text-sm text-muted-foreground">
          No articles found for the selected filters.
        </p>
      ) : (
        <ul className="divide-y divide-border">
          {filtered.map((a) => (
            <li key={a.title}>
              <button className="group flex w-full flex-col gap-2 py-4 text-left">
                <div className="flex items-center gap-2">
                  <span className="rounded bg-accent px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-primary">
                    {a.category}
                  </span>
                  <span className={cn("rounded px-2 py-0.5 text-[11px] font-medium", sentimentStyles[a.sentiment])}>
                    {a.sentiment}
                  </span>
                  <span className="ml-auto flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="size-3" />
                    {a.time}
                  </span>
                </div>
                <h3 className="font-medium leading-snug text-pretty transition-colors group-hover:text-primary">
                  {a.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{a.summary}</p>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-muted-foreground">Impact</span>
                  <div className="h-1.5 w-24 overflow-hidden rounded-full bg-accent">
                    <div className="h-full rounded-full bg-primary" style={{ width: `${a.impact}%` }} />
                  </div>
                  <span className="font-mono text-[11px] text-muted-foreground">{a.impact}/100</span>
                </div>
              </button>
            </li>
          ))}
        </ul>
      )}
    </Card>
  )
}
