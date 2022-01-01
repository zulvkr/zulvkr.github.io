const env = process.env
const { format } = require('date-fns')
const { inspect } = require('util')
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation')
const { minify } = require('html-minifier-terser')
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')

module.exports = config => {
  config.addPassthroughCopy({
    'src/image/': 'image',
    'src/assets/favicon/*': '/',
    'src/assets/manifest.webmanifest': 'manifest.webmanifest'
  })

  config.addFilter('toReadableDate', date => format(date, 'MMMM do, yyyy'))
  
  config.addFilter('class', arr => arr.join(' '))

  config.addPlugin(eleventyNavigationPlugin)

  config.addPlugin(syntaxHighlight)

  config.setUseGitIgnore(false)

  const configObject = {
    dir: {
      input: 'src'
    },
    htmlTemplateEngine: 'njk'
  }

  /**
   * Production only setting
   */

  if (env.NODE_ENV == 'production') {
    config.addTransform('htmlmin', function (content, outputPath) {
      if (outputPath && outputPath.endsWith('.html')) {
        return (minified = minify(content, {
          useShortDoctype: true,
          removeComments: true,
          collapseWhitespace: true
        }))
      }
      return content
    })
  }

  /**
   * Development only setting
   */

  if (env.NODE_ENV !== 'production') {
    config.addFilter('debug', content => `<pre>${inspect(content)}</pre>`)
    config.addPassthroughCopy({
      'src/temp/main.css': 'main.css',
    })
  }

  /* Last line */
  return configObject
}
