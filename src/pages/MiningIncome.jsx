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
        <StatCard icon={Pickaxe} label="Active Package" value="Standard" sub="$500 invested" accent="gold" />
        <StatCard icon={TrendingUp} label="Daily Rate" value="1%" sub="≈ $5.00 / day" accent="electric" />
        <StatCard icon={Coins} label="Mining Earned" value="$25 USDT" sub="Last 5 days" accent="gold" />
        <StatCard icon={Activity} label="Cap Progress" value="5% / 200%" sub="$25 of $1000" accent="electric" />
      </section>

      <IncomeChart />

      <section>
        <h2 className="section-title mb-4 text-white">
          Daily Mining <span className="text-gold">History</span>
        </h2>
        <div className="card overflow-x-auto p-5">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-slate-400">
                <th className="py-3 pr-4 font-semibold">Date</th>
                <th className="py-3 pr-4 font-semibold">Package</th>
                <th className="py-3 pr-4 font-semibold">Rate</th>
                <th className="py-3 pr-4 font-semibold">Base</th>
                <th className="py-3 font-semibold">Income (USDT)</th>
              </tr>
            </thead>
            <tbody>
              {miningHistory.map((r) => (
                <tr key={r.id} className="border-b border-white/5 hover:bg-electric/5">
                  <td className="py-3 pr-4 text-slate-400">{r.date}</td>
                  <td className="py-3 pr-4 font-medium text-white">{r.package}</td>
                  <td className="py-3 pr-4 text-electric">{r.rate}</td>
                  <td className="py-3 pr-4 text-slate-300">${r.base}</td>
                  <td className="py-3 font-semibold text-gold">${r.amount.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="section-title mb-4 text-white">
          Upgrade Your <span className="text-gold">Package</span>
        </h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {packages.map((pkg) => (
            <PackageCard key={pkg.name} pkg={pkg} />
          ))}
        </div>
      </section>
    </div>
  )
}
