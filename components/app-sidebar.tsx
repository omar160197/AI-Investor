"use client"

import { useState } from "react"
import {
  Home,
  Landmark,
  PieChart,
  Star,
  Gamepad2,
  Sparkles,
  Bell,
  Moon,
  LogOut,
  TrendingUp,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const navItems = [
  { label: "Home", icon: Home },
  { label: "Bank", icon: Landmark },
  { label: "Portfolio", icon: PieChart },
  { label: "Primary", icon: Star },
  { label: "Fantasy", icon: Gamepad2 },
  { label: "AI Assistant", icon: Sparkles },
]

export function AppSidebar() {
  const [active, setActive] = useState("Home")

  return (
    <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col border-r border-sidebar-border bg-sidebar lg:flex">
      <div className="flex items-center gap-2 px-6 py-5">
        <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <TrendingUp className="size-5" />
        </div>
        <span className="text-lg font-semibold tracking-tight">
          invest<span className="text-primary">what</span>
        </span>
      </div>

      <nav className="flex flex-1 flex-col gap-1 px-3 py-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = active === item.label
          return (
            <button
              key={item.label}
              onClick={() => setActive(item.label)}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                isActive
                  ? "bg-sidebar-accent text-foreground"
                  : "text-muted-foreground hover:bg-sidebar-accent/60 hover:text-foreground",
              )}
            >
              <Icon className={cn("size-4.5", isActive && "text-primary")} />
              {item.label}
            </button>
          )
        })}
      </nav>

      <div className="mt-auto space-y-1 border-t border-sidebar-border px-3 py-3">
        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-sidebar-accent/60 hover:text-foreground">
          <Bell className="size-4.5" />
          Notifications
          <span className="ml-auto flex size-5 items-center justify-center rounded-full bg-primary text-[11px] font-semibold text-primary-foreground">
            3
          </span>
        </button>
        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-sidebar-accent/60 hover:text-foreground">
          <Moon className="size-4.5" />
          Dark mode
        </button>

        <div className="mt-2 flex items-center gap-3 rounded-lg border border-sidebar-border bg-card/60 p-3">
          <Avatar className="size-9">
            <AvatarFallback className="bg-primary/15 text-sm font-semibold text-primary">AM</AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium">Alex Morgan</p>
            <p className="truncate text-xs text-muted-foreground">alex@investwhat.com</p>
          </div>
          <button
            aria-label="Sign out"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <LogOut className="size-4" />
          </button>
        </div>
      </div>
    </aside>
  )
}
