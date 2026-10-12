export default function PageHero({ eyebrow, title, copy, children }) {
  return (
    <section className="page-hero container">
      <div className="page-eyebrow">{eyebrow}</div>
      <h1>{title}</h1>
      <p>{copy}</p>
      {children}
    </section>
  )
}
