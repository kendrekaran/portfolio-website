import type { Metadata } from "next"
import { QuietHeader, QuietFooter } from "@/components/quiet-shell"

export const metadata: Metadata = {
  title: "Gallery",
  description: "Design recreations and frontend experiments by Karan Kendre.",
  alternates: { canonical: "/gallery" },
  openGraph: { title: "Gallery · Karan Kendre", description: "Design recreations and frontend experiments.", url: "/gallery" },
  twitter: { card: "summary_large_image", title: "Gallery · Karan Kendre", description: "Design recreations and frontend experiments.", creator: "@karankendre", site: "@karankendre", images: [{ url: "/gallery/opengraph-image", alt: "Karan Kendre’s gallery – design recreations and experiments" }] },
}
const images = [
  "https://res.cloudinary.com/dyyndll5a/image/upload/v1766776708/Screenshot_2025-12-27_at_12.45.09_AM_hubyyk.png",
  "https://res.cloudinary.com/dyyndll5a/image/upload/v1766776259/Screenshot_2025-12-27_at_12.30.40_AM_baxd7x.png",
  "https://res.cloudinary.com/dyyndll5a/image/upload/v1766776259/Screenshot_2025-12-27_at_12.30.18_AM_xerg0n.png",
  "https://res.cloudinary.com/dyyndll5a/image/upload/v1766776708/Screenshot_2025-12-27_at_12.45.59_AM_gl2rj2.png",
  "https://res.cloudinary.com/dyyndll5a/image/upload/v1766776708/Screenshot_2025-12-27_at_12.44.39_AM_a7ry5d.png",
  "https://res.cloudinary.com/dyyndll5a/image/upload/v1766776722/G5Z2eRta0AAS3f3_dkwphy.jpg",
  "https://res.cloudinary.com/dyyndll5a/image/upload/v1766776721/G5Z2eRsbEAA8i79_cdtpsm.jpg",
  "https://res.cloudinary.com/dyyndll5a/image/upload/v1766776708/Screenshot_2025-12-27_at_12.46.17_AM_y7t5sm.png",
]
const links = [
  "https://x.com/karankendre/status/1963635642220384682?s=20",
  "https://x.com/karankendre/status/1998690676175941795?s=20",
  "https://x.com/karankendre/status/1999073373155102957?s=20",
  "https://x.com/karankendre/status/1926528888475156950?s=204",
  "https://x.com/karankendre/status/1953532877565784571?s=20",
  "https://x.com/karankendre/status/1985301165651960247?s=20",
  "https://x.com/karankendre/status/1986780707340103881?s=20",
  "https://x.com/karankendre/status/1921491459275989037?s=20",
]
export default function GalleryPage() {
  return <div className="quiet-page quiet-wide"><QuietHeader current="gallery" /><main id="main-content">
    <div className="quiet-page-heading"><span className="quiet-eyebrow">After hours</span><h1>A little design practice.</h1><p>I recreate interesting designs in code in my free time.<br />Some of these designs are by other people; the code is mine.</p></div>
    <div className="quiet-gallery-grid">{images.map((image, index) => <a className="quiet-gallery-item" href={links[index]} target="_blank" rel="noopener noreferrer" key={image}><img src={image} alt={`Design recreation ${index + 1}`} width="600" height="375" loading="lazy" /><span className="quiet-gallery-caption"><span>Experiment {String(index + 1).padStart(2, "0")}</span><span>View on X ↗</span></span></a>)}</div>
  </main><QuietFooter /></div>
}
