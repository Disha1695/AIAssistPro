import { Users, UserPlus, Network } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import StatCard from '../components/StatCard'
import StatusBadge from '../components/StatusBadge'
import { team, stats } from '../data'

export default function MyTeam() {
  const left = team.filter((m) => m.leg === 'Left').length
  const right = team.filter((m) => m.leg === 'Right').length

  return (
    <div className="animate-fade-in space-y-8">
      <PageHeader title="My Team" subtitle="Manage and track your binary network" />

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={Users} label="Team Size" value={stats.teamSize} sub="total members" accent="brand" />
        <StatCard icon={UserPlus} label="Direct Referrals" value={stats.directReferrals} sub="sponsored by you" accent="gold" />
        <StatCard icon={Network} label="Left Leg" value={left} sub="active members" accent="brand" />
        <StatCard icon={Network} label="Right Leg" value={right} sub="active members" accent="gold" />
      </section>

      <section className="card p-5">
        <h2 className="section-title mb-4">Team Members</h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="table-head">
                <th className="py-3 pr-4">Member</th>
                <th className="py-3 pr-4">Leg</th>
                <th className="py-3 pr-4">Package</th>
                <th className="py-3 pr-4">Invested</th>
                <th className="py-3 pr-4">Joined</th>
                <th className="py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {team.map((m) => (
                <tr key={m.id} className="table-row">
                  <td className="py-3 pr-4">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-elevated text-xs font-semibold text-ink">
                        {m.name.split(' ').map((n) => n[0]).join('')}
                      </div>
                      <span className="font-medium text-ink">{m.name}</span>
                    </div>
                  </td>
                  <td className="py-3 pr-4">
                    <span
                      className={`rounded-md px-2 py-0.5 text-xs font-medium ${
                        m.leg === 'Left' ? 'bg-brand/10 text-brand' : 'bg-gold/10 text-gold'
                      }`}
                    >
                      {m.leg}
                    </span>
                  </td>
                  <td className="py-3 pr-4 text-muted">{m.package}</td>
                  <td className="py-3 pr-4 font-semibold text-ink">${m.invested}</td>
                  <td className="py-3 pr-4 text-muted">{m.joined}</td>
                  <td className="py-3">
                    <StatusBadge status={m.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
