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
          DEFAULT: '#8C486E',
          dark: '#703254',
          light: '#A86389',
        },
        mint: {
          DEFAULT: '#FBF2F6',
          light: '#FDF8FA',
          border: '#F0D5E2',
        },
        navy: {
          DEFAULT: '#321427',
          dark: '#210A18',
        },
        muted: {
          DEFAULT: '#7D6170',
          light: '#A68A99',
        },
        accent: {
          DEFAULT: '#C98664',
          light: '#E8B89E',
        }
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
