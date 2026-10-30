import Link from 'next/link'
import ArrowLink from '../components/ArrowLink'
import { ArrowRight } from '../components/Icons'

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="wrap">
        <p className="label enter">Error 404</p>
        <p className="not-found-code enter" aria-hidden="true">404</p>
        <h1 className="page-title enter">This page <em>isn’t here.</em></h1>
        <p className="page-intro enter enter-late">The link may be old or mistyped. These are good places to continue:</p>
        <div className="hero-actions enter enter-late">
          <Link href="/" className="btn">Back to home <ArrowRight size={18} /></Link>
          <ArrowLink to="/work">See our work</ArrowLink>
          <ArrowLink to="/contact">Contact us</ArrowLink>
        </div>
      </div>
    </main>
  )
}
