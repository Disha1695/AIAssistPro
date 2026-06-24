import { useEffect, useRef, useState } from 'react'

export function Container({ className = '', children }) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
  )
}

export function Section({ id, className = '', children }) {
  return (
    <section id={id} className={`scroll-mt-24 py-16 sm:py-24 ${className}`}>
      {children}
    </section>
  )
}

export function Kicker({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand backdrop-blur">
      {children}
    </span>
  )
}

export function SectionHeading({ kicker, title, highlight, subtitle, center = true }) {
  return (
    <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {kicker && <Kicker>{kicker}</Kicker>}
      <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        {title} {highlight && <span className="text-gradient-gold">{highlight}</span>}
      </h2>
      {subtitle && <p className="mt-3 text-base leading-relaxed text-muted">{subtitle}</p>}
    </div>
  )
}

/** Fade-up reveal on scroll using IntersectionObserver. */
export function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.12 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        shown ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } ${className}`}
    >
      {children}
    </Tag>
  )
}
