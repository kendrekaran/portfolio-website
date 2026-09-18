import { ArrowUpRightIcon } from "@/components/arrow-up-right-icon"
import Link from "next/link"
import { email } from "@/lib/portfolio"

export function QuietHeader({ current = "home" }: { current?: "home" | "desk" | "projects" | "gallery" }) {
  return <header className="quiet-header">
    <Link className="avatar-link" href="/" aria-label="Karan Kendre home"><img className="quiet-avatar" src="/portrait.jpg" alt="Karan Kendre" width="48" height="48" /></Link>
    <nav aria-label="Main navigation">
      {current !== "home" && <Link href="/" className="quiet-small">Home</Link>}
      <Link href="/projects" className="quiet-small" aria-current={current === "projects" ? "page" : undefined}>Projects</Link>
      <a className="quiet-pill" href={`mailto:${email}`}>Get in contact</a>
    </nav>
  </header>
}

export function QuietFooter({ showDesk = true }: { showDesk?: boolean }) {
  return <>
    {showDesk && <aside className="quiet-desk-note"><h2>My desk.</h2><p className="quiet-muted">The keyboard, tools, and little things that live on my desk.</p><Link className="quiet-text-link" href="/desk">Take a look around my desk <span aria-hidden="true"><ArrowUpRightIcon /></span></Link></aside>}
    <footer className="quiet-footer" id="contact">
    <a className="quiet-pill quiet-dark-pill" href={`mailto:${email}`}>Let’s build together <span aria-hidden="true"><ArrowUpRightIcon /></span></a>
    <p>Thoughtful interfaces. Clear words. A little curiosity.</p>
    <nav className="quiet-socials" aria-label="Find me online">
      <a href="https://x.com/karankendre" target="_blank" rel="noopener noreferrer">X / Twitter <ArrowUpRightIcon /></a>
      <a href="https://linkedin.com/in/kendrekaran" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRightIcon /></a>
      <a href="https://github.com/kendrekaran" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRightIcon /></a>
    </nav>
    <a className="quiet-email" href={`mailto:${email}`}>{email}</a>
    <div className="quiet-signature">Karan Kendre</div>
    </footer>
  </>
}
