"use client";
import { useEffect, useRef } from 'react'
import { Close } from './Icons'

// Full-screen viewer for films (video) and website / artwork previews (image).
export default function MediaDialog({ item, onClose }) {
  const dialog = useRef(null)

  useEffect(() => {
    if (!item) return
    const previous = document.activeElement
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    dialog.current?.showModal()
    return () => {
      document.body.style.overflow = overflow
      previous?.focus?.()
    }
  }, [item])

  if (!item) return null

  return (
    <dialog
      ref={dialog}
      className={`media-dialog media-dialog--${item.kind}`}
      aria-label={`${item.title} ${item.type === 'video' ? 'film' : 'preview'}`}
      onCancel={e => { e.preventDefault(); onClose() }}
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="media-dialog-bar">
        <div>
          <strong>{item.title}</strong>
          <span>{item.category}</span>
        </div>
        <button type="button" className="icon-btn" onClick={onClose} aria-label="Close">
          <Close />
        </button>
      </div>
      <div className="media-dialog-body">
        {item.type === 'video'
          ? <video key={item.src} controls autoPlay playsInline preload="metadata" poster={item.poster} src={item.src}>Your browser does not support video playback.</video>
          : <img src={item.src} alt={item.alt || item.title} />}
      </div>
    </dialog>
  )
}
