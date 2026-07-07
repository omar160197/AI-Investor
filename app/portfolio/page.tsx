import { AppWrapper } from "@/components/app-wrapper"
import { PortfolioHeader } from "@/components/portfolio-header"
import { PortfolioHeroCard } from "@/components/portfolio-hero-card"
import { PortfolioGrid } from "@/components/portfolio-grid"
import { portfolios } from "@/lib/mock-data"

export const metadata = {
  title: "Portfolio - InvestWhat",
  description: "Browse and manage your investment portfolios",
}

export default function PortfolioPage() {
  // Get featured portfolio (first or highest performing)
  const featuredPortfolio = portfolios[0]
  const otherPortfolios = portfolios.slice(1)

  return (
    <AppWrapper>
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Header */}
          <PortfolioHeader />

          {/* Featured Portfolio */}
          {featuredPortfolio && (
            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-bold tracking-tight">Your Top Portfolio</h2>
                <p className="text-sm text-muted-foreground">Performance overview of your best performing portfolio</p>
              </div>
              <PortfolioHeroCard portfolio={featuredPortfolio} />
            </div>
          )}

          {/* Portfolio Grid */}
          {otherPortfolios.length > 0 && (
            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-bold tracking-tight">All Portfolios</h2>
                <p className="text-sm text-muted-foreground">Browse and compare your investment portfolios</p>
              </div>
              <PortfolioGrid portfolios={otherPortfolios} />
            </div>
          )}
        </div>
      </main>
    </AppWrapper>
  )
}
