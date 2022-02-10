const { spacing, fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true
    },
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './lib/**/*.{js,ts,jsx,tsx}'
    ],
    darkMode: 'class',
    theme: {
        extend: {
            boxShadow: (theme) => ({
                nav: '0 3px 0 #000',
                'nav-dark': `0 3px 0 ${theme('colors.gray.200')}`
            }),
            colors: {
                'soft-black': '#141415',
                cmd: {
                    kbd: {
                        DEFAULT: 'rgba(0 0 0/ .1)',
                        dark: ''
                    }
                }
            },
            fontFamily: {
                sans: ['Inter', ...fontFamily.sans]
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.gray.700'),
                        a: {
                            color: theme('colors.blue.500'),
                            '&:hover': {
                                color: theme('colors.blue.700')
                            },
                            code: { color: theme('colors.blue.400') }
                        },
                        'h2,h3,h4': {
                            'scroll-margin-top': spacing[32]
                        },
                        code: { color: theme('colors.pink.500') },
                        'blockquote p:first-of-type::before': false,
                        'blockquote p:last-of-type::after': false
                    }
                },
                dark: {
                    css: {
                        color: theme('colors.gray.200'),
                        a: {
                            color: theme('colors.blue.400'),
                            '&:hover': {
                                color: theme('colors.blue.600')
                            },
                            code: { color: theme('colors.blue.400') }
                        },
                        blockquote: {
                            borderLeftColor: theme('colors.gray.700'),
                            color: theme('colors.gray.300')
                        },
                        'h2,h3,h4': {
                            color: theme('colors.gray.100'),
                            'scroll-margin-top': spacing[32]
                        },
                        code: { color: theme('colors.pink.400') },
                        hr: { borderColor: theme('colors.gray.700') },
                        ol: {
                            li: {
                                '&:before': { color: theme('colors.gray.500') }
                            }
                        },
                        ul: {
                            li: {
                                '&:before': {
                                    backgroundColor: theme('colors.gray.500')
                                }
                            }
                        },
                        strong: { color: theme('colors.gray.300') },
                        thead: {
                            color: theme('colors.gray.100')
                        },
                        tbody: {
                            tr: {
                                borderBottomColor: theme('colors.gray.700')
                            }
                        }
                    }
                }
            })
        }
    },
    variants: {
        typography: ['dark']
    },
    plugins: [require('@tailwindcss/typography')]
};
