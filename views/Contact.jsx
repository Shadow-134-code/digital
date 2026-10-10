"use client";
import { ArrowUpRight, Mail, FolderOpen, MessageSquare } from 'lucide-react'
import PageHero from '../components/PageHero'
import ContactForm from '../components/ContactForm'
import Reveal from '../components/Reveal'

export default function Contact() {
  return <main>
    <PageHero eyebrow="LET’S TALK" title={<>YOUR NEXT PROJECT.<br/><span>LET’S MAKE IT HAPPEN.</span></>} copy="A website, a brand, a campaign or something entirely new. Tell us where you want to go." />
    <section className="page-section contact-page">
      <div className="container contact-studio-grid">
        <Reveal><ContactForm /></Reveal>
        <aside className="contact-notes" aria-label="Project enquiry guidance">
          <Reveal className="contact-note"><Mail size={21} aria-hidden="true" /><h2>Prefer email?</h2><p>Send your brief directly. We’ll use your details to discuss your project.</p><a href="mailto:zain@hzdigitalsolutions.com">zain@hzdigitalsolutions.com <ArrowUpRight size={16} /></a></Reveal>
          <Reveal className="contact-note" delay={.04}><FolderOpen size={21} aria-hidden="true" /><h2>A useful starting point</h2><ul><li>Your business and audience</li><li>The work you need and where it will be used</li><li>Brand assets or examples you like</li><li>Your preferred timing</li></ul><p>No finished brief yet? Start with your idea.</p></Reveal>
          <Reveal className="contact-note" delay={.08}><MessageSquare size={21} aria-hidden="true" /><h2>What happens next</h2><p>We review your enquiry, clarify the details and agree the scope before work begins.</p><div className="contact-disciplines"><span>Web & WordPress</span><span>Branding</span><span>AI visuals</span><span>Video & motion</span><span>Campaigns</span></div></Reveal>
        </aside>
      </div>
    </section>
  </main>
}
