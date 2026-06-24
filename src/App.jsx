import { useState } from 'react'
import Sidebar, { NAV_ITEMS } from './components/Sidebar'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import MiningIncome from './pages/MiningIncome'
import DirectSponsor from './pages/DirectSponsor'
import MatchingIncome from './pages/MatchingIncome'
import MyTeam from './pages/MyTeam'
import Withdrawal from './pages/Withdrawal'
import TransactionHistory from './pages/TransactionHistory'
import Profile from './pages/Profile'
import Logout from './pages/Logout'

export default function App() {
  const [active, setActive] = useState('dashboard')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleSelect = (key) => {
    setActive(key)
    setSidebarOpen(false)
  }

  const renderPage = () => {
    switch (active) {
      case 'dashboard':
        return <Dashboard />
      case 'mining':
        return <MiningIncome />
      case 'sponsor':
        return <DirectSponsor />
      case 'matching':
        return <MatchingIncome />
      case 'team':
        return <MyTeam />
      case 'withdrawal':
        return <Withdrawal />
      case 'transactions':
        return <TransactionHistory />
      case 'profile':
        return <Profile />
      case 'logout':
        return <Logout onCancel={() => setActive('dashboard')} />
      default:
        return <Dashboard />
    }
  }

  const currentLabel = NAV_ITEMS.find((i) => i.key === active)?.label ?? 'Dashboard'

  return (
    <div className="min-h-screen">
      <Sidebar
        active={active}
        onSelect={handleSelect}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="lg:pl-64">
        <Navbar onMenu={() => setSidebarOpen(true)} />

        <main className="px-4 py-6 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-4 flex items-center gap-2 text-xs text-slate-500">
            <span className="text-electric">AIDA</span>
            <span>/</span>
            <span className="text-slate-300">{currentLabel}</span>
          </div>

          {renderPage()}

          <footer className="mt-12 border-t border-white/5 pt-6 text-center text-xs text-slate-500">
            © 2026 AI Digital Assets — Empowering the Digital Future ·{' '}
            <span className="text-electric">www.aidigitalassets.world</span>
          </footer>
        </main>
      </div>
    </div>
  )
}
