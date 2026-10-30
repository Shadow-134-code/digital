"use client";
import { useState } from 'react'
import MediaDialog from './MediaDialog'
import { Play } from './Icons'
import { films } from '../data/commercialFilms'
import { work } from '../data/site'
import { thumbnailArtwork } from '../data/thumbnailArtwork'

// Hero collage: one website, one film, one artwork, each opening in the viewer.
export default function CreativeShowcase() {
  const [active, setActive] = useState(null)
  const site = work[0]
  const film = films[0]
  const art = thumbnailArtwork.find(a => a.title === 'Goodbyes') || thumbnailArtwork[0]

  return (
    <>
      <div className="showcase enter enter-media">
        <figure className="showcase-item showcase-site">
          <button type="button" className="showcase-media" data-cursor="View" aria-label={`View the full ${site.title} website design`}
            onClick={() => setActive({ type: 'image', kind: 'site', src: site.image, title: site.title, category: site.category, alt: `${site.title} full website design` })}>
            <img src={site.image} alt={`${site.title} website design`} width="768" height="1376" fetchPriority="high" />
          </button>
          <figcaption><span className="label">Website</span>{site.title}</figcaption>
        </figure>

        <figure className="showcase-item showcase-film">
          <button type="button" className="showcase-media" data-cursor="Play" aria-label={`Play ${film.title} commercial`}
            onClick={() => setActive({ type: 'video', kind: 'film', src: film.src, poster: film.poster, title: film.title, category: film.category })}>
            <img src={film.poster} alt={`${film.title} commercial`} width="1280" height="720" fetchPriority="high" />
            <span className="play-badge play-badge--lg" aria-hidden="true"><Play size={24} /></span>
          </button>
          <figcaption><span className="label">Commercial</span>{film.title}</figcaption>
        </figure>

        <figure className="showcase-item showcase-art">
          <button type="button" className="showcase-media" data-cursor="View" aria-label={`View ${art.title} artwork`}
            onClick={() => setActive({ type: 'image', kind: 'art', src: art.image, title: art.title, category: art.category, alt: `${art.title} thumbnail artwork` })}>
            <img src={art.image} alt={`${art.title} thumbnail artwork`} width="720" height="405" />
          </button>
          <figcaption><span className="label">Thumbnail</span>{art.title}</figcaption>
        </figure>
      </div>
      <MediaDialog item={active} onClose={() => setActive(null)} />
    </>
  )
}
