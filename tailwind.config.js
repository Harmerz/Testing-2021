module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        portrait: { raw: '(orientation: portrait)' },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
