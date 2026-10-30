import Lines from './Lines'
import Reveal from './Reveal'

export default function SectionHead({ index, label, title, copy, action, id }) {
  return (
    <div className="section-head">
      <Reveal as="p" className="label">
        {index && <span className="label-index">{index}</span>}
        {label}
      </Reveal>
      <h2 id={id} className="section-title" data-reveal="mask"><Lines lines={title} /></h2>
      {(copy || action) && (
        <Reveal className="section-head-side" delay={0.12}>
          {copy && <p>{copy}</p>}
          {action}
        </Reveal>
      )}
    </div>
  )
}
