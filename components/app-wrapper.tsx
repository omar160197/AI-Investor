"use client"

import { useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { MobileHeader } from "@/components/mobile-header"
import { AiChatDrawer } from "@/components/ai-chat-drawer"
import { AiFab } from "@/components/ai-fab"
import { MarketTicker } from "@/components/market-ticker"

interface AppWrapperProps {
  children: React.ReactNode
}

export function AppWrapper({ children }: AppWrapperProps) {
  const [chatOpen, setChatOpen] = useState(false)

  return (
    <>
      <div className="flex h-screen flex-col lg:flex-row">
        {/* Sidebar */}
        <AppSidebar onOpenChat={() => setChatOpen(true)} />

        {/* Main content */}
        <div className="flex flex-1 flex-col overflow-hidden">
          <MobileHeader />
          <MarketTicker />
          <div className="flex-1 overflow-y-auto">
            {children}
          </div>
        </div>
      </div>

      {/* AI Chat Drawer */}
      <AiChatDrawer open={chatOpen} onOpenChange={setChatOpen} />

      {/* Floating Action Button */}
      <AiFab open={chatOpen} onToggle={() => setChatOpen(!chatOpen)} />
    </>
  )
}
