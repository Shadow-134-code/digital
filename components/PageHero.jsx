import Lines from './Lines'

// Opening block for inner pages. Animates on every page visit (CSS only, no waiting on scroll).
export default function PageHero({ label, title, copy, children }) {
  return (
    <section className="page-hero">
      <div className="wrap">
        <p className="label enter">{label}</p>
        <h1 className="page-title enter-lines"><Lines lines={title} /></h1>
        {(copy || children) && (
          <div className="page-hero-foot enter enter-late">
            {copy && <p className="page-intro">{copy}</p>}
            {children}
          </div>
        )}
      </div>
    </section>
  )
}
