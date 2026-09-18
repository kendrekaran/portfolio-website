import type { Metadata } from "next"
import { QuietHeader, QuietFooter } from "@/components/quiet-shell"
import { deskItems } from "@/lib/portfolio"

export const metadata: Metadata = {
  title: "My desk",
  description: "The gadgets, tools, and little things on Karan Kendre’s desk. Ten things I own, from my keyboard and monitor to the plants beside them.",
  alternates: { canonical: "/desk" },
  openGraph: { title: "My desk · Karan Kendre", description: "The gadgets, tools, and little things I own.", url: "/desk", images: ["/ogimage.png"] },
}

export default function DeskPage() {
  return <div className="quiet-page quiet-wide">
    <QuietHeader current="desk" />
    <main id="main-content">
      <div className="quiet-page-heading"><span className="quiet-eyebrow">A little behind the scenes</span><h1>Things on my desk.</h1><p>The gadgets, tools, and little things I own.<br />A place for making things, and the occasional break.</p><div className="quiet-collection-meta"><span>10 things, one desk</span><span>My everyday setup</span></div></div>
      <div className="desk-grid">{deskItems.map((item, index) => <article className="desk-item" key={item.url}>
        <a className="desk-photo" href={item.url} target="_blank" rel="noopener noreferrer" tabIndex={-1} aria-hidden="true"><span className="desk-number">{String(index + 1).padStart(2, "0")}</span><img src={item.image} alt="" width="400" height="320" loading={index < 2 ? "eager" : "lazy"} /><span className="desk-photo-arrow" aria-hidden="true">↗</span></a>
        <span className="quiet-eyebrow">{item.category}</span>
        <h2><a href={item.url} target="_blank" rel="noopener noreferrer">{item.name} <span aria-hidden="true">↗</span></a></h2>
        <p>{item.detail}</p>
        <a className="quiet-small quiet-muted" href={item.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${item.name} on Amazon`}>Find it on Amazon ↗</a>
      </article>)}</div>
      <p className="desk-endnote">A few practical things. A few just because.</p>
    </main>
    <QuietFooter />
  </div>
}
