"use client";
import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'
import CreativeGallery from './CreativeGallery'
import VideoGallery from './VideoGallery'
import { work } from '../data/site'
export default function PortfolioSections({ expanded = false }){return <div className="portfolio-sections">
 <nav className="portfolio-nav" aria-label="Portfolio categories"><a href="#portfolio-websites">Websites ↘</a><a href="#portfolio-thumbnails">Thumbnails ↘</a><a href="#portfolio-videos">Videos ↘</a></nav>
 <section id="portfolio-websites" className="portfolio-category" aria-labelledby="websites-heading"><div className="portfolio-category-heading"><span>DIGITAL EXPERIENCES</span><h3 id="websites-heading">Websites</h3><p>Selected website designs. Hover over a preview to explore the full page.</p></div><div className="work-grid">{work.map((item,i)=><Reveal className="work-card" key={item.title} delay={i*.05}><a className="work-image" href={item.image} target="_blank" rel="noreferrer" aria-label={`Open full ${item.title} preview`}><img loading="lazy" src={item.image} alt={`${item.title} website design preview`}/><div className="work-hover"><ArrowUpRight/></div></a><div className="work-meta"><h4>{item.title}</h4><span>{item.category}</span></div></Reveal>)}</div></section>
 <section id="portfolio-thumbnails" className="portfolio-category" aria-labelledby="thumbnails-heading"><div className="portfolio-category-heading"><span>VISUAL DESIGN</span><h3 id="thumbnails-heading">Thumbnails</h3><p>Cinematic compositions, distinctive typography and original imagery from our creative portfolio.</p></div><CreativeGallery expanded={expanded}/></section>
 <section id="portfolio-videos" className="portfolio-category" aria-labelledby="videos-heading"><div className="portfolio-category-heading"><span>COMMERCIAL & MOTION</span><h3 id="videos-heading">Videos</h3><p>Selected commercials and promotional films from our portfolio — brand stories, product campaigns and business services.</p></div><VideoGallery expanded={expanded}/></section>
 </div>}
