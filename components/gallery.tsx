"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import SectionHeading from "./section-heading"
import { Button } from "./ui/button"

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

export default function Gallery() {
  // Show only first 6 items (2 rows x 3 columns)
  const previewItems = defaultVideos.slice(0, 6)

  return (
    <div className="py-10 md:py-16">
      <SectionHeading
        title="Gallery"
        subtitle="A collection of my work and projects."
      />
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="relative">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
            {previewItems.map((media, index) => (
              <motion.div
                key={`${media}-${index}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-lg bg-muted aspect-video"
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
          
          {/* Faded mask overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
          
          {/* View More button */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-auto">
            <Link href="/gallery">
              <Button
                className="h-10 cursor-pointer rounded-full px-5 text-sm text-[#F9FAFB] sm:h-12 sm:px-6 sm:text-base shadow-s"
                style={{ backgroundColor: "#4F46E5" }}
              >
                View More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

