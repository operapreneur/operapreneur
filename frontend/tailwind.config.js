const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  experimental: {
    optimizeUniversalDefaults: true,
  },
  content: [
    './pages/**/*.js',
    './components/**/*.js',
    './layouts/**/*.js',
    './lib/**/*.js',
    './data/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        '9/16': '56.25%',
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        'sans': ['Nexa', 'sans-serif'],
        'serif': ['Rische-Semibold', 'serif']
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'midnight': '#002B40',
        'teal': {
          400: '#0a6384',
          500: '#084D66',
          600: '#05394b'
        },
        'sky': {
          400: '#79a1c2',
          500: '#6694BA',
          600: '#4f84af'
        },
        'sage': {
          400: '#5f8b72',
          500: '#527863',
          600: '#466754'
        },
        'mint': '#B0C4BA',
        'slate': '#E5E8E8',
        gray: colors.neutral,
        black: colors.black,
        white: colors.white,
        primary: colors.teal
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.midnight'),
            a: {
              color: theme('colors.sage.500'),
              '&:hover': {
                color: `${theme('colors.sage.600')} !important`,
              },
              code: { color: theme('colors.sage.400') },
            },
            h1: {
              fontFamily: 'Rische-Semibold',
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.midnight'),
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.midnight'),
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.midnight'),
            },
            'h4,h5,h6': {
              color: theme('colors.midnight'),
            },
            pre: {
              backgroundColor: theme('colors.gray.800'),
            },
            code: {
              color: theme('colors.pink.500'),
              backgroundColor: theme('colors.gray.100'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            details: {
              backgroundColor: theme('colors.gray.100'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            hr: { borderColor: theme('colors.gray.200') },
            'ol li::marker': {
              fontWeight: '600',
              color: theme('colors.gray.500'),
            },
            'ul li::marker': {
              backgroundColor: theme('colors.gray.500'),
            },
            strong: { color: theme('colors.gray.600') },
            blockquote: {
              color: theme('colors.gray.900'),
              borderLeftColor: theme('colors.gray.200'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.sage.500'),
              '&:hover': {
                color: `${theme('colors.sage.400')} !important`,
              },
              code: { color: theme('colors.sage.400') },
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.100'),
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.100'),
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.gray.100'),
            },
            'h4,h5,h6': {
              color: theme('colors.gray.100'),
            },
            pre: {
              backgroundColor: theme('colors.gray.800'),
            },
            code: {
              backgroundColor: theme('colors.gray.800'),
            },
            details: {
              backgroundColor: theme('colors.gray.800'),
            },
            hr: { borderColor: theme('colors.gray.700') },
            'ol li::marker': {
              fontWeight: '600',
              color: theme('colors.gray.400'),
            },
            'ul li::marker': {
              backgroundColor: theme('colors.gray.400'),
            },
            strong: { color: theme('colors.gray.100') },
            thead: {
              th: {
                color: theme('colors.gray.100'),
              },
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700'),
              },
            },
            blockquote: {
              color: theme('colors.gray.100'),
              borderLeftColor: theme('colors.gray.700'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
