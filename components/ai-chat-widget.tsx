'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Send, Sparkles } from 'lucide-react'
import { useState } from 'react'

const suggestedPrompts = [
  "Explain ETFs like I'm 12",
  "What's a safe first portfolio?",
  "Is investing risky right now?",
  "Show me an AI portfolio"
]

export function AIChatWidget() {
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle message submission
  }

  const handlePromptClick = (prompt: string) => {
    setMessage(prompt)
  }

  return (
    <Card className="p-6 space-y-4 border-border/50">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Input field */}
        <div className="relative flex items-center gap-2">
          <Sparkles className="absolute left-3 w-4 h-4 text-primary" />
          <Input
            placeholder="Ask the AI anything about investing..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="pl-10 pr-10 bg-muted/50 border-border/50 focus:border-primary/50"
          />
          <Button
            type="submit"
            size="sm"
            variant="ghost"
            className="absolute right-1 p-2 h-auto"
          >
            <Send className="w-4 h-4 text-primary" />
          </Button>
        </div>

        {/* Suggested prompts */}
        <div className="space-y-2">
          <p className="text-xs text-muted-foreground font-medium">Try asking:</p>
          <div className="grid grid-cols-2 gap-2">
            {suggestedPrompts.map((prompt) => (
              <Button
                key={prompt}
                type="button"
                variant="outline"
                size="sm"
                onClick={() => handlePromptClick(prompt)}
                className="text-xs h-auto py-2 justify-start whitespace-normal text-left hover:bg-muted/50"
              >
                {prompt}
              </Button>
            ))}
          </div>
        </div>
      </form>
    </Card>
  )
}
