module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        width: 'width',
      },
      transitionDuration: {
        0: '0ms',
        5000: '5000ms',
        10000: '10000ms',
        15000: '15000ms',
        20000: '20000ms',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
