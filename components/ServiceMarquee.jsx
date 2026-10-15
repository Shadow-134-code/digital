"use client";
import { useLayoutEffect, useRef, useState } from 'react'

const rows = [
  ['Branding', 'Websites', 'AI visuals', 'Creative production'],
  ['Campaign creative', 'Video ads', 'Motion design', 'Social content', 'Graphic design'],
]

function Ribbon({ items, secondary }) {
  const viewport = useRef(null)
  const unit = useRef(null)
  const [loop, setLoop] = useState({ copies: 8, duration: 0 })
  useLayoutEffect(() => {
    const measure = () => {
      const unitWidth = unit.current?.offsetWidth
      const viewWidth = viewport.current?.clientWidth
      if (!unitWidth || !viewWidth) return
      const copies = Math.max(2, Math.ceil(viewWidth / unitWidth) + 1)
      const speed = window.matchMedia('(max-width: 720px)').matches ? 22 : 58
      const duration = unitWidth * copies / speed
      setLoop(previous => previous.copies === copies && Math.abs(previous.duration - duration) < .01 ? previous : { copies, duration })
    }
    const observer = new ResizeObserver(measure)
    observer.observe(viewport.current)
    observer.observe(unit.current)
    measure()
    return () => observer.disconnect()
  }, [])
  return <div ref={viewport} className={'service-ribbon' + (secondary ? ' service-ribbon-secondary' : '')} aria-hidden="true">
    <div className="service-ribbon-track" style={{ animationDuration: loop.duration ? loop.duration + 's' : undefined, animationPlayState: loop.duration ? 'running' : 'paused' }}>
      {[0, 1].map(group => <div className="service-ribbon-group" key={group}>
        {Array.from({ length: loop.copies }, (_, copy) => <div className="service-ribbon-unit" ref={group === 0 && copy === 0 ? unit : undefined} key={copy}>
          {items.map(item => <span key={item}>{item}<b>&#10022;</b></span>)}
        </div>)}
      </div>)}
    </div>
  </div>
}

export default function ServiceMarquee() {
  return <div className="crossed-strips" role="img" aria-label="Branding, websites, AI visuals, creative production, campaign creative, video ads, motion design, social content and graphic design">
    {rows.map((items, row) => <Ribbon items={items} secondary={row === 1} key={row} />)}
  </div>
}
