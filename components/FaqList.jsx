"use client";
import { useId, useState } from 'react'
import { Plus } from './Icons'
import Reveal from './Reveal'
import { faqs, faqGroups } from '../data/site'

// Grouped accordion. Height animation is pure CSS (grid rows 0fr -> 1fr).
export default function FaqList() {
  const [open, setOpen] = useState(null)
  const id = useId()

  return (
    <div className="faq-groups">
      {faqGroups.map(group => (
        <section key={group.id} id={group.id} className="faq-group" aria-labelledby={`${id}-${group.id}`}>
          <Reveal as="h2" id={`${id}-${group.id}`} className="faq-group-title">{group.label}</Reveal>
          <div className="faq-list">
            {faqs.filter(f => f.group === group.id).map((item, i) => {
              const key = item.q
              const isOpen = open === key
              const slug = `${id}-${faqs.indexOf(item)}`
              return (
                <Reveal className="faq-item" data-open={isOpen} key={key} delay={0.05 + i * 0.06}>
                  <h3>
                    <button type="button" id={`${slug}-q`} aria-expanded={isOpen} aria-controls={`${slug}-a`} onClick={() => setOpen(isOpen ? null : key)}>
                      <span>{item.q}</span>
                      <span className="faq-icon" aria-hidden="true"><Plus size={18} /></span>
                    </button>
                  </h3>
                  <div className="faq-answer" id={`${slug}-a`} role="region" aria-labelledby={`${slug}-q`} inert={!isOpen}>
                    <div><p>{item.a}</p></div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </section>
      ))}
    </div>
  )
}
