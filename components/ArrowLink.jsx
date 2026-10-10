"use client";
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

export default function ArrowLink({ to, children, className = '' }) {
  return (
    <Link href={to} className={`arrow-link ${className}`}>
      <span>{children}</span>
      <span className="arrow-link__icon"><ArrowUpRight size={17} strokeWidth={1.7} /></span>
    </Link>
  )
}
