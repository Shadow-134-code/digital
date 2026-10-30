import Link from 'next/link'
import Reveal from './Reveal'
import Spotlight from './Spotlight'
import { ArrowUpRight, Clapperboard, Layers, Megaphone, Monitor, Palette, Sparkles } from './Icons'
import { services } from '../data/site'

// Home page service cards (the original HZ card layout). Each card opens its section on /services.
const icons = [Palette, Monitor, Sparkles, Megaphone, Clapperboard, Layers]

export default function ServiceCards() {
  return (
    <>
      <Spotlight className="capability-grid">
        {services.map((service, i) => {
          const Icon = icons[i]
          return (
            <Reveal className={`capability-card${service.featured ? ' capability-card--featured' : ''}`} key={service.id} delay={(i % 3) * 0.09} data-spot="">
              <div className="capability-top">
                <span className="capability-icon"><Icon size={26} /></span>
                <span className="capability-num">{service.number}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.card}</p>
              <ul>{service.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
              <Link href={`/services#${service.id}`} className="capability-link">
                Explore services <span className="capability-arrow"><ArrowUpRight size={16} /></span>
              </Link>
            </Reveal>
          )
        })}
      </Spotlight>
      <Spotlight>
        <Reveal className="partnership-note" data-spot="">
          <span className="partnership-star" aria-hidden="true">✳</span>
          <p><strong>One project or an ongoing creative partnership.</strong><br />We shape the scope around what you need.</p>
          <Link href="/contact" className="text-link">Tell us about it <ArrowUpRight size={18} /></Link>
        </Reveal>
      </Spotlight>
    </>
  )
}
