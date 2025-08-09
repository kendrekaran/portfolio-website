"use client"

import { motion } from "framer-motion"
import SectionHeading from "./section-heading"

const SKILLS = [
  "React",
  "Next.js",
  "shadcn/ui",
  "Figma",
  "GitHub",
  "Framer Motion",
  "MongoDB",
  "Express",
  "Node.js",
  "TypeScript",
  "CSS",
]

export default function Skills() {
  return (
    <div className="py-16">
      <SectionHeading
        title="Skills"
        subtitle="Technologies and tools I work with."
      />

      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="relative overflow-hidden">
          {/* Edge fades */}
          <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-background to-transparent" />
          <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-background to-transparent" />

          <motion.div
            className="flex w-[200%] gap-3 py-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: ["0%", "-50%"] }}
            transition={{
              opacity: { delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
              x: { duration: 30, ease: [0, 0, 1, 1], repeat: Infinity },
            }}
          >
            {[...Array(2)].map((_, idx) => (
              <div key={idx} className="flex shrink-0 gap-3 pr-3">
                {SKILLS.map((name) => (
                  <span
                    key={`${name}-${idx}`}
                    className="rounded-full border border-border bg-muted px-3 py-1 text-sm text-muted-foreground shadow-sm"
                  >
                    {name}
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
