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

## Landing page
A full marketing landing page (built from the AIDA pitch deck) lives in its own
folder and is shown first. Its **Get Started / Start Now / Login** buttons launch
the dashboard; the dashboard logo and Logout return to the landing page.

Sections: Hero · About · Vision & Mission · What is Crypto Mining · Benefits ·
Put Your Money to Work · Income Types · Matching Capping · Mining Packages ·
Working 3X vs Non-Working 2X · Joining Options · Upcoming Projects · Terms · CTA.
All sections support light & dark mode with 3D tilt, glass cards and the USDT coin.

## Structure
```
src/
├── App.jsx              # Landing ⇄ dashboard routing (state-based)
├── theme.jsx           # Light/dark theme provider
├── data.js             # All dummy/static data
├── components/         # Shared: Sidebar, Navbar, cards, Tilt, Coin, chart...
├── landing/            # Landing page (Navbar, Hero, About, Mining, Income,
│                       #   Packages, Projects, Footer, ui helpers)
└── pages/              # One file per dashboard sidebar section
```

All data is static/dummy — no backend required.
