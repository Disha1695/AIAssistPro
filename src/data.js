// Static / dummy data for the Brinx dashboard

export const user = {
  name: 'John Doe',
  wallet: '0x1234...abcd',
  fullWallet: '0x1234567890abcdef1234567890abcdef0000abcd',
  referralCode: 'BRINX-JD-7821',
  referralLink: 'https://brinx.world/ref/BRINX-JD-7821',
  joinedOn: '12 Jan 2026',
  rank: 'Premium Miner',
}

export const stats = {
  totalInvestment: 500,
  dailyMiningRate: 1, // %
  totalEarned: 125,
  availableBalance: 80,
  directReferrals: 3,
  teamSize: 12,
}

export const packages = [
  {
    name: 'Standard Package',
    range: '$100 - $500',
    daily: '1%',
    dar: 1,
    roi: '200%',
    accent: 'electric',
    popular: false,
  },
  {
    name: 'Premium Package',
    range: '$510 - $2000',
    daily: '1.25%',
    dar: 1.25,
    roi: '200%',
    accent: 'gold',
    popular: true,
  },
  {
    name: 'Gold Package',
    range: '$2500 - $5000',
    daily: '1.50%',
    dar: 1.5,
    roi: '200%',
    accent: 'gold',
    popular: false,
  },
]

export const incomeChartData = [
  { day: 'Mon', income: 4.2 },
  { day: 'Tue', income: 5.0 },
  { day: 'Wed', income: 4.6 },
  { day: 'Thu', income: 6.1 },
  { day: 'Fri', income: 5.4 },
  { day: 'Sat', income: 6.8 },
  { day: 'Sun', income: 5.0 },
]

export const incomeTypes = [
  {
    title: 'Daily Mining Income',
    desc: 'Earn up to 1.50% daily on your active mining package, paid every 24 hours.',
    value: '1% - 1.50%',
    tag: 'Daily',
  },
  {
    title: 'Direct Sponsor Income',
    desc: 'Get 5% instantly on every direct referral that joins and activates a package.',
    value: '5% / referral',
    tag: 'Instant',
  },
  {
    title: 'Matching Income',
    desc: 'Earn 10% matching on your binary team with 1:2 or 2:1, then continue 1:1.',
    value: '10% binary',
    tag: 'Weekly',
  },
]

export const transactions = [
  { id: 1, date: '24 Jun 2026', type: 'Daily Mining Income', amount: 5.0, status: 'Success' },
  { id: 2, date: '23 Jun 2026', type: 'Direct Sponsor Income', amount: 25.0, status: 'Success' },
  { id: 3, date: '22 Jun 2026', type: 'Matching Income', amount: 18.5, status: 'Success' },
  { id: 4, date: '21 Jun 2026', type: 'Daily Mining Income', amount: 5.0, status: 'Success' },
  { id: 5, date: '20 Jun 2026', type: 'Deposit (USDT BEP20)', amount: 500.0, status: 'Success' },
]

export const fullTransactions = [
  ...transactions,
  { id: 6, date: '19 Jun 2026', type: 'Daily Mining Income', amount: 5.0, status: 'Success' },
  { id: 7, date: '18 Jun 2026', type: 'Withdrawal', amount: 40.0, status: 'Success' },
  { id: 8, date: '17 Jun 2026', type: 'Matching Income', amount: 12.0, status: 'Pending' },
  { id: 9, date: '16 Jun 2026', type: 'Direct Sponsor Income', amount: 25.0, status: 'Success' },
  { id: 10, date: '15 Jun 2026', type: 'Daily Mining Income', amount: 5.0, status: 'Success' },
]

export const team = [
  { id: 1, name: 'Alice Morgan', leg: 'Left', package: 'Standard', invested: 300, status: 'Active', joined: '14 Jan 2026' },
  { id: 2, name: 'Bob Chen', leg: 'Left', package: 'Premium', invested: 1200, status: 'Active', joined: '20 Jan 2026' },
  { id: 3, name: 'Carlos Diaz', leg: 'Right', package: 'Gold', invested: 3000, status: 'Active', joined: '02 Feb 2026' },
  { id: 4, name: 'Dina Patel', leg: 'Right', package: 'Standard', invested: 150, status: 'Active', joined: '11 Feb 2026' },
  { id: 5, name: 'Evan Wright', leg: 'Left', package: 'Premium', invested: 800, status: 'Inactive', joined: '28 Feb 2026' },
]

export const directReferrals = [
  { id: 1, name: 'Alice Morgan', invested: 300, commission: 15, date: '14 Jan 2026' },
  { id: 2, name: 'Bob Chen', invested: 1200, commission: 60, date: '20 Jan 2026' },
  { id: 3, name: 'Carlos Diaz', invested: 3000, commission: 150, date: '02 Feb 2026' },
]

export const miningHistory = [
  { id: 1, date: '24 Jun 2026', package: 'Standard', rate: '1%', base: 500, amount: 5.0 },
  { id: 2, date: '23 Jun 2026', package: 'Standard', rate: '1%', base: 500, amount: 5.0 },
  { id: 3, date: '22 Jun 2026', package: 'Standard', rate: '1%', base: 500, amount: 5.0 },
  { id: 4, date: '21 Jun 2026', package: 'Standard', rate: '1%', base: 500, amount: 5.0 },
  { id: 5, date: '20 Jun 2026', package: 'Standard', rate: '1%', base: 500, amount: 5.0 },
]

export const matchingPairs = [
  { id: 1, week: 'Week 25', left: 2, right: 1, matched: '2:1', income: 20, cap: 100 },
  { id: 2, week: 'Week 24', left: 1, right: 2, matched: '1:2', income: 15, cap: 100 },
  { id: 3, week: 'Week 23', left: 3, right: 3, matched: '1:1', income: 30, cap: 100 },
]

export const withdrawalInfo = [
  'Withdrawals are processed every Tuesday, once a week.',
  '15% deduction is applied on every withdrawal.',
  'Minimum withdrawal amount is 15 USDT.',
  'Deposit & Withdrawal only in USDT (BEP20) network.',
  'Working income 3x, Non-working income 2x — total 5x cap.',
  'User-to-user fund transfer available (min 15 USDT).',
]
