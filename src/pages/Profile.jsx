import { Mail, Wallet, Hash, Calendar, Shield, BadgeCheck } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { user, stats } from '../data'

function Field({ icon: Icon, label, value, mono }) {
  return (
    <div className="rounded-lg border border-line bg-app p-4">
      <div className="flex items-center gap-2 text-xs text-muted">
        <Icon size={14} className="text-brand" /> {label}
      </div>
      <p className={`mt-1.5 break-all text-sm font-medium text-ink ${mono ? 'font-mono' : ''}`}>
        {value}
      </p>
    </div>
  )
}

export default function Profile() {
  return (
    <div className="animate-fade-in space-y-8">
      <PageHeader title="Profile" subtitle="Your account details and security settings" />

      <div className="card flex flex-col items-center gap-5 p-6 sm:flex-row">
        <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-blue-700 text-xl font-bold text-white">
          JD
        </div>
        <div className="text-center sm:text-left">
          <div className="flex items-center justify-center gap-2 sm:justify-start">
            <h2 className="text-lg font-bold text-ink">{user.name}</h2>
            <BadgeCheck size={18} className="text-brand" />
          </div>
          <p className="text-sm text-muted">{user.rank}</p>
          <p className="mt-0.5 text-xs text-muted">Member since {user.joinedOn}</p>
        </div>
        <div className="grid grid-cols-2 gap-3 text-center sm:ml-auto">
          <div className="rounded-lg border border-line bg-app px-5 py-3">
            <p className="text-xl font-bold text-ink">{stats.directReferrals}</p>
            <p className="text-xs text-muted">Directs</p>
          </div>
          <div className="rounded-lg border border-line bg-app px-5 py-3">
            <p className="text-xl font-bold text-ink">{stats.teamSize}</p>
            <p className="text-xs text-muted">Team</p>
          </div>
        </div>
      </div>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field icon={Mail} label="Email" value="john.doe@brinx.world" />
        <Field icon={Hash} label="Referral Code" value={user.referralCode} mono />
        <Field icon={Wallet} label="Wallet Address (BEP20)" value={user.fullWallet} mono />
        <Field icon={Calendar} label="Joined On" value={user.joinedOn} />
      </section>

      <section className="card p-5">
        <div className="mb-4 flex items-center gap-2">
          <Shield size={16} className="text-brand" />
          <h2 className="section-title">Security</h2>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <button className="btn-ghost flex-1">Change Password</button>
          <button className="btn-ghost flex-1">Enable 2FA</button>
          <button className="btn-primary flex-1">Update Wallet</button>
        </div>
      </section>
    </div>
  )
}
