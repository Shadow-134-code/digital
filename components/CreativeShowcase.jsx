"use client";
import { useState } from 'react'
import FilmDialog from './FilmDialog'
import { films } from '../data/commercialFilms'
import { Play } from 'lucide-react'
export default function CreativeShowcase(){
 const film=films[0]; const [playing,setPlaying]=useState(false);

 return <>
 <div className="creative-stage">
  <div className="creative-stage-label">VISUAL STORIES, MADE TO MOVE</div>
  <a className="creative-float creative-left" href="/work/harlow.webp" target="_blank" rel="noreferrer" aria-label="View Harlow and Vale website preview"><img src="/work/harlow.webp" alt="Harlow and Vale real estate website design"/><div className="creative-caption"><span>WEBSITE DESIGN</span><strong>Harlow & Vale <span>EXPLORE ↗</span></strong></div></a>
  <button className="creative-float creative-center" onClick={()=>{setPlaying(true)}} aria-label="Play MYEYERX commercial"><img src="/videos/myeyerx.webp" alt="MYEYERX commercial"/><span className="video-play"><Play fill="currentColor" size={23}/></span><div className="creative-caption"><span>FEATURED COMMERCIAL</span><strong>MYEYERX <span>WATCH FILM ↗</span></strong></div></button>
  <div className="creative-float creative-right"><img src="/creative/reference/artwork-08.webp" alt="GOODBYES thumbnail artwork"/><div className="creative-caption"><span>THUMBNAIL DESIGN</span><strong>GOODBYES</strong></div></div>
 </div>
 <FilmDialog film={playing?film:null} onClose={()=>setPlaying(false)}/>
 </>
}
