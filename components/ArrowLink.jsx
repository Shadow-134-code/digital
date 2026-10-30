import Link from 'next/link'
import { ArrowUpRight } from './Icons'

export default function ArrowLink({ to, children, className = '' }) {
  return (
    <Link href={to} className={`text-link ${className}`}>
      <span>{children}</span>
      <ArrowUpRight size={16} />
    </Link>
  )
}
