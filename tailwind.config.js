const forms = require('@tailwindcss/forms');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        portrait: { raw: '(orientation: portrait)' },
      },
      colors: {
        brand: {
          dark: '#0C181D',
          light: '#FFFFFF',
        },
      },
    },
  },
  variants: {
    extend: {
      dropShadow: ['hover'],
    },
  },
  plugins: [
    forms({
      strategy: 'class',
    }),
  ],
};
