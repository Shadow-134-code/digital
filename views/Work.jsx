"use client";
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import ArrowLink from '../components/ArrowLink'
import PortfolioSections from '../components/PortfolioSections'

export default function Work() {
  return <main>
    <PageHero eyebrow="OUR WORK" title={<>VISUAL STORIES.<br/><span>DIGITAL EXPERIENCES.</span></>} copy="Explore commercial films, original thumbnail artwork and selected website designs." />
    <section className="page-section container">
      <Reveal><div className="section-index">SELECTED DIRECTIONS</div><h2 className="section-title-spaced">Original visuals. Considered digital design.</h2></Reveal>
      <PortfolioSections expanded />
    </section>
    <section className="page-section section-muted"><div className="container two-col"><Reveal><div><div className="section-index">OUR APPROACH TO WORK</div><h2>Different category. Same standard of clarity.</h2></div></Reveal><Reveal><div className="rich-copy"><p>Every industry communicates differently. A construction company needs trust and capability. A hospitality brand needs atmosphere and confidence. An ecommerce store needs product clarity and an easy path to purchase.</p><p>We use the same core process — understand, structure, design, build and refine — while changing the visual language and content hierarchy to suit the business.</p><ArrowLink to="/services">See our services</ArrowLink></div></Reveal></div></section>
    <section className="page-section container statement-block"><Reveal><div className="section-index">HAVE A PROJECT IN MIND?</div><h2>Your site should look like your business — not a template with your logo added.</h2><ArrowLink to="/contact">Discuss your website</ArrowLink></Reveal></section>
  </main>
}
