import ArrowLink from '../components/ArrowLink'
import Lines from '../components/Lines'
import Reveal from '../components/Reveal'
import { ArrowUpRight } from '../components/Icons'

// All wording on this page is the founder's own; keep it as written.
export default function Founder() {
  return (
    <main>
      <section className="page-hero founder-hero">
        <div className="wrap founder-hero-grid">
          <div className="founder-hero-copy">
            <p className="label enter">The founder</p>
            <h1 className="page-title enter-lines"><Lines lines={['Zain-ul-Abidin.', <em key="e">Creative direction.</em>]} /></h1>
            <div className="enter enter-late">
              <p className="founder-role">Creative entrepreneur · Co-founder of HZ &amp; Boltz</p>
            </div>
          </div>
          <figure className="portrait founder-hero-portrait enter enter-media">
            <img src="/founder.webp" alt="Founder of HZ Digital Solutions seated in his office" width="1000" height="1333" fetchPriority="high" />
            <figcaption className="label">Founder<br />HZ Digital Solutions</figcaption>
          </figure>
        </div>
      </section>

      <section className="section" aria-labelledby="bio-title">
        <div className="wrap split">
          <div>
            <Reveal as="p" className="label">The business behind the website</Reveal>
            <h2 id="bio-title" className="section-title" data-reveal="mask"><Lines lines={['Design, technology', <em key="e">and a clear vision.</em>]} /></h2>
          </div>
          <Reveal className="prose" delay={0.1}>
            <p className="lead">Zain brings together creative direction, design and technology to help businesses build a distinctive digital presence. With a background in computer science and experience working with international clients, his work spans branding, website design and development, AI visuals and commercial content.</p>
            <p>At HZ Digital Solutions, that experience comes together in one place: thoughtful creative work, shaped around your business and its next chapter.</p>
            <div className="link-row">
              <a className="text-link" href="https://www.linkedin.com/in/zain-ul-abidin-7b5b76190/" target="_blank" rel="noopener noreferrer"><span>Connect with Zain on LinkedIn</span><ArrowUpRight size={16} /></a>
              <ArrowLink to="/contact">Tell us about your project</ArrowLink>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-raised" aria-labelledby="focus-title">
        <div className="wrap split">
          <div>
            <Reveal as="p" className="label">Our focus</Reveal>
            <h2 id="focus-title" className="section-title" data-reveal="mask"><Lines lines={['Creative work with', <em key="e">a clear purpose.</em>]} /></h2>
          </div>
          <Reveal className="prose" delay={0.1}>
            <p className="lead">Brand identities, websites, AI visuals, campaign creative, lyric videos and motion — built around your business.</p>
            <ArrowLink to="/services">Explore the services</ArrowLink>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
