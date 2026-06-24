import { useState } from 'react'
import { Copy, Check, Users, UserPlus, Share2 } from 'lucide-react'
import { user, stats } from '../data'

export default function ReferralCard() {
  const [copied, setCopied] = useState(false)

  const copyLink = () => {
    navigator.clipboard?.writeText(user.referralLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="card-gold p-5">
      <div className="mb-4 flex items-center gap-2">
        <Share2 size={18} className="text-gold" />
        <h2 className="section-title text-white">Referral Program</h2>
      </div>

      <label className="text-xs text-slate-400">My Referral Link</label>
      <div className="mt-1.5 flex items-center gap-2">
        <input
          readOnly
          value={user.referralLink}
          className="w-full truncate rounded-lg border border-electric/30 bg-navy-900 px-3 py-2 text-xs text-electric outline-none"
        />
        <button
          onClick={copyLink}
          className="flex shrink-0 items-center gap-1.5 rounded-lg bg-gold px-3 py-2 text-xs font-semibold text-navy-900 transition hover:shadow-glow-gold-lg"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-electric/20 bg-navy-900/60 p-4 text-center">
          <UserPlus size={18} className="mx-auto text-electric" />
          <p className="mt-1 text-2xl font-bold text-white">{stats.directReferrals}</p>
          <p className="text-xs text-slate-400">Direct Referrals</p>
        </div>
        <div className="rounded-xl border border-gold/20 bg-navy-900/60 p-4 text-center">
          <Users size={18} className="mx-auto text-gold" />
          <p className="mt-1 text-2xl font-bold text-white">{stats.teamSize}</p>
          <p className="text-xs text-slate-400">Team Size</p>
        </div>
      </div>
    </div>
  )
}
