import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ImageResponse } from "next/og"
import type { ReactNode } from "react"
import { deskItems } from "./portfolio"

const size = { width: 1200, height: 630 }

async function localImage(path: string) {
  const data = await readFile(join(process.cwd(), "public", path))
  return `data:image/jpeg;base64,${data.toString("base64")}`
}

function Frame({ label, lines, description, path, background, dark = false, children }: {
  label: string
  lines: string[]
  description: string
  path: string
  background: string
  dark?: boolean
  children: ReactNode
}) {
  const foreground = dark ? "#f6f4ee" : "#282b27"
  const muted = dark ? "#b6b8af" : "#75786f"
  return <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", background, color: foreground }}>
    <div style={{ display: "flex", position: "absolute", left: 64, top: 47, fontSize: 23 }}>Karan Kendre</div>
    <div style={{ display: "flex", position: "absolute", left: 64, top: 157, fontSize: 16, letterSpacing: "2px", color: muted }}>{label}</div>
    <div style={{ display: "flex", flexDirection: "column", position: "absolute", left: 60, top: 202, fontSize: 66, letterSpacing: "-2px", lineHeight: 1.1 }}>
      {lines.map(line => <div key={line} style={{ display: "flex" }}>{line}</div>)}
    </div>
    <div style={{ display: "flex", position: "absolute", left: 64, top: 388, width: 430, fontSize: 23, lineHeight: 1.45, color: muted }}>{description}</div>
    {children}
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", position: "absolute", left: 64, right: 64, bottom: 38, paddingTop: 24, borderTop: `1px solid ${dark ? "#454740" : "#d7d9d1"}`, fontSize: 19, color: muted }}>
      <span>karaan.me{path}</span><span>Design Engineer & Ghostwriter</span>
    </div>
  </div>
}

function Photo({ src, left, top, width, height, contain = false, rotation = 0 }: {
  src: string; left: number; top: number; width: number; height: number; contain?: boolean; rotation?: number
}) {
  const padding = contain ? 20 : 7
  return <div style={{ display: "flex", position: "absolute", left, top, width, height, padding, background: "#fff", borderRadius: 13, transform: `rotate(${rotation}deg)`, boxShadow: "0 12px 35px rgba(0,0,0,0.09)" }}>
    <img src={src} alt="" width={width - padding * 2} height={height - padding * 2} style={{ objectFit: contain ? "contain" : "cover", borderRadius: contain ? 0 : 7 }} />
  </div>
}

export async function projectsSocialImage() {
  const [folio, framecraft] = await Promise.all([localImage("social/folio.jpg"), localImage("social/framecraft.jpg")])
  return new ImageResponse(<Frame label="SELECTED WORK" lines={["Things", "I’ve made."]} description="Tools, interfaces, and experiments. Built with care, down to the details." path="/projects" background="#eef1eb">
    <Photo src={folio} left={591} top={78} width={520} height={273} rotation={3} />
    <Photo src={framecraft} left={641} top={264} width={490} height={257} rotation={-4} />
  </Frame>, size)
}

export async function deskSocialImage() {
  const [keyboard, mouse, chair] = await Promise.all([localImage("desk/keyboard.jpg"), localImage("social/mouse.jpg"), localImage("desk/chair.jpg")])
  return new ImageResponse(<Frame label="MY EVERYDAY SETUP" lines={["Things on", "my desk."]} description={`${deskItems.length} things I own. The tools, gadgets, and little comforts I work with.`} path="/desk" background="#f1eff5">
    <Photo src={keyboard} left={568} top={92} width={325} height={205} contain rotation={-3} />
    <Photo src={mouse} left={589} top={320} width={283} height={194} contain rotation={3} />
    <Photo src={chair} left={914} top={132} width={224} height={362} contain rotation={2} />
  </Frame>, size)
}

export async function gallerySocialImage() {
  const [first, second] = await Promise.all([localImage("social/gallery-one.jpg"), localImage("social/gallery-two.jpg")])
  return new ImageResponse(<Frame label="AFTER HOURS" lines={["A little", "design practice."]} description="Interesting interfaces, recreated in code. A space for trying things." path="/gallery" background="#242622" dark>
    <Photo src={first} left={617} top={77} width={488} height={283} rotation={-4} />
    <Photo src={second} left={657} top={279} width={480} height={239} rotation={4} />
  </Frame>, size)
}
