import {
  LayoutDashboard,
  Pickaxe,
  UserPlus,
  GitMerge,
  Users,
  Wallet,
  ReceiptText,
  User,
  LogOut,
  X,
} from 'lucide-react'
import Logo from './Logo'

export const NAV_ITEMS = [
  { key: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { key: 'mining', label: 'Mining Income', icon: Pickaxe },
  { key: 'sponsor', label: 'Direct Sponsor Income', icon: UserPlus },
  { key: 'matching', label: 'Matching Income', icon: GitMerge },
  { key: 'team', label: 'My Team', icon: Users },
  { key: 'withdrawal', label: 'Withdrawal', icon: Wallet },
  { key: 'transactions', label: 'Transaction History', icon: ReceiptText },
  { key: 'profile', label: 'Profile', icon: User },
  { key: 'logout', label: 'Logout', icon: LogOut },
]

export default function Sidebar({ active, onSelect, open, onClose }) {
  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-electric/15 bg-navy-900/95 backdrop-blur-md transition-transform duration-300 lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-5 py-5">
          <Logo />
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-navy-700 lg:hidden"
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-2">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.key
            const isLogout = item.key === 'logout'
            return (
              <button
                key={item.key}
                onClick={() => onSelect(item.key)}
                className={`group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                  isActive
                    ? 'border border-gold/40 bg-gold/10 text-gold shadow-glow-gold'
                    : isLogout
                      ? 'text-red-300/80 hover:bg-red-500/10 hover:text-red-300'
                      : 'text-slate-300 hover:bg-electric/10 hover:text-electric'
                }`}
              >
                <item.icon
                  size={18}
                  className={isActive ? 'text-gold' : 'transition group-hover:scale-110'}
                />
                <span className="truncate">{item.label}</span>
              </button>
            )
          })}
        </nav>

        <div className="m-3 rounded-xl border border-electric/20 bg-navy-700/50 p-4 text-center">
          <p className="text-xs text-slate-400">Need help?</p>
          <p className="mt-1 text-sm font-semibold text-electric">24×7 Support</p>
          <button className="btn-gold mt-3 w-full">Contact Us</button>
        </div>
      </aside>
    </>
  )
}
