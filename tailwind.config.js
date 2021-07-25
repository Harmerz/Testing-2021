const forms = require('@tailwindcss/forms');

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            screens: {
                portrait: {
                    raw: '(orientation: portrait)'
                }
            }
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: '#0D181D',
            white: '#FFFFFF',
            gray: {
                lighter: '#F1F1F1',
                darker: '#D9D8D3'
            },
            accent: {
                yellow: '#F4A606',
                red: '#DC3647',
                blue: '#348AC5'
            }
        }
    },
    variants: {
        extend: {
            dropShadow: ['hover']
        }
    },
    plugins: [
        forms({ strategy: 'class' })
    ],
    // corePlugins: {
    //     preflight: false
    // },
    important: '#content'
};
