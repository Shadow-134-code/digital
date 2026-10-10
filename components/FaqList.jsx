"use client";
import {useId,useState} from 'react'
import {Plus} from 'lucide-react'
import {motion,AnimatePresence,useReducedMotion} from 'framer-motion'
import {faqs} from '../data/site'
export default function FaqList({compact=false}){const [open,setOpen]=useState(-1);const id=useId();const reduced=useReducedMotion();return <div className="hz-faq">{(compact?[faqs[0],faqs[1],faqs[3],faqs[5],faqs[7],faqs[9],faqs[11],faqs[17]]:faqs).map((item,i)=><section className={'hz-faq-row '+(open===i?'is-open':'')} key={item.q}><h3><button id={id+'-q'+i} aria-expanded={open===i} aria-controls={id+'-a'+i} onClick={()=>setOpen(open===i?-1:i)}><span>{item.q}</span><Plus size={19}/></button></h3><AnimatePresence initial={false}>{open===i&&<motion.div id={id+'-a'+i} role="region" aria-labelledby={id+'-q'+i} initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} transition={{duration:reduced?0:.32,ease:[.22,1,.36,1]}} className="hz-faq-answer"><p>{item.a}</p></motion.div>}</AnimatePresence></section>)}</div>}
