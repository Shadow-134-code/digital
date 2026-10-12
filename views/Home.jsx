"use client";
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import ArrowLink from '../components/ArrowLink'
import Reveal from '../components/Reveal'
import SectionHead from '../components/SectionHead'
import FaqList from '../components/FaqList'
import ContactForm from '../components/ContactForm'
import CreativeShowcase from '../components/CreativeShowcase'
import ServiceMarquee from '../components/ServiceMarquee'
import ServiceCards from '../components/ServiceCards'
import PortfolioSections from '../components/PortfolioSections'

export default function Home() {
  return (
    <main>
      <section className="hero container">
        <div className="hero-kicker">HZ DIGITAL SOLUTIONS</div>
        <h1>
          <motion.span initial={{ y: 36, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .7, ease: [0.22,1,0.36,1] }}>DISTINCTIVE DESIGN.</motion.span>
          <motion.span initial={{ y: 36, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .7, delay: .12, ease: [0.22,1,0.36,1] }}>UNFORGETTABLE VISUALS.</motion.span>
          <motion.span className="outline" initial={{ y: 36, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .7, delay: .24, ease: [0.22,1,0.36,1] }}>BUILT FOR YOUR BRAND.</motion.span>
        </h1>
        <div className="hero-bottom">
          <p>Branding, websites, AI visuals and motion.<br/>Original ideas. A distinctive digital presence.</p>
          <div className="hero-actions"><Link href="/work" className="hero-primary">Explore our work <span aria-hidden="true">↘</span></Link><Link href="/contact" className="hero-secondary">Build with HZ <span aria-hidden="true">↗</span></Link></div>
        </div>

        <CreativeShowcase />
        <ServiceMarquee />
      </section>

      <section className="section container" id="company">
        <Reveal><SectionHead eyebrow="THE COMPANY" title="A digital presence that feels like you." copy="HZ Digital Solutions brings strategy, design and development together to help businesses show up with confidence online." /></Reveal>
        <div className="company-grid">
          <Reveal className="company-copy"><p>From a distinctive identity to a cinematic visual, a commercial or a complete WordPress experience, we connect clear communication with considered craft. One creative partner across the moments that shape how people see your brand.</p><ArrowLink to="/company">More about HZ</ArrowLink></Reveal>
          <div className="principles">
            {['Clarity first', 'Design with purpose', 'Built for real use'].map((x,i) => <Reveal delay={i*.08} key={x} className="principle"><span>0{i+1}</span><strong>{x}</strong></Reveal>)}
          </div>
        </div>
      </section>

      <section className="section section-muted" id="services">
        <div className="container">
          <Reveal><SectionHead eyebrow="WHAT WE DO" title="Good ideas. Well built." copy="From your first brand impression to your next campaign, we connect design, development and creative production." /></Reveal>
          <ServiceCards />
          <div className="section-action"><ArrowLink to="/services">Explore all services</ArrowLink></div>
        </div>
      </section>

      <section className="section container" id="work">
        <Reveal><SectionHead eyebrow="THE PORTFOLIO" title="Visual stories. Digital experiences." copy="Commercial films, original thumbnail artwork and selected website designs." /></Reveal>
        <PortfolioSections />
        <div className="section-action"><ArrowLink to="/work">View all work</ArrowLink></div>
      </section>

      <section className="section founder-section" id="founder">
        <div className="container founder-grid">
          <Reveal className="founder-art"><img className="founder-photo" src="/founder.webp" alt="Founder of HZ Digital Solutions in his office" loading="lazy" /><div className="founder-caption">FOUNDER-LED<br/>DIGITAL STUDIO</div></Reveal>
          <Reveal className="founder-copy"><div className="section-index">THE FOUNDER</div><h2>Zain-ul-Abidin.<br/>Creative by nature.</h2><p>Creative entrepreneur · Co-founder of HZ & Boltz</p><p>Zain brings together creative direction, design and technology to help businesses build a distinctive digital presence.</p><p>With a background in computer science and experience working with international clients, his work spans branding, website design and development, AI visuals and commercial content.</p><p>At HZ Digital Solutions, that experience comes together in one place: thoughtful creative work, shaped around your business and its next chapter.</p><ArrowLink to="/founder">Meet the founder</ArrowLink><a className="linkedin-link" href="https://www.linkedin.com/in/zain-ul-abidin-7b5b76190/" target="_blank" rel="noreferrer">Connect on LinkedIn ↗</a></Reveal>
        </div>
      </section>

      <section className="section container" id="faqs">
        <Reveal><SectionHead eyebrow="A FEW GOOD QUESTIONS" title="Your questions, answered." copy="A little clarity before we start." /></Reveal>
        <Reveal><FaqList compact /></Reveal>
        <div className="section-action"><ArrowLink to="/faqs">See all FAQs</ArrowLink></div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="container">
          <Reveal className="contact-heading-wrap">
            <div className="section-index light">LET’S CONNECT</div>
            <div className="contact-heading-grid">
              <h2 className="contact-title">YOUR NEXT CHAPTER<br/><span>STARTS HERE.</span></h2>
              <p className="contact-heading-copy">Have an idea, an old website that needs a rethink, or a business ready for a stronger digital presence? Tell us what you need and we’ll help shape the right next step.</p>
            </div>
          </Reveal>
          <div className="contact-grid">
            <Reveal className="contact-intro"><p>Start with the essentials. We can work through the structure, design and build together.</p><a href="mailto:zain@hzdigitalsolutions.com">zain@hzdigitalsolutions.com <ArrowUpRight size={16}/></a></Reveal>
            <Reveal><ContactForm /></Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}

