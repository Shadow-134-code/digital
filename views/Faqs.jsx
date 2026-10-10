"use client";
import PageHero from '../components/PageHero'
import FaqList from '../components/FaqList'
import Reveal from '../components/Reveal'
import ArrowLink from '../components/ArrowLink'

export default function Faqs() {
  return <main>
    <PageHero eyebrow="FAQs" title={<>A FEW GOOD<br/><span>QUESTIONS.</span></>} copy="Answers about branding, websites, AI visuals, advertising, motion design and creative content." />
    <section className="page-section container narrow"><Reveal><FaqList /></Reveal></section>
    <section className="page-section section-muted"><div className="container two-col"><Reveal><div><div className="section-index">BEFORE WE START</div><h2>What makes a useful first message?</h2></div></Reveal><Reveal><div className="rich-copy"><p>Tell us what your business does, what you want to achieve, which services you need, any existing brand assets, and your intended audience or channels.</p><p>You do not need a complete specification. A clear description of the goal is enough to begin shaping the scope.</p></div></Reveal></div></section>
    <section className="page-section container statement-block"><Reveal><div className="section-index">STILL HAVE A QUESTION?</div><h2>Send us the details. We’ll help you work out the right scope.</h2><ArrowLink to="/contact">Contact HZ Digital Solutions</ArrowLink></Reveal></section>
  </main>
}
