export default function Reveal({ children, className = '', delay = 0 }) {
  return <div className={`hz-reveal ${className}`} data-reveal-delay={Math.min(delay, .18)}>{children}</div>
}
