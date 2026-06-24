import { Menu, Bell, Copy, Check, Wallet } from 'lucide-react'
import { useState } from 'react'
import { user } from '../data'
import ThemeToggle from './ThemeToggle'

export default function Navbar({ onMenu }) {
  const [copied, setCopied] = useState(false)

  const copyWallet = () => {
    navigator.clipboard?.writeText(user.fullWallet)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-surface/80 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between gap-4 px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <button
            onClick={onMenu}
            className="rounded-lg p-2 text-muted hover:bg-elevated lg:hidden"
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-ink">Welcome back, {user.name}</p>
            <p className="text-xs text-muted">Here's your portfolio overview</p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={copyWallet}
            className="hidden items-center gap-2 rounded-lg border border-line bg-app px-3 py-2 text-xs font-medium text-muted transition hover:text-ink sm:flex"
            title="Copy wallet address"
          >
            <Wallet size={14} className="text-brand" />
            <span className="font-mono">{user.wallet}</span>
            {copied ? <Check size={14} className="text-positive" /> : <Copy size={14} />}
          </button>

          <ThemeToggle />

          <button
            className="relative rounded-lg border border-line bg-app p-2 text-muted hover:text-ink"
            aria-label="Notifications"
          >
            <Bell size={18} />
            <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-negative" />
          </button>

          <div className="flex items-center gap-2.5 rounded-lg border border-line bg-app py-1.5 pl-1.5 pr-2 sm:pr-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-brand to-blue-700 text-xs font-bold text-white">
              JD
            </div>
            <div className="hidden leading-tight sm:block">
              <p className="text-xs font-semibold text-ink">{user.name}</p>
              <p className="text-[10px] text-muted">{user.rank}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
