"use client"

import { useState, useEffect } from "react"
import { motion, type Variants } from "framer-motion"
import { X } from "lucide-react"
import Navbar from '@/components/navbar'

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
}

const defaultVideos = [
  "https://res.cloudinary.com/dfm5hoz41/video/upload/v1762521451/Screen_Recording_2025-11-07_at_6.24.42_PM_iv3xmd.mov",
  "https://res.cloudinary.com/dfm5hoz41/video/upload/v1762521580/Screen_Recording_2025-11-05_at_8.13.13_PM_cncklx.mov",
  "https://res.cloudinary.com/dfm5hoz41/video/upload/v1762521593/Screen_Recording_2025-10-25_at_8.41.54_PM_cavlja.mov",
  "https://res.cloudinary.com/dfm5hoz41/video/upload/v1762521565/Screen_Recording_2025-10-30_at_9.52.56_AM_u5eebc.mov",
  "https://res.cloudinary.com/dfm5hoz41/image/upload/v1762521613/Screenshot_2025-11-02_at_10.37.18_PM_urduos.png",
  "https://res.cloudinary.com/dfm5hoz41/video/upload/v1762521524/Screen_Recording_2025-11-04_at_10.51.55_PM_dropxm.mov",
  "https://res.cloudinary.com/dfm5hoz41/video/upload/v1762521488/Screen_Recording_2025-11-06_at_5.49.28_PM_ugqfnj.mov",
  'https://res.cloudinary.com/dfm5hoz41/video/upload/v1761368425/Screen_Recording_2025-10-25_at_10.23.19_AM_uix4xm.mov',
  'https://res.cloudinary.com/dfm5hoz41/video/upload/v1760960574/Screen_Recording_2025-10-20_at_5.12.10_PM_hhxcsg.mov',
  'https://res.cloudinary.com/dfm5hoz41/video/upload/v1760960511/Screen_Recording_2025-10-20_at_5.11.27_PM_k3x7jn.mov',
  'https://res.cloudinary.com/dfm5hoz41/video/upload/v1760961218/f1_1Gzcj_SluAOCm_u6atdh.mp4',
  'https://res.cloudinary.com/dfm5hoz41/video/upload/v1760961159/sYNer7it7CENvbnW_v5qtss.mp4',
  'https://res.cloudinary.com/dfm5hoz41/video/upload/v1760961123/wqr-tdKElIK6kBwE_hdebgb.mp4',
  'https://res.cloudinary.com/dfm5hoz41/video/upload/v1760961099/ke6HfGzMNFUVF8Rg_g8lqme.mp4',
  'https://res.cloudinary.com/dfm5hoz41/video/upload/v1760960827/Screen_Recording_2025-10-20_at_5.16.42_PM_pihq59.mov',
  'https://res.cloudinary.com/dfm5hoz41/video/upload/v1760960684/Screen_Recording_2025-10-20_at_5.14.28_PM_hgd1ey.mov'
]

function isImage(url: string): boolean {
  return /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(url) || 
         url.includes('/image/upload/') || 
         url.startsWith('data:image/')
}

export default function GalleryPage() {
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

  return (
    <main className="min-h-svh bg-[radial-gradient(1200px_600px_at_70%_-10%,rgba(59,130,246,0.25),rgba(147,51,234,0.08)_60%,transparent_70%)] bg-background text-foreground w-full scroll-smooth overflow-x-hidden">
      <section className="relative mx-auto flex min-h-[40svh] max-w-2xl items-center px-4 pt-8 sm:px-6 md:pt-16">
        <motion.div
          className="w-full"
          initial="hidden"
          animate="show"
          variants={container}
        >
          <Navbar />
          <div className="max-w-4xl space-y-6">
          <motion.h1
            variants={fadeUp}
            className="text-2xl font-semibold leading-tight text-foreground sm:text-4xl mb-4"
          >
            POW
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="grid grid-cols-1 md:grid-cols-2 gap-4  md:gap-6"
          >
            {defaultVideos.map((media, index) => (
              <div
                key={`${media}-${index}`}
                className="group relative overflow-hidden rounded-lg bg-muted aspect-video cursor-pointer"
                onClick={() => setSelectedMedia(media)}
              >
                {isImage(media) ? (
                  <img
                    src={media}
                    alt={`Gallery image ${index + 1}`}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
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
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
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
