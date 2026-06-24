/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#050d1f',
          800: '#0a0f2e',
          700: '#0f1a3d',
          600: '#16234f',
        },
        gold: '#FFD700',
        electric: '#00BFFF',
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-blue': '0 0 15px rgba(0, 191, 255, 0.35), inset 0 0 8px rgba(0, 191, 255, 0.08)',
        'glow-gold': '0 0 15px rgba(255, 215, 0, 0.35), inset 0 0 8px rgba(255, 215, 0, 0.08)',
        'glow-blue-lg': '0 0 25px rgba(0, 191, 255, 0.5)',
        'glow-gold-lg': '0 0 25px rgba(255, 215, 0, 0.5)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.4s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
