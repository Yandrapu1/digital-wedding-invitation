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
          DEFAULT: '#FAF7F0',
          50: '#FDFBF7',
          100: '#FAF7F0',
          200: '#F5EFEB',
          300: '#EFE7DF',
        },
        champagne: {
          light: '#F5EEE2',
          DEFAULT: '#E9DCC5',
          dark: '#DFCEB3',
          border: '#D8C4A5',
        },
        gold: {
          light: '#D4C097',
          DEFAULT: '#B69A62',
          metallic: '#C5A86D',
          dark: '#8C723F',
          deep: '#69532A',
        },
        espresso: {
          light: '#4B3C34',
          DEFAULT: '#30251F',
          dark: '#1F1714',
          soft: '#605047',
        },
        rose: {
          blush: '#EFE2E0',
          DEFAULT: '#C99B94',
          muted: '#B8857E',
          deep: '#9A635B',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        script: ['"Great Vibes"', 'cursive'],
        telugu: ['"Noto Serif Telugu"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        'widest-luxury': '0.25em',
        'super-luxury': '0.35em',
      },
      boxShadow: {
        'royal': '0 20px 40px -15px rgba(48, 37, 31, 0.08), 0 0 1px 1px rgba(182, 154, 98, 0.15)',
        'envelope': '0 30px 60px -20px rgba(48, 37, 31, 0.25), 0 0 2px 1px rgba(182, 154, 98, 0.3)',
        'gold-glow': '0 0 25px rgba(182, 154, 98, 0.35)',
      },
      backgroundImage: {
        'gold-foil': 'linear-gradient(135deg, #DFCEB3 0%, #B69A62 50%, #8C723F 100%)',
        'gold-shimmer': 'linear-gradient(90deg, #B69A62 0%, #E9DCC5 50%, #B69A62 100%)',
      }
    },
  },
  plugins: [],
}
