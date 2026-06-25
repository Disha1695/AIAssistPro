# AI Digital Assets (AIDA) — Platform Overview & Flow

> **Empowering the Digital Future** — a next-generation crypto-mining investment platform with an AI-powered dashboard, referral/binary income engine, and USDT (BEP20) deposits & withdrawals.

This document explains, in plain language, **what the platform does, how money flows through it, and how the system is built end-to-end** — so it can be walked through with a client in a single read.

---

## 1. What We Are Building

AIDA is a **crypto-mining + network-marketing (MLM) investment platform**. A user deposits **USDT**, activates a **mining package**, and then earns income in three ways:

1. **Daily Mining Income** — a fixed daily % on the active package.
2. **Direct Sponsor Income** — a commission for referring new investors.
3. **Matching (Binary) Income** — a % on the matched business volume of their left/right team.

All earnings accumulate in a wallet balance that the user can **withdraw in USDT (BEP20)** on a weekly cycle.

The product has **two faces**:

| Surface | Audience | Purpose |
|--------|----------|---------|
| **Landing Page** | Public / prospects | Marketing — explains the platform, packages, income types, and drives sign-ups. |
| **User Dashboard** | Logged-in investors | Operations — deposit, view income, manage team, withdraw, profile. |

---

## 2. The Money Model (Business Rules)

These are the core rules the platform enforces (sourced from the company plan):

### Packages
| Package | Investment Range | Daily Mining Income | Max Return |
|---------|------------------|---------------------|-----------|
| **Standard** | $100 – $500 | **1.00% / day** | 200% |
| **Premium** | $510 – $2,000 | **1.25% / day** | 200% |
| **Gold** | $2,500 – $5,000 | **1.50% / day** | 200% |

> Minimum joining amount is **$15**.

### Income Types
- **Daily Mining Income** — paid every 24 hours on the active package value.
- **Direct Sponsor Income** — **5%** instantly on each direct referral's activation.
- **Matching Income** — **10%** on binary matching; first match is **1:2 or 2:1**, then continues **1:1**. Power-leg (stronger side) volume is **carried forward**.

### Caps & Limits
- **Total earning cap = 5x** of investment → **3x from Working income**, **2x from Non-working income**.
- **Re-topup** required after **200%** income is reached on the Non-working (2x) side.
- **Weekly Matching Capping** applies per self-investment tier (e.g. 15 → 15, 100 → 100, … 5000 → 5000 USDT), counted **Monday → Monday**.

### Deposits & Withdrawals
- **Currency:** USDT only. **Network:** BEP20 (BNB Smart Chain). Payouts by company are made **only in USDT**.
- **Withdrawals:** processed **only on Tuesday**, once per week.
- **Withdrawal deduction:** **15%**.
- **Minimum withdrawal:** **15 USDT**.
- **User-to-user transfer:** allowed, minimum **15 USDT**.

---

## 3. End-to-End User Flow

```
                         ┌─────────────────────────────────────────────┐
                         │              LANDING PAGE                    │
                         │  Learn about AIDA → "Get Started / Login"    │
                         └───────────────────────┬─────────────────────┘
                                                 │
                          ┌──────────────────────▼──────────────────────┐
                          │  1. SIGN UP (with sponsor's referral link)   │
                          │     → placed in sponsor's binary tree        │
                          └──────────────────────┬──────────────────────┘
                                                 │
                          ┌──────────────────────▼──────────────────────┐
                          │  2. DEPOSIT USDT (BEP20) to platform wallet  │
                          │     → blockchain confirms → balance credited │
                          └──────────────────────┬──────────────────────┘
                                                 │
                          ┌──────────────────────▼──────────────────────┐
                          │  3. ACTIVATE A MINING PACKAGE                │
                          │     (Standard / Premium / Gold)              │
                          └──────────────────────┬──────────────────────┘
                                                 │
          ┌──────────────────────────────────────┼──────────────────────────────────────┐
          ▼                                       ▼                                       ▼
  ┌────────────────┐                  ┌──────────────────────┐                ┌────────────────────┐
  │ DAILY MINING   │                  │ DIRECT SPONSOR       │                │ MATCHING (BINARY)  │
  │ income engine  │                  │ 5% on referral join  │                │ 10% on matched BV  │
  │ runs every 24h │                  └──────────────────────┘                │ (1:2/2:1 → 1:1)    │
  └───────┬────────┘                                                          └─────────┬──────────┘
          │                                                                             │
          └───────────────────────────────┬─────────────────────────────────────────────┘
                                           ▼
                          ┌──────────────────────────────────────┐
                          │  4. WALLET BALANCE grows (capped 5x)  │
                          └──────────────────────┬───────────────┘
                                                 ▼
                          ┌──────────────────────────────────────┐
                          │  5. WITHDRAW (Tue, weekly, −15%, USDT)│
                          │     or RE-TOPUP after 200%            │
                          └──────────────────────────────────────┘
```

---

## 4. System Architecture (Frontend ↔ Backend ↔ Blockchain)

```
   ┌──────────────────┐        HTTPS / REST API        ┌────────────────────────────┐
   │   FRONTEND (UI)  │  ───────────────────────────▶  │        BACKEND (API)        │
   │  React + Vite    │  ◀───────────────────────────  │  Node.js / Express (or       │
   │  Tailwind CSS    │        JSON responses          │  NestJS) + JWT auth          │
   └──────────────────┘                                └───────────────┬─────────────┘
                                                                        │
                        ┌───────────────────────────────┬──────────────┴───────────────┐
                        ▼                                ▼                              ▼
                ┌───────────────┐              ┌──────────────────┐          ┌────────────────────┐
                │   DATABASE    │              │  SCHEDULED JOBS   │          │  BLOCKCHAIN LAYER  │
                │ PostgreSQL /  │              │  (Cron workers)   │          │  BNB Smart Chain   │
                │ MySQL         │              │  • daily mining   │          │  USDT BEP20        │
                │ users, wallet,│              │  • matching calc  │          │  • deposit watcher │
                │ packages, tx, │              │  • capping reset  │          │  • withdrawal      │
                │ tree, income  │              │  • payout queue   │          │    payout (signer) │
                └───────────────┘              └──────────────────┘          └────────────────────┘
```

**Why this split:**
- The **frontend** is purely presentation — it never holds business logic or money rules.
- The **backend** is the single source of truth for balances, income calculation, and caps.
- **Scheduled jobs (cron)** run the recurring money logic (daily mining, weekly matching/withdrawal) so it is automatic and tamper-proof.
- The **blockchain layer** handles real USDT in/out via the BEP20 network.

---

## 5. Current Build — Frontend (What's Done Today)

The frontend is **fully built and working** with realistic dummy data, so the client can see and click through the entire experience. It is wired so that connecting the backend is a drop-in step (replace the static data with API calls).

**Tech stack:** React 18 (hooks) · Vite · Tailwind CSS · Recharts (charts) · Lucide (icons) · light/dark theme.

### Landing page (`src/landing/`)
A full marketing site mirroring the company deck:
`Hero` → `About / Vision & Mission` → `What is Mining / Benefits` → `Put Money to Work / Income Types` → `Packages` → `Working vs Non-Working (3x/2x)` → `Matching Capping` → `Joining Options` → `Upcoming Projects` → `Terms` → `CTA / Footer`.

### Dashboard (`src/pages/`)
| Screen | Shows |
|--------|-------|
| **Dashboard** | Portfolio hero, stat cards, income chart, income types, recent transactions, withdrawal info, referral. |
| **Mining Income** | Daily mining history + earning rate. |
| **Direct Sponsor** | 5% referral commissions + direct list. |
| **Matching Income** | Binary 1:2 / 2:1 matching + weekly capping. |
| **My Team** | Left/right binary team, volume, status. |
| **Withdrawal** | Request withdrawal, rules (Tue, 15%, min 15 USDT). |
| **Transaction History** | Full ledger with status badges. |
| **Profile** | User info, wallet address, referral code/link. |

> All numbers currently come from one file — [`src/data.js`](src/data.js). This is the single place that gets replaced by live API data.

---

## 6. Proposed Backend (What We Build Next)

### 6.1 Data Model (core tables)
- **users** — id, name, email, password (hashed), sponsor_id, position (left/right), rank, status.
- **wallets** — user_id, deposit_balance, income_balance, total_withdrawn.
- **packages** — user active package, invested amount, activation date, accrued %, cap status (toward 5x).
- **transactions** — every credit/debit: type (deposit, daily_mining, sponsor, matching, withdrawal, transfer), amount, status, timestamp, tx_hash.
- **binary_tree** — left/right child links, left BV, right BV, carry-forward volume.
- **income_logs** — daily mining, sponsor, matching breakdowns for audit.
- **withdrawals** — request, deduction, net amount, payout tx_hash, processed_on.

### 6.2 Key API Endpoints (illustrative)
```
POST  /auth/register            # sign up with referral code → place in tree
POST  /auth/login               # JWT login
GET   /me                       # profile + wallet + active package
POST  /deposit/intent           # get platform USDT address / verify deposit
POST  /package/activate         # activate Standard/Premium/Gold
GET   /income/daily             # mining history
GET   /income/sponsor           # direct referral commissions
GET   /income/matching          # binary matching + capping
GET   /team                     # binary team tree + volumes
POST  /withdraw/request         # create withdrawal (validates Tue/min/cap)
GET   /transactions             # full ledger
POST  /transfer                 # user-to-user USDT transfer (min 15)
```

### 6.3 Automated Jobs (cron workers)
- **Daily Mining (every 24h):** credit each active package its daily % (1% / 1.25% / 1.50%), stop at the 200% / 5x cap.
- **Matching Engine:** match left/right BV (1:2 or 2:1 → 1:1), pay 10%, apply weekly capping, carry forward power-leg volume.
- **Weekly Reset (Mon→Mon):** reset matching capping window.
- **Withdrawal Run (Tuesday):** process the queue, apply 15% deduction, sign & send USDT BEP20 payouts, store tx hash.

### 6.4 Blockchain Integration (USDT BEP20)
- **Deposits:** watch the platform's BSC wallet (via web3 / ethers + a node provider) → on confirmation, credit the user.
- **Withdrawals:** a secured hot-wallet signer sends USDT to the user's address; tx hash recorded for transparency.
- **Security:** private keys in a vault/HSM, withdrawal whitelisting, admin approval thresholds.

---

## 7. Security & Trust Measures
- JWT authentication, hashed passwords, role-based admin panel.
- All money math runs **server-side only**; the UI just displays results.
- Every balance change is an **immutable transaction log** (full audit trail).
- On-chain **tx hashes** stored for every deposit & withdrawal → verifiable transparency.
- Caps (5x), weekly windows, and deduction rules enforced in the backend, not the client.

---

## 8. Running the Current Frontend

```bash
# install dependencies
npm install

# start dev server (http://localhost:5173)
npm run dev

# production build
npm run build
npm run preview
```

**Project structure**
```
src/
├─ landing/        # public marketing site (Hero, About, Packages, …)
├─ pages/          # dashboard screens (Dashboard, Mining, Withdrawal, …)
├─ components/     # shared UI (cards, charts, sidebar, navbar, 3D coin, tilt)
├─ data.js         # ← all dummy data (single swap point for the live API)
├─ theme.jsx       # light / dark theme provider
└─ App.jsx         # landing ↔ dashboard routing
```

---

## 9. Roadmap / Upcoming Projects
As per the company plan, future modules include: **Forex Broker House, Advanced AI Robot Trading, Native Token, own Blockchain, Decentralized Wallet, and a Crypto Exchange.**

---

### Summary for the Client
> The **front-end experience is complete and clickable today** — landing page + full investor dashboard in light & dark mode. The **next phase is the backend**: a secure API + database that runs the income rules automatically (daily mining, sponsor 5%, binary matching 10%, 5x cap) and connects to the **USDT BEP20** blockchain for real deposits and weekly withdrawals. Once the backend is live, we simply point the dashboard at the API and the platform is production-ready.

---

*AI Digital Assets — Building Wealth. Powered by AI.* · `www.aidigitalassets.world`
