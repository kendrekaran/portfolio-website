import type { Metadata } from "next"
import { QuietHeader, QuietFooter } from "@/components/quiet-shell"
import QuietProjects from "@/components/quiet-projects"

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected work by Karan Kendre: Folio Supply, Framecraft, Filament, Cutroom, Clip Path Library, and earlier projects.",
  alternates: { canonical: "/projects" },
  openGraph: { title: "Projects · Karan Kendre", description: "Tools, interfaces, and experiments I’ve designed and built.", url: "/projects" },
  twitter: { card: "summary_large_image", title: "Projects · Karan Kendre", description: "Tools, interfaces, and experiments I’ve designed and built.", creator: "@karankendre", site: "@karankendre", images: [{ url: "/projects/opengraph-image", alt: "Projects by Karan Kendre – Folio Supply and Framecraft" }] },
}
export default function ProjectsPage() {
  return <div className="quiet-page quiet-wide"><QuietHeader current="projects" /><main id="main-content"><div className="quiet-page-heading"><span className="quiet-eyebrow">Selected work</span><h1>Things I’ve made.</h1><p>Tools, interfaces, and experiments.<br />A few ideas that found their way into the browser.</p></div><QuietProjects /></main><QuietFooter /></div>
}
