import { Wallet, TrendingUp, Coins, PiggyBank } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import StatCard from '../components/StatCard'
import PackageCard from '../components/PackageCard'
import IncomeChart from '../components/IncomeChart'
import IncomeTypeCard from '../components/IncomeTypeCard'
import TransactionsTable from '../components/TransactionsTable'
import WithdrawalInfoBox from '../components/WithdrawalInfoBox'
import ReferralCard from '../components/ReferralCard'
import PortfolioHero from '../components/PortfolioHero'
import { stats, packages, incomeTypes, transactions, withdrawalInfo } from '../data'

export default function Dashboard() {
  return (
    <div className="animate-fade-in space-y-8">
      <PageHeader title="Dashboard" subtitle="Overview of your mining portfolio and earnings" />

      {/* Hero portfolio panel + referral */}
      <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <PortfolioHero />
        </div>
        <ReferralCard />
      </section>

      {/* Stats */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={Wallet} label="Total Investment" value="$500.00" sub="Standard Package" accent="brand" />
        <StatCard icon={TrendingUp} label="Daily Mining Income" value="1.00%" trend="≈ $5.00/day" accent="gold" />
        <StatCard icon={Coins} label="Total Earned" value="$125.00" trend="+25%" sub="all time" accent="brand" />
        <StatCard icon={PiggyBank} label="Available Balance" value="$80.00" sub="ready to withdraw" accent="gold" />
      </section>

      {/* Chart + income types */}
      <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <IncomeChart />
        </div>
        <WithdrawalInfoBox items={withdrawalInfo} />
      </section>

      {/* Packages */}
      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="section-title">Mining Packages</h2>
          <span className="text-xs text-muted">200% total return on all tiers</span>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {packages.map((pkg) => (
            <PackageCard key={pkg.name} pkg={pkg} />
          ))}
        </div>
      </section>

      {/* Income types */}
      <section>
        <h2 className="section-title mb-4">Income Types</h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {incomeTypes.map((item, i) => (
            <IncomeTypeCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </section>

      {/* Recent transactions */}
      <section>
        <TransactionsTable rows={transactions} />
      </section>
    </div>
  )
}
