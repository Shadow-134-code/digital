import { NextResponse } from 'next/server'
export function middleware(request) {
  const nonce = btoa(crypto.randomUUID())
  const development = process.env.NODE_ENV === 'development'
  const policy = [
    "default-src 'self'",
    "script-src 'self' 'nonce-" + nonce + "' 'strict-dynamic'" + (development ? " 'unsafe-eval'" : ''),
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob:",
    "font-src 'self'",
    "media-src 'self'",
    "connect-src 'self' https://formsubmit.co" + (development ? ' ws: wss:' : ''),
    "object-src 'none'", "base-uri 'none'", "frame-ancestors 'none'", "form-action 'self'",
  ].join('; ')
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-nonce', nonce)
  requestHeaders.set('Content-Security-Policy', policy)
  const response = NextResponse.next({ request: { headers: requestHeaders } })
  response.headers.set('Content-Security-Policy', policy)
  return response
}
export const config = { matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:png|webp|mp4|ttf|woff2|svg)$).*)'] }
