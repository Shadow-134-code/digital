"use client";
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowUpRight, Menu, X } from 'lucide-react'
const items = [['/', 'Home'], ['/company', 'Company'], ['/founder', 'Founder'], ['/services', 'Services'], ['/work', 'Our work'], ['/faqs', 'FAQs'], ['/contact', 'Contact']]
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const toggle = useRef(null)
  const header = useRef(null)
  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    if (!open) return
    const close = e => { if (e.key === 'Escape') { setOpen(false); toggle.current?.focus() } }
    const outside = e => { if (!header.current?.contains(e.target)) setOpen(false) }
    document.addEventListener('keydown', close)
    document.addEventListener('pointerdown', outside)
    return () => { document.removeEventListener('keydown', close); document.removeEventListener('pointerdown', outside) }
  }, [open])
  return <>
    <header className="nav-wrap" ref={header}>
      <div className="nav-shell">
        <Link href="/" className="brand" aria-label="HZ Digital Solutions home">
          <img className="hz-brand-mark" src="/hz-mark.png" alt="" />
          <span className="hz-wordmark">HZ DIGITAL<span>SOLUTIONS</span></span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">{items.map(([to,label])=><Link key={to} href={to} className={pathname === to ? 'active' : undefined} aria-current={pathname === to ? 'page' : undefined}>{label}</Link>)}</nav>
        <button ref={toggle} className="menu-button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="site-menu" onClick={() => setOpen(v => !v)}>
          <span>{open ? 'Close' : 'Menu'}</span>{open ? <X size={26}/> : <Menu size={26}/>}
        </button>
      </div>
      {open && <nav id="site-menu" className="menu-panel" aria-label="Primary navigation">
        {items.map(([to,label],i) => <Link key={to} href={to} className={pathname === to ? 'active' : undefined} aria-current={pathname === to ? 'page' : undefined} onClick={()=>setOpen(false)}>{label}<ArrowUpRight size={24}/></Link>)}
      </nav>}
    </header>
    {pathname !== '/contact' && <Link href="/contact" className="sticky-contact">Let’s talk <ArrowUpRight size={20}/></Link>}
  </>
}
