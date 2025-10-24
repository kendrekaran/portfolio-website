"use client"

import { motion, type Variants } from "framer-motion"
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

const videos = [
  'https://res.cloudinary.com/dfm5hoz41/video/upload/v1761280963/Screen_Recording_2025-10-24_at_10.04.53_AM_chfi6s.mov',
  'https://res.cloudinary.com/dfm5hoz41/video/upload/v1760960574/Screen_Recording_2025-10-20_at_5.12.10_PM_hhxcsg.mov',
  'https://res.cloudinary.com/dfm5hoz41/video/upload/v1760960511/Screen_Recording_2025-10-20_at_5.11.27_PM_k3x7jn.mov',
  'https://res.cloudinary.com/dfm5hoz41/video/upload/v1760961218/f1_1Gzcj_SluAOCm_u6atdh.mp4',
  'https://res.cloudinary.com/dfm5hoz41/video/upload/v1760961159/sYNer7it7CENvbnW_v5qtss.mp4',
  'https://res.cloudinary.com/dfm5hoz41/video/upload/v1760961123/wqr-tdKElIK6kBwE_hdebgb.mp4',
  'https://res.cloudinary.com/dfm5hoz41/video/upload/v1760961099/ke6HfGzMNFUVF8Rg_g8lqme.mp4',
  'https://res.cloudinary.com/dfm5hoz41/video/upload/v1760960827/Screen_Recording_2025-10-20_at_5.16.42_PM_pihq59.mov',
  'https://res.cloudinary.com/dfm5hoz41/video/upload/v1760960684/Screen_Recording_2025-10-20_at_5.14.28_PM_hgd1ey.mov'
]

export default function GalleryPage() {
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
          <div>
            <motion.h1
              variants={fadeUp}
              className="text-2xl font-semibold leading-tight text-foreground sm:text-4xl mb-4"
            >
              POW
            </motion.h1>
          </div>

          <motion.div
            variants={fadeUp}
            className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6"
          >
            {videos.map((video, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg bg-muted aspect-video"
              >
                <video
                  src={video}
                  className="h-full w-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
      </section>
    </main>
  )
}
