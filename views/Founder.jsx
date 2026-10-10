"use client";
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import ArrowLink from '../components/ArrowLink'
export default function Founder(){return <main>
<PageHero eyebrow="THE FOUNDER" title={<>ZAIN-UL-ABIDIN.<br/><span>CREATIVE DIRECTION.</span></>} copy="Creative entrepreneur · Co-founder of HZ & Boltz"/>
<section className="page-section container founder-grid">
<Reveal className="founder-art"><img className="founder-photo" src="/founder.webp" alt="Founder of HZ Digital Solutions seated in his office"/><div className="founder-caption">FOUNDER<br/>HZ DIGITAL SOLUTIONS</div></Reveal>
<Reveal className="founder-copy"><div className="section-index">THE BUSINESS BEHIND THE WEBSITE</div><h2>Design, technology<br/>and a clear vision.</h2><p>Zain brings together creative direction, design and technology to help businesses build a distinctive digital presence. With a background in computer science and experience working with international clients, his work spans branding, website design and development, AI visuals and commercial content.</p><p>At HZ Digital Solutions, that experience comes together in one place: thoughtful creative work, shaped around your business and its next chapter.</p><a className="linkedin-link" href="https://www.linkedin.com/in/zain-ul-abidin-7b5b76190/" target="_blank" rel="noreferrer">Connect with Zain on LinkedIn ↗</a><ArrowLink to="/contact">Tell us about your project</ArrowLink></Reveal>
</section>
<section className="page-section section-muted"><div className="container statement-block"><Reveal><div className="section-index">OUR FOCUS</div><h2>Creative work with a clear purpose.</h2><p>Brand identities, websites, AI visuals, campaign creative, lyric videos and motion — built around your business.</p><ArrowLink to="/services">Explore the services</ArrowLink></Reveal></div></section>
</main>}
