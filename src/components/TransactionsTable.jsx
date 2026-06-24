import StatusBadge from './StatusBadge'

export default function TransactionsTable({ rows, title = 'Recent Transactions' }) {
  return (
    <div className="card p-5">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="section-title">{title}</h2>
        <span className="text-xs text-muted">{rows.length} entries</span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] text-left text-sm">
          <thead>
            <tr className="table-head">
              <th className="py-3 pr-4">Date</th>
              <th className="py-3 pr-4">Type</th>
              <th className="py-3 pr-4">Amount (USDT)</th>
              <th className="py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((tx) => (
              <tr key={tx.id} className="table-row">
                <td className="py-3 pr-4 text-muted">{tx.date}</td>
                <td className="py-3 pr-4 font-medium text-ink">{tx.type}</td>
                <td className="py-3 pr-4 font-semibold text-ink">${tx.amount.toFixed(2)}</td>
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
