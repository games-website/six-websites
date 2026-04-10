
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#bf953f',
          'gold-light': '#fcf6ba',
          'gold-dark': '#8a642d',
          'gold-brilliant': '#b38728',
        }
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(to right, #bf953f, #fcf6ba, #b38728, #fcf6ba, #bf953f)',
        'gold-gradient-vertical': 'linear-gradient(to bottom, #bf953f, #fcf6ba, #b38728)',
      }
    },
  },
  plugins: [],
}

