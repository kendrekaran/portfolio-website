"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import SectionHeading from "./section-heading"

type Project = {
  title: string
  stack: string
  features: string[]
  image: string
  live: string
  repo: string
}

function getInitials(title: string): string {
  // Extract first letter of the title
  return title.charAt(0).toUpperCase()
}

const projects: Project[] = [
  {
    title: "Eleweight",
    stack: "React, Node.js, Express, MongoDB",
    features: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    image: "https://i.pinimg.com/736x/a8/fa/41/a8fa4190768a2674a401d37b1a7ef95a.jpg",
    live: "https://www.eleweight.in/home",
    repo: "https://github.com/kendrekaran/Eleweight_Frontend",
  },
  {
    title: "Cloud Clipper",
    stack: "Next.js, Tailwind CSS, SnapVideo API",
    features: [
      "Next.js",
      "Tailwind CSS",
      "SnapVideo API",
    ],
    image: "https://i.pinimg.com/736x/8b/59/bf/8b59bfa204cb3972f2b917706e4ca3a4.jpg",
    live: "https://cloudclipper.vercel.app/",
    repo: "https://github.com/kendrekaran/video_downloader",
  },
  {
    title: "takeUforward Landing Page",
    stack: "Next.js, Tailwind CSS",
    features: ["Next.js", "Tailwind CSS", "Testimonials"],
    image: "https://i.pinimg.com/736x/35/cf/7b/35cf7be3fa726d4fdc4d150276264ed9.jpg",
    live: "https://takeuforward.karank.tech/",
    repo: "https://github.com/kendrekaran/takeyouforward",
  },
  {
    title: "ZenOps Landing Page",
    stack: "Next.js, Tailwind CSS",
    features: ["Next.js", "Tailwind CSS"],
    image: "https://i.pinimg.com/736x/01/f8/56/01f85608b14b52eef7a844f936bab04f.jpg",
    live: "https://zen-ops.vercel.app/",
    repo: "https://github.com/kendrekaran/zenops",
  },
  {
    title: "HY-Krox Agency Landing Page",
    stack: "Next.js, Tailwind CSS",
    features: ["Next.js", "Tailwind CSS"],
    image: "https://i.pinimg.com/736x/71/35/0b/71350bb55ff2cc854fd9b1159a04048c.jpg",
    live: "https://hy-krox.vercel.app/",
    repo: "https://github.com/kendrekaran/hy-krox",
  },
]

export default function Projects() {
  return (
    <div className="py-12">
      <SectionHeading
        title="Projects"
        subtitle="Selected work featuring full-stack apps, UI polish, and performance."
      />
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="space-y-0">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
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
                {/* Initials */}
                <div className="h-12 w-12 shrink-0 flex items-center justify-center rounded-lg bg-white border border-border/50 shadow-s">
                  <span className="text-xl font-medium text-foreground">{getInitials(p.title)}</span>
                </div>
                
                {/* Title and Description */}
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-medium text-foreground mb-0.5">{p.title}</h3>
                  <p className="text-xs text-muted-foreground">{p.stack}</p>
                </div>
                
                {/* Links */}
                <div className="shrink-0 flex items-center gap-2">
                  {p.live && (
                    <Link
                      href={p.live}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center justify-center w-8 h-8 rounded-md border border-border bg-muted/50 hover:bg-muted transition-colors"
                      aria-label={`View ${p.title} live`}
                    >
                      <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
                    </Link>
                  )}
                  {p.repo && (
                    <Link
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center justify-center w-8 h-8 rounded-md border border-border bg-muted/50 hover:bg-muted transition-colors"
                      aria-label={`View ${p.title} on GitHub`}
                    >
                      <Github className="h-3.5 w-3.5 text-muted-foreground" />
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

