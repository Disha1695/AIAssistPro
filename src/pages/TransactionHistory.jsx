import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import TransactionsTable from '../components/TransactionsTable'
import { fullTransactions } from '../data'

const FILTERS = ['All', 'Daily Mining Income', 'Direct Sponsor Income', 'Matching Income', 'Withdrawal']

export default function TransactionHistory() {
  const [filter, setFilter] = useState('All')

  const rows =
    filter === 'All' ? fullTransactions : fullTransactions.filter((t) => t.type.includes(filter))

  return (
    <div className="animate-fade-in space-y-6">
      <PageHeader title="Transaction History" subtitle="All your deposits, income and withdrawals" />

      <div className="flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-lg px-3.5 py-1.5 text-xs font-medium transition ${
              filter === f
                ? 'bg-brand text-white'
                : 'border border-line bg-surface text-muted hover:text-ink'
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
