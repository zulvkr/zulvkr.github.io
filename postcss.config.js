const cssnano = require('cssnano')
const autoprefixer = require('autoprefixer')
const tailwindcss = require('tailwindcss')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  plugins: [
    tailwindcss,
    ...(isProduction ? [
      autoprefixer,
      cssnano({ preset: 'default' })
    ] : []),
  ]
}
