"use client";
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowUpRight } from './Icons'

const items = [
  ['/work', 'Work'],
  ['/services', 'Services'],
  ['/company', 'Company'],
  ['/founder', 'Founder'],
  ['/faqs', 'FAQs'],
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [bar, setBar] = useState({ scrolled: false, hidden: false })
  const toggle = useRef(null)
  const isActive = to => pathname === to || pathname.startsWith(to + '/')

  useEffect(() => setOpen(false), [pathname])

  // Solid background once the page moves; tuck the bar away while reading, bring it back on scroll up.
  useEffect(() => {
    let last = window.scrollY
    let ticking = false
    const update = () => {
      const y = window.scrollY
      const delta = y - last
      setBar(prev => {
        const scrolled = y > 12
        let hidden = prev.hidden
        if (y < 160) hidden = false
        else if (delta > 6) hidden = true
        else if (delta < -6) hidden = false
        return prev.scrolled === scrolled && prev.hidden === hidden ? prev : { scrolled, hidden }
      })
      last = y
      ticking = false
    }
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update) } }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = e => { if (e.key === 'Escape') { setOpen(false); toggle.current?.focus() } }
    document.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = overflow; document.removeEventListener('keydown', onKey) }
  }, [open])

  return (
    <header className="site-header" data-scrolled={bar.scrolled} data-hidden={bar.hidden && !open} data-open={open}>
      <div className="wrap header-inner">
        <Link href="/" className="brand" aria-label="HZ Digital Solutions home">
          <img className="brand-mark" src="/hz-mark.webp" alt="" width="38" height="34" />
          <span className="brand-name">HZ Digital Solutions</span>
        </Link>

        <nav className="nav-desktop" aria-label="Primary">
          <ul>
            {items.map(([to, label]) => (
              <li key={to}>
                <Link href={to} className="nav-link" aria-current={isActive(to) ? 'page' : undefined}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link href="/contact" className="btn btn-sm nav-cta" aria-current={pathname === '/contact' ? 'page' : undefined}>
          Start a project
        </Link>

        <button
          ref={toggle}
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(v => !v)}
        >
          <span className="menu-toggle-label" aria-hidden="true">{open ? 'Close' : 'Menu'}</span>
          <span className="menu-toggle-icon" aria-hidden="true"><i /><i /></span>
        </button>
      </div>

      <div id="site-menu" className="menu-overlay" inert={!open}>
        <nav className="wrap menu-inner" aria-label="Mobile">
          <ol className="menu-list">
            {[...items, ['/contact', 'Contact']].map(([to, label], i) => (
              <li key={to} style={{ '--i': i }}>
                <Link href={to} aria-current={isActive(to) ? 'page' : undefined} onClick={() => setOpen(false)}>
                  <span className="menu-index">0{i + 1}</span>
                  {label}
                </Link>
              </li>
            ))}
          </ol>
          <div className="menu-foot">
            <a href="mailto:zain@hzdigitalsolutions.com">zain@hzdigitalsolutions.com</a>
            <a href="https://www.linkedin.com/in/zain-ul-abidin-7b5b76190/" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={14} /></a>
          </div>
        </nav>
      </div>
    </header>
  )
}
