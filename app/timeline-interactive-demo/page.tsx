import { InteractiveTimeline } from "@/components/sections/interactive-timeline"

export default function TimelineInteractiveDemo() {
  return (
    <div className="min-h-screen bg-[#030303] py-20">
      <div className="container mx-auto px-4 mb-8">
        <h1 className="text-3xl font-bold text-white">Interactive Timeline</h1>
        <p className="text-white/60 mt-2">Hover over timeline items to see more details</p>
      </div>

      <InteractiveTimeline />

      {/* Add padding at the bottom for better scrolling experience */}
      <div className="h-screen"></div>
    </div>
  )
}
