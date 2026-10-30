"use client";
import { useState } from 'react'
import MediaDialog from './MediaDialog'
import { SiteCard, FilmCard, ArtCard } from './WorkCards'
import { work } from '../data/site'
import { films } from '../data/commercialFilms'
import { thumbnailArtwork } from '../data/thumbnailArtwork'

const groups = [
  { id: 'websites', label: 'Websites', copy: 'Full-page designs for real estate, hospitality and retail. Open one to scroll the whole page.', items: work, Card: SiteCard },
  { id: 'films', label: 'Films', copy: 'Commercials and promotional films for products, services and brands.', items: films, Card: FilmCard },
  { id: 'thumbnails', label: 'Thumbnails', copy: 'Cover artwork built on bold typography and cinematic composition.', items: thumbnailArtwork, Card: ArtCard },
]

export default function WorkGallery() {
  const [filter, setFilter] = useState('all')
  const [active, setActive] = useState(null)
  const total = groups.reduce((n, g) => n + g.items.length, 0)
  const shown = filter === 'all' ? groups : groups.filter(g => g.id === filter)

  return (
    <>
      <div className="work-filter" role="group" aria-label="Filter projects">
        {[{ id: 'all', label: 'All work', count: total }, ...groups.map(g => ({ id: g.id, label: g.label, count: g.items.length }))].map(f => (
          <button key={f.id} type="button" aria-pressed={filter === f.id} onClick={() => setFilter(f.id)}>
            {f.label}<sup>{f.count}</sup>
          </button>
        ))}
      </div>

      {shown.map(({ id, label, copy, items, Card }) => (
        <section key={`${filter}-${id}`} className="work-group" aria-labelledby={`group-${id}`}>
          <div className="work-group-head">
            <h2 id={`group-${id}`}>{label}</h2>
            <p>{copy}</p>
          </div>
          <div className={`work-grid work-grid--${id}`}>
            {items.map((item, i) => <Card key={item.title} item={item} onOpen={setActive} delay={(i % 3) * 0.06} />)}
          </div>
        </section>
      ))}

      <MediaDialog item={active} onClose={() => setActive(null)} />
    </>
  )
}
