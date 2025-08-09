"use client"

import { motion } from "framer-motion"
import SectionHeading from "./section-heading"
import { ExternalLink, Github } from 'lucide-react'

type Project = {
  title: string
  stack: string
  features: string[]
  image: string
  live?: string
  repo?: string
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
    <div className="">
      <SectionHeading
        title="Projects"
        subtitle="Selected work featuring full-stack apps, UI polish, and performance."
      />
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="rounded-xl border border-border bg-card">
          <div className="divide-y divide-border">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="group"
              >
                <div className="p-2 transition-colors hover:bg-muted sm:p-3">
                  <div className="flex flex-wrap items-start gap-2 sm:flex-nowrap sm:items-center sm:gap-3">
                    {p.image ? (
                      <div className="h-14 w-20 shrink-0 overflow-hidden rounded-md border border-border bg-muted sm:h-16 sm:w-28">
                        <img
                          src={p.image}
                          alt={`${p.title} preview`}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    ) : null}
                    <div className="min-w-0 flex-1 space-y-0.5 sm:space-y-1">
                      <h3 className="truncate text-[13px] font-medium text-foreground sm:text-sm">{p.title}</h3>
                      <p className="truncate text-[11px] text-muted-foreground sm:text-xs">{p.stack}</p>
                      {p.live ? (
                        <p className="hidden truncate text-[11px] text-muted-foreground sm:block">
                          <a
                            href={p.live}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="underline underline-offset-4 hover:text-foreground"
                          >
                            {p.live}
                          </a>
                        </p>
                      ) : null}
                      {p.features?.length ? (
                        <div className="hidden flex-wrap gap-1 pt-1 sm:flex sm:gap-1.5">
                          {p.features.slice(0, 2).map((f) => (
                            <span key={f} className="rounded-full border border-border bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground sm:px-2 sm:text-[11px]">{f}</span>
                          ))}
                        </div>
                      ) : null}
                    </div>
                    <div className=" flex w-full shrink-0 items-center justify-end gap-2 sm:mt-0 sm:w-auto sm:ml-auto sm:self-start">
                      {p.live ? (
                        <a href={p.live} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-1 text-[12px] text-muted-foreground underline underline-offset-4 hover:text-foreground sm:text-xs" aria-label={`${p.title} live demo`}>
                          Live <ExternalLink className="h-4 w-4" />
                        </a>
                      ) : null}
                      {p.repo ? (
                        <a href={p.repo} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-1 text-[12px] text-muted-foreground underline underline-offset-4 hover:text-foreground sm:text-xs" aria-label={`${p.title} repository`}>
                          Code <Github className="h-4 w-4" />
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

