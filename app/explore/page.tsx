import { AppSidebar } from "@/components/app-sidebar"
import { MobileHeader } from "@/components/mobile-header"
import { ExploreContent } from "@/components/explore-content"

export const metadata = {
  title: "Explore - InvestWhat",
  description: "Discover what your AI copilot can do and learn from community examples",
}

export default function ExplorePage() {
  return (
    <div className="flex min-h-screen bg-background">
      <AppSidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        <MobileHeader />

        <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-6 sm:px-6 lg:px-8">
          <ExploreContent />
        </main>
      </div>
    </div>
  )
}
