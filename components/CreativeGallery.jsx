"use client";
import { thumbnailArtwork } from '../data/thumbnailArtwork'
import Reveal from './Reveal'
export default function CreativeGallery({ expanded = false }){return <div className="creative-gallery">{(expanded ? thumbnailArtwork : thumbnailArtwork.slice(0,6)).map((item,i)=><Reveal className="creative-project" key={item.title} delay={i%2*.08}><a href={item.image} target="_blank" rel="noreferrer" aria-label={`View ${item.title} artwork`}><img src={item.image} alt={item.title+' — '+item.category} loading="lazy"/><span className="creative-open">VIEW ARTWORK ↗</span></a><div className="work-meta"><h3>{item.title}</h3><span>{item.category}</span></div></Reveal>)}</div>}
