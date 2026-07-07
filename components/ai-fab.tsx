"use client"

import { MessageCircle, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface AiFabProps {
  open: boolean
  onToggle: () => void
}

export function AiFab({ open, onToggle }: AiFabProps) {
  return (
    <button
      onClick={onToggle}
      className={cn(
        "fixed bottom-6 right-6 z-40 flex size-14 items-center justify-center rounded-full transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg hover:shadow-xl",
        open
          ? "bg-muted text-foreground hover:bg-muted/80"
          : "bg-primary text-primary-foreground hover:bg-primary/90 animate-pulse"
      )}
      aria-label={open ? "Close AI chat" : "Open AI chat"}
    >
      {open ? (
        <X className="size-6" />
      ) : (
        <MessageCircle className="size-6" />
      )}
    </button>
  )
}
