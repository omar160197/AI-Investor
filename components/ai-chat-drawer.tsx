"use client"

import { useState } from "react"
import { X, Sparkles, ArrowUp, Bot, MessageCircle } from "lucide-react"
import { aiSuggestions } from "@/lib/mock-data"

interface Msg {
  role: "user" | "assistant"
  text: string
}

const canned =
  "Here's a quick take based on current mock market data. AAPL is trading near its 50-day moving average with neutral momentum. I'd watch the next earnings print and the $1.41 EPS estimate before adding."

interface AiChatDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AiChatDrawer({ open, onOpenChange }: AiChatDrawerProps) {
  const [messages, setMessages] = useState<Msg[]>([])
  const [input, setInput] = useState("")

  function send(text: string) {
    const value = text.trim()
    if (!value) return
    setMessages((m) => [...m, { role: "user", text: value }, { role: "assistant", text: canned }])
    setInput("")
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      if (e.nativeEvent.isComposing || e.keyCode === 229) return
      e.preventDefault()
      send(input)
    }
  }

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
          onClick={() => onOpenChange(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 z-50 h-screen w-full max-w-md transform border-l border-border bg-background transition-transform duration-300 ease-in-out flex flex-col ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary/15 text-primary">
              <Sparkles className="size-4" />
            </div>
            <div>
              <h2 className="text-sm font-semibold">InvestWhat AI</h2>
              <p className="text-xs text-muted-foreground">Your investment copilot</p>
            </div>
          </div>
          <button
            onClick={() => onOpenChange(false)}
            className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            aria-label="Close chat"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto">
          {messages.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 px-6 py-8 text-center">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10">
                <MessageCircle className="size-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Start investing smarter</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Ask me anything about stocks, markets, strategies, or your portfolio
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4 p-4">
              {messages.map((m, i) => (
                <div key={i} className={m.role === "user" ? "flex justify-end" : "flex items-start gap-2"}>
                  {m.role === "assistant" && (
                    <div className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-md bg-primary/15 text-primary">
                      <Bot className="size-3.5" />
                    </div>
                  )}
                  <div
                    className={
                      m.role === "user"
                        ? "max-w-[80%] rounded-2xl rounded-br-sm bg-primary px-4 py-2 text-sm text-primary-foreground"
                        : "max-w-[85%] rounded-2xl rounded-bl-sm bg-accent px-4 py-2 text-sm text-foreground"
                    }
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Suggestions - show only if no messages */}
        {messages.length === 0 && (
          <div className="border-t border-border px-4 py-3">
            <p className="mb-2 text-xs font-medium text-muted-foreground">Try asking:</p>
            <div className="flex flex-wrap gap-2">
              {aiSuggestions.slice(0, 3).map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="rounded-full border border-border bg-accent/40 px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input Area */}
        <div className="border-t border-border p-4">
          <div className="relative">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              rows={2}
              placeholder="Ask about stocks, markets, or your portfolio..."
              className="w-full resize-none rounded-xl border border-input bg-background/60 py-3 pl-4 pr-12 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:bg-background"
            />
            <button
              onClick={() => send(input)}
              aria-label="Send message"
              className="absolute bottom-3 right-3 flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-40"
              disabled={!input.trim()}
            >
              <ArrowUp className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
