'use client'

import { Card } from '@/components/ui/card'
import { CheckCircle2, BookOpen, MessageSquare, Zap } from 'lucide-react'

export function GettingStartedTips() {
  const tips = [
    {
      icon: CheckCircle2,
      title: 'What is a Portfolio?',
      description: 'A collection of stocks, ETFs, and other investments you own together',
    },
    {
      icon: Zap,
      title: 'Diversification',
      description: 'Spread investments across different assets to reduce risk',
    },
    {
      icon: BookOpen,
      title: 'Key Metrics to Know',
      description: 'Return %, Holdings, Value, and Diversification explain your portfolio health',
    },
    {
      icon: MessageSquare,
      title: 'Ask Our AI Copilot',
      description: 'Click the chat button anytime to get personalized investment advice',
    },
  ]

  return (
    <div className="space-y-3">
      <div>
        <h3 className="font-semibold text-sm mb-1">Getting Started Tips</h3>
        <p className="text-xs text-muted-foreground">Learn the basics</p>
      </div>
      <div className="space-y-2">
        {tips.map((tip, index) => {
          const Icon = tip.icon
          return (
            <Card key={index} className="p-3 hover:shadow-md transition-shadow cursor-pointer group">
              <div className="flex gap-3">
                <Icon className="size-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-semibold group-hover:text-primary transition-colors">{tip.title}</h4>
                  <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{tip.description}</p>
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
