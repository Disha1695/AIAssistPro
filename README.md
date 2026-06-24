# AI Digital Assets (AIDA) — User Dashboard

A React.js user dashboard for the **AI Digital Assets** crypto mining platform.
Dark-navy + gold/blue neon theme, fully responsive, with working sidebar navigation
and dummy/static data.

## Tech Stack
- **React 18** (hooks: `useState`, `useEffect`)
- **Vite** (dev server + build)
- **Tailwind CSS** (theme: `#0a0f2e` navy, `#FFD700` gold, `#00BFFF` blue)
- **Recharts** (income line chart)
- **lucide-react** (icons)

## Getting Started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (default http://localhost:5173).

Build for production:

```bash
npm run build
npm run preview
```

## Pages (sidebar navigation)
| Menu | Content |
|------|---------|
| Dashboard | Stats cards, mining packages, income chart, income types, recent transactions, withdrawal info, referral |
| Mining Income | Package stats, chart, daily mining history, upgrade packages |
| Direct Sponsor Income | 5% per referral, direct referral list |
| Matching Income | 10% binary (1:2 / 2:1 → 1:1), weekly history |
| My Team | Binary team stats + member table |
| Withdrawal | Withdrawal form (15% fee, min 15 USDT), info box |
| Transaction History | Filterable full transaction table |
| Profile | Account details + security |
| Logout | Logout confirmation |

## Structure
```
src/
├── App.jsx              # Layout + page router (state-based)
├── data.js             # All dummy/static data
├── components/         # Sidebar, Navbar, cards, chart, table, etc.
└── pages/              # One file per sidebar section
```

All data is static/dummy — no backend required.
