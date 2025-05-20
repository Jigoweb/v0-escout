import { TimelineSection } from "@/components/sections/timeline-section"
import { Award, BarChart3, Calendar, CheckCircle, Clock, Flag, Layers, Star, Zap, Users } from "lucide-react"

export default function TimelineDemo() {
  return (
    <div className="min-h-screen bg-[#030303] py-20">
      <div className="space-y-64">
        <div>
          <div className="container mx-auto px-4 mb-8">
            <h1 className="text-3xl font-bold text-white">Standard Vertical Timeline</h1>
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
            <h1 className="text-3xl font-bold text-white">Interactive Vertical Timeline</h1>
            <p className="text-white/60 mt-2">Hover over timeline items to see more details</p>
          </div>
          <TimelineSection
            type="roadmap"
            layout="vertical"
            interactive={true}
            title="Escout Development Roadmap"
            subtitle="Interactive Version"
            description="Hover over items to see additional details about each phase."
            items={[
              {
                date: "Q3 2023",
                title: "MVP (Closed Beta)",
                description: "ESV, Basic search functions, Player and team profiles, Home feed",
                icon: <Flag className="h-5 w-5" />,
                status: "completed",
                details:
                  "Our MVP phase focused on building the core functionality of the platform. We developed the initial ESV algorithm, created basic search functionality, and established the foundation for player and team profiles. The home feed was designed to showcase relevant players and teams based on user preferences.",
              },
              {
                date: "Q4 2023",
                title: "Test (Open Beta)",
                description: "Team reputation, analytics tools, Enhanced filters",
                icon: <Star className="h-5 w-5" />,
                status: "completed",
                details:
                  "During the Open Beta, we expanded the platform with team reputation metrics, advanced analytics tools for performance tracking, and enhanced search filters. We invited select teams and players to test the platform and provide feedback, which helped us refine the user experience and identify key areas for improvement.",
              },
              {
                date: "Q1 2024",
                title: "Launch",
                description: "Blockchain-based contract verification, Player transfer market, Interactive leaderboard",
                icon: <CheckCircle className="h-5 w-5" />,
                status: "current",
                highlight: true,
                details:
                  "Our official launch introduced blockchain-based contract verification for secure and transparent player agreements. We also launched the player transfer market, allowing teams to discover available talent and initiate transfer negotiations. The interactive leaderboard provides real-time rankings of players based on their ESV scores and recent performance.",
              },
              {
                date: "Q2 2024",
                title: "Scale",
                description: "Player career comparison tools, Additional game integrations",
                icon: <Zap className="h-5 w-5" />,
                status: "upcoming",
                highlight: true,
                details:
                  "In our scaling phase, we'll introduce advanced player career comparison tools that allow for detailed analysis of player trajectories and potential. We'll also expand our platform to support additional game titles, broadening our reach within the esports ecosystem and providing more opportunities for players across different games.",
              },
              {
                date: "Q3 2024",
                title: "Tournament Integration",
                description: "Onboard tournament organizers & broadcasters",
                icon: <Calendar className="h-5 w-5" />,
                status: "upcoming",
                details:
                  "Our tournament integration phase will focus on creating seamless connections with tournament organizers and broadcasters. This will include automated roster submission, player eligibility verification, and data integration for enhanced broadcast statistics. Tournament organizers will be able to create dedicated hubs on our platform for their events.",
              },
              {
                date: "Q4 2024",
                title: "Global Expansion",
                description: "Expand to additional regions and games",
                icon: <Clock className="h-5 w-5" />,
                status: "upcoming",
                details:
                  "Our global expansion will focus on supporting more regions with localized versions of the platform and region-specific features. We'll establish partnerships with regional esports organizations and adapt our ESV algorithm to account for regional differences in competitive play. This phase will also include additional language support and region-specific content.",
              },
            ]}
          />
        </div>

        <div>
          <div className="container mx-auto px-4 mb-8">
            <h1 className="text-3xl font-bold text-white">Horizontal Timeline</h1>
            <p className="text-white/60 mt-2">A compact horizontal timeline layout</p>
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

        <div>
          <div className="container mx-auto px-4 mb-8">
            <h1 className="text-3xl font-bold text-white">Interactive Horizontal Timeline</h1>
            <p className="text-white/60 mt-2">Hover over items to see additional details</p>
          </div>
          <TimelineSection
            layout="horizontal"
            interactive={true}
            title="Player Journey"
            subtitle="From Amateur to Pro"
            description="Follow the journey of a typical player from amateur to professional esports athlete."
            items={[
              {
                date: "Month 1",
                title: "Profile Creation",
                description: "Creating a detailed profile on Escout with game history and statistics.",
                icon: <Flag className="h-5 w-5" />,
                status: "completed",
                details:
                  "Players begin by creating a comprehensive profile that showcases their skills, experience, and achievements. This includes connecting game accounts to import performance data and match history automatically.",
              },
              {
                date: "Month 2",
                title: "First ESV Score",
                description: "Receiving initial ESV score and performance analysis.",
                icon: <BarChart3 className="h-5 w-5" />,
                status: "completed",
                details:
                  "After sufficient data is collected, players receive their first ESV score. This proprietary rating provides an objective measure of their skill level and potential, along with detailed performance analytics and improvement recommendations.",
              },
              {
                date: "Month 3",
                title: "Skills Development",
                description: "Working on improving skills based on ESV insights and recommendations.",
                icon: <Star className="h-5 w-5" />,
                status: "completed",
                details:
                  "Players use the insights from their ESV analysis to focus their training and development efforts. The platform provides personalized recommendations for improvement based on identified strengths and weaknesses.",
              },
              {
                date: "Month 4",
                title: "Amateur Tournament",
                description: "Participating in first Escout-verified amateur tournament.",
                icon: <Award className="h-5 w-5" />,
                status: "completed",
                highlight: true,
                details:
                  "Escout-verified tournaments provide players with opportunities to showcase their skills in a competitive environment. Performance in these tournaments is factored into the ESV score and increases visibility to professional teams.",
              },
              {
                date: "Month 5",
                title: "Team Tryouts",
                description: "Receiving first tryout invitations from semi-professional teams.",
                icon: <Users className="h-5 w-5" />,
                status: "current",
                highlight: true,
                details:
                  "As players' ESV scores improve and their tournament performances stand out, they begin to receive tryout invitations from teams. The platform facilitates these connections and provides tools for scheduling and feedback.",
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
