import ArrowLink from '../components/ArrowLink'
import Lines from '../components/Lines'
import Reveal from '../components/Reveal'
import { ArrowUpRight } from '../components/Icons'

const focus = ['Brand identity', 'Websites', 'AI visuals', 'Campaign creative', 'Lyric videos', 'Motion design']

export default function Founder() {
  return (
    <main>
      <section className="page-hero founder-hero">
        <div className="wrap founder-hero-grid">
          <div className="founder-hero-copy">
            <p className="label enter">The founder</p>
            <h1 className="page-title enter-lines"><Lines lines={['Zain-ul-Abidin.', <em key="e">Creative direction.</em>]} /></h1>
            <div className="enter enter-late">
              <p className="founder-role">Creative entrepreneur · Co-founder of HZ & Boltz</p>
              <p className="page-intro">Zain brings creative direction, design and technology together to help businesses build a presence people recognise.</p>
            </div>
          </div>
          <figure className="portrait founder-hero-portrait enter enter-media">
            <img src="/founder.webp" alt="Zain-ul-Abidin seated in his office" width="1000" height="1333" fetchPriority="high" />
            <figcaption className="label">Founder, HZ Digital Solutions</figcaption>
          </figure>
        </div>
      </section>

      <section className="section" aria-labelledby="bio-title">
        <div className="wrap split">
          <div>
            <Reveal as="p" className="label">Background</Reveal>
            <h2 id="bio-title" className="section-title" data-reveal="mask"><Lines lines={['Design, technology', <>and a <em>clear vision.</em></>]} /></h2>
          </div>
          <Reveal className="prose" delay={0.1}>
            <p className="lead">With a background in computer science and experience with international clients, Zain’s work spans branding, website design and development, AI visuals and commercial content.</p>
            <p>That mix means the person shaping the idea also understands how it will be built, filmed or launched, which keeps projects practical as well as creative.</p>
            <p>At HZ Digital Solutions, that experience comes together in one place: considered creative work, shaped around your business and what it needs next.</p>
            <div className="link-row">
              <a className="text-link" href="https://www.linkedin.com/in/zain-ul-abidin-7b5b76190/" target="_blank" rel="noopener noreferrer"><span>Connect on LinkedIn</span><ArrowUpRight size={16} /></a>
              <ArrowLink to="/contact">Tell us about your project</ArrowLink>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-raised" aria-labelledby="focus-title">
        <div className="wrap">
          <Reveal as="p" className="label">Focus</Reveal>
          <h2 id="focus-title" className="section-title" data-reveal="mask"><Lines lines={['Creative work with', <em key="e">a clear purpose.</em>]} /></h2>
          <ul className="focus-list">
            {focus.map((item, i) => <Reveal as="li" key={item} delay={i * 0.05}>{item}</Reveal>)}
          </ul>
          <Reveal className="section-foot"><ArrowLink to="/services">Explore the services</ArrowLink></Reveal>
        </div>
      </section>
    </main>
  )
}
