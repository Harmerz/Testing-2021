const forms = require('@tailwindcss/forms');

module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            screens: {
                portrait: {
                    raw: '(orientation: portrait)'
                }
            },
            zIndex: {
                '-1': '-1'
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
        },
        fontFamily: {
            'display': ['Mont', 'system-ui', 'sans-serif'],
            'display-sm': ['Mont Book', 'system-ui', 'sans-serif'],
            'body': ['Lato', 'sans-serif']
        }
    },
    variants: {
        extend: {
            dropShadow: ['hover'],
            backgroundOpacity: ['active']
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
