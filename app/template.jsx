"use client";
import { useLayoutEffect } from 'react'

// Runs on every page visit.
// Content already on screen animates in with CSS straight away; content further down
// waits (hidden) and is revealed once as it scrolls into view. One observer, no scroll listeners.
export default function Template({ children }) {
  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return
    const fold = window.innerHeight * 0.94
    const pending = [...document.querySelectorAll('[data-reveal]:not([data-state])')]
      .filter(el => el.getBoundingClientRect().top > fold)
    pending.forEach(el => { el.dataset.state = 'wait' })

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        entry.target.dataset.state = 'in'
        observer.unobserve(entry.target)
      })
    }, { rootMargin: '0px 0px -8% 0px' })
    pending.forEach(el => observer.observe(el))

    // Keyboard users tabbing ahead should never land on hidden content.
    const onFocus = e => {
      const el = e.target.closest?.('[data-state="wait"]')
      if (el) { el.dataset.state = 'in'; observer.unobserve(el) }
    }
    document.addEventListener('focusin', onFocus)
    return () => { observer.disconnect(); document.removeEventListener('focusin', onFocus) }
  }, [])

  return (
    <div className="page">
      <div className="route-line" aria-hidden="true" />
      {children}
    </div>
  )
}
