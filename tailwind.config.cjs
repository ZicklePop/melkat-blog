module.exports = {
  content: ['./public/**/*.html', './src/**/*.{astro,js,jsx,ts,tsx}'],
  plugins: [
    require('@tailwindcss/typography'),
  ],
  theme: {
    extend: {
      colors: {
        'hot-pink': {
          '50': '#fef1f7',
          '100': '#fee5f2',
          '200': '#ffcbe6',
          '300': '#ffa1d0',
          '400': '#ff52a3',
          '500': '#fa3a8e',
          '600': '#ea1869',
          '700': '#cc0a50',
          '800': '#a80c42',
          '900': '#8c0f3a',
        },
        'persimmon': {
          '50': '#fff1f1',
          '100': '#ffe1e1',
          '200': '#ffc7c7',
          '300': '#ffa0a0',
          '400': '#ff5757',
          '500': '#f83b3b',
          '600': '#e51d1d',
          '700': '#c11414',
          '800': '#a01414',
          '900': '#841818',
        },
        'cerulean': {
          '50': '#f0f9ff',
          '100': '#e0f3fe',
          '200': '#b9e8fe',
          '300': '#7cd6fd',
          '400': '#36c3fa',
          '500': '#0caceb',
          '600': '#0096db',
          '700': '#016da3',
          '800': '#065c86',
          '900': '#0b4d6f',
        },
        'limeade': {
          '50': '#f9ffe5',
          '100': '#efffc7',
          '200': '#deff95',
          '300': '#c6fe58',
          '400': '#aef526',
          '500': '#8edc06',
          '600': '#65a300',
          '700': '#528506',
          '800': '#43690b',
          '900': '#38580f',
        },
      },
      typography: ({ theme }) => ({
        melkat: {
          css: {
            '--tw-prose-links': theme('colors.cerulean[500]'),
            '--tw-prose-invert-links': theme('colors.cerulean[500]'),
          }
        }
      }),
    },
  },
}
