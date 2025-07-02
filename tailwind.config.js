module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'nunito': ['Nunito', 'sans-serif'],
      },
      colors: {
        'primary': '#050505',
        'secondary': '#1D1D1F',
        'light': '#FCFCF9',
        'lighter': '#F5F5F7',
        'gray': '#E5E5E5',
        'text-gray': '#515154',
        'text-light': '#CFCFCF'
      },
      screens: {
        'mobile': '734px',
      }
    },
  },
  plugins: [],
}