import Reveal from './Reveal'
import { Play } from './Icons'

// Each card opens the shared MediaDialog through onOpen.

export function SiteCard({ item, onOpen, className = '', delay = 0 }) {
  return (
    <Reveal as="article" variant="media" delay={delay} className={`work-card work-card--site ${className}`}>
      <button
        type="button"
        className="work-media work-media--site"
        data-cursor="View"
        aria-label={`View the full ${item.title} website design`}
        onClick={() => onOpen({ type: 'image', kind: 'site', src: item.image, title: item.title, category: item.category, alt: `${item.title} full website design` })}
      >
        <img src={item.image} alt={`${item.title} website design`} width="768" height="1376" loading="lazy" />
      </button>
      <div className="work-meta"><h3>{item.title}</h3><p>{item.category}</p></div>
    </Reveal>
  )
}

export function FilmCard({ item, onOpen, className = '', delay = 0 }) {
  return (
    <Reveal as="article" variant="media" delay={delay} className={`work-card work-card--film ${className}`}>
      <button
        type="button"
        className="work-media work-media--film"
        data-cursor="Play"
        aria-label={`Play ${item.title}`}
        onClick={() => onOpen({ type: 'video', kind: 'film', src: item.src, poster: item.poster, title: item.title, category: item.category })}
      >
        <img src={item.poster} alt={`${item.title}, ${item.category.toLowerCase()}`} width="1280" height="720" loading="lazy" />
        <span className="play-badge" aria-hidden="true"><Play size={20} /></span>
      </button>
      <div className="work-meta"><h3>{item.title}</h3><p>{item.category}</p></div>
    </Reveal>
  )
}

export function ArtCard({ item, onOpen, className = '', delay = 0 }) {
  return (
    <Reveal as="article" variant="media" delay={delay} className={`work-card work-card--art ${className}`}>
      <button
        type="button"
        className="work-media work-media--art"
        data-cursor="View"
        aria-label={`View ${item.title} artwork`}
        onClick={() => onOpen({ type: 'image', kind: 'art', src: item.image, title: item.title, category: item.category, alt: `${item.title} thumbnail artwork` })}
      >
        <img src={item.image} alt={`${item.title} thumbnail artwork`} width="720" height="405" loading="lazy" />
      </button>
      <div className="work-meta"><h3>{item.title}</h3><p>{item.category}</p></div>
    </Reveal>
  )
}
