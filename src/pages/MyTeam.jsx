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
        <StatCard icon={Users} label="Team Size" value={stats.teamSize} sub="Total members" accent="gold" />
        <StatCard icon={UserPlus} label="Direct Referrals" value={stats.directReferrals} sub="Sponsored by you" accent="electric" />
        <StatCard icon={Network} label="Left Leg" value={left} sub="Active members" accent="electric" />
        <StatCard icon={Network} label="Right Leg" value={right} sub="Active members" accent="gold" />
      </section>

      <section className="card p-5">
        <h2 className="section-title mb-4 text-white">Team Members</h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-slate-400">
                <th className="py-3 pr-4 font-semibold">Member</th>
                <th className="py-3 pr-4 font-semibold">Leg</th>
                <th className="py-3 pr-4 font-semibold">Package</th>
                <th className="py-3 pr-4 font-semibold">Invested</th>
                <th className="py-3 pr-4 font-semibold">Joined</th>
                <th className="py-3 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {team.map((m) => (
                <tr key={m.id} className="border-b border-white/5 hover:bg-electric/5">
                  <td className="py-3 pr-4">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-electric to-blue-700 text-xs font-bold text-white">
                        {m.name.split(' ').map((n) => n[0]).join('')}
                      </div>
                      <span className="font-medium text-white">{m.name}</span>
                    </div>
                  </td>
                  <td className="py-3 pr-4">
                    <span
                      className={`rounded-md px-2 py-0.5 text-xs font-semibold ${
                        m.leg === 'Left'
                          ? 'bg-electric/10 text-electric'
                          : 'bg-gold/10 text-gold'
                      }`}
                    >
                      {m.leg}
                    </span>
                  </td>
                  <td className="py-3 pr-4 text-slate-300">{m.package}</td>
                  <td className="py-3 pr-4 font-semibold text-gold">${m.invested}</td>
                  <td className="py-3 pr-4 text-slate-400">{m.joined}</td>
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
