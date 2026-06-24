import { Pickaxe, TrendingUp, Coins, Activity } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import StatCard from '../components/StatCard'
import IncomeChart from '../components/IncomeChart'
import PackageCard from '../components/PackageCard'
import { packages, miningHistory } from '../data'

export default function MiningIncome() {
  return (
    <div className="animate-fade-in space-y-8">
      <PageHeader title="Mining Income" subtitle="Track your daily AI-powered mining earnings" />

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={Pickaxe} label="Active Package" value="Standard" sub="$500 invested" accent="brand" />
        <StatCard icon={TrendingUp} label="Daily Rate" value="1.00%" sub="≈ $5.00 / day" accent="gold" />
        <StatCard icon={Coins} label="Mining Earned" value="$25.00" sub="last 5 days" accent="brand" />
        <StatCard icon={Activity} label="Cap Progress" value="5% / 200%" sub="$25 of $1,000" accent="gold" />
      </section>

      <IncomeChart />

      <section className="card p-5">
        <h2 className="section-title mb-4">Daily Mining History</h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead>
              <tr className="table-head">
                <th className="py-3 pr-4">Date</th>
                <th className="py-3 pr-4">Package</th>
                <th className="py-3 pr-4">Rate</th>
                <th className="py-3 pr-4">Base</th>
                <th className="py-3">Income (USDT)</th>
              </tr>
            </thead>
            <tbody>
              {miningHistory.map((r) => (
                <tr key={r.id} className="table-row">
                  <td className="py-3 pr-4 text-muted">{r.date}</td>
                  <td className="py-3 pr-4 font-medium text-ink">{r.package}</td>
                  <td className="py-3 pr-4 text-brand">{r.rate}</td>
                  <td className="py-3 pr-4 text-muted">${r.base}</td>
                  <td className="py-3 font-semibold text-ink">${r.amount.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="section-title mb-4">Upgrade Your Package</h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {packages.map((pkg) => (
            <PackageCard key={pkg.name} pkg={pkg} />
          ))}
        </div>
      </section>
    </div>
  )
}
