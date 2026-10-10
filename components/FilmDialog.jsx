"use client";
import {useEffect,useRef} from 'react'
import {X} from 'lucide-react'
export default function FilmDialog({film,onClose}){
 const dialog=useRef(null)
 useEffect(()=>{if(!film)return;const previous=document.activeElement;const overflow=document.body.style.overflow;document.body.style.overflow='hidden';dialog.current.showModal();return()=>{document.body.style.overflow=overflow;previous?.focus()}},[film])
 if(!film)return null
 return <dialog ref={dialog} className="film-dialog" aria-label={film.title+' video player'} onCancel={e=>{e.preventDefault();onClose()}} onClick={e=>{if(e.target===e.currentTarget)onClose()}}><div className="film-toolbar"><div><strong>{film.title}</strong><span>{film.category}</span></div><button onClick={onClose} aria-label="Close video"><X/></button></div><video key={film.src} controls autoPlay playsInline preload="metadata" poster={film.poster} src={film.src}>Your browser does not support video playback.</video></dialog>
}
