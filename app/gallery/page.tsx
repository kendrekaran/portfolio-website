"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { X, ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import SectionHeading from "@/components/section-heading"
import { Button } from "@/components/ui/button"

const defaultVideos = [
  "https://res.cloudinary.com/dyyndll5a/image/upload/v1766776708/Screenshot_2025-12-27_at_12.45.09_AM_hubyyk.png",
  "https://res.cloudinary.com/dyyndll5a/image/upload/v1766776259/Screenshot_2025-12-27_at_12.30.40_AM_baxd7x.png",
  "https://res.cloudinary.com/dyyndll5a/image/upload/v1766776259/Screenshot_2025-12-27_at_12.30.18_AM_xerg0n.png",
  "https://res.cloudinary.com/dyyndll5a/image/upload/v1766776708/Screenshot_2025-12-27_at_12.45.59_AM_gl2rj2.png",
  "https://res.cloudinary.com/dyyndll5a/image/upload/v1766776708/Screenshot_2025-12-27_at_12.44.39_AM_a7ry5d.png",
  "https://res.cloudinary.com/dyyndll5a/image/upload/v1766776722/G5Z2eRta0AAS3f3_dkwphy.jpg",
  "https://res.cloudinary.com/dyyndll5a/image/upload/v1766776721/G5Z2eRsbEAA8i79_cdtpsm.jpg",
  "https://res.cloudinary.com/dyyndll5a/image/upload/v1766776708/Screenshot_2025-12-27_at_12.46.17_AM_y7t5sm.png",
]

// Links for images (in order)
const imageLinks = [
  "https://x.com/karaan_dev/status/1963635642220384682?s=20",
  "https://x.com/karaan_dev/status/1998690676175941795?s=20",
  "https://x.com/karaan_dev/status/1999073373155102957?s=20",
  "https://x.com/karaan_dev/status/1926528888475156950?s=204",
  "https://x.com/karaan_dev/status/1953532877565784571?s=20",
  "https://x.com/karaan_dev/status/1985301165651960247?s=20",
  "https://x.com/karaan_dev/status/1986780707340103881?s=20",
  "https://x.com/karaan_dev/status/1921491459275989037?s=20",
]

function isImage(url: string): boolean {
  return /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(url) || 
         url.includes('/image/upload/') || 
         url.startsWith('data:image/')
}

export default function GalleryPage() {
  const router = useRouter()
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedMedia(null)
      }
    }

    if (selectedMedia) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [selectedMedia])

  const handleImageClick = (e: React.MouseEvent, media: string, index: number) => {
    e.stopPropagation()
    if (isImage(media)) {
      const link = imageLinks[index]
      if (link) {
        window.open(link, '_blank', 'noopener,noreferrer')
      }
    } else {
      setSelectedMedia(media)
    }
  }

  return (
    <main className="min-h-svh  bg-background text-foreground w-full scroll-smooth overflow-x-hidden">
      <section className="relative mx-auto py-12">
        {/* Back Button */}
        <div className="mx-auto max-w-2xl px-4 sm:px-6 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                router.push("/")
                window.scrollTo(0, 0)
              }}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
          </motion.div>
        </div>

        <SectionHeading
          title="Gallery"
          subtitle="A collection of my work and projects."
        />
        
        {/* Disclaimer */}
        <div className="mx-auto max-w-2xl px-4 sm:px-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-sm text-muted-foreground"
          >
            Note: Some of these designs are not by me but coded by me.
          </motion.div>
        </div>

        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {defaultVideos.map((media, index) => (
              <motion.div
                key={`${media}-${index}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-lg bg-muted aspect-video cursor-pointer"
                onClick={(e) => handleImageClick(e, media, index)}
              >
                {isImage(media) ? (
                  <img
                    src={media}
                    alt={`Gallery image ${index + 1}`}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <video
                    src={media}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                  />
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mt-10 flex justify-center"
          >
            <Button
              asChild
              className="h-10 cursor-pointer rounded-full px-5 text-sm text-[#F9FAFB] sm:h-12 sm:px-6 sm:text-base shadow-s"
              style={{ backgroundColor: "#4F46E5" }}
            >
              <a
                href="https://x.com/karankendre/highlights"
                target="_blank"
                rel="noopener noreferrer"
              >
                View More
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Fullscreen Modal */}
      {selectedMedia && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setSelectedMedia(null)}
        >
          <button
            className="absolute top-4 right-4 z-50 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors"
            onClick={(e) => {
              e.stopPropagation()
              setSelectedMedia(null)
            }}
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
          <div
            className="relative max-w-[95vw] max-h-[95vh] w-auto h-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {isImage(selectedMedia) ? (
              <img
                src={selectedMedia}
                alt="Fullscreen view"
                className="max-w-full max-h-[95vh] object-contain rounded-lg"
              />
            ) : (
              <video
                src={selectedMedia}
                className="max-w-full max-h-[95vh] object-contain rounded-lg"
                autoPlay
                loop
                controls
                playsInline
              />
            )}
          </div>
        </div>
      )}
    </main>
  )
}
