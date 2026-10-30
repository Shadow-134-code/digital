"use client";
import Link from 'next/link'
import ProjectSelect from './ProjectSelect'
import { useId, useRef, useState } from 'react'
import { ArrowUpRight, Check, LinkIcon, Mail } from './Icons'

const FALLBACK_ENDPOINT = 'https://formsubmit.co/ajax/zain@hzdigitalsolutions.com'

export default function ContactForm() {
  const inFlight = useRef(false)
  const assetsHint = useId()
  const [emailFallback, setEmailFallback] = useState('mailto:zain@hzdigitalsolutions.com')
  const [projectType, setProjectType] = useState('Website design')
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    if (inFlight.current) return
    inFlight.current = true
    setStatus('sending')
    setMessage('')
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    if (data._honey) { inFlight.current = false; setStatus('idle'); return }
    const body = [data.name, data.email, data.company, 'Project: ' + data.projectType, data.file_link ? 'Assets: ' + data.file_link : '', '', data.message].filter(Boolean).join('\n')
    setEmailFallback('mailto:zain@hzdigitalsolutions.com?subject=' + encodeURIComponent('HZ Digital Solutions project enquiry') + '&body=' + encodeURIComponent(body))
    const endpoint = FALLBACK_ENDPOINT

    const controller = new AbortController()
    const timeout = window.setTimeout(() => controller.abort(), 20000)
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        signal: controller.signal,
        credentials: 'omit',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        // Only send intended fields, never arbitrary provider configuration fields.
        body: JSON.stringify({ name: data.name, email: data.email, company: data.company, projectType: data.projectType, file_link: data.file_link, message: data.message, _honey: data._honey, _subject: 'New HZ Digital Solutions website enquiry' }),
      })
      const result = await response.json()
      if (!response.ok || ![true, 'true'].includes(result.success)) throw new Error('Submission failed')
      form.reset(); setProjectType('Website design')
      setStatus('sent')
      setMessage('Thanks — your enquiry has been submitted.')
    } catch {
      setStatus('error')
      setMessage('Your enquiry could not be submitted. Your details are still here—please try again or email your brief below.')
    } finally {
      window.clearTimeout(timeout)
      inFlight.current = false
    }
  }

  return (
    <form className="contact-form" method="post" action="/contact" onSubmit={submit} aria-busy={status === 'sending'}>
      {/* POST prevents personal details entering the URL if JavaScript fails. */}
      <noscript><p className="field-full">Please enable JavaScript to send this form, or email zain@hzdigitalsolutions.com directly.</p></noscript>
      <div className="form-heading field-full">
        <p className="form-kicker">Your brief</p>
        <h2>Tell us what you have in mind.</h2>
        <p>A few details are all we need to start the conversation.</p>
      </div>
      <div className="form-trap" aria-hidden="true"><label>Leave this field empty<input name="_honey" tabIndex={-1} autoComplete="off" /></label></div>
      <label className="field">
        <span className="field-label">Your name</span>
        <input name="name" maxLength={100} required placeholder="Your name" autoComplete="name" />
      </label>
      <label className="field">
        <span className="field-label">Your email</span>
        <input name="email" maxLength={254} required type="email" placeholder="you@company.com" autoComplete="email" />
      </label>
      <label className="field">
        <span className="field-label">Company / brand</span>
        <input name="company" maxLength={150} placeholder="Company name" autoComplete="organization" />
      </label>
      <ProjectSelect value={projectType} onChange={setProjectType} />
      <label className="field field-full">
        <span className="field-label"><LinkIcon size={15} /> Link to your assets <small>(optional)</small></span>
        <input name="file_link" type="url" maxLength={2048} placeholder="https://drive.google.com/..." aria-describedby={assetsHint} onInput={e => {
          const input = e.currentTarget
          let valid = !input.value.trim()
          try { valid = ['https:', 'http:'].includes(new URL(input.value.trim()).protocol) } catch { /* Native validity handles incomplete URLs. */ }
          input.setCustomValidity(valid ? '' : 'Please enter a complete https:// or http:// link.')
        }} />
        <small className="field-help" id={assetsHint}>Share a Google Drive, Dropbox or other link to your logo, brand guidelines, images or brief. For private files, grant viewer access to zain@hzdigitalsolutions.com. You can send assets later, too.</small>
      </label>
      <label className="field field-full">
        <span className="field-label">Tell us about your project</span>
        <textarea name="message" maxLength={5000} required rows="6" placeholder="Tell us about your idea, audience, deliverables and timing." />
      </label>
      <div className="form-bottom field-full">
        <p>FormSubmit processes your details and emails them to us to respond to your enquiry. Please do not include passwords, payment details or sensitive personal information. <Link href="/privacy-policy">Privacy policy</Link></p>
        <button type="submit" className="btn submit-button" disabled={status === 'sending'}>
          <span>{status === 'sending' ? 'Sending…' : 'Send enquiry'}</span>
          {status === 'sent' ? <Check size={18} /> : <ArrowUpRight size={18} />}
        </button>
      </div>
      {message && (
        <div className={`form-feedback field-full is-${status}`}>
          <p role="status" aria-live="polite">{message}</p>
          {status === 'error' && <a className="text-link" href={emailFallback}><Mail size={16} /> Email this enquiry instead</a>}
        </div>
      )}
    </form>
  )
}
