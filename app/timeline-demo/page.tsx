import { TimelineSection } from "@/components/sections/timeline-section"

export default function TimelineDemo() {
  return (
    <div className="min-h-screen bg-[#030303] py-20">
      <div className="space-y-32">
        <div>
          <div className="container mx-auto px-4 mb-8">
            <h1 className="text-3xl font-bold text-white">Company History Timeline (Vertical)</h1>
            <p className="text-white/60 mt-2">A vertical timeline showing the company's journey</p>
          </div>
          <TimelineSection type="history" layout="vertical" />
        </div>

        <div>
          <div className="container mx-auto px-4 mb-8">
            <h1 className="text-3xl font-bold text-white">Product Roadmap Timeline (Vertical)</h1>
            <p className="text-white/60 mt-2">A vertical timeline showing the product roadmap</p>
          </div>
          <TimelineSection
            type="roadmap"
            layout="vertical"
            title="Product Roadmap"
            subtitle="Our Vision"
            description="See what we've accomplished and what's coming next in our product development journey."
            items={[
              {
                date: "Q1 2023",
                title: "User Interface Redesign",
                description: "Complete overhaul of the user interface for improved usability and aesthetics.",
                status: "completed",
              },
              {
                date: "Q2 2023",
                title: "API 2.0 Release",
                description: "Launch of our new API with enhanced capabilities and improved documentation.",
                status: "completed",
              },
              {
                date: "Q3 2023",
                title: "Mobile App Launch",
                description: "Release of our native mobile applications for iOS and Android platforms.",
                status: "completed",
                highlight: true,
              },
              {
                date: "Q4 2023",
                title: "Advanced Analytics",
                description: "Introduction of advanced analytics features with customizable dashboards.",
                status: "current",
                highlight: true,
              },
              {
                date: "Q1 2024",
                title: "AI Assistant Integration",
                description: "Integration of AI-powered assistant to help users accomplish tasks more efficiently.",
                status: "upcoming",
              },
              {
                date: "Q2 2024",
                title: "Enterprise SSO",
                description: "Support for enterprise single sign-on solutions and advanced security features.",
                status: "upcoming",
              },
              {
                date: "Q3 2024",
                title: "Global Expansion",
                description: "Expansion of our infrastructure to support more regions and languages.",
                status: "upcoming",
              },
            ]}
          />
        </div>

        <div>
          <div className="container mx-auto px-4 mb-8">
            <h1 className="text-3xl font-bold text-white">Horizontal Timeline</h1>
            <p className="text-white/60 mt-2">A horizontal timeline layout for compact display</p>
          </div>
          <TimelineSection
            layout="horizontal"
            title="Company Milestones"
            subtitle="Key Achievements"
            description="A snapshot of our most significant milestones and achievements."
            items={[
              {
                date: "2018",
                title: "Founded",
                description: "Company was founded with a mission to transform digital experiences.",
                status: "completed",
              },
              {
                date: "2019",
                title: "First Product",
                description: "Launched our flagship product to the market.",
                status: "completed",
              },
              {
                date: "2020",
                title: "1,000 Customers",
                description: "Reached our first major customer milestone.",
                status: "completed",
                highlight: true,
              },
              {
                date: "2021",
                title: "Series A",
                description: "Secured $5M in Series A funding.",
                status: "completed",
              },
              {
                date: "2022",
                title: "Global Expansion",
                description: "Expanded to international markets.",
                status: "completed",
              },
            ]}
          />
        </div>

        <div>
          <div className="container mx-auto px-4 mb-8">
            <h1 className="text-3xl font-bold text-white">Minimal Timeline (No Connectors)</h1>
            <p className="text-white/60 mt-2">A cleaner timeline without connector lines</p>
          </div>
          <TimelineSection
            showConnectors={false}
            title="Development Journey"
            subtitle="Our Path"
            description="The key phases in our product development journey."
            items={[
              {
                date: "Phase 1",
                title: "Concept & Research",
                description: "Initial concept development and market research.",
                status: "completed",
              },
              {
                date: "Phase 2",
                title: "Design & Prototyping",
                description: "Creating the initial designs and functional prototypes.",
                status: "completed",
              },
              {
                date: "Phase 3",
                title: "Development",
                description: "Building the core product functionality and features.",
                status: "completed",
              },
              {
                date: "Phase 4",
                title: "Testing & Refinement",
                description: "Comprehensive testing and product refinement.",
                status: "current",
                highlight: true,
              },
              {
                date: "Phase 5",
                title: "Launch & Growth",
                description: "Product launch and initial growth phase.",
                status: "upcoming",
              },
            ]}
          />
        </div>
      </div>
    </div>
  )
}
