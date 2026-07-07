import { AppWrapper } from "@/components/app-wrapper"
import { ExploreContent } from "@/components/explore-content"

export const metadata = {
  title: "Explore - InvestWhat",
  description: "Discover what your AI copilot can do and learn from community examples",
}

export default function ExplorePage() {
  return (
    <AppWrapper>
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-6 sm:px-6 lg:px-8">
        <ExploreContent />
      </main>
    </AppWrapper>
  )
}
