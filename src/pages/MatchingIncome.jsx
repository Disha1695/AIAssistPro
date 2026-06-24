import { GitMerge, Coins, Gauge } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import StatCard from '../components/StatCard'
import { matchingPairs } from '../data'

function LegBox({ count, label }) {
  return (
    <div className="flex-1 rounded-xl border border-electric/30 bg-navy-900/60 p-4 text-center">
      <p className="text-xs uppercase tracking-wider text-slate-400">{label} Leg</p>
      <p className="mt-1 text-3xl font-bold text-electric">{count}</p>
      <p className="text-xs text-slate-500">members</p>
    </div>
  )
}

export default function MatchingIncome() {
  const totalMatching = matchingPairs.reduce((s, p) => s + p.income, 0)

  return (
    <div className="animate-fade-in space-y-8">
      <PageHeader title="Matching Income" subtitle="Get 10% matching on your binary team (1:2 or 2:1, then 1:1)" />

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard icon={GitMerge} label="Matching Rate" value="10%" sub="Binary matching" accent="gold" />
        <StatCard icon={Coins} label="Matching Earned" value={`$${totalMatching} USDT`} sub="Last 3 weeks" accent="electric" />
        <StatCard icon={Gauge} label="Weekly Cap" value="$100 USDT" sub="Based on self investment" accent="gold" />
      </section>

      {/* Binary visual */}
      <div className="card p-6">
        <h2 className="section-title mb-4 text-center text-white">
          Current Binary <span className="text-gold">Position</span>
        </h2>
        <div className="mx-auto mb-4 flex max-w-md items-center justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-sm font-bold text-gold shadow-glow-gold">
            YOU
          </div>
        </div>
        <div className="mx-auto flex max-w-md gap-4">
          <LegBox count={6} label="Left" />
          <div className="flex items-center text-xl font-bold text-gold">:</div>
          <LegBox count={6} label="Right" />
        </div>
        <p className="mt-4 text-center text-sm text-slate-400">
          Matching ratio <span className="font-semibold text-gold">1:2</span> or{' '}
          <span className="font-semibold text-gold">2:1</span> then continue to{' '}
          <span className="font-semibold text-electric">1:1</span>. Power leg volume carries forward.
        </p>
      </div>

      <section className="card p-5">
        <h2 className="section-title mb-4 text-white">Weekly Matching History</h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[540px] text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-slate-400">
                <th className="py-3 pr-4 font-semibold">Week</th>
                <th className="py-3 pr-4 font-semibold">Left</th>
                <th className="py-3 pr-4 font-semibold">Right</th>
                <th className="py-3 pr-4 font-semibold">Matched</th>
                <th className="py-3 pr-4 font-semibold">Income</th>
                <th className="py-3 font-semibold">Cap</th>
              </tr>
            </thead>
            <tbody>
              {matchingPairs.map((p) => (
                <tr key={p.id} className="border-b border-white/5 hover:bg-electric/5">
                  <td className="py-3 pr-4 font-medium text-white">{p.week}</td>
                  <td className="py-3 pr-4 text-slate-300">{p.left}</td>
                  <td className="py-3 pr-4 text-slate-300">{p.right}</td>
                  <td className="py-3 pr-4 font-semibold text-electric">{p.matched}</td>
                  <td className="py-3 pr-4 font-semibold text-gold">${p.income}</td>
                  <td className="py-3 text-slate-400">${p.cap}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
