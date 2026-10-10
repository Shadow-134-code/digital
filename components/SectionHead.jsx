"use client";
export default function SectionHead({ number, eyebrow, title, copy }) {
  return (
    <div className="section-head">
      <div className="section-index">{eyebrow}</div>
      <div className="section-head__content">
        <h2>{title}</h2>
        {copy && <p>{copy}</p>}
      </div>
    </div>
  )
}
