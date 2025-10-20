"use client"

import { motion, type Variants } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Navbar from "./navbar"

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

export default function Hero() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  
  useEffect(() => setMounted(true), [])


  const current = theme === "system" ? systemTheme : theme


  return (
    <section className="relative mx-auto flex min-h-[40svh] max-w-2xl items-center px-4 pt-8 sm:px-6 md:pt-16">
      <motion.div
        className="w-full"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <Navbar />
        <div className="max-w-4xl space-y-4">
          <div className="flex items-center gap-3">
            <motion.p
              variants={fadeUp}
              className="text-2xl font-semibold leading-tight text-muted-foreground sm:text-4xl"
            >
              {"Hi, I’m"}
            </motion.p>
            <div className="flex items-center gap-3">
              <motion.img
                variants={fadeUp}
                src={"https://i.pinimg.com/736x/48/9b/5a/489b5aa4d508ef3e18e9eecdfc50a63d.jpg"}
                alt="Karan Kendre portrait" 
                className="h-12 w-12 rounded-lg object-cover ring-2 -rotate-6 ring-[#e7e7e7] shadow-[0_8px_30px_rgba(0,0,0,0.5)] sm:h-14 sm:w-14"
              />
              <motion.h1
                variants={fadeUp}
                className="text-2xl font-semibold leading-tight text-muted-foreground sm:text-4xl"
              >
                {"Karan Kendre!"}
              </motion.h1>
            </div>
          </div>

          <motion.div
            variants={fadeUp}
            className="text-balance text-xl leading-tight text-muted-foreground sm:text-3xl"
          >
            {"I’m a "}
            <span className="text-2xl font-semibold leading-tight text-foreground sm:text-4xl">{"Design Engineer"} </span>
            <span className="text-muted-foreground"> {" & "}</span>
            <div className="mt-4 flex items-center gap-4">
              <span className="text-2xl font-semibold leading-tight text-[#4F46E5]/60 sm:text-4xl">{"Frontend Geek"}</span>
              <motion.div variants={fadeUp}>
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-2 py-1 text-xs text-muted-foreground sm:px-3 sm:py-1.5 sm:text-sm">
                  <span
                    aria-hidden="true"
                    className="inline-block h-2.5 w-2.5 rounded-full bg-[#34D399] shadow-[0_0_0_4px_rgba(52,211,153,0.15)]"
                  />
                  Open to work
                </span>
              </motion.div>
            </div>
          </motion.div>

          <motion.p variants={fadeUp} className="max-w-xl text-xs leading-relaxed text-muted-foreground sm:text-sm">
            {"Feel free to explore my portfolio and reach out — I’d love to connect!"}
          </motion.p>
        </div>

        <div className="flex items-center gap-5 ">
          <motion.div
            variants={fadeUp}
            className="mt-6 flex flex-col gap-4  items-center sm:gap-5"
          >
            <motion.a
              href="mailto:karankendreg@gmail.com?subject=Project%20inquiry%20from%20portfolio"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full"
            >
              <Link href="https://drive.google.com/file/d/1Jg_KOfcXxwdJtnDofV5ENkdUF46V5WCS/view?usp=drive_link" target="_blank">
                <Button
                  className="h-10 rounded-full px-5 text-sm text-[#000000] sm:h-12 sm:px-6 sm:text-base"
                  style={{ backgroundColor: "#f9f9f9" }}
                >
                View Resume
                </Button>
              </Link>
            </motion.a>
          </motion.div>
          {/* CTA row */}
          <motion.div
            variants={fadeUp}
            className="mt-6 flex flex-col gap-4  items-center sm:gap-5"
          >
            <motion.a
              href="mailto:karankendreg@gmail.com?subject=Project%20inquiry%20from%20portfolio"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full"
            >
              <Button
                className="h-10 rounded-full px-5 text-sm text-[#F9FAFB] sm:h-12 sm:px-6 sm:text-base"
                style={{ backgroundColor: "#4F46E5" }}
              >
                Book a call
              </Button>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
