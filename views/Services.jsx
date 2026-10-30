import ArrowLink from '../components/ArrowLink'
import Lines from '../components/Lines'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionHead from '../components/SectionHead'
import { services } from '../data/site'

const steps = [
  ['Discover', 'Your goals, audience and priorities, and the one action the work should drive.'],
  ['Structure', 'Sitemaps, page hierarchy and user journeys, worked out before any visual polish.'],
  ['Design', 'Layouts, type and motion designed deliberately for desktop, tablet and mobile.'],
  ['Build', 'Clean, maintainable builds with content you can edit and the features you need.'],
  ['Test', 'Speed, accessibility basics, on-page SEO and behaviour on real devices.'],
  ['Launch', 'Final checks, go-live support and a handover that leaves you in control.'],
]

export default function Services() {
  return (
    <main>
      <PageHero
        label="Services"
        title={['Good ideas,', <em key="e">well built.</em>]}
        copy="Branding, websites, AI visuals, campaign creative, motion and social content, all guided by one clear creative direction. Hire us for one service or bring them together."
      >
        <ul className="hero-index" aria-label="Jump to a service">
          {services.map(s => <li key={s.id}><a href={`#${s.id}`}>{s.number} {s.title}</a></li>)}
        </ul>
      </PageHero>

      <section className="section section-tight" aria-label="Our services">
        <div className="wrap">
          {services.map(s => (
            <article key={s.id} id={s.id} className={`service-block${s.featured ? ' is-featured' : ''}`} aria-labelledby={`${s.id}-title`}>
              <Reveal className="service-block-head">
                <span className="service-num">{s.number}</span>
                <h2 id={`${s.id}-title`}>{s.title}</h2>
                {s.featured && <span className="flag">Studio focus</span>}
              </Reveal>
              <Reveal className="service-block-body" delay={0.08}>
                <p>{s.text}</p>
                <ul className="tag-list">{s.tags.map(t => <li key={t}>{t}</li>)}</ul>
                <ArrowLink to="/contact">Discuss this service</ArrowLink>
              </Reveal>
            </article>
          ))}
          <Reveal as="p" className="note">
            One project or an ongoing creative partnership. We shape the scope around what you need.
          </Reveal>
        </div>
      </section>

      <section className="section section-raised" aria-labelledby="process-title">
        <div className="wrap">
          <SectionHead
            id="process-title"
            label="Process"
            title={['How a project', <em key="e">comes together.</em>]}
            copy="The same six steps for every website, scaled to the size of the job."
          />
          <ol className="steps">
            {steps.map(([title, text], i) => (
              <Reveal as="li" key={title} delay={(i % 3) * 0.07}>
                <span className="step-num">0{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </main>
  )
}
