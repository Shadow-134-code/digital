"use client";
import { useEffect, useRef } from 'react'

// A small "View" / "Play" label that follows the pointer over work previews.
// Mouse and trackpad only; touch screens never see it.
export default function CursorBadge() {
  const ref = useRef(null)

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)')
    if (!fine.matches) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    const el = ref.current
    let x = 0, y = 0, tx = 0, ty = 0, raf = 0, active = false

    const paint = () => { el.style.transform = `translate3d(${x}px, ${y}px, 0)` }
    const tick = () => {
      x += (tx - x) * 0.2
      y += (ty - y) * 0.2
      paint()
      raf = Math.abs(tx - x) > 0.2 || Math.abs(ty - y) > 0.2 ? requestAnimationFrame(tick) : 0
    }
    const onMove = e => {
      tx = e.clientX
      ty = e.clientY
      const target = e.target instanceof Element ? e.target.closest('[data-cursor]') : null
      if (target) {
        if (!active) { x = tx; y = ty; paint() }
        el.textContent = target.dataset.cursor
        el.dataset.visible = 'true'
        active = true
      } else if (active) {
        el.dataset.visible = 'false'
        active = false
      }
      if (reduce.matches) { x = tx; y = ty; paint(); return }
      if (!raf) raf = requestAnimationFrame(tick)
    }
    const hide = () => { el.dataset.visible = 'false'; active = false }

    window.addEventListener('pointermove', onMove, { passive: true })
    document.documentElement.addEventListener('pointerleave', hide)
    window.addEventListener('scroll', hide, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      document.documentElement.removeEventListener('pointerleave', hide)
      window.removeEventListener('scroll', hide)
      cancelAnimationFrame(raf)
    }
  }, [])

  return <div ref={ref} className="cursor-badge" data-visible="false" aria-hidden="true" />
}
