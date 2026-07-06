"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Sparkles, ArrowUp, Bot } from "lucide-react"
import { aiSuggestions } from "@/lib/mock-data"

interface Msg {
  role: "user" | "assistant"
  text: string
}

const canned =
  "Here's a quick take based on current mock market data. AAPL is trading near its 50-day moving average with neutral momentum. I'd watch the next earnings print and the $1.41 EPS estimate before adding."

export function AiAssistant() {
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
    <Card className="gap-4 overflow-hidden p-5">
      <div className="flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
          <Sparkles className="size-5" />
        </div>
        <div>
          <h2 className="font-semibold tracking-tight">Your personal AI investment assistant</h2>
          <p className="text-sm text-muted-foreground">Ask anything about stocks, markets, or your portfolio</p>
        </div>
      </div>

      {messages.length > 0 && (
        <div className="max-h-64 space-y-3 overflow-y-auto rounded-xl border border-border bg-background/40 p-4">
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
                    ? "max-w-[80%] rounded-2xl rounded-br-sm bg-primary px-3 py-2 text-sm text-primary-foreground"
                    : "max-w-[85%] rounded-2xl rounded-bl-sm bg-accent px-3 py-2 text-sm text-foreground"
                }
              >
                {m.text}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="relative">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          rows={2}
          placeholder="Ask anything about stocks, markets, or your portfolio..."
          className="w-full resize-none rounded-xl border border-input bg-background/60 py-3 pl-4 pr-12 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
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

      <div className="flex flex-wrap gap-2">
        {aiSuggestions.map((s) => (
          <button
            key={s}
            onClick={() => send(s)}
            className="rounded-full border border-border bg-accent/40 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
          >
            {s}
          </button>
        ))}
      </div>
    </Card>
  )
}
