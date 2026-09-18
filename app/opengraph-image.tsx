import { ImageResponse } from "next/og"

export const alt = "Karan Kendre – Design Engineer & Ghostwriter"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function SocialImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "80px 100px", background: "#fafaf9", color: "#252525" }}>
      <div style={{ display: "flex", fontSize: 24, color: "#777", marginBottom: 35 }}>Karan Kendre</div>
      <div style={{ display: "flex", fontSize: 68, letterSpacing: "-2px", lineHeight: 1.1 }}>Design Engineer</div>
      <div style={{ display: "flex", fontSize: 68, letterSpacing: "-2px", lineHeight: 1.1 }}>& Ghostwriter.</div>
      <div style={{ display: "flex", fontSize: 26, color: "#666", marginTop: 32 }}>I build interfaces and put ideas into words.</div>
      <div style={{ display: "flex", fontSize: 20, color: "#888", marginTop: 58 }}>karaan.me · India</div>
    </div>,
    size,
  )
}
