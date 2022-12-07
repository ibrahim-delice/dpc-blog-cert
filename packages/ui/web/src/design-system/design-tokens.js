const tailwindDefaultColors = require('tailwindcss/colors')

const colors = {
  primary: {
    default: tailwindDefaultColors.indigo[700],
    dark: tailwindDefaultColors.indigo[900],
    medium: tailwindDefaultColors.indigo[500],
    light: tailwindDefaultColors.indigo[300],
  },
  secondary: {
    default: tailwindDefaultColors.gray[700],
    dark: tailwindDefaultColors.gray[900],
    medium: tailwindDefaultColors.gray[500],
    light: tailwindDefaultColors.gray[300],
  },
  accent: {
    default: tailwindDefaultColors.purple[500],
    light: tailwindDefaultColors.purple[300],
    disabled: tailwindDefaultColors.purple[100],
  },
}

const colorsList = Object.keys(colors)
  .map((key) =>
    typeof colors[key] === 'string'
      ? key
      : Object.keys(colors[key]).map((subkey) => key + '-' + subkey),
  )
  .flat()

module.exports = { colors, colorsList }
