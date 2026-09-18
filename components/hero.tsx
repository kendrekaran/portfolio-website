"use client"

import { motion, type Variants } from "framer-motion"
import Link from "next/link"

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Hero() {
  return (
    <section className="relative mx-auto flex min-h-[40svh] max-w-2xl flex-col items-start px-4 py-12 sm:px-6">
      <motion.div
        className="w-full space-y-8 mt-12"
        initial="hidden"
        animate="show"
        variants={container}
      >
         <motion.img
            variants={fadeUp}
            src={"https://i.pinimg.com/736x/48/9b/5a/489b5aa4d508ef3e18e9eecdfc50a63d.jpg"}  
            alt="Karan Kendre portrait" 
            className="h-12 w-12 rounded-lg object-cover border-2 border-gray-400 -rotate-6  sm:h-14 sm:w-14"
          />
        <motion.h1 
          variants={fadeUp}
          className=" text-4xl font-medium leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-5xl"
          style={{ fontFamily: 'var(--font-newsreader-normal)' }}
        >
          I&apos;m a Design Engineer & Ghostwriter. <br/> I build interfaces and put ideas into words.
        </motion.h1>

        <motion.div 
          variants={fadeUp}
          className="max-w-2xl  text-md leading-relaxed text-muted-foreground/80 sm:text-lg"
        >
          <motion.p 
          variants={fadeUp}
          className="text-lg text-muted-foreground"
        >
          Karan Kendre • I am from India
        </motion.p>

          <p className="font-normal">
            I&apos;ve worked at{" "}
            <Link 
              href="https://kargul.studio" 
              target="_blank"
              className="text-foreground decoration-muted-foreground/40 underline underline-offset-[6px] hover:decoration-foreground transition-colors font-medium"
            >
              Kargul Studio
            </Link>
            , at Keizer Works, and with freelance clients around the world. I&apos;ve written and created posts for major AI companies, turning technical ideas into clear, engaging content. I also share what I learn about AI and technology on X as @karaan_dev. My content has generated over 100M impressions. I care about polished interfaces, seamless user experiences, and animations that feel natural.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
