/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
      },
      colors: {
        black: '#050508',
        surface: {
          DEFAULT: '#0a0a10',
          2: '#0e0e18',
          3: '#13131f',
        },
        border: {
          DEFAULT: 'rgba(255,255,255,0.05)',
          2: 'rgba(255,255,255,0.09)',
          3: 'rgba(255,255,255,0.16)',
        },
        text: {
          DEFAULT: '#f0f0f8',
          muted: '#8080a0',
          dim: '#40405a',
        },
        brand: {
          blue: '#3b7fff',
          cyan: '#00cfff',
        },
      },
      animation: {
        'pulse-slow': 'pulseSlow 8s ease-in-out infinite',
        'blink': 'blink 2s ease-in-out infinite',
        'scroll-line': 'scrollLine 2s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulseSlow: {
          '0%, 100%': { transform: 'scale(1) translateY(0)', opacity: '0.7' },
          '50%': { transform: 'scale(1.08) translateY(-20px)', opacity: '1' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        scrollLine: {
          '0%': { transform: 'scaleY(0)', transformOrigin: 'top' },
          '50%': { transform: 'scaleY(1)', transformOrigin: 'top' },
          '51%': { transformOrigin: 'bottom' },
          '100%': { transform: 'scaleY(0)', transformOrigin: 'bottom' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}