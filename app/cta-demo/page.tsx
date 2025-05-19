import { CTABanner } from "@/components/sections/cta-banner"

export default function CTADemo() {
  return (
    <div className="min-h-screen bg-[#030303] py-20">
      <div className="space-y-20">
        <div>
          <div className="container mx-auto px-4 mb-8">
            <h1 className="text-3xl font-bold text-white">Gradient CTA Banner</h1>
            <p className="text-white/60 mt-2">Full-width banner with gradient background</p>
          </div>
          <CTABanner variant="gradient" />
        </div>

        <div>
          <div className="container mx-auto px-4 mb-8">
            <h1 className="text-3xl font-bold text-white">Solid CTA Banner</h1>
            <p className="text-white/60 mt-2">Full-width banner with solid background</p>
          </div>
          <CTABanner
            variant="solid"
            title="Upgrade to Pro"
            description="Get access to all premium features and priority support."
            primaryCta="Upgrade Now"
            secondaryCta="View Features"
          />
        </div>

        <div>
          <div className="container mx-auto px-4 mb-8">
            <h1 className="text-3xl font-bold text-white">Minimal CTA Banner</h1>
            <p className="text-white/60 mt-2">Subtle banner with minimal styling</p>
          </div>
          <CTABanner
            variant="minimal"
            title="Join Our Community"
            description="Connect with other users and get the most out of our platform."
            primaryCta="Join Now"
            showSecondaryButton={false}
          />
        </div>

        <div>
          <div className="container mx-auto px-4 mb-8">
            <h1 className="text-3xl font-bold text-white">Floating CTA Banner</h1>
            <p className="text-white/60 mt-2">Contained banner with rounded corners</p>
          </div>
          <div className="py-8">
            <CTABanner
              variant="floating"
              title="Limited Time Offer"
              description="Get 20% off your first year when you sign up today."
              primaryCta="Claim Offer"
              secondaryCta="Learn More"
            />
          </div>
        </div>

        <div className="container mx-auto px-4 mb-8">
          <h1 className="text-3xl font-bold text-white">Fixed Position Banner</h1>
          <p className="text-white/60 mt-2">Banner fixed to the bottom of the viewport (scroll down to see it)</p>
        </div>

        <CTABanner
          variant="solid"
          position="fixed"
          title="Try it risk-free for 14 days"
          description="No credit card required. Cancel anytime."
          primaryCta="Start Free Trial"
          secondaryCta="Learn More"
        />
      </div>
    </div>
  )
}
