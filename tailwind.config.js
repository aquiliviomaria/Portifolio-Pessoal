/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        neonGreen: '#39FF14',
        cobaltBlue: '#0047AB',
        cyberPurple: '#A100A1',
      },
      fontFamily: {
        code: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};