// One small, consistent icon set (1.6px stroke) used across the site.
const stroke = size => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: 'false',
})

export const ArrowUpRight = ({ size = 18 }) => <svg {...stroke(size)}><path d="M7 17 17 7M8.5 7H17v8.5" /></svg>
export const ArrowRight = ({ size = 18 }) => <svg {...stroke(size)}><path d="M4.5 12h15M13.5 6l6 6-6 6" /></svg>
export const ArrowUp = ({ size = 16 }) => <svg {...stroke(size)}><path d="M12 19.5v-15M6 10.5l6-6 6 6" /></svg>
export const Plus = ({ size = 18 }) => <svg {...stroke(size)}><path d="M12 5v14M5 12h14" /></svg>
export const Close = ({ size = 20 }) => <svg {...stroke(size)}><path d="M6 6l12 12M18 6 6 18" /></svg>
export const Check = ({ size = 16 }) => <svg {...stroke(size)}><path d="M5 12.5l4.5 4.5L19 7" /></svg>
export const ChevronDown = ({ size = 18 }) => <svg {...stroke(size)}><path d="m6 9 6 6 6-6" /></svg>
export const Mail = ({ size = 18 }) => <svg {...stroke(size)}><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="m3.5 7 8.5 6 8.5-6" /></svg>
export const LinkIcon = ({ size = 16 }) => <svg {...stroke(size)}><path d="M10 14a4 4 0 0 0 5.66 0l3-3a4 4 0 0 0-5.66-5.66l-1 1M14 10a4 4 0 0 0-5.66 0l-3 3a4 4 0 0 0 5.66 5.66l1-1" /></svg>
// Service and contact icons (same shapes as the original site's icon set)
export const Palette = ({ size = 30 }) => <svg {...stroke(size)} strokeWidth={1.3}><circle cx="13.5" cy="6.5" r=".5" fill="currentColor" /><circle cx="17.5" cy="10.5" r=".5" fill="currentColor" /><circle cx="8.5" cy="7.5" r=".5" fill="currentColor" /><circle cx="6.5" cy="12.5" r=".5" fill="currentColor" /><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" /></svg>
export const Monitor = ({ size = 30 }) => <svg {...stroke(size)} strokeWidth={1.3}><rect width="20" height="14" x="2" y="3" rx="2" /><path d="M8 21h8M12 17v4" /></svg>
export const Sparkles = ({ size = 30 }) => <svg {...stroke(size)} strokeWidth={1.3}><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" /><path d="M20 3v4M22 5h-4M4 17v2M5 18H3" /></svg>
export const Megaphone = ({ size = 30 }) => <svg {...stroke(size)} strokeWidth={1.3}><path d="m3 11 18-5v12L3 14v-3z" /><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" /></svg>
export const Clapperboard = ({ size = 30 }) => <svg {...stroke(size)} strokeWidth={1.3}><path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z" /><path d="m6.2 5.3 3.1 3.9M12.4 3.4l3.1 4" /><path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" /></svg>
export const Layers = ({ size = 30 }) => <svg {...stroke(size)} strokeWidth={1.3}><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" /><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65M22 12.65l-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" /></svg>
export const FolderOpen = ({ size = 21 }) => <svg {...stroke(size)}><path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2" /></svg>
export const MessageSquare = ({ size = 21 }) => <svg {...stroke(size)}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>

export const Play =({ size = 18 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M8 5.6v12.8a.6.6 0 0 0 .9.5l10.4-6.4a.6.6 0 0 0 0-1L8.9 5.1a.6.6 0 0 0-.9.5Z" /></svg>
