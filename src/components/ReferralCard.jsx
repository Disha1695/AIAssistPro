import { useState } from 'react'
import { Copy, Check, Users, UserPlus } from 'lucide-react'
import { user, stats } from '../data'

export default function ReferralCard() {
  const [copied, setCopied] = useState(false)

  const copyLink = () => {
    navigator.clipboard?.writeText(user.referralLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="card p-5">
      <h2 className="section-title">Referral Program</h2>
      <p className="mt-1 text-xs text-muted">Earn 5% on every direct referral</p>

      <label className="mt-4 block text-xs font-medium text-muted">My Referral Link</label>
      <div className="mt-1.5 flex items-center gap-2">
        <input readOnly value={user.referralLink} className="input truncate text-xs" />
        <button
          onClick={copyLink}
          className="flex shrink-0 items-center gap-1.5 rounded-lg bg-brand px-3 py-2.5 text-xs font-semibold text-white transition hover:opacity-90"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-lg border border-line bg-app p-4">
          <UserPlus size={16} className="text-brand" />
          <p className="mt-2 text-xl font-bold text-ink">{stats.directReferrals}</p>
          <p className="text-xs text-muted">Direct Referrals</p>
        </div>
        <div className="rounded-lg border border-line bg-app p-4">
          <Users size={16} className="text-gold" />
          <p className="mt-2 text-xl font-bold text-ink">{stats.teamSize}</p>
          <p className="text-xs text-muted">Team Size</p>
        </div>
      </div>
    </div>
  )
}
