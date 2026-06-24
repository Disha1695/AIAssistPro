import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../theme'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggle}
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle color theme"
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="relative flex h-9 w-16 items-center rounded-full border border-line bg-elevated px-1 transition"
    >
      <span
        className={`flex h-7 w-7 items-center justify-center rounded-full bg-surface shadow-soft transition-transform duration-300 ${
          isDark ? 'translate-x-7' : 'translate-x-0'
        }`}
      >
        {isDark ? (
          <Moon size={15} className="text-brand" />
        ) : (
          <Sun size={15} className="text-gold" />
        )}
      </span>
    </button>
  )
}
