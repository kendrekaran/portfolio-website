"use client"

import { motion } from "framer-motion"
import SectionHeading from "./section-heading"

export default function Experience() {
  return (
    <div className="py-16">
      <SectionHeading title="Experience" subtitle="Recent roles" />
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="relative pl-10">
          {/* vertical path */}
          <div aria-hidden className="pointer-events-none absolute left-4 h-14 mt-2 top-0 bottom-0 w-px bg-border/50" />

          <div className="space-y-6">
            {/* Keizer */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              <span aria-hidden className="absolute -left-6 top-2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-sky-400 ring-4 ring-sky-400/20 shadow-s" />
              <h3 className="text-sm font-medium leading-tight text-foreground">Frontend Developer — Keizer</h3>
              <p className="mt-0.5 text-xs text-muted-foreground">Jun 2025 – Present</p>
            </motion.div>

            {/* Freelancing */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="relative"
            >
              <span aria-hidden className="absolute -left-6 top-2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-fuchsia-400 ring-4 ring-fuchsia-400/20 shadow-s" />
              <h3 className="text-sm font-medium leading-tight text-foreground">Freelancing — UI/UX Designer + Full Stack Developer, Remote</h3>
              <p className="mt-0.5 text-xs text-muted-foreground">Dec 2024 – May 2025</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
