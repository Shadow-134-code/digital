"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowUp, ArrowUpRight, Mail } from './Icons'
import Lines from './Lines'
import Reveal from './Reveal'
import Spotlight from './Spotlight'
import { contactLink, navLinks } from '../data/site'

// Same links as the menu (data/site.js), plus Contact.
const links = [...navLinks, contactLink]

export default function Footer() {
  const pathname = usePathname()
  const toTop = () => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })

  return (
    <footer className="site-footer">
      {pathname !== '/contact' && (
        <section className="cta-band" aria-labelledby="cta-title">
          <div className="wrap">
            <Spotlight>
              <Reveal className="cta-panel" data-spot="">
                <span className="cta-light" aria-hidden="true" />
                <img className="cta-mark" src="/hz-mark.webp" alt="" width="160" height="142" loading="lazy" aria-hidden="true" />
                <div className="cta-inner">
                  <p className="label">Start a project</p>
                  <h2 id="cta-title" className="cta-title" data-reveal="mask">
                    <Lines lines={['Have something in mind?', <em key="e">Let’s make it real.</em>]} />
                  </h2>
                  <div className="cta-side">
                    <p>Tell us what you’re planning, even if it’s only an idea. We’ll help you shape the right next step.</p>
                    <div className="cta-actions">
                      <Link href="/contact" className="btn">Start a project <ArrowUpRight size={18} /></Link>
                      <a className="cta-mail" href="mailto:zain@hzdigitalsolutions.com"><Mail size={16} /> zain@hzdigitalsolutions.com</a>
                    </div>
                  </div>
                  <ul className="cta-tags" aria-label="What we work on">
                    <li>Brand identity</li><li>Websites</li><li>AI visuals</li><li>Video &amp; motion</li><li>Campaigns</li>
                  </ul>
                </div>
              </Reveal>
            </Spotlight>
          </div>
        </section>
      )}

      <div className="wrap footer-main">
        <div className="footer-brand">
          <Link href="/" className="brand brand--lg" aria-label="HZ Digital Solutions home">
            <img className="brand-mark" src="/hz-mark.webp" alt="" width="160" height="142" loading="lazy" />
            <span className="brand-name">HZ DIGITAL<span>SOLUTIONS</span></span>
          </Link>
          <p>A founder-led studio for brand identity, websites, AI visuals and motion.</p>
        </div>
        <nav className="footer-col" aria-label="Footer">
          <p className="label">Explore</p>
          <ul>{links.map(([to, label]) => <li key={to}><Link href={to}>{label}</Link></li>)}</ul>
        </nav>
        <div className="footer-col">
          <p className="label">Contact</p>
          <ul>
            <li><a href="mailto:zain@hzdigitalsolutions.com">zain@hzdigitalsolutions.com</a></li>
            <li><a href="https://www.linkedin.com/in/zain-ul-abidin-7b5b76190/" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={14} /></a></li>
          </ul>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} HZ Digital Solutions</span>
        <nav aria-label="Legal">
          <Link href="/terms-of-service">Terms of service</Link>
          <Link href="/privacy-policy">Privacy policy</Link>
        </nav>
        <button type="button" className="to-top" onClick={toTop}>Back to top <ArrowUp size={14} /></button>
      </div>
    </footer>
  )
}
