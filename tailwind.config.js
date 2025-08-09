/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'bounce': 'bounce 2s infinite',
        'pulse': 'pulse 2s infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        'brown-600': '#8B4513'
      }
    },
  },
  plugins: [],
};