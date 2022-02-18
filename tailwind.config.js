const colors = require('tailwindcss/colors');
module.exports = {
  important: true,
  content: [
    "components/**/*.{js,vue,ts}",
    "layouts/**/*.vue",
    "pages/**/*.vue",
    "plugins/**/*.{js,ts}",
    "nuxt.config.{js,ts}"
  ],
  media: false, // or 'media' or 'class'
  theme: {
    colors: {
      green: '#5bbb25',
      blue: '#3a5998',
      orange: '#f07e2e',
      themeGray: '#f5f5f5',
      gray: colors.gray,
      white: colors.white,
      lavender: '#e9e9ea',
      beige: '#e9fae2',
    },
    extend: {
      inset: {
        '-16': '-4rem'
      },
      backgroundImage: {
        'faded-fingerPrint': 'url("/img/fade_Fingerprint.png")',
        'finger-print': 'url("/img/fingerprint.png")'
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('daisyui')
  ],
  daisyui: {
    styled: true,
    themes: false,
    rtl: false,
  },
}
