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
  
  // Group portfolios by type
  const personalPortfolios = portfolios.filter(p => p.type === "Personal").slice(1)
  const communityPortfolios = portfolios.filter(p => p.type === "Community")
  const curatedPortfolios = portfolios.filter(p => p.type === "Curated")
  const politicalPortfolios = portfolios.filter(p => p.type === "Political")

  return (
    <AppWrapper>
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6 sm:px-6 lg:px-8 space-y-6">
        {/* Header */}
        <PortfolioHeader />

        {/* Featured Portfolio */}
        {featuredPortfolio && (
          <section className="space-y-2">
            <div>
              <h2 className="text-lg font-bold tracking-tight">Your Top Portfolio</h2>
              <p className="text-xs text-muted-foreground">Performance overview of your best performing portfolio</p>
            </div>
            <PortfolioHeroCard portfolio={featuredPortfolio} />
          </section>
        )}

        {/* My Portfolios */}
        {personalPortfolios.length > 0 && (
          <section className="space-y-2">
            <div>
              <h2 className="text-lg font-bold tracking-tight">My Portfolios</h2>
              <p className="text-xs text-muted-foreground">{personalPortfolios.length} personal portfolio{personalPortfolios.length !== 1 ? 's' : ''}</p>
            </div>
            <PortfolioGrid portfolios={personalPortfolios} />
          </section>
        )}

        {/* Curated Portfolios */}
        {curatedPortfolios.length > 0 && (
          <section className="space-y-2">
            <div>
              <h2 className="text-lg font-bold tracking-tight">Curated Portfolios</h2>
              <p className="text-xs text-muted-foreground">Expert-managed strategies and themed portfolios</p>
            </div>
            <PortfolioGrid portfolios={curatedPortfolios} />
          </section>
        )}

        {/* Community Portfolios */}
        {communityPortfolios.length > 0 && (
          <section className="space-y-2">
            <div>
              <h2 className="text-lg font-bold tracking-tight">Community Portfolios</h2>
              <p className="text-xs text-muted-foreground">Strategies shared by our community members</p>
            </div>
            <PortfolioGrid portfolios={communityPortfolios} />
          </section>
        )}

        {/* Political Portfolios */}
        {politicalPortfolios.length > 0 && (
          <section className="space-y-2">
            <div>
              <h2 className="text-lg font-bold tracking-tight">Political Portfolios</h2>
              <p className="text-xs text-muted-foreground">Public disclosure portfolios from political figures</p>
            </div>
            <PortfolioGrid portfolios={politicalPortfolios} />
          </section>
        )}
      </main>
    </AppWrapper>
  )
}
