"use client";
import {useState} from 'react'
import {Play,ArrowUpRight} from 'lucide-react'
import {films} from '../data/commercialFilms'
import Reveal from './Reveal'
import FilmDialog from './FilmDialog'
export default function VideoGallery(){const [selected,setSelected]=useState(null);return <section className="video-selection" aria-label="Selected commercial work"><div className="video-grid">{films.map((film,i)=><Reveal key={film.title} className="video-card" delay={i%2*.06}><button className="video-card-art" onClick={()=>setSelected(film)} aria-label={'Play '+film.title}><img loading="lazy" src={film.poster} alt={film.title+' commercial preview'}/><span className="video-card-play"><Play size={24} fill="currentColor"/></span><span className="video-card-watch">WATCH FILM <ArrowUpRight size={16}/></span></button><div className="video-card-meta"><div><h4>{film.title}</h4><p>HZ creative production</p></div><span>{film.category}</span></div></Reveal>)}</div><FilmDialog film={selected} onClose={()=>setSelected(null)}/></section>}
