"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Play, Pause, X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react"

interface Video {
  id: string
  title: string
  description?: string
  type: "youtube" | "vimeo" | "mp4"
  url: string
  thumbnail: string
  featured?: boolean
}

export function VideoShowcase({
  title = "See Escout in Action",
  subtitle = "Video Showcase",
  description = "Watch how Escout is transforming esports scouting and player transfers.",
  videos = [
    {
      id: "video-1",
      title: "Escout Overview",
      description: "A quick overview of our platform and its key features.",
      type: "youtube",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "/placeholder.svg?height=720&width=1280",
      featured: true,
    },
    {
      id: "video-2",
      title: "ESV Score Explained",
      description: "Learn how our proprietary scoring system works to value players fairly.",
      type: "youtube",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "/placeholder.svg?height=720&width=1280",
    },
    {
      id: "video-3",
      title: "Player Discovery",
      description: "See how teams can find the perfect talent for their roster.",
      type: "youtube",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "/placeholder.svg?height=720&width=1280",
    },
    {
      id: "video-4",
      title: "Path to Pro",
      description: "How aspiring players can get noticed by professional teams.",
      type: "youtube",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "/placeholder.svg?height=720&width=1280",
    },
  ],
  layout = "featured",
  autoplay = false,
  showControls = true,
  allowFullscreen = true,
}: {
  title?: string
  subtitle?: string
  description?: string
  videos?: Video[]
  layout?: "grid" | "featured" | "carousel"
  autoplay?: boolean
  showControls?: boolean
  allowFullscreen?: boolean
}) {
  const [activeVideo, setActiveVideo] = useState<Video | null>(
    videos.find((video) => video.featured) || videos[0] || null,
  )
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const featuredVideos = layout === "featured" ? videos.filter((video) => !video.featured) : videos
  const carouselVideos = videos
  const gridVideos = videos

  const togglePlay = () => {
    if (activeVideo?.type === "mp4" && videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleVideoClick = (video: Video) => {
    setActiveVideo(video)
    setIsPlaying(false)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === Math.ceil(carouselVideos.length / 2) - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? Math.ceil(carouselVideos.length / 2) - 1 : prev - 1))
  }

  const openLightbox = (video: Video) => {
    setActiveVideo(video)
    setLightboxOpen(true)
    setIsPlaying(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    setIsPlaying(false)
  }

  // Render embedded video based on type
  const renderVideo = (video: Video, inLightbox = false) => {
    const commonClasses = cn(
      "w-full rounded-xl overflow-hidden bg-black",
      inLightbox ? "aspect-video max-h-[80vh]" : "aspect-video",
    )

    if (video.type === "youtube") {
      return (
        <div className={commonClasses}>
          <iframe
            src={`${video.url}${isPlaying || autoplay ? "?autoplay=1" : ""}${
              showControls ? "" : "&controls=0"
            }&rel=0&modestbranding=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={allowFullscreen}
            className="w-full h-full"
          />
        </div>
      )
    } else if (video.type === "vimeo") {
      return (
        <div className={commonClasses}>
          <iframe
            src={`${video.url}${isPlaying || autoplay ? "?autoplay=1" : ""}${showControls ? "" : "&controls=0"}`}
            title={video.title}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen={allowFullscreen}
            className="w-full h-full"
          />
        </div>
      )
    } else {
      // MP4 video
      return (
        <div className={cn(commonClasses, "relative group")}>
          <video
            ref={videoRef}
            src={video.url}
            poster={video.thumbnail}
            controls={showControls}
            className="w-full h-full object-cover"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
          {!showControls && (
            <div
              className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
              onClick={togglePlay}
            >
              <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                {isPlaying ? <Pause className="h-6 w-6 text-white" /> : <Play className="h-6 w-6 text-white ml-1" />}
              </div>
            </div>
          )}
        </div>
      )
    }
  }

  // Render video thumbnail
  const renderThumbnail = (video: Video) => {
    return (
      <div
        className={cn(
          "relative group cursor-pointer overflow-hidden rounded-lg",
          "border border-white/[0.05] transition-all duration-300",
          "hover:border-white/[0.1] hover:shadow-lg hover:shadow-emerald-500/5",
          activeVideo?.id === video.id && "ring-2 ring-emerald-500/30",
        )}
        onClick={() => handleVideoClick(video)}
      >
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={video.thumbnail || "/placeholder.svg"}
            alt={video.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
              <Play className="h-5 w-5 text-white ml-1" />
            </div>
          </div>
        </div>
        <div className="p-4">
          <h4 className="text-white font-medium line-clamp-1">{video.title}</h4>
          {video.description && <p className="text-white/60 text-sm mt-1 line-clamp-2">{video.description}</p>}
        </div>
      </div>
    )
  }

  // Render featured layout
  const renderFeaturedLayout = () => {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {activeVideo && (
            <div className="space-y-4">
              {renderVideo(activeVideo)}
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-white">{activeVideo.title}</h3>
                  {activeVideo.description && <p className="text-white/60 mt-1">{activeVideo.description}</p>}
                </div>
                {allowFullscreen && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-white/10 text-white/70 hover:text-white hover:bg-white/5"
                    onClick={() => openLightbox(activeVideo)}
                  >
                    <Maximize2 className="h-4 w-4 mr-2" />
                    Fullscreen
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-white">More Videos</h3>
          <div className="grid grid-cols-1 gap-4 max-h-[600px] overflow-y-auto pr-2">
            {featuredVideos.map((video) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {renderThumbnail(video)}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Render grid layout
  const renderGridLayout = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gridVideos.map((video, index) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex flex-col h-full"
          >
            <div
              className="relative group cursor-pointer overflow-hidden rounded-xl flex-grow"
              onClick={() => openLightbox(video)}
            >
              <Image
                src={video.thumbnail || "/placeholder.svg"}
                alt={video.title}
                width={640}
                height={360}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <Play className="h-6 w-6 text-white ml-1" />
                </div>
              </div>
            </div>
            <div className="p-4 bg-white/[0.03] backdrop-blur-sm border border-white/[0.05] rounded-b-xl">
              <h4 className="text-white font-medium">{video.title}</h4>
              {video.description && <p className="text-white/60 text-sm mt-1 line-clamp-2">{video.description}</p>}
            </div>
          </motion.div>
        ))}
      </div>
    )
  }

  // Render carousel layout
  const renderCarouselLayout = () => {
    return (
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array.from({ length: Math.ceil(carouselVideos.length / 2) }).map((_, slideIndex) => (
              <div key={slideIndex} className="min-w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
                  {carouselVideos
                    .slice(slideIndex * 2, slideIndex * 2 + 2)
                    .filter(Boolean)
                    .map((video) => (
                      <motion.div
                        key={video.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col h-full"
                      >
                        <div
                          className="relative group cursor-pointer overflow-hidden rounded-xl flex-grow"
                          onClick={() => openLightbox(video)}
                        >
                          <Image
                            src={video.thumbnail || "/placeholder.svg"}
                            alt={video.title}
                            width={640}
                            height={360}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                              <Play className="h-6 w-6 text-white ml-1" />
                            </div>
                          </div>
                        </div>
                        <div className="p-4 bg-white/[0.03] backdrop-blur-sm border border-white/[0.05] rounded-b-xl">
                          <h4 className="text-white font-medium">{video.title}</h4>
                          {video.description && (
                            <p className="text-white/60 text-sm mt-1 line-clamp-2">{video.description}</p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-white/60 hover:text-white transition-colors z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-10 h-10 rounded-full bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-white/60 hover:text-white transition-colors z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(carouselVideos.length / 2) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                currentSlide === index
                  ? "bg-gradient-to-r from-violet-500 to-emerald-500 w-6"
                  : "bg-white/20 hover:bg-white/40",
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    )
  }

  return (
    <section className="py-24 bg-gradient-to-b from-[#030303] to-[#050505]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm uppercase tracking-widest text-emerald-400 mb-3">{subtitle}</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">{title}</h3>
            <p className="text-white/40 text-lg">{description}</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {layout === "featured" && renderFeaturedLayout()}
          {layout === "grid" && renderGridLayout()}
          {layout === "carousel" && renderCarouselLayout()}
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxOpen && activeVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-8"
            >
              <div className="relative w-full max-w-6xl">
                <button
                  onClick={closeLightbox}
                  className="absolute -top-12 right-0 text-white/70 hover:text-white"
                  aria-label="Close lightbox"
                >
                  <X className="h-6 w-6" />
                </button>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-white">{activeVideo.title}</h3>
                  {activeVideo.description && <p className="text-white/60 mt-1">{activeVideo.description}</p>}
                </div>
                {renderVideo(activeVideo, true)}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
