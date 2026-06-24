import { UserPlus, Coins, Users } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import StatCard from '../components/StatCard'
import ReferralCard from '../components/ReferralCard'
import { directReferrals } from '../data'

export default function DirectSponsor() {
  const totalCommission = directReferrals.reduce((s, r) => s + r.commission, 0)

  return (
    <div className="animate-fade-in space-y-8">
      <PageHeader title="Direct Sponsor Income" subtitle="Earn 5% instantly on every direct referral" />

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard icon={UserPlus} label="Direct Referrals" value={directReferrals.length} sub="Active members" accent="electric" />
        <StatCard icon={Coins} label="Sponsor Income" value={`$${totalCommission} USDT`} sub="5% per referral" accent="gold" />
        <StatCard icon={Users} label="Commission Rate" value="5%" sub="Instant payout" accent="electric" />
      </section>

      <div className="card-gold p-5">
        <p className="text-center text-sm text-slate-300">
          💡 <span className="font-semibold text-gold">Earn more when you help others grow.</span> The
          more you refer, the more you get — <span className="text-electric">again &amp; again</span>.
        </p>
      </div>

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="card p-5">
            <h2 className="section-title mb-4 text-white">My Direct Referrals</h2>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[480px] text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-slate-400">
                    <th className="py-3 pr-4 font-semibold">Member</th>
                    <th className="py-3 pr-4 font-semibold">Invested</th>
                    <th className="py-3 pr-4 font-semibold">Commission (5%)</th>
                    <th className="py-3 font-semibold">Joined</th>
                  </tr>
                </thead>
                <tbody>
                  {directReferrals.map((r) => (
                    <tr key={r.id} className="border-b border-white/5 hover:bg-electric/5">
                      <td className="py-3 pr-4 font-medium text-white">{r.name}</td>
                      <td className="py-3 pr-4 text-slate-300">${r.invested}</td>
                      <td className="py-3 pr-4 font-semibold text-gold">${r.commission}</td>
                      <td className="py-3 text-slate-400">{r.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div>
          <ReferralCard />
        </div>
      </section>
    </div>
  )
}
