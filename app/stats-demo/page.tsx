import { StatsSection } from "@/components/sections/stats-section"

export default function StatsDemo() {
  return (
    <div className="min-h-screen bg-[#030303] py-20">
      <div className="container mx-auto px-4 space-y-20">
        <div>
          <h1 className="text-3xl font-bold text-white mb-8">Default Stats Layout</h1>
          <StatsSection variant="default" columns={3} />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-white mb-8">Cards Stats Layout</h1>
          <StatsSection
            variant="cards"
            columns={2}
            title="Growth Metrics"
            subtitle="Our Progress"
            description="See how we've grown and the impact we've made for our customers."
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-white mb-8">Minimal Stats Layout</h1>
          <StatsSection
            variant="minimal"
            columns={4}
            title="Performance at a Glance"
            subtitle="By the Numbers"
            description="Key performance indicators that showcase our platform's capabilities."
            animationDuration={1500}
          />
        </div>
      </div>
    </div>
  )
}
