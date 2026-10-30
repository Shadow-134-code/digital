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
export const Play = ({ size = 18 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M8 5.6v12.8a.6.6 0 0 0 .9.5l10.4-6.4a.6.6 0 0 0 0-1L8.9 5.1a.6.6 0 0 0-.9.5Z" /></svg>
