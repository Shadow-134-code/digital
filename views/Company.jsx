"use client";
import ArrowLink from '../components/ArrowLink'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'

const values = [
  ['01','Clarity first','Organize information so visitors understand the business quickly and always know where to go next.'],
  ['02','Design with purpose','Use typography, motion and layout to strengthen the message instead of distracting from it.'],
  ['03','Built for real use','Create responsive websites that are practical to manage, browse and grow after launch.'],
]

export default function Company() {
  return <main>
    <PageHero eyebrow="COMPANY" title={<>A SMALL DIGITAL STUDIO.<br/><span>BUILT AROUND GOOD WORK.</span></>} copy="HZ Digital Solutions connects branding, website development and visual production in one focused creative studio." />
    <section className="page-section container two-col">
      <Reveal><div><div className="section-index">WHO WE ARE</div><h2>Clear thinking before decoration.</h2></div></Reveal>
      <Reveal><div className="rich-copy"><p>HZ Digital Solutions creates brand identities, responsive websites, AI visuals, commercial content, lyric videos, motion design and social graphics for businesses and artists.</p><p>From a cinematic idea to a complete online presence, every project starts with your audience and the story you want to tell.</p><p>Our work combines creative direction, technical thinking and careful execution. We shape the visual language, choose the right formats and refine the details together.</p></div></Reveal>
    </section>
    <section className="page-section section-muted">
      <div className="container"><Reveal><div className="section-index">WHAT GUIDES THE WORK</div><h2 className="section-title-spaced">Three principles carried through every project.</h2></Reveal><div className="value-grid">{values.map(v => <Reveal className="value-card" key={v[1]}><span>{v[0]}</span><h3>{v[1]}</h3><p>{v[2]}</p></Reveal>)}</div></div>
    </section>
    <section className="page-section container two-col founder-page-block">
      <Reveal className="founder-art"><img className="founder-photo" src="/founder.webp" alt="Founder of HZ Digital Solutions in his office" loading="lazy" /><div className="founder-caption">FOUNDER-LED<br/>DIGITAL STUDIO</div></Reveal>
      <Reveal className="founder-copy"><div className="section-index">THE APPROACH</div><h2>Thoughtful work.<br/>A personal approach.</h2><p>Good digital work starts with understanding the business behind it. We connect your goals, audience, offer and brand into one coherent creative experience rather than treating design and development as separate exercises.</p><p>That means fewer handoffs, clearer decisions and more attention to the details that shape the final experience.</p></Reveal>
    </section>
    <section className="page-section section-muted"><div className="container statement-block"><Reveal><div className="section-index">HOW WE WORK</div><h2>Strategy → Structure → Design → Development → Polish.</h2><p>One connected process from the first conversation through responsive testing and launch.</p><ArrowLink to="/contact">Tell us what you’re building</ArrowLink></Reveal></div></section>
  </main>
}
