/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0066f5',
        secondary: { text: '#66b3ff', bg: '#f3f6ff' }
      }
    }
  },
  plugins: []
}
