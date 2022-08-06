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
        kanit: ['Kanit'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
        'smooth-wiggle': 'smooth-wiggle 1s ease-in-out infinite',
        'fade-in': 'fade-in 3s ease-in forwards 1',
        'fade-out': 'fade-out 3s ease-out forwards 1',
        'fast-fade-out': 'fade-out 1s ease-in-out 1',
        'fade-in-scaled-up-wiggle':
          'fade-in-scaled-up 1s ease-in-out 1, smooth-wiggle 2s linear 1s 1',
        rotate: 'rotate 3s linear infinite;',
        scale: 'scale 3s ease-in-out 1;',
        typing: 'typing 2s steps(40, end)',
        'horizontal-bar':
          'horizontal-bar 2s cubic-bezier(.74, .06, .4, .92) forwards;',
        'pop-in': 'pop-in 0.8s cubic-bezier(.74, .06, .4, .92) forwards',
        floating: 'floating 3s ease-in-out infinite',
        'super-floating': 'super-floating 3s ease-in-out infinite',
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
        'secondary-fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '0.5' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'fade-in-scaled-up': {
          '0%': { opacity: '0', transform: 'scale(1.5) rotate(-1deg)' },
          '100%': { opacity: '1', transform: 'scale(1) rotate(-1deg)' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        scale: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(2)' },
        },
        typing: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        'horizontal-bar': {
          '0%': { width: '0', left: '0' },
          '50%': { width: '100%', left: '0' },
          '100%': { width: '0', left: '100%' },
        },
        floating: {
          '0%': { transform: 'translate(0,  0px)' },
          '65%': { transform: 'translate(0,  3px)' },
          '100%': { transform: 'translate(0,  -0px)' },
        },
        'super-floating': {
          '0%': { transform: 'translate(0,  0px)' },
          '65%': { transform: 'translate(0,  10px)' },
          '100%': { transform: 'translate(0,  -0px)' },
        },
        'pop-in': {
          '0% ': {
            width: ' 0px',
            height: ' 0px',
            background: ' #ffcb00',
            border: ' 0px solid #ddd',
            opacity: ' 0',
          },
          '50%': {
            width: ' 10px',
            height: ' 10px',
            background: ' #ffcb00',
            opacity: ' 1',
            bottom: ' 45px',
          },
          '65%': {
            width: ' 7px',
            height: ' 7px',
            bottom: ' 0px',
            width: '15px',
          },
          '80%': {
            width: ' 10px',
            height: ' 10px',
            bottom: '20px',
          },
          '100%': {
            width: ' 7px',
            height: ' 7px',
            background: ' #ffcb00',
            border: ' 0px solid #222',
            bottom: ' 13px',
          },
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
    require('precss'),
  ],
}
