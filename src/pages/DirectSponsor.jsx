import { UserPlus, Coins, Percent } from 'lucide-react'
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
        <StatCard icon={UserPlus} label="Direct Referrals" value={directReferrals.length} sub="active members" accent="brand" />
        <StatCard icon={Coins} label="Sponsor Income" value={`$${totalCommission.toFixed(2)}`} sub="total earned" accent="gold" />
        <StatCard icon={Percent} label="Commission Rate" value="5%" sub="instant payout" accent="brand" />
      </section>

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="card p-5 lg:col-span-2">
          <h2 className="section-title mb-4">My Direct Referrals</h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[480px] text-left text-sm">
              <thead>
                <tr className="table-head">
                  <th className="py-3 pr-4">Member</th>
                  <th className="py-3 pr-4">Invested</th>
                  <th className="py-3 pr-4">Commission (5%)</th>
                  <th className="py-3">Joined</th>
                </tr>
              </thead>
              <tbody>
                {directReferrals.map((r) => (
                  <tr key={r.id} className="table-row">
                    <td className="py-3 pr-4 font-medium text-ink">{r.name}</td>
                    <td className="py-3 pr-4 text-muted">${r.invested}</td>
                    <td className="py-3 pr-4 font-semibold text-positive">+${r.commission}</td>
                    <td className="py-3 text-muted">{r.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <ReferralCard />
      </section>
    </div>
  )
}
