"use client";
import { useLayoutEffect } from 'react'

// Runs on every page visit.
// Content already on screen animates in with CSS straight away; content further down
// waits (hidden) and is revealed once as it scrolls into view.
// Content added later (work filter, FAQ groups) is picked up too.
export default function Template({ children }) {
  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        entry.target.dataset.state = 'in'
        observer.unobserve(entry.target)
      })
    // The huge top margin means anything already scrolled past also counts, so a fast scroll
    // (or a jump to a link further down) can never leave content hidden above the screen.
    }, { rootMargin: '100000px 0px -10% 0px' })

    const scan = () => {
      const fold = window.innerHeight * 0.92
      document.querySelectorAll('[data-reveal]:not([data-state])').forEach(el => {
        if (el.getBoundingClientRect().top <= fold) { el.dataset.state = 'now'; return } // on screen: CSS entrance
        el.dataset.state = 'wait'
        observer.observe(el)
      })
    }
    scan()

    // New elements are checked before the browser paints them, so they never flash.
    const mutations = new MutationObserver(scan)
    mutations.observe(document.body, { childList: true, subtree: true })

    // Keyboard users tabbing ahead should never land on hidden content.
    const onFocus = e => {
      const el = e.target.closest?.('[data-state="wait"]')
      if (el) { el.dataset.state = 'in'; observer.unobserve(el) }
    }
    document.addEventListener('focusin', onFocus)
    return () => { observer.disconnect(); mutations.disconnect(); document.removeEventListener('focusin', onFocus) }
  }, [])

  return (
    <div className="page">
      <div className="route-line" aria-hidden="true" />
      {children}
    </div>
  )
}
