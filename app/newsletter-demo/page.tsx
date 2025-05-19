import { NewsletterSection } from "@/components/sections/newsletter-section"

export default function NewsletterDemo() {
  return (
    <div className="min-h-screen bg-[#030303] py-20">
      <div className="container mx-auto px-4 space-y-20">
        <div>
          <h1 className="text-3xl font-bold text-white mb-8">Default Newsletter Section</h1>
          <NewsletterSection variant="default" />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-white mb-8">Compact Newsletter Section</h1>
          <NewsletterSection
            variant="compact"
            title="Join Our Community"
            description="Get weekly updates and exclusive content directly to your inbox."
            buttonText="Join Now"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-white mb-8">Card Newsletter Component</h1>
          <div className="max-w-md mx-auto">
            <NewsletterSection
              variant="card"
              title="Subscribe to Updates"
              description="Never miss a release. Get notified when we launch new features."
              buttonText="Get Notified"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
