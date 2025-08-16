'use client';

import { Variants, motion } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.75,
      staggerChildren: 0.4
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeInOut" } }
};

export default function About() {
  const social = [{ name: "github", url: "https://github.com/Alwexis" }, { name: "linkedin", url: "https://www.linkedin.com/in/arielsilvar" }, { name: "X (twitter)", url: "https://x.com/alwexis_dev" }, { name: "email", url: "mailto:arielsilvar.dev@gmail.com" }]

  return (
    <section
      id="about"
      className="w-full max-w-xs lg:max-w-2xl xl:max-w-4xl xl:min-h-dvh xl:flex xl:flex-col xl:items-start xl:justify-center py-8"
    >
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1 } }} className="text-3xl md:text-5xl xl:text-4xl text-neutral-100 font-bold">
        about.
      </motion.h2>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1, delay: 0.25 } }} className="font-thin leading-tight whitespace-pre-line text-neutral-300 md:text-3xl xl:text-2xl space-y-6 my-2 xl:px-8">
        My name is Ariel Silva and I&apos;m a Computer Engineer and Front-End Developer
        focused on building modern, accessible, and high-performance interfaces.
        
        Skilled in React, Vue, Angular, TypeScript, and TailwindCSS, with experience in
        full-stack, mobile, machine & deep learning and agile project management.
        
        Passionate about clean code, user-centered design, and continuous learning.
      </motion.p>
      <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1, delay: 0.5 } }} className="text-lg mt-2 xl:px-8">Contact me:</motion.h3>
      <motion.div variants={container} initial="hidden" animate="show" className="space-x-4 text-neutral-300 font-light xl:px-8">
        { social.map((social) => (
          <motion.a variants={item} key={social.name} rel="noreferrer" href={social.url} target="_blank" className="hover:text-neutral-200 transition-colors duration-200 inline-block">{social.name}</motion.a>
        ))}
      </motion.div>
    </section>
  )
}