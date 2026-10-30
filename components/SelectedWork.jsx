"use client";
import { useState } from 'react'
import MediaDialog from './MediaDialog'
import { SiteCard, FilmCard, ArtCard } from './WorkCards'
import { work } from '../data/site'
import { films } from '../data/commercialFilms'
import { thumbnailArtwork } from '../data/thumbnailArtwork'

// A short, curated preview for the home page. The full portfolio lives on /work.
export default function SelectedWork() {
  const [active, setActive] = useState(null)
  const site = work.find(w => w.title === 'Bramble & Co.') || work[0]
  const film = films.find(f => f.title === 'Plumbing services') || films[0]
  const art = thumbnailArtwork.filter(a => ['After Midnight', 'Never Just Friends'].includes(a.title))

  return (
    <>
      <div className="selected-grid">
        <SiteCard item={site} onOpen={setActive} className="sel-site" />
        <FilmCard item={film} onOpen={setActive} className="sel-film" delay={0.06} />
        {art.map((item, i) => <ArtCard key={item.title} item={item} onOpen={setActive} className={`sel-art sel-art-${i + 1}`} delay={0.1 + i * 0.06} />)}
      </div>
      <MediaDialog item={active} onClose={() => setActive(null)} />
    </>
  )
}
