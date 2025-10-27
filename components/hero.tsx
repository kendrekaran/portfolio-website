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
  const [codingHours, setCodingHours] = useState<string>("--")
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split("T")[0])
  const [isLoading, setIsLoading] = useState(false)
  const [weekData, setWeekData] = useState<Record<string, string>>({})
  const [availableDates, setAvailableDates] = useState<string[]>([])
  const pathname = usePathname()
  
  useEffect(() => setMounted(true), [])

  const fetchWeekData = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/coding-time-week')
      const data = await response.json()
      if (data.data) {
        setWeekData(data.data)
        
        const today = new Date().toISOString().split("T")[0]
        const yesterday = new Date(new Date().getTime() - 24 * 60 * 60 * 1000).toISOString().split("T")[0]
        
        const todayHours = parseFloat(data.data[today] || "0")
        const yesterdayHours = parseFloat(data.data[yesterday] || "0")
        
        // Filter out today if it has less than 2 hours of coding time
        let dates = Object.keys(data.data).sort()
        if (todayHours < 2) {
          dates = dates.filter(date => date !== today)
        }
        setAvailableDates(dates)
        
        // If today's coding time is less than 2 hours, show yesterday's data
        if (todayHours < 2 && yesterdayHours > 0) {
          setSelectedDate(yesterday)
          setCodingHours(data.data[yesterday] || "0")
        } else {
          setSelectedDate(today)
          setCodingHours(data.data[today] || "0")
        }
      }
    } catch (error) {
      console.error("Failed to fetch week data:", error)
      setCodingHours("0")
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchWeekData()
  }, [])

  const navigateDate = (direction: 'prev' | 'next') => {
    const currentIndex = availableDates.indexOf(selectedDate)
    
    if (direction === 'prev' && currentIndex > 0) {
      const newDate = availableDates[currentIndex - 1]
      setSelectedDate(newDate)
      setCodingHours(weekData[newDate] || "0")
    } else if (direction === 'next' && currentIndex < availableDates.length - 1) {
      const newDate = availableDates[currentIndex + 1]
      setSelectedDate(newDate)
      setCodingHours(weekData[newDate] || "0")
    }
  }

  const getDayName = (dateString: string) => {
    const date = new Date(dateString)
    const today = new Date()
    const todayString = today.toISOString().split("T")[0]
    const yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000).toISOString().split("T")[0]
    
    if (dateString === todayString) return 'today'
    if (dateString === yesterday) return 'yesterday'
    
    return date.toLocaleDateString('en-US', { weekday: 'long' })
  }

  const formatHours = (hours: string) => {
    const numHours = parseFloat(hours)
    if (numHours === 0) return "0h"
    if (numHours < 1) {
      const minutes = Math.round(numHours * 60)
      return `${minutes}m`
    }
    if (numHours === Math.floor(numHours)) {
      return `${Math.floor(numHours)}h`
    }
    const wholeHours = Math.floor(numHours)
    const minutes = Math.round((numHours - wholeHours) * 60)
    return `${wholeHours}h ${minutes}m`
  }

  const currentIndex = availableDates.indexOf(selectedDate)
  const canGoPrev = currentIndex > 0
  const canGoNext = currentIndex < availableDates.length - 1


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
            <div className="mt-4 flex items-center gap-4">
                <motion.div variants={fadeUp}>
                  <div 
                    className="relative inline-flex items-center gap-2 rounded-full border border-border bg-muted px-2 py-1 text-xs text-muted-foreground sm:px-3 sm:py-1.5 sm:text-sm shadow-inset cursor-pointer hover:bg-muted/80 transition-all duration-300 ease-out"
                    onClick={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect()
                      const clickX = e.clientX - rect.left
                      const width = rect.width
                      
                      if (clickX < width / 2 && canGoPrev) {
                        // Left side clicked - go to previous day
                        navigateDate('prev')
                      } else if (clickX >= width / 2 && canGoNext) {
                        // Right side clicked - go to next day
                        navigateDate('next')
                      }
                    }}
                  >
                    <div className="absolute left-0 top-0 h-full w-1/2 cursor-pointer" />
                    <div className="absolute right-0 top-0 h-full w-1/2 cursor-pointer" />
                    {isLoading ? (
                      <div className="flex items-center gap-2 h-5.5">
                        <div className="flex space-x-1">
                          <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground animate-bounce [animation-delay:-0.3s]"></div>
                          <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground animate-bounce [animation-delay:-0.15s]"></div>
                          <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground animate-bounce"></div>
                        </div>
                      </div>
                    ) : (
                      <motion.div
                        key={selectedDate}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="flex items-center"
                      >
                        {formatHours(codingHours)} coded {getDayName(selectedDate)}
                      </motion.div>
                    )}
                  </div>
                </motion.div>
                <motion.div variants={fadeUp}>
                  <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-2 py-1 text-xs text-muted-foreground sm:px-3 sm:py-1.5 sm:text-sm shadow-inset">
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
            {"Feel free to explore my portfolio and reach out — I'd love to connect!"}
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
                  className="h-10 rounded-full px-5 text-sm text-[#000000] sm:h-12 sm:px-6 sm:text-base shadow-s"
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
                className="h-10 rounded-full px-5 text-sm text-[#F9FAFB] sm:h-12 sm:px-6 sm:text-base shadow-s"
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
