const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  // The Company and Founder pages were merged into About; old links keep working.
  async redirects() {
    return [
      { source: '/company', destination: '/about', permanent: true },
      { source: '/founder', destination: '/about#founder', permanent: true },
    ]
  },
  async headers() {
    return [{ source: '/:path*', headers: [
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'X-Frame-Options', value: 'DENY' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()' },
      // Stops other sites that open this one in a new tab from reaching into it.
      { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
      { key: 'X-Permitted-Cross-Domain-Policies', value: 'none' },
    ] }]
  },
}
export default nextConfig
