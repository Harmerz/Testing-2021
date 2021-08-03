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
            transitionProperty: {
                height: 'height',
                scale: {
                    '-1': '-1',
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
            fontWeight: {
                semilight: 350,
            },
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
            ringWidth: ['hover'],
            ringColor: ['hover'],
            ringOffsetWidth: ['hover'],
            ringOpacity: ['hover'],
        },
    },
    plugins: [forms({ strategy: 'class' })],
    important: '#page',
};
