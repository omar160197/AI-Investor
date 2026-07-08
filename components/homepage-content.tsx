'use client'

import { useState, useEffect } from 'react'
import { WelcomeHero } from '@/components/welcome-hero'
import { QuickStart } from '@/components/quick-start'
import { ExploreCopilot } from '@/components/explore-copilot'
import { LearnSection } from '@/components/learn-section'
import { CommunityPortfolios } from '@/components/community-portfolios'
import { PortfolioHero } from '@/components/portfolio-hero'
import { MarketMovers } from '@/components/market-movers'
import { SectorHeatmap } from '@/components/sector-heatmap'
import { ScannerThemes } from '@/components/scanner-themes'
import { MyPortfolios } from '@/components/my-portfolios'
import { SmartMoney } from '@/components/smart-money'
import { PredictionMarkets } from '@/components/prediction-markets'
import { NewsFeed } from '@/components/news-feed'
import { GettingStartedTips } from '@/components/getting-started-tips'
import { NetWorth } from '@/components/net-worth'
import { Watchlist } from '@/components/watchlist'
import { MarketSentiment } from '@/components/market-sentiment'
import { EarningsCalendar } from '@/components/earnings-calendar'
import { TrendingTickers } from '@/components/trending-tickers'

export function HomepageContent() {
  const [isNewUser, setIsNewUser] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem('investwhat_has_visited')
    
    if (hasVisited) {
      setIsNewUser(false)
    } else {
      // Mark that user has visited
      localStorage.setItem('investwhat_has_visited', 'true')
      setIsNewUser(true)
    }
    
    setIsLoading(false)
  }, [])
  // Show loading state while checking user status
  if (isLoading) {
    return (
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-6 sm:px-6 lg:px-8">
        <div className="animate-pulse space-y-6">
          <div className="h-32 bg-muted rounded-lg" />
          <div className="h-64 bg-muted rounded-lg" />
        </div>
      </main>
    )
  }

  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-6 sm:px-6 lg:px-8">
      <div className="grid gap-6 xl:grid-cols-[1fr_340px]">
        {/* Main column */}
        <div className="min-w-0 space-y-6">
          {/* NEW USER FLOW */}
          {isNewUser ? (
            <>
              {/* Welcome Banner */}
              <WelcomeHero />

              {/* Get Started */}
              <section>
                <div className="mb-3">
                  <h2 className="text-lg font-bold">Get Started</h2>
                  <p className="text-xs text-muted-foreground">4 ways to begin your investing journey</p>
                </div>
                <QuickStart />
              </section>

              {/* Explore Copilot */}
              <section>
                <div className="mb-3">
                  <h2 className="text-lg font-bold">Meet Your AI Copilot</h2>
                  <p className="text-xs text-muted-foreground">See what's possible with AI-powered investing</p>
                </div>
                <ExploreCopilot />
              </section>

              {/* Learn Section */}
              <section>
                <div className="mb-3">
                  <h2 className="text-lg font-bold">Learn Investing Basics</h2>
                  <p className="text-xs text-muted-foreground">Educational resources from community experts</p>
                </div>
                <LearnSection />
              </section>

              {/* Community Insights */}
              <section>
                <div className="mb-3">
                  <h2 className="text-lg font-bold">Community Insights</h2>
                  <p className="text-xs text-muted-foreground">See how others are investing</p>
                </div>
                <CommunityPortfolios />
              </section>
            </>
          ) : (
            /* RETURNING USER FLOW */
            <>
              <PortfolioHero />
              <QuickStart />
              <ExploreCopilot />
              <MarketMovers />
              <SectorHeatmap />
              <ScannerThemes />
              <MyPortfolios />
              <CommunityPortfolios />
              <div className="grid gap-6 lg:grid-cols-2">
                <SmartMoney />
                <PredictionMarkets />
              </div>
              <LearnSection />
              <NewsFeed />
            </>
          )}
        </div>

        {/* Right rail */}
        <aside className="space-y-6">
          <div className="xl:sticky xl:top-6 xl:space-y-6">
            {isNewUser ? (
              /* New User Right Rail */
              <GettingStartedTips />
            ) : (
              /* Returning User Right Rail */
              <>
                <NetWorth />
                <Watchlist />
                <MarketSentiment />
                <EarningsCalendar />
                <TrendingTickers />
              </>
            )}
          </div>
        </aside>
      </div>
    </main>
  )
}
