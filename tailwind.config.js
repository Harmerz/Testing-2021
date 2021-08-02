const forms = require('@tailwindcss/forms');

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            screens: {
                portrait: {
                    raw: '(orientation: portrait)',
                },
            },
            zIndex: {
                '-1': '-1',
            },
            fontWeight: {
                semilight: 350,
            },
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: '#0D181D',
            white: '#FFFFFF',
            gray: {
                lighter: '#F1F1F1',
                darker: '#D9D8D3',
            },
            accent: {
                yellow: {
                    dark: '#F4A606',
                    DEFAULT: '#FFDE51',
                    light: '#FFEFA9',
                },
                red: '#DC3647',
                blue: {
                    dark: '#1B323B',
                    DEFAULT: '#348AC5',
                },
            },
        },
        fontFamily: {
            display: ['Mont', 'system-ui', 'sans-serif'],
            body: ['Lato', 'system-ui', 'sans-serif'],
        },
    },
    variants: {
        extend: {
            dropShadow: ['hover'],
            backgroundOpacity: ['active'],
            filter: ['hover', 'active'],
            brightness: ['hover', 'active'],
            transform: ['group-hover', 'active'],
            translate: ['group-hover', 'active'],
        },
    },
    plugins: [forms({ strategy: 'class' })],
    important: '#page',
};
