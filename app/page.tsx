import { AppSidebar } from "@/components/app-sidebar"
import { MobileHeader } from "@/components/mobile-header"
import { MarketTicker } from "@/components/market-ticker"
import { PortfolioHero } from "@/components/portfolio-hero"
import { QuickStart } from "@/components/quick-start"
import { MarketSentiment } from "@/components/market-sentiment"
import { EarningsCalendar } from "@/components/earnings-calendar"
import { AiAssistant } from "@/components/ai-assistant"
import { MyPortfolios } from "@/components/my-portfolios"
import { CommunityPortfolios } from "@/components/community-portfolios"
import { TrendingTickers } from "@/components/trending-tickers"
import { LearnSection } from "@/components/learn-section"
import { NewsFeed } from "@/components/news-feed"
import { MarketMovers } from "@/components/market-movers"
import { SectorHeatmap } from "@/components/sector-heatmap"
import { ScannerThemes } from "@/components/scanner-themes"
import { SmartMoney } from "@/components/smart-money"
import { PredictionMarkets } from "@/components/prediction-markets"
import { Watchlist } from "@/components/watchlist"
import { NetWorth } from "@/components/net-worth"
import { ExploreCopilot } from "@/components/explore-copilot"

export default function Page() {
  return (
    <div className="flex min-h-screen bg-background">
      <AppSidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        <MobileHeader />
        <MarketTicker />

        <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-6 sm:px-6 lg:px-8">
          <div className="grid gap-6 xl:grid-cols-[1fr_340px]">
            {/* Main column */}
            <div className="min-w-0 space-y-6">
              <PortfolioHero />
              <QuickStart />
              <ExploreCopilot />
              <MarketMovers />
              <SectorHeatmap />
              <AiAssistant />
              <ScannerThemes />
              <MyPortfolios />
              <CommunityPortfolios />
              <div className="grid gap-6 lg:grid-cols-2">
                <SmartMoney />
                <PredictionMarkets />
              </div>
              <LearnSection />
              <NewsFeed />
            </div>

            {/* Right rail */}
            <aside className="space-y-6">
              <div className="xl:sticky xl:top-6 xl:space-y-6">
                <NetWorth />
                <Watchlist />
                <MarketSentiment />
                <EarningsCalendar />
                <TrendingTickers />
              </div>
            </aside>
          </div>
        </main>
      </div>
    </div>
  )
}
