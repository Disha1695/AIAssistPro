import { ArrowDownToLine, ArrowUpRight, TrendingUp } from 'lucide-react'
import Tilt from './Tilt'
import Coin from './Coin'

function MiniStat({ label, value }) {
  return (
    <div className="glass-panel rounded-xl border border-white/10 px-4 py-3">
      <p className="text-[11px] uppercase tracking-wider text-white/60">{label}</p>
      <p className="mt-0.5 text-lg font-bold text-white">{value}</p>
    </div>
  )
}

export default function PortfolioHero() {
  return (
    <Tilt max={5}>
      <div className="relative overflow-hidden rounded-2xl border border-white/10 p-6 text-white shadow-3d sm:p-7">
        {/* gradient backdrop (dark in both themes for a premium panel) */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#0e1b3d_0%,#1e3a8a_55%,#0b1733_100%)]" />
        <div className="absolute -right-16 -top-20 -z-10 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute -bottom-24 left-8 -z-10 h-56 w-56 rounded-full bg-blue-600/15 blur-3xl" />
        {/* faint grid */}
        <div
          className="absolute inset-0 -z-10 opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.25) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.25) 1px,transparent 1px)',
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(circle at 80% 0%, black, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(circle at 80% 0%, black, transparent 70%)',
          }}
        />

        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 ring-1 ring-inset ring-white/15">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Active · Standard Package
            </div>
            <p className="mt-4 text-sm text-white/60">Total Portfolio Balance</p>
            <div className="mt-1 flex items-end gap-2">
              <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">$580.00</h2>
              <span className="mb-1.5 inline-flex items-center gap-1 rounded-md bg-emerald-400/15 px-2 py-0.5 text-xs font-semibold text-emerald-300">
                <TrendingUp size={12} /> +25%
              </span>
            </div>
            <p className="mt-1 text-sm text-white/50">≈ 580.00 USDT (BEP20)</p>
          </div>

          <Coin size={76} className="hidden sm:flex" />
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
          <MiniStat label="Invested" value="$500.00" />
          <MiniStat label="Total Earned" value="$125.00" />
          <MiniStat label="Available" value="$80.00" />
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button className="btn-gold">
            <ArrowUpRight size={16} /> Deposit
          </button>
          <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20">
            <ArrowDownToLine size={16} /> Withdraw
          </button>
        </div>
      </div>
    </Tilt>
  )
}
