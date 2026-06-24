/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        app: 'rgb(var(--app) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        elevated: 'rgb(var(--elevated) / <alpha-value>)',
        line: 'rgb(var(--line) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        brand: 'rgb(var(--brand) / <alpha-value>)',
        gold: 'rgb(var(--gold) / <alpha-value>)',
        tether: '#26A17B',
        positive: 'rgb(var(--positive) / <alpha-value>)',
        negative: 'rgb(var(--negative) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(15, 23, 42, 0.04), 0 1px 3px rgba(15, 23, 42, 0.06)',
        card: '0 1px 3px rgba(15, 23, 42, 0.06), 0 6px 16px rgba(15, 23, 42, 0.05)',
        lift: '0 18px 40px -16px rgba(15, 23, 42, 0.28), 0 8px 16px -10px rgba(15, 23, 42, 0.18)',
        '3d': '0 24px 50px -20px rgba(8, 13, 25, 0.55), 0 10px 20px -12px rgba(8, 13, 25, 0.4)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-9px)' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(20px, -16px) scale(1.08)' },
        },
        shine: {
          '0%': { transform: 'translateX(-120%) skewX(-12deg)' },
          '60%, 100%': { transform: 'translateX(220%) skewX(-12deg)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.4s ease-out',
        float: 'float 5s ease-in-out infinite',
        'spin-slow': 'spin-slow 22s linear infinite',
        drift: 'drift 16s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
