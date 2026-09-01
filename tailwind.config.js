
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A1628',
          light: '#1A2D4A',
        },
        gold: {
          DEFAULT: '#C9A227',
          light: '#D4B84A',
        },
        cream: {
          DEFAULT: '#F5F1E8',
          dark: '#E8E2D5',
        },
        charcoal: '#1A1A1A',
        white: '#FAFAFA',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
