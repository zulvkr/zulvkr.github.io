const env = process.env
const { format } = require('date-fns')
const { inspect } = require('util')
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation')
const { minify } = require('html-minifier-terser')

module.exports = config => {
  config.addPassthroughCopy({
    'src/image/': 'image',
    'src/assets/favicon/*': '/',
    'src/manifest.webmanifest': 'manifest.webmanifest'
  })

  config.addFilter('toReadableDate', date => format(date, 'MMMM do, yyyy'))

  config.addFilter('debug', content => `<pre>${inspect(content)}</pre>`)

  config.addPlugin(eleventyNavigationPlugin)

  config.setUseGitIgnore(false)

  config.addTransform('htmlmin', function (content, outputPath) {
    if (outputPath && outputPath.endsWith('.html')) {
      return minified = minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      })
    }
    return content
  })

  const configObject = {
    dir: {
      input: 'src'
    },
    htmlTemplateEngine: 'njk'
  }

  /**
   * Development only setting
   */

  if (env.NODE_ENV !== 'production') {
    config.addPassthroughCopy({
      'src/temp/main.css': 'main.css',
      'src/assets/red.css': 'red.css'
    })
  }

  /* Last line */
  return configObject
}
