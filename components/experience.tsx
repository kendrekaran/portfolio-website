"use client"

import { motion } from "framer-motion"
import SectionHeading from "./section-heading"

type ExperienceItem = {
  title: string
  description: string
  status: "Live" | "Soon"
  statusColor?: string
}

function getInitials(title: string): string {
  // Extract first letter of the company/organization name
  // For "Design Engineer at Keizer Works" -> "K" (from Keizer)
  // For "Freelancing as a Designer Engineer" -> "F"
  
  // Look for "at" or "—" to find company name
  const atIndex = title.toLowerCase().indexOf(" at ")
  const dashIndex = title.indexOf(" — ")
  
  if (atIndex !== -1) {
    // Extract word after "at"
    const afterAt = title.substring(atIndex + 4).trim()
    return afterAt.charAt(0).toUpperCase()
  } else if (dashIndex !== -1) {
    // Extract word after "—"
    const afterDash = title.substring(dashIndex + 3).trim()
    return afterDash.charAt(0).toUpperCase()
  }
  
  // Fallback to first letter
  return title.charAt(0).toUpperCase()
}

const experiences: ExperienceItem[] = [
  {
    title: "Frontend Developer at Kargul Studio",
    description: "Jan 2026 – May 2026",
    status: "Live",
    statusColor: "bg-teal-500",
  },
  {
    title: "Design Engineer at Keizer Works",
    description: "Jun 2025 – Jan 2026",
    status: "Live",
    statusColor: "bg-teal-500",
  },
  {
    title: "Freelancing as a Designer Engineer",
    description: "Dec 2024 – May 2025",
    status: "Live",
    statusColor: "bg-teal-500",
  },
]

export default function Experience() {
  return (
    <div className="py-12">
      <SectionHeading title="Experience" subtitle="Recent roles" />
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group"
            >
              {i > 0 && (
                <div className="border-t border-dotted border-border" />
              )}
              <div className="flex items-center gap-4 py-4">
                
                <div className="h-12 w-12 shrink-0 flex items-center justify-center rounded-lg bg-white border border-border/50 shadow-s">
                  <span className="text-xl font-medium text-foreground">{getInitials(exp.title)}</span>
                </div>
                
                
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-medium text-foreground mb-0.5">{exp.title}</h3>
                  <p className="text-xs text-muted-foreground">{exp.description}</p>
                </div>
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
