"use client"

import { Moon, Sun } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import Link from "next/link"
import { motion, type Variants } from "framer-motion"
import { Mail } from 'lucide-react'
import { usePathname } from "next/navigation"

export default function Navbar() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  
  useEffect(() => setMounted(true), [])

  const fadeUp: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
}

  const current = theme === "system" ? systemTheme : theme
  
  function handleThemeToggle() {
    const switchTheme = () => setTheme(current === "dark" ? "light" : "dark")
    const anyDoc = document as unknown as { startViewTransition?: (cb: () => void) => void }
    if (!anyDoc.startViewTransition) {
      switchTheme()
      return
    }
    anyDoc.startViewTransition(switchTheme)
  }

  const isActive = (path: string) => pathname === path

  return (
    <nav className="max-w-2xl mx-auto w-full z-10">
      <motion.div
          variants={fadeUp}
          className="mb-6 flex items-center justify-between sm:mb-8"
        >
          <a
            href="mailto:karankendreg@gmail.com"
            className="hidden sm:group sm:inline-flex items-center gap-2 rounded-full text-xs text-muted-foreground sm:gap-3 sm:text-sm"
          >
            <Mail className="h-4 w-4 text-[#4F46E5] sm:h-5 sm:w-5" aria-hidden="true" />
            <span className="hidden text-xl sm:inline">•</span>
            <span className="underline underline-offset-4">karankendreg@gmail.com</span>
          </a>
          <div className="flex items-start sm:items-center gap-2 sm:gap-8 ">
            <Link 
              href="/" 
              className={`text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'text-foreground' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/gallery" 
              className={`text-sm font-medium transition-colors ${
                isActive('/gallery') 
                  ? 'text-foreground' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Gallery
            </Link>
          </div>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle theme"
              className='cursor-pointer shadow-s'
              onClick={handleThemeToggle}
            >
              {mounted && current === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          
        </motion.div>
    </nav>
  )
}
