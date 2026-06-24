import { Wallet, TrendingUp, Coins, PiggyBank } from 'lucide-react'
import StatCard from '../components/StatCard'
import PackageCard from '../components/PackageCard'
import IncomeChart from '../components/IncomeChart'
import IncomeTypeCard from '../components/IncomeTypeCard'
import TransactionsTable from '../components/TransactionsTable'
import WithdrawalInfoBox from '../components/WithdrawalInfoBox'
import ReferralCard from '../components/ReferralCard'
import { stats, packages, incomeTypes, transactions, withdrawalInfo } from '../data'

export default function Dashboard() {
  return (
    <div className="animate-fade-in space-y-8">
      {/* 1. Top stats */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          icon={Wallet}
          label="Total Investment"
          value={`$${stats.totalInvestment} USDT`}
          sub="Standard Package active"
          accent="gold"
        />
        <StatCard
          icon={TrendingUp}
          label="Daily Mining Income"
          value={`${stats.dailyMiningRate}%`}
          sub="≈ $5.00 / day"
          accent="electric"
        />
        <StatCard
          icon={Coins}
          label="Total Earned"
          value={`$${stats.totalEarned} USDT`}
          sub="Since 12 Jan 2026"
          accent="gold"
        />
        <StatCard
          icon={PiggyBank}
          label="Available Balance"
          value={`$${stats.availableBalance} USDT`}
          sub="Ready to withdraw"
          accent="electric"
        />
      </section>

      {/* 2. Mining packages */}
      <section>
        <h2 className="section-title mb-4 text-white">
          Mining <span className="text-gold">Packages</span>
        </h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {packages.map((pkg) => (
            <PackageCard key={pkg.name} pkg={pkg} />
          ))}
        </div>
      </section>

      {/* 3 + 7. Chart & referral */}
      <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <IncomeChart />
        </div>
        <div>
          <ReferralCard />
        </div>
      </section>

      {/* 4. Income types */}
      <section>
        <h2 className="section-title mb-4 text-white">
          Income <span className="text-gold">Types</span>
        </h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {incomeTypes.map((item, i) => (
            <IncomeTypeCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </section>

      {/* 5 + 6. Transactions & withdrawal info */}
      <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <TransactionsTable rows={transactions} />
        </div>
        <div>
          <WithdrawalInfoBox items={withdrawalInfo} />
        </div>
      </section>
    </div>
  )
}
