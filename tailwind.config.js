/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#FFFFFF',
          200: '#F6F6F6',
          300: '#EBEBEB',
          400: '#E3E3E3',
          500: '#DCDCDC',
          600: '#A1A1A1',
          650: '#707070',
          700: '#595857',
          800: '#444444',
          900: '#333333',
          1000: '#000000',
        },
        brand: '#EB442A',
        point: '#FFBB00',
        dim: {
          70: 'rgba(0, 0, 0, 0.7)',
          40: 'rgba(0, 0, 0, 0.4)',
        },
      },
    },
  },
  plugins: [],
}

