import Link from 'next/link'
import ArrowLink from '../components/ArrowLink'
import CreativeShowcase from '../components/CreativeShowcase'
import Lines from '../components/Lines'
import Reveal from '../components/Reveal'
import SectionHead from '../components/SectionHead'
import SelectedWork from '../components/SelectedWork'
import ServiceList from '../components/ServiceList'
import ServiceMarquee from '../components/ServiceMarquee'
import { ArrowRight, ArrowUpRight } from '../components/Icons'

const principles = [
  ['Clarity first', 'Visitors should understand what you offer in seconds and always know where to go next.'],
  ['Design with purpose', 'Type, motion and layout are there to carry the message, never to distract from it.'],
  ['Built for real use', 'Fast, responsive and easy for your team to manage long after launch.'],
]

export default function Home() {
  return (
    <main>
      <section className="home-hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="wrap">
          <p className="label enter">Creative studio for brands, web and film</p>
          <h1 className="display enter-lines">
            <Lines lines={['Brands, websites', 'and films people', <em key="e">remember.</em>]} />
          </h1>
          <div className="hero-foot enter enter-late">
            <p>HZ Digital Solutions is a founder-led studio for brand identity, website design and development, AI visuals and motion. One partner from the first idea to launch day.</p>
            <div className="hero-actions">
              <Link href="/work" className="btn">See our work <ArrowRight size={18} /></Link>
              <ArrowLink to="/contact">Start a project</ArrowLink>
            </div>
          </div>
        </div>
        <div className="wrap">
          <CreativeShowcase />
        </div>
        <ServiceMarquee />
      </section>

      <section className="section studio" aria-labelledby="studio-title">
        <div className="wrap">
          <Reveal as="p" className="label"><span className="label-index">01</span>The studio</Reveal>
          <h2 id="studio-title" className="statement" data-reveal="mask">
            <Lines lines={[<>We bring strategy, design, development and production together, <span className="muted">so your identity, website and campaigns feel like one brand instead of five different suppliers.</span></>]} />
          </h2>
          <ol className="principles">
            {principles.map(([title, text], i) => (
              <Reveal as="li" key={title} delay={i * 0.08}>
                <span className="principle-num">0{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </ol>
          <Reveal className="section-foot"><ArrowLink to="/company">About the studio</ArrowLink></Reveal>
        </div>
      </section>

      <section className="section section-raised" aria-labelledby="services-title">
        <div className="wrap">
          <SectionHead
            id="services-title"
            index="02"
            label="Services"
            title={['Six disciplines,', <em key="e">one standard.</em>]}
            copy="From a first logo to a full campaign, every piece is planned to work together."
            action={<ArrowLink to="/services">All services</ArrowLink>}
          />
          <ServiceList />
        </div>
      </section>

      <section className="section" aria-labelledby="work-title">
        <div className="wrap">
          <SectionHead
            id="work-title"
            index="03"
            label="Selected work"
            title={['A few recent', <em key="e">projects.</em>]}
            copy="Websites, commercials and cover artwork. The full portfolio has more of each."
            action={<ArrowLink to="/work">View all work</ArrowLink>}
          />
          <SelectedWork />
        </div>
      </section>

      <section className="section founder-teaser" aria-labelledby="founder-title">
        <div className="wrap founder-teaser-grid">
          <Reveal variant="media" className="portrait">
            <img src="/founder.webp" alt="Founder of HZ Digital Solutions in his office" width="1000" height="1333" loading="lazy" />
            <p className="portrait-caption label">Founder-led<br />digital studio</p>
          </Reveal>
          {/* The founder's own wording; keep it as written. */}
          <div className="founder-teaser-copy">
            <Reveal as="p" className="label"><span className="label-index">04</span>The founder</Reveal>
            <h2 id="founder-title" className="section-title" data-reveal="mask"><Lines lines={['Zain-ul-Abidin.', <em key="e">Creative by nature.</em>]} /></h2>
            <Reveal delay={0.1}>
              <p className="founder-role">Creative entrepreneur · Co-founder of HZ &amp; Boltz</p>
              <p className="lead">Zain brings together creative direction, design and technology to help businesses build a distinctive digital presence.</p>
              <p>With a background in computer science and experience working with international clients, his work spans branding, website design and development, AI visuals and commercial content.</p>
              <p>At HZ Digital Solutions, that experience comes together in one place: thoughtful creative work, shaped around your business and its next chapter.</p>
              <div className="link-row">
                <ArrowLink to="/founder">Meet the founder</ArrowLink>
                <a className="text-link" href="https://www.linkedin.com/in/zain-ul-abidin-7b5b76190/" target="_blank" rel="noopener noreferrer"><span>Connect on LinkedIn</span><ArrowUpRight size={16} /></a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}
