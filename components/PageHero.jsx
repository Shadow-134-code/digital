"use client";
import { motion } from 'framer-motion'

export default function PageHero({ eyebrow, title, copy, children }) {
  return (
    <section className="page-hero container">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .3 }} className="page-eyebrow">{eyebrow}</motion.div>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .45, delay: .08, ease: [0.22,1,0.36,1] }}>{title}</motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .35, delay: .1 }}>{copy}</motion.p>
      {children}
    </section>
  )
}
