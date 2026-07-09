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
          I&apos;m a Designer Engineer. <br/> A Developer who can Design.
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
            Recently Frontend Developer at{" "}
            <Link 
              href="https://kargul.studio" 
              target="_blank"
              className="text-foreground decoration-muted-foreground/40 underline underline-offset-[6px] hover:decoration-foreground transition-colors font-medium"
            >
              Kargul Studio
            </Link>
            . Previously Freelance for various national and international clients. I also create developer-focused content on X — growing @karaan_dev to 13K followers with 80M+ views on AI and frontend topics. I&apos;m passionate about building polished interfaces and crafting seamless user experiences, with a philosophy that the best animations are those that feel so natural they go entirely unnoticed.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
