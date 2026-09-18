"use client"
import { ArrowUpRightIcon } from "@/components/arrow-up-right-icon"
import { useEffect, useRef, useState, type ReactNode, type MouseEvent } from "react"
import Link from "next/link"

export function IndiaClock() {
  const [time, setTime] = useState("India / IST")
  useEffect(() => {
    const update = () => setTime(new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit" }).format(new Date()) + " IST")
    update()
    const timer = setInterval(update, 30_000)
    return () => clearInterval(timer)
  }, [])
  return <span className="quiet-clock" aria-label={`Local time in India: ${time}`}>{time}</span>
}

export function WorkDialog({ children }: { children: ReactNode }) {
  const dialog = useRef<HTMLDialogElement>(null)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => { document.body.style.overflow = previous }
  }, [open])
  const closeOnBackdrop = (event: MouseEvent<HTMLDialogElement>) => {
    if (!dialog.current || event.target !== dialog.current) return
    const rect = dialog.current.getBoundingClientRect()
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.current.close()
  }
  return <>
    <button className="quiet-pill" onClick={() => { dialog.current?.showModal(); setOpen(true) }}>See work <span aria-hidden="true"><ArrowUpRightIcon /></span></button>
    <dialog ref={dialog} className="quiet-dialog" aria-labelledby="work-title" onClose={() => setOpen(false)} onClick={closeOnBackdrop}>
      <header className="dialog-header"><div><h2 id="work-title">Selected work</h2><p>Things I’ve designed and built.</p></div><button className="quiet-pill" onClick={() => dialog.current?.close()} aria-label="Close selected work">Close <span aria-hidden="true">×</span></button></header>
      {children}
      <Link href="/projects" className="quiet-text-link" onClick={() => dialog.current?.close()}>Open the full projects page <ArrowUpRightIcon /></Link>
    </dialog>
  </>
}
