import { LogOut } from 'lucide-react'

export default function Logout({ onCancel }) {
  return (
    <div className="animate-fade-in flex min-h-[60vh] items-center justify-center">
      <div className="card w-full max-w-md p-8 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-red-400/40 bg-red-500/10 text-red-400">
          <LogOut size={28} />
        </div>
        <h2 className="mt-4 text-xl font-bold text-white">Log out of AIDA?</h2>
        <p className="mt-1 text-sm text-slate-400">
          You will be securely signed out of your AI Digital Assets dashboard.
        </p>
        <div className="mt-6 flex gap-3">
          <button onClick={onCancel} className="btn-outline flex-1">
            Cancel
          </button>
          <button className="flex-1 rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-600">
            Confirm Logout
          </button>
        </div>
      </div>
    </div>
  )
}
