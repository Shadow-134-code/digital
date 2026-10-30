import Link from 'next/link'
import Reveal from './Reveal'
import { ArrowUpRight } from './Icons'
import { services } from '../data/site'

// Compact index of services for the home page; each row opens its section on /services.
export default function ServiceList() {
  return (
    <ol className="service-list">
      {services.map((s, i) => (
        <Reveal as="li" key={s.id} delay={i * 0.04} className={s.featured ? 'is-featured' : undefined}>
          <Link href={`/services#${s.id}`} className="service-row">
            <span className="service-num">{s.number}</span>
            <span className="service-name">{s.title}</span>
            <span className="service-text">{s.summary}</span>
            <span className="service-go" aria-hidden="true"><ArrowUpRight size={20} /></span>
          </Link>
        </Reveal>
      ))}
    </ol>
  )
}
