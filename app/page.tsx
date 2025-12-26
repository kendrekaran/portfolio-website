import { Suspense } from "react"
import Hero from "@/components/hero"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import GitHubSection from "@/components/github"
import Gallery from "@/components/gallery"
import DesignCopies from "@/components/design-copies"

export default function HomePage() {
  return (
    <main className="min-h-svh bg-background text-foreground scroll-smooth overflow-x-hidden">
      <Suspense fallback={null}>
        <section id="home" aria-label="Home" className="scroll-mt-24">
          <Hero />
        </section>
        <section id="github" aria-label="github" className="scroll-mt-24">
          <GitHubSection />
        </section>
        <section id="experience" aria-label="Experience" className="scroll-mt-24">
          <Experience />
        </section>
        <section id="design-copies" aria-label="Design Copies" className="scroll-mt-24">
          <DesignCopies />
        </section>
        <section id="projects" aria-label="Projects" className="scroll-mt-24">
          <Projects />
        </section>
        <section id="contact" aria-label="Contact" className="scroll-mt-24">
          <Contact />
        </section>
      </Suspense>
    </main>
  )
}
