"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import SectionHeading from "./section-heading"
import { Button } from "./ui/button"

const designImages = [
  "https://res.cloudinary.com/dyyndll5a/image/upload/v1766776708/Screenshot_2025-12-27_at_12.45.09_AM_hubyyk.png",
  "https://res.cloudinary.com/dyyndll5a/image/upload/v1766776259/Screenshot_2025-12-27_at_12.30.40_AM_baxd7x.png",
  "https://res.cloudinary.com/dyyndll5a/image/upload/v1766776722/G5Z2eRta0AAS3f3_dkwphy.jpg",
  "https://res.cloudinary.com/dyyndll5a/image/upload/v1766776259/Screenshot_2025-12-27_at_12.30.18_AM_xerg0n.png",
  "https://res.cloudinary.com/dyyndll5a/image/upload/v1766776708/Screenshot_2025-12-27_at_12.45.59_AM_gl2rj2.png",
  "https://res.cloudinary.com/dyyndll5a/image/upload/v1766776708/Screenshot_2025-12-27_at_12.44.39_AM_a7ry5d.png",
  "https://res.cloudinary.com/dyyndll5a/image/upload/v1766776721/G5Z2eRsbEAA8i79_cdtpsm.jpg",
  "https://res.cloudinary.com/dyyndll5a/image/upload/v1766776708/Screenshot_2025-12-27_at_12.46.17_AM_y7t5sm.png",
]

export default function DesignCopies() {
  // Show only first 4 images
  const previewImages = designImages.slice(0, 6)

  return (
    <div className="py-12">
      <SectionHeading
        title="Gallery"
        subtitle="I Copy designs and code them in free time"
      />
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="relative">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3  md:gap-6">
            {previewImages.map((image, index) => (
              <motion.div
                key={`${image}-${index}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-lg bg-muted aspect-video"
              >
                <img
                  src={image}
                  alt={`Design copy ${index + 1}`}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  loading="lazy"
                />
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

