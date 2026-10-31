"use client";
import { Check, Plus } from './Icons'

export const serviceOptions = ['Website design', 'WordPress development', 'Ecommerce', 'Landing page', 'Website redesign', 'Branding & visual identity', 'AI visuals & creative production', 'Advertising & campaign creative', 'Motion design & video editing', 'Social content & graphic design', 'Other']

// Clickable tags: clients often need more than one service, so any number can be picked.
export default function ServicePicker({ value, onChange }) {
  const toggle = o => onChange(value.includes(o) ? value.filter(v => v !== o) : serviceOptions.filter(v => v === o || value.includes(v)))

  return (
    <fieldset className="field field-full service-picker">
      <legend className="field-label">What do you need? <small>(pick any)</small></legend>
      <input type="hidden" name="services" value={value.join(', ')} />
      <div className="service-chips">
        {serviceOptions.map(o => {
          const on = value.includes(o)
          return (
            <button key={o} type="button" className="service-chip" aria-pressed={on} onClick={() => toggle(o)}>
              <span className="service-chip-icon" aria-hidden="true">{on ? <Check size={14} /> : <Plus size={14} />}</span>
              {o}
            </button>
          )
        })}
      </div>
    </fieldset>
  )
}
