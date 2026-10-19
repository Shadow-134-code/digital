"use client";
import { useLayoutEffect, useRef } from 'react'

// One observer per route. No scroll listeners, full-page layers or scroll interception.
export default function Template({ children }) {
  const root = useRef(null)
  useLayoutEffect(() => {
    const scope = root.current
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const selector = '.hz-reveal, .portfolio-nav, .portfolio-category-heading, .partnership-note, .section-action, .process-cta, .creative-stage, .legal-content > section, .legal-content > p, .hz-faq-row'
    const candidates = [...scope.querySelectorAll(selector)].filter(el => {
      // FAQ rows reveal independently instead of animating one very tall list.
      if (el.classList.contains('hz-reveal') && el.querySelector('.hz-faq')) {
        el.dataset.revealState = 'done'
        return false
      }
      return true
    })
    const candidateSet = new Set(candidates)
    const elements = candidates.filter(el => {
      for (let parent = el.parentElement; parent && parent !== scope; parent = parent.parentElement) {
        if (candidateSet.has(parent)) return false
      }
      return true
    })
    let observer
    let loopObserver
    const loops = [...scope.querySelectorAll('.creative-stage, .crossed-strips')]
    const show = (el, delay = 0) => {
      el.style.setProperty('--reveal-delay', `${delay}s`)
      el.dataset.revealState = 'visible'
      observer?.unobserve(el)
    }
    const revealAll = () => {
      observer?.disconnect()
      loopObserver?.disconnect()
      elements.forEach(el => { el.dataset.revealState = 'done' })
      loops.forEach(el => el.classList.remove('motion-offscreen'))
    }
    if (!media.matches && 'IntersectionObserver' in window) {
      elements.forEach(el => {
        el.dataset.revealKind = el.matches('.founder-art, .creative-stage, .video-card') ? 'media' : 'content'
        el.dataset.revealState = 'waiting'
      })
      observer = new IntersectionObserver(entries => {
        const visible = entries.filter(entry => entry.isIntersecting).sort((a,b) => a.boundingClientRect.top - b.boundingClientRect.top || a.boundingClientRect.left - b.boundingClientRect.left)
        visible.forEach((entry, index) => {
          // Start as content enters the viewport; avoid a second loading-like pause.
          show(entry.target, Math.min(index * .045 + Number(entry.target.dataset.revealDelay || 0), .18))
        })
      }, { threshold: 0, rootMargin: '0px 0px 24px 0px' })
      elements.forEach(el => observer.observe(el))
      loopObserver = new IntersectionObserver(entries => entries.forEach(entry => entry.target.classList.toggle('motion-offscreen', !entry.isIntersecting)), { rootMargin: '80px' })
      loops.forEach(el => loopObserver.observe(el))
    }
    const onFocus = event => {
      const el = event.target.closest('[data-reveal-state]')
      if (el) { show(el); el.dataset.revealState = 'done' }
    }
    const onEnd = event => {
      if (['content-arrive', 'media-arrive'].includes(event.animationName)) event.target.dataset.revealState = 'done'
    }
    const onPreference = () => { if (media.matches) revealAll() }
    scope.addEventListener('focusin', onFocus)
    scope.addEventListener('animationend', onEnd)
    media.addEventListener('change', onPreference)
    return () => {
      revealAll()
      scope.removeEventListener('focusin', onFocus)
      scope.removeEventListener('animationend', onEnd)
      media.removeEventListener('change', onPreference)
    }
  }, [])
  return <div ref={root} className="page-arrival">{children}</div>
}
