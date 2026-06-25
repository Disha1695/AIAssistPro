import { useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import Logo from '../components/Logo'
import ThemeToggle from '../components/ThemeToggle'
import { Container } from './ui'

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Mining', href: '#mining' },
  { label: 'Technology', href: '#income' },
  { label: 'How It Works', href: '#packages' },
  { label: 'Projects', href: '#projects' },
]

export default function Navbar({ onLaunch }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-app/70 backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Logo />

          <nav className="hidden items-center gap-1 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted transition hover:bg-elevated hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <button onClick={onLaunch} className="btn-ghost hidden sm:inline-flex">
              Login
            </button>
            <button onClick={onLaunch} className="btn-primary">
              Get Started <ArrowRight size={16} />
            </button>
            <button
              onClick={() => setOpen((v) => !v)}
              className="rounded-lg p-2 text-muted hover:bg-elevated md:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="flex flex-col gap-1 border-t border-line py-3 md:hidden">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted transition hover:bg-elevated hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </nav>
        )}
      </Container>
    </header>
  )
}
