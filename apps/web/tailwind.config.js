const {
  colors,
  colorsList,
} = require('@turbo-blog/web-ui/src/design-system/design-tokens')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/containers/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/web/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  safelist: colorsList.map((color) => 'bg-' + color),
}
