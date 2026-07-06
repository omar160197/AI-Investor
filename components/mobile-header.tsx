import { TrendingUp, Bell, Menu } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function MobileHeader() {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between border-b border-border bg-background/80 px-4 py-3 backdrop-blur lg:hidden">
      <div className="flex items-center gap-2">
        <button aria-label="Open menu" className="text-muted-foreground">
          <Menu className="size-5" />
        </button>
        <div className="flex items-center gap-2">
          <div className="flex size-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <TrendingUp className="size-4" />
          </div>
          <span className="font-semibold tracking-tight">
            invest<span className="text-primary">what</span>
          </span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button aria-label="Notifications" className="relative text-muted-foreground">
          <Bell className="size-5" />
          <span className="absolute -right-1 -top-1 flex size-4 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground">
            3
          </span>
        </button>
        <Avatar className="size-8">
          <AvatarFallback className="bg-primary/15 text-xs font-semibold text-primary">AM</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
