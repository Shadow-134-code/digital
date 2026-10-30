import ArrowLink from '../components/ArrowLink'
import Lines from '../components/Lines'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionHead from '../components/SectionHead'

const values = [
  ['Clarity first', 'We organise information so visitors understand the business quickly and always know where to go next.'],
  ['Design with purpose', 'Typography, motion and layout strengthen the message instead of competing with it.'],
  ['Built for real use', 'Responsive work that is practical to manage, browse and grow after launch.'],
]

const flow = ['Strategy', 'Structure', 'Design', 'Development', 'Polish']

export default function Company() {
  return (
    <main>
      <PageHero
        label="Company"
        title={['A small studio,', <>built around <em>good work.</em></>]}
        copy="HZ Digital Solutions brings branding, website development and visual production into one focused studio, so the people shaping your brand also build it."
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
            <p className="lead">We create brand identities, websites, AI visuals, commercials, lyric videos, motion design and social graphics for businesses and artists.</p>
            <p>Every project starts with your audience and the story you want to tell, whether that becomes a cinematic film or a complete online presence.</p>
            <p>The work combines creative direction, technical thinking and careful execution. We shape the visual language, choose the right formats and refine the details with you.</p>
          </Reveal>
        </div>
      </section>

      <section className="section section-raised" aria-labelledby="values-title">
        <div className="wrap">
          <SectionHead id="values-title" label="What guides the work" title={['Three principles,', <em key="e">every project.</em>]} />
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

      <section className="section" aria-labelledby="approach-title">
        <div className="wrap split">
          <div>
            <Reveal as="p" className="label">The approach</Reveal>
            <h2 id="approach-title" className="section-title" data-reveal="mask"><Lines lines={['One team,', <em key="e">fewer handoffs.</em>]} /></h2>
          </div>
          <Reveal className="prose" delay={0.1}>
            <p className="lead">Good digital work starts with understanding the business behind it.</p>
            <p>We connect your goals, audience, offer and brand into one coherent experience, rather than treating design and development as separate jobs. That means clearer decisions and more attention on the details people actually notice.</p>
            <ol className="flow" aria-label="Our process">
              {flow.map((step, i) => <li key={step}><span>0{i + 1}</span>{step}</li>)}
            </ol>
            <ArrowLink to="/services">How we work</ArrowLink>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
