/* eslint-disable  @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Kantumruy Pro', ...defaultTheme.fontFamily.sans],
        fancy: ['Dancing Script'],
        oswald: ['Oswald'],
        tinos: ['Tinos'],
        ultraFancy: ['Splash'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
        'smooth-wiggle': 'smooth-wiggle 1s ease-in-out infinite',
        'fade-in': 'fade-in 3s ease-in-out 1',
        'fade-out': 'fade-out 3s ease-in-out 1',
        'fast-fade-out': 'fade-out 1s ease-in-out 1',
        'fade-in-scaled-up-wiggle':
          'fade-in-scaled-up 1s ease-in-out 1, smooth-wiggle 2s linear 1s 1',
      },

      colors: {
        sky: colors.sky,
        teal: colors.teal,
        cyan: colors.cyan,
        rose: colors.rose,
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'smooth-wiggle': {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'fade-in-scaled-up': {
          '0%': { opacity: '0', transform: 'scale(1.5) rotate(-1deg)' },
          '100%': { opacity: '1', transform: 'scale(1) rotate(-1deg)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('autoprefixer'),
  ],
}
