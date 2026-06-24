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
]

export default function Sidebar({ active, onSelect, open, onClose, onHome }) {
  return (
    <>
      {open && (
        <div className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm lg:hidden" onClick={onClose} />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-line bg-surface transition-transform duration-300 lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b border-line px-5">
          <button onClick={onHome} title="Back to website" className="transition hover:opacity-80">
            <Logo />
          </button>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-muted hover:bg-elevated lg:hidden"
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto p-3">
          <p className="px-3 pb-2 pt-1 text-[10px] font-semibold uppercase tracking-wider text-muted">
            Menu
          </p>
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.key
            return (
              <button
                key={item.key}
                onClick={() => onSelect(item.key)}
                className={`group relative flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                  isActive
                    ? 'bg-brand/10 text-brand'
                    : 'text-muted hover:bg-elevated hover:text-ink'
                }`}
              >
                {isActive && (
                  <span className="absolute left-0 top-1/2 h-5 w-1 -translate-y-1/2 rounded-r-full bg-brand" />
                )}
                <item.icon size={18} />
                <span className="truncate">{item.label}</span>
              </button>
            )
          })}
        </nav>

        <div className="border-t border-line p-3">
          <button
            onClick={() => onSelect('logout')}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-negative transition hover:bg-negative/10"
          >
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  )
}
