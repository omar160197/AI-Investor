'use client'

import { useState } from 'react'
import { Card } from "@/components/ui/card"
import { copilotExamples } from "@/lib/mock-data"
import { Heart, MessageCircle, Search, Sparkles, TrendingUp, Wand2, ChartBar, AlertCircle, Award, Activity, GitCompare, X } from "lucide-react"

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

export function ExploreContent() {
  const [activeTab, setActiveTab] = useState<'all' | 'capabilities' | 'community'>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = copilotExamples.filter(example => {
    const matchesTab = activeTab === 'all' || example.type === (activeTab === 'capabilities' ? 'capability' : 'community')
    const matchesSearch = example.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      example.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      example.category.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesTab && matchesSearch
  })

  const tabs = [
    { id: 'all', label: 'All', count: copilotExamples.length },
    { id: 'capabilities', label: 'What your copilot can do', count: copilotExamples.filter(e => e.type === 'capability').length },
    { id: 'community', label: 'How people use it', count: copilotExamples.filter(e => e.type === 'community').length },
  ] as const

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Explore what's possible</h1>
        <p className="text-lg text-muted-foreground">
          Discover how to use your AI copilot and learn from community examples
        </p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search by title, description, or category..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-lg border border-border bg-background pl-10 pr-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary/50 focus:ring-1 focus:ring-primary/20"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="size-4" />
          </button>
        )}
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-border">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
              activeTab === tab.id
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            {tab.label} <span className="ml-2 text-xs font-semibold text-muted-foreground">({tab.count})</span>
          </button>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid gap-4">
        {filtered.length === 0 ? (
          <div className="rounded-lg border border-border bg-muted/30 p-12 text-center">
            <p className="text-muted-foreground">No results found for "{searchQuery}"</p>
          </div>
        ) : (
          filtered.map((example) => (
            <Card
              key={example.id}
              className="group cursor-pointer gap-0 p-6 transition-all hover:border-primary/50 hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className={`flex size-12 items-center justify-center rounded-lg flex-shrink-0 ${
                  example.type === 'capability' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'
                }`}>
                  {iconMap[example.icon]}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {example.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">{example.description}</p>

                      {/* Query or Community details */}
                      <div className="mt-4">
                        {example.type === 'capability' && example.query && (
                          <div className="rounded-lg bg-muted/50 border border-border/50 px-4 py-3">
                            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">Example query:</p>
                            <p className="text-sm italic text-foreground">"{example.query}"</p>
                          </div>
                        )}
                        {example.type === 'community' && (
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm">
                              <span className="font-medium text-foreground">{example.author}</span>
                              <span className="text-muted-foreground">·</span>
                              <span className="text-muted-foreground">{example.timestamp}</span>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <button className="inline-flex items-center gap-1 hover:text-primary transition-colors">
                                <Heart className="size-4" /> {example.likes} likes
                              </button>
                              <button className="inline-flex items-center gap-1 hover:text-primary transition-colors">
                                <MessageCircle className="size-4" /> {example.replies} replies
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                        {example.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
