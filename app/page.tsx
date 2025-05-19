import { Header } from "@/components/sections/header"
import { HeroSection } from "@/components/sections/hero-section"
import { LogoShowcase } from "@/components/sections/logo-showcase"
import { FeaturesSection } from "@/components/sections/features-section"
import { StatsSection } from "@/components/sections/stats-section"
import { TimelineSection } from "@/components/sections/timeline-section"
import { VideoShowcase } from "@/components/sections/video-showcase"
import { PricingSection } from "@/components/sections/pricing-section"
import { CTABanner } from "@/components/sections/cta-banner"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { FAQSection } from "@/components/sections/faq-section"
import { NewsletterSection } from "@/components/sections/newsletter-section"
import { ContactSection } from "@/components/sections/contact-section"
import {
  BarChart3,
  Users,
  Globe,
  Award,
  Zap,
  Shield,
  Layers,
  RefreshCw,
  Smartphone,
  Star,
  Flag,
  CheckCircle,
  Mail,
  Phone,
  MessageSquare,
} from "lucide-react"

export default function LandingPage() {
  return (
    <>
      <Header
        logo="Escout"
        navItems={[
          { label: "Features", href: "#features" },
          { label: "How It Works", href: "#how-it-works" },
          { label: "Pricing", href: "#pricing" },
          { label: "Testimonials", href: "#testimonials" },
          { label: "FAQ", href: "#faq" },
        ]}
        ctaLabel="Get Started"
      />
      <main>
        <HeroSection
          badge="Esports Scouting Platform"
          title1="Discover the Next"
          title2="Esports Star"
          description="Escout is the ultimate esports scouting platform connecting talented players with professional teams through advanced analytics and AI-powered insights."
          primaryCta="Start Scouting"
          secondaryCta="Learn More"
        />
        <LogoShowcase
          variant="marquee"
          title="Trusted by Top Esports Organizations"
          subtitle="Our Partners"
          description="Join the growing number of professional teams and organizations using Escout to discover top talent."
          logos={[
            {
              name: "Team Liquid",
              url: "#",
              image: "/placeholder.svg?height=60&width=120",
            },
            {
              name: "Cloud9",
              url: "#",
              image: "/placeholder.svg?height=60&width=120",
            },
            {
              name: "Fnatic",
              url: "#",
              image: "/placeholder.svg?height=60&width=120",
            },
            {
              name: "G2 Esports",
              url: "#",
              image: "/placeholder.svg?height=60&width=120",
            },
            {
              name: "T1",
              url: "#",
              image: "/placeholder.svg?height=60&width=120",
            },
            {
              name: "100 Thieves",
              url: "#",
              image: "/placeholder.svg?height=60&width=120",
            },
            {
              name: "TSM",
              url: "#",
              image: "/placeholder.svg?height=60&width=120",
            },
            {
              name: "NRG",
              url: "#",
              image: "/placeholder.svg?height=60&width=120",
            },
          ]}
        />
        <div id="features">
          <FeaturesSection
            title="Advanced Scouting Features"
            subtitle="Discover Top Talent"
            description="Our platform provides all the tools you need to identify, analyze, and recruit the next generation of esports stars."
            features={[
              {
                icon: <BarChart3 className="h-6 w-6" />,
                title: "Advanced Analytics",
                description:
                  "Comprehensive performance metrics and statistics to evaluate player potential with precision.",
              },
              {
                icon: <Shield className="h-6 w-6" />,
                title: "Verified Profiles",
                description: "All player profiles are verified to ensure authentic and reliable information.",
              },
              {
                icon: <Zap className="h-6 w-6" />,
                title: "AI-Powered Insights",
                description: "Our proprietary ESV Score uses AI to predict player potential and team compatibility.",
              },
              {
                icon: <Layers className="h-6 w-6" />,
                title: "Multi-Game Support",
                description: "Comprehensive coverage across all major esports titles and emerging games.",
              },
              {
                icon: <RefreshCw className="h-6 w-6" />,
                title: "Real-time Updates",
                description: "Stay current with live performance tracking and instant notifications on rising talent.",
              },
              {
                icon: <Smartphone className="h-6 w-6" />,
                title: "Mobile Access",
                description: "Scout on the go with our fully responsive mobile application and notifications.",
              },
            ]}
          />
        </div>
        <StatsSection
          title="The Escout Advantage"
          subtitle="By The Numbers"
          description="Our platform is transforming how esports organizations discover and develop talent."
          stats={[
            {
              value: 50000,
              label: "Active Players",
              suffix: "+",
              icon: <Users className="h-6 w-6" />,
              description: "Talented players showcasing their skills",
            },
            {
              value: 200,
              label: "Pro Teams",
              suffix: "+",
              icon: <Shield className="h-6 w-6" />,
              description: "Organizations actively scouting talent",
            },
            {
              value: 85,
              label: "Placement Rate",
              suffix: "%",
              icon: <Zap className="h-6 w-6" />,
              description: "Of top-rated players find team opportunities",
            },
            {
              value: 15,
              label: "Esports Titles",
              suffix: "+",
              icon: <Globe className="h-6 w-6" />,
              description: "Across multiple competitive genres",
            },
            {
              value: 30,
              label: "Success Stories",
              icon: <Award className="h-6 w-6" />,
              description: "Players who went from amateur to pro",
            },
            {
              value: 1000000,
              label: "Matches Analyzed",
              suffix: "+",
              icon: <BarChart3 className="h-6 w-6" />,
              description: "For accurate performance assessment",
            },
          ]}
        />
        <div id="how-it-works">
          <TimelineSection
            title="How Escout Works"
            subtitle="The Process"
            description="Our streamlined approach connects talented players with professional opportunities."
            items={[
              {
                date: "Step 1",
                title: "Create Your Profile",
                description:
                  "Players create detailed profiles showcasing their skills, experience, and gameplay statistics.",
                icon: <Flag className="h-5 w-5" />,
                status: "completed",
              },
              {
                date: "Step 2",
                title: "Connect Game Accounts",
                description: "Link your game accounts to automatically import performance data and match history.",
                icon: <Layers className="h-5 w-5" />,
                status: "completed",
              },
              {
                date: "Step 3",
                title: "Get Your ESV Score",
                description:
                  "Our proprietary algorithm analyzes your performance to generate your Esports Scouting Value score.",
                icon: <BarChart3 className="h-5 w-5" />,
                status: "completed",
                highlight: true,
              },
              {
                date: "Step 4",
                title: "Showcase Your Skills",
                description:
                  "Upload highlight reels and participate in Escout-verified tournaments to increase visibility.",
                icon: <Star className="h-5 w-5" />,
                status: "completed",
              },
              {
                date: "Step 5",
                title: "Get Discovered",
                description: "Professional teams and organizations browse profiles and contact promising players.",
                icon: <CheckCircle className="h-5 w-5" />,
                status: "current",
                highlight: true,
              },
              {
                date: "Step 6",
                title: "Join a Team",
                description: "Receive offers, negotiate contracts, and begin your professional esports career.",
                icon: <Award className="h-5 w-5" />,
                status: "upcoming",
              },
            ]}
            layout="vertical"
            type="roadmap"
          />
        </div>
        <VideoShowcase
          title="See Escout in Action"
          subtitle="Video Showcase"
          description="Watch how Escout is transforming esports talent discovery and helping players achieve their professional dreams."
          videos={[
            {
              id: "video-1",
              title: "Escout Platform Overview",
              description: "A comprehensive tour of the Escout platform and its key features.",
              type: "youtube",
              url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
              thumbnail: "/placeholder.svg?height=720&width=1280",
              featured: true,
            },
            {
              id: "video-2",
              title: "Player Success Story: Alex 'Prodigy' Chen",
              description:
                "How a talented amateur player got discovered and signed to a professional team through Escout.",
              type: "youtube",
              url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
              thumbnail: "/placeholder.svg?height=720&width=1280",
            },
            {
              id: "video-3",
              title: "ESV Score Explained",
              description:
                "A deep dive into our proprietary Esports Scouting Value score and how it predicts player potential.",
              type: "youtube",
              url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
              thumbnail: "/placeholder.svg?height=720&width=1280",
            },
            {
              id: "video-4",
              title: "Team Manager Testimonial",
              description:
                "Hear from professional team managers about how Escout has transformed their recruitment process.",
              type: "youtube",
              url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
              thumbnail: "/placeholder.svg?height=720&width=1280",
            },
          ]}
        />
        <CTABanner
          title="Ready to Transform Esports Talent Discovery?"
          description="Join thousands of players and teams already using Escout to connect talent with opportunity."
          primaryCta="Get Started"
          secondaryCta="Schedule Demo"
        />
        <div id="pricing">
          <PricingSection
            title="Simple, Transparent Pricing"
            subtitle="Choose Your Plan"
            description="Flexible options for players at every stage of their esports journey."
            tiers={[
              {
                name: "Player Basic",
                price: {
                  monthly: "$9.99",
                  yearly: "$7.99",
                },
                description: "Perfect for amateur players looking to get discovered.",
                features: [
                  "Verified player profile",
                  "Basic ESV score analysis",
                  "Connect up to 3 game accounts",
                  "Upload 1 highlight reel",
                  "Community forum access",
                ],
                cta: "Start Free Trial",
              },
              {
                name: "Player Pro",
                price: {
                  monthly: "$19.99",
                  yearly: "$16.99",
                },
                description: "For serious players ready to take the next step.",
                features: [
                  "Everything in Basic",
                  "Advanced ESV score insights",
                  "Connect unlimited game accounts",
                  "Upload unlimited highlight reels",
                  "Priority in search results",
                  "Performance trend analysis",
                  "Direct messaging with teams",
                ],
                cta: "Start Free Trial",
                highlighted: true,
              },
            ]}
          />
        </div>
        <div id="testimonials">
          <TestimonialsSection
            title="Success Stories"
            subtitle="Testimonials"
            description="Hear from players and teams who have found success through the Escout platform."
            testimonials={[
              {
                quote:
                  "Escout completely transformed our recruitment process. We discovered three of our current starting roster through the platform, saving us countless hours of traditional scouting.",
                author: "Sarah Johnson",
                role: "Talent Scout",
                company: "Apex Esports",
                avatar: "/placeholder.svg?height=80&width=80",
              },
              {
                quote:
                  "I was grinding ranked matches for years without getting noticed. Within two months of creating my Escout profile, I received three tryout offers and signed with a professional organization.",
                author: "Michael 'Clutch' Chen",
                role: "Professional Player",
                company: "Velocity Gaming",
                avatar: "/placeholder.svg?height=80&width=80",
              },
              {
                quote:
                  "The ESV Score accurately identified several undervalued players that other teams overlooked. It's like having an AI-powered talent scout working 24/7 for our organization.",
                author: "Emily Rodriguez",
                role: "Team Manager",
                company: "Dynasty Esports",
                avatar: "/placeholder.svg?height=80&width=80",
              },
            ]}
          />
        </div>
        <div id="faq">
          <FAQSection
            title="Frequently Asked Questions"
            subtitle="FAQ"
            description="Find answers to common questions about Escout and how it works."
            faqs={[
              {
                question: "How does the ESV Score work?",
                answer:
                  "The Esports Scouting Value (ESV) Score is our proprietary algorithm that analyzes over 200 data points from a player's performance history. It considers mechanical skill, game sense, consistency, teamwork indicators, and performance trends to generate a comprehensive evaluation of a player's potential and team compatibility.",
              },
              {
                question: "Which games does Escout support?",
                answer:
                  "Escout currently supports all major esports titles including League of Legends, Dota 2, CS:GO, Valorant, Overwatch, Rainbow Six Siege, Rocket League, Fortnite, PUBG, Apex Legends, and more. We're constantly adding support for emerging esports titles based on community demand.",
              },
              {
                question: "How do I get noticed by teams?",
                answer:
                  "Complete your profile with detailed information, connect all your game accounts, upload high-quality highlight reels, and participate in Escout-verified tournaments. Teams actively search our database using specific criteria, and players with complete profiles and strong ESV Scores receive the most attention.",
              },
              {
                question: "Is Escout only for professional players?",
                answer:
                  "Not at all! Escout is designed for players at all levels who aspire to improve and potentially go pro. Many teams are looking for promising amateur players to develop, and our platform helps connect talent at every stage with appropriate opportunities.",
              },
              {
                question: "How do teams verify player information?",
                answer:
                  "All player profiles on Escout are verified through connected game accounts, which automatically import performance data. Additionally, our system flags any inconsistencies, and teams have access to match history and performance analytics to validate player claims.",
              },
              {
                question: "Can I cancel my subscription at any time?",
                answer:
                  "Absolutely. You can cancel your subscription at any time with no questions asked. If you cancel, you'll continue to have access until the end of your current billing period. We don't believe in locking customers into contracts or making cancellation difficult.",
              },
            ]}
          />
        </div>
        <CTABanner
          variant="floating"
          title="Ready to launch your esports career?"
          description="Join thousands of players already discovered through Escout."
          primaryCta="Create Your Profile"
          secondaryCta="Explore Success Stories"
        />
        <div id="newsletter">
          <NewsletterSection
            title="Stay Updated on Esports Opportunities"
            subtitle="Newsletter"
            description="Subscribe to receive the latest news about tournaments, team openings, and platform features."
            buttonText="Subscribe"
            placeholder="Enter your email"
          />
        </div>
        <div id="contact">
          <ContactSection
            title="Get in Touch"
            subtitle="Contact Us"
            description="Have questions about Escout? Our team is here to help players and organizations connect."
            contactMethods={[
              {
                icon: <Mail className="h-5 w-5" />,
                title: "Email",
                value: "support@escout.gg",
                link: "mailto:support@escout.gg",
              },
              {
                icon: <Phone className="h-5 w-5" />,
                title: "Phone",
                value: "+1 (555) 123-4567",
                link: "tel:+15551234567",
              },
              {
                icon: <MessageSquare className="h-5 w-5" />,
                title: "Live Chat",
                value: "Available 24/7",
                link: "#",
              },
            ]}
          />
        </div>
      </main>
    </>
  )
}
