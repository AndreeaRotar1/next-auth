/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin')

const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.jsx',
    './src/**/*.tsx',
    './src/app/**/*.{js,ts,jsx,tsx}', // Asigură-te că ai această cale
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.jsx',
    './src/components/**/*.tsx',
    './components.json',
    './*.{html,js,ts,jsx}',
    './src/**/*.html'
  ],

  theme: {
    fontSize: {
      '12px': '0.75rem',
      '14px': '0.875rem',
      '16px': '1rem',
      '18px': '1.125rem',
      '20px': '1.25rem',
      '24px': '1.5rem',
      '28px': '1.75rem',
      '32px': '2rem',
      '36px': '2.25rem',
      '48px': '3rem',
      '60px': '3.75rem',
      '80px': '5rem'
    },

    lineHeight: {
      '16px': '1rem',
      '20px': '1.25rem',
      '22px': '1.375rem',
      '24px': '1.5rem',
      '32px': '2rem',
      '40px': '2.5rem',
      '48px': '3rem',
      '58px': '3.625rem',
      '82px': '5.125rem'
    },

    fontWeight: {
      100: '100',
      200: '200',
      300: '300',
      400: '400',
      500: '500',
      600: '600',
      700: '700',
      800: '800',
      900: '900'
    },

    screens: {
      sm: '375px',
      md: '768px',
      lg: '1280px'
    },

    fontFamily: {
      satoshi: ['var(--font-satoshi)']
    },

    borderWidth: {
      DEFAULT: '1px',
      xs: '1px',
      sm: '1.5px',
      md: '2px',
      lg: '3px',
      xl: '4px',
      0: '0',
      1: '1px',
      2: '2px',
      3: '3px',
      4: '4px'
    },

    borderRadius: {
      DEFAULT: '1rem', // 16px
      none: '0', // 0
      xs: '0.25rem', // 4px
      sm: '0.5rem', // 8px
      md: '0.75rem', // 12px
      lg: '1rem', // 16px
      xl: '1.25rem', // 20px
      '2xl': '2.5rem', // 40px
      '3xl': '6rem', // 96px
      full: '15rem' // 240px
    },

    outlineWidth: {
      0: '0',
      xs: '0.063rem',
      sm: '0.094rem',
      md: '0.125rem',
      lg: '0.188rem',
      xl: '0.25rem'
    },

    // horizontal offset (x-axis)
    // vertical offset (y axis)
    // blur radius
    // spread radius
    boxShadow: {
      xs: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
      sm: '0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.1)',
      md: '0px 2px 4px -2px rgba(16, 24, 40, 0.06), 0px 4px 8px -2px rgba(16, 24, 40, 0.1)',
      lg: '0px 0px 8px 10px rgba(16, 24, 40, 0.03)',
      xl: '0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)',
      '2xl': '0px 24px 48px -12px rgba(16, 24, 40, 0.18)',
      none: 'none'
    },

    blur: {
      0: '0',
      1: '1px',
      none: '0',
      sm: '4px',
      DEFAULT: '8px',
      md: '8px',
      lg: '12px',
      xl: '20px'
    },

    backgroundOpacity: {
      3: '0.03'
    },

    keyframes: {
      rotateLine1: {
        from: { transform: 'rotate(45deg)' },
        to: { transform: 'rotate(0deg)' }
      },
      rotateLine2: {
        from: { transform: 'rotate(-45deg)' },
        to: { transform: 'rotate(0deg)' }
      },
      rotateLine1Reverse: {
        from: { transform: 'rotate(0deg)' },
        to: { transform: 'rotate(45deg)' }
      },
      rotateLine2Reverse: {
        from: { transform: 'rotate(0deg)' },
        to: { transform: 'rotate(-45deg)' }
      },
      moveBar1: {
        from: { transform: 'translateY(0)' },
        to: { transform: 'translateY(4px)' }
      },
      moveBar2: {
        from: { transform: 'translateY(0)' },
        to: { transform: 'translateY(-4px)' }
      },
      moveBar1Reverse: {
        from: { transform: 'translateY(4px)' },
        to: { transform: 'translateY(0)' }
      },
      moveBar2Reverse: {
        from: { transform: 'translateY(-4px)' },
        to: { transform: 'translateY(0)' }
      },
      enterFromRight: {
        from: { opacity: '0', transform: 'translateX(200px)', height: '0' },
        to: { opacity: '1', transform: 'translateX(0)', height: 'auto' }
      },
      enterFromLeft: {
        from: { opacity: '0', transform: 'translateX(-200px)', height: '0' },
        to: { opacity: '1', transform: 'translateX(0)', height: 'auto' }
      },
      exitToRight: {
        from: { opacity: '1', transform: 'translateX(0)', height: 'auto' },
        to: { opacity: '0', transform: 'translateX(200px)', height: '0' }
      },
      exitToLeft: {
        from: { opacity: '1', transform: 'translateX(0)', height: 'auto' },
        to: { opacity: '0', transform: 'translateX(-200px)', height: '0' }
      },
      scaleIn: {
        from: { opacity: '0', transform: 'rotateX(-10deg) scale(0.9)' },
        to: { opacity: '1', transform: 'rotateX(0deg) scale(1)' }
      },
      scaleOut: {
        from: { opacity: '1', transform: 'rotateX(0deg) scale(1)' },
        to: { opacity: '0', transform: 'rotateX(-10deg) scale(0.95)' }
      },
      fadeIn: {
        from: { opacity: '0' },
        to: { opacity: '1' }
      },
      fadeOut: {
        from: { opacity: '1' },
        to: { opacity: '0' }
      }
    },

    animation: {
      rotateLine1: 'rotateLine1 0.3s forwards',
      rotateLine2: 'rotateLine2 0.3s forwards',
      rotateLine1Reverse: 'rotateLine1Reverse 0.3s forwards',
      rotateLine2Reverse: 'rotateLine2Reverse 0.3s forwards',
      moveBar1: 'moveBar1 0.3s forwards',
      moveBar2: 'moveBar2 0.3s forwards',
      moveBar1Reverse: 'moveBar1Reverse 0.3s forwards',
      moveBar2Reverse: 'moveBar2Reverse 0.3s forwards',
      scaleIn: 'scaleIn 200ms ease',
      scaleOut: 'scaleOut 200ms ease',
      fadeIn: 'fadeIn 200ms ease',
      fadeOut: 'fadeOut 200ms ease',
      enterFromLeft: 'enterFromLeft 250ms ease',
      enterFromRight: 'enterFromRight 250ms ease',
      exitToLeft: 'exitToLeft 250ms ease',
      exitToRight: 'exitToRight 250ms ease'
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFF',
      black: '#02021C',

      'blur-light': 'rgba(255, 255, 255, 0.55)',
      'blur-dark': 'rgba(4, 22, 57, 0.55)',

      primary: {
        100: '#EBF2FF',
        200: '#C6D8F8',
        300: '#98B7ED',
        400: '#377EFB',
        500: '#0356E8',
        600: '#023FA9',
        700: '#023898',
        800: '#081F4A',
        900: '#041639'
      },
      turkoise: {
        100: '#FFFFFF',
        200: '#F5FFFF',
        300: '#CCFFFF',
        400: '#68F8FD',
        500: '#029196',
        600: '#029297',
        700: '#01494B'
      },

      gray: {
        100: '#FAFAFA',
        200: '#E6E6E6',
        300: '#B3B3B3',
        400: '#68F8FD', // schimba
        500: '#029196', // schimba
        600: '#808080',
        700: '#333333'
      },

      'primary-dark': {
        100: '#000714',
        200: '#071A3B',
        300: '#123268',
        400: '#044CC8',
        500: '#186BFB',
        600: '#5392FD',
        700: '#689FFD',
        800: '#B6CCF7',
        900: '#C6D8FB'
      },

      neutral: {
        100: '#F4F5F5',
        200: '#E8EBF0',
        300: '#DDE1E8',
        400: '#D2D7DE',
        500: '#B7BFCC',
        600: '#A5AEBD',
        700: '#97A2B5',
        800: '#7E8A9F',
        900: '#5C6B87'
      },

      'neutral-dark': {
        100: '#0A0B0B',
        200: '#0E1116',
        300: '#171B21',
        400: '#21252C',
        500: '#333B48',
        600: '#434C5B',
        700: '#4A5568',
        800: '#5F6C81',
        900: '#7686A2'
      },

      success: {
        100: '#F4FDF8',
        200: '#EBF7F0',
        500: '#30B56F'
      },

      'success-dark': {
        100: '#020D07',
        200: '#05381B',
        500: '#4BCF88'
      },

      error: {
        100: '#FFF4F4',
        200: '#FBE4E4',
        500: '#E44646'
      },

      'error-dark': {
        100: '#0A0000',
        200: '#330000',
        500: '#BB1B1B'
      },

      warning: {
        100: '#FFF8EE',
        200: '#FFF0DB',
        500: '#EF8F11 '
      },

      'warning-dark': {
        100: '#0F0900',
        200: '#3D2300',
        500: '#EE8E10'
      }
    },

    spacing: {
      0: '0',
      1: '0.25rem', // 4px
      2: '0.5rem', // 8px
      3: '0.75rem', // 12px
      4: '1rem', // 16px
      5: '1.25rem', // 20px
      6: '1.5rem', // 24px
      7: '2rem', // 32px
      8: '2.5rem', // 40px
      9: '4rem', // 64px
      10: '6rem', // 96px
      11: '8rem', // 128px
      12: '10rem', // 160px
      13: '12rem', // 192px
      14: '15rem' // 240px
    }
  },

  // Trying to figure out how to add custom classes that are autocompleted and responsive
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('@tailwindcss/forms')({
      strategy: 'base'
    }),

    plugin(function ({ addComponents, theme }) {
      // README
      // These inputs classes are just an example
      // Adjust them based on figma design
      const inputs = {
        'form-wrapper': {},

        'form-label': {},

        '.form-input': {
          backgroundColor: theme('colors.white'),
          borderColor: theme('colors.neutral.400'),
          borderWidth: theme('borderWidth.1'),
          color: theme('colors.black'),
          fontSize: theme('fontSize.16px'),
          lineHeight: theme('lineHeight.24px'),
          padding: `${theme('spacing.3')} ${theme('spacing.4')}`,
          borderRadius: '4px',
          '&:focus': {
            borderColor: theme('colors.primary.500'),
            outline: 'none'
          }
        },

        'form-input-dark': {},

        'input-input-white': {}
      }

      const responsiveText = {
        '.text-2xs-res': {
          fontSize: theme('fontSize.12px'),
          lineHeight: theme('lineHeight.16px')
        },

        '.text-xs-res': {
          fontSize: theme('fontSize.14px'),
          lineHeight: theme('lineHeight.20px')
        },

        '.text-sm-res': {
          fontSize: theme('fontSize.14px'),
          lineHeight: theme('lineHeight.20px'),
          '@screen md': {
            fontSize: theme('fontSize.16px'),
            lineHeight: theme('lineHeight.22px')
          }
        },

        '.text-md-res': {
          fontSize: theme('fontSize.16px'),
          lineHeight: theme('lineHeight.22px'),
          '@screen lg': {
            fontSize: theme('fontSize.18px'),
            lineHeight: theme('lineHeight.24px')
          }
        },

        '.text-lg-res': {
          fontSize: theme('fontSize.18px'),
          lineHeight: theme('lineHeight.24px'),
          '@screen lg': {
            fontSize: theme('fontSize.20px'),
            lineHeight: theme('lineHeight.24px')
          }
        },

        '.text-xl-res': {
          fontSize: theme('fontSize.18px'),
          lineHeight: theme('lineHeight.24px'),
          '@screen md': {
            fontSize: theme('fontSize.20px'),
            lineHeight: theme('lineHeight.24px')
          },
          '@screen lg': {
            fontSize: theme('fontSize.24px'),
            lineHeight: theme('lineHeight.32px')
          }
        },

        '.text-2xl-res': {
          fontSize: theme('fontSize.20px'),
          lineHeight: theme('lineHeight.24px'),
          '@screen md': {
            fontSize: theme('fontSize.24px'),
            lineHeight: theme('lineHeight.32px')
          },
          '@screen lg': {
            fontSize: theme('fontSize.32px'),
            lineHeight: theme('lineHeight.40px')
          }
        }
      }

      const responsiveButton = {
        '.btn-sm': {
          padding: `${theme('spacing.2')} ${theme('spacing.3')}`
        },
        '.btn-md': {
          padding: `${theme('spacing.3')} ${theme('spacing.5')}`
        },
        '.btn-lg': {
          padding: `${theme('spacing.4')} ${theme('spacing.5')}`
        }
      }

      const responsiveHeading = {
        '.heading-6-res': {
          fontWeight: theme('fontWeight.500'),
          fontSize: theme('fontSize.18px'),
          lineHeight: theme('lineHeight.24px'),
          '@screen md': {},
          '@screen lg': {
            fontSize: theme('fontSize.24px'),
            lineHeight: theme('lineHeight.32px')
          }
        },

        '.heading-5-res': {
          fontWeight: theme('fontWeight.500'),
          fontSize: theme('fontSize.24px'),
          lineHeight: theme('lineHeight.32px'),
          '@screen md': {},
          '@screen lg': {
            fontSize: theme('fontSize.28px'),
            lineHeight: theme('lineHeight.40px')
          }
        },

        '.heading-4-res': {
          fontWeight: theme('fontWeight.500'),
          fontSize: theme('fontSize.24px'),
          lineHeight: theme('lineHeight.32px'),
          '@screen md': {
            fontSize: theme('fontSize.28px'),
            lineHeight: theme('lineHeight.40px')
          },
          '@screen lg': {
            fontSize: theme('fontSize.32px'),
            lineHeight: theme('lineHeight.40px')
          }
        },

        '.heading-3-res': {
          fontWeight: theme('fontWeight.500'),
          fontSize: theme('fontSize.28px'),
          lineHeight: theme('lineHeight.40px'),
          '@screen md': {
            fontSize: theme('fontSize.32px'),
            lineHeight: theme('lineHeight.40px')
          },
          '@screen lg': {
            fontSize: theme('fontSize.48px'),
            lineHeight: theme('lineHeight.58px')
          }
        },

        '.heading-2-res': {
          fontWeight: theme('fontWeight.500'),
          fontSize: theme('fontSize.36px'),
          lineHeight: theme('lineHeight.40px'),
          '@screen md': {
            fontSize: theme('fontSize.48px'),
            lineHeight: theme('lineHeight.58px')
          },
          '@screen lg': {
            fontSize: theme('fontSize.60px'),
            lineHeight: theme('lineHeight.72px')
          }
        },

        '.heading-1-res': {
          fontWeight: theme('fontWeight.500'),
          fontSize: theme('fontSize.48px'),
          lineHeight: theme('lineHeight.58px'),
          '@screen md': {
            fontSize: theme('fontSize.60px'),
            lineHeight: theme('lineHeight.72px')
          },
          '@screen lg': {
            fontSize: theme('fontSize.80px'),
            lineHeight: theme('lineHeight.82px')
          }
        }
      }

      // Specific spacing mappings based on breakpoints from Figma
      const spacingMappings = [
        { lg: 'spacing.0', md: 'spacing.0', base: 'spacing.0' },
        { lg: 'spacing.3', md: 'spacing.2', base: 'spacing.1' },
        { lg: 'spacing.4', md: 'spacing.3', base: 'spacing.2' },
        { lg: 'spacing.5', md: 'spacing.4', base: 'spacing.3' },
        { lg: 'spacing.6', md: 'spacing.5', base: 'spacing.4' },
        { lg: 'spacing.7', md: 'spacing.6', base: 'spacing.5' },
        { lg: 'spacing.8', md: 'spacing.7', base: 'spacing.6' },
        { lg: 'spacing.9', md: 'spacing.8', base: 'spacing.7' },
        { lg: 'spacing.10', md: 'spacing.9', base: 'spacing.8' },
        { lg: 'spacing.11', md: 'spacing.10', base: 'spacing.9' },
        { lg: 'spacing.12', md: 'spacing.11', base: 'spacing.10' },
        { lg: 'spacing.13', md: 'spacing.12', base: 'spacing.11' },
        { lg: 'spacing.14', md: 'spacing.13', base: 'spacing.12' }
      ]

      // Compound and uniform properties
      const expandedPropMap = {
        pt: ['paddingTop'],
        pr: ['paddingRight'],
        pb: ['paddingBottom'],
        pl: ['paddingLeft'],
        px: ['paddingLeft', 'paddingRight'],
        py: ['paddingTop', 'paddingBottom'],
        p: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
        mt: ['marginTop'],
        mr: ['marginRight'],
        mb: ['marginBottom'],
        ml: ['marginLeft'],
        mx: ['marginLeft', 'marginRight'],
        my: ['marginTop', 'marginBottom'],
        m: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
        gap: ['gap']
      }

      const responsiveSpacing = {}

      // Generate classes for each property group
      Object.keys(expandedPropMap).forEach((propGroup) => {
        spacingMappings.forEach((mapping, index) => {
          // e.g., .px-3-res, py-3-res, pt-3-res, gap-3-res
          const className = `.${propGroup}-${index}-res`

          const baseStyles = expandedPropMap[propGroup].reduce((acc, property) => {
            acc[property] = theme(mapping.base)
            return acc
          }, {})

          const mdStyles = expandedPropMap[propGroup].reduce((acc, property) => {
            acc[property] = theme(mapping.md)
            return acc
          }, {})

          const lgStyles = expandedPropMap[propGroup].reduce((acc, property) => {
            acc[property] = theme(mapping.lg)
            return acc
          }, {})

          responsiveSpacing[className] = {
            ...baseStyles,
            '@screen md': mdStyles,
            '@screen lg': lgStyles
          }
        })
      })

      const newComponents = {
        ...inputs,
        ...responsiveText,
        ...responsiveHeading,
        ...responsiveSpacing,
        ...responsiveButton
      }

      addComponents(newComponents)
    }),
    plugin(({ matchUtilities }) => {
      matchUtilities({
        perspective: (value) => ({
          perspective: value
        })
      })
    })
  ]
}
export default config
