import { LogoShowcase } from "@/components/sections/logo-showcase"

export default function LogoShowcaseDemo() {
  return (
    <div className="min-h-screen bg-[#030303] py-20">
      <div className="container mx-auto px-4 space-y-20">
        <div>
          <h1 className="text-3xl font-bold text-white mb-8">Grid Layout</h1>
          <LogoShowcase
            variant="grid"
            title="Our Trusted Partners"
            description="Companies of all sizes trust our platform for their business needs."
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-white mb-8">Carousel Layout</h1>
          <LogoShowcase
            variant="carousel"
            title="Featured Clients"
            subtitle="Success Stories"
            description="See the companies that have achieved success with our platform."
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-white mb-8">Marquee Layout</h1>
          <LogoShowcase
            variant="marquee"
            title="Global Partners"
            subtitle="Worldwide Trust"
            description="Join our growing network of global partners and clients."
            grayscale={false}
          />
        </div>
      </div>
    </div>
  )
}
