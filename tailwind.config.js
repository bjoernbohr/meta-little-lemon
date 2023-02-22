module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ripe-lemon': {
          DEFAULT: '#F4CE14',
          50: '#FCF3C3',
          100: '#FBEFB0',
          200: '#F9E689',
          300: '#F8DE62',
          400: '#F6D63B',
          500: '#F4CE14',
          600: '#C7A609',
          700: '#917A07',
          800: '#5B4D04',
          900: '#262002'
        },
        'nandor': {
          DEFAULT: '#495E57',
          50: '#A5B9B3',
          100: '#9AB0A9',
          200: '#839F95',
          300: '#6D8C82',
          400: '#5B756C',
          500: '#495E57',
          600: '#303E3A',
          700: '#181F1D',
          800: '#000000',
          900: '#000000'
        },
      },
      fontFamily: {
        'karla': ['Karla', 'serif'],
        'markazi': ['Markazi Text', 'sans']
      },
    },
  },
  plugins: [],
}
