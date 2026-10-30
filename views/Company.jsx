import ArrowLink from '../components/ArrowLink'
import Lines from '../components/Lines'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionHead from '../components/SectionHead'

const values = [
  ['Clarity first', 'Organize information so visitors understand the business quickly and always know where to go next.'],
  ['Design with purpose', 'Use typography, motion and layout to strengthen the message instead of distracting from it.'],
  ['Built for real use', 'Create responsive websites that are practical to manage, browse and grow after launch.'],
]

const flow = ['Strategy', 'Structure', 'Design', 'Development', 'Polish']

export default function Company() {
  return (
    <main>
      <PageHero
        label="Company"
        title={['A small digital studio.', <em key="e">Built around good work.</em>]}
        copy="HZ Digital Solutions connects branding, website development and visual production in one focused creative studio."
      />

      <section className="media-strip" aria-label="Examples of our work">
        <div className="wrap media-strip-grid">
          <Reveal variant="media" className="strip-item strip-tall"><img src="/work/lumina.webp" alt="Lumina Home online store design" width="768" height="1376" /></Reveal>
          <Reveal variant="media" delay={0.08} className="strip-item strip-wide"><img src="/videos/service-promo.webp" alt="Frame from a service promotion film" width="1280" height="720" /></Reveal>
          <Reveal variant="media" delay={0.16} className="strip-item strip-wide strip-low"><img src="/creative/reference/artwork-02.webp" alt="Never Just Friends thumbnail artwork" width="720" height="405" /></Reveal>
        </div>
      </section>

      <section className="section" aria-labelledby="who-title">
        <div className="wrap split">
          <div>
            <Reveal as="p" className="label">Who we are</Reveal>
            <h2 id="who-title" className="section-title" data-reveal="mask"><Lines lines={['Clear thinking', <em key="e">before decoration.</em>]} /></h2>
          </div>
          <Reveal className="prose" delay={0.1}>
            <p className="lead">HZ Digital Solutions creates brand identities, responsive websites, AI visuals, commercial content, lyric videos, motion design and social graphics for businesses and artists.</p>
            <p>From a cinematic idea to a complete online presence, every project starts with your audience and the story you want to tell.</p>
            <p>Our work combines creative direction, technical thinking and careful execution. We shape the visual language, choose the right formats and refine the details together.</p>
          </Reveal>
        </div>
      </section>

      <section className="section section-raised" aria-labelledby="values-title">
        <div className="wrap">
          <SectionHead id="values-title" label="What guides the work" title={['Three principles carried', <em key="e">through every project.</em>]} />
          <ol className="principles principles--large">
            {values.map(([title, text], i) => (
              <Reveal as="li" key={title} delay={i * 0.08}>
                <span className="principle-num">0{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section founder-teaser" aria-labelledby="approach-title">
        <div className="wrap founder-teaser-grid">
          <Reveal variant="media" className="portrait">
            <img src="/founder.webp" alt="Founder of HZ Digital Solutions in his office" width="1000" height="1333" loading="lazy" />
            <p className="portrait-caption label">Founder-led<br />digital studio</p>
          </Reveal>
          <div className="founder-teaser-copy">
            <Reveal as="p" className="label">The approach</Reveal>
            <h2 id="approach-title" className="section-title" data-reveal="mask"><Lines lines={['Thoughtful work.', <em key="e">A personal approach.</em>]} /></h2>
            <Reveal delay={0.1}>
              <p className="lead">Good digital work starts with understanding the business behind it. We connect your goals, audience, offer and brand into one coherent creative experience rather than treating design and development as separate exercises.</p>
              <p>That means fewer handoffs, clearer decisions and more attention to the details that shape the final experience.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-raised" aria-labelledby="how-title">
        <div className="wrap split">
          <div>
            <Reveal as="p" className="label">How we work</Reveal>
            <h2 id="how-title" className="section-title" data-reveal="mask"><Lines lines={['One connected', <em key="e">process.</em>]} /></h2>
          </div>
          <Reveal className="prose" delay={0.1}>
            <ol className="flow" aria-label="Our process">
              {flow.map((step, i) => <li key={step}><span>0{i + 1}</span>{step}</li>)}
            </ol>
            <p className="lead">One connected process from the first conversation through responsive testing and launch.</p>
            <ArrowLink to="/contact">Tell us what you’re building</ArrowLink>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
