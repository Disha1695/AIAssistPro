import { useState } from 'react'
import { Wallet, PiggyBank, Percent, ArrowDownToLine } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import StatCard from '../components/StatCard'
import WithdrawalInfoBox from '../components/WithdrawalInfoBox'
import { stats, withdrawalInfo } from '../data'

export default function Withdrawal() {
  const [amount, setAmount] = useState('')
  const num = parseFloat(amount) || 0
  const fee = num * 0.15
  const receive = num - fee
  const invalid = num < 15 || num > stats.availableBalance

  return (
    <div className="animate-fade-in space-y-8">
      <PageHeader title="Withdrawal" subtitle="Withdraw your earnings in USDT (BEP20)" />

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard icon={PiggyBank} label="Available Balance" value="$80.00" sub="ready to withdraw" accent="gold" />
        <StatCard icon={Percent} label="Withdrawal Fee" value="15%" sub="deducted per request" accent="brand" />
        <StatCard icon={Wallet} label="Min Withdrawal" value="15 USDT" sub="every Tuesday" accent="brand" />
      </section>

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="card p-6">
          <div className="mb-4 flex items-center gap-2">
            <ArrowDownToLine size={16} className="text-brand" />
            <h2 className="section-title">Request Withdrawal</h2>
          </div>

          <label className="text-xs font-medium text-muted">Amount (USDT)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount (min 15)"
            className="input mt-1.5"
          />

          <label className="mt-4 block text-xs font-medium text-muted">Wallet Address (BEP20)</label>
          <input
            readOnly
            value="0x1234567890abcdef1234567890abcdef0000abcd"
            className="input mt-1.5 truncate font-mono text-xs text-brand"
          />

          <div className="mt-5 space-y-2 rounded-lg border border-line bg-app p-4 text-sm">
            <div className="flex justify-between text-muted">
              <span>Amount</span>
              <span className="text-ink">${num.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-muted">
              <span>Fee (15%)</span>
              <span className="text-negative">- ${fee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-t border-line pt-2 font-semibold text-ink">
              <span>You receive</span>
              <span>${receive > 0 ? receive.toFixed(2) : '0.00'}</span>
            </div>
          </div>

          <button
            disabled={invalid}
            className="btn-primary mt-5 w-full disabled:cursor-not-allowed disabled:opacity-40"
          >
            {num > stats.availableBalance ? 'Insufficient Balance' : 'Submit Withdrawal'}
          </button>
          <p className="mt-2 text-center text-xs text-muted">
            Processed every Tuesday · USDT BEP20 only
          </p>
        </div>

        <WithdrawalInfoBox items={withdrawalInfo} />
      </section>
    </div>
  )
}
