const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin')

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-tailwind-dark-mode',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
          postcssOptions: {
            plugins: ['tailwindcss', 'autoprefixer'],
          },
        },
      },
    },
  ],
  framework: '@storybook/react',
  typescript: {
    check: true,
    reactDocgen: 'react-docgen-typescript',
  },
}
