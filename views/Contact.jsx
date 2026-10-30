import ContactForm from '../components/ContactForm'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import Spotlight from '../components/Spotlight'
import { ArrowUpRight, FolderOpen, Mail, MessageSquare } from '../components/Icons'

export default function Contact() {
  return (
    <main>
      <PageHero
        label="Let’s talk"
        title={['Your next project.', <em key="e">Let’s make it happen.</em>]}
        copy="A website, a brand, a campaign or something entirely new. Tell us where you want to go."
      />
      <section className="section contact-page" aria-label="Project enquiry">
        <div className="contact-glow" aria-hidden="true" />
        <div className="wrap contact-studio-grid">
          <Reveal>
            <ContactForm />
          </Reveal>
          <Spotlight as="aside" className="contact-notes" aria-label="Project enquiry guidance">
            <Reveal className="contact-note" data-spot="" delay={0.1}>
              <span className="note-icon"><Mail size={20} /></span>
              <h2>Prefer email?</h2>
              <p>Send your brief directly. We’ll use your details to discuss your project.</p>
              <a href="mailto:zain@hzdigitalsolutions.com">zain@hzdigitalsolutions.com <ArrowUpRight size={16} /></a>
            </Reveal>
            <Reveal className="contact-note" data-spot="" delay={0.18}>
              <span className="note-icon"><FolderOpen size={20} /></span>
              <h2>A useful starting point</h2>
              <ul>
                <li>Your business and audience</li>
                <li>The work you need and where it will be used</li>
                <li>Brand assets or examples you like</li>
                <li>Your preferred timing</li>
              </ul>
              <p>No finished brief yet? Start with your idea.</p>
            </Reveal>
            <Reveal className="contact-note" data-spot="" delay={0.26}>
              <span className="note-icon"><MessageSquare size={20} /></span>
              <h2>What happens next</h2>
              <p>We review your enquiry, clarify the details and agree the scope before work begins.</p>
              <div className="contact-disciplines">
                <span>Web &amp; WordPress</span><span>Branding</span><span>AI visuals</span><span>Video &amp; motion</span><span>Campaigns</span>
              </div>
            </Reveal>
          </Spotlight>
        </div>
      </section>
    </main>
  )
}
