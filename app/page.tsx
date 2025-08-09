import { Suspense } from "react"
import Hero from "@/components/hero"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-svh bg-[radial-gradient(1200px_600px_at_70%_-10%,rgba(59,130,246,0.25),rgba(147,51,234,0.08)_60%,transparent_70%)] bg-background text-foreground scroll-smooth">
      <Suspense fallback={null}>
        <section id="home" aria-label="Home" className="scroll-mt-24">
          <Hero />
        </section>
        <section id="skills" aria-label="Skills" className="scroll-mt-24">
          <Skills />
        </section>
        <section id="projects" aria-label="Projects" className="scroll-mt-24">
          <Projects />
        </section>
        <section id="experience" aria-label="Experience" className="scroll-mt-24">
          <Experience />
        </section>
        <section id="contact" aria-label="Contact" className="scroll-mt-24">
          <Contact />
        </section>
      </Suspense>
      <Footer />
    </main>
  )
}
