/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        "fade-out": {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        }
      },
      animation: {
        'fade-in': 'fade-in 1s',
        'fade-out': 'fade-out 2s',
        'bounce-slow': 'bounce 3s linear infinite' 
      }
    }
  },
  plugins: []
};