"use client";
import {useEffect,useId,useRef,useState} from 'react'
import {ChevronDown,Check} from 'lucide-react'
const options=['Website design','WordPress development','Ecommerce','Landing page','Website redesign','Branding & visual identity','AI visuals & creative production','Advertising & campaign creative','Motion design & video editing','Social content & graphic design','Other']
export default function ProjectSelect({value,onChange}){
 const id=useId(), wrap=useRef(null),trigger=useRef(null),refs=useRef([]);const [open,setOpen]=useState(false),[active,setActive]=useState(0)
 const show=()=>{setActive(Math.max(0,options.indexOf(value)));setOpen(true)}
 useEffect(()=>{if(open){refs.current[active]?.focus({preventScroll:true});refs.current[active]?.scrollIntoView({block:"nearest",behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"})}},[open,active])
 useEffect(()=>{const outside=e=>{if(!wrap.current?.contains(e.target))setOpen(false)};document.addEventListener('pointerdown',outside);return()=>document.removeEventListener('pointerdown',outside)},[])
 const choose=i=>{onChange(options[i]);setOpen(false);trigger.current?.focus()}
 return <div className="project-select" ref={wrap}><span id={id+'-label'} className="field-label">Project type</span><input type="hidden" name="projectType" value={value}/>
 <button ref={trigger} type="button" className="project-trigger" aria-labelledby={id+'-label '+id+'-value'} aria-haspopup="listbox" aria-expanded={open} aria-controls={id} onClick={()=>open?setOpen(false):show()} onKeyDown={e=>{if(['ArrowDown','ArrowUp'].includes(e.key)){e.preventDefault();show()}}}><span id={id+'-value'}>{value}</span><ChevronDown size={18}/></button>
 {open&&<div className="project-options" role="listbox" id={id} aria-labelledby={id+'-label'} onKeyDown={e=>{if(e.key==='Escape'){e.preventDefault();setOpen(false);trigger.current?.focus()}if(e.key==='Tab')setOpen(false);if(['ArrowDown','ArrowUp','Home','End'].includes(e.key)){e.preventDefault();setActive(i=>e.key==='Home'?0:e.key==='End'?options.length-1:(i+(e.key==='ArrowDown'?1:-1)+options.length)%options.length)}}}>{options.map((o,i)=><button type="button" role="option" aria-selected={value===o} tabIndex={active===i?0:-1} ref={el=>{refs.current[i]=el}} key={o} onClick={()=>choose(i)} onKeyDown={e=>{if(e.key.length===1&&e.key!==' '){const next=options.findIndex(x=>x.toLowerCase().startsWith(e.key.toLowerCase()));if(next>=0)setActive(next)}}}>{o}{value===o&&<Check size={16}/>}</button>)}</div>}</div>
}