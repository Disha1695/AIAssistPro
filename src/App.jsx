import { useState } from 'react'
import Sidebar, { NAV_ITEMS } from './components/Sidebar'
import Navbar from './components/Navbar'
import Background from './components/Background'
import Landing from './landing/Landing'
import Dashboard from './pages/Dashboard'
import MiningIncome from './pages/MiningIncome'
import DirectSponsor from './pages/DirectSponsor'
import MatchingIncome from './pages/MatchingIncome'
import MyTeam from './pages/MyTeam'
import Withdrawal from './pages/Withdrawal'
import TransactionHistory from './pages/TransactionHistory'
import Profile from './pages/Profile'
import Logout from './pages/Logout'

const PAGES = {
  dashboard: Dashboard,
  mining: MiningIncome,
  sponsor: DirectSponsor,
  matching: MatchingIncome,
  team: MyTeam,
  withdrawal: Withdrawal,
  transactions: TransactionHistory,
  profile: Profile,
}

const LABELS = { ...Object.fromEntries(NAV_ITEMS.map((i) => [i.key, i.label])), logout: 'Logout' }

export default function App() {
  const [view, setView] = useState('landing')
  const [active, setActive] = useState('dashboard')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleSelect = (key) => {
    setActive(key)
    setSidebarOpen(false)
  }

  const launchApp = () => {
    setActive('dashboard')
    setView('app')
  }

  if (view === 'landing') {
    return <Landing onLaunch={launchApp} />
  }

  const Page = PAGES[active]

  return (
    <div className="min-h-screen">
      <Background />
      <Sidebar
        active={active}
        onSelect={handleSelect}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onHome={() => setView('landing')}
      />

      <div className="lg:pl-64">
        <Navbar onMenu={() => setSidebarOpen(true)} />

        <main className="px-4 py-6 sm:px-6 lg:px-8">
          <div className="mb-4 flex items-center gap-2 text-xs text-muted">
            <span>AIDA</span>
            <span>/</span>
            <span className="font-medium text-ink">{LABELS[active] ?? 'Dashboard'}</span>
          </div>

          {active === 'logout' ? (
            <Logout
              onCancel={() => setActive('dashboard')}
              onConfirm={() => {
                setActive('dashboard')
                setView('landing')
              }}
            />
          ) : (
            <Page />
          )}

          <footer className="mt-12 border-t border-line pt-6 text-center text-xs text-muted">
            © 2026 AI Digital Assets · Empowering the Digital Future ·{' '}
            <span className="text-brand">www.aidigitalassets.world</span>
          </footer>
        </main>
      </div>
    </div>
  )
}
