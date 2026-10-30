import ContactForm from '../components/ContactForm'
import PageHero from '../components/PageHero'
import { ArrowUpRight } from '../components/Icons'

export default function Contact() {
  return (
    <main>
      <PageHero
        label="Contact"
        title={['Tell us about', <>your <em>project.</em></>]}
        copy="A website, a brand, a campaign or something new. Share the essentials and we’ll take it from there."
      />
      <section className="section section-tight" aria-label="Project enquiry">
        <div className="wrap contact-grid">
          <div className="contact-form-wrap enter enter-late">
            <ContactForm />
          </div>
          <aside className="contact-notes enter enter-late" aria-label="Before you write">
            <div className="note-block">
              <p className="label">Prefer email?</p>
              <a className="contact-mail" href="mailto:zain@hzdigitalsolutions.com">zain@hzdigitalsolutions.com <ArrowUpRight size={16} /></a>
            </div>
            <div className="note-block">
              <p className="label">Useful to include</p>
              <ul>
                <li>What your business does and who it’s for</li>
                <li>The work you need and where it will be used</li>
                <li>Brand assets or examples you like</li>
                <li>Your ideal timing</li>
              </ul>
            </div>
            <div className="note-block">
              <p className="label">What happens next</p>
              <p>We read your enquiry, ask anything we need to clarify, then send a clear scope and quote before any work begins.</p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
