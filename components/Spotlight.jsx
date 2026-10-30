"use client";

// Wraps a group of cards. Moving the pointer over a child marked [data-spot]
// sets --mx / --my on it, which the CSS uses for a soft light that follows the cursor.
export default function Spotlight({ as: Tag = 'div', children, ...rest }) {
  const onPointerMove = e => {
    if (e.pointerType !== 'mouse') return
    const card = e.target.closest('[data-spot]')
    if (!card || !e.currentTarget.contains(card)) return
    const r = card.getBoundingClientRect()
    card.style.setProperty('--mx', `${e.clientX - r.left}px`)
    card.style.setProperty('--my', `${e.clientY - r.top}px`)
  }
  return <Tag onPointerMove={onPointerMove} {...rest}>{children}</Tag>
}
