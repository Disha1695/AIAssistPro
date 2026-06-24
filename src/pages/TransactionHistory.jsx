import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import TransactionsTable from '../components/TransactionsTable'
import { fullTransactions } from '../data'

const FILTERS = ['All', 'Daily Mining Income', 'Direct Sponsor Income', 'Matching Income', 'Withdrawal']

export default function TransactionHistory() {
  const [filter, setFilter] = useState('All')

  const rows =
    filter === 'All'
      ? fullTransactions
      : fullTransactions.filter((t) => t.type.includes(filter))

  return (
    <div className="animate-fade-in space-y-6">
      <PageHeader title="Transaction History" subtitle="All your deposits, income and withdrawals" />

      <div className="flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
              filter === f
                ? 'bg-gold text-navy-900 shadow-glow-gold'
                : 'border border-electric/30 text-slate-300 hover:bg-electric/10 hover:text-electric'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <TransactionsTable rows={rows} title="All Transactions" />
    </div>
  )
}
