"use client"

import { Search, Plus, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function PortfolioHeader() {
  return (
    <div className="space-y-4">
      {/* Title Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Portfolios</h1>
          <p className="mt-1 text-muted-foreground">Manage and track all your investment portfolios</p>
        </div>
        <Button className="gap-2">
          <Plus className="size-4" />
          New Portfolio
        </Button>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search portfolios by name or symbol..."
            className="pl-10"
          />
        </div>
        <Button variant="outline" size="sm" className="gap-2 w-full sm:w-auto">
          <Filter className="size-4" />
          Filters
        </Button>
      </div>

      {/* Category Chips */}
      <div className="flex flex-wrap gap-2">
        {["All", "My Portfolios", "Community", "Trending"].map((category) => (
          <Button
            key={category}
            variant={category === "All" ? "default" : "outline"}
            size="sm"
            className="rounded-full"
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  )
}
