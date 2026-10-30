import ArrowLink from '../components/ArrowLink'
import FaqList from '../components/FaqList'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { faqGroups } from '../data/site'

export default function Faqs() {
  return (
    <main>
      <PageHero
        label="FAQs"
        title={['A few good', <em key="e">questions.</em>]}
        copy="Straight answers about pricing, timelines, branding, websites, video and how we work together."
      />
      <section className="section section-tight" aria-label="Frequently asked questions">
        <div className="wrap faq-layout">
          <Reveal as="aside" className="faq-aside">
            <nav aria-label="FAQ topics">
              <p className="label">Topics</p>
              <ul>{faqGroups.map(g => <li key={g.id}><a href={`#${g.id}`}>{g.label}</a></li>)}</ul>
            </nav>
            <div className="faq-help">
              <p className="label">Still unsure?</p>
              <p>Send us a short note about your business, your goal and the service you need. A full brief isn’t required.</p>
              <ArrowLink to="/contact">Ask us directly</ArrowLink>
            </div>
          </Reveal>
          <FaqList />
        </div>
      </section>
    </main>
  )
}
