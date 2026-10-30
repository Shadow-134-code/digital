// Marks content for the scroll reveal in app/template.jsx.
// variant: "up" (fade and rise), "mask" (heading lines slide up), "media" (image wipe).
export default function Reveal({ as: Tag = 'div', variant = 'up', delay = 0, className, style, children, ...rest }) {
  return (
    <Tag
      data-reveal={variant}
      className={className}
      style={delay ? { ...style, '--d': `${delay}s` } : style}
      {...rest}
    >
      {children}
    </Tag>
  )
}
