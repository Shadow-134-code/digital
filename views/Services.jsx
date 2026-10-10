"use client";
import ArrowLink from '../components/ArrowLink'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import ServiceCards from '../components/ServiceCards'

const details = [
  ['Discovery & strategy','Business goals, audience, page priorities and the actions the website should drive.'],
  ['Structure & UX','Sitemaps, page hierarchy, wireframe thinking and clear user journeys before visual polish.'],
  ['Responsive design','Layouts and interactions designed deliberately for desktop, tablet and mobile.'],
  ['Development & CMS','Practical builds with maintainable content, clean components and the functionality your project needs.'],
  ['Performance & essentials','Attention to speed, accessibility basics, on-page SEO structure and reliable responsive behavior.'],
  ['Launch & handoff','Final checks, deployment support and a site that is ready for real customers and future updates.'],
]

export default function Services() {
  return <main>
    <PageHero eyebrow="SERVICES" title={<>GOOD IDEAS.<br/><span>WELL BUILT.</span></>} copy="Branding, websites, AI visuals, campaign creative, motion and social content — connected by a clear creative direction." />
    <section className="page-section container">
      <Reveal><div className="section-index">CORE SERVICES</div><h2 className="section-title-spaced">One studio. Your complete creative presence.</h2></Reveal>
      <ServiceCards detail />
    </section>
    <section className="page-section section-muted"><div className="container"><Reveal><div className="section-index">OUR WEBSITE WORKFLOW</div><h2 className="section-title-spaced">From the first decision to the final handoff.</h2></Reveal><div className="value-grid service-inclusion-grid">{details.map((d,i)=><Reveal className="value-card" key={d[0]} delay={(i%3)*.04}><span>0{i+1}</span><h3>{d[0]}</h3><p>{d[1]}</p></Reveal>)}</div></div></section>
    <section className="page-section process-strip"><div className="container"><Reveal><div className="section-index light">THE PROCESS</div><h2>From first conversation to a finished creative experience.</h2></Reveal><div className="process-grid">{['Discover','Structure','Design','Build','Test','Launch'].map((x,i)=><Reveal key={x} className="process-step" delay={i*.05}><span>0{i+1}</span><strong>{x}</strong></Reveal>)}</div><div className="process-cta"><ArrowLink to="/contact">Discuss your project</ArrowLink></div></div></section>
  </main>
}
