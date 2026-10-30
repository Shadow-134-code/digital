// Splits a heading into masked lines so each line can slide up on its own.
export default function Lines({ lines }) {
  const list = Array.isArray(lines) ? lines : [lines]
  return list.map((line, i) => (
    <span className="ln" key={i} style={{ '--i': i }}>
      <span>{line}</span>
    </span>
  ))
}
