import { LogOut } from 'lucide-react'

export default function Logout({ onCancel, onConfirm }) {
  return (
    <div className="animate-fade-in flex min-h-[60vh] items-center justify-center">
      <div className="card w-full max-w-md p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-negative/10 text-negative">
          <LogOut size={24} />
        </div>
        <h2 className="mt-4 text-lg font-bold text-ink">Log out of Brinx?</h2>
        <p className="mt-1 text-sm text-muted">
          You will be securely signed out of your Brinx dashboard.
        </p>
        <div className="mt-6 flex gap-3">
          <button onClick={onCancel} className="btn-ghost flex-1">
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 rounded-lg bg-negative px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Confirm Logout
          </button>
        </div>
      </div>
    </div>
  )
}
