/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: { colors: { ink: '#10120f', paper: '#e9e8df', acid: '#c4f06a' }, fontFamily: { display: ['Arial', 'sans-serif'] } } },
  plugins: []
}
