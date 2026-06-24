import { Mail, Wallet, Hash, Calendar, Shield, BadgeCheck } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { user, stats } from '../data'

function Field({ icon: Icon, label, value, mono }) {
  return (
    <div className="rounded-xl border border-electric/15 bg-navy-900/50 p-4">
      <div className="flex items-center gap-2 text-xs text-slate-400">
        <Icon size={14} className="text-electric" /> {label}
      </div>
      <p className={`mt-1.5 break-all text-sm font-medium text-white ${mono ? 'font-mono' : ''}`}>
        {value}
      </p>
    </div>
  )
}

export default function Profile() {
  return (
    <div className="animate-fade-in space-y-8">
      <PageHeader title="Profile" subtitle="Your account details and security" />

      {/* Profile header card */}
      <div className="card-gold flex flex-col items-center gap-4 p-6 sm:flex-row sm:items-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-gold to-amber-600 text-2xl font-extrabold text-navy-900 shadow-glow-gold">
          JD
        </div>
        <div className="text-center sm:text-left">
          <div className="flex items-center justify-center gap-2 sm:justify-start">
            <h2 className="text-xl font-bold text-white">{user.name}</h2>
            <BadgeCheck size={18} className="text-electric" />
          </div>
          <p className="text-sm text-gold">{user.rank}</p>
          <p className="mt-1 text-xs text-slate-400">Member since {user.joinedOn}</p>
        </div>
        <div className="sm:ml-auto grid grid-cols-2 gap-3 text-center">
          <div className="rounded-xl border border-electric/20 bg-navy-900/60 px-5 py-3">
            <p className="text-xl font-bold text-electric">{stats.directReferrals}</p>
            <p className="text-xs text-slate-400">Directs</p>
          </div>
          <div className="rounded-xl border border-gold/20 bg-navy-900/60 px-5 py-3">
            <p className="text-xl font-bold text-gold">{stats.teamSize}</p>
            <p className="text-xs text-slate-400">Team</p>
          </div>
        </div>
      </div>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field icon={Mail} label="Email" value="john.doe@aidigitalassets.world" />
        <Field icon={Hash} label="Referral Code" value={user.referralCode} mono />
        <Field icon={Wallet} label="Wallet Address (BEP20)" value={user.fullWallet} mono />
        <Field icon={Calendar} label="Joined On" value={user.joinedOn} />
      </section>

      <section className="card p-5">
        <div className="mb-4 flex items-center gap-2">
          <Shield size={18} className="text-electric" />
          <h2 className="section-title text-white">Security</h2>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <button className="btn-outline flex-1">Change Password</button>
          <button className="btn-outline flex-1">Enable 2FA</button>
          <button className="btn-gold flex-1">Update Wallet</button>
        </div>
      </section>
    </div>
  )
}
