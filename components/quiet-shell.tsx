import Link from "next/link"
import { email } from "@/lib/portfolio"

export function QuietHeader({ current = "home" }: { current?: "home" | "desk" | "projects" | "gallery" }) {
  return <header className="quiet-header">
    <Link className="avatar-link" href="/" aria-label="Karan Kendre home"><img className="quiet-avatar" src="/portrait.jpg" alt="Karan Kendre" width="48" height="48" /></Link>
    <nav aria-label="Main navigation">
      {current !== "home" && <Link href="/" className="quiet-small">Home</Link>}
      <Link href="/desk" className="quiet-small" aria-current={current === "desk" ? "page" : undefined}>My desk</Link>
      <a className="quiet-pill" href={`mailto:${email}`}>Get in contact</a>
    </nav>
  </header>
}

export function QuietFooter() {
  return <footer className="quiet-footer" id="contact">
    <a className="quiet-pill quiet-dark-pill" href={`mailto:${email}`}>Let’s build together <span aria-hidden="true">↗</span></a>
    <p>Thoughtful interfaces. Clear words. A little curiosity.</p>
    <nav className="quiet-socials" aria-label="Find me online">
      <a href="https://x.com/karaan_dev" target="_blank" rel="noopener noreferrer">X / Twitter ↗</a>
      <a href="https://linkedin.com/in/kendrekaran" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
      <a href="https://github.com/kendrekaran" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
    </nav>
    <a className="quiet-email" href={`mailto:${email}`}>{email}</a>
    <div className="quiet-signature">Karan Kendre</div>
    <div className="quiet-colophon"><span>© {new Date().getFullYear()}</span><span>Made with care, in India.</span></div>
    <p className="quiet-credit">Built on <a href="https://folio-supply.vercel.app/portfolios/quiet" target="_blank" rel="noopener noreferrer">Quiet by Folio Supply</a>.<br />UI inspired by <a href="https://www.jordiplz.com" target="_blank" rel="noopener noreferrer">Jordi Plz</a>.</p>
  </footer>
}
