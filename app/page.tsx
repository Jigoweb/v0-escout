import { Header } from "@/components/sections/header"
import { HeroSection } from "@/components/sections/hero-section"
import WhosForSection from "@/components/sections/whos-for-section";
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
          badge="Revolutionizing Esports"
          title1="Discover the Next"
          title2="Esports Star"
          description="Escout is the ultimate esports scouting platform connecting talented players with professional teams through advanced analytics and AI-powered insights."
          primaryCta="Start Scouting"
          secondaryCta="Learn More"
        />
        <WhosForSection />
        <LogoShowcase
          variant="marquee"
          title="Trusted by Top Esports Organizations"
          subtitle="Our Partners"
          description="Join the growing number of professional teams and organizations using Escout to discover top talent."
          logos={[
            {
              name: "Roma Esports",
              url: "#",
              image: "/images/partners/roma.jpg",
            },
            {
              name: "Team Falcons",
              url: "#",
              image: "/images/partners/falcon.jpg",
            },
            {
              name: "Inter Esports",
              url: "#",
              image: "/images/partners/inter.jpg",
            },
            {
              name: "Team Vitality",
              url: "#",
              image: "/images/partners/vitality.jpg",
            },
            {
              name: "Mkers",
              url: "#",
              image: "/images/partners/mkers.jpg",
            },
            {
              name: "Team Liquid",
              url: "#",
              image: "/images/partners/team_liquid.jpg",
            },
            {
              name: "Cloud9",
              url: "#",
              image: "/images/partners/cloud9.jpg",
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
                title: "Advanced Analytics",
                description:
                  "Comprehensive performance metrics and statistics to evaluate player potential with precision.",
                image: "/images/features/ad_analytics.jpg",
              },
              {
                title: "Verified Profiles",
                description: "All player profiles are verified to ensure authentic and reliable information.",
                image: "/images/features/ver_profiles.jpg",
              },
              {
                title: "AI-Powered Insights",
                description: "Our proprietary ESV Score uses AI to predict player potential and team compatibility.",
                image: "/images/features/ai_powered.jpg",
              },
              {
                title: "Multi-Game Support",
                description: "Comprehensive coverage across all major esports titles and emerging games.",
                image: "/images/features/multi_game.jpg",
              },
              {
                title: "Real-time Updates",
                description: "Stay current with live performance tracking and instant notifications on rising talent.",
                image: "/images/features/realtime.jpg",
              },
              {
                title: "Mobile Access",
                description: "Scout on the go with our fully responsive mobile application and notifications.",
                image: "/images/features/mobile.jpg",
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
              description: "Talented players showcasing their skills",
              image: "/images/benefits/active_players.jpg",
            },
            {
              value: 200,
              label: "Pro Teams",
              suffix: "+",
              description: "Organizations actively scouting talent",
              image: "/images/benefits/pro_teams.jpg",
            },
            {
              value: 85,
              label: "Placement Rate",
              suffix: "%",
              description: "Of top-rated players find team opportunities",
              image: "/images/benefits/placement_rates.jpg",
            },
            {
              value: 15,
              label: "Esports Titles",
              suffix: "+",
              description: "Across multiple competitive genres",
              image: "/images/benefits/esports_titles.jpg",
            },
            {
              value: 30,
              label: "Success Stories",
              description: "Players who went from amateur to pro",
              image: "/images/benefits/success_stories.jpg",
            },
            {
              value: 1000000,
              label: "Matches Analyzed",
              suffix: "+",
              description: "For accurate performance assessment",
              image: "/images/benefits/matches_analyzed.jpg",
            },
          ]}
        />
        <div id="how-it-works">
          <TimelineSection
            title="How Escout Works"
            subtitle="The Process"
            description="Our streamlined approach connects talented players with professional opportunities in three simple steps: create your profile, showcase your skills, and get discovered by top teams."
            items={[
              {
                number: "1",
                title: "Create Profile",
                description: "Create your profile and connect your game accounts to automatically import your stats, experience, and match data.",
                iconImage: "/images/how-it-works/icona_step1.png",
                backgroundImage: "/images/how-it-works/background_step1.jpg",
                gradient: "bg-gradient-to-r from-[#00c6ff]/40 to-[#0072ff]/40",
                numberGradient: "bg-gradient-to-br from-[#00c6ff] to-[#0072ff]",
              },
              {
                number: "2",
                title: "Get ESV Score",
                description: "Get Your ESV Score — our proprietary algorithm analyzes your performance to generate your Esports Scouting Value.",
                iconImage: "/images/how-it-works/icona_step2.png",
                backgroundImage: "/images/how-it-works/background_step2.jpg",
                gradient: "bg-gradient-to-r from-[#7f00ff]/40 to-[#e100ff]/40",
                numberGradient: "bg-gradient-to-br from-[#7f00ff] to-[#e100ff]",
              },
              {
                number: "3",
                title: "Get Discovered",
                description: "Showcase your skills by uploading highlights and joining Escout-verified tournaments, increasing your chances of being discovered by professional teams and organizations.",
                iconImage: "/images/how-it-works/icona_step3.png",
                backgroundImage: "/images/how-it-works/background_step3.jpg",
                gradient: "bg-gradient-to-r from-[#00c6ff]/40 to-[#0072ff]/40",
                numberGradient: "bg-gradient-to-br from-[#00c6ff] to-[#0072ff]",
              },
            ]}
          />
        </div>
        <VideoShowcase
          title="See Escout in Action"
          subtitle="Video Showcase"
          description="Watch how Escout is transforming esports talent discovery and helping players achieve their professional dreams."
          videos={[
            {
              id: "video-1",
              title: "PLAYER SUCCESS STORY: ALEX 'X' ROX",
              description: "How a talented amateur player got discovered and signed to a professional team through Escout.",
              type: "youtube",
              url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
              thumbnail: "/images/video_thumbnail.jpg",
              featured: true,
            },
          ]}
        />
        <CTABanner
          title="Ready to Transform Esports Talent Discovery?"
          description="Join thousands of players and teams already using Escout to connect talent with opportunity."
          primaryCta="Get Started"
          secondaryCta="Schedule Demo"
          primaryCtaLink="/sign-in"
          secondaryCtaLink="#contact"
        />
        <div id="pricing">
          <PricingSection
            title="Simple, Transparent Pricing"
            subtitle="Choose Your Plan"
            description="Flexible options for players at every stage of their esports journey."
            tiers={[
              {
                name: "Free Plan",
                price: {
                  monthly: "free",
                  yearly: "free",
                },
                description: "Start for free and build your profile.",
                features: [
                  "Create player profile",
                  "Basic ESV score",
                  "Connect 1 game account",
                  "Access community",
                ],
                cta: "Get Started",
              },
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
                name: "Team Plan",
                price: {
                  monthly: "$19.99",
                  yearly: "$16.99",
                },
                description: "For teams ready to discover and recruit talent.",
                features: [
                  "Advanced player search",
                  "Detailed ESV insights",
                  "Unlimited roster management",
                  "Priority in player discovery",
                  "Performance trend analysis",
                  "Direct messaging with players",
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
              },
              {
                quote:
                  "I was grinding ranked matches for years without getting noticed. Within two months of creating my Escout profile, I received three tryout offers and signed with a professional organization.",
                author: "Michael 'Clutch' Chen",
                role: "Professional Player",
                company: "Velocity Gaming",
              },
              {
                quote:
                  "The ESV Score accurately identified several undervalued players that other teams overlooked. It's like having an AI-powered talent scout working 24/7 for our organization.",
                author: "Emily Rodriguez",
                role: "Team Manager",
                company: "Dynasty Esports",
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
          primaryCtaLink="https://hh-escout.vercel.app/sign-in"
          secondaryCtaLink="https://hh-escout.vercel.app/sign-in"
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
