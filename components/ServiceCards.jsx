"use client";
import { Palette, Monitor, Sparkles, Megaphone, Clapperboard, Layers, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import Reveal from './Reveal'
import { services } from '../data/site'
const icons=[Palette,Monitor,Sparkles,Megaphone,Clapperboard,Layers]
export default function ServiceCards({detail=false}){return <>
 <div className="capability-grid">{services.map((service,i)=>{const Icon=icons[i];return <Reveal className={`capability-card ${service.featured?'capability-card--featured':''}`} key={service.number} delay={i%3*.06}>
  <div className="capability-top"><span>{service.number}</span><Icon size={31} strokeWidth={1.3}/></div>
  <h3>{service.title}</h3><p>{service.text}</p>
  <ul>{service.tags.map(tag=><li key={tag}>{tag}</li>)}</ul>
  <Link href={detail?'/contact':'/services'} className="capability-link">{detail?'Discuss your project':'Explore services'}<ArrowUpRight size={18}/></Link>
 </Reveal>})}</div>
 <div className="partnership-note"><span aria-hidden="true">✳</span><p><strong>One project or an ongoing creative partnership.</strong><br/>We shape the scope around what you need.</p><Link href="/contact">Tell us about it <ArrowUpRight size={18}/></Link></div>
 </>}
