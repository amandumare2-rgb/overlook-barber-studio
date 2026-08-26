/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#faf9f6',
          100: '#f4f4f0',
          200: '#eeeeea',
          300: '#e8e8e5',
          400: '#e2e3df',
          DEFAULT: '#faf9f6',
        },
        stone: {
          light: '#f4f4f0',
          container: '#eeeeea',
          muted: '#e7e2d9',
          border: '#dadad7',
        },
        charcoal: {
          50: '#757873',
          100: '#454843',
          200: '#2f312f',
          DEFAULT: '#1a1c1a',
        },
        sage: {
          light: '#e8ffe4',
          muted: '#8a9a86',
          DEFAULT: '#50634f',
          dark: '#384637',
        },
        tan: {
          light: '#f7f2ea',
          DEFAULT: '#c5a880',
          dark: '#9a7b56',
        }
      },
      fontFamily: {
        serif: ['"EB Garamond"', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.2em',
        'widest-2xl': '0.25em',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        'site': '1360px',
      }
    },
  },
  plugins: [],
}
