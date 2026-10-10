import { headers } from 'next/headers'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MotionProvider from '../components/MotionProvider'
import './styles.css'
import './fonts.css'
import './refinements.css'
export const metadata = {
  title: { default: 'HZ Digital Solutions | Design, websites & creative production', template: '%s | HZ Digital Solutions' },
  description: 'Brand identities, WordPress websites, commercial films, AI visuals and creative content. Thoughtfully made by HZ Digital Solutions.',
  icons: { icon: '/hz-mark.png' },
}
export default async function RootLayout({children}) {
  await headers() // Per-request rendering supplies a fresh CSP nonce to Next.js scripts.
  return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to content</a><MotionProvider><Navbar/><div id="main-content">{children}</div><Footer/></MotionProvider></body></html>
}
