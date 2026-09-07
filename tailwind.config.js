/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00B894',
          dark: '#009F7A',
          light: '#33D1B1',
        },
        mint: {
          DEFAULT: '#E9FBF6',
          light: '#F5FFFC',
          border: '#D0F4EB',
        },
        navy: {
          DEFAULT: '#123B53',
          dark: '#0B2535',
        },
        muted: {
          DEFAULT: '#607D8B',
          light: '#90A4AE',
        },
        accent: {
          DEFAULT: '#FFAA00',
          light: '#FFBC33',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 30px -5px rgba(0, 184, 148, 0.08)',
        'card': '0 4px 20px 0 rgba(18, 59, 83, 0.05)',
        'card-hover': '0 12px 35px -5px rgba(0, 184, 148, 0.15)',
        'floating': '0 15px 35px rgba(18, 59, 83, 0.1)',
      },
      borderRadius: {
        '4xl': '2.5rem',
        '5xl': '3rem',
      }
    },
  },
  plugins: [],
}
