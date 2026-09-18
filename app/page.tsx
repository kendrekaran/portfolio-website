import { ArrowUpRightIcon } from "@/components/arrow-up-right-icon"
import Link from "next/link"
import { QuietHeader, QuietFooter } from "@/components/quiet-shell"
import { IndiaClock, WorkDialog } from "@/components/quiet-interactions"
import QuietProjects from "@/components/quiet-projects"
import { projects } from "@/lib/portfolio"

export default function HomePage() {
  return <div className="quiet-page">
    <QuietHeader />
    <main id="main-content">
      <h1>Karan Kendre</h1>
      <div className="quiet-meta"><span>Design Engineer & Ghostwriter</span><IndiaClock /></div>
      <section className="quiet-intro" aria-label="About me">
        <p>I’m a Design Engineer & Ghostwriter.<br /><em>I build interfaces and put ideas into words.</em></p>
        <details className="quiet-about"><summary>A little more about me <span aria-hidden="true"><ArrowUpRightIcon /></span></summary><p>I’m from India. I’ve worked with national and international clients, and I spend my free time recreating interesting designs in code. You can find those experiments in my <Link href="/gallery">gallery</Link>.</p></details>
        <p>I’ve worked at <a href="https://kargul.studio" target="_blank" rel="noopener noreferrer">Kargul Studio</a> and Keizer Works, and with freelance clients around the world.</p>
        <p>I care about polished interfaces and seamless user experiences. The best animations feel so natural they go entirely unnoticed.</p>
        <p>I’ve written and created posts for major AI companies, turning technical ideas into clear, engaging content. I also share what I learn about AI and technology on <a href="https://x.com/karankendre" target="_blank" rel="noopener noreferrer">X, as @karankendre</a>. My content has generated over 100M impressions.</p>
        <p>Here’s a little of what I’ve been up to.</p>
      </section>
      <section id="experience" aria-labelledby="experience-title" className="quiet-experience">
        <h2 id="experience-title" className="quiet-section-label">Along the way</h2>
        <details className="quiet-article"><summary>Development / Kargul Studio<span aria-hidden="true">⌄</span></summary><div className="quiet-detail"><p className="quiet-small">Jan 2026 – May 2026</p><p>Built web interfaces at <a href="https://kargul.studio" target="_blank" rel="noopener noreferrer">Kargul Studio <ArrowUpRightIcon /></a></p></div></details>
        <details className="quiet-article"><summary>Design Engineering / Keizer Works<span aria-hidden="true">⌄</span></summary><div className="quiet-detail"><p className="quiet-small">Jun 2025 – Jan 2026</p><p>Design Engineer at Keizer Works.</p></div></details>
        <details className="quiet-article"><summary>Independent / Freelance<span aria-hidden="true">⌄</span></summary><div className="quiet-detail"><p className="quiet-small">Dec 2024 – May 2025</p><p>Freelance design engineering for national and international clients.</p></div></details>
        <details className="quiet-article"><summary>Ghostwriting / AI Companies<span aria-hidden="true">⌄</span></summary><div className="quiet-detail"><p>I’ve written and created posts for major AI companies, helping explain their products and ideas in a voice that feels like them.</p></div></details>
        <details className="quiet-article"><summary>Writing / AI & Technology<span aria-hidden="true">⌄</span></summary><div className="quiet-detail"><p className="quiet-small">2024 – Present</p><p>My content on AI and technology has generated over 100M impressions on <a href="https://x.com/karankendre" target="_blank" rel="noopener noreferrer">@karankendre <ArrowUpRightIcon /></a></p></div></details>
      </section>
      <section id="projects" aria-labelledby="projects-title" className="quiet-work">
        <div className="quiet-section-top"><h2 id="projects-title" className="quiet-section-label">Things I’m building</h2><Link href="/projects" className="quiet-small quiet-muted">All projects <ArrowUpRightIcon /></Link></div>
        <p className="quiet-muted">Tools for making things, from the first frame to the final little detail.</p>
        <ul className="quiet-project-index">{projects.slice(0, 5).map(project => <li key={project.name}><a href={project.url} target="_blank" rel="noopener noreferrer"><span>{project.name}</span><span className="project-index-description">{project.category}</span><span aria-hidden="true"><ArrowUpRightIcon /></span></a></li>)}</ul>
        <div className="quiet-actions"><WorkDialog><QuietProjects /></WorkDialog><Link href="/gallery" className="quiet-small quiet-muted">The design gallery <ArrowUpRightIcon /></Link></div>
      </section>
    </main>
    <QuietFooter />
  </div>
}
