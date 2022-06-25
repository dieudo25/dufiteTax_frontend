module.exports = {
    theme: {
      screens: {
        'xsm': '360px',
        // => @media (min-width: 360px) { ... }

        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'lg2': '1089px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1440px',
        // => @media (min-width: 1280px) { ... }

        '3xl': '2000px',
        // => @media (min-width: 1280px) { ... }

        'max-xsm': {'max': '359px'},
        // => @media (max-width: 640px) { ... }

        'max-sm': {'max': '639px'},
        // => @media (max-width: 640px) { ... }

        'max-mdd': {'max': '767px'},
        // => @media (max-width: 767px) { ... }

        'max-lg': {'max': '1023px'},
        // => @media (max-width: 1024px) { ... }

        'max-xl': {'max': '1279px'},
        // => @media (max-width: 1280px) { ... }
      },

      extend: {
        colors: {
          main: {
            100: '#C23434',
            200: '#9F1616',
            500: '#7C0000',
            800: '#560000',
            900: '#4B272B',
          },
          second: {
            500: '#0764A1',
          },
          dark: {
            500: '#685F60',
            900: '#06456F',
          }
        },

        width: {
          'fit-content': 'fit-content',
        },

        height: {
          'fit-content': 'fit-content',
        },
      },
    }
}