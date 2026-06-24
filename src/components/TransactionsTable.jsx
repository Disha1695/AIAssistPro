import StatusBadge from './StatusBadge'

export default function TransactionsTable({ rows, title = 'Recent Transactions' }) {
  return (
    <div className="card p-5">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="section-title text-white">{title}</h2>
        <span className="text-xs text-slate-400">{rows.length} entries</span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] text-left text-sm">
          <thead>
            <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-slate-400">
              <th className="py-3 pr-4 font-semibold">Date</th>
              <th className="py-3 pr-4 font-semibold">Type</th>
              <th className="py-3 pr-4 font-semibold">Amount (USDT)</th>
              <th className="py-3 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((tx) => (
              <tr
                key={tx.id}
                className="border-b border-white/5 transition hover:bg-electric/5"
              >
                <td className="py-3 pr-4 text-slate-400">{tx.date}</td>
                <td className="py-3 pr-4 font-medium text-white">{tx.type}</td>
                <td className="py-3 pr-4 font-semibold text-gold">
                  ${tx.amount.toFixed(2)}
                </td>
                <td className="py-3">
                  <StatusBadge status={tx.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
