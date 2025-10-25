"use client"

import SectionHeading from "./section-heading"
import { Github, Linkedin, Twitter } from 'lucide-react'

export default function Contact() {
  return (
    <div className="">
      <SectionHeading title="Contact" subtitle="Let’s build something great together." />
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="space-y-4 rounded-xl border border-border bg-card p-4 sm:p-5">
          <p className="text-sm text-muted-foreground">Prefer DMs? Reach me on X (Twitter) I’m quick to respond.</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="https://x.com/karaan_dev"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-muted px-3 py-2 text-sm text-muted-foreground hover:bg-muted/80 shadow-s"
            >
              <Twitter className="h-4 w-4" /> @karaan_dev
            </a>
            <a
              href="https://linkedin.com/in/kendrekaran"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-muted px-3 py-2 text-sm text-muted-foreground hover:bg-muted/80 shadow-s"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href="https://github.com/kendrekaran"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-muted px-3 py-2 text-sm text-muted-foreground hover:bg-muted/80 shadow-s"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
          <div className="text-xs text-muted-foreground">
            Or email: <a className="underline underline-offset-4 hover:text-foreground" href="mailto:karankendreg@gmail.com">karankendreg@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  )
}
