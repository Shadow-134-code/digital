import Link from 'next/link'
import Lines from '../components/Lines'
import Reveal from '../components/Reveal'

const terms = [
  ['Using this website', 'This website presents the work and services of HZ Digital Solutions. Please use it lawfully, respect others’ rights and do not attempt to interfere with its operation or security.'],
  ['Enquiries and project agreements', 'Submitting an enquiry does not create a service contract. Each project is governed by a separately agreed scope covering deliverables, schedule, fees, revisions and responsibilities. That agreement takes priority for the project.'],
  ['Content and intellectual property', 'Website content, branding and portfolio material may be owned by HZ Digital Solutions, clients or other rights holders. Viewing the portfolio does not grant permission to copy, redistribute or commercially reuse it. Ownership and usage rights for commissioned work are set out in the project agreement.'],
  ['Materials you provide', 'You are responsible for having the rights and permission to share any materials you send us. Please do not submit confidential or sensitive information through the initial enquiry form.'],
  ['Portfolio and external links', 'Portfolio examples illustrate creative work and do not promise a specific business outcome. External websites and services have their own terms and policies.'],
  ['Website availability', 'We aim to keep this website accurate and available, but information may change and interruptions can occur. Nothing here excludes rights or responsibilities that cannot lawfully be excluded.'],
  ['Updates and contact', 'We may update these website terms as our services or website change. For questions, contact zain@hzdigitalsolutions.com.'],
]

const privacy = [
  ['Information you share', 'When you contact us, we receive the details you enter in the enquiry form, such as your name, email address, company, the services you need, optional assets link and message. You may also contact us directly by email. Please avoid submitting sensitive personal information.'],
  ['How we use it', 'We use enquiry information to respond, understand your requirements and discuss potential work. If a project proceeds, we may use relevant information to deliver and administer that project.'],
  ['Providers that support this website', 'The website is hosted on Vercel. Enquiry submissions are processed through FormSubmit and delivered by email. These providers may process technical information necessary to operate and secure their services. Their privacy notices explain their own processing: vercel.com/legal/privacy-notice and formsubmit.co/privacy.pdf.'],
  ['Videos, fonts and analytics', 'Portfolio videos and fonts are served directly with this website. We do not embed Google Drive video players. This version does not include a dedicated analytics or advertising tracking tool. Your browser and hosting infrastructure still exchange technical data needed to deliver the site.'],
  ['Retention and security', 'We retain enquiry and project information as needed to respond, support our business relationship and meet applicable obligations. We take reasonable care with information, although no online service can guarantee absolute security.'],
  ['Your choices', 'You can ask about the information you have provided or request correction or deletion by emailing zain@hzdigitalsolutions.com. We will consider your request and any applicable legal or operational requirements.'],
  ['External links and updates', 'Links to other websites take you to services with their own privacy practices. We may update this notice when the website or our practices change.'],
]

export default function Legal({ privacyPage = false }) {
  const sections = privacyPage ? privacy : terms
  return (
    <main>
      <section className="page-hero page-hero--compact">
        <div className="wrap">
          <p className="label enter">Legal</p>
          <h1 className="page-title enter-lines"><Lines lines={privacyPage ? [<>Privacy <em>policy.</em></>] : [<>Terms of <em>service.</em></>]} /></h1>
          <p className="legal-updated enter enter-late">Last updated 11 October 2026</p>
        </div>
      </section>
      <section className="section section-tight">
        <div className="wrap legal-layout">
          <ol className="legal-content">
            {sections.map(([title, text], i) => (
              <Reveal as="li" key={title} delay={i < 3 ? 0.3 + i * 0.08 : 0}>
                <span className="legal-num">{String(i + 1).padStart(2, '0')}</span>
                <div><h2>{title}</h2><p>{text}</p></div>
              </Reveal>
            ))}
          </ol>
          <Reveal as="aside" className="legal-aside" delay={0.4}>
            <p>Questions about this page? <a href="mailto:zain@hzdigitalsolutions.com">Email us</a>.</p>
            <Link href={privacyPage ? '/terms-of-service' : '/privacy-policy'} className="text-link">
              <span>{privacyPage ? 'Read the terms of service' : 'Read the privacy policy'}</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
