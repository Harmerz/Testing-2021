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
                blue: {
                    light: '#0D181A',
                    dark: '#0D181D',
                },
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
            boxShadow: {
                buttonLg: `0 0.6rem 0.65rem rgb(42 42 42 / 0.5)`,
                buttonSm: `0 0.45rem 0.5rem rgb(42 42 42 / 0.5)`,
                displayLg: '0 1.25rem 1rem rgb(42 42 42 / 0.4)',
                displaySm: '0 1rem 0.75rem rgb(42 42 42 / 0.4)',
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
    important: true,
};
