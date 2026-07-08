import { AppWrapper } from "@/components/app-wrapper"
import { NewHeroSection } from "@/components/new-hero-section"
import { GetStartedCards } from "@/components/get-started-cards"
import { FeaturedSidebar } from "@/components/featured-sidebar"
import { AIChatWidget } from "@/components/ai-chat-widget"

export default function Page() {
  return (
    <AppWrapper>
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 xl:grid-cols-[1fr_380px] h-full">
          {/* Main content column */}
          <div className="space-y-8 flex flex-col">
            {/* Hero Section */}
            <NewHeroSection />

            {/* Get Started Cards */}
            <GetStartedCards />

            {/* AI Chat Widget */}
            <div className="mt-auto">
              <AIChatWidget />
            </div>
          </div>

          {/* Right Sidebar */}
          <aside className="xl:sticky xl:top-8 h-fit">
            <FeaturedSidebar />
          </aside>
        </div>
      </main>
    </AppWrapper>
  )
}
