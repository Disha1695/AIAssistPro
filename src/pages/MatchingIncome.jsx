import { GitMerge, Coins, Gauge } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import StatCard from '../components/StatCard'

import { matchingPairs } from '../data'

function LegBox({ count, label }) {
  return (
    <div className="flex-1 rounded-lg border border-line bg-app p-4 text-center">
      <p className="text-xs uppercase tracking-wider text-muted">{label} Leg</p>
      <p className="mt-1 text-2xl font-bold text-ink">{count}</p>
      <p className="text-xs text-muted">members</p>
    </div>
  )
}

export default function MatchingIncome() {
  const totalMatching = matchingPairs.reduce((s, p) => s + p.income, 0)

  return (
    <div className="animate-fade-in space-y-8">
      <PageHeader title="Matching Income" subtitle="10% matching on your binary team (1:2 or 2:1, then 1:1)" />

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard icon={GitMerge} label="Matching Rate" value="10%" sub="binary matching" accent="brand" />
        <StatCard icon={Coins} label="Matching Earned" value={`$${totalMatching.toFixed(2)}`} sub="last 3 weeks" accent="gold" />
        <StatCard icon={Gauge} label="Weekly Cap" value="$100.00" sub="based on self investment" accent="brand" />
      </section>

      <div className="card p-6">
        <h2 className="section-title mb-5 text-center">Current Binary Position</h2>
        <div className="mx-auto mb-4 flex w-fit items-center justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">
            YOU
          </div>
        </div>
        <div className="mx-auto flex max-w-md items-center gap-4">
          <LegBox count={6} label="Left" />
          <span className="text-lg font-bold text-muted">:</span>
          <LegBox count={6} label="Right" />
        </div>
        <p className="mt-4 text-center text-sm text-muted">
          Matching ratio <span className="font-semibold text-ink">1:2</span> or{' '}
          <span className="font-semibold text-ink">2:1</span>, then continues at{' '}
          <span className="font-semibold text-ink">1:1</span>. Power-leg volume carries forward.
        </p>
      </div>

      <section className="card p-5">
        <h2 className="section-title mb-4">Weekly Matching History</h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[540px] text-left text-sm">
            <thead>
              <tr className="table-head">
                <th className="py-3 pr-4">Week</th>
                <th className="py-3 pr-4">Left</th>
                <th className="py-3 pr-4">Right</th>
                <th className="py-3 pr-4">Matched</th>
                <th className="py-3 pr-4">Income</th>
                <th className="py-3">Cap</th>
              </tr>
            </thead>
            <tbody>
              {matchingPairs.map((p) => (
                <tr key={p.id} className="table-row">
                  <td className="py-3 pr-4 font-medium text-ink">{p.week}</td>
                  <td className="py-3 pr-4 text-muted">{p.left}</td>
                  <td className="py-3 pr-4 text-muted">{p.right}</td>
                  <td className="py-3 pr-4 font-semibold text-brand">{p.matched}</td>
                  <td className="py-3 pr-4 font-semibold text-positive">+${p.income}</td>
                  <td className="py-3 text-muted">${p.cap}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
