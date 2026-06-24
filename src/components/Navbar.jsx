import { Menu, Bell, Copy, Check, Wallet } from 'lucide-react'
import { useState } from 'react'
import { user } from '../data'

export default function Navbar({ onMenu }) {
  const [copied, setCopied] = useState(false)

  const copyWallet = () => {
    navigator.clipboard?.writeText(user.fullWallet)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <header className="sticky top-0 z-20 border-b border-electric/15 bg-navy-800/80 backdrop-blur-md">
      <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <button
            onClick={onMenu}
            className="rounded-lg p-2 text-slate-300 hover:bg-navy-700 lg:hidden"
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
          <div className="hidden sm:block">
            <p className="text-xs text-slate-400">Welcome back,</p>
            <p className="text-sm font-semibold text-white">{user.name} 👋</p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={copyWallet}
            className="flex items-center gap-2 rounded-lg border border-electric/30 bg-navy-700/50 px-3 py-2 text-xs font-medium text-electric transition hover:shadow-glow-blue"
            title="Copy wallet address"
          >
            <Wallet size={14} />
            <span className="font-mono">{user.wallet}</span>
            {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
          </button>

          <button
            className="relative rounded-lg border border-electric/20 bg-navy-700/50 p-2 text-slate-300 hover:text-electric"
            aria-label="Notifications"
          >
            <Bell size={18} />
            <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-gold animate-pulse-glow" />
          </button>

          <div className="flex items-center gap-2 rounded-lg border border-gold/30 bg-navy-700/50 px-2 py-1.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-gold to-amber-600 text-sm font-bold text-navy-900">
              JD
            </div>
            <div className="hidden pr-1 sm:block">
              <p className="text-xs font-semibold leading-tight text-white">{user.name}</p>
              <p className="text-[10px] leading-tight text-gold">{user.rank}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
