/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#F8F5EE',
        'ivory-dark': '#EDE8DC',
        gold: '#C9963C',
        'gold-light': '#D4AF37',
        'gold-dark': '#A07828',
        'gold-pale': '#F0E4C4',
        charcoal: '#1F2937',
        'charcoal-light': '#374151',
        navy: '#0F172A',
        'slate-warm': '#64748B',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Lato"', 'system-ui', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'gold-sm': '0 2px 8px rgba(201,150,60,0.15)',
        'gold-md': '0 4px 20px rgba(201,150,60,0.25)',
        'gold-lg': '0 8px 40px rgba(201,150,60,0.35)',
        'elegant': '0 4px 24px rgba(15,23,42,0.12)',
        'elegant-lg': '0 12px 48px rgba(15,23,42,0.18)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9963C 0%, #D4AF37 40%, #B8860B 100%)',
        'ivory-gradient': 'linear-gradient(180deg, #F8F5EE 0%, #EDE8DC 100%)',
        'hero-gradient': 'linear-gradient(180deg, rgba(15,23,42,0.65) 0%, rgba(15,23,42,0.3) 50%, rgba(15,23,42,0.75) 100%)',
      },
      animation: {
        'pulse-gold': 'pulseGold 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(201,150,60,0.5)' },
          '50%': { boxShadow: '0 0 0 12px rgba(201,150,60,0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      },
    },
  },
  plugins: [],
}