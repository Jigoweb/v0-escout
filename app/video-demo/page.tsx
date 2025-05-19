import { VideoShowcase } from "@/components/sections/video-showcase"

export default function VideoDemo() {
  return (
    <div className="min-h-screen bg-[#030303] py-20">
      <div className="space-y-32">
        <div>
          <div className="container mx-auto px-4 mb-8">
            <h1 className="text-3xl font-bold text-white">Featured Video Layout</h1>
            <p className="text-white/60 mt-2">A layout with one featured video and a list of additional videos</p>
          </div>
          <VideoShowcase layout="featured" />
        </div>

        <div>
          <div className="container mx-auto px-4 mb-8">
            <h1 className="text-3xl font-bold text-white">Grid Video Layout</h1>
            <p className="text-white/60 mt-2">A grid layout showing multiple videos at once</p>
          </div>
          <VideoShowcase
            layout="grid"
            title="Product Tutorials"
            subtitle="Learn & Explore"
            description="Watch these tutorials to learn how to get the most out of our platform."
          />
        </div>

        <div>
          <div className="container mx-auto px-4 mb-8">
            <h1 className="text-3xl font-bold text-white">Carousel Video Layout</h1>
            <p className="text-white/60 mt-2">A carousel layout for browsing through videos</p>
          </div>
          <VideoShowcase
            layout="carousel"
            title="Customer Stories"
            subtitle="Success Stories"
            description="Hear from our customers about how our platform has transformed their business."
          />
        </div>
      </div>
    </div>
  )
}
