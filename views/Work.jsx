import PageHero from '../components/PageHero'
import WorkGallery from '../components/WorkGallery'

export default function Work() {
  return (
    <main>
      <PageHero
        label="Our work"
        title={['Visual stories,', <em key="e">digital experiences.</em>]}
        copy="Websites, commercial films and cover artwork from our portfolio. Select any project to see it in full."
      />
      <section className="section section-tight" aria-label="Portfolio">
        <div className="wrap">
          <WorkGallery />
        </div>
      </section>
    </main>
  )
}
