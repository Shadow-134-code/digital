import { headers } from 'next/headers'
import { Geist, Manrope } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CursorBadge from '../components/CursorBadge'
import './globals.css'

// Fonts are downloaded at build time and served from this site (no external requests).
// Manrope (the original HZ brand lettering) for headings and the wordmark; Geist for body text.
const sans = Geist({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
const brand = Manrope({ subsets: ['latin'], variable: '--font-brand', display: 'swap', weight: ['500', '600', '700', '800'] })

export const metadata = {
  title: {
    default: 'HZ Digital Solutions | Branding, websites and creative production',
    template: '%s | HZ Digital Solutions',
  },
  description: 'A founder-led creative studio for brand identity, website design and development, AI visuals, video ads and motion design.',
  openGraph: {
    siteName: 'HZ Digital Solutions',
    title: 'HZ Digital Solutions | Branding, websites and creative production',
    description: 'A founder-led creative studio for brand identity, website design and development, AI visuals, video ads and motion design.',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#0d0c0b',
  colorScheme: 'dark',
}

export default async function RootLayout({ children }) {
  await headers() // Per-request rendering supplies a fresh CSP nonce to Next.js scripts.
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${sans.variable} ${brand.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Navbar />
        <div id="main-content">{children}</div>
        <Footer />
        <CursorBadge />
      </body>
    </html>
  )
}
