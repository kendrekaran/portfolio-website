"use client"

import { motion } from "framer-motion"

export default function SectionHeading({
  title = "Section",
  subtitle = "",
}: {
  title?: string
  subtitle?: string
}) {
  return (
    <div className="mx-auto mb-8 md:mb-10 max-w-2xl px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        transition={{ duration: 0.5 }}
        className="space-y-2"
      >
        <h2
          className=" text-xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-2xl md:text-3xl"
          style={{ fontFamily: 'var(--font-newsreader-normal)' }}
        >
          {title}
        </h2>
        {subtitle && <p className="max-w-2xl text-sm text-muted-foreground">{subtitle}</p>}
      </motion.div>
    </div>
  );
}
