import { TimelineSection } from "@/components/sections/timeline-section"
import { Award, BarChart3, Calendar, CheckCircle, Clock, Flag, Layers, Star, Zap, Users } from "lucide-react"

export default function TimelineEnhancedDemo() {
  return (
    <div className="min-h-screen bg-[#030303] py-20">
      <div className="space-y-64">
        {" "}
        {/* Increased spacing for better scroll effect */}
        <div>
          <div className="container mx-auto px-4 mb-8">
            <h1 className="text-3xl font-bold text-white">Enhanced Vertical Timeline</h1>
            <p className="text-white/60 mt-2">Scroll down to see the animated progress line</p>
          </div>
          <TimelineSection
            type="roadmap"
            layout="vertical"
            title="Escout Development Roadmap"
            subtitle="Our Journey"
            description="Follow our progress as we build the ultimate esports scouting platform."
            items={[
              {
                date: "Q3 2023",
                title: "MVP (Closed Beta)",
                description: "ESV, Basic search functions, Player and team profiles, Home feed",
                icon: <Flag className="h-5 w-5" />,
                status: "completed",
              },
              {
                date: "Q4 2023",
                title: "Test (Open Beta)",
                description: "Team reputation, analytics tools, Enhanced filters",
                icon: <Star className="h-5 w-5" />,
                status: "completed",
              },
              {
                date: "Q1 2024",
                title: "Launch",
                description: "Blockchain-based contract verification, Player transfer market, Interactive leaderboard",
                icon: <CheckCircle className="h-5 w-5" />,
                status: "current",
                highlight: true,
              },
              {
                date: "Q2 2024",
                title: "Scale",
                description: "Player career comparison tools, Additional game integrations",
                icon: <Zap className="h-5 w-5" />,
                status: "upcoming",
                highlight: true,
              },
              {
                date: "Q3 2024",
                title: "Tournament Integration",
                description: "Onboard tournament organizers & broadcasters",
                icon: <Calendar className="h-5 w-5" />,
                status: "upcoming",
              },
              {
                date: "Q4 2024",
                title: "Global Expansion",
                description: "Expand to additional regions and games",
                icon: <Clock className="h-5 w-5" />,
                status: "upcoming",
              },
            ]}
          />
        </div>
        <div>
          <div className="container mx-auto px-4 mb-8">
            <h1 className="text-3xl font-bold text-white">Enhanced Horizontal Timeline</h1>
            <p className="text-white/60 mt-2">Scroll to see the animated progress line</p>
          </div>
          <TimelineSection
            layout="horizontal"
            title="Platform Milestones"
            subtitle="Key Achievements"
            description="A snapshot of our most significant milestones and achievements."
            items={[
              {
                date: "2023 Q1",
                title: "Concept",
                description: "Initial concept development and market research.",
                icon: <Flag className="h-5 w-5" />,
                status: "completed",
              },
              {
                date: "2023 Q2",
                title: "Prototype",
                description: "First working prototype with core features.",
                icon: <Layers className="h-5 w-5" />,
                status: "completed",
              },
              {
                date: "2023 Q3",
                title: "Alpha Testing",
                description: "Internal testing with select users.",
                icon: <BarChart3 className="h-5 w-5" />,
                status: "completed",
                highlight: true,
              },
              {
                date: "2023 Q4",
                title: "Beta Launch",
                description: "Public beta with early adopters.",
                icon: <Star className="h-5 w-5" />,
                status: "current",
              },
              {
                date: "2024 Q1",
                title: "Official Launch",
                description: "Full platform launch with all features.",
                icon: <Award className="h-5 w-5" />,
                status: "upcoming",
              },
            ]}
          />
        </div>
        {/* Add a third example with more items for better demonstration */}
        <div>
          <div className="container mx-auto px-4 mb-8">
            <h1 className="text-3xl font-bold text-white">Player Journey Timeline</h1>
            <p className="text-white/60 mt-2">A longer timeline showing a player's journey</p>
          </div>
          <TimelineSection
            type="history"
            layout="vertical"
            title="From Amateur to Pro"
            subtitle="Player Journey"
            description="Follow the journey of a typical player from amateur to professional esports athlete."
            items={[
              {
                date: "Month 1",
                title: "Profile Creation",
                description: "Creating a detailed profile on Escout with game history and statistics.",
                icon: <Flag className="h-5 w-5" />,
                status: "completed",
              },
              {
                date: "Month 2",
                title: "First ESV Score",
                description: "Receiving initial ESV score and performance analysis.",
                icon: <BarChart3 className="h-5 w-5" />,
                status: "completed",
              },
              {
                date: "Month 3",
                title: "Skills Development",
                description: "Working on improving skills based on ESV insights and recommendations.",
                icon: <Star className="h-5 w-5" />,
                status: "completed",
              },
              {
                date: "Month 4",
                title: "Amateur Tournament",
                description: "Participating in first Escout-verified amateur tournament.",
                icon: <Award className="h-5 w-5" />,
                status: "completed",
                highlight: true,
              },
              {
                date: "Month 5",
                title: "Team Tryouts",
                description: "Receiving first tryout invitations from semi-professional teams.",
                icon: <Users className="h-5 w-5" />,
                status: "current",
                highlight: true,
              },
              {
                date: "Month 6",
                title: "Team Signing",
                description: "Signing with a semi-professional team for first competitive season.",
                icon: <CheckCircle className="h-5 w-5" />,
                status: "upcoming",
              },
              {
                date: "Month 8",
                title: "Professional Debut",
                description: "Making professional tournament debut with team.",
                icon: <Zap className="h-5 w-5" />,
                status: "upcoming",
              },
              {
                date: "Month 12",
                title: "Pro Contract",
                description: "Signing first full professional contract with established organization.",
                icon: <Award className="h-5 w-5" />,
                status: "upcoming",
              },
            ]}
          />
        </div>
      </div>

      {/* Add padding at the bottom for better scrolling experience */}
      <div className="h-screen"></div>
    </div>
  )
}
