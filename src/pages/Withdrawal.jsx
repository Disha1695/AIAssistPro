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

  return (
    <div className="animate-fade-in space-y-8">
      <PageHeader title="Withdrawal" subtitle="Withdraw your earnings in USDT (BEP20)" />

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard icon={PiggyBank} label="Available Balance" value={`$${stats.availableBalance} USDT`} sub="Ready to withdraw" accent="gold" />
        <StatCard icon={Percent} label="Withdrawal Fee" value="15%" sub="Deducted per request" accent="electric" />
        <StatCard icon={Wallet} label="Min Withdrawal" value="15 USDT" sub="Every Tuesday" accent="gold" />
      </section>

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="card p-6">
          <div className="mb-4 flex items-center gap-2">
            <ArrowDownToLine size={18} className="text-gold" />
            <h2 className="section-title text-white">Request Withdrawal</h2>
          </div>

          <label className="text-xs text-slate-400">Amount (USDT)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount (min 15)"
            className="mt-1.5 w-full rounded-lg border border-electric/30 bg-navy-900 px-3 py-2.5 text-sm text-white outline-none focus:border-gold focus:shadow-glow-gold"
          />

          <label className="mt-4 block text-xs text-slate-400">Wallet Address (BEP20)</label>
          <input
            readOnly
            value="0x1234567890abcdef1234567890abcdef0000abcd"
            className="mt-1.5 w-full truncate rounded-lg border border-electric/20 bg-navy-900 px-3 py-2.5 font-mono text-xs text-electric outline-none"
          />

          <div className="mt-5 space-y-2 rounded-xl border border-white/10 bg-navy-900/50 p-4 text-sm">
            <div className="flex justify-between text-slate-300">
              <span>Amount</span>
              <span>${num.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>Fee (15%)</span>
              <span className="text-red-400">- ${fee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-t border-white/10 pt-2 font-semibold text-gold">
              <span>You receive</span>
              <span>${receive > 0 ? receive.toFixed(2) : '0.00'}</span>
            </div>
          </div>

          <button
            disabled={num < 15 || num > stats.availableBalance}
            className="btn-gold mt-5 w-full disabled:cursor-not-allowed disabled:opacity-40"
          >
            {num > stats.availableBalance ? 'Insufficient Balance' : 'Submit Withdrawal'}
          </button>
          <p className="mt-2 text-center text-xs text-slate-500">
            Processed every Tuesday • USDT BEP20 only
          </p>
        </div>

        <WithdrawalInfoBox items={withdrawalInfo} />
      </section>
    </div>
  )
}
